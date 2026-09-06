/**
 * Content for /work. Kept as data (like services.ts) so the page renderer and
 * the JSON-LD read from one source and can't drift apart.
 *
 * Two tiers by design:
 *   FEATURED — full product work, shown screen by screen.
 *   GALLERY  — the daily design practice, shown as a scannable wall.
 *
 * Every image opens full size in the viewer, so `shots` carry their own alt
 * and caption rather than relying on the surrounding copy.
 *
 * All of it is self-initiated concept work, and the page says so. No client
 * names and no invented metrics.
 */

export type Shot = { src: string; alt: string; caption?: string };

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  /** The problem the interface had to solve. */
  summary: string;
  /** What was actually designed — concrete surfaces, not adjectives. */
  scope: string[];
  /**
   * "desktop" leads with a large cover; "phone" lays every screen out as a
   * device-sized grid, because a 375pt screen blown up to column width just
   * looks like a mistake.
   */
  layout: "desktop" | "phone";
  /** For "desktop", the first shot is the cover and the rest form the strip. */
  shots: Shot[];
  /** Tile background, sampled from each design so shots sit on their own tone. */
  bg: string;
};

export type GalleryItem = Shot & { bg: string };

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "roger",
    name: "Roger",
    category: "SaaS · CRM",
    tagline: "A sales CRM that fits in one screen",
    layout: "desktop",
    summary:
      "The deepest piece here: a full sales CRM designed screen by screen rather than as a single hero shot. The hard part of CRM design is density — a rep needs count, stage, owner, source and next action visible at once without the table turning into noise. The layout solves it with a fixed metric strip, one accent colour reserved for state, and everything else in greyscale.",
    scope: [
      "Leads table with stage, owner, source and filters",
      "Pipeline board and a full stage view",
      "Customer profile with activity timeline",
      "Tasks, SMS threads and automation builder",
      "Login and register, dashboard and reporting",
    ],
    shots: [
      { src: "/images/work/roger/leads.webp", alt: "Leads", caption: "Table with stage, owner and source" },
      { src: "/images/work/roger/dashboard.webp", alt: "Dashboard", caption: "Reporting overview" },
      { src: "/images/work/roger/pipeline.webp", alt: "Pipeline", caption: "Deals by stage" },
      { src: "/images/work/roger/all-stages.webp", alt: "All stages", caption: "Full board view" },
      { src: "/images/work/roger/profile.webp", alt: "Customer profile", caption: "Detail and activity timeline" },
      { src: "/images/work/roger/tasks.webp", alt: "Tasks", caption: "Assignment and due dates" },
      { src: "/images/work/roger/automations-edit.webp", alt: "Automations", caption: "Rule builder" },
      { src: "/images/work/roger/sms-page-2.webp", alt: "SMS", caption: "Conversation threads" },
      { src: "/images/work/roger/leads-filters-applied.webp", alt: "Leads, filtered", caption: "Filters applied" },
      { src: "/images/work/roger/login-page.webp", alt: "Log in", caption: "Split layout with testimonial" },
      { src: "/images/work/roger/register-page.webp", alt: "Register", caption: "Account creation" },
      { src: "/images/work/roger/profile-page.webp", alt: "Profile settings", caption: "Company details" },
    ],
    bg: "#0f2027",
  },
  {
    slug: "butcherbhaiss",
    name: "ButcherBhaiss",
    category: "Mobile · Marketplace",
    tagline: "Fresh cuts, ordered from the shop down the road",
    layout: "phone",
    summary:
      "A meat delivery marketplace built around a category most delivery apps handle badly. Cuts are sold by weight, by breed and by preparation, so the product page carries choices a food app never has to make — and the quantity sheet had to hold breed, weight and skin-on or skin-off without becoming a form. Local shops are the inventory, so the browse flow leads with nearby butchers rather than dishes.",
    scope: [
      "Onboarding and login",
      "Home, search and nearby-shop browse",
      "Shop pages and product detail by cut",
      "Quantity sheet for breed, weight and prep",
      "Cart, payment method and order tracking",
    ],
    shots: [
      { src: "/images/work/butcher/home.webp", alt: "Home", caption: "Delivery address and categories" },
      { src: "/images/work/butcher/shop-list.webp", alt: "Shop list", caption: "Butchers nearby" },
      { src: "/images/work/butcher/shop-details-1.webp", alt: "Shop", caption: "Storefront and stock" },
      { src: "/images/work/butcher/product-page.webp", alt: "Product", caption: "Cut detail and breeds" },
      { src: "/images/work/butcher/quantity-adder.webp", alt: "Quantity", caption: "Breed, weight and prep" },
      { src: "/images/work/butcher/orders-page.webp", alt: "Cart", caption: "Order list and total" },
      { src: "/images/work/butcher/payment-method.webp", alt: "Payment", caption: "Pickup time and method" },
      { src: "/images/work/butcher/my-orders-01.webp", alt: "My orders", caption: "Ongoing and history" },
      { src: "/images/work/butcher/search.webp", alt: "Search", caption: "Recent and nearby" },
      { src: "/images/work/butcher/chef-food-details.webp", alt: "Item details", caption: "Description and breeds" },
      { src: "/images/work/butcher/log-in-empty.webp", alt: "Log in", caption: "Empty state" },
      { src: "/images/work/butcher/edit-profile.webp", alt: "Edit profile", caption: "Account details" },
    ],
    bg: "#f6efe9",
  },
  {
    slug: "databuddy",
    name: "Databuddy",
    category: "SaaS · Analytics",
    tagline: "Privacy-first analytics for developers",
    layout: "desktop",
    summary:
      "A product analytics tool whose whole pitch is that it does not follow users around the web. The design problem was making 'we collect less' read as a capability rather than a limitation — so the dashboard leads with the numbers a developer actually wants, and privacy is argued through a feature system rather than a badge.",
    scope: [
      "Marketing site and hero",
      "Live dashboard UI with metric tables",
      "Six-card feature system for privacy claims",
      "Compliance section",
    ],
    shots: [
      { src: "/images/work/day/databuddy.webp", alt: "Databuddy", caption: "Landing and dashboard" },
      { src: "/images/work/day/privacy-feature.webp", alt: "Compliance", caption: "Feature section" },
      { src: "/images/work/day/day-25.webp", alt: "Privacy first", caption: "Feature card" },
      { src: "/images/work/day/day-26.webp", alt: "Data ownership", caption: "Feature card" },
      { src: "/images/work/day/day-27.webp", alt: "Transparency", caption: "Feature card" },
      { src: "/images/work/day/day-28.webp", alt: "Real-time analytics", caption: "Feature card" },
      { src: "/images/work/day/day-29.webp", alt: "Energy efficient", caption: "Feature card" },
      { src: "/images/work/day/day-30.webp", alt: "Feature flags", caption: "Feature card" },
    ],
    bg: "#0d1117",
  },
  {
    slug: "windroof",
    name: "windRoof",
    category: "Energy · Industrial",
    tagline: "Powering the future with clean wind energy",
    layout: "desktop",
    summary:
      "A marketing site for an industrial energy operator. Industrial buyers scan for proof, not atmosphere, so the hero photography is paired immediately with a generated-energy figure and an impact block rather than a second paragraph of copy.",
    scope: ["Landing page", "Impact and stats sections", "Contact conversion path"],
    shots: [
      { src: "/images/work/day/day-6.webp", alt: "windRoof", caption: "Landing page" },
    ],
    bg: "#eaf2e6",
  },
];

