import { ProofSlot } from "@/components/Brand";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

const C = {
  en: {
    title: "Team plans for construction employers",
    description: "Assign training by trade and role, track compliance and expiring training, and get reports you can hand to an owner or inspector. Coming soon.",
    eyebrow: "For employers · Coming soon",
    h1: "Train your whole crew and prove it.",
    lede: "Team plans add assigned training, compliance tracking and reports on top of the free library, in a space branded for your company.",
    cta: "Talk to us about team plans",
    givesH2: "What a team plan gives you",
    gives: ["Assign learning paths by trade and role", "Track compliance and expiring training", "Reports you can hand to an owner or inspector", "A branded space for your company", "Every course in English and Spanish, with a certificate for each one"],
    proof: "result from an employer: time saved or completion rate, with a named company.",
    howH2: "How it will work",
    how: [
      ["Set up your crew", "Add your people and group them by trade, role or jobsite."],
      ["Assign the training", "Pick courses or learning paths for each group. Your crew learns in English or Spanish."],
      ["See who finished", "Track completions and expiring training, and pull reports when you need them."],
    ],
    pricingH2: "Pricing",
    pricing: "Team-plan pricing is not set yet. Join the list and we’ll send the details as soon as they’re ready.",
    joinH: "Talk to us about team plans.",
    joinIntro: "Tell us about your crew and we’ll send team-plan details as soon as they’re ready.",
  },
  es: {
    title: "Planes para empresas de construcción",
    description: "Asigne capacitación por oficio y puesto, dé seguimiento al cumplimiento y a la capacitación por vencer, y obtenga informes que puede entregar a un dueño o inspector. Muy pronto.",
    eyebrow: "Para empleadores · Muy pronto",
    h1: "Capacite a toda su cuadrilla y demuéstrelo.",
    lede: "Los planes para empresas suman capacitación asignada, seguimiento del cumplimiento e informes a la biblioteca gratuita, en un espacio con la marca de su empresa.",
    cta: "Hable con nosotros sobre los planes para empresas",
    givesH2: "Lo que le da un plan para empresas",
    gives: ["Asigne rutas de aprendizaje por oficio y puesto", "Dé seguimiento al cumplimiento y a la capacitación por vencer", "Informes que puede entregar a un dueño o inspector", "Un espacio con la marca de su empresa", "Cada curso en inglés y español, con un certificado por cada uno"],
    proof: "un resultado de un empleador: tiempo ahorrado o tasa de finalización, con el nombre de la empresa.",
    howH2: "Cómo funcionará",
    how: [
      ["Organice su cuadrilla", "Agregue a su gente y agrúpela por oficio, puesto u obra."],
      ["Asigne la capacitación", "Elija cursos o rutas de aprendizaje para cada grupo. Su cuadrilla aprende en inglés o en español."],
      ["Vea quién terminó", "Dé seguimiento a lo completado y a la capacitación por vencer, y saque informes cuando los necesite."],
    ],
    pricingH2: "Precios",
    pricing: "Los precios de los planes para empresas aún no están definidos. Inscríbase en la lista y le enviaremos los detalles en cuanto estén listos.",
    joinH: "Hable con nosotros sobre los planes para empresas.",
    joinIntro: "Cuéntenos sobre su cuadrilla y le enviaremos los detalles de los planes para empresas en cuanto estén listos.",
  },
} as const;

export const teamsMeta = (l: Locale) => pageMeta(l, "teams", { title: C[l].title, description: C[l].description });

export function TeamsPage({ locale }: { locale: Locale }) {
  const c = C[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede}>
        <a className="btn btn-primary" href="#join" data-role="employer" data-cta-event="join_employer" data-cta-location="teams-hero">{c.cta}</a>
      </PageHero>
      <section className="section">
        <div className="container split">
          <div>
            <h2>{c.givesH2}</h2>
            <ul className="check-list">{c.gives.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="aside-stack"><ProofSlot locale={locale} label={c.proof} /></div>
        </div>
      </section>
      <section className="section tint">
        <div className="container">
          <div className="section-head"><h2>{c.howH2}</h2></div>
          <ol className="steps">{c.how.map(([h, p]) => <li key={h}><h3>{h}</h3><p>{p}</p></li>)}</ol>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>{c.pricingH2}</h2>
          <p>{c.pricing}</p>
        </div>
      </section>
      <JoinSection locale={locale} source="teams" role="employer" heading={c.joinH} intro={c.joinIntro} />
    </main>
  );
}
