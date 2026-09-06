import type { CaseStudy } from "@/lib/work";
import type { ServicePage } from "@/lib/services";
import { CONTENT_UPDATED, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * JSON-LD graph for a service page. Built from the same data the page renders,
 * so the markup can never claim something the visible copy doesn't say — which
 * is what Google's structured-data guidelines require.
 */
export function servicePageSchema(page: ServicePage) {
  const url = `${SITE_URL}/${page.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: page.navLabel, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.serviceName,
        serviceType: page.serviceType,
        description: page.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
        audience: { "@type": "Audience", audienceType: "Startups and SaaS teams" },
      },
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        datePublished: CONTENT_UPDATED,
        dateModified: CONTENT_UPDATED,
        inLanguage: "en-US",
        about: { "@id": `${url}#service` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faqs.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
}

/** FAQPage for the homepage accordion (answers are in the DOM, just collapsed). */
export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    name: `${SITE_NAME} — frequently asked questions`,
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

/**
 * JSON-LD for /work. The case studies are self-initiated concept pieces, so
 * they're typed as CreativeWork authored by the studio — never as client
 * commissions, which the visible copy doesn't claim either.
 */
export function workPageSchema(studies: CaseStudy[]) {
  const url = `${SITE_URL}/work`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Work", item: url },
        ],
      },
      {
        "@type": "CollectionPage",
        "@id": url,
        url,
        name: `Selected work — ${SITE_NAME}`,
        description:
          "Concept case studies in SaaS, product UI, industrial and fintech interface design.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        datePublished: CONTENT_UPDATED,
        dateModified: CONTENT_UPDATED,
        inLanguage: "en-US",
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntity: { "@id": `${url}#list` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        numberOfItems: studies.length,
        itemListElement: studies.map((study, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            "@id": `${url}#${study.slug}`,
            name: study.name,
            headline: study.tagline,
            description: study.summary,
            genre: study.category,
            image: `${SITE_URL}${study.cover}`,
            url: `${url}#${study.slug}`,
            creator: { "@id": `${SITE_URL}/#organization` },
          },
        })),
      },
    ],
  };
}
