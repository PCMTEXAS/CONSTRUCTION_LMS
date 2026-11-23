import { JoinSection } from "@/components/JoinSection";
import { PageHero } from "@/components/PageHero";
import type { Locale } from "@/lib/i18n";
import { pageMeta } from "@/lib/seo";

const C = {
  en: {
    title: "Contact",
    description: "Get in touch with ConstructionLMS about free courses, team plans or vendor spaces.",
    eyebrow: "Contact",
    h1: "Get in touch.",
    lede: "Use the form below. Choose the option that fits you and we’ll follow up by email.",
    joinH: "Tell us who you are.",
    joinIntro: "Learners hear when courses open. Employers get team-plan details. Vendors hear from our partnerships team.",
  },
  es: {
    title: "Contacto",
    description: "Comuníquese con ConstructionLMS sobre cursos gratis, planes para empresas o espacios para proveedores.",
    eyebrow: "Contacto",
    h1: "Comuníquese con nosotros.",
    lede: "Use el formulario de abajo. Elija la opción que mejor lo describa y le daremos seguimiento por correo electrónico.",
    joinH: "Díganos quién es.",
    joinIntro: "Quienes aprenden reciben aviso cuando abran los cursos. Los empleadores reciben los detalles de los planes para empresas. Los proveedores reciben noticias de nuestro equipo de alianzas.",
  },
} as const;

export const contactMeta = (l: Locale) => pageMeta(l, "contact", { title: C[l].title, description: C[l].description });

export function ContactPage({ locale }: { locale: Locale }) {
  const c = C[locale];
  return (
    <main id="main">
      <PageHero eyebrow={c.eyebrow} title={c.h1} lede={c.lede} />
      <JoinSection locale={locale} source="contact" heading={c.joinH} intro={c.joinIntro} />
    </main>
  );
}
