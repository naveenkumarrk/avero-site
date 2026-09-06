"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

/**
 * The Cal.com embed is heavy — an iframe plus its own bundle — and it sits far
 * below the fold. Mounting it on page load meant every visitor paid for it
 * while reading the hero, which is what made the page feel sticky on the way
 * down. It's code-split and only mounted once it's close to the viewport.
 */
const Cal = dynamic(() => import("@calcom/embed-react"), { ssr: false });

export function CalendlySection() {
  const slotRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = slotRef.current;
    if (!el) return;

    // No IntersectionObserver: load it anyway rather than stranding the
    // booking flow. Deferred to a task so this isn't a setState in the effect
    // body, which React flags as a synchronous cascade.
    if (typeof IntersectionObserver === "undefined") {
      const t = setTimeout(() => setShow(true), 0);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      // Start loading a screen early so it's ready by the time it's on screen.
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" className="bg-bg py-20 md:py-24 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-20">
      <div className="flex flex-col items-center text-center gap-6 mb-12">
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-50">
          Book a call
        </span>

        <h2
          className="font-medium tracking-tight text-ink text-[28px] sm:text-[36px] md:text-[46px] lg:text-[56px]"
          style={{ lineHeight: 1.05, letterSpacing: "-0.04em" }}
        >
          Let&apos;s talk about your project.
        </h2>

        <p className="text-ink-50 max-w-lg text-base leading-relaxed">
          30 minutes. Scope, price, and a date — even if you don&apos;t book us.
        </p>
      </div>

      {/* Height is reserved so the swap doesn't shift the page. */}
      <div ref={slotRef} className="min-h-[620px]">
        {show ? (
          <Cal
            calLink="avero/your-website-project-kickoff"
            config={{ layout: "month_view", theme: "light" }}
          />
        ) : (
          <div
            className="flex min-h-[620px] items-center justify-center rounded-2xl border border-ink-12 bg-white"
            aria-hidden
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-30">
              Loading calendar…
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
