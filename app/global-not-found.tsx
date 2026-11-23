// One 404 page for any unknown address, in both languages. Needed because the site
// has two root layouts (app/(en) and app/(es)); see next.config.ts.
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Logo } from "@/components/Brand";
import { PAGES } from "@/lib/i18n";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-noto", display: "swap" });

export const metadata: Metadata = {
  title: "Page not found · Página no encontrada | ConstructionLMS",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={noto.variable}>
      <body>
        <header className="site-header">
          <div className="container">
            <a href={PAGES.home.en} className="home-link" aria-label="ConstructionLMS home">
              <Logo />
            </a>
          </div>
        </header>
        <main id="main">
          <section className="hero page-hero">
            <div className="container narrow">
              <p className="eyebrow">Page not found</p>
              <h1>We couldn’t find that page.</h1>
              <p className="lede">It may have moved, or the address may be mistyped.</p>
              <div className="actions">
                <a className="btn btn-primary" href={PAGES.home.en}>Go to the home page</a>
              </div>
              <div lang="es" className="nf-es">
                <h2>No encontramos esa página.</h2>
                <p className="lede">Puede que se haya movido o que la dirección tenga un error.</p>
                <div className="actions">
                  <a className="btn btn-secondary" href={PAGES.home.es}>Ir a la página de inicio en español</a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
