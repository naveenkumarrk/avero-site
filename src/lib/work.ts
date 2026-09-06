/**
 * Content for /work. Kept as data (like services.ts) so the page renderer and
 * the JSON-LD read from one source and can't drift apart.
 *
 * Two tiers by design:
 *   FEATURED — full product work that can carry a written case study.
 *   GALLERY  — the daily design practice, shown as a scannable wall with captions.
 *
 * All of it is self-initiated concept work, and the page says so. No client
 * names and no invented metrics.
 */

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  /** The problem the interface had to solve. */
  summary: string;
  /** What was actually designed — concrete surfaces, not adjectives. */
  scope: string[];
  cover: string;
  gallery?: string[];
  /** Tile background, sampled from each design so covers sit on their own tone. */
  bg: string;
};

export type GalleryItem = {
  src: string;
  name: string;
  caption: string;
  bg: string;
  /** Portrait pieces get a taller tile in the staggered wall. */
  tall?: boolean;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "roger",
    name: "Roger",
    category: "SaaS · CRM",
    tagline: "A sales CRM that fits in one screen",
    summary:
      "The deepest piece here: a full sales CRM designed screen by screen rather than as a single hero shot. The hard part of CRM design is density — a rep needs counts, stage, owner, source and next action visible at once without the table turning into noise. The layout solves it with a fixed metric strip, one accent colour reserved for state, and everything else in greyscale.",
    scope: [
      "Leads table with stage, owner and source",
      "Pipeline board across six stages",
      "Customer profile with activity timeline",
      "Tasks, call logs, SMS and contracts",
      "Sidebar variants and a full icon set",
    ],
    cover: "/images/roger-leads.webp",
    gallery: [
      "/images/roger-stages.webp",
      "/images/roger-profile.webp",
      "/images/roger-tasks.webp",
      "/images/roger-sidebar.webp",
      "/images/roger-icons.webp",
      "/images/roger-slide.webp",
    ],
    bg: "#0f2027",
  },
  {
    slug: "butcherbhaiss",
    name: "ButcherBhaiss",
    category: "Mobile · Marketplace",
    tagline: "A two-sided app for a butcher's shop",
    summary:
      "A meat delivery marketplace designed for both sides of the transaction — the customer ordering and the shop fulfilling. Two-sided products usually get one polished side and one afterthought; here the seller's dashboard, order queue and product editor got the same attention as the storefront, because the shop owner is the one who has to use it every day.",
    scope: [
      "Onboarding, login and phone verification",
      "Storefront, shop browse and product detail",
      "Cart, checkout and order confirmation",
      "Seller dashboard with revenue and reviews",
      "Order queue, product editor and payouts",
    ],
    cover: "/images/butcher-allscreens.webp",
    gallery: ["/images/butcher-user.webp", "/images/butcher-seller.webp"],
    bg: "#151515",
  },
  {
    slug: "databuddy",
    name: "Databuddy",
    category: "SaaS · Analytics",
    tagline: "Privacy-first analytics for developers",
    summary:
      "A product analytics tool whose whole pitch is that it does not follow users around the web. The design problem was making 'we collect less' read as a capability rather than a limitation — so the dashboard leads with the numbers a developer actually wants, and privacy is argued through a feature system rather than a badge.",
    scope: [
      "Marketing site and hero",
      "Live dashboard UI with metric tables",
      "Six-card feature system for privacy claims",
      "Compliance section",
    ],
    cover: "/images/og-image.webp",
    gallery: [
      "/images/privacy-feature.webp",
      "/images/day-25.webp",
      "/images/day-26.webp",
      "/images/day-27.webp",
      "/images/day-28.webp",
      "/images/day-29.webp",
    ],
    bg: "#0d1117",
  },
  {
    slug: "windroof",
    name: "windRoof",
    category: "Energy · Industrial",
    tagline: "Powering the future with clean wind energy",
    summary:
      "A marketing site for an industrial energy operator. Industrial buyers scan for proof, not atmosphere, so the hero photography is paired immediately with a generated-energy figure and an impact block rather than a second paragraph of copy.",
    scope: ["Landing page", "Impact and stats sections", "Contact conversion path"],
    cover: "/images/day-6.webp",
    bg: "#eaf2e6",
  },
];

/** Everything else — the daily practice, shown as a wall. */
export const GALLERY: GalleryItem[] = [
  { src: "/images/day-34.webp", name: "Lumina", caption: "AI workflow platform", bg: "#0b1836" },
  { src: "/images/day-17.webp", name: "Callscall", caption: "Analytics dashboard", bg: "#f4f4f2" },
  { src: "/images/day-18-21.webp", name: "SecureMint", caption: "Transaction security", bg: "#0a0a0f" },
  { src: "/images/day-16.webp", name: "Shield", caption: "Enterprise data security", bg: "#0a0a0a" },
  { src: "/images/day-11.webp", name: "Pulse", caption: "Audio hardware", bg: "#eef2fb" },
  { src: "/images/day-24-1.webp", name: "Leads", caption: "CRM dashboard", bg: "#eef1f5" },
  { src: "/images/day-23-1.webp", name: "Workspace", caption: "Task and board views", bg: "#f2f4f7" },
  { src: "/images/day-8.webp", name: "Valut", caption: "Public records gateway", bg: "#0a0a0a" },
  { src: "/images/day-13.webp", name: "Gravity Sports", caption: "Custom teamwear", bg: "#0d0d0d" },
  { src: "/images/day-2.webp", name: "RealChain", caption: "Tokenised assets", bg: "#171423" },
  { src: "/images/day-22.webp", name: "Design Studio", caption: "Agency site", bg: "#dfe9e2" },
  { src: "/images/day-12.webp", name: "Ideas", caption: "Creative studio", bg: "#1d2a10" },
  { src: "/images/day-7.webp", name: "Pricing", caption: "Plan comparison", bg: "#f5f5f3" },
  { src: "/images/day-1.webp", name: "Awwarts", caption: "Art marketplace", bg: "#f7f6f2" },
  { src: "/images/day-9.webp", name: "Prompt", caption: "AI image workspace", bg: "#12102a" },
  { src: "/images/day-3.webp", name: "Devices", caption: "Product render", bg: "#8a8a8a" },
  { src: "/images/day-29-1.webp", name: "Feature Flags", caption: "Feature card", bg: "#101010" },
  { src: "/images/roger-leads-laptop.webp", name: "Roger", caption: "Leads, in context", bg: "#0f2027" },
];

export const WORK_SLUGS = CASE_STUDIES.map((c) => c.slug);
