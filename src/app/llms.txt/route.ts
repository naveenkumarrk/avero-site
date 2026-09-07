import { SERVICE_PAGES } from "@/lib/services";
import { CASE_STUDIES } from "@/lib/work";
import { CONTACT_EMAIL, CONTENT_UPDATED, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

/**
 * /llms.txt — a plain-markdown summary of the site for language models, per the
 * llmstxt.org proposal.
 *
 * Honest status: this is an emerging convention, not a standard, and no major
 * answer engine has confirmed it reads the file. It costs one route and is
 * generated from the same data as the pages, so it can't go stale. Treat it as
 * a cheap option on a convention that may or may not land — the real extraction
 * path is still the server-rendered HTML.
 */
export const dynamic = "force-static";

export function GET() {
  const services = SERVICE_PAGES.map(
    (p) => `- [${p.serviceName}](${SITE_URL}/${p.slug}): ${p.metaDescription}`,
  ).join("\n");

  const work = CASE_STUDIES.map(
    (c) => `- [${c.name}](${SITE_URL}/work#${c.slug}) — ${c.category}: ${c.tagline}`,
  ).join("\n");

  const serviceFaqs = SERVICE_PAGES.map(
    (p) =>
      `### ${p.serviceName}\n` +
      p.atAGlance.map(({ label, value }) => `- ${label}: ${value}`).join("\n"),
  ).join("\n\n");

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is a design and build studio. A sprint runs seven days from a
30-minute scoping call to a live URL, priced at a flat $14k. Work is production
Next.js and TypeScript on a repo the client owns — not a no-code prototype.
Founded 2021. Contact: ${CONTACT_EMAIL}.

## Services

${services}

## At a glance

${serviceFaqs}

## Selected work

Concept case studies, designed end to end. Not client commissions.

${work}

## Pages

- [Home](${SITE_URL}/): services, process, comparison against agencies and freelancers, booking.
- [Work](${SITE_URL}/work): case studies and a gallery of daily design practice.
${SERVICE_PAGES.map((p) => `- [${p.navLabel}](${SITE_URL}/${p.slug})`).join("\n")}

## Notes

- Canonical host: ${SITE_URL}
- Last content update: ${CONTENT_UPDATED}
- Contact: ${CONTACT_EMAIL}
`;

  return new Response(body, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
