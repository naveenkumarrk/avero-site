"use client";

import { useEffect, useRef, useState } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railRef = useRef<HTMLDivElement>(null);
  const [railFillPx, setRailFillPx] = useState(0);
  const [railTotalPx, setRailTotalPx] = useState(0);
  const [currentStep, setCurrentStep] = useState(-1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const container = stepsContainerRef.current;
        if (!container) return;
        const containerRect = container.getBoundingClientRect();
        const viewH = window.innerHeight;

        // Find the current step — the last one whose top has crossed 40% of viewport
        const threshold = viewH * 0.4;
        let current = -1;
        stepRefs.current.forEach((el, i) => {
          if (!el) return;
          const r = el.getBoundingClientRect();
          if (r.top < threshold) current = i;
        });
        setCurrentStep(current);

        // Calculate rail: total = first node to last node, fill = first node to current node
        const first = stepRefs.current[0];
        const last = stepRefs.current[stepRefs.current.length - 1];
        if (first && last) {
          const cTop = containerRect.top;
          // Node center offset: each node is at top:24px + 25px (half 50px) = 49px from card top
          const firstCenter = first.getBoundingClientRect().top - cTop + 49;
          const lastCenter = last.getBoundingClientRect().top - cTop + 49;
          setRailTotalPx(lastCenter - firstCenter);

          if (current >= 0 && stepRefs.current[current]) {
            const currentCenter = stepRefs.current[current]!.getBoundingClientRect().top - cTop + 49;
            setRailFillPx(currentCenter - firstCenter);
          } else {
            setRailFillPx(0);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const leftContent = (
    <>
      <div className="inline-flex w-fit items-center px-4 py-1.5 rounded-full border border-ink-12 text-sm font-medium text-ink-50">
        How it works
      </div>
      <h2
        className="font-medium leading-none text-[36px] md:text-[48px] lg:text-[64px]"
        style={{ letterSpacing: "-0.04em" }}
      >
        A clean,{" "}
        <span className="font-serif italic" style={{ color: "var(--color-accent-deep)" }}>
          4–step
        </span>{" "}
        process.
      </h2>
      <p className="text-base leading-relaxed text-ink-50">
        From brief to live URL. Fast, clear, built to convert.
      </p>
      <a
        href="#contact"
        className="inline-flex w-fit items-center gap-1.5 px-5 py-3 rounded-full bg-accent text-ink text-sm font-medium hover:opacity-90 transition-opacity"
      >
        Book a free discovery call ↗
      </a>
    </>
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-20 px-5 sm:px-8 md:px-12 lg:py-[160px] lg:px-20 bg-bg text-ink"
      style={{ minHeight: "100vh" }}
    >
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        style={{
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden
      />

      {/* ── Mobile layout ── */}
      <div className="relative lg:hidden flex flex-col gap-10">
        <div className="flex flex-col gap-6">{leftContent}</div>
        <div className="flex flex-col gap-4">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.num} ref={(el) => { stepRefs.current[i] = el; }}>
              <div className="rounded-2xl p-6 border border-ink-12 bg-white">
                <div className="mb-4 inline-flex items-center justify-center w-9 h-9 rounded-full text-xs font-semibold bg-ink text-white">
                  {step.num}
                </div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-50">
                  <span className="mr-1.5 inline-block w-1 h-1 rounded-full bg-ink-30 align-middle" aria-hidden />
                  {step.day}
                </p>
                <h3 className="font-medium mb-3 leading-tight text-2xl">{step.title}</h3>
                <p className="leading-relaxed text-ink-70" style={{ fontSize: "15px" }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop layout: CSS grid with sticky ── */}
      <div
        className="relative hidden lg:grid"
        style={{ gridTemplateColumns: "420px 1fr", gap: "100px" }}
      >
        {/* Left: sticky — sticks because the right column is much taller */}
        <div className="relative">
          <div
            className="sticky flex flex-col gap-8"
            style={{ top: "20vh", height: "fit-content" }}
          >
            {leftContent}
          </div>
        </div>

        {/* Right: scrollable steps */}
        <div ref={stepsContainerRef} className="relative" style={{ paddingLeft: "80px" }}>
          {/* Rail — exact line from first node center to last node center */}
          <div
            ref={railRef}
            className="absolute"
            style={{
              left: "24px",
              top: "49px",
              width: "2px",
              height: `${railTotalPx}px`,
              background: "var(--color-ink-12)",
              borderRadius: "2px",
            }}
            aria-hidden
          >
            <span
              className="absolute inset-x-0 top-0 transition-all duration-300 ease-out"
              style={{
                height: `${railFillPx}px`,
                background: "var(--color-accent)",
                borderRadius: "2px",
              }}
            />
          </div>

          <div className="flex flex-col gap-8">
            {PROCESS_STEPS.map((step, i) => {
              const active = i <= currentStep;
              return (
                <div key={step.num} ref={(el) => { stepRefs.current[i] = el; }} className="relative">
                  {/* Node */}
                  <div
                    className="absolute flex items-center justify-center rounded-full border transition-all duration-300"
                    style={{
                      left: "-80px",
                      top: "24px",
                      width: "50px",
                      height: "50px",
                      background: active ? "var(--color-accent)" : "#fff",
                      borderColor: active ? "var(--color-accent)" : "var(--color-ink-12)",
                      color: active ? "var(--color-ink)" : "var(--color-ink-50)",
                      boxShadow: "none",
                      transform: "scale(1)",
                    }}
                    aria-hidden
                  >
                    <span className="text-xs font-semibold">{step.num}</span>
                  </div>
                  {/* Card */}
                  <div
                    className="rounded-2xl p-8 border border-ink-12"
                    style={{ background: "#fff" }}
                  >
                    <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-50">
                      <span className="mr-1.5 inline-block w-1 h-1 rounded-full bg-ink-30 align-middle" aria-hidden />
                      {step.day}
                    </p>
                    <h3 className="font-medium mb-3 leading-tight" style={{ fontSize: "32px" }}>
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-ink-70" style={{ fontSize: "15px" }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
