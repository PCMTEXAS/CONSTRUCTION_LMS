// Site header, shared by every page. The "Get free access" button jumps to the
// sign-up form (#join), which every page ends with.
import { Logo } from "@/components/Brand";
import { MobileNav } from "@/components/MobileNav";
import { NAV } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="/" className="home-link" aria-label="ConstructionLMS home">
          <Logo />
        </a>
        <nav aria-label="Main" className="desktop-nav">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <a className="btn btn-primary btn-sm header-cta" href="#join" data-role="learner" data-cta-event="join" data-cta-location="header">
            Get free access
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
