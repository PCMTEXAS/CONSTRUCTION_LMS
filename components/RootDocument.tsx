// Two root layouts share this document: app/(en) sets lang="en" and app/(es) sets
// lang="es", so screen readers and search engines read each page in its language.
// Same pattern as the DigitalChalk site (PCMTEXAS/DC_NET_NEW).
import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { t, type Locale } from "@/lib/i18n";
import { ALLOW_INDEXING, ORG, SITE_URL } from "@/lib/site";
import "@/app/globals.css";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-noto", display: "swap" });

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: ORG.name, template: `%s | ${ORG.name}` },
  description: ORG.description,
  robots: ALLOW_INDEXING ? { index: true, follow: true } : { index: false, follow: false },
};

export const rootViewport: Viewport = { themeColor: "#1B2631" };

export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  const s = t(locale);
  return (
    <html lang={locale} className={noto.variable}>
      <body>
        <a className="skip" href="#main">{s.skip}</a>
        {ALLOW_INDEXING ? null : <div className="test-banner">{s.banner}</div>}
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
        <Analytics />
      </body>
    </html>
  );
}
