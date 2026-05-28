"use client";

import { MARQUEE_ITEMS_UP, MARQUEE_ITEMS_DOWN } from "@/lib/constants";

function MarqueeTrack({
  items,
  direction,
  duration,
}: {
  items: string[];
  direction: "forward" | "reverse";
  duration: string;
}) {
  const repeated = [...items, ...items];

  return (
    <div
      className={
        direction === "forward" ? "animate-marquee" : "animate-marquee-reverse"
      }
      style={{ "--duration": duration } as React.CSSProperties}
    >
      <div className="flex items-center gap-6 sm:gap-10 md:gap-14">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-6 sm:gap-10 md:gap-14">
            <span className="text-[13px] sm:text-[16px] md:text-[20px] tracking-tight font-medium whitespace-nowrap">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-current inline-block flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeBand() {
  return (
    <div className="marquee-x h-[140px] sm:h-[170px] md:h-[203px] overflow-hidden mt-8 sm:mt-12 md:mt-[60px] relative">
      {/* Up bar — rotated -6.2deg */}
      <div
        className="marquee-bar up absolute bg-ink text-white h-14 flex items-center overflow-hidden"
        style={{
          top: "50%",
          left: "-120px",
          right: "-120px",
          transform: "translateY(-50%) rotate(-6.2deg)",
        }}
      >
        <MarqueeTrack
          items={MARQUEE_ITEMS_UP}
          direction="forward"
          duration="36s"
        />
      </div>

      {/* Down bar — rotated +6.2deg */}
      <div
        className="marquee-bar down absolute bg-bg text-ink border-y border-ink h-14 flex items-center overflow-hidden"
        style={{
          top: "50%",
          left: "-120px",
          right: "-120px",
          transform: "translateY(-50%) rotate(6.2deg)",
        }}
      >
        <MarqueeTrack
          items={MARQUEE_ITEMS_DOWN}
          direction="reverse"
          duration="44s"
        />
      </div>
    </div>
  );
}
