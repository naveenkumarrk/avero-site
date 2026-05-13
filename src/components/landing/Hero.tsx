"use client";

const logos = [
  {
    name: "Lumina",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2.5" fill="var(--color-accent)" />
      </svg>
    ),
  },
  {
    name: "Halcyon",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <rect x="1" y="1" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 11 L8 5 L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Northbeam",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="6" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Quartz",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 2 L14 13 L2 13 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Plex",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <rect x="2" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="2" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="2" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="9" y="9" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Sift",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M1 8 L4 4 L7 8 L10 4 L13 8 L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Mono",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Linear/co",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <line x1="2" y1="6" x2="14" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="2" y1="10" x2="14" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Texture",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M8 2 L14 8 L8 14 L2 8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const avatars = [
  { initials: "AK", bg: "bg-violet-400" },
  { initials: "MS", bg: "bg-sky-400" },
  { initials: "JR", bg: "bg-emerald-400" },
];

// A single skeleton card for the background carousel
function CarouselCard({ variant }: { variant: number }) {
  return (
    <div className="rounded-xl bg-ink-12 aspect-[4/3] w-full overflow-hidden p-3 flex flex-col gap-2">
      {variant === 0 && (
        <>
          <div className="w-1/2 h-2 rounded-sm bg-ink-12" />
          <div className="flex-1 flex items-end gap-1 pt-2">
            {[55, 80, 40, 90, 65, 75, 50].map((h, i) => (
              <div key={i} className="flex-1 rounded-t bg-ink-30" style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="w-full h-1.5 rounded-sm bg-ink-12" />
        </>
      )}
      {variant === 1 && (
        <>
          <div className="w-3/4 h-2.5 rounded bg-ink-30" />
          <div className="w-1/2 h-1.5 rounded-sm bg-ink-12" />
          <div className="flex-1 flex flex-col justify-center gap-1.5">
            <div className="w-full h-1 rounded-sm bg-ink-12" />
            <div className="w-5/6 h-1 rounded-sm bg-ink-12" />
            <div className="w-4/6 h-1 rounded-sm bg-ink-12" />
          </div>
          <div className="w-16 h-4 rounded-full bg-ink-30" />
        </>
      )}
      {variant === 2 && (
        <>
          <div className="flex justify-between items-center">
            <div className="w-6 h-6 rounded-full bg-ink-30" />
            <div className="w-10 h-1.5 rounded-sm bg-ink-12" />
          </div>
          <div className="flex-1 relative">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 50" preserveAspectRatio="none">
              <polyline
                points="0,45 15,30 30,38 45,15 60,22 80,8"
                fill="none"
                stroke="rgba(10,10,10,0.18)"
                strokeWidth="1.5"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="flex gap-1.5">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex-1 h-5 rounded-lg bg-ink-12" />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Cards to fill a column — duplicated so the marquee loops seamlessly
const COLUMN_CARDS = [0, 1, 2, 0, 2, 1, 0, 1, 2, 0, 2, 1];

export function Hero() {
  const logoTrack = [...logos, ...logos];

  return (
    <section
      className="relative text-left text-ink min-h-screen flex flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-[100px] px-5 sm:px-8 md:px-12 lg:px-20"
    >
      {/* ── Vertical carousel background ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]">
        {/* Fade mask top + bottom */}
        <div className="marquee-mask-vertical absolute inset-0 z-10" />
        <div className="grid grid-cols-3 gap-3 h-full px-5 sm:px-8 md:px-12 lg:px-20">
          {/* Column 1 — forward, 25s */}
          <div className="overflow-hidden">
            <div
              className="animate-marquee-vertical flex flex-col gap-3"
              style={{ "--duration": "25s" } as React.CSSProperties}
            >
              {[...COLUMN_CARDS, ...COLUMN_CARDS].map((v, i) => (
                <CarouselCard key={i} variant={v} />
              ))}
            </div>
          </div>
          {/* Column 2 — reverse, 35s */}
          <div className="overflow-hidden">
            <div
              className="animate-marquee-vertical-reverse flex flex-col gap-3"
              style={{ "--duration": "35s" } as React.CSSProperties}
            >
              {[...COLUMN_CARDS, ...COLUMN_CARDS].map((v, i) => (
                <CarouselCard key={i} variant={(v + 1) % 3} />
              ))}
            </div>
          </div>
          {/* Column 3 — forward, 30s */}
          <div className="overflow-hidden">
            <div
              className="animate-marquee-vertical flex flex-col gap-3"
              style={{ "--duration": "30s" } as React.CSSProperties}
            >
              {[...COLUMN_CARDS, ...COLUMN_CARDS].map((v, i) => (
                <CarouselCard key={i} variant={(v + 2) % 3} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero content — sits above carousel */}
      <div className="relative z-10 flex flex-col flex-1">

      {/* Top row */}
      <div className="flex items-center gap-3 sm:gap-5 mb-8 sm:mb-12">
        {/* Eyebrow pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-12 bg-white/60 backdrop-blur-sm text-xs sm:text-sm font-medium text-ink whitespace-nowrap">
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="hidden sm:inline">Booking Q3 · Available for projects</span>
          <span className="sm:hidden">Available for projects</span>
        </div>

        {/* Next intake — hidden on mobile */}
        <span className="hidden sm:inline text-sm text-ink-50">Next intake Tue, May 19</span>
      </div>

      {/* Grid: headline + aside */}
      <div className="flex-1 flex items-end pb-10 sm:pb-14 lg:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-end w-full">
        {/* Headline */}
        <h1
          className="font-medium text-ink leading-none text-[40px] sm:text-[56px] md:text-[72px] lg:text-[88px]"
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
          <p className="text-base text-ink-70 leading-relaxed">
            Senior studio. Live URL in seven days, not seven weeks.
          </p>

          {/* CTA row */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Book a call button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-ink text-white text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Book a call ↗
            </a>

            {/* Social proof pill */}
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-full border border-ink-12 bg-white/60 backdrop-blur-sm">
              {/* Stacked avatars */}
              <div className="flex -space-x-2">
                {avatars.map((a) => (
                  <div
                    key={a.initials}
                    className={`w-6 h-6 rounded-full ${a.bg} flex items-center justify-center text-white text-[9px] font-bold ring-2 ring-white`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>

              {/* Stars + rating */}
              <div className="flex flex-col leading-none">
                <span className="text-yellow-400 text-xs leading-none">
                  ★★★★★
                </span>
                <span className="text-xs text-ink-70 mt-0.5">
                  4.9 · 20+ projects
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
      </div>

      {/* Trusted-by marquee */}
      <div className="relative flex items-center border-t border-b border-ink-12 py-6 overflow-hidden mt-auto z-10">
        {/* Fixed left label — hidden on mobile */}
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
            className="flex items-center gap-0 animate-marquee whitespace-nowrap"
            style={
              {
                "--duration": "42s",
              } as React.CSSProperties
            }
          >
            {logoTrack.map((logo, i) => (
              <span key={`${logo.name}-${i}`} className="flex items-center">
                <span className="flex items-center gap-2 px-5 text-sm font-medium text-ink-70 hover:text-ink transition-colors cursor-default">
                  <span className="opacity-60">{logo.icon}</span>
                  {logo.name}
                </span>
                <span className="text-ink-12 select-none" aria-hidden>
                  ·
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
