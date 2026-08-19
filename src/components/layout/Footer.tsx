import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-white px-5 sm:px-8 md:px-12 lg:px-20 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left: brand */}
        <div className="flex items-center gap-3">
          <span className="font-medium text-lg tracking-tight">
            avero<span className="text-accent">.</span>
          </span>
          <span className="text-white/30 text-sm hidden sm:inline">·</span>
          <span className="text-white/50 text-sm">
            © 2026 Avero Studio
          </span>
        </div>

        {/* Center: links */}
        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="me noopener noreferrer"
              className="text-white/50 hover:text-white text-sm transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: email */}
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
