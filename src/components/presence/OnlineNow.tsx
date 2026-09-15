"use client";

import { usePresence } from "./PresenceProvider";

/**
 * Hero pill. Renders nothing until a real number arrives, so the row never
 * flashes a placeholder or reserves space it may not need.
 */
export function OnlineNow() {
  const { online } = usePresence();

  if (!online) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-ink-12 bg-white/60 backdrop-blur-sm text-xs sm:text-sm font-medium text-ink whitespace-nowrap">
      <span className="relative flex h-2 w-2 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      <span>{online} online</span>
    </div>
  );
}