/** Everything else — the daily practice, shown as a wall. */
export const GALLERY: GalleryItem[] = [
  { src: "/images/work/day/day-34.webp", alt: "Lumina", caption: "AI workflow platform", bg: "#0b1836" },
  { src: "/images/work/day/day-17.webp", alt: "Callscall", caption: "Analytics dashboard", bg: "#f4f4f2" },
  { src: "/images/work/day/day-18-21.webp", alt: "SecureMint", caption: "Transaction security", bg: "#0a0a0f" },
  { src: "/images/work/day/day-16.webp", alt: "Shield", caption: "Enterprise data security", bg: "#0a0a0a" },
  { src: "/images/work/day/day-11.webp", alt: "Pulse", caption: "Audio hardware", bg: "#eef2fb" },
  { src: "/images/work/day/day-23.webp", alt: "Workspace", caption: "Task and board views", bg: "#f2f4f7" },
  { src: "/images/work/day/day-23-1.webp", alt: "Leads", caption: "CRM dashboard", bg: "#eef1f5" },
  { src: "/images/work/day/day-8.webp", alt: "Valut", caption: "Public records gateway", bg: "#0a0a0a" },
  { src: "/images/work/day/day-13.webp", alt: "Gravity Sports", caption: "Custom teamwear", bg: "#0d0d0d" },
  { src: "/images/work/day/day-2.webp", alt: "RealChain", caption: "Tokenised assets", bg: "#171423" },
  { src: "/images/work/day/day-22.webp", alt: "Design Studio", caption: "Agency site", bg: "#dfe9e2" },
  { src: "/images/work/day/day-12.webp", alt: "Ideas", caption: "Creative studio", bg: "#1d2a10" },
  { src: "/images/work/day/day-15.webp", alt: "Milestones", caption: "Fintech rewards", bg: "#141414" },
  { src: "/images/work/day/day-33.webp", alt: "Varsity Sports", caption: "Teamwear launch", bg: "#101418" },
  { src: "/images/work/day/day-35.webp", alt: "Rakuta", caption: "Paid ads agency", bg: "#0f0f14" },
  { src: "/images/work/day/day-7.webp", alt: "Pricing", caption: "Plan comparison", bg: "#f5f5f3" },
  { src: "/images/work/day/day-1.webp", alt: "Awwarts", caption: "Art marketplace", bg: "#f7f6f2" },
  { src: "/images/work/day/day-9.webp", alt: "Prompt", caption: "AI image workspace", bg: "#12102a" },
  { src: "/images/work/day/day-14.webp", alt: "Studio Contact", caption: "Designer landing", bg: "#141414" },
  { src: "/images/work/day/day-4.webp", alt: "Assistant", caption: "Mobile AI chat", bg: "#8a8a8a" },
  { src: "/images/work/day/day-5.webp", alt: "Handheld", caption: "Product render", bg: "#b9b3ab" },
  { src: "/images/work/day/day-3.webp", alt: "Devices", caption: "Product render", bg: "#8a8a8a" },
];

export const WORK_SLUGS = CASE_STUDIES.map((c) => c.slug);
