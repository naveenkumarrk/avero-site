import type { MetadataRoute } from "next";

import { SERVICE_PAGES } from "@/lib/services";
import { CONTENT_UPDATED, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // lastModified is a pinned content date, not `new Date()`. A build-time
  // timestamp changes on every deploy, and Google learns to distrust a lastmod
  // that never matches an actual content change.
  return [
    { url: `${SITE_URL}/`, lastModified: CONTENT_UPDATED, priority: 1 },
    ...SERVICE_PAGES.map(({ slug }) => ({
      url: `${SITE_URL}/${slug}`,
      lastModified: CONTENT_UPDATED,
      priority: 0.8,
    })),
  ];
}
