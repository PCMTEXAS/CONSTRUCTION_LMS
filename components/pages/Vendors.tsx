import { ProofSlot } from "@/components/Brand";
import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

const C = {
  en: {
    title: "Vendor training spaces",
    description: "Software and materials vendors will be able to publish branded product training for the crews who use their products and see who completed it. Coming later.",
    eyebrow: "For vendors · Coming later",
    h1: "Train the crews who use your product.",
    lede: "Software and materials vendors will be able to publish branded product training, reach the people who use their products on site, and see who completed it.",
    cta: "Talk to us about vendor spaces",
    includesH2: "What a vendor space includes",
    includes: ["A branded space for your product training", "Product and safety courses for the crews who use your products", "Completion records for learners who agree to share them with you", "An onboarding kit: content guidelines, templates and a review checklist"],
    proof: "named vendor partner and what they publish, once agreed.",
    consentH2: "Learners choose what you see",
    consent: "Vendors see completion records only for learners who agreed to share them with that vendor. Learners are asked when they enrol in a vendor’s training, their answer is recorded, and they can withdraw it at any time.",
    reviewH2: "Training, not advertising",
    review: "We review every vendor course against our content guidelines before it goes live.",
    joinH: "Talk to us about vendor spaces.",
    joinIntro: "Tell us about your company and someone from our partnerships team will contact you.",
  },
  es: {
    title: "Espacios de capacitación para proveedores",
    description: "Los proveedores de software y materiales podrán publicar capacitación sobre sus productos con su marca para las cuadrillas que los usan y ver quién la terminó. Más adelante.",
    eyebrow: "Para proveedores · Más adelante",
    h1: "Capacite a las cuadrillas que usan su producto.",
    lede: "Los proveedores de software y materiales podrán publicar capacitación sobre sus productos con su marca, llegar a quienes los usan en la obra y ver quién la terminó.",
    cta: "Hable con nosotros sobre los espacios para proveedores",
    includesH2: "Lo que incluye un espacio para proveedores",
    includes: ["Un espacio con su marca para la capacitación sobre sus productos", "Cursos sobre sus productos y de seguridad para las cuadrillas que los usan", "Registros de finalización de quienes aceptan compartirlos con usted", "Un paquete de incorporación: guías de contenido, plantillas y una lista de revisión"],
    proof: "el nombre de un proveedor socio y lo que publica, una vez acordado.",
    consentH2: "Quienes aprenden deciden lo que usted ve",
    consent: "Los proveedores solo ven los registros de finalización de quienes aceptaron compartirlos con ese proveedor. Se les pregunta al inscribirse en la capacitación de un proveedor, su respuesta queda registrada y pueden retirarla en cualquier momento.",
    reviewH2: "Capacitación, no publicidad",
    review: "Revisamos cada curso de un proveedor según nuestras guías de contenido antes de publicarlo.",
    joinH: "Hable con nosotros sobre los espacios para proveedores.",
    joinIntro: "Cuéntenos sobre su empresa y alguien de nuestro equipo de alianzas se comunicará con usted.",
  },
} as const;

export const vendorsMeta = (l: Locale) => pageMeta(l, "vendors", { title: C[l].title, description: C[l].description });

export function VendorsPage({ locale }: { locale: Locale }) {
  const c = C[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede}>
        <a className="btn btn-primary" href="#join" data-role="vendor" data-cta-event="join_vendor" data-cta-location="vendors-hero">{c.cta}</a>
      </PageHero>
      <section className="section">
        <div className="container split">
          <div>
            <h2>{c.includesH2}</h2>
            <ul className="check-list">{c.includes.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div className="aside-stack"><ProofSlot locale={locale} label={c.proof} /></div>
        </div>
      </section>
      <section className="section tint">
        <div className="container narrow">
          <h2>{c.consentH2}</h2>
          <p>{c.consent}</p>
          <h2>{c.reviewH2}</h2>
          <p>{c.review}</p>
        </div>
      </section>
      <JoinSection locale={locale} source="vendors" role="vendor" heading={c.joinH} intro={c.joinIntro} />
    </main>
  );
}
