import type { Section as ContentSection } from "@/lib/types";
import type { LinkRef } from "@/lib/registry";
import { Eyebrow, RelatedLinkList } from "@/components/ui/primitives";
import { ContentsRail } from "@/components/layout/SectionNav";

/** Stable, human-readable anchor for a heading. */
export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Column tracks for the long-form composition.
 *
 * Written out per case rather than assembled from fragments, because Tailwind
 * reads these as literal text and a concatenated class name is a class name it
 * never emits.
 *
 * The proportions are the point. `container-page` is 84rem wide and gives up
 * 7rem to its gutters, so a desktop row has about 1230px to divide. The old
 * single declaration spent 15rem on the contents, pinned the article at 46rem
 * and handed the remainder — 128px — to the related rail, which is narrower
 * than the phrase "How Mengo Works". Trimming the contents rail and the gaps
 * buys the right rail 16rem while costing the article under 60px, which is the
 * trade the eye actually wants: an aside wide enough to read at a glance,
 * against a measure that was never in danger.
 *
 * Three columns need roughly 1280px to be honest about it. Between `lg` and
 * `xl` the aside drops under the article instead of being squeezed, and below
 * `lg` everything is one column.
 */
const TRACKS = {
  /** Contents, article, related rail. */
  both: "lg:grid-cols-[minmax(0,11.5rem)_minmax(0,1fr)] lg:gap-x-10 xl:grid-cols-[minmax(11rem,12.5rem)_minmax(0,1fr)_minmax(15.5rem,17rem)] xl:gap-x-12",
  /** Contents and article. Nothing claims the right margin, so the article keeps its measure. */
  contents:
    "lg:grid-cols-[minmax(0,11.5rem)_minmax(0,46rem)] lg:gap-x-12 xl:grid-cols-[minmax(0,13rem)_minmax(0,46rem)] xl:gap-x-16",
  /** Article and related rail. */
  aside: "lg:grid-cols-[minmax(0,1fr)_minmax(15.5rem,17rem)] lg:gap-x-12 xl:gap-x-16",
  none: "",
} as const;

/**
 * The long-form reading layout, shared by guides, articles, company pages and
 * legal pages.
 *
 * The reading column is the subject and the two rails support it: a sticky
 * contents on the left, an optional related rail on the right, both hairline
 * navigation rather than panels. Whichever of them a page actually passes is
 * what gets a column — an empty track is what left the aside at a sixth of its
 * needed width.
 */
export function LongForm({
  sections,
  aside,
  contentsLabel = "Contents",
  heroVisual,
  supportingVisual,
}: {
  sections: ContentSection[];
  aside?: React.ReactNode;
  contentsLabel?: string;
  heroVisual?: React.ReactNode;
  supportingVisual?: React.ReactNode;
}) {
  const midpoint = Math.floor(sections.length / 2);
  const items = sections.map((section) => ({
    id: slugifyHeading(section.heading),
    label: section.heading,
  }));

  /* Mirrors `ContentsRail`'s own guard, so the column and its occupant agree. */
  const hasContents = items.length >= 2;
  const hasAside = Boolean(aside);
  const tracks = hasContents ? (hasAside ? TRACKS.both : TRACKS.contents) : hasAside ? TRACKS.aside : TRACKS.none;

  /* Explicit placement rather than flow, so a missing rail leaves its column
     empty instead of pulling the article into it. */
  const articleAt = hasContents ? "lg:col-start-2 lg:row-start-1" : "lg:col-start-1 lg:row-start-1";
  const asideAt = hasContents
    ? // Below `xl` it sits under the article in the same column; at `xl` it
      // takes the third track and can stick.
      "lg:col-start-2 lg:row-start-2 xl:col-start-3 xl:row-start-1 xl:sticky xl:top-[calc(var(--header-h)+2.5rem)] xl:self-start"
    : "lg:col-start-2 lg:row-start-1 lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start";

  return (
    <div className={`container-page grid gap-y-12 py-section ${tracks}`}>
      {hasContents ? <ContentsRail label={contentsLabel} items={items} /> : null}

      <article className={`prose-mengo min-w-0 ${articleAt}`}>
        {heroVisual ? <div className="not-prose mb-10">{heroVisual}</div> : null}
        {sections.map((section, idx) => (
          <section key={section.heading} className="scroll-mt-[calc(var(--header-h)+2rem)]">
            <h2 id={slugifyHeading(section.heading)} className="first:mt-0">
              {section.heading}
            </h2>
            {section.body ? <p>{section.body}</p> : null}
            {supportingVisual && idx === midpoint ? (
              <div className="not-prose my-10">{supportingVisual}</div>
            ) : null}
            {section.blocks?.map((block, i) =>
              block.type === "text" ? (
                <p key={i}>{block.text}</p>
              ) : (
                <ul key={i}>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            )}
            {section.bullets ? (
              <dl className="not-prose mt-6 grid gap-5">
                {section.bullets.map((bullet) => (
                  <div key={bullet.label} className="rule-t pt-4">
                    <dt className="type-title text-h8 text-graphite">
                      {bullet.label}
                    </dt>
                    <dd className="mt-1.5 text-body leading-relaxed text-graphite-soft">{bullet.body}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </section>
        ))}
      </article>

      {hasAside ? <aside className={`min-w-0 ${asideAt}`}>{aside}</aside> : null}
    </div>
  );
}

/**
 * The related rail beside long-form content.
 *
 * A contained block rather than a loose list: a hairline, a faint warm ground
 * and real padding, which is what tells the eye this is a aside and not the
 * end of the article. Contained, not a card — no shadow, no heavy fill, and the
 * eyebrow stays flat rather than taking the section pill, because this must
 * never read louder than the page title beside it.
 *
 * The links themselves are `RelatedLinkList`, the same component the full-width
 * related bands use, so the bullet, the hanging indent and the row rhythm are
 * defined once for the whole site.
 *
 * Capped, because the point is a handful of next steps and not a second
 * sitemap; a page with nothing genuinely adjacent passes nothing and the column
 * is never reserved.
 */
export function AsideBlock({
  eyebrow,
  links,
  limit = 6,
}: {
  eyebrow: string;
  links: LinkRef[];
  limit?: number;
}) {
  const shown = links.slice(0, limit);
  if (shown.length === 0) return null;

  return (
    <div className="rounded-2xl border border-paper-line bg-paper-warm/60 p-5 sm:p-6 lg:max-w-[28rem] xl:max-w-none [.on-dark_&]:border-line-invert [.on-dark_&]:bg-forest-800/50">
      {/* The pill, same as the "Related" band at the foot of the page, so the
          two related surfaces are recognisably the same thing. */}
      <Eyebrow>{eyebrow}</Eyebrow>
      {/* The negative margins take back the first and last row's own padding,
          so the optical inset matches the box padding on all four sides. */}
      <RelatedLinkList links={shown} size="compact" className="-mb-2.5 mt-2" />
    </div>
  );
}
