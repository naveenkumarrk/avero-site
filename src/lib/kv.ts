import { Redis } from "@upstash/redis";

/**
 * Vercel's Upstash integration injects KV_REST_API_*; a Redis provisioned
 * directly from Upstash injects UPSTASH_REDIS_REST_*. Accept either so the
 * site works whichever way the store gets attached.
 *
 * Null when unconfigured — local dev and preview builds have no store, and a
 * visitor counter is not worth a build failure. Callers treat null as "off".
 */
const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = url && token ? new Redis({ url, token }) : null;

export const PRESENCE_KEYS = {
  /** ZSET: member = visitor id, score = last heartbeat in ms. */
  online: "avero:online",
  /** Monotonic count of distinct visitors, ever. */
  visits: "avero:visits",
  /** Per-visitor marker that gates the counter above. */
  seen: (vid: string) => `avero:seen:${vid}`,
} as const;

/** A visitor counts as online this long after their last heartbeat. */
export const ONLINE_WINDOW_MS = 60_000;
