import type { Section as ContentSection } from "@/lib/types";
import { Eyebrow, MarkerList } from "@/components/ui/primitives";

/** Stable, human-readable anchor for a heading. */
export function slugifyHeading(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * The long-form reading layout, shared by guides, articles, company pages and
 * legal pages. A sticky contents rail on wide screens and a measure capped at
 * 46rem, because information-heavy pages fail on line length before anything else.
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

  return (
    <div className="container-page grid gap-12 py-section lg:grid-cols-[minmax(0,15rem)_minmax(0,46rem)_1fr] lg:gap-16">
      <nav aria-label={contentsLabel} className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">
        <Eyebrow className="mb-4">{contentsLabel}</Eyebrow>
        <ol className="space-y-2.5">
          {sections.map((section, i) => (
            <li key={section.heading} className="flex gap-3 py-1">
              <span className="tnum mt-1.5 text-eyebrow font-semibold text-lime-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <a
                href={`#${slugifyHeading(section.heading)}`}
                className="block py-1 text-small leading-snug text-graphite-soft transition-colors hover:text-lime-deep"
              >
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="prose-mengo min-w-0">
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

      {aside ? <aside className="lg:sticky lg:top-[calc(var(--header-h)+2.5rem)] lg:self-start">{aside}</aside> : <div />}
    </div>
  );
}

/** Small sidebar block used beside long-form content. */
export function AsideBlock({ eyebrow, items }: { eyebrow: string; items: string[] }) {
  return (
    <div className="rule-t pt-6">
      <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
      <MarkerList items={items} />
    </div>
  );
}
