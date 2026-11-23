// DRAFT legal pages: not reviewed by counsel. Kept out of the sitemap and never
// indexed until approved. Privacy states only facts about the early-access form.
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

const DRAFT = {
  en: { strong: "Draft, not yet in effect.", rest: "This page is under legal review." },
  es: { strong: "Borrador, aún no vigente.", rest: "Esta página está en revisión legal." },
} as const;

const PRIVACY = {
  en: {
    title: "Privacy (draft)",
    description: "What the ConstructionLMS early-access form collects and why. Draft pending legal review.",
    eyebrow: "Privacy",
    h1: "Privacy",
    lede: "Our full privacy policy is being prepared with legal counsel and will be published before courses open.",
    sections: [
      ["What the early-access form collects", "Which option describes you (learner, employer or vendor), your email address, and, if you give them, your name and company. We also record the language of the page and which page you signed up from."],
      ["Why", "To email you about ConstructionLMS: when courses open, team-plan details or vendor spaces, depending on the option you chose."],
      ["Where it is kept", "In a database hosted in the United States."],
    ],
  },
  es: {
    title: "Privacidad (borrador)",
    description: "Qué recopila el formulario de acceso anticipado de ConstructionLMS y para qué. Borrador pendiente de revisión legal.",
    eyebrow: "Privacidad",
    h1: "Privacidad",
    lede: "Nuestra política de privacidad completa se está preparando con asesoría legal y se publicará antes de que abran los cursos.",
    sections: [
      ["Qué recopila el formulario de acceso anticipado", "La opción que lo describe (quien aprende, empleador o proveedor), su correo electrónico y, si los da, su nombre y empresa. También registramos el idioma de la página y desde qué página se inscribió."],
      ["Para qué", "Para enviarle correos sobre ConstructionLMS: cuando abran los cursos, los detalles de los planes para empresas o los espacios para proveedores, según la opción que eligió."],
      ["Dónde se guarda", "En una base de datos alojada en los Estados Unidos."],
    ],
  },
} as const;

const TERMS = {
  en: {
    title: "Terms of use (draft)",
    description: "ConstructionLMS terms of use. Being prepared with legal counsel.",
    eyebrow: "Terms of use",
    h1: "Terms of use",
    lede: "Our terms of use are being prepared with legal counsel and will be published before courses open.",
  },
  es: {
    title: "Términos de uso (borrador)",
    description: "Términos de uso de ConstructionLMS. Se están preparando con asesoría legal.",
    eyebrow: "Términos de uso",
    h1: "Términos de uso",
    lede: "Nuestros términos de uso se están preparando con asesoría legal y se publicarán antes de que abran los cursos.",
  },
} as const;

export const privacyMeta = (l: Locale) => pageMeta(l, "privacy", { title: PRIVACY[l].title, description: PRIVACY[l].description, noindex: true });
export const termsMeta = (l: Locale) => pageMeta(l, "terms", { title: TERMS[l].title, description: TERMS[l].description, noindex: true });

function DraftNote({ locale }: { locale: Locale }) {
  return <p className="draft-note" role="note"><strong>{DRAFT[locale].strong}</strong> {DRAFT[locale].rest}</p>;
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const c = PRIVACY[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede} />
      <section className="section">
        <div className="container narrow">
          <DraftNote locale={locale} />
          {c.sections.map(([h, p]) => (
            <div key={h}>
              <h2>{h}</h2>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>
      <JoinSection locale={locale} source="privacy" />
    </main>
  );
}

export function TermsPage({ locale }: { locale: Locale }) {
  const c = TERMS[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede} />
      <section className="section">
        <div className="container narrow"><DraftNote locale={locale} /></div>
      </section>
      <JoinSection locale={locale} source="terms" />
    </main>
  );
}
