import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import PageNav from "@/components/layout/PageNav";
import { CASE_STUDIES } from "@/lib/work";
import { CONTACT_EMAIL } from "@/lib/site";

const SECTION = "px-5 sm:px-8 md:px-12 lg:px-20";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-50">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-deep" aria-hidden />
      {children}
    </span>
  );
}

export default function WorkPageLayout() {
  return (
    <>
      <PageNav currentSlug="work" />

      <main className="max-w-[1280px] mx-auto">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={`${SECTION} pt-12 md:pt-16 pb-10 md:pb-14`}>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[13px] text-ink-50">
              <li>
                <Link href="/" className="hover:text-ink transition-colors underline underline-offset-2">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-ink-30">/</li>
              <li className="text-ink-70">Work</li>
            </ol>
          </nav>

          <Eyebrow>Selected work</Eyebrow>

          <h1
            className="mt-5 font-medium text-ink leading-none text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] max-w-[19ch]"
            style={{ lineHeight: 0.98, letterSpacing: "-0.055em" }}
          >
            Interfaces built to convert, not to win awards.
          </h1>

          {/* Says plainly that these are concept pieces. A prospect who asks
              "which of these shipped?" gets the same answer the page gives. */}
          <p className="mt-7 text-ink-70 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
            Self-initiated concept work from a daily design practice — SaaS dashboards,
            industrial marketing sites, fintech and hardware. Each piece is a full design
            problem solved end to end, not a dribbble shot. Client work is covered on request.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-12 bg-ink-12 sm:grid-cols-4">
            {[
              { label: "Pieces", value: `${CASE_STUDIES.length} case studies` },
              { label: "Focus", value: "SaaS, product UI, marketing sites" },
              { label: "Built with", value: "Figma → Next.js" },
              { label: "Turnaround", value: "7-day sprints" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white p-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-50">{label}</dt>
                <dd className="mt-2 text-[14px] font-medium leading-snug text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Index ────────────────────────────────────────── */}
        <section className={`${SECTION} pb-12 md:pb-16`} aria-label="Case study index">
          <ul className="flex flex-wrap gap-2">
            {CASE_STUDIES.map(({ slug, name, category }) => (
              <li key={slug}>
                <a
                  href={`#${slug}`}
                  className="inline-flex items-baseline gap-2 rounded-full border border-ink-12 px-4 py-2 text-[13px] text-ink-70 transition-colors hover:border-ink hover:text-ink"
                >
                  {name}
                  <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-30">
                    {category.split(" · ")[0]}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Case studies ─────────────────────────────────── */}
        {CASE_STUDIES.map((study, i) => (
          <article
            key={study.slug}
            id={study.slug}
            className={`${SECTION} scroll-mt-24 border-t border-ink-12 py-14 md:py-20`}
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Copy column — order flips so the eye alternates down the page. */}
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Eyebrow>{study.category}</Eyebrow>

                <h2
                  className="mt-4 font-medium text-ink text-[28px] sm:text-[34px] md:text-[40px]"
                  style={{ lineHeight: 1.02, letterSpacing: "-0.04em" }}
                >
                  {study.name}
                </h2>

                <p className="mt-3 font-serif text-[18px] md:text-[20px] italic text-ink-70">
                  {study.tagline}
                </p>

                <p className="mt-6 text-[15px] leading-relaxed text-ink-70">{study.summary}</p>

                <h3 className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-50">
                  Designed
                </h3>
                <ul className="mt-3 space-y-2">
                  {study.scope.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[14px] text-ink-70">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-deep" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column */}
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className="rounded-[20px] p-2 md:p-3 transition-shadow duration-300 hover:shadow-xl"
                  style={{ background: study.bg }}
                >
                  <Image
                    src={study.cover}
                    alt={`${study.name} — ${study.tagline}`}
                    width={0}
                    height={0}
                    className="w-full rounded-xl md:rounded-2xl"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority={i === 0}
                  />
                </div>

                {study.gallery && study.gallery.length > 0 && (
                  <ul
                    className={`mt-3 grid gap-3 ${
                      study.gallery.length > 2 ? "grid-cols-3" : "grid-cols-2"
                    }`}
                  >
                    {study.gallery.map((src) => (
                      <li key={src} className="rounded-xl p-1.5" style={{ background: study.bg }}>
                        <Image
                          src={src}
                          alt={`${study.name} — supporting frame`}
                          width={0}
                          height={0}
                          className="w-full rounded-lg"
                          sizes="(max-width: 1024px) 33vw, 19vw"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className={`${SECTION} border-t border-ink-12 py-16 md:py-24`}>
          <h2
            className="font-medium text-ink text-[26px] sm:text-[32px] md:text-[38px] max-w-[20ch]"
            style={{ lineHeight: 1.02, letterSpacing: "-0.04em" }}
          >
            Want this level of work on your site?
          </h2>
          <p className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-ink-70">
            Tell me what you are building and I will send back a scope, a fixed price and a date.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-ink px-7 py-3.5 font-medium text-white transition-opacity hover:opacity-90"
            >
              Book the call →
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full border border-ink-30 px-6 py-3.5 text-ink transition-colors hover:border-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
