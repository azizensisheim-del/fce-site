"use client";

import { useMemo, useState } from "react";
import { teamCalendars } from "./calendar-data";

const monthNames = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function getMonth(date: string) {
  const [, month, year] = date.split("/");
  return {
    key: `${year}-${month}`,
    label: `${monthNames[Number(month) - 1]} ${year}`,
  };
}

export default function TeamCalendar() {
  const [activeSlug, setActiveSlug] = useState(teamCalendars[0].slug);
  const activeTeam = teamCalendars.find((team) => team.slug === activeSlug) ?? teamCalendars[0];

  const months = useMemo(() => {
    return activeTeam.matches.reduce<Array<{ key: string; label: string; matches: typeof activeTeam.matches }>>(
      (groups, match) => {
        const month = getMonth(match.date);
        const current = groups.at(-1);
        if (!current || current.key !== month.key) {
          groups.push({ ...month, matches: [match] });
        } else {
          current.matches.push(match);
        }
        return groups;
      },
      [],
    );
  }, [activeTeam]);

  const cupCount = activeTeam.matches.filter((match) => match.kind === "coupe").length;

  return (
    <section className="calendar-section" id="calendrier">
      <div className="section-shell">
        <div className="calendar-heading">
          <div>
            <p className="section-kicker">Saison 2026-2027</p>
            <h2>Calendriers des équipes.</h2>
          </div>
          <div className="calendar-intro">
            <p>Retrouvez les rencontres actuellement programmées pour les huit équipes engagées confirmées.</p>
            <strong>Calendrier 2026-2027 — horaires susceptibles d’être modifiés</strong>
          </div>
        </div>

        <nav className="calendar-filters" aria-label="Choisir une équipe">
          {teamCalendars.map((team) => (
            <button
              type="button"
              className={team.slug === activeTeam.slug ? "active" : ""}
              aria-pressed={team.slug === activeTeam.slug}
              onClick={() => setActiveSlug(team.slug)}
              key={team.slug}
            >
              {team.label}
            </button>
          ))}
        </nav>

        <div className="calendar-panel" aria-live="polite">
          <header className="calendar-team-header">
            <div>
              <span>Équipe sélectionnée</span>
              <h3>{activeTeam.label}</h3>
              <p>{activeTeam.division}</p>
            </div>
            <div className="calendar-counts">
              <span><strong>{activeTeam.matches.length}</strong> rencontres</span>
              <span><strong>{cupCount}</strong> en coupe</span>
            </div>
          </header>

          <div className="calendar-timeline">
            {months.map((month) => (
              <section className="calendar-month" key={month.key} aria-labelledby={`month-${activeTeam.slug}-${month.key}`}>
                <h4 id={`month-${activeTeam.slug}-${month.key}`}>{month.label}</h4>
                <div className="calendar-match-list">
                  {month.matches.map((match) => (
                    <article className={`calendar-match ${match.kind}`} key={match.id}>
                      <div className="match-date">
                        <strong>{match.date.slice(0, 5)}</strong>
                        <span>{match.time}</span>
                      </div>
                      <div className="match-opponent">
                        <span className={`venue-badge ${match.venue === "Domicile" ? "home" : "away"}`}>{match.venue}</span>
                        <strong>{match.opponent}</strong>
                      </div>
                      <div className="match-competition">
                        {match.kind === "coupe" && <span className="cup-badge">Coupe</span>}
                        <span>{match.competition}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="calendar-source">
            <p>Calendrier publié à titre informatif. Vérifiez l’horaire auprès du club avant le déplacement.</p>
            <a href={activeTeam.source} target="_blank" rel="noreferrer">Consulter la source SportCorico <span>↗</span></a>
          </footer>
        </div>
      </div>
    </section>
  );
}
