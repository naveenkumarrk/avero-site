"use client";

/* ─────────────────────────────────────────────
   Showcase.tsx  –  Avero Agency  –  Selected Work
   ───────────────────────────────────────────── */

import React from "react";

/* ── Tile definitions ──────────────────────── */
type TileKind =
  | "t-dash"
  | "t-type"
  | "t-bars"
  | "t-grid"
  | "t-mobile"
  | "t-accent"
  | "t-card"
  | "t-stripe"
  | "t-chart";

interface TileData {
  kind: TileKind;
  label: string;
  accentColor?: string;
}

/* ── Per-column tile sets ───────────────────── */
const COL1: TileData[] = [
  { kind: "t-dash",   label: "Analytics dash",  accentColor: "#6EE7B7" },
  { kind: "t-type",   label: "Brand identity",  accentColor: "#A78BFA" },
  { kind: "t-bars",   label: "Revenue chart",   accentColor: "#FCD34D" },
  { kind: "t-grid",   label: "Design system",   accentColor: "#60A5FA" },
  { kind: "t-mobile", label: "iOS app",         accentColor: "#F472B6" },
  { kind: "t-accent", label: "Launch kit",      accentColor: "#34D399" },
];

const COL2: TileData[] = [
  { kind: "t-card",   label: "SaaS landing",    accentColor: "#FCA5A5" },
  { kind: "t-stripe", label: "E-commerce",      accentColor: "#C4B5FD" },
  { kind: "t-chart",  label: "AI dashboard",    accentColor: "#6EE7B7" },
  { kind: "t-type",   label: "Wordmark",        accentColor: "#FDE68A" },
  { kind: "t-dash",   label: "Finance app",     accentColor: "#93C5FD" },
  { kind: "t-bars",   label: "Metrics view",    accentColor: "#FB923C" },
];

const COL3: TileData[] = [
  { kind: "t-grid",   label: "Icon library",    accentColor: "#A3E635" },
  { kind: "t-mobile", label: "Android app",     accentColor: "#67E8F9" },
  { kind: "t-accent", label: "Brand mark",      accentColor: "#F0ABFC" },
  { kind: "t-card",   label: "Marketing site",  accentColor: "#86EFAC" },
  { kind: "t-stripe", label: "Agency site",     accentColor: "#FCA5A5" },
  { kind: "t-chart",  label: "Usage graph",     accentColor: "#FCD34D" },
];

const COL4: TileData[] = [
  { kind: "t-type",   label: "Type specimen",   accentColor: "#C4B5FD" },
  { kind: "t-bars",   label: "Sales report",    accentColor: "#6EE7B7" },
  { kind: "t-dash",   label: "Ops dashboard",   accentColor: "#60A5FA" },
  { kind: "t-grid",   label: "Component kit",   accentColor: "#FB923C" },
  { kind: "t-accent", label: "Promo site",      accentColor: "#34D399" },
  { kind: "t-mobile", label: "PWA mobile",      accentColor: "#F472B6" },
];

/* ── Inline tile renderers ──────────────────── */
function TileDash({ accent }: { accent: string }) {
  return (
    <div style={{ background: "#f4f3ee", width: "100%", height: "100%", padding: "18px 16px", boxSizing: "border-box" }}>
      <div style={{ width: "60%", height: 8, borderRadius: 4, background: "#d1cfc8", marginBottom: 10 }} />
      <div style={{ width: "40%", height: 6, borderRadius: 4, background: "#e2e0d8", marginBottom: 18 }} />
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        {[40, 65, 50, 80, 55, 70].map((h, i) => (
          <div key={i} style={{ flex: 1, height: h, borderRadius: 3, background: i === 3 ? accent : "#cccac2" }} />
        ))}
      </div>
      <div style={{ width: "80%", height: 5, borderRadius: 4, background: "#e2e0d8" }} />
    </div>
  );
}

function TileType({ accent }: { accent: string }) {
  return (
    <div style={{ background: "#ffffff", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: 80, fontWeight: 900, letterSpacing: -4, color: accent, lineHeight: 1, userSelect: "none" }}>Aa</span>
    </div>
  );
}

function TileBars({ accent }: { accent: string }) {
  const bars = [30, 55, 45, 70, 60, 85, 50, 65];
  return (
    <div style={{ background: "#111111", width: "100%", height: "100%", padding: "14px 14px 10px", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 5, flex: 1 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, borderRadius: "3px 3px 0 0", background: i % 3 === 0 ? accent : "rgba(255,255,255,0.15)" }} />
        ))}
      </div>
      <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginTop: 8 }} />
    </div>
  );
}

function TileGrid({ accent }: { accent: string }) {
  const colors = ["rgba(255,255,255,0.08)", accent, "rgba(255,255,255,0.08)", "rgba(255,255,255,0.08)"];
  return (
    <div style={{ background: "#0f0f0f", width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 6, padding: 14, boxSizing: "border-box" }}>
      {colors.map((bg, i) => (
        <div key={i} style={{ background: bg, borderRadius: 6 }} />
      ))}
    </div>
  );
}

