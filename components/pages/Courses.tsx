import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

const C = {
  en: {
    title: "Free construction courses in English and Spanish",
    description: "Short, practical jobsite courses on safety basics, toolbox talks, equipment orientation and jobsite software. Free for learners, with a certificate for every course.",
    eyebrow: "Free course library",
    h1: "Short, practical courses for the jobsite.",
    lede: "Free for learners, in English and Spanish, with a certificate for every completed course. The launch library is in development.",
    cta: "Get free early access",
    topicsH2: "The first topics",
    topics: [
      ["Safety basics", "Falls, ladders, PPE, electrical and struck-by hazards."],
      ["Toolbox talks", "Ready-to-run talks a foreman can lead in ten minutes."],
      ["Equipment orientation", "Walk-arounds and safe operation basics before the first shift."],
      ["Jobsite software", "How to use the tools your company already runs, step by step."],
    ],
    includesH2: "What every course includes",
    includes: ["Short lessons that fit a jobsite day", "English and Spanish, and you can switch at any time", "A certificate when you finish, to show your employer", "Runs in a web browser on a phone, tablet or computer"],
    madeH2: "How courses are made",
    made: "Courses come from public safety resources, licensed content from training partners, and product training from vendors. Nothing is published until we have the right to use it.",
    oshaH2: "OSHA 10-hour and 30-hour cards",
    osha: "We don’t issue OSHA Outreach cards. Those come only from OSHA-authorized providers. Our courses cover practical jobsite topics and award a ConstructionLMS certificate.",
  },
  es: {
    title: "Cursos de construcción gratis en inglés y español",
    description: "Cursos cortos y prácticos para la obra sobre seguridad básica, charlas de seguridad, orientación sobre equipos y software de obra. Gratis para quienes aprenden, con un certificado por cada curso.",
    eyebrow: "Biblioteca de cursos gratis",
    h1: "Cursos cortos y prácticos para la obra.",
    lede: "Gratis para quienes aprenden, en inglés y español, con un certificado por cada curso terminado. La biblioteca inicial está en desarrollo.",
    cta: "Obtener acceso anticipado gratis",
    topicsH2: "Los primeros temas",
    topics: [
      ["Seguridad básica", "Caídas, escaleras, EPP, riesgos eléctricos y golpes por objetos."],
      ["Charlas de seguridad", "Charlas listas para que un capataz las dé en diez minutos."],
      ["Orientación sobre equipos", "Inspecciones de recorrido y operación segura antes del primer turno."],
      ["Software de obra", "Cómo usar, paso a paso, las herramientas que su empresa ya usa."],
    ],
    includesH2: "Lo que incluye cada curso",
    includes: ["Lecciones cortas que caben en un día de obra", "Inglés y español, y puede cambiar cuando quiera", "Un certificado al terminar, para mostrar a su empleador", "Funciona en un navegador web en teléfono, tableta o computadora"],
    madeH2: "Cómo se crean los cursos",
    made: "Los cursos se basan en recursos públicos de seguridad, contenido con licencia de socios de capacitación y capacitación de proveedores sobre sus productos. No publicamos nada hasta tener el derecho de usarlo.",
    oshaH2: "Tarjetas OSHA de 10 y 30 horas",
    osha: "No emitimos tarjetas OSHA Outreach. Solo las emiten proveedores autorizados por OSHA. Nuestros cursos tratan temas prácticos de la obra y otorgan un certificado de ConstructionLMS.",
  },
} as const;

export const coursesMeta = (l: Locale) => pageMeta(l, "courses", { title: C[l].title, description: C[l].description });

export function CoursesPage({ locale }: { locale: Locale }) {
  const c = C[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede}>
        <a className="btn btn-primary" href="#join" data-role="learner" data-cta-event="join" data-cta-location="courses-hero">{c.cta}</a>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="section-head"><h2>{c.topicsH2}</h2></div>
          <ul className="topics">
            {c.topics.map(([h, p]) => <li key={h}><h3>{h}</h3><p>{p}</p></li>)}
          </ul>
        </div>
      </section>
      <section className="section tint">
        <div className="container split">
          <div>
            <h2>{c.includesH2}</h2>
            <ul className="check-list">{c.includes.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <h2>{c.madeH2}</h2>
            <p>{c.made}</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container narrow">
          <h2>{c.oshaH2}</h2>
          <p>{c.osha}</p>
        </div>
      </section>
      <JoinSection locale={locale} source="courses" />
    </main>
  );
}
