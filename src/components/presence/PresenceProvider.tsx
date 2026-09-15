"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Presence = { online: number | null; total: number | null };

const PresenceContext = createContext<Presence>({ online: null, total: null });

export const usePresence = () => useContext(PresenceContext);

const HEARTBEAT_MS = 30_000;
const STORAGE_KEY = "avero_vid";

/** Stable per-browser id. Not tied to a person — it's what makes the all-time
 *  total count visitors rather than page loads. */
function visitorId(): string | null {
  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) return existing;
    const created = crypto.randomUUID().replace(/-/g, "");
    localStorage.setItem(STORAGE_KEY, created);
    return created;
  } catch {
    // Private mode or blocked storage: no id, no counting.
    return null;
  }
}

export function PresenceProvider({ children }: { children: ReactNode }) {
  const [presence, setPresence] = useState<Presence>({ online: null, total: null });

  useEffect(() => {
    // Playwright, Lighthouse and the like set this. Same rule as brandmytrek:
    // automated traffic never reaches the public number.
    if (navigator.webdriver) return;

    const vid = visitorId();
    if (!vid) return;

    let cancelled = false;

    const beat = async () => {
      if (document.visibilityState === "hidden") return;
      try {
        const res = await fetch("/api/presence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ vid }),
        });
        if (!res.ok || cancelled) return;
        const data = await res.json();
        if (!cancelled && data?.enabled) {
          setPresence({ online: data.online ?? null, total: data.total ?? null });
        }
      } catch {
        // Offline or blocked: keep whatever was last shown.
      }
    };

    beat();
    const timer = setInterval(beat, HEARTBEAT_MS);
    // Coming back to the tab should refresh immediately, not up to 30s later.
    document.addEventListener("visibilitychange", beat);

    return () => {
      cancelled = true;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", beat);
    };
  }, []);

  return <PresenceContext.Provider value={presence}>{children}</PresenceContext.Provider>;
}
