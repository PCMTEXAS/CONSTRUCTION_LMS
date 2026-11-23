import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

const C = {
  en: {
    title: "Construction community by trade and role",
    description: "A moderated community organized by trade and role, with questions linked to each lesson and live sessions with experienced practitioners. Planned.",
    eyebrow: "Community · Planned",
    h1: "Ask people who do the work.",
    lede: "A moderated community organized by trade and role, linked to the courses, with regular live sessions.",
    cta: "Get free early access",
    spacesH2: "The first spaces",
    spacesP: "Each trade and role gets its own space. These are the first ones planned.",
    spacesLabel: "First community spaces (planned)",
    spaces: ["Superintendents", "Foremen", "Safety managers", "Electrical", "Concrete", "Equipment operators"],
    features: [
      ["Questions on every lesson", "Ask about a lesson right where you are, and see what others asked before you."],
      ["Live sessions", "Regular sessions with experienced practitioners and vendor specialists."],
      ["Recognition", "Members who help others get recognized for it."],
    ],
    rulesH2: "House rules",
    rules: [
      ["Safety first.", "Unsafe advice is removed quickly. For safety questions, check the standard or ask a qualified person on your site."],
      ["No sales pitches.", "Vendors are welcome to help, not to advertise."],
      ["Moderated.", "Every space has moderators who apply these rules."],
    ],
  },
  es: {
    title: "Comunidad de la construcción por oficio y puesto",
    description: "Una comunidad moderada, organizada por oficio y puesto, con preguntas vinculadas a cada lección y sesiones en vivo con profesionales con experiencia. Planeada.",
    eyebrow: "Comunidad · Planeada",
    h1: "Pregunte a quienes hacen el trabajo.",
    lede: "Una comunidad moderada, organizada por oficio y puesto, vinculada a los cursos y con sesiones en vivo frecuentes.",
    cta: "Obtener acceso anticipado gratis",
    spacesH2: "Los primeros espacios",
    spacesP: "Cada oficio y puesto tiene su propio espacio. Estos son los primeros planeados.",
    spacesLabel: "Primeros espacios de la comunidad (planeados)",
    spaces: ["Superintendentes", "Capataces", "Gerentes de seguridad", "Electricidad", "Concreto", "Operadores de equipo"],
    features: [
      ["Preguntas en cada lección", "Pregunte sobre una lección ahí mismo y vea lo que otros preguntaron antes."],
      ["Sesiones en vivo", "Sesiones frecuentes con profesionales con experiencia y especialistas de proveedores."],
      ["Reconocimiento", "Quienes ayudan a otros reciben reconocimiento."],
    ],
    rulesH2: "Reglas de la comunidad",
    rules: [
      ["La seguridad primero.", "Los consejos inseguros se eliminan rápido. Para preguntas de seguridad, consulte la norma o pregunte a una persona calificada en su obra."],
      ["Nada de ventas.", "Los proveedores son bienvenidos para ayudar, no para anunciarse."],
      ["Moderada.", "Cada espacio tiene moderadores que aplican estas reglas."],
    ],
  },
} as const;

export const communityMeta = (l: Locale) => pageMeta(l, "community", { title: C[l].title, description: C[l].description });

export function CommunityPage({ locale }: { locale: Locale }) {
  const c = C[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede}>
        <a className="btn btn-primary" href="#join" data-role="learner" data-cta-event="join" data-cta-location="community-hero">{c.cta}</a>
      </PageHero>
      <section className="section dark">
        <div className="container split">
          <div>
            <h2>{c.spacesH2}</h2>
            <p>{c.spacesP}</p>
          </div>
          <ul className="chips" aria-label={c.spacesLabel}>{c.spaces.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ol className="steps">{c.features.map(([h, p]) => <li key={h}><h3>{h}</h3><p>{p}</p></li>)}</ol>
        </div>
      </section>
      <section className="section tint">
        <div className="container narrow">
          <h2>{c.rulesH2}</h2>
          <ul className="problem-list">{c.rules.map(([b, r]) => <li key={b}><strong>{b}</strong> {r}</li>)}</ul>
        </div>
      </section>
      <JoinSection locale={locale} source="community" />
    </main>
  );
}
