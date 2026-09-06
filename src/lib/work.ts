/**
 * Case studies for /work. Kept as data (like services.ts) so the page renderer
 * and the JSON-LD read from one source and can't drift apart.
 *
 * These are self-initiated concept pieces from a daily design practice, and the
 * copy says so. No client names, no invented metrics — a prospect who asks
 * "what shipped?" should get the same answer the page gives.
 */

export type CaseStudy = {
  slug: string;
  /** Product name as designed in the piece. */
  name: string;
  /** Sector/surface label, used as the filter chip and eyebrow. */
  category: string;
  tagline: string;
  /** Two or three sentences: the problem the interface had to solve. */
  summary: string;
  /** What was actually designed — concrete surfaces, not adjectives. */
  scope: string[];
  cover: string;
  /** Supporting frames, shown as a strip under the cover. */
  gallery?: string[];
  /** Tile background, sampled from each design so covers sit on their own tone. */
  bg: string;
};

export const CASE_STUDIES: CaseStudy[] = [
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
    slug: "lumina",
    name: "Lumina",
    category: "SaaS · AI",
    tagline: "AI that connects your tools and gets work done",
    summary:
      "An AI orchestration product for teams. Category pages in this space all say the same sentence, so the layout does the differentiating: the integration surface is shown immediately, and the hero states the outcome rather than the technology.",
    scope: ["Landing page", "Integration showcase", "Logo wall and social proof band"],
    cover: "/images/day-34.webp",
    bg: "#0b1836",
  },
  {
    slug: "callscall",
    name: "Callscall",
    category: "SaaS · Dashboard",
    tagline: "Smarter insights, faster decisions",
    summary:
      "A reporting tool where the dashboard is the product. The page shows the real interface above the fold instead of an abstract illustration, because a buyer evaluating an analytics tool wants to see the table they will live in.",
    scope: ["Landing page", "Dashboard interface", "Data table and metric cards"],
    cover: "/images/day-17.webp",
    bg: "#f4f4f2",
  },
  {
    slug: "securemint",
    name: "SecureMint",
    category: "Fintech · Security",
    tagline: "Protect every transaction, every time",
    summary:
      "A four-day build on transaction security for crypto businesses. Trust is the entire conversion argument in fintech, so the visual weight goes to the layered card stack and a dark, deliberately restrained palette.",
    scope: ["Multi-section landing page", "Card stack visual system", "Pricing and plan structure"],
    cover: "/images/day-18-21.webp",
    bg: "#0a0a0f",
  },
  {
    slug: "leads-workspace",
    name: "Leads Workspace",
    category: "Product UI · CRM",
    tagline: "A CRM that fits in one screen",
    summary:
      "Interface work rather than marketing: a leads dashboard and a task workspace built around dense information without the usual CRM clutter. The constraint was keeping counts, filters and record detail legible at real data volumes.",
    scope: ["Leads dashboard", "Task and board views", "Filter, search and detail panels"],
    cover: "/images/day-24-1.webp",
    gallery: ["/images/day-23-1.webp"],
    bg: "#eef1f5",
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
  {
    slug: "shield",
    name: "Shield",
    category: "Security · Enterprise",
    tagline: "Your data secured. Always.",
    summary:
      "An enterprise security landing page. The world-map coverage visual carries the credibility argument that enterprise buyers look for, with the product claim kept to a single line above it.",
    scope: ["Landing page", "Global coverage visual", "Feature grid"],
    cover: "/images/day-16.webp",
    bg: "#0a0a0a",
  },
  {
    slug: "pulse",
    name: "Pulse",
    category: "Hardware · Product",
    tagline: "Beyond sound. Built with soul.",
    summary:
      "Product marketing for a retro-modern audio device. Hardware has to be sold on feel, so the page is built around one rendered hero object and typography that carries the brand voice on its own.",
    scope: ["Product landing page", "Hardware render composition", "Retail conversion path"],
    cover: "/images/day-11.webp",
    bg: "#eef2fb",
  },
];

export const WORK_SLUGS = CASE_STUDIES.map((c) => c.slug);
