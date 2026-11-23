// Site footer, shared by every page.
import { Logo } from "@/components/Brand";
import { FOOTER_LINKS, ORG } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <Logo onDark />
        <nav aria-label="Footer">
          <ul className="footer-links">
            {FOOTER_LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
        <p>
          Powered by <a href={ORG.poweredBy.url} rel="noopener">{ORG.poweredBy.name}</a>
        </p>
        <p className="fine">© {new Date().getFullYear()} ConstructionLMS</p>
      </div>
    </footer>
  );
}
