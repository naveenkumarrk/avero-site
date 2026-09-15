import { NextResponse } from "next/server";

import { ONLINE_WINDOW_MS, PRESENCE_KEYS, redis } from "@/lib/kv";

export const dynamic = "force-dynamic";

/** Client-generated ids only — anything else is a malformed or forged call. */
const VISITOR_ID = /^[a-z0-9]{16,40}$/;

/**
 * Crawlers execute scripts (Googlebot does), so without this the "online"
 * number would count indexing passes as people.
 */
const BOT_UA = /bot|crawler|spider|crawling|headless|lighthouse|preview|slurp|facebookexternalhit/i;

/** Visitors stop counting toward the all-time total after this long. */
const SEEN_TTL_SECONDS = 60 * 60 * 24 * 400;

export async function POST(request: Request) {
  if (!redis) {
    return NextResponse.json({ enabled: false });
  }

  if (BOT_UA.test(request.headers.get("user-agent") ?? "")) {
    return NextResponse.json({ enabled: true, online: null, total: null });
  }

  let vid: unknown;
  try {
    vid = (await request.json())?.vid;
  } catch {
    return NextResponse.json({ error: "Malformed body" }, { status: 400 });
  }

  if (typeof vid !== "string" || !VISITOR_ID.test(vid)) {
    return NextResponse.json({ error: "Invalid visitor id" }, { status: 400 });
  }

  const now = Date.now();

  try {
    // NX means only the first heartbeat from this visitor ever increments the
    // total — later ones are presence-only.
    const isFirstVisit = await redis.set(PRESENCE_KEYS.seen(vid), now, {
      nx: true,
      ex: SEEN_TTL_SECONDS,
    });
    if (isFirstVisit) {
      await redis.incr(PRESENCE_KEYS.visits);
    }

    const pipeline = redis.pipeline();
    pipeline.zadd(PRESENCE_KEYS.online, { score: now, member: vid });
    // Trimming on write is what keeps the set from growing without bound;
    // there is no cleanup job.
    pipeline.zremrangebyscore(PRESENCE_KEYS.online, 0, now - ONLINE_WINDOW_MS);
    pipeline.zcard(PRESENCE_KEYS.online);
    pipeline.get(PRESENCE_KEYS.visits);
    const [, , online, total] = (await pipeline.exec()) as [
      unknown,
      unknown,
      number,
      number | null,
    ];

    return NextResponse.json({
      enabled: true,
      online: Math.max(1, Number(online) || 1),
      total: Number(total) || 0,
    });
  } catch (error) {
    // A counter is decoration. If the store is unreachable the page carries on.
    console.error("[presence]", error);
    return NextResponse.json({ enabled: false });
  }
}
