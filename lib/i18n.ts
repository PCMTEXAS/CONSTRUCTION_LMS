// Two languages. Page copy lives with each page (components/pages/*); this file holds
// the page paths in both languages and the words the site itself prints.
// Spanish is machine-translated, pending review by a fluent construction reviewer
// (owner decision, SOW v1.3). Formal "usted" throughout.
import type { Role } from "./site";

export type Locale = "en" | "es";

export const PAGES = {
  home: { en: "/", es: "/es/" },
  courses: { en: "/courses/", es: "/es/cursos/" },
  teams: { en: "/teams/", es: "/es/equipos/" },
  vendors: { en: "/vendors/", es: "/es/proveedores/" },
  community: { en: "/community/", es: "/es/comunidad/" },
  about: { en: "/about/", es: "/es/acerca-de/" },
  contact: { en: "/contact/", es: "/es/contacto/" },
  privacy: { en: "/privacy/", es: "/es/privacidad/" },
  terms: { en: "/terms/", es: "/es/terminos/" },
} as const;

export type PageKey = keyof typeof PAGES;

export const localeOf = (path: string): Locale => (path === "/es" || path.startsWith("/es/") ? "es" : "en");

/** The same page in the other language, or the other home page if there is no twin. */
export function twinPath(path: string): string {
  const from = localeOf(path);
  const to: Locale = from === "en" ? "es" : "en";
  const norm = path.endsWith("/") ? path : `${path}/`;
  const hit = Object.values(PAGES).find((p) => p[from] === norm);
  return hit ? hit[to] : PAGES.home[to];
}

const STRINGS = {
  en: {
    skip: "Skip to content",
    banner: "Preview build. Not public yet.",
    homeLabel: "ConstructionLMS home",
    mainNav: "Main",
    footerNav: "Footer",
    menu: "Menu",
    getAccess: "Get free access",
    otherLanguage: "Español",
    otherLanguageLabel: "Ver este sitio en español",
    poweredBy: "Powered by",
    placeholder: "Placeholder, not real proof:",
    nav: [
      { label: "Free courses", key: "courses" },
      { label: "For teams", key: "teams" },
      { label: "For vendors", key: "vendors" },
      { label: "Community", key: "community" },
    ],
    faqLabel: "FAQ",
    footer: [
      { label: "About", key: "about" },
      { label: "Contact", key: "contact" },
      { label: "Privacy", key: "privacy" },
      { label: "Terms", key: "terms" },
    ],
    join: {
      heading: "Be first in when the courses open.",
      intro: "Tell us who you are and we’ll send what matters to you: new courses, team plans or vendor spaces.",
      steps: ["1. Join the list (30 seconds).", "2. Get an email when the first courses open.", "3. Sign up free and start learning."],
      proof: "one-line quote plus security and privacy badges.",
    },
    form: {
      required: "Fields marked * are required.",
      which: "Which describes you? *",
      roles: {
        learner: "I want to take courses",
        employer: "I train a crew or company",
        vendor: "I’m a software or materials vendor",
      } as Record<Role, string>,
      email: "Work or personal email *",
      name: "Your name",
      company: "Company",
      emailError: "Enter an email address like name@company.com.",
      submit: "Get free early access",
      sending: "Saving…",
      error: "Something went wrong and your details were not saved. Please try again.",
      fine: "We use your email only to tell you about ConstructionLMS. No spam, and you can unsubscribe at any time.",
      doneTitle: "You’re on the list.",
      done: "We’ll email you when the first courses open.",
      doneEmployer: " We’ll also send team-plan details as soon as they’re ready.",
      doneVendor: " Someone from our partnerships team will contact you about vendor spaces.",
    },
    preview: {
      label: "Illustrative course preview",
      langGroup: "Course language",
      caption: "Illustration of a lesson. The course library is in development.",
    },
  },
  es: {
    skip: "Ir al contenido",
    banner: "Versión preliminar. Aún no es pública.",
    homeLabel: "Inicio de ConstructionLMS",
    mainNav: "Principal",
    footerNav: "Pie de página",
    menu: "Menú",
    getAccess: "Acceso gratis",
    otherLanguage: "English",
    otherLanguageLabel: "View this site in English",
    poweredBy: "Con la tecnología de",
    placeholder: "Marcador de posición, no es una prueba real:",
    nav: [
      { label: "Cursos gratis", key: "courses" },
      { label: "Para empresas", key: "teams" },
      { label: "Para proveedores", key: "vendors" },
      { label: "Comunidad", key: "community" },
    ],
    faqLabel: "Preguntas",
    footer: [
      { label: "Acerca de", key: "about" },
      { label: "Contacto", key: "contact" },
      { label: "Privacidad", key: "privacy" },
      { label: "Términos", key: "terms" },
    ],
    join: {
      heading: "Sea de los primeros cuando abran los cursos.",
      intro: "Díganos quién es y le enviaremos lo que le interesa: cursos nuevos, planes para empresas o espacios para proveedores.",
      steps: ["1. Inscríbase en la lista (30 segundos).", "2. Reciba un correo cuando abran los primeros cursos.", "3. Regístrese gratis y empiece a aprender."],
      proof: "una cita breve y sellos de seguridad y privacidad.",
    },
    form: {
      required: "Los campos marcados con * son obligatorios.",
      which: "¿Cuál lo describe mejor? *",
      roles: {
        learner: "Quiero tomar cursos",
        employer: "Capacito a una cuadrilla o empresa",
        vendor: "Soy proveedor de software o materiales",
      } as Record<Role, string>,
      email: "Correo electrónico del trabajo o personal *",
      name: "Su nombre",
      company: "Empresa",
      emailError: "Escriba un correo como nombre@empresa.com.",
      submit: "Obtener acceso anticipado gratis",
      sending: "Guardando…",
      error: "Algo salió mal y sus datos no se guardaron. Inténtelo de nuevo.",
      fine: "Usamos su correo solo para informarle sobre ConstructionLMS. Sin spam, y puede darse de baja cuando quiera.",
      doneTitle: "Ya está en la lista.",
      done: "Le enviaremos un correo cuando abran los primeros cursos.",
      doneEmployer: " También le enviaremos los detalles de los planes para empresas en cuanto estén listos.",
      doneVendor: " Alguien de nuestro equipo de alianzas se comunicará con usted sobre los espacios para proveedores.",
    },
    preview: {
      label: "Vista previa ilustrativa de un curso",
      langGroup: "Idioma del curso",
      caption: "Ilustración de una lección. La biblioteca de cursos está en desarrollo.",
    },
  },
} as const;

export const t = (locale: Locale) => STRINGS[locale];
