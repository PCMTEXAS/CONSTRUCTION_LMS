import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { ALLOW_INDEXING, ORG, SITE_URL } from "@/lib/site";
import "./globals.css";

const noto = Noto_Sans({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-noto", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: ORG.name, template: `%s | ${ORG.name}` },
  description: ORG.description,
  robots: ALLOW_INDEXING ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#1B2631" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={noto.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {ALLOW_INDEXING ? null : <div className="test-banner">Preview build. Not public yet.</div>}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
