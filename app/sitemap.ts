import type { MetadataRoute } from "next";
import { SITE_URL, SITEMAP_PATHS } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITEMAP_PATHS.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "weekly", priority: p === "/" ? 1 : 0.7 }));
}
