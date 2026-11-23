// Site header, shared by every page. The "Get free access" button jumps to the
// sign-up form (#join), which every page ends with.
import { Logo } from "@/components/Brand";
import { LangSwitch } from "@/components/LangSwitch";
import { MobileNav } from "@/components/MobileNav";
import { navItems } from "@/components/nav";
import { PAGES, t, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const s = t(locale);
  const items = navItems(locale);
  return (
    <header className="site-header">
      <div className="container">
        <a href={PAGES.home[locale]} className="home-link" aria-label={s.homeLabel}>
          <Logo />
        </a>
        <nav aria-label={s.mainNav} className="desktop-nav">
          <ul>
            {items.map((n) => (
              <li key={n.href}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="header-actions">
          <LangSwitch className="lang-switch desktop-only" />
          <a className="btn btn-primary btn-sm header-cta" href="#join" data-role="learner" data-cta-event="join" data-cta-location="header">
            {s.getAccess}
          </a>
          <MobileNav items={items} menuLabel={s.menu} navLabel={s.mainNav} ctaLabel={s.getAccess} />
        </div>
      </div>
    </header>
  );
}
