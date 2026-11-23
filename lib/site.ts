// Site-wide settings. Indexing stays OFF until launch (NEXT_PUBLIC_ALLOW_INDEXING=true).
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.constructionlms.com";

export const ORG = {
  name: "ConstructionLMS",
  description:
    "Free, practical training for the construction workforce, in English and Spanish, with a certificate for every course.",
  poweredBy: { name: "DigitalChalk", url: "https://www.digitalchalk.com/" },
};

/** Proof slots (logos, quotes, ratings) are placeholders until real proof is supplied.
 *  They show on previews and are never rendered once indexing is turned on. */
export const SHOW_PLACEHOLDERS = !ALLOW_INDEXING;

/** Pages listed in the sitemap (both languages). Privacy and Terms stay out until counsel approves them. */
export const SITEMAP_KEYS = ["home", "courses", "teams", "vendors", "community", "about", "contact"] as const;

export type Role = "learner" | "employer" | "vendor";
export const ROLES: Role[] = ["learner", "employer", "vendor"];
