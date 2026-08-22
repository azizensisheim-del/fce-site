import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { canAccess } from "../lib/access-control.ts";

async function request(pathname, accept = "text/html") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the FCE homepage", async () => {
  const response = await request("/");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Football Club/);
  assert.match(html, /D[’']Ensisheim/);
  assert.match(html, /Quatre pôles\. Un seul club\./);
  assert.match(html, /Calendriers des équipes/);
  assert.match(html, /href="https:\/\/animations-fce\.online"/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("exposes a no-cache health endpoint", async () => {
  const response = await request("/api/health", "application/json");
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.deepEqual(await response.json(), {
    status: "ok",
    service: "fce-site",
  });
});

test("explains member access without exposing public registration", async () => {
  const response = await request("/espace");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Espace membres/);
  assert.match(html, /Aucune inscription publique/);
  assert.match(html, /Responsable de pôle/);
  assert.match(html, /Continuer comme visiteur/);
});

test("keeps sign-in disabled until the identity service is connected", async () => {
  const response = await request("/espace/connexion");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Activation prochaine/);
  assert.match(html, /adresse e-mail enregistrée par le club/i);
  assert.match(html, /disabled/);
});

test("lets a pole manager publish directly only in an assigned pole", () => {
  const manager = {
    userId: "responsable-animations",
    role: "pole_manager",
    poles: ["animations"],
    active: true,
  };

  assert.equal(canAccess(manager, { action: "publish", pole: "animations" }), true);
  assert.equal(canAccess(manager, { action: "publish", pole: "sportif" }), false);
  assert.equal(canAccess({ ...manager, active: false }, { action: "publish", pole: "animations" }), false);
  assert.equal(canAccess({ ...manager, userId: null, role: "visitor" }, { action: "publish", pole: "animations" }), false);
});

test("renders the event composer without enabling anonymous publication", async () => {
  const response = await request("/espace/evenements/nouveau");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Composer un événement/);
  assert.match(html, /Affiche principale/);
  assert.match(html, /Galerie photos/);
  assert.match(html, /Lien de la vidéo/);
  assert.match(html, /Publication directe/);
  assert.match(html, /Connexion requise pour publier/);
  assert.match(html, /disabled/);
});

test("keeps the KVM 2 deployment isolated from n8n", async () => {
  const [nextConfig, dockerfile, compose, traefik] = await Promise.all([
    readFile(new URL("../next.config.ts", import.meta.url), "utf8"),
    readFile(new URL("../deploy/Dockerfile", import.meta.url), "utf8"),
    readFile(new URL("../deploy/compose.yaml", import.meta.url), "utf8"),
    readFile(
      new URL("../deploy/compose.hostinger-traefik.yaml", import.meta.url),
      "utf8",
    ),
  ]);

  assert.match(nextConfig, /output:\s*["']standalone["']/);
  assert.match(dockerfile, /FROM node:22-alpine AS runtime/);
  assert.match(dockerfile, /USER fce/);
  assert.match(compose, /127\.0\.0\.1/);
  assert.match(compose, /FCE_MEMORY_LIMIT:-1g/);
  assert.match(compose, /FCE_CPU_LIMIT:-0\.75/);
  assert.match(compose, /SITE_URL: "https:\/\/\$\{FCE_HOST:-animations-fce\.fr\}"/);
  assert.doesNotMatch(compose, /(?:^|:)\s*["']?(?:80|443):/m);
  assert.match(traefik, /traefik-proxy/);
  assert.match(traefik, /loadbalancer\.server\.port=3000/);
  assert.match(traefik, /tls\.certresolver=letsencrypt/);
  assert.match(traefik, /fce-site-www-redirect/);
});
