"use client";

import { TESTIMONIALS } from "@/lib/constants";

const INITIALS_COLORS = [
  "bg-emerald-400",
  "bg-violet-400",
  "bg-sky-400",
  "bg-amber-400",
  "bg-rose-400",
  "bg-teal-400",
  "bg-indigo-400",
  "bg-pink-400",
];

function TestimonialCard({ item, index }: { item: (typeof TESTIMONIALS)[number]; index: number }) {
  const initials = item.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <div className="flex-shrink-0 w-[300px] md:w-[340px] bg-white border border-ink-12 rounded-2xl p-6 flex flex-col gap-5 hover:border-ink-30 transition-colors">
      {/* Top: avatar + stars */}
      <div className="flex items-start justify-between">
        <div
          className={`w-12 h-12 rounded-full ${INITIALS_COLORS[index % INITIALS_COLORS.length]} flex items-center justify-center text-white text-sm font-bold`}
        >
          {initials}
        </div>
        <span className="text-[12px] text-amber-400 tracking-wider">★★★★★</span>
      </div>

      {/* Name + role */}
      <div>
        <p className="font-medium text-ink text-[15px]">{item.name}</p>
        <p className="text-ink-50 text-[13px]">{item.role}</p>
      </div>

      {/* Quote */}
      <p className="text-ink-70 text-[14px] leading-relaxed flex-1">
        &ldquo;{item.q}&rdquo;
      </p>
    </div>
  );
}

export function Testimonials() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);

  return (
    <section className="pt-20 md:pt-[120px] lg:pt-[160px] pb-10 md:pb-16 lg:pb-20 bg-bg overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 text-center mb-12 md:mb-16 px-5 sm:px-8 md:px-12 lg:px-20">
        <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-ink-50">
          Testimonials
        </span>
        <h2
          className="font-medium leading-tight text-ink text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px]"
          style={{ letterSpacing: "-0.04em" }}
        >
          Don&apos;t take our word. Take theirs.
        </h2>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-4">
        <div
          className="flex gap-4 animate-marquee"
          style={{ "--duration": "40s" } as React.CSSProperties}
        >
          {[...row1, ...row1, ...row1].map((item, i) => (
            <TestimonialCard key={`r1-${i}`} item={item} index={i % row1.length} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div
          className="flex gap-4 animate-marquee-reverse"
          style={{ "--duration": "45s" } as React.CSSProperties}
        >
          {[...row2, ...row2, ...row2].map((item, i) => (
            <TestimonialCard key={`r2-${i}`} item={item} index={(i % row2.length) + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}
