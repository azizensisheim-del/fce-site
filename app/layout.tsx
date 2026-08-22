import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "animations-fce.fr";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const requestOrigin = `${protocol}://${host}`;
  const siteOrigin = process.env.SITE_URL?.replace(/\/+$/, "") ?? requestOrigin;
  const socialImage = `${siteOrigin}/og.png`;

  return {
    title: "Football Club d’Ensisheim — Site officiel",
    description: "Le site officiel du Football Club d’Ensisheim : équipes, actualités, événements et vie du club.",
    icons: {
      icon: "/logo-fce.png",
      shortcut: "/logo-fce.png",
    },
    alternates: {
      canonical: siteOrigin,
    },
    openGraph: {
      title: "Football Club d’Ensisheim",
      description: "Un club. Une ville. Une passion.",
      images: [{ url: socialImage, width: 1200, height: 630, alt: "Football Club d’Ensisheim" }],
      type: "website",
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title: "Football Club d’Ensisheim",
      description: "Un club. Une ville. Une passion.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
