"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { CONTACT_EMAIL } from "@/lib/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="min-h-screen flex flex-col justify-center py-20 md:py-[120px] lg:py-[160px] px-5 sm:px-8 md:px-12 lg:px-20 bg-bg">
      <div className="grid gap-20 grid-cols-1 lg:grid-cols-[380px_1fr]">
        {/* Left */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-[120px] self-start">
          <h2
            className="font-medium leading-tight text-ink text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px]"
            style={{ letterSpacing: "-0.05em" }}
          >
            Frequently Asked Questions
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[15px] text-ink-50 hover:text-ink transition-colors"
          >
            Can&apos;t find it?{" "}
            <span className="underline underline-offset-2">{CONTACT_EMAIL}</span>
          </a>
        </div>

        {/* Right */}
        <div className="faq-list border-t border-ink">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-ink-12">
                {/* Question row */}
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-[22px] cursor-pointer group transition-all"
                  style={{
                    paddingLeft: isOpen ? "6px" : "0px",
                    transition: "padding-left 0.2s ease",
                  }}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <h3
                    className="font-medium text-ink text-left text-[16px] md:text-[18px] lg:text-[20px]"
                  >
                    {item.q}
                  </h3>
                  <span
                    className="flex-shrink-0 ml-4 flex items-center justify-center rounded-full border border-ink transition-colors"
                    style={{
                      width: "28px",
                      height: "28px",
                      background: isOpen ? "var(--color-ink, #0a0a0a)" : "transparent",
                      borderColor: isOpen
                        ? "var(--color-ink, #0a0a0a)"
                        : "var(--color-ink-12, rgba(10,10,10,0.12))",
                    }}
                    aria-hidden
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <line
                        x1="6"
                        y1="1"
                        x2="6"
                        y2="11"
                        stroke={isOpen ? "white" : "currentColor"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                      <line
                        x1="1"
                        y1="6"
                        x2="11"
                        y2="6"
                        stroke={isOpen ? "white" : "currentColor"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    className="text-ink-70 leading-relaxed pb-[22px]"
                    style={{ fontSize: "15px" }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
