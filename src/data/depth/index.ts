import type { Depth, Indexable, Section, Slug } from "@/lib/types";

/**
 * The editorial depth layer.
 *
 * Page-specific explanation lives here rather than in the templates. One file
 * per page type, keyed by slug, so a template stays a layout and the answer to
 * "what does this page actually say" is a single lookup.
 *
 * Two rules govern what may be written into these files:
 *
 * 1. Every block must be true of *this* record and only awkwardly true of any
 *    other. Copy that would read identically on fifty pages is boilerplate, and
 *    `npm run check:depth` fails the build on it.
 * 2. Nothing may assert a customer, a statistic, an integration or an outcome.
 *    The product is pre-launch; the explanation has to carry the page.
 */
export type DepthMap = Record<Slug, Depth>;

/**
 * Attach depth blocks to a built entity list.
 *
 * Records with no entry pass through untouched, which is deliberate: legal
 * pages and anything already at the right depth should not be padded.
 */
export function withDepth<T extends Indexable>(list: T[], map: DepthMap): T[] {
  return list.map((entity) => {
    const depth = map[entity.slug];
    return depth ? { ...entity, depth } : entity;
  });
}

/** Terse section constructor — these files hold seventy records at a time. */
export function s(heading: string, body: string, bullets?: [string, string][]): Section {
  return {
    heading,
    body,
    ...(bullets ? { bullets: bullets.map(([label, text]) => ({ label, body: text })) } : {}),
  };
}

/** Terse closing-copy constructor. */
export function close(title: string, body: string) {
  return { title, body };
}
