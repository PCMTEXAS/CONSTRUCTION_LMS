// Site footer, shared by every page.
import { Logo } from "@/components/Brand";
import { LangSwitch } from "@/components/LangSwitch";
import { PAGES, t, type Locale } from "@/lib/i18n";
import { ORG } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const s = t(locale);
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <Logo onDark />
        <nav aria-label={s.footerNav}>
          <ul className="footer-links">
            {s.footer.map((l) => (
              <li key={l.key}><a href={PAGES[l.key][locale]}>{l.label}</a></li>
            ))}
            <li><LangSwitch /></li>
          </ul>
        </nav>
        <p>
          {s.poweredBy} <a href={ORG.poweredBy.url} rel="noopener">{ORG.poweredBy.name}</a>
        </p>
        <p className="fine">© {new Date().getFullYear()} ConstructionLMS</p>
      </div>
    </footer>
  );
}
