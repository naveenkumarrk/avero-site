import Link from "next/link";

import { SERVICE_PAGES } from "@/lib/services";

/**
 * Nav for standalone pages. Uses real <Link> elements — unlike the homepage
 * Navbar, which is scroll buttons and therefore invisible to crawlers.
 */
export default function PageNav({ currentSlug }: { currentSlug?: string }) {
  return (
    <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-ink-12">
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between gap-4 px-5 sm:px-8 md:px-12 lg:px-20 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label="Avero — home">
          <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="8" fill="#0a0a0a" />
            <circle cx="12.5" cy="19" r="5.6" fill="#fff" />
            <circle cx="12.5" cy="19" r="2.2" fill="#D6F23A" />
            <rect x="18.6" y="9.4" width="3.2" height="15.2" rx="1.2" fill="#fff" />
            <rect x="18.6" y="22.4" width="3.2" height="3" rx="0" fill="#D6F23A" />
          </svg>
          <span className="font-medium text-lg tracking-tight text-ink">
            avero<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {SERVICE_PAGES.map(({ slug, navLabel }) => (
            <Link
              key={slug}
              href={`/${slug}`}
              aria-current={slug === currentSlug ? "page" : undefined}
              className={`hidden sm:inline-flex px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors ${
                slug === currentSlug
                  ? "text-ink bg-ink-06"
                  : "text-ink-70 hover:text-ink hover:bg-ink-06"
              }`}
            >
              {navLabel}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 bg-ink text-white rounded-full px-4 py-2 text-[13px] font-medium hover:bg-ink-90 transition-colors"
          >
            Book a call
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </nav>
    </header>
  );
}
