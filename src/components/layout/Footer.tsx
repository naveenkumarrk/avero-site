import Link from "next/link";

import { SERVICE_PAGES } from "@/lib/services";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white px-5 sm:px-8 md:px-12 lg:px-20 py-12">
      {/* Sitewide internal links. The homepage Navbar is scroll buttons, so this
          is the only crawlable path to the service pages — without it they'd be
          orphaned and rely on the sitemap alone. */}
      <nav aria-label="Footer" className="flex flex-col gap-8 sm:flex-row sm:gap-16">
        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
            Services
          </h2>
          <ul className="flex flex-col gap-2">
            {SERVICE_PAGES.map(({ slug, navLabel }) => (
              <li key={slug}>
                <Link
                  href={`/${slug}`}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
            Studio
          </h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className="text-white/60 hover:text-white text-sm transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#process"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
            Elsewhere
          </h2>
          <ul className="flex flex-col gap-2">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/60 hover:text-accent text-sm transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-medium text-lg tracking-tight">
            avero<span className="text-accent">.</span>
          </span>
          <span className="text-white/30 text-sm hidden sm:inline">·</span>
          <span className="text-white/50 text-sm">© 2026 Avero Studio</span>
        </Link>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-white/50 hover:text-accent text-sm transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
      </div>
    </footer>
  );
}
