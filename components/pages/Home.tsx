// Home page in both languages. Section order follows the brief, adapted for a learner-first site:
// hero -> proof bar -> problem -> how it works -> courses -> teams -> vendors -> community
// -> how pricing works -> FAQ -> final call to action.
import { ProofSlot } from "@/components/Brand";
import { CoursePreview } from "@/components/CoursePreview";
import { JoinSection } from "@/components/JoinSection";
import { PAGES, type Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";
import { ORG, SITE_URL } from "@/lib/site";

const C = {
  en: {
    title: "Free construction training in English and Spanish | ConstructionLMS",
    description:
      "Short, practical jobsite courses on safety, toolbox talks, equipment and the software crews use, in English and Spanish, with a certificate for every course. Free for learners.",
    eyebrow: "Free training for the construction workforce",
    h1: "Jobsite training your crew will actually finish.",
    lede: "Short, practical courses on safety, toolbox talks, equipment and the software your crew already runs. In English and Spanish, with a certificate for every course.",
    cta: "Get free early access",
    teamsLink: "Training a crew? See team plans",
    reassure: "Free for learners. We’ll email you when the first courses open.",
    heroProof: "short quote with a result from a superintendent or safety manager, or a rating.",
    partnersLabel: "Partners",
    partners: "Built with construction training partners",
    partnersProof: "3 to 6 partner or contractor logos, shown only after each agreement allows it.",
    problemEyebrow: "The problem",
    problemH2: "Construction training is hard to get to the people who need it.",
    problems: [
      ["Crews change fast.", "New hands arrive every week and need the basics before they start."],
      ["Not everyone learns in English.", "Training that ignores Spanish speakers misses part of the crew."],
      ["Courses are too long.", "Hour-long modules do not fit a jobsite day."],
      ["Proof is scattered.", "Sign-in sheets and binders make it hard to show who learned what."],
    ],
    howEyebrow: "How it works",
    howH2: "Three steps, no sales call.",
    how: [
      ["Pick a short course", "Safety basics, toolbox talks, equipment orientation or jobsite software. Most take minutes, not hours."],
      ["Learn in your language", "Switch between English and Spanish at any time."],
      ["Earn a certificate", "Every completed course gives you a certificate to show your employer."],
    ],
    coursesEyebrow: "Free course library",
    coursesH2: "Start with what keeps people safe and productive.",
    coursesNote: "The launch library is in development. These are the first topics.",
    coursesMore: "More about the courses",
    topics: [
      ["Safety basics", "Falls, ladders, PPE, electrical and struck-by hazards."],
      ["Toolbox talks", "Ready-to-run talks a foreman can lead in ten minutes."],
      ["Equipment orientation", "Walk-arounds and safe operation basics before the first shift."],
      ["Jobsite software", "How to use the tools your company already runs, step by step."],
    ],
    teamsEyebrow: "For employers · Coming soon",
    teamsH2: "See your whole crew’s training in one place.",
    teamsList: [
      "Assign learning paths by trade and role",
      "Track compliance and expiring training",
      "Reports you can hand to an owner or inspector",
      "A branded space for your company",
    ],
    teamsCta: "Talk to us about team plans",
    teamsMore: "How team plans will work",
    teamsProof: "result from an employer: time saved or completion rate, with a named company.",
    vendorsEyebrow: "For vendors · Coming later",
    vendorsH2: "Train the people who use your product on site.",
    vendorsP:
      "Software and materials vendors will be able to publish branded product training, reach the crews who use their products, and see who completed it.",
    vendorsCta: "Talk to us about vendor spaces",
    vendorsMore: "How vendor spaces will work",
    vendorsProof: "named vendor partner and what they publish, once agreed.",
    communityEyebrow: "Community",
    communityH2: "Ask people who do the work.",
    communityP:
      "A moderated community organized by trade and role, with questions linked to each lesson and regular live sessions with experienced practitioners.",
    communityMore: "How the community will work",
    spacesLabel: "First community spaces (planned)",
    spaces: ["Superintendents", "Foremen", "Safety managers", "Electrical", "Concrete", "Equipment operators"],
    pricingEyebrow: "How pricing works",
    pricingH2: "Free to learn. Pay only for what a company needs.",
    tiers: [
      ["Learners", "Free", "Every course in the free library, with a certificate for each one."],
      ["Teams", "Coming soon", "Assigned paths, compliance tracking, reporting and a company space."],
      ["Vendors", "Coming later", "Branded product training and completion reports."],
    ],
    faqH2: "Questions",
    faqs: [
      ["Is it really free?", "Yes. Courses in the free library cost nothing for learners. Companies that want assigned training, compliance tracking and reports will be able to buy a team plan."],
      ["What languages are the courses in?", "English and Spanish. Every free course is planned in both languages from day one."],
      ["Do I get a certificate?", "Yes. Every completed course awards a certificate you can show an employer."],
      ["Do you issue OSHA 10-hour or 30-hour cards?", "No. OSHA Outreach cards can only be issued by OSHA-authorized providers. Our courses cover practical jobsite topics and award a ConstructionLMS certificate."],
      ["Is there a mobile app?", "Not yet. A mobile app is planned for Q1 2027. Until then, courses run in a web browser."],
      ["When does it open?", "We are building the first courses now. Join the early-access list and we will email you when they open."],
    ],
  },
  es: {
    title: "Capacitación gratis para la construcción en inglés y español | ConstructionLMS",
    description:
      "Cursos cortos y prácticos para la obra sobre seguridad, charlas de seguridad, equipos y el software que usan las cuadrillas, en inglés y español, con un certificado por cada curso. Gratis para quienes aprenden.",
    eyebrow: "Capacitación gratis para quienes trabajan en la construcción",
    h1: "Capacitación para la obra que su cuadrilla sí va a terminar.",
    lede: "Cursos cortos y prácticos sobre seguridad, charlas de seguridad, equipos y el software que su cuadrilla ya usa. En inglés y español, con un certificado por cada curso.",
    cta: "Obtener acceso anticipado gratis",
    teamsLink: "¿Capacita a una cuadrilla? Vea los planes para empresas",
    reassure: "Gratis para quienes aprenden. Le enviaremos un correo cuando abran los primeros cursos.",
    heroProof: "una cita breve con un resultado de un superintendente o gerente de seguridad, o una calificación.",
    partnersLabel: "Socios",
    partners: "Creado con socios de capacitación en construcción",
    partnersProof: "de 3 a 6 logotipos de socios o contratistas, solo cuando cada acuerdo lo permita.",
    problemEyebrow: "El problema",
    problemH2: "Es difícil que la capacitación llegue a quienes la necesitan.",
    problems: [
      ["Las cuadrillas cambian rápido.", "Cada semana llega gente nueva que necesita lo básico antes de empezar."],
      ["No todos aprenden en inglés.", "La capacitación que deja fuera a quienes hablan español no llega a toda la cuadrilla."],
      ["Los cursos son demasiado largos.", "Los módulos de una hora no caben en un día de obra."],
      ["Las pruebas están dispersas.", "Con hojas de asistencia y carpetas es difícil demostrar quién aprendió qué."],
    ],
    howEyebrow: "Cómo funciona",
    howH2: "Tres pasos, sin llamadas de ventas.",
    how: [
      ["Elija un curso corto", "Seguridad básica, charlas de seguridad, orientación sobre equipos o software de obra. La mayoría toma minutos, no horas."],
      ["Aprenda en su idioma", "Cambie entre inglés y español cuando quiera."],
      ["Obtenga un certificado", "Cada curso terminado le da un certificado para mostrar a su empleador."],
    ],
    coursesEyebrow: "Biblioteca de cursos gratis",
    coursesH2: "Empiece por lo que mantiene a la gente segura y productiva.",
    coursesNote: "La biblioteca inicial está en desarrollo. Estos son los primeros temas.",
    coursesMore: "Más sobre los cursos",
    topics: [
      ["Seguridad básica", "Caídas, escaleras, EPP, riesgos eléctricos y golpes por objetos."],
      ["Charlas de seguridad", "Charlas listas para que un capataz las dé en diez minutos."],
      ["Orientación sobre equipos", "Inspecciones de recorrido y operación segura antes del primer turno."],
      ["Software de obra", "Cómo usar, paso a paso, las herramientas que su empresa ya usa."],
    ],
    teamsEyebrow: "Para empleadores · Muy pronto",
    teamsH2: "Vea la capacitación de toda su cuadrilla en un solo lugar.",
    teamsList: [
      "Asigne rutas de aprendizaje por oficio y puesto",
      "Dé seguimiento al cumplimiento y a la capacitación por vencer",
      "Informes que puede entregar a un dueño o inspector",
      "Un espacio con la marca de su empresa",
    ],
    teamsCta: "Hable con nosotros sobre los planes para empresas",
    teamsMore: "Cómo funcionarán los planes para empresas",
    teamsProof: "un resultado de un empleador: tiempo ahorrado o tasa de finalización, con el nombre de la empresa.",
    vendorsEyebrow: "Para proveedores · Más adelante",
    vendorsH2: "Capacite en la obra a quienes usan su producto.",
    vendorsP:
      "Los proveedores de software y materiales podrán publicar capacitación sobre sus productos con su marca, llegar a las cuadrillas que los usan y ver quién la terminó.",
    vendorsCta: "Hable con nosotros sobre los espacios para proveedores",
    vendorsMore: "Cómo funcionarán los espacios para proveedores",
    vendorsProof: "el nombre de un proveedor socio y lo que publica, una vez acordado.",
    communityEyebrow: "Comunidad",
    communityH2: "Pregunte a quienes hacen el trabajo.",
    communityP:
      "Una comunidad moderada, organizada por oficio y puesto, con preguntas vinculadas a cada lección y sesiones en vivo con profesionales con experiencia.",
    communityMore: "Cómo funcionará la comunidad",
    spacesLabel: "Primeros espacios de la comunidad (planeados)",
    spaces: ["Superintendentes", "Capataces", "Gerentes de seguridad", "Electricidad", "Concreto", "Operadores de equipo"],
    pricingEyebrow: "Cómo funcionan los precios",
    pricingH2: "Aprender es gratis. Las empresas pagan solo por lo que necesitan.",
    tiers: [
      ["Quienes aprenden", "Gratis", "Todos los cursos de la biblioteca gratuita, con un certificado por cada uno."],
      ["Empresas", "Muy pronto", "Rutas asignadas, seguimiento del cumplimiento, informes y un espacio para la empresa."],
      ["Proveedores", "Más adelante", "Capacitación sobre sus productos con su marca e informes de finalización."],
    ],
    faqH2: "Preguntas",
    faqs: [
      ["¿De verdad es gratis?", "Sí. Los cursos de la biblioteca gratuita no cuestan nada a quienes aprenden. Las empresas que quieran capacitación asignada, seguimiento del cumplimiento e informes podrán comprar un plan para empresas."],
      ["¿En qué idiomas están los cursos?", "En inglés y español. Cada curso gratuito se planea en ambos idiomas desde el primer día."],
      ["¿Recibo un certificado?", "Sí. Cada curso terminado otorga un certificado que puede mostrar a un empleador."],
      ["¿Emiten tarjetas OSHA de 10 o 30 horas?", "No. Las tarjetas OSHA Outreach solo las pueden emitir proveedores autorizados por OSHA. Nuestros cursos tratan temas prácticos de la obra y otorgan un certificado de ConstructionLMS."],
      ["¿Hay una aplicación móvil?", "Todavía no. Hay una aplicación móvil planeada para el primer trimestre de 2027. Mientras tanto, los cursos funcionan en un navegador web."],
      ["¿Cuándo abre?", "Estamos creando los primeros cursos. Inscríbase en la lista de acceso anticipado y le enviaremos un correo cuando abran."],
    ],
  },
} as const;

export const homeMeta = (locale: Locale) =>
  pageMeta(locale, "home", { title: C[locale].title, description: C[locale].description, absoluteTitle: true });

export function HomePage({ locale }: { locale: Locale }) {
  const c = C[locale];
  const home = PAGES.home[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", "@id": `${SITE_URL}/#org`, name: ORG.name, url: SITE_URL, description: ORG.description },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: ORG.name,
        url: SITE_URL,
        inLanguage: ["en-US", "es-US"],
        publisher: { "@id": `${SITE_URL}/#org` },
      },
      {
        "@type": "FAQPage",
        inLanguage: locale === "es" ? "es-US" : "en-US",
        url: `${SITE_URL}${home}`,
        mainEntity: c.faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
      },
    ],
  };

  return (
    <>
      <main id="main">
        <section className="hero">
          <div className="container split">
            <div>
              <p className="eyebrow">{c.eyebrow}</p>
              <h1>{c.h1}</h1>
              <p className="lede">{c.lede}</p>
              <div className="actions">
                <a className="btn btn-primary" href="#join" data-role="learner" data-cta-event="join" data-cta-location="hero">
                  {c.cta}
                </a>
                <a className="btn-link" href="#teams" data-cta-event="teams" data-cta-location="hero">
                  {c.teamsLink}
                </a>
              </div>
              <p className="reassure">{c.reassure}</p>
              <ProofSlot inline locale={locale} label={c.heroProof} />
            </div>
            <CoursePreview locale={locale} />
          </div>
        </section>

        <section className="proof-bar" aria-label={c.partnersLabel}>
          <div className="container">
            <p className="proof-bar-label">{c.partners}</p>
            <ProofSlot locale={locale} label={c.partnersProof} />
          </div>
        </section>

        <section className="section">
          <div className="container narrow">
            <p className="eyebrow">{c.problemEyebrow}</p>
            <h2>{c.problemH2}</h2>
            <ul className="problem-list">
              {c.problems.map(([b, rest]) => (
                <li key={b}><strong>{b}</strong> {rest}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section tint" id="how">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{c.howEyebrow}</p>
              <h2>{c.howH2}</h2>
            </div>
            <ol className="steps">
              {c.how.map(([h, p]) => (
                <li key={h}><h3>{h}</h3><p>{p}</p></li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section" id="courses">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{c.coursesEyebrow}</p>
              <h2>{c.coursesH2}</h2>
              <p className="muted">{c.coursesNote} <a href={PAGES.courses[locale]}>{c.coursesMore}</a>.</p>
            </div>
            <ul className="topics">
              {c.topics.map(([h, p]) => (
                <li key={h}><h3>{h}</h3><p>{p}</p></li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section tint" id="teams">
          <div className="container split">
            <div>
              <p className="eyebrow">{c.teamsEyebrow}</p>
              <h2>{c.teamsH2}</h2>
              <ul className="check-list">
                {c.teamsList.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <div className="actions">
                <a className="btn btn-secondary" href="#join" data-role="employer" data-cta-event="join_employer" data-cta-location="teams">
                  {c.teamsCta}
                </a>
                <a className="btn-link" href={PAGES.teams[locale]}>{c.teamsMore}</a>
              </div>
            </div>
            <div className="aside-stack">
              <ProofSlot locale={locale} label={c.teamsProof} />
            </div>
          </div>
        </section>

        <section className="section" id="vendors">
          <div className="container split">
            <div>
              <p className="eyebrow">{c.vendorsEyebrow}</p>
              <h2>{c.vendorsH2}</h2>
              <p>{c.vendorsP}</p>
              <div className="actions">
                <a className="btn btn-secondary" href="#join" data-role="vendor" data-cta-event="join_vendor" data-cta-location="vendors">
                  {c.vendorsCta}
                </a>
                <a className="btn-link" href={PAGES.vendors[locale]}>{c.vendorsMore}</a>
              </div>
            </div>
            <div className="aside-stack">
              <ProofSlot locale={locale} label={c.vendorsProof} />
            </div>
          </div>
        </section>

        <section className="section dark" id="community">
          <div className="container split">
            <div>
              <p className="eyebrow">{c.communityEyebrow}</p>
              <h2>{c.communityH2}</h2>
              <p>{c.communityP}</p>
              <p><a className="on-dark-link" href={PAGES.community[locale]}>{c.communityMore}</a></p>
            </div>
            <ul className="chips" aria-label={c.spacesLabel}>
              {c.spaces.map((x) => <li key={x} className="chip">{x}</li>)}
            </ul>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">{c.pricingEyebrow}</p>
              <h2>{c.pricingH2}</h2>
            </div>
            <div className="tiers">
              {c.tiers.map(([h, price, p], i) => (
                <div key={h} className={i === 0 ? "tier featured" : "tier"}>
                  <h3>{h}</h3>
                  <p className="price">{price}</p>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section tint" id="faq">
          <div className="container narrow">
            <h2>{c.faqH2}</h2>
            <div className="faq">
              {c.faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>{q}</summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <JoinSection locale={locale} source="home" />
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}
