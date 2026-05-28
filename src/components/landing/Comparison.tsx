import React from "react";
import { COMPARISON } from "@/lib/constants";

export function Comparison() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 md:py-[120px] lg:py-[160px] px-5 sm:px-8 md:px-12 lg:px-20 bg-bg">
      {/* Header */}
      <div className="flex flex-col gap-4 mb-10 md:mb-16">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-50">
          The honest comparison
        </span>
        <h2
          className="font-medium leading-none tracking-tight text-ink text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px]"
          style={{ letterSpacing: "-0.05em" }}
        >
          Same project, three ways.
        </h2>
      </div>

      {/* Horizontally scrollable wrapper */}
      <div className="overflow-x-auto -mx-5 px-5 sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:mx-0 lg:px-0">
          <div
            className="grid border border-ink-12 rounded-[18px] overflow-hidden bg-white"
            style={{ gridTemplateColumns: "1.15fr 1fr 1fr", minWidth: "720px" }}
          >
          {/* Avero header */}
          <div className="bg-ink text-white px-8 pt-8 pb-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                style={{ background: "var(--color-accent)", color: "var(--color-ink)" }}
              >
                ★ Recommended
              </span>
            </div>
            <p className="font-medium leading-none" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
              Avero
            </p>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
              Design + dev studio
            </p>
          </div>

          {/* Typical Agency header */}
          <div className="px-8 pt-8 pb-7 flex flex-col gap-3 border-l border-ink-12" style={{ background: "#fafafa" }}>
            <div style={{ height: "26px" }} />
            <p className="font-medium text-ink leading-none" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
              Typical Agency
            </p>
            <p className="text-sm text-ink-50">Full-service agency</p>
          </div>

          {/* Freelancer header */}
          <div className="px-8 pt-8 pb-7 flex flex-col gap-3 border-l border-ink-12" style={{ background: "#fafafa" }}>
            <div style={{ height: "26px" }} />
            <p className="font-medium text-ink leading-none" style={{ fontSize: "24px", letterSpacing: "-0.03em" }}>
              Freelancer
            </p>
            <p className="text-sm text-ink-50">Independent contractor</p>
          </div>

          {/* Feature rows */}
          {COMPARISON.map((row, i) => (
            <React.Fragment key={i}>
              <div className="bg-ink text-white px-8 py-5 border-t border-white/10 flex flex-col gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {row.feature}
                </span>
                <span className="font-medium" style={{ fontSize: "16px", color: "var(--color-accent)" }}>
                  {row.avero}
                </span>
              </div>
              <div className="px-8 py-5 border-t border-l border-ink-12 flex flex-col gap-1.5" style={{ background: "#fafafa" }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-50">
                  {row.feature}
                </span>
                <span className="text-ink-70" style={{ fontSize: "16px" }}>
                  {row.agency}
                </span>
              </div>
              <div className="px-8 py-5 border-t border-l border-ink-12 flex flex-col gap-1.5" style={{ background: "#fafafa" }}>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-50">
                  {row.feature}
                </span>
                <span className="text-ink-70" style={{ fontSize: "16px" }}>
                  {row.freelancer}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
