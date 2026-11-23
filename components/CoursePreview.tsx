"use client";
// Hero visual: an illustrative lesson card built in HTML/CSS (no image request, fast LCP).
// The EN/ES switch works, to show that every course comes in both languages.
import { useState } from "react";

const TEXT = {
  en: {
    tag: "Toolbox talk · 6 min",
    title: "Ladder safety: the three points of contact",
    steps: ["Inspect the ladder before you climb", "Keep three points of contact", "Face the ladder going up and down"],
    progress: "Lesson 2 of 3",
    cert: "Certificate earned",
    certSub: "Ladder Safety Basics",
  },
  es: {
    tag: "Charla de seguridad · 6 min",
    title: "Seguridad en escaleras: tres puntos de contacto",
    steps: ["Inspeccione la escalera antes de subir", "Mantenga tres puntos de contacto", "Mire hacia la escalera al subir y bajar"],
    progress: "Lección 2 de 3",
    cert: "Certificado obtenido",
    certSub: "Seguridad básica en escaleras",
  },
} as const;

export function CoursePreview() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const s = TEXT[lang];
  return (
    <figure className="preview" aria-label="Illustrative course preview">
      <div className="preview-stage">
      <div className="preview-card" lang={lang}>
        <div className="preview-top">
          <span className="preview-tag">{s.tag}</span>
          <div className="lang-toggle" role="group" aria-label="Course language">
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
            <button type="button" aria-pressed={lang === "es"} onClick={() => setLang("es")} lang="es">ES</button>
          </div>
        </div>
        <p className="preview-title">{s.title}</p>
        <ol className="preview-steps">
          {s.steps.map((step, i) => (
            <li key={step} className={i < 2 ? "done" : undefined}>{step}</li>
          ))}
        </ol>
        <div className="preview-progress">
          <span>{s.progress}</span>
          <span className="bar" aria-hidden="true"><span style={{ width: "66%" }} /></span>
        </div>
      </div>
      <div className="preview-cert" lang={lang}>
        <span className="seal" aria-hidden="true">✓</span>
        <span>
          <strong>{s.cert}</strong>
          <br />
          {s.certSub}
        </span>
      </div>
      </div>
      <figcaption>Illustration of a lesson. The course library is in development.</figcaption>
    </figure>
  );
}
