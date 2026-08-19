import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Deliberately no `disallow` for /system. That page carries a noindex meta
    // tag, and Google has to be able to crawl a page to see it — blocking the
    // URL here would leave it indexable-but-unreadable ("No information is
    // available for this page"). Disallow blocks crawling; noindex de-indexes.
    // `host` is omitted too: it's a Yandex-only directive Google ignores.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
