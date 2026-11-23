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

export const NAV = [
  { label: "Free courses", href: "/courses/" },
  { label: "For teams", href: "/teams/" },
  { label: "For vendors", href: "/vendors/" },
  { label: "Community", href: "/community/" },
  { label: "FAQ", href: "/#faq" },
];

export const FOOTER_LINKS = [
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Terms", href: "/terms/" },
];

/** Pages listed in the sitemap. Privacy and Terms stay out until counsel approves them. */
export const SITEMAP_PATHS = ["/", "/courses/", "/teams/", "/vendors/", "/community/", "/about/", "/contact/"];

export type Role = "learner" | "employer" | "vendor";
export const ROLES: { value: Role; label: string }[] = [
  { value: "learner", label: "I want to take courses" },
  { value: "employer", label: "I train a crew or company" },
  { value: "vendor", label: "I'm a software or materials vendor" },
];
