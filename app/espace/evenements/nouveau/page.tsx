import Link from "next/link";
import EventComposer from "./event-composer";

export default function NewEventPage() {
  return (
    <main className="event-editor-page">
      <header className="event-editor-header section-shell">
        <Link className="brand" href="/" aria-label="Retour au site du FC Ensisheim">
          <img src="/logo-fce.png" alt="Blason du Football Club d’Ensisheim" />
          <span><strong>FC Ensisheim</strong><small>Édition des événements</small></span>
        </Link>
        <Link className="member-back" href="/espace">Retour à l’espace membres</Link>
      </header>

      <section className="event-editor-intro">
        <div className="section-shell event-editor-title">
          <div>
            <p className="section-kicker">Module responsable de pôle</p>
            <h1>Composer un événement.</h1>
          </div>
          <p>Ajoutez les informations, l’affiche, les photos et une vidéo. Après connexion, le bouton de publication sera disponible directement, sans validation de l’administrateur.</p>
        </div>
      </section>

      <EventComposer />
    </main>
  );
}
