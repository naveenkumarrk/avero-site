import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/layout/Footer";
import WorkNav from "@/components/layout/WorkNav";
import { CASE_STUDIES, GALLERY } from "@/lib/work";
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

/**
 * Staggered offsets for the gallery wall. Fixed per column rather than random
 * so the layout is stable between server and client renders.
 */
const OFFSETS = ["md:mt-0", "md:mt-16", "md:mt-6"];

export default function WorkPageLayout() {
  return (
    <>
      <WorkNav />

      <main>
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={`${SECTION} max-w-[1280px] mx-auto pt-28 md:pt-32 pb-10 md:pb-14`}>
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

          {/* States plainly that these are concept pieces — a prospect who asks
              "which of these shipped?" gets the same answer the page gives. */}
          <p className="mt-7 text-ink-70 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
            Four products taken end to end, plus a wall of daily practice — SaaS dashboards,
            mobile marketplaces, industrial sites and fintech. Self-initiated concept work,
            designed as full problems rather than single shots. Client work is covered on request.
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-12 bg-ink-12 sm:grid-cols-4">
            {[
              { label: "Case studies", value: `${CASE_STUDIES.length} in depth` },
              { label: "Pieces", value: `${CASE_STUDIES.length + GALLERY.length} total` },
              { label: "Focus", value: "SaaS, mobile, marketing sites" },
              { label: "Built with", value: "Figma → Next.js" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white p-5">
                <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-50">{label}</dt>
                <dd className="mt-2 text-[14px] font-medium leading-snug text-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 flex flex-wrap gap-2">
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
            className={`${SECTION} max-w-[1280px] mx-auto scroll-mt-24 border-t border-ink-12 py-14 md:py-20`}
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
                    // Only the first cover is eager; everything below the fold
                    // stays lazy so the hero isn't competing for bandwidth.
                    priority={i === 0}
                    loading={i === 0 ? undefined : "lazy"}
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
                          loading="lazy"
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}

        {/* ── Gallery wall ─────────────────────────────────── */}
        <section
          id="gallery"
          className={`${SECTION} max-w-[1440px] mx-auto scroll-mt-24 border-t border-ink-12 pt-14 md:pt-20 pb-8`}
        >
          <Eyebrow>Daily practice</Eyebrow>
          <h2
            className="mt-4 font-medium text-ink text-[28px] sm:text-[34px] md:text-[40px] max-w-[16ch]"
            style={{ lineHeight: 1.02, letterSpacing: "-0.04em" }}
          >
            One design a day.
          </h2>
          <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-ink-70">
            A standing habit rather than a portfolio exercise — a finished screen most days,
            built to a real brief with real constraints. It is where the range comes from.
          </p>
        </section>

        <div className={`${SECTION} max-w-[1440px] mx-auto pb-16 md:pb-24`}>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:grid-cols-3 md:gap-y-4">
            {GALLERY.map((item, i) => (
              <li key={item.src} className={OFFSETS[i % OFFSETS.length]}>
                <figure>
                  <div className="rounded-2xl p-2 transition-transform duration-300 hover:-translate-y-1" style={{ background: item.bg }}>
                    <Image
                      src={item.src}
                      alt={`${item.name} — ${item.caption}`}
                      width={0}
                      height={0}
                      className="w-full rounded-xl"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline gap-2">
                    <span className="text-[14px] font-medium text-ink">{item.name}</span>
                    <span className="text-[13px] text-ink-50">{item.caption}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className={`${SECTION} max-w-[1280px] mx-auto border-t border-ink-12 py-16 md:py-24`}>
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
