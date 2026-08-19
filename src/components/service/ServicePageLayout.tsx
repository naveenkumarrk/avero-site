import Link from "next/link";

import Footer from "@/components/layout/Footer";
import PageNav from "@/components/layout/PageNav";
import { PROCESS_STEPS, TESTIMONIALS } from "@/lib/constants";
import type { ServicePage } from "@/lib/services";
import { CONTACT_EMAIL } from "@/lib/site";

const H2 =
  "font-medium leading-tight text-ink text-[26px] sm:text-[32px] md:text-[38px] lg:text-[44px]";
const SECTION = "px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-50">
      <span className="w-1.5 h-1.5 rounded-full bg-accent-deep" aria-hidden />
      {children}
    </span>
  );
}

export default function ServicePageLayout({ page }: { page: ServicePage }) {
  return (
    <>
      <PageNav currentSlug={page.slug} />

      <main className="max-w-[1280px] mx-auto">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="px-5 sm:px-8 md:px-12 lg:px-20 pt-12 md:pt-16 pb-12 md:pb-16">
          {/* Visible breadcrumb, mirrored by BreadcrumbList JSON-LD */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-[13px] text-ink-50">
              <li>
                <Link href="/" className="hover:text-ink transition-colors underline underline-offset-2">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-ink-30">/</li>
              <li className="text-ink-70">{page.navLabel}</li>
            </ol>
          </nav>

          <Eyebrow>{page.eyebrow}</Eyebrow>

          <h1
            className="mt-5 font-medium text-ink leading-none text-[32px] sm:text-[44px] md:text-[54px] lg:text-[64px] max-w-[19ch]"
            style={{ lineHeight: 0.98, letterSpacing: "-0.055em" }}
          >
            {page.h1}
          </h1>

          <p className="mt-7 text-ink-70 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
            {page.lede}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="bg-ink text-white rounded-full px-7 py-3.5 font-medium transition-opacity hover:opacity-90"
            >
              Book the call →
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="rounded-full px-6 py-3.5 border border-ink-30 text-ink transition-colors hover:border-ink"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </section>

        {/* ── Deliverables ─────────────────────────────────── */}
        <section className={SECTION}>
          <Eyebrow>Scope</Eyebrow>
          <h2 className={`mt-5 ${H2}`} style={{ letterSpacing: "-0.05em" }}>
            {page.deliverablesHeading}
          </h2>
          {/* Individually bordered cards, not a gap-px grid: an odd item count
              would leave empty cells showing the parent colour as grey blocks. */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.deliverables.map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-ink-12 bg-white p-6 flex flex-col gap-2.5"
              >
                <h3 className="font-medium text-ink text-[16px]">{title}</h3>
                <p className="text-ink-70 text-[14px] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────── */}
        <section className={SECTION}>
          <Eyebrow>Timeline</Eyebrow>
          <h2 className={`mt-5 ${H2}`} style={{ letterSpacing: "-0.05em" }}>
            Seven days, start to live URL
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map(({ num, day, title, desc }) => (
              <li key={num} className="bg-card text-white rounded-2xl p-6 flex flex-col gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                  {day}
                </span>
                <h3 className="font-medium text-[17px]">{title}</h3>
                <p className="text-white/60 text-[14px] leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Stack ────────────────────────────────────────── */}
        <section className={SECTION}>
          <Eyebrow>Stack</Eyebrow>
          <h2 className={`mt-5 ${H2}`} style={{ letterSpacing: "-0.05em" }}>
            What it&rsquo;s built with
          </h2>
          <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {page.stack.map(({ group, items }) => (
              <div key={group} className="border-t border-ink pt-4">
                <dt className="font-medium text-ink text-[15px]">{group}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-12 bg-white px-3 py-1 text-[13px] text-ink-70"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Fit ──────────────────────────────────────────── */}
        <section className={SECTION}>
          <Eyebrow>Fit</Eyebrow>
          <h2 className={`mt-5 ${H2}`} style={{ letterSpacing: "-0.05em" }}>
            Who this is for
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-ink-12 bg-white p-7">
              <h3 className="font-medium text-ink text-[16px]">A good fit</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {page.goodFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] text-ink-70 leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-accent-deep" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-ink-12 bg-paper p-7">
              <h3 className="font-medium text-ink text-[16px]">Not a fit</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {page.notFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[14px] text-ink-50 leading-relaxed">
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-ink-30" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ — native details/summary: server-rendered, crawlable ── */}
        <section className={SECTION}>
          <Eyebrow>Questions</Eyebrow>
          <h2 className={`mt-5 ${H2}`} style={{ letterSpacing: "-0.05em" }}>
            {page.eyebrow} FAQ
          </h2>
          <div className="mt-10 border-t border-ink">
            {page.faqs.map(({ q, a }) => (
              <details key={q} className="group border-b border-ink-12">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[16px] font-medium text-ink marker:hidden">
                  <h3 className="text-[16px] font-medium">{q}</h3>
                  <span
                    className="relative h-6 w-6 flex-shrink-0 rounded-full border border-ink-30 transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    <span className="absolute left-1/2 top-1/2 h-[1.5px] w-2.5 -translate-x-1/2 -translate-y-1/2 bg-ink" />
                    <span className="absolute left-1/2 top-1/2 h-2.5 w-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-ink" />
                  </span>
                </summary>
                <p className="pb-6 pr-12 text-[15px] leading-relaxed text-ink-70 max-w-[70ch]">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── Proof ────────────────────────────────────────── */}
        <section className={SECTION}>
          <Eyebrow>Proof</Eyebrow>
          <h2 className={`mt-5 ${H2}`} style={{ letterSpacing: "-0.05em" }}>
            What founders say
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map(({ name, q, role }) => (
              <li
                key={name}
                className="rounded-2xl border border-ink-12 bg-white p-6 flex flex-col gap-4"
              >
                <blockquote className="text-[15px] leading-relaxed text-ink-70">
                  &ldquo;{q}&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="text-[14px] font-medium text-ink">{name}</p>
                  <p className="text-[13px] text-ink-50">{role}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Related + CTA ────────────────────────────────── */}
        <section className={SECTION}>
          <div className="rounded-3xl bg-card text-white p-8 md:p-12">
            <h2
              className="font-medium leading-tight text-[26px] sm:text-[32px] md:text-[38px] max-w-[24ch]"
              style={{ letterSpacing: "-0.05em" }}
            >
              Scoped, priced and timelined on one 30-minute call.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="bg-accent text-ink rounded-full px-7 py-3.5 font-medium transition-opacity hover:opacity-90"
              >
                Book the call →
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="rounded-full px-6 py-3.5 border border-white/25 text-white transition-colors hover:border-white/50"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                Also from Avero
              </p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {page.related.map(({ label, href, blurb }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="group block rounded-2xl border border-white/15 p-5 transition-colors hover:border-white/40"
                    >
                      <span className="flex items-center gap-2 font-medium text-white">
                        {label}
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                      <span className="mt-2 block text-[14px] leading-relaxed text-white/55">
                        {blurb}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/"
                    className="group block rounded-2xl border border-white/15 p-5 transition-colors hover:border-white/40"
                  >
                    <span className="flex items-center gap-2 font-medium text-white">
                      The studio
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </span>
                    <span className="mt-2 block text-[14px] leading-relaxed text-white/55">
                      Process, comparison and selected work on one page.
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
