"use client";

import { usePresence } from "./PresenceProvider";

/** Footer line — the all-time visitor count, stated once and quietly. */
export function VisitTotal() {
  const { total } = usePresence();

  if (!total) return null;

  return (
    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
      {total.toLocaleString("en-US")} visitors
    </span>
  );
}
