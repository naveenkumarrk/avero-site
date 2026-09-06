"use client";

import Image from "next/image";
import { useLenis } from "lenis/react";

const logos = [
  { name: "garcity", style: { fontFamily: "'Georgia', serif", fontStyle: "italic" } },
  { name: "tradeanalyst", style: { fontFamily: "'Courier New', monospace", fontWeight: 700 } },
  { name: "databuddy", style: { fontFamily: "'Arial Black', sans-serif", letterSpacing: "-0.02em" } },
  { name: "butcherbhaiss", style: { fontFamily: "'Times New Roman', serif", fontWeight: 900 } },
  { name: "gravitysports", style: { textTransform: "uppercase", letterSpacing: "0.15em" } },
  { name: "teenzwear", style: { fontFamily: "'Georgia', serif", fontWeight: 300, fontStyle: "italic" } },
];

const avatars = [
  { initials: "AK", bg: "bg-violet-400" },
  { initials: "MS", bg: "bg-sky-400" },
  { initials: "JR", bg: "bg-emerald-400" },
];

/**
 * Background carousel pool. Points at the /work exports rather than the older
 * originals — same designs, a fraction of the bytes, which matters when the
 * hero paints dozens of them at once behind the copy.
 */
const heroImages = [
  "/images/work/day/day-34.webp",
  "/images/work/roger/leads.webp",
  "/images/work/day/day-17.webp",
  "/images/work/butcher/home.webp",
  "/images/work/day/day-16.webp",
  "/images/work/roger/dashboard.webp",
  "/images/work/day/day-13.webp",
  "/images/work/day/day-2.webp",
  "/images/work/roger/pipeline.webp",
  "/images/work/day/day-22.webp",
  "/images/work/butcher/shop-list.webp",
  "/images/work/day/day-8.webp",
  "/images/work/day/databuddy.webp",
  "/images/work/roger/tasks.webp",
  "/images/work/day/day-12.webp",
  "/images/work/butcher/product-page.webp",
  "/images/work/day/day-11.webp",
  "/images/work/roger/all-stages.webp",
  "/images/work/day/day-7.webp",
  "/images/work/day/day-33.webp",
  "/images/work/roger/profile.webp",
  "/images/work/day/day-6.webp",
  "/images/work/butcher/payment-method.webp",
  "/images/work/day/day-35.webp",
  "/images/work/roger/automations-edit.webp",
  "/images/work/day/day-1.webp",
  "/images/work/day/day-23.webp",
  "/images/work/butcher/my-orders-01.webp",
  "/images/work/roger/login-page.webp",
  "/images/work/day/day-15.webp",
  "/images/work/day/day-9.webp",
  "/images/work/roger/sms-page-2.webp",
];

const IMG_COUNT = heroImages.length;

/** Each column walks the pool on a different stride, so no two columns repeat. */
const COLUMN_STRIDES = [1, 3, 5, 7];
const CARDS_PER_COLUMN = 8;

function columnImages(col: number) {
  const stride = COLUMN_STRIDES[col];
  return Array.from(
    { length: CARDS_PER_COLUMN },
    (_, i) => heroImages[(col * 3 + i * stride) % IMG_COUNT]
  );
}

function CarouselCard({ src }: { src: string }) {
  return (
    <div className="rounded-xl overflow-hidden w-full p-3">
      <Image
        src={src}
        alt=""
        width={0}
        height={0}
        className="w-full h-auto rounded-xl"
        // Rendered small, behind copy, at 15% opacity — no reason to ship a
        // full-width source or full quality.
        sizes="(max-width: 768px) 30vw, 320px"
        quality={55}
      />
    </div>
  );
}

