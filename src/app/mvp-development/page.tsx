import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import ServicePageLayout from "@/components/service/ServicePageLayout";
import { servicePageSchema } from "@/lib/schema";
import { MVP_DEVELOPMENT as page } from "@/lib/services";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Avero Studio" template —
  // metaTitle already carries the brand, so the template would double it.
  title: { absolute: page.metaTitle },
  description: page.metaDescription,
  keywords: page.keywords,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    type: "website",
    url: `/${page.slug}`,
    title: page.metaTitle,
    description: page.metaDescription,
    // Must be repeated: defining an `openGraph` block here replaces the root
    // layout's rather than merging into it, so images would otherwise be lost.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: page.serviceName }],
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/og.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={servicePageSchema(page)} />
      <ServicePageLayout page={page} />
    </>
  );
}