function TileMobile({ accent }: { accent: string }) {
  return (
    <div style={{ background: "#0d0d0d", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: 56, height: 96, border: `2px solid ${accent}`, borderRadius: 12, position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "10px 6px 8px", boxSizing: "border-box", gap: 5 }}>
        <div style={{ width: 18, height: 3, background: "rgba(255,255,255,0.3)", borderRadius: 2 }} />
        <div style={{ width: "100%", height: 24, background: "rgba(255,255,255,0.07)", borderRadius: 4 }} />
        <div style={{ width: "100%", height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 3 }} />
        <div style={{ width: "70%", height: 10, background: "rgba(255,255,255,0.05)", borderRadius: 3 }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.3)", marginTop: "auto" }} />
      </div>
    </div>
  );
}

function TileAccent({ accent }: { accent: string }) {
  return (
    <div style={{ background: accent, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontSize: 64, color: "rgba(0,0,0,0.35)", userSelect: "none", lineHeight: 1 }}>▲</span>
    </div>
  );
}

function TileCard({ accent }: { accent: string }) {
  return (
    <div style={{ background: "#ffffff", width: "100%", height: "100%", padding: "16px", boxSizing: "border-box" }}>
      <div style={{ width: "100%", height: 48, background: "#f0eeea", borderRadius: 6, marginBottom: 12 }} />
      <div style={{ width: "70%", height: 7, background: "#e0ddd5", borderRadius: 4, marginBottom: 8 }} />
      <div style={{ width: "50%", height: 6, background: "#ebe9e2", borderRadius: 4, marginBottom: 14 }} />
      <div style={{ display: "inline-block", padding: "5px 14px", background: accent, borderRadius: 20 }}>
        <div style={{ width: 32, height: 5, background: "rgba(0,0,0,0.25)", borderRadius: 3 }} />
      </div>
    </div>
  );
}

function TileStripe({ accent }: { accent: string }) {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative", background: "#1a1a1a" }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: "200%",
            height: 16,
            top: i * 22 - 10,
            left: "-50%",
            background: i % 2 === 0 ? "rgba(255,255,255,0.04)" : "transparent",
            transform: "rotate(-18deg)",
          }}
        />
      ))}
      <div style={{ position: "absolute", bottom: 14, left: 14, width: 28, height: 28, borderRadius: "50%", background: accent }} />
    </div>
  );
}

function TileChart({ accent }: { accent: string }) {
  const pts = "10,60 30,40 55,50 75,25 100,35 125,15 150,30 175,20 200,10";
  return (
    <div style={{ background: "#0a0a0a", width: "100%", height: "100%", padding: "14px 12px 10px", boxSizing: "border-box" }}>
      <div style={{ width: "45%", height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 4, marginBottom: 6 }} />
      <div style={{ width: "30%", height: 5, background: "rgba(255,255,255,0.07)", borderRadius: 4, marginBottom: 10 }} />
      <svg width="100%" height="60" viewBox="0 0 200 70" preserveAspectRatio="none">
        <polyline points={pts} fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={`${pts} 200,70 10,70`} fill={`${accent}22`} stroke="none" />
      </svg>
    </div>
  );
}

