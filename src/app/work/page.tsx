import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import WorkPageLayout from "@/components/work/WorkPageLayout";
import { workPageSchema } from "@/lib/schema";
import { CASE_STUDIES } from "@/lib/work";

const META_TITLE = "Selected Work — SaaS, Product UI & Web Design | Avero";
const META_DESCRIPTION =
  "Case studies from Avero Studio: SaaS dashboards, analytics products, fintech and industrial marketing sites. Concept work, designed end to end.";

export const metadata: Metadata = {
  // `absolute` bypasses the root layout's "%s | Avero Studio" template —
  // the title already carries the brand, so the template would double it.
  title: { absolute: META_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "design portfolio",
    "SaaS web design",
    "product UI design",
    "dashboard design",
    "landing page design",
    "web design case studies",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    title: META_TITLE,
    description: META_DESCRIPTION,
    // Repeated deliberately: defining `openGraph` here replaces the root
    // layout's block rather than merging into it.
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Avero Studio — selected work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: ["/og.png"],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={workPageSchema(CASE_STUDIES)} />
      <WorkPageLayout />
    </>
  );
}
