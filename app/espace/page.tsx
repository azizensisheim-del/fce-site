import Link from "next/link";

const permissions = [
  { role: "Visiteur", detail: "Accès public, sans compte", rights: "Consulter les informations publiées du club.", tone: "public" },
  { role: "Responsable de pôle", detail: "Compte créé sur invitation", rights: "Consulter l’interne et gérer les contenus de son ou ses pôles.", tone: "manager" },
  { role: "Administrateur", detail: "Accès nominatif renforcé", rights: "Gérer tous les pôles, les membres, les droits et les publications.", tone: "admin" },
] as const;

export default function MemberAccessPage() {
  return (
    <main className="member-access">
      <header className="member-header section-shell">
        <Link className="brand" href="/" aria-label="Retour au site du FC Ensisheim">
          <img src="/logo-fce.png" alt="Blason du Football Club d’Ensisheim" />
          <span><strong>FC Ensisheim</strong><small>Espace membres</small></span>
        </Link>
        <Link className="member-back" href="/">Retour au site public <span>↗</span></Link>
      </header>
      <section className="access-hero">
        <div className="section-shell access-hero-grid">
          <div>
            <p className="section-kicker light">Un accès simple, des droits précis</p>
            <h1>L’espace de travail du club.</h1>
            <p>Les visiteurs consultent librement le site. Les responsables et administrateurs se connectent avec un compte créé par le club.</p>
            <div className="access-actions">
              <Link className="button button-light" href="/espace/connexion">Connexion membre <span>→</span></Link>
              <Link className="access-public-link" href="/">Continuer comme visiteur</Link>
            </div>
          </div>
          <aside className="access-security-card">
            <span>Principe de sécurité</span><strong>Aucune inscription publique.</strong>
            <p>Chaque accès est nominatif, limité à son rôle et révocable par l’administrateur.</p>
          </aside>
        </div>
      </section>
      <section className="section-shell access-roles" aria-labelledby="roles-title">
        <div className="access-section-heading">
          <div><p className="section-kicker">Qui peut faire quoi ?</p><h2 id="roles-title">Trois niveaux d’accès.</h2></div>
          <p>Les autorisations sont contrôlées à chaque action, y compris si une personne tente d’accéder directement à une adresse privée.</p>
        </div>
        <div className="access-role-grid">
          {permissions.map((permission, index) => (
            <article className={`access-role-card ${permission.tone}`} key={permission.role}>
              <span className="role-index">0{index + 1}</span><h3>{permission.role}</h3>
              <p className="role-detail">{permission.detail}</p><p>{permission.rights}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="access-invite">
        <div className="section-shell access-invite-grid">
          <div><p className="section-kicker light">Première connexion</p><h2>Une invitation, puis votre propre mot de passe.</h2></div>
          <ol>
            <li><span>1</span><p><strong>Le club crée le compte</strong> à partir du nom, de l’e-mail, du rôle et du pôle.</p></li>
            <li><span>2</span><p><strong>Le membre reçoit un lien personnel</strong> valable 48 heures, au lieu d’un mot de passe envoyé par e-mail.</p></li>
            <li><span>3</span><p><strong>Il choisit son mot de passe</strong> puis accède uniquement aux espaces autorisés.</p></li>
          </ol>
        </div>
      </section>
    </main>
  );
}
