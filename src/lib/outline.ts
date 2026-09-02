/**
 * Page outlines, declared by a template alongside the sections they point at.
 *
 * Lives in `lib` rather than beside `SectionNav` because the templates that
 * build an outline are server components, and a helper exported from a
 * `"use client"` module cannot be called from one.
 */

export interface OutlineItem {
  /** Element id of the section this entry scrolls to. */
  id: string;
  /**
   * What the strip prints. Always a word the page already uses for that band —
   * its eyebrow, or a noun from its own heading — never a new name for it.
   */
  label: string;
}

/**
 * Drops the entries whose section was not rendered.
 *
 * Templates gate bands on whether a record carries the data for them, so the
 * outline is built with the same conditions inline: an entry for a section that
 * did not render would otherwise be a link that scrolls nowhere.
 */
export function outline(items: (OutlineItem | false | null | undefined)[]): OutlineItem[] {
  return items.filter((item): item is OutlineItem => Boolean(item));
}

/**
 * The neighbours of `slug` within an ordered list.
 *
 * Sequential navigation is only honest when the order means something, so each
 * template passes the run the page actually belongs to — the capabilities of
 * one engine, the terms in alphabetical order, the articles by date — rather
 * than the whole content set.
 */
export function neighbours<T extends { slug: string; title: string; navLabel?: string }>(
  list: T[],
  slug: string,
): { previous?: T; next?: T } {
  const index = list.findIndex((item) => item.slug === slug);
  if (index === -1) return {};
  return { previous: list[index - 1], next: list[index + 1] };
}
