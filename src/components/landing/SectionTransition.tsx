"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SectionTransitionProps {
  children: React.ReactNode;
  fromColor: string;
  toColor: string;
}

export function SectionTransition({ children, fromColor, toColor }: SectionTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    // Set initial color
    gsap.set(el, { backgroundColor: fromColor });

    // Animate background color as user scrolls through the wrapper
    const tween = gsap.to(el, {
      backgroundColor: toColor,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [fromColor, toColor]);

  return (
    <div ref={wrapperRef} style={{ backgroundColor: fromColor }}>
      {children}
    </div>
  );
}
