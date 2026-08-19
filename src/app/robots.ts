import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

/**
 * AI crawlers, listed explicitly. Functionally these are already covered by the
 * `*` group below — a crawler falls back to `*` when no group names it — so this
 * is a declaration of intent, not a permission change. It's here so the answer
 * engines are a visible, deliberate part of the config and nobody blocks them by
 * accident later.
 *
 * Google-Extended and Applebot-Extended don't crawl anything; they only gate
 * whether already-crawled content may be used for AI grounding. Listing them
 * as allowed is the explicit opt-in.
 */
const AI_CRAWLERS = [
  "GPTBot",              // OpenAI crawler
  "OAI-SearchBot",       // ChatGPT Search index
  "ChatGPT-User",         // ChatGPT live fetch on user request
  "PerplexityBot",       // Perplexity index
  "Perplexity-User",     // Perplexity live fetch
  "ClaudeBot",           // Anthropic crawler
  "Claude-User",
  "Claude-SearchBot",
  "Google-Extended",     // Gemini / Vertex grounding
  "Applebot-Extended",   // Apple Intelligence
  "meta-externalagent",  // Meta AI
  "Amazonbot",
  "cohere-ai",
  "MistralAI-User",
  "DuckAssistBot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // No `disallow` for /system: it carries a noindex meta tag, and a page has
      // to be crawlable for that tag to be read. Disallow blocks crawling;
      // noindex removes from the index.
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
