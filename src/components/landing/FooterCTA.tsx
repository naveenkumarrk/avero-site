import React from "react";

export default function FooterCTA() {
  return (
    <section className="bg-ink text-white min-h-screen flex flex-col items-center justify-center py-20 md:py-[120px] lg:py-[160px] px-5 sm:px-8 md:px-12 lg:px-20 text-center relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(var(--accent-rgb) / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="inline-flex items-center gap-2 text-white/55 text-sm mb-6">
          <span
            aria-hidden="true"
            className="inline-block w-1.5 h-1.5 rounded-full bg-white"
          />
          Booking Q3 · 4 slots open
        </p>

        {/* Heading */}
        <h2
          className="font-bold leading-none tracking-tight mb-6 text-[36px] sm:text-[50px] md:text-[64px] lg:text-[78px]"
          style={{ fontStyle: "normal" }}
        >
          Talk to us on{" "}
          <span className="text-accent">Tuesday.</span>
        </h2>

        {/* Subtext */}
        <p className="text-white/60 mx-auto mb-10" style={{ fontSize: "17px", maxWidth: "480px" }}>
          30 minutes. Scope, price, and a date — even if you don&apos;t book us.
        </p>

        {/* CTA row */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="#"
            className="bg-accent text-ink rounded-full px-7 py-3.5 font-medium transition-opacity hover:opacity-90"
          >
            Book the call →
          </a>
          <a
            href="mailto:hello@avero.studio"
            className="rounded-full px-6 py-3.5 border border-white/25 text-white transition-colors hover:border-white/50"
          >
            hello@avero.studio
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-14 pt-7 border-t border-white/10 grid grid-cols-2 gap-6 md:flex md:justify-center md:gap-8 lg:gap-16">
          {[
            { value: "7 days", label: "to launch" },
            { value: "$14k", label: "flat fee" },
            { value: "100%", label: "your code" },
            { value: "4.9 / 5", label: "past clients" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <b className="font-medium" style={{ fontSize: "22px" }}>
                {value}
              </b>
              <span
                className="font-mono uppercase text-white/50"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
