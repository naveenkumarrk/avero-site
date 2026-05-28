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

const heroImages = [
  "/images/day-1.webp",
  "/images/day-2.webp",
  "/images/day-3.webp",
  "/images/day-6.webp",
  "/images/day-7.webp",
  "/images/day-8.webp",
  "/images/day-9.webp",
  "/images/day-11.webp",
  "/images/day-12.webp",
  "/images/day-13.webp",
  "/images/day-16.webp",
  "/images/day-17.webp",
  "/images/day-18-21.webp",
  "/images/day-22.webp",
  "/images/day-23-1.webp",
  "/images/day-24-1.webp",
  "/images/day-25.webp",
  "/images/day-26.webp",
  "/images/day-27.webp",
  "/images/day-28.webp",
  "/images/day-29.webp",
  "/images/day-34.webp",
  "/images/og-image.webp",
  "/images/privacy-feature.webp",
];

const IMG_COUNT = heroImages.length;

function CarouselCard({ index }: { index: number }) {
  return (
    <div className="rounded-xl overflow-hidden w-full p-3">
      <Image
        src={heroImages[index % IMG_COUNT]}
        alt=""
        width={0}
        height={0}
        className="w-full h-auto rounded-xl"
        sizes="(max-width: 768px) 33vw, 25vw"
      />
    </div>
  );
}

// Cards to fill a column Ã¢â‚¬â€ duplicated so the marquee loops seamlessly
const COLUMN_CARDS = [0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 2, 1];

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
          {/* Column 1 Ã¢â‚¬â€ forward, 25s */}
          <div className="overflow-hidden">
            <div
              className="animate-marquee-vertical flex flex-col gap-3"
              style={{ "--duration": "25s" } as React.CSSProperties}
            >
              {[...COLUMN_CARDS, ...COLUMN_CARDS].map((v, i) => (
                <CarouselCard key={i} index={i} />
              ))}
            </div>
          </div>
          {/* Column 2 Ã¢â‚¬â€ reverse, 35s */}
          <div className="overflow-hidden">
            <div
              className="animate-marquee-vertical-reverse flex flex-col gap-3"
              style={{ "--duration": "35s" } as React.CSSProperties}
            >
              {[...COLUMN_CARDS, ...COLUMN_CARDS].map((v, i) => (
                <CarouselCard key={i} index={i + 24} />
              ))}
            </div>
          </div>
          {/* Column 3 Ã¢â‚¬â€ forward, 30s */}
          <div className="overflow-hidden">
            <div
              className="animate-marquee-vertical flex flex-col gap-3"
              style={{ "--duration": "30s" } as React.CSSProperties}
            >
              {[...COLUMN_CARDS, ...COLUMN_CARDS].map((v, i) => (
                <CarouselCard key={i} index={i + 48} />
              ))}
            </div>
          </div>
          {/* Column 4 Ã¢â‚¬â€ reverse, 40s */}
          <div className="overflow-hidden">
            <div
              className="animate-marquee-vertical-reverse flex flex-col gap-3"
              style={{ "--duration": "40s" } as React.CSSProperties}
            >
              {[...COLUMN_CARDS, ...COLUMN_CARDS].map((v, i) => (
                <CarouselCard key={i} index={i + 72} />
              ))}
            </div>
          </div>
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
