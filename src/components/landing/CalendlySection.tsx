"use client";

// Replace CALENDLY_URL with your Calendly link

export function CalendlySection() {
  return (
    <section id="contact" className="bg-bg py-20 md:py-[120px] lg:py-[160px] px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col items-center text-center gap-6 mb-12">
        {/* Eyebrow */}
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-50">
          Book a call
        </span>

        {/* Heading */}
        <h2
          className="font-medium tracking-tight text-ink text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px]"
          style={{ lineHeight: 1.05, letterSpacing: "-0.04em" }}
        >
          Let&apos;s talk about your project.
        </h2>

        {/* Subtext */}
        <p className="text-ink-50 max-w-lg text-base leading-relaxed">
          30 minutes. Scope, price, and a date — even if you don&apos;t book us.
        </p>
      </div>

      {/* Calendly embed placeholder */}
      <div
        id="calendly-embed"
        className="rounded-2xl border border-ink-12 bg-white max-w-3xl mx-auto min-h-[600px] flex items-center justify-center"
      >
        <span className="text-ink-30 text-sm select-none">
          Calendly booking will appear here
        </span>
      </div>
    </section>
  );
}
