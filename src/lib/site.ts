/** Canonical origin. Apex withavero.com 308s to www on Vercel, so www is primary. */
export const SITE_URL = "https://www.withavero.com";

export const SITE_NAME = "Avero Studio";

export const SITE_TITLE = "Websites & MVPs Shipped in 7 Days — Avero Studio";

export const SITE_DESCRIPTION =
  "Avero is a senior design & build studio. We ship production websites, MVPs, and AI products in seven days — not seven weeks. Next.js, TypeScript, fixed pricing.";

export const CONTACT_EMAIL = "withavero@gmail.com";

/**
 * Last meaningful content change, for sitemap `lastmod`. Bump this when page
 * copy actually changes — not on every deploy, or Google stops trusting it.
 */
export const CONTENT_UPDATED = "2026-09-07";

/** Rendered in the footer and emitted as schema.org `sameAs` for entity matching. */
export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/naveentwts" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rknaveenkumar/" },
] as const;
