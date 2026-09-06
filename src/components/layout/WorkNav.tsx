"use client";

import Link from "next/link";
import { useState } from "react";

/**
 * The homepage's floating pill nav, rebuilt with real <Link> hrefs.
 *
 * The homepage Navbar drives Lenis scroll on same-page anchors, which can't
 * work from a standalone route — and scroll buttons are invisible to crawlers.
 * Same visual, real links.
 */
const NAV_LINKS = [
  { label: "Services", href: "/#services", icon: "M4 6h16M4 12h10M4 18h14" },
  { label: "Process", href: "/#process", icon: "M9 5l7 7-7 7" },
  { label: "Work", href: "/work", icon: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" },
  { label: "Contact", href: "/#contact", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" className="flex-shrink-0">
      <rect width="32" height="32" rx="8" fill="#0a0a0a" />
      <circle cx="12.5" cy="19" r="5.6" fill="#fff" />
      <circle cx="12.5" cy="19" r="2.2" fill="#D6F23A" />
      <rect x="18.6" y="9.4" width="3.2" height="15.2" rx="1.2" fill="#fff" />
      <rect x="18.6" y="22.4" width="3.2" height="3" rx="0" fill="#D6F23A" />
    </svg>
  );
}

export default function WorkNav({ current = "/work" }: { current?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Desktop: floating centered pill ── */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center pt-4 px-4">
        <nav className="flex items-center gap-2 bg-white border border-ink-12 rounded-full px-2 py-1.5 shadow-sm">
          <Link href="/" className="flex items-center gap-2 pl-2 pr-3" aria-label="Avero — home">
            <Mark />
          </Link>
          <div className="w-px h-5 bg-ink-12" />
          <div className="flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                aria-current={href === current ? "page" : undefined}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  href === current ? "text-ink bg-ink-06" : "text-ink-70 hover:text-ink hover:bg-ink-06"
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-50">
                  <path d={icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {label}
              </Link>
            ))}
          </div>
          <div className="w-px h-5 bg-ink-12" />
          <Link
            href="/#contact"
            className="flex items-center gap-1.5 bg-ink text-white rounded-full px-4 py-2 text-[13px] font-medium hover:bg-ink-90 transition-colors duration-200"
          >
            Book a Call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </nav>
      </header>

      {/* ── Mobile: brand left + hamburger right ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <nav className="flex items-center justify-between px-5 py-3 bg-bg">
          <Link href="/" className="flex items-center gap-2" aria-label="Avero — home">
            <Mark size={28} />
            <span className="font-medium text-lg tracking-tight text-ink">
              avero<span className="text-accent">.</span>
            </span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 rounded-xl bg-ink flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={open}
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

        {open && (
          <div className="mx-4 mt-1 bg-white border border-ink-12 rounded-2xl shadow-lg overflow-hidden">
            <div className="flex flex-col p-3 gap-1">
              {NAV_LINKS.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-[15px] font-medium text-ink-70 hover:text-ink hover:bg-ink-06 transition-all w-full text-left"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-40">
                    <path d={icon} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {label}
                </Link>
              ))}
            </div>
            <div className="p-3 pt-0">
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-ink text-white rounded-xl py-3 text-[15px] font-medium hover:bg-ink-90 transition-colors"
              >
                Book a Call
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
