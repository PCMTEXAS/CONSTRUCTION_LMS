// Per-page metadata in either language: title, description, canonical, and
// hreflang links to the twin page (en, es and x-default = English).
import type { Metadata } from "next";
import { PAGES, type Locale, type PageKey } from "./i18n";

export function pageMeta(
  locale: Locale,
  key: PageKey,
  m: { title: string; description: string; absoluteTitle?: boolean; noindex?: boolean },
): Metadata {
  return {
    title: m.absoluteTitle ? { absolute: m.title } : m.title,
    description: m.description,
    alternates: {
      canonical: PAGES[key][locale],
      languages: { en: PAGES[key].en, es: PAGES[key].es, "x-default": PAGES[key].en },
    },
    openGraph: { locale: locale === "es" ? "es_US" : "en_US" },
    ...(m.noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
