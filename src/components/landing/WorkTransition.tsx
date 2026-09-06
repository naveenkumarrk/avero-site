import Image from "next/image";
import Link from "next/link";

import { CASE_STUDIES } from "@/lib/work";

/**
 * Hand-off from the homepage into /work.
 *
 * The page used to end on FAQ and a grid of images that went nowhere. This
 * closes the pitch instead: a peek at the case studies, then one link. The
 * tiles are `<Link>`, so Next prefetches /work as soon as this scrolls into
 * view and the click lands on an already-warm route.
 */
export function WorkTransition() {
  return (
    /* A rounded panel rather than a gradient ramp: fading off-white into black
       just produces a grey smear. The radius reads as the dark section sliding
       up over the light page, which is the transition we actually want. */
    <section className="relative -mt-8 overflow-hidden rounded-t-[36px] bg-ink py-20 md:-mt-12 md:rounded-t-[56px] md:py-28">

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              The work
            </span>
            <h2
              className="mt-5 max-w-[16ch] font-medium text-white text-[30px] sm:text-[38px] md:text-[46px]"
              style={{ lineHeight: 1.02, letterSpacing: "-0.045em" }}
            >
              See what that looks like.
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            View all work
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {CASE_STUDIES.map((study) => (
            <li key={study.slug}>
              <Link href={`/work#${study.slug}`} className="group block">
                <div
                  className="overflow-hidden rounded-2xl p-2 transition-transform duration-300 group-hover:-translate-y-1"
                  style={{ background: study.bg }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={study.shots[0].src}
                      alt={study.name}
                      width={0}
                      height={0}
                      className="h-full w-full object-cover object-top"
                      sizes="(max-width: 1024px) 45vw, 22vw"
                      loading="lazy"
                    />
                  </div>
                </div>
                <p className="mt-3 text-[14px] font-medium text-white">{study.name}</p>
                <p className="text-[13px] text-white/50">{study.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