/* ── Tile wrapper ────────────────────────────── */
function Tile({ tile }: { tile: TileData }) {
  const accent = tile.accentColor ?? "#6EE7B7";

  const inner: Record<TileKind, React.ReactNode> = {
    "t-dash":   <TileDash   accent={accent} />,
    "t-type":   <TileType   accent={accent} />,
    "t-bars":   <TileBars   accent={accent} />,
    "t-grid":   <TileGrid   accent={accent} />,
    "t-mobile": <TileMobile accent={accent} />,
    "t-accent": <TileAccent accent={accent} />,
    "t-card":   <TileCard   accent={accent} />,
    "t-stripe": <TileStripe accent={accent} />,
    "t-chart":  <TileChart  accent={accent} />,
  };

  return (
    <div
      style={{
        aspectRatio: "4/3",
        borderRadius: 10,
        border: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {inner[tile.kind]}

      {/* accent dot – top-left */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: accent,
          opacity: 0.85,
        }}
      />

      {/* label – bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 10,
          fontSize: 10,
          fontWeight: 500,
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.03em",
          pointerEvents: "none",
          userSelect: "none",
          textShadow: "0 1px 4px rgba(0,0,0,0.6)",
        }}
      >
        {tile.label}
      </div>
    </div>
  );
}

/* ── Column ──────────────────────────────────── */
interface ColumnProps {
  tiles: TileData[];
  direction: "up" | "down";
  duration: string;
  /** Tailwind visibility class(es) e.g. "hidden md:flex" */
  className?: string;
}

function Column({ tiles, direction, duration, className = "" }: ColumnProps) {
  const animationName =
    direction === "up" ? "marqueeVertical" : "marqueeVerticalReverse";

  // duplicate for seamless loop
  const all = [...tiles, ...tiles];

  return (
    <div
      className={`marquee-mask-vertical showcase-column ${className}`}
      style={{ overflow: "hidden", flex: 1, minWidth: 0, position: "relative" }}
    >
      <div
        style={
          {
            display: "flex",
            flexDirection: "column",
            gap: 10,
            animationName,
            animationDuration: duration,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            "--duration": duration,
          } as React.CSSProperties
        }
      >
        {all.map((tile, i) => (
          <Tile key={i} tile={tile} />
        ))}
      </div>
    </div>
  );
}

/* ── Main component ──────────────────────────── */
export default function Showcase() {
  return (
    <>
      {/* ── Keyframes + utility classes injected via a <style> tag ── */}
      <style>{`
        @keyframes marqueeVertical {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marqueeVerticalReverse {
          0%   { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .marquee-mask-vertical {
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }
        /* Column visibility: 2 on mobile, 3 on md, 4 on lg */
        .showcase-col-3 { display: none; }
        .showcase-col-4 { display: none; }
        @media (min-width: 768px) {
          .showcase-col-3 { display: flex; }
        }
        @media (min-width: 1024px) {
          .showcase-col-4 { display: flex; }
        }
        /* Make .showcase-column a flex container so the inner animation div works */
        .showcase-column { display: flex; flex-direction: column; }
      `}</style>

      <section
        className="showcase-section"
        style={{
          position: "relative",
          height: "60vh",
          minHeight: 400,
          background: "#0A0A0A",
          color: "#ffffff",
          overflow: "hidden",
        }}
      >
        <style>{`
          @media (min-width: 1024px) {
            .showcase-section {
              height: 100vh;
              min-height: 700px;
            }
          }
        `}</style>

        {/* ── Grid overlay ── */}
        <div
          aria-hidden
          style={{
            pointerEvents: "none",
            position: "absolute",
            inset: 0,
            zIndex: 1,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* ── Header bar ── */}
        <div
          className="showcase-header"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 14px",
            background: "linear-gradient(to bottom, #0A0A0A 60%, transparent)",
            flexWrap: "wrap",
            gap: "6px 0",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .showcase-header {
                padding: 14px 24px;
                flex-wrap: nowrap;
              }
            }
          `}</style>

          {/* Left: label — always visible */}
          <span
            style={{
              fontSize: 11,
              fontWeight: 500,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            Selected work · 2024 — 26
          </span>

          {/* Center: tagline — always visible, shrinks gracefully */}
          <span
            className="showcase-tagline"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "rgba(255,255,255,0.85)",
              letterSpacing: "-0.01em",
              textAlign: "center",
              flex: "1 1 100%",
              order: 3,
            }}
          >
            100 shipped products. One studio.
          </span>
          <style>{`
            @media (min-width: 768px) {
              .showcase-tagline {
                flex: 1 1 auto !important;
                order: 0 !important;
              }
            }
          `}</style>

          {/* Pill — hidden on mobile */}
          <span
            className="showcase-pill"
            style={{
              display: "none",
              alignItems: "center",
              gap: 6,
              padding: "5px 12px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              fontSize: 11,
              fontWeight: 500,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.02em",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#4ADE80",
                display: "inline-block",
                boxShadow: "0 0 6px #4ADE80",
              }}
            />
            100+ launched
          </span>
          <style>{`
            @media (min-width: 768px) {
              .showcase-pill { display: inline-flex !important; }
            }
          `}</style>
        </div>

        {/* ── Scrolling columns ── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 2,
            display: "flex",
            gap: 10,
            padding: "0 14px",
            alignItems: "flex-start",
          }}
        >
          {/* Col 1: always visible */}
          <Column tiles={COL1} direction="up"   duration="28s" />
          {/* Col 2: always visible */}
          <Column tiles={COL2} direction="down" duration="34s" />
          {/* Col 3: md+ only */}
          <Column tiles={COL3} direction="up"   duration="42s" className="showcase-col-3" />
          {/* Col 4: lg+ only */}
          <Column tiles={COL4} direction="down" duration="34s" className="showcase-col-4" />
        </div>

        {/* ── Footer bar ── */}
        <div
          className="showcase-footer"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "10px 14px",
            background: "linear-gradient(to top, #0A0A0A 60%, transparent)",
          }}
        >
          <style>{`
            @media (min-width: 768px) {
              .showcase-footer {
                justify-content: space-between;
                padding: 14px 24px;
              }
            }
          `}</style>

          {/* Category list — hidden on mobile */}
          <span
            className="showcase-footer-cats"
            style={{
              display: "none",
              fontSize: 11,
              fontWeight: 500,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.04em",
            }}
          >
            Marketing sites · Dashboards · AI products · Mobile · Identity
          </span>
          <style>{`
            @media (min-width: 768px) {
              .showcase-footer-cats { display: inline !important; }
            }
          `}</style>

          <span
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.01em",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Browse the archive →
          </span>
        </div>
      </section>
    </>
  );
}
