import Link from "next/link";

export default function SignInPage() {
  return (
    <main className="signin-page">
      <section className="signin-brand-panel">
        <Link className="signin-brand" href="/"><img src="/logo-fce.png" alt="Blason du Football Club d’Ensisheim" /><span>Football Club<br />d’Ensisheim</span></Link>
        <div><p className="section-kicker light">Espace membres</p><h1>Le collectif, bien organisé.</h1><p>Un seul accès pour retrouver les informations utiles à votre rôle et à votre pôle.</p></div>
        <span className="signin-season">Saison 2026–2027</span>
      </section>
      <section className="signin-form-panel">
        <div className="signin-box">
          <Link className="signin-back" href="/espace">← Comprendre les accès</Link>
          <p className="section-kicker">Connexion sécurisée</p><h2>Bienvenue.</h2>
          <p className="signin-intro">Utilisez l’adresse e-mail enregistrée par le club.</p>
          <form className="signin-form" aria-describedby="signin-status">
            <label htmlFor="email">Adresse e-mail</label>
            <input id="email" name="email" type="email" autoComplete="email" placeholder="prenom.nom@exemple.fr" disabled />
            <label htmlFor="password">Mot de passe</label>
            <input id="password" name="password" type="password" autoComplete="current-password" placeholder="Votre mot de passe" disabled />
            <div className="signin-options"><label><input type="checkbox" disabled /> Rester connecté</label><span>Mot de passe oublié ?</span></div>
            <button type="button" disabled>Se connecter <span>→</span></button>
          </form>
          <div className="signin-status" id="signin-status" role="status">
            <strong>Activation prochaine</strong>
            <p>Le parcours est prêt. La connexion sera activée après validation de la liste des membres et du service d’identité.</p>
          </div>
          <p className="signin-help">Vous n’avez pas de compte ? Contactez un administrateur du FCE. L’inscription libre n’est pas proposée.</p>
        </div>
      </section>
    </main>
  );
}
