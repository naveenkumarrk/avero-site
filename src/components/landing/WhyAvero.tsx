"use client";

/* ─── Orbit Visualization ─────────────────────────── */
function OrbitViz() {
  return (
    <div className="relative bg-card overflow-hidden min-h-[220px] flex-1">
      {/* Grid pattern overlay */}
      <div className="viz-grid absolute inset-0 pointer-events-none" />

      {/* Orbit rings */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 300 220"
        fill="none"
        aria-hidden
      >
        {/* Outer ring */}
        <circle
          cx="150"
          cy="110"
          r="90"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
          strokeDasharray="5 6"
        />
        {/* Inner ring */}
        <circle
          cx="150"
          cy="110"
          r="55"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth="1"
          strokeDasharray="4 5"
        />
      </svg>

      {/* Spinning accent dots — outer orbit */}
      <div
        className="animate-spin-slow absolute inset-0"
        style={{ transformOrigin: "center" }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 220"
          fill="none"
          aria-hidden
        >
          <circle cx="150" cy="20" r="5" fill="var(--color-accent)" />
          <circle cx="240" cy="110" r="4" fill="var(--color-accent)" opacity="0.6" />
        </svg>
      </div>

      {/* Spinning accent dots — inner orbit (reverse) */}
      <div
        className="absolute inset-0"
        style={{
          animation: "spin-slow 12s linear infinite reverse",
          transformOrigin: "center",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 300 220"
          fill="none"
          aria-hidden
        >
          <circle cx="150" cy="55" r="3.5" fill="var(--color-accent)" opacity="0.8" />
        </svg>
      </div>

      {/* Center "YOU" box */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div
          className="rounded-2xl px-4 py-2 text-ink text-xs font-semibold tracking-wider uppercase"
          style={{ background: "var(--color-accent)" }}
        >
          YOU
        </div>
      </div>

      {/* Orbit node labels */}
      {/* Designer — top-left inner */}
      <div className="absolute left-[18%] top-[22%] text-snow/80 text-[11px] font-medium bg-white/8 border border-white/10 rounded-lg px-2.5 py-1">
        Designer
      </div>
      {/* Engineer — top-right inner */}
      <div className="absolute right-[14%] top-[20%] text-snow/80 text-[11px] font-medium bg-white/8 border border-white/10 rounded-lg px-2.5 py-1">
        Engineer
      </div>
      {/* PM — bottom-left outer (crossed out) */}
      <div className="absolute left-[8%] bottom-[24%] text-snow/35 text-[11px] font-medium bg-white/5 border border-white/6 rounded-lg px-2.5 py-1 line-through decoration-white/30">
        PM
      </div>
      {/* Junior — bottom-right outer (crossed out) */}
      <div className="absolute right-[8%] bottom-[22%] text-snow/35 text-[11px] font-medium bg-white/5 border border-white/6 rounded-lg px-2.5 py-1 line-through decoration-white/30">
        Junior
      </div>
    </div>
  );
}

/* ─── Mosaic Visualization ────────────────────────── */
const MOSAIC_LIT: number[] = [1, 4, 5, 7, 8, 10];

function MosaicViz() {
  return (
    <div className="relative bg-card overflow-hidden min-h-[220px] flex-1 p-4">
      {/* Grid pattern overlay */}
      <div className="viz-grid absolute inset-0 pointer-events-none" />

      {/* Tile grid */}
      <div className="relative z-10 grid gap-1.5" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
        {Array.from({ length: 12 }, (_, i) => {
          const lit = MOSAIC_LIT.includes(i);
          return (
            <div
              key={i}
              className={[
                "rounded-md aspect-square",
                lit
                  ? "animate-tile-pulse"
                  : "bg-white/6",
              ].join(" ")}
              style={
                lit
                  ? {
                      background: "var(--color-accent)",
                      opacity: 0.85 + (i % 3) * 0.05,
                      animationDelay: `${(i * 0.17) % 2.8}s`,
                    }
                  : undefined
              }
            />
          );
        })}
      </div>

      {/* Badge */}
      <div
        className="absolute bottom-4 right-4 z-20 text-[11px] font-semibold text-ink rounded-xl px-3 py-1.5 shadow-sm"
        style={{ background: "var(--color-accent)" }}
      >
        20+ projects
      </div>
    </div>
  );
}

/* ─── Bar Chart Visualization ─────────────────────── */
function BarChartViz() {
  return (
    <div className="relative bg-card overflow-hidden min-h-[220px] flex-1 px-8 pt-6 pb-4 flex flex-col justify-end">
      {/* Grid pattern overlay */}
      <div className="viz-grid absolute inset-0 pointer-events-none" />

      {/* Badge */}
      <div
        className="absolute top-4 right-4 z-20 text-[11px] font-semibold text-ink rounded-xl px-3 py-1.5 shadow-sm"
        style={{ background: "var(--color-accent)" }}
      >
        − 53% · same scope
      </div>

      {/* Bars */}
      <div className="relative z-10 flex items-end gap-6 h-36">
        {/* Typical bar */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-snow/60 text-[11px] font-medium">$38K</span>
          <div className="w-full rounded-t-lg bg-white/12 relative overflow-hidden" style={{ height: "100px" }}>
            <div
              className="absolute inset-0 rounded-t-lg"
              style={{
                background: "rgba(255,255,255,0.12)",
                animation: "bar-grow 1.2s cubic-bezier(0.22,1,0.36,1) both",
                transformOrigin: "bottom",
                animationDelay: "0.1s",
              }}
            />
          </div>
          <span className="text-snow/45 text-[10px]">Typical</span>
        </div>

        {/* Avero bar */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <span className="text-ink text-[11px] font-semibold">$18K</span>
          <div className="w-full rounded-t-lg relative overflow-hidden" style={{ height: "47px" }}>
            <div
              className="absolute inset-0 rounded-t-lg"
              style={{
                background: "var(--color-accent)",
                animation: "bar-grow 1.2s cubic-bezier(0.22,1,0.36,1) both",
                transformOrigin: "bottom",
                animationDelay: "0.3s",
              }}
            />
          </div>
          <span
            className="text-[10px] font-semibold"
            style={{ color: "var(--color-accent)" }}
          >
            Avero
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Card ────────────────────────────────────────── */
interface CardProps {
  viz: React.ReactNode;
  title: string;
  body: string;
}

function Card({ viz, title, body }: CardProps) {
  return (
    <div
      className="bg-white border border-ink-12 rounded-[22px] overflow-hidden flex flex-col transition-all duration-300 ease-out cursor-default"
      style={{ willChange: "transform" }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 16px 48px rgba(10,10,10,0.10)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "";
      }}
    >
      {viz}

      <div className="flex flex-col gap-2 p-5 lg:p-6">
        <p className="text-ink text-[15px] font-semibold leading-snug">{title}</p>
        <p className="text-ink-50 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────── */
export default function WhyAvero() {
  return (
    <section className="lg:min-h-screen lg:flex lg:flex-col lg:justify-center py-20 md:py-[120px] lg:py-[160px] px-5 sm:px-8 md:px-12 lg:px-20 bg-bg">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-5 mb-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 text-ink-50 text-sm font-medium tracking-wide uppercase">
          <span className="eyebrow-dot" />
          Why pick us
        </div>

        {/* Headline */}
        <h2
          className="text-ink leading-[1.1] tracking-tight max-w-2xl text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px]"
        >
          The studio you wish you&apos;d found{" "}
          <span
            className="font-serif italic text-ink-50"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            two projects ago.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-ink-50 text-lg max-w-lg leading-relaxed">
          Senior talent, honest pricing, and a process that actually ships — not
          a six-week discovery phase.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 auto-rows-fr">
        <Card
          viz={<OrbitViz />}
          title="One team, end-to-end."
          body="Two seniors on every project — no hand-offs, no juniors learning on your dime, no coordination tax."
        />
        <Card
          viz={<MosaicViz />}
          title="Three years. 20+ projects."
          body="Sites, dashboards, e-commerce, AI tools. Enough reps to know what works before we write line one."
        />
        <Card
          viz={<BarChartViz />}
          title="Studio quality, founder pricing."
          body="Fixed quotes. No T&M surprises. We scope tight and deliver tight — your budget isn't our cushion."
        />
      </div>
    </section>
  );
}
