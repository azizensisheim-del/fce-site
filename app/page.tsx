const poles = [
  {
    number: "01",
    title: "Sportif",
    text: "Équipes, catégories, encadrement, calendriers et résultats : toute la vie sportive du club au même endroit.",
    link: "Découvrir le pôle",
  },
  {
    number: "02",
    title: "Technique",
    text: "Installations, entretien des terrains, tonte, traçage et plannings des interventions.",
    link: "Voir les installations",
  },
  {
    number: "03",
    title: "Animations",
    text: "Les rendez-vous qui font vivre le club, les inscriptions et les besoins en bénévoles.",
    link: "Voir les événements",
  },
  {
    number: "04",
    title: "Buvette",
    text: "Club House, permanences et organisation des bénévoles les jours de match et d’événement.",
    link: "Découvrir le Club House",
  },
];

const teams = ["École de football", "Jeunes", "Seniors", "Vétérans"];

const buvettePlanning = [
  {
    day: "Sam. 12 sept.",
    time: "13 h 30 — 18 h",
    event: "Match Seniors",
    type: "Match",
    volunteers: "Marie · Thomas",
    need: 0,
  },
  {
    day: "Mer. 16 sept.",
    time: "16 h — 19 h",
    event: "Entraînement des jeunes",
    type: "Entraînement",
    volunteers: "Sophie",
    need: 1,
  },
  {
    day: "Sam. 19 sept.",
    time: "9 h — 18 h",
    event: "Journée portes ouvertes",
    type: "Animation",
    volunteers: "Équipe à constituer",
    need: 4,
  },
];

