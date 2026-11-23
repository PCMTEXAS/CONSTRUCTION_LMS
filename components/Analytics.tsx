"use client";
// GA4 stays OFF until NEXT_PUBLIC_GA4_ID is set (same pattern as the DigitalChalk site).
// Events: cta_click (any element with data-cta-event), form_start, form_submit (JoinForm),
// scroll_depth at 50% and 90%.
import Script from "next/script";
import { useEffect } from "react";

const GA4 = process.env.NEXT_PUBLIC_GA4_ID;

export function Analytics() {
  useEffect(() => {
    if (!GA4) return;
    const gtag = (...a: unknown[]) => (window as unknown as { gtag?: (...x: unknown[]) => void }).gtag?.(...a);
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cta-event]");
      if (el) gtag("event", "cta_click", { cta: el.dataset.ctaEvent, cta_location: el.dataset.ctaLocation ?? "body" });
    };
    const sent = new Set<number>();
    const onScroll = () => {
      const pct = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      for (const mark of [50, 90]) if (pct * 100 >= mark && !sent.has(mark)) { sent.add(mark); gtag("event", "scroll_depth", { percent: mark }); }
    };
    document.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { document.removeEventListener("click", onClick); window.removeEventListener("scroll", onScroll); };
  }, []);
  if (!GA4) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4}');`}
      </Script>
    </>
  );
}
