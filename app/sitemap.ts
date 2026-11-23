import type { MetadataRoute } from "next";
import { PAGES } from "@/lib/i18n";
import { SITE_URL, SITEMAP_KEYS } from "@/lib/site";

// Both languages, each entry pointing at its twin (hreflang in the sitemap).
export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_KEYS.flatMap((k) =>
    (["en", "es"] as const).map((l) => ({
      url: `${SITE_URL}${PAGES[k][l]}`,
      changeFrequency: "weekly" as const,
      priority: k === "home" ? 1 : 0.7,
      alternates: { languages: { en: `${SITE_URL}${PAGES[k].en}`, es: `${SITE_URL}${PAGES[k].es}` } },
    })),
  );
}
