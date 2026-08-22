"use client";

import { useState, type FormEvent } from "react";

type Preview = {
  pole: string;
  title: string;
  date: string;
  location: string;
  description: string;
  videoUrl: string;
  posterName: string;
  photoCount: number;
};

const initialPreview: Preview = {
  pole: "Animations",
  title: "Votre événement apparaîtra ici",
  date: "Date à préciser",
  location: "Lieu à préciser",
  description: "Renseignez le formulaire puis cliquez sur « Mettre à jour l’aperçu ».",
  videoUrl: "",
  posterName: "",
  photoCount: 0,
};

function formatDate(value: string) {
  if (!value) return "Date à préciser";
  return new Intl.DateTimeFormat("fr-FR", { dateStyle: "full", timeStyle: "short" }).format(new Date(value));
}

export default function EventComposer() {
  const [preview, setPreview] = useState(initialPreview);
  const [message, setMessage] = useState("Aucune donnée n’est envoyée tant que la connexion nominative n’est pas activée.");

  function updatePreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const title = String(data.get("title") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();

    if (!title || !description || !data.get("startsAt")) {
      setMessage("Complétez au minimum le titre, la date et le texte de présentation.");
      return;
    }

    const poster = data.get("poster");
    const photos = data.getAll("photos").filter((item) => item instanceof File && item.size > 0);
    setPreview({
      pole: String(data.get("pole") ?? "Animations"),
      title,
      date: formatDate(String(data.get("startsAt"))),
      location: String(data.get("location") ?? "").trim() || "Lieu à préciser",
      description,
      videoUrl: String(data.get("videoUrl") ?? "").trim(),
      posterName: poster instanceof File && poster.size > 0 ? poster.name : "",
      photoCount: photos.length,
    });
    setMessage("Aperçu mis à jour. Après activation de la connexion, le responsable pourra publier immédiatement dans son pôle.");
  }

  return (
    <section className="section-shell event-editor-workspace">
      <form className="event-form" onSubmit={updatePreview}>
        <div className="event-form-heading">
          <span>01 / Contenu</span>
          <strong>Brouillon local de prévisualisation</strong>
        </div>

        <label>Pôle concerné
          <select name="pole" defaultValue="Animations">
            <option>Sportif</option><option>Technique</option><option>Animations</option><option>Buvette</option>
          </select>
          <small>Après connexion, cette liste sera limitée au(x) pôle(s) attribué(s) au responsable.</small>
        </label>
        <label>Titre de l’événement <span>*</span>
          <input name="title" required maxLength={120} placeholder="Ex. Soirée années 80 du FCE" />
        </label>
        <div className="event-form-row">
          <label>Date et heure <span>*</span><input name="startsAt" type="datetime-local" required /></label>
          <label>Lieu<input name="location" maxLength={160} placeholder="Salle, stade, adresse…" /></label>
        </div>
        <label>Texte de présentation <span>*</span>
          <textarea name="description" required rows={8} maxLength={4000} placeholder="Présentez l’événement, son programme et les informations pratiques…" />
        </label>
        <div className="event-form-row">
          <label>Lien d’inscription<input name="registrationUrl" type="url" placeholder="https://…" /></label>
          <label>Lien de la vidéo<input name="videoUrl" type="url" placeholder="YouTube, Vimeo…" /></label>
        </div>

        <fieldset className="event-media-fields">
          <legend>02 / Médias</legend>
          <label><strong>Affiche principale</strong><span>JPG, PNG ou WebP</span><input name="poster" type="file" accept="image/jpeg,image/png,image/webp" /></label>
          <label><strong>Galerie photos</strong><span>Jusqu’à 12 photos</span><input name="photos" type="file" accept="image/jpeg,image/png,image/webp" multiple /></label>
        </fieldset>

        <div className="event-form-actions">
          <button className="button event-preview-button" type="submit">Mettre à jour l’aperçu <span>→</span></button>
          <button className="button event-publish-button" type="button" disabled>Connexion requise pour publier</button>
        </div>
        <p className="event-form-message" role="status" aria-live="polite">{message}</p>
      </form>

      <aside className="event-preview" aria-label="Aperçu de l’événement">
        <div className="event-preview-topline"><span>Aperçu public</span><span>{preview.pole}</span></div>
        <div className="event-preview-poster">
          {preview.posterName ? <><strong>Affiche sélectionnée</strong><span>{preview.posterName}</span></> : <><strong>Votre affiche</strong><span>Format vertical conseillé</span></>}
        </div>
        <div className="event-preview-content">
          <p>{preview.date} · {preview.location}</p>
          <h2>{preview.title}</h2>
          <div className="event-preview-description">{preview.description}</div>
          <div className="event-preview-media">
            <span>{preview.photoCount} photo{preview.photoCount === 1 ? "" : "s"}</span>
            <span>{preview.videoUrl ? "Vidéo ajoutée" : "Aucune vidéo"}</span>
          </div>
        </div>
        <div className="event-rule-card"><strong>Publication directe</strong><p>Le serveur vérifiera le compte et le pôle à chaque publication. Aucune approbation administrative ne sera demandée.</p></div>
      </aside>
    </section>
  );
}
