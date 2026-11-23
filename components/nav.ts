import { PAGES, t, type Locale } from "@/lib/i18n";

export type NavItem = { label: string; href: string };

/** Main menu: the four section pages plus the FAQ on the home page. */
export function navItems(locale: Locale): NavItem[] {
  const s = t(locale);
  return [
    ...s.nav.map((n) => ({ label: n.label, href: PAGES[n.key][locale] })),
    { label: s.faqLabel, href: `${PAGES.home[locale]}#faq` },
  ];
}
