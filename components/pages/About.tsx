import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { ORG } from "@/lib/site";

const C = {
  en: {
    title: "About",
    description: "ConstructionLMS is a home for practical construction training: free for learners, in English and Spanish, powered by DigitalChalk.",
    eyebrow: "About",
    h1: "A home for practical construction training.",
    lede: "ConstructionLMS gives the construction workforce free, practical training in English and Spanish, with a certificate for every course.",
    beliefsH2: "What we believe",
    beliefs: [
      ["Useful first.", "The free library has to solve real jobsite problems before we ask anyone to pay."],
      ["Every language on the crew.", "Courses are planned in English and Spanish from day one."],
      ["Short beats long.", "Lessons fit a jobsite day."],
      ["Proof that travels.", "Every completed course gives the learner a certificate."],
    ],
    paidH2: "How it’s paid for",
    paid: "Learners never pay for the free library. Team plans for employers and training spaces for vendors will pay for the work.",
    platformH2: "Who runs the platform",
    platformBefore: "ConstructionLMS runs on the",
    platformAfter: " learning platform.",
  },
  es: {
    title: "Acerca de",
    description: "ConstructionLMS es un lugar para la capacitación práctica en construcción: gratis para quienes aprenden, en inglés y español, con la tecnología de DigitalChalk.",
    eyebrow: "Acerca de",
    h1: "Un lugar para la capacitación práctica en construcción.",
    lede: "ConstructionLMS ofrece a quienes trabajan en la construcción capacitación práctica y gratuita en inglés y español, con un certificado por cada curso.",
    beliefsH2: "En qué creemos",
    beliefs: [
      ["Primero, que sea útil.", "La biblioteca gratuita tiene que resolver problemas reales de la obra antes de pedirle a alguien que pague."],
      ["Todos los idiomas de la cuadrilla.", "Los cursos se planean en inglés y español desde el primer día."],
      ["Lo corto gana.", "Las lecciones caben en un día de obra."],
      ["Pruebas que se llevan a todas partes.", "Cada curso terminado le da un certificado a quien aprende."],
    ],
    paidH2: "Cómo se paga",
    paid: "Quienes aprenden nunca pagan por la biblioteca gratuita. Los planes para empresas y los espacios de capacitación para proveedores pagarán el trabajo.",
    platformH2: "Quién opera la plataforma",
    platformBefore: "ConstructionLMS funciona con la plataforma de aprendizaje",
    platformAfter: ".",
  },
} as const;

export const aboutMeta = (l: Locale) => pageMeta(l, "about", { title: C[l].title, description: C[l].description });

export function AboutPage({ locale }: { locale: Locale }) {
  const c = C[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede} />
      <section className="section">
        <div className="container narrow">
          <h2>{c.beliefsH2}</h2>
          <ul className="problem-list">{c.beliefs.map(([b, r]) => <li key={b}><strong>{b}</strong> {r}</li>)}</ul>
        </div>
      </section>
      <section className="section tint">
        <div className="container narrow">
          <h2>{c.paidH2}</h2>
          <p>{c.paid}</p>
          <h2>{c.platformH2}</h2>
          <p>
            {c.platformBefore} <a href={ORG.poweredBy.url} rel="noopener">{ORG.poweredBy.name}</a>
            {c.platformAfter}
          </p>
        </div>
      </section>
      <JoinSection locale={locale} source="about" />
    </main>
  );
}