export default function Home() {
  return (
    <main>
      <div className="preview-notice">
        <span>Maquette du futur site officiel</span>
        <span>Contenus et dates à confirmer</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Accueil du FC Ensisheim">
          <img src="/logo-fce.png" alt="Blason du Football Club d’Ensisheim" />
          <span><strong>FC Ensisheim</strong><small>Depuis 1930</small></span>
        </a>

        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#club">Le club</a>
          <a href="#equipes">Équipes</a>
          <a href="#actualites">Actualités</a>
          <a href="#poles">Nos pôles</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#agenda">Voir l’agenda</a>

        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu">Menu</summary>
          <nav aria-label="Navigation mobile">
            <a href="#club">Le club</a>
            <a href="#equipes">Équipes</a>
            <a href="#actualites">Actualités</a>
            <a href="#poles">Nos pôles</a>
            <a href="#buvette">Buvette</a>
            <a href="#agenda">Agenda</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-watermark" aria-hidden="true">FCE</div>
        <div className="hero-slashes" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-crest">
          <img src="/logo-fce.png" alt="Blason du Football Club d’Ensisheim" />
          <div className="hero-crest-meta">
            <span>Fondé en</span><strong>1930</strong><span>Environ 350 licenciés</span>
          </div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Le football au cœur de la ville</p>
          <h1><span>Football Club</span><br /><em>D’Ensisheim</em></h1>
          <p className="hero-motto">Un club. Une ville. Une passion.</p>
          <p className="hero-intro">
            Depuis 1930, le FCE rassemble toutes les générations autour du football,
            de l’engagement et de la convivialité.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#club">Découvrir le club <span>→</span></a>
            <a className="text-link" href="#equipes">Nos équipes <span>↗</span></a>
          </div>
        </div>

        <div className="hero-scoreboard" aria-label="Prochain rendez-vous">
          <p>Prochain rendez-vous</p>
          <strong>Le calendrier arrive bientôt</strong>
          <span>Les matchs et événements seront publiés ici.</span>
        </div>
      </section>

      <section className="club-intro section-shell" id="club">
        <div>
          <p className="section-kicker">Le club</p>
          <h2>Plus qu’un maillot, une histoire collective.</h2>
        </div>
        <div className="intro-copy">
          <p>
            Le Football Club d’Ensisheim est un club amateur ancré dans sa ville.
            Joueurs, éducateurs, dirigeants, familles et bénévoles font vivre le FCE au quotidien.
          </p>
          <a className="arrow-link" href="#actualites">Notre histoire <span>→</span></a>
        </div>
        <div className="stat-card">
          <span className="stat-year">1930</span>
          <span className="stat-caption">Année de fondation</span>
          <div className="stat-stripes" aria-hidden="true"><i /><i /><i /></div>
        </div>
      </section>

      <section className="teams-section" id="equipes">
        <div className="section-shell teams-heading">
          <div>
            <p className="section-kicker light">Sur tous les terrains</p>
            <h2>Nos équipes</h2>
          </div>
          <p>Retrouvez bientôt les catégories, les encadrants, les calendriers et les résultats de la saison.</p>
        </div>
        <div className="section-shell team-list">
          {teams.map((team, index) => (
            <a href="#contact" className="team-row" key={team}>
              <span>0{index + 1}</span><strong>{team}</strong><em>Informations à venir</em><b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="poles-section section-shell" id="poles">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">La force du collectif</p>
            <h2>Quatre pôles. Un seul club.</h2>
          </div>
          <p>Une organisation claire pour mieux partager les informations et faire avancer chaque projet du FCE.</p>
        </div>

        <div className="pole-grid">
          {poles.map((pole) => (
            <article className="pole-card" key={pole.number}>
              <div className="pole-number">{pole.number}</div>
              <h3>{pole.title}</h3>
              <p>{pole.text}</p>
              <a href={pole.title === "Buvette" ? "#buvette" : "#contact"}>{pole.link} <span>→</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="buvette-section" id="buvette">
        <div className="section-shell">
          <div className="buvette-heading">
            <div>
              <p className="section-kicker">Pôle Buvette</p>
              <h2>Le planning des permanences.</h2>
            </div>
            <div className="buvette-intro">
              <p>Une vue simple pour savoir qui ouvre le Club House, à quelle heure et pour quel rendez-vous.</p>
              <span>Exemple de fonctionnement · données fictives</span>
            </div>
          </div>

          <div className="planning-board" aria-label="Exemple de planning des bénévoles de la buvette">
            <div className="planning-head" aria-hidden="true">
              <span>Jour &amp; horaire</span>
              <span>Événement</span>
              <span>Bénévoles attribués</span>
              <span>Besoin</span>
            </div>

            {buvettePlanning.map((slot) => (
              <article className="planning-row" key={`${slot.day}-${slot.event}`}>
                <div className="planning-date">
                  <strong>{slot.day}</strong>
                  <span>{slot.time}</span>
                </div>
                <div className="planning-event">
                  <span className="event-type">{slot.type}</span>
                  <strong>{slot.event}</strong>
                </div>
                <div className="planning-volunteers">
                  <span className="mobile-label">Bénévoles attribués</span>
                  <strong>{slot.volunteers}</strong>
                </div>
                <div className="planning-need">
                  {slot.need === 0 ? (
                    <span className="need-badge complete">Équipe complète</span>
                  ) : (
                    <span className="need-badge open">{slot.need} bénévole{slot.need > 1 ? "s" : ""} recherché{slot.need > 1 ? "s" : ""}</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="planning-note">
            <span aria-hidden="true">+</span>
            <p>Dans une prochaine étape, le responsable Buvette pourra ajouter une permanence et affecter les bénévoles depuis son espace privé.</p>
          </div>
        </div>
      </section>

      <section className="news-section" id="actualites">
        <div className="section-shell">
          <div className="section-heading-row news-heading">
            <div><p className="section-kicker light">Au cœur du FCE</p><h2>Actualités</h2></div>
            <a className="arrow-link light-link" href="#contact">Toutes les actualités <span>→</span></a>
          </div>

          <div className="news-grid">
            <article className="featured-news">
              <div className="news-visual pitch-pattern"><span>FCE</span></div>
              <div className="news-content">
                <p className="news-meta">Vie du club · À venir</p>
                <h3>Le nouveau site du FCE prend forme</h3>
                <p>Un futur espace pour suivre le club, ses équipes, ses événements et tous ceux qui le font vivre.</p>
                <a href="#contact" aria-label="Lire l’actualité sur le nouveau site">Lire l’article →</a>
              </div>
            </article>

            <article className="small-news">
              <div className="small-news-date"><strong>—</strong><span>À venir</span></div>
              <div><p className="news-meta">Sportif</p><h3>Les calendriers de la saison seront publiés prochainement</h3></div>
              <a href="#equipes" aria-label="Voir les équipes">↗</a>
            </article>

            <article className="small-news">
              <div className="small-news-date"><strong>—</strong><span>À venir</span></div>
              <div><p className="news-meta">Animations</p><h3>Retrouvez bientôt les prochains rendez-vous du club</h3></div>
              <a href="#agenda" aria-label="Voir l’agenda">↗</a>
            </article>
          </div>
        </div>
      </section>

      <section className="agenda-section section-shell" id="agenda">
        <div className="agenda-card">
          <div><p className="section-kicker light">Agenda du club</p><h2>Le prochain rendez-vous.</h2></div>
          <div className="agenda-message">
            <span className="agenda-icon" aria-hidden="true">+</span>
            <p>Les prochaines rencontres, permanences et animations apparaîtront ici dès validation du calendrier.</p>
            <a href="https://www.animations-fce.online" target="_blank" rel="noreferrer">Application du marché aux puces <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="join-section" id="contact">
        <div className="join-mark" aria-hidden="true">1930</div>
        <div className="section-shell join-content">
          <p className="section-kicker light">Rejoignez l’aventure</p>
          <h2>Envie de faire partie du collectif ?</h2>
          <p>Joueur, éducateur, dirigeant, bénévole ou partenaire : il y a toujours une place pour vous au FCE.</p>
          <span className="button button-light">Coordonnées à venir <span>→</span></span>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main section-shell">
          <div className="footer-brand">
            <img src="/logo-fce.png" alt="" />
            <div><strong>Football Club<br />d’Ensisheim</strong><span>Depuis 1930</span></div>
          </div>
          <div className="footer-links">
            <div><h3>Le site</h3><a href="#club">Le club</a><a href="#equipes">Équipes</a><a href="#actualites">Actualités</a><a href="#agenda">Agenda</a></div>
            <div><h3>Les pôles</h3><a href="#poles">Sportif</a><a href="#poles">Technique</a><a href="#poles">Animations</a><a href="#buvette">Buvette</a></div>
            <div><h3>Nous suivre</h3><a href="#contact">Facebook</a><a href="#contact">Instagram</a><span>Contact — à venir</span></div>
          </div>
        </div>
        <div className="footer-bottom section-shell">
          <span>© 2026 Football Club d’Ensisheim</span>
          <span>Maquette — mentions légales et confidentialité à compléter</span>
        </div>
      </footer>
    </main>
  );
}
