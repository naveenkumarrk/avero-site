"use client";

import { SERVICES } from "@/lib/constants";

const BoltIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M13 2 L4 14 H11 L9 22 L20 9 H13 L15 2 Z" fill="#0a0a0a" />
  </svg>
);

const rows = [...SERVICES, ...SERVICES, ...SERVICES, ...SERVICES];

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center py-[140px] px-5 sm:px-8 md:px-12 lg:px-20 bg-bg text-ink"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-[100px] w-full">
        {/* Left side - sticky info */}
        <div className="ss-lhs flex flex-col gap-6 lg:sticky lg:top-[120px] self-start">
          <span className="font-mono text-[11px] tracking-[0.14em] uppercase opacity-50">
            All your product needs handled
          </span>
          <h2 className="text-[36px] md:text-[48px] lg:text-[64px] leading-none tracking-[-0.05em] font-medium">
            In record
            <br />
            time.
          </h2>
          <p className="text-[15px] leading-relaxed opacity-70">
            Four lanes. Same two people, brief to live URL.
          </p>
          <a
            href="#"
            className="self-start rounded-full bg-accent text-ink px-[22px] py-3.5 font-medium text-sm cursor-pointer"
          >
            Book a call ↗
          </a>
        </div>

        {/* Right side - vertical scrolling marquee */}
        <div className="marquee-mask-vertical overflow-hidden h-[300px] md:h-[400px] lg:h-[560px]">
          <div
            className="animate-marquee-vertical"
            style={{ "--duration": "18s" } as React.CSSProperties}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.animationPlayState = "paused")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.animationPlayState = "running")
            }
          >
            {rows.map((label, i) => (
              <div
                key={i}
                className="grid items-center py-6 border-b border-current/10"
                style={{ gridTemplateColumns: "1fr 48px" }}
              >
                <span
                  className="text-[28px] md:text-[36px] lg:text-[44px] font-medium leading-none"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  {label}
                </span>
                <span
                  className="w-12 h-12 rounded-full bg-accent flex items-center justify-center"
                  style={{ boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)" }}
                >
                  <BoltIcon />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
