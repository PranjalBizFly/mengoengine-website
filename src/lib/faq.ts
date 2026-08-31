import { content, urlFor } from "@/lib/registry";
import type { Entity, Faq } from "@/lib/types";

/**
 * The FAQ index.
 *
 * 380 questions are answered across the site, in the context of the page that
 * owns them. Reproducing all of those answers on one page would compete with
 * those pages for the same queries, so this splits them:
 *
 *   - `generalFaqs()` — product-level questions answered here in full, and the
 *     only ones emitted as FAQPage structured data.
 *   - `faqIndex()` — every other question as a link to the page that answers it
 *     in context.
 *
 * That keeps the page genuinely useful without duplicating content against the
 * rest of the site.
 */

export interface FaqEntry extends Faq {
  /** Where the question is answered in full. */
  href: string;
  /** The page that owns it. */
  source: string;
  topic: string;
}

const TOPIC_LABEL: Partial<Record<Entity["kind"], string>> = {
  product: "The platform",
  feature: "Capabilities",
  solution: "Solutions",
  industry: "Industries",
  "use-case": "Specific jobs",
  channel: "Channels",
  comparison: "Choosing Mengo",
};

/** Order the topics appear on the page. */
export const FAQ_TOPICS = [
  "The platform",
  "Choosing Mengo",
  "Solutions",
  "Capabilities",
  "Industries",
  "Channels",
  "Specific jobs",
] as const;

function collect(): FaqEntry[] {
  const out: FaqEntry[] = [];
  const lists: Entity[][] = [
    content.products,
    content.comparisons,
    content.solutions,
    content.features,
    content.industries,
    content.channels,
    content.useCases,
  ];

  for (const list of lists) {
    for (const entity of list) {
      const faqs = (entity as { faqs?: Faq[] }).faqs;
      const topic = TOPIC_LABEL[entity.kind];
      if (!faqs || !topic) continue;
      for (const faq of faqs) {
        out.push({ ...faq, href: urlFor(entity), source: entity.title, topic });
      }
    }
  }
  return out;
}

const ALL = collect();

/**
 * Questions answered in full on the FAQ page itself. Product-level only — these
 * are the questions asked about Mengo rather than about a specific industry or
 * channel, so answering them here does not compete with a more specific page.
 */
export function generalFaqs(): FaqEntry[] {
  return ALL.filter((f) => f.topic === "The platform");
}

/** Everything else, grouped by topic, as links to the answering page. */
export function faqIndex(): { topic: string; entries: FaqEntry[] }[] {
  return FAQ_TOPICS.filter((t) => t !== "The platform")
    .map((topic) => ({ topic, entries: ALL.filter((f) => f.topic === topic) }))
    .filter((group) => group.entries.length > 0);
}

export function faqCount(): number {
  return ALL.length;
}
