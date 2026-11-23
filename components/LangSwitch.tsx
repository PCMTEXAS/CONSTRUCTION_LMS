"use client";
// Link to the same page in the other language (or that language's home page).
import { usePathname } from "next/navigation";
import { localeOf, t, twinPath } from "@/lib/i18n";

export function LangSwitch({ className }: { className?: string }) {
  const path = usePathname() ?? "/";
  const s = t(localeOf(path));
  const other = localeOf(path) === "en" ? "es" : "en";
  return (
    <a className={className} href={twinPath(path)} hrefLang={other} lang={other} aria-label={s.otherLanguageLabel}>
      {s.otherLanguage}
    </a>
  );
}
