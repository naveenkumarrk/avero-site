"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { useLenis } from "lenis/react";

const NAV_LINKS = [
  { label: "Services", href: "#services", icon: "M4 6h16M4 12h10M4 18h14" },
  { label: "Process", href: "#process", icon: "M9 5l7 7-7 7" },
  // Real route, not an anchor — the on-page work grid was replaced by /work.
  { label: "Work", href: "/work", route: true, icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" },
  { label: "Contact", href: "#contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const scrollTo = useCallback((href: string) => {
    if (!lenis) return;
    if (href === "#") {
      lenis.scrollTo(0, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    } else {
      const el = document.querySelector<HTMLElement>(href);
      if (el) {
        lenis.scrollTo(el, { offset: -80, duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    }
  }, [lenis]);

  return (
    <>
      {/* ── Desktop: floating centered pill ── */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pt-4 px-4">
        <nav className="flex items-center gap-2 bg-white border border-ink-12 rounded-full px-2 py-1.5 shadow-sm">
          <button onClick={() => scrollTo("#")} className="flex items-center gap-2 pl-2 pr-3">
            <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true" className="flex-shrink-0">
              <rect width="32" height="32" rx="8" fill="#0a0a0a" />
              <circle cx="12.5" cy="19" r="5.6" fill="#fff" />
              <circle cx="12.5" cy="19" r="2.2" fill="#D6F23A" />
              <rect x="18.6" y="9.4" width="3.2" height="15.2" rx="1.2" fill="#fff" />
              <rect x="18.6" y="22.4" width="3.2" height="3" rx="0" fill="#D6F23A" />
            </svg>
          </button>
          <div className="w-px h-5 bg-ink-12" />
          <div className="flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href, icon, route }) => {
              const inner = (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-50">
                    <path d={icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {label}
                </>
              );
              const cls =
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium text-ink-70 hover:text-ink hover:bg-ink-06 transition-all duration-200";
              return route ? (
                <Link key={label} href={href} className={cls}>
                  {inner}
                </Link>
              ) : (
                <button key={label} onClick={() => scrollTo(href)} className={cls}>
                  {inner}
                </button>
              );
            })}
          </div>
          <div className="w-px h-5 bg-ink-12" />
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-1.5 bg-ink text-white rounded-full px-4 py-2 text-[13px] font-medium hover:bg-ink-90 transition-colors duration-200"
          >
            Book a Call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </nav>
      </header>

      {/* ── Mobile: brand left + hamburger right ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <nav className="flex items-center justify-between px-5 py-3 bg-bg">
          {/* Brand */}
          <button onClick={() => scrollTo("#")} className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="#0a0a0a" />
              <circle cx="12.5" cy="19" r="5.6" fill="#fff" />
              <circle cx="12.5" cy="19" r="2.2" fill="#D6F23A" />
              <rect x="18.6" y="9.4" width="3.2" height="15.2" rx="1.2" fill="#fff" />
              <rect x="18.6" y="22.4" width="3.2" height="3" rx="0" fill="#D6F23A" />
            </svg>
            <span className="font-medium text-lg tracking-tight text-ink">
              avero<span className="text-accent">.</span>
            </span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-xl bg-ink flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              {open ? (
                <path d="M4 4l10 10M14 4L4 14" stroke="white" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <path d="M3 5h12M3 9h12M3 13h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="mx-4 mt-1 bg-white border border-ink-12 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col p-3 gap-1">
              {NAV_LINKS.map(({ label, href, icon, route }) => {
                const cls =
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium text-ink-70 hover:text-ink hover:bg-ink-06 transition-all w-full text-left";
                const inner = (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-40">
                      <path d={icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {label}
                  </>
                );
                return route ? (
                  <Link key={label} href={href} onClick={() => setOpen(false)} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <button key={label} onClick={() => { scrollTo(href); setOpen(false); }} className={cls}>
                    {inner}
                  </button>
                );
              })}
            </div>
            <div className="p-3 pt-0">
              <button
                onClick={() => { scrollTo("#contact"); setOpen(false); }}
                className="flex items-center justify-center gap-2 w-full bg-ink text-white rounded-xl py-3 text-[15px] font-medium hover:bg-ink-90 transition-colors"
              >
                Book a Call
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