export function Hero() {
  const lenis = useLenis();
  const logoTrack = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section
      className="relative text-left text-ink min-h-screen flex flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-[100px] px-5 sm:px-8 md:px-12 lg:px-20"
    >
      {/* Ã¢â€â‚¬Ã¢â€â‚¬ Vertical carousel background Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 overflow-hidden pointer-events-none opacity-15">
        {/* Depth overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-20 pointer-events-none" />
        {/* Fade mask top + bottom */}
        <div className="marquee-mask-vertical absolute inset-0 z-10" />
        <div className="grid grid-cols-4 gap-3 h-full">
          {[
            { dir: "animate-marquee-vertical", duration: "25s" },
            { dir: "animate-marquee-vertical-reverse", duration: "35s" },
            { dir: "animate-marquee-vertical", duration: "30s" },
            { dir: "animate-marquee-vertical-reverse", duration: "40s" },
          ].map(({ dir, duration }, col) => {
            const imgs = columnImages(col);
            return (
              <div key={col} className="overflow-hidden">
                <div
                  className={`${dir} flex flex-col gap-3`}
                  // Promote to its own layer: without it the browser repaints
                  // the whole stack of images on every animation frame.
                  style={{ "--duration": duration, willChange: "transform" } as React.CSSProperties}
                >
                  {[...imgs, ...imgs].map((src, i) => (
                    <CarouselCard key={i} src={src} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fade overlay Ã¢â‚¬â€ separates carousel from text */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent/60 to-bg z-[5] pointer-events-none" />

      {/* Hero content Ã¢â‚¬â€ sits above carousel */}
      <div className="relative z-10 flex flex-col flex-1">

      {/* Top row */}
      <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
        {/* Eyebrow pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-12 bg-white/60 backdrop-blur-sm text-xs sm:text-sm font-medium text-ink whitespace-nowrap">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span>Available for projects</span>

        </div>

      </div>

      {/* Grid: headline + aside */}
      <div className="flex-1 flex items-end pb-10 sm:pb-14 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-end w-full">
        {/* Headline */}
        <h1
          className="font-medium text-ink leading-none text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px]"
          style={{
            lineHeight: 0.96,
            letterSpacing: "-0.055em",
          }}
        >

          Websites, MVPs{" "}
          <span
            className="font-serif italic"
            style={{ color: "var(--color-accent-deep)" }}
          >
            &amp;
          </span>{" "}
          AI products
          <br />
          that look{" "}
          <em className="font-serif italic" style={{ fontWeight: 400 }}>sharp</em> and{" "}
          <span className="highlight-mark">convert hard</span>.
        </h1>

        {/* Aside */}
        <aside className="flex flex-col gap-6 pb-2">
          {/* Lede */}
          <p className="text-sm text-ink-70 leading-relaxed">
            Senior studio. Live URL in seven days, not seven weeks.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Book a call button */}
            <button
              onClick={() => {
                const el = document.querySelector<HTMLElement>("#contact");
                if (el && lenis) lenis.scrollTo(el, { offset: -80, duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
              }}
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-ink text-white text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              Book a call
            </button>
          </div>
        </aside>
      </div>
      </div>

      {/* Trusted-by marquee */}
      <div className="relative flex items-center border-t border-b border-ink-12 py-6 overflow-hidden mt-auto z-10">
        {/* Fixed left label Ã¢â‚¬â€ hidden on mobile */}
        <div className="hidden sm:flex flex-shrink-0 items-center gap-1.5 pr-8 text-xs font-medium text-ink-50 uppercase tracking-widest z-10 bg-transparent">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--color-accent, #7c4dff)" }}
          />
          Trusted by
        </div>

        {/* Scrolling track */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex items-center gap-8 animate-marquee whitespace-nowrap"
            style={
              {
                "--duration": "42s",
              } as React.CSSProperties
            }
          >
            {logoTrack.map((logo, i) => (
              <span key={`${logo.name}-${i}`} className="flex items-center">
                <span className="flex items-center text-lg text-ink-70 hover:text-ink transition-colors cursor-default opacity-40" style={logo.style}>
                  {logo.name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      </div>{/* end relative z-10 hero content wrapper */}
    </section>
  );
}
