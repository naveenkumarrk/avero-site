"use client";

import { useEffect, useRef } from "react";

export function LogoImage({ src, height = "2rem" }: { src: string; height?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(src)
      .then((r) => r.text())
      .then((svg) => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg;
          const svgEl = ref.current.querySelector("svg");
          if (svgEl) {
            svgEl.removeAttribute("width");
            svgEl.removeAttribute("height");
            svgEl.style.cssText = "display:block;height:100%;width:auto;max-width:2000px;flex-shrink:0;";
            const useEls = svgEl.querySelectorAll("use, image");
            useEls.forEach((el) => {
              const xlink = el.getAttributeNS("http://www.w3.org/1999/xlink", "href");
              if (xlink && !el.getAttribute("href")) {
                el.setAttribute("href", xlink);
              }
            });
          }
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [src]);

  return (
    <div
      ref={ref}
      style={{ height, width: "auto", display: "flex", alignItems: "center", flexShrink: 0, filter: "grayscale(1)" }}
    />
  );
}
