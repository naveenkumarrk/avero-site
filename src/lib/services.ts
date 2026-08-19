/**
 * Content for the standalone service pages. Kept as data (like constants.ts) so
 * both pages share one renderer and the JSON-LD can't drift from the visible copy.
 */

export type ServiceFaq = { q: string; a: string };

export type ServicePage = {
  slug: string;
  /** <title> — keyword first, brand last, under ~60 chars. */
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** schema.org Service.name / .serviceType */
  serviceName: string;
  serviceType: string;
  /** Breadcrumb + nav label. */
  navLabel: string;
  eyebrow: string;
  h1: string;
  lede: string;
  /** Short label/value facts. Highly quotable for answer engines. */
  atAGlance: { label: string; value: string }[];
  deliverablesHeading: string;
  deliverables: { title: string; desc: string }[];
  stack: { group: string; items: string[] }[];
  goodFit: string[];
  notFit: string[];
  faqs: ServiceFaq[];
  related: { label: string; href: string; blurb: string }[];
};

const SPRINT_PRICE = "$14k flat";

export const MVP_DEVELOPMENT: ServicePage = {
  slug: "mvp-development",
  metaTitle: "MVP Development Agency — Launch in 7 Days | Avero",
  metaDescription:
    "Avero builds production-ready MVPs in seven days — Next.js, TypeScript, auth, payments, deployed. $14k flat, you own the repo. Not a no-code prototype.",
  keywords: [
    "MVP development",
    "MVP development agency",
    "MVP development company",
    "build an MVP fast",
    "MVP development services for startups",
    "Next.js MVP development",
  ],
  serviceName: "MVP development",
  serviceType: "MVP development for startups",
  navLabel: "MVP development",
  eyebrow: "MVP development",
  h1: "MVP development, live in seven days",
  lede:
    "Most agencies quote six to twelve weeks to get a first version in front of users. We scope on Monday and hand you a live URL the following Monday — production code on your own repo, not a no-code prototype you outgrow in a month.",
  atAGlance: [
    { label: "Timeline", value: "7 days, kickoff to live URL" },
    { label: "Price", value: "$14k flat per sprint" },
    { label: "Stack", value: "Next.js, TypeScript, Postgres, Stripe" },
    { label: "You own", value: "The repo, the domain, the deploy" },
    { label: "Revisions", value: "One consolidated round" },
    { label: "Support", value: "30 days post-launch, included" },
  ],
  deliverablesHeading: "What a seven-day MVP sprint includes",
  deliverables: [
    {
      title: "Scoped in one call",
      desc: "A 30-minute discovery call. We scope, price and timeline it before you hang up — no proposal cycle, no discovery retainer.",
    },
    {
      title: "Hi-fi screens by day three",
      desc: "Real components and real copy, not greyboxed wireframes. One round of revisions, turned around fast.",
    },
    {
      title: "Production code, not a no-code patch",
      desc: "Next.js and TypeScript, deployed on Vercel. The thing you launch is the thing you keep building on.",
    },
    {
      title: "Auth, database and payments wired",
      desc: "Clerk or Supabase for accounts, Postgres for data, Stripe for checkout. The unglamorous parts that stall most MVPs.",
    },
    {
      title: "SEO and analytics from day one",
      desc: "Metadata, sitemap, structured data and event tracking built in before launch — not bolted on three months later.",
    },
    {
      title: "Your repo, your domain, your deploy",
      desc: "You own the GitHub repo and the hosting from day one. No lock-in and no rebuild tax when you hire in-house.",
    },
    {
      title: "30 days of post-launch support",
      desc: "Bugs and small changes after you go live are included, not a new invoice.",
    },
  ],
  stack: [
    { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { group: "Data & auth", items: ["Postgres", "Supabase", "Clerk"] },
    { group: "Payments", items: ["Stripe"] },
    { group: "AI", items: ["RAG pipelines", "Agents", "Streaming UIs", "Evals"] },
  ],
  goodFit: [
    "You have a deadline that isn't moving — demo day, a fundraise, a launch date.",
    "You want real users touching the product, not clicking a Figma prototype.",
    "You need accounts, a database and payments, not just a landing page.",
    "You would rather own production code than rent a no-code subscription.",
  ],
  notFit: [
    "The scope isn't decided yet. We can help you cut it down, but a sprint needs a target.",
    "You need an eight-month enterprise migration or a large in-house team augmented.",
    "You're optimising purely for the cheapest possible quote.",
  ],
  faqs: [
    {
      q: "How long does MVP development take?",
      a: "Seven days from kickoff to a live URL. Day one is discovery, days two and three are design, days four to six are development, and day seven is launch. Larger scopes are split into further one-week sprints rather than stretched into an open-ended project.",
    },
    {
      q: "How much does it cost to build an MVP?",
      a: `${SPRINT_PRICE} for a seven-day sprint, agreed before we start. Multi-week scopes are priced per sprint. No hourly billing, no surprise invoices and no change-order theatre.`,
    },
    {
      q: "What can you realistically ship in seven days?",
      a: "Marketing sites, v1 dashboards, Stripe funnels, AI wrappers and internal tools. Most first-version scopes fit. If yours doesn't, we will tell you on the call instead of taking the deposit.",
    },
    {
      q: "Do I own the code?",
      a: "Yes. The GitHub repo, the domain and the deployment are yours from day one. You can hand it to an in-house engineer the week after launch and nothing breaks.",
    },
    {
      q: "Is this a no-code build?",
      a: "No. It's Next.js and TypeScript, the same stack you would hire a senior engineer to write. No-code is faster to a demo and far slower to a real product — you hit the ceiling and pay to rebuild.",
    },
    {
      q: "Can you build AI products?",
      a: "Half our 2025 work was AI: retrieval pipelines, agents, streaming interfaces and evaluation harnesses. It is a normal part of a sprint, not an add-on.",
    },
    {
      q: "Who do I actually talk to?",
      a: "The person building it. There is no account manager relaying your feedback to a delivery team in another timezone.",
    },
    {
      q: "What happens after the 30 days of support?",
      a: "Nothing you have to buy. We keep a small number of monthly retainers for teams that want continued work — ask after your sprint rather than committing up front.",
    },
  ],
  related: [
    {
      label: "Web design studio",
      href: "/web-design",
      blurb: "Design and build in the same sprint — hi-fi screens by day three, live site by day seven.",
    },
  ],
};

export const WEB_DESIGN: ServicePage = {
  slug: "web-design",
  metaTitle: "Web Design Studio for Startups & SaaS | Avero",
  metaDescription:
    "Avero is a web design studio for startups and SaaS teams. Design and build in one sprint — hi-fi screens by day three, live site by day seven. $14k flat.",
  keywords: [
    "web design studio",
    "website design for startups",
    "SaaS web design agency",
    "design and build studio",
    "landing page design service",
    "Next.js web design",
  ],
  serviceName: "Web design and development",
  serviceType: "Website design for startups and SaaS",
  navLabel: "Web design",
  eyebrow: "Web design",
  h1: "A web design studio that ships the build too",
  lede:
    "Most studios hand over a Figma file and leave the hard part to someone else. We design and build in the same sprint, so what you approve on day three is what goes live on day seven — no handoff, no translation loss, no “that isn't buildable”.",
  atAGlance: [
    { label: "Timeline", value: "7 days, design and build" },
    { label: "Price", value: "$14k flat per sprint" },
    { label: "Design by", value: "Day 3, hi-fi and reviewable" },
    { label: "You own", value: "Design source, repo and deploy" },
    { label: "Revisions", value: "One consolidated round" },
    { label: "Includes", value: "Technical SEO and analytics" },
  ],
  deliverablesHeading: "What a design sprint includes",
  deliverables: [
    {
      title: "Hi-fi screens, not wireframes",
      desc: "You see the real thing by day three — actual type, actual spacing, actual copy. Greyboxes hide the decisions that matter.",
    },
    {
      title: "Design and engineering in one team",
      desc: "The person drawing it is the person building it, so nothing gets lost in a handoff and nothing gets quietly simplified.",
    },
    {
      title: "Built on a real design system",
      desc: "Type scale, colour and components come from a maintained system, so page two doesn't drift from page one.",
    },
    {
      title: "Responsive to 320px",
      desc: "Tested small before it's tested wide. Most of your traffic is on a phone.",
    },
    {
      title: "Performance treated as design",
      desc: "Core Web Vitals, font loading and image weight are decisions we make during design, not regressions we patch after.",
    },
    {
      title: "SEO wired in before launch",
      desc: "Metadata, canonical URLs, Open Graph cards, sitemap and structured data ship with the site.",
    },
    {
      title: "One revision round, fast",
      desc: "A single consolidated round beats six weeks of drip-fed comments. It's why the timeline holds.",
    },
  ],
  stack: [
    { group: "Design", items: ["Design system", "Type scale", "Motion", "Prototypes"] },
    { group: "Build", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { group: "Quality", items: ["Core Web Vitals", "Responsive to 320px", "Semantic HTML"] },
    { group: "Launch", items: ["Vercel", "Analytics", "Technical SEO"] },
  ],
  goodFit: [
    "Your current site doesn't look like the company you've become.",
    "You're pre-launch and need a site that earns trust on first impression.",
    "You want one team for design and build instead of managing a handoff.",
    "You need it live for a specific date, not “in a few months”.",
  ],
  notFit: [
    "You want a template lightly reskinned. That's a cheaper purchase elsewhere.",
    "You need a large multi-language CMS rollout across dozens of markets.",
    "Design by committee — a sprint needs one decision-maker.",
  ],
  faqs: [
    {
      q: "How much does a website design cost?",
      a: `${SPRINT_PRICE} for a seven-day design-and-build sprint, quoted before we start. Larger sites are priced per sprint so you always know the number in advance.`,
    },
    {
      q: "How long does a website take to design and build?",
      a: "Seven days. Discovery on day one, hi-fi design on days two and three, build on days four to six, live on day seven. That includes the build, not just the design file.",
    },
    {
      q: "Do you use templates?",
      a: "No. Layouts are designed for your content and built on our own design system. Templates are why so many startup sites look interchangeable.",
    },
    {
      q: "Do I get the design files and the code?",
      a: "Both. The repo, the deployment and the design source are yours. Nothing is held back as leverage for a retainer.",
    },
    {
      q: "What if I need more than one round of revisions?",
      a: "One consolidated round is included and it's usually enough because you're reviewing hi-fi work, not guessing at wireframes. Further rounds are possible — they just move the launch date, and we'll say so plainly.",
    },
    {
      q: "Will the site be good for SEO?",
      a: "Technical SEO ships with the site: semantic headings, metadata, canonical URLs, Open Graph cards, a sitemap and structured data. That makes you crawlable and indexable — ranking then depends on content and links over time.",
    },
    {
      q: "Can you work with our existing brand?",
      a: "Yes. If you have a brand system we design inside it. If you don't, we set enough of one to keep the site coherent without running a full identity project.",
    },
  ],
  related: [
    {
      label: "MVP development",
      href: "/mvp-development",
      blurb: "Accounts, database and payments wired into a working product in seven days.",
    },
  ],
};

export const SERVICE_PAGES: ServicePage[] = [MVP_DEVELOPMENT, WEB_DESIGN];
