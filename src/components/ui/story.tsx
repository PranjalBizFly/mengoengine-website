import Link from "next/link";

/**
 * Editorial storytelling patterns.
 *
 * These exist to replace the site's flattest device — a column of underlined
 * links with a sentence under each — with something that reads as composed
 * rather than listed, without turning the content into another grid of cards.
 *
 * Everything here is a server component and the interaction is pure CSS. The
 * site already ships one IntersectionObserver for `data-reveal`; a hover state
 * does not need a second one, and a row that only becomes legible after
 * hydration is worse than one that never needed it.
 */

/* ------------------------------------------------------------------ */
/* Editorial rows                                                      */
/* ------------------------------------------------------------------ */

export interface StoryRowItem {
  href: string;
  title: string;
  /** The line that is always visible. */
  body: string;
  /**
   * A second line that is present for a reader who wants it and out of the way
   * for one who does not — revealed on hover, and on keyboard focus, which is
   * the half most hover-reveals forget.
   */
  more?: string;
  /** Small label above the title: a category, a stage, a count. */
  kicker?: string;
}

/**
 * A numbered or labelled sequence of destinations, set as editorial rows.
 *
 * The row is the whole target rather than the title alone, the rule above it
 * carries a lime segment that draws in on hover, and the arrow moves. Three
 * small things that together make a list feel authored — and all of them
 * transform/opacity only, so the whole section composites on the GPU.
 */
export function StoryRows({
  items,
  numbered = false,
  tone = "light",
  className = "",
}: {
  items: StoryRowItem[];
  /** Number the rows when their order is part of the meaning. */
  numbered?: boolean;
  tone?: "light" | "dark";
  className?: string;
}) {
  const List = numbered ? "ol" : "ul";
  const dark = tone === "dark";

  return (
    <List className={`story-rows ${className}`} data-reveal-stagger>
      {items.map((item, i) => (
        <li key={item.href} data-reveal style={{ "--reveal-delay": `${i * 55}ms` } as React.CSSProperties}>
          <Link href={item.href} className="story-row group">
            <span aria-hidden className="story-row-rule" />

            <span className="story-row-inner">
              {numbered ? (
                <span
                  aria-hidden
                  className={`story-row-index tnum ${dark ? "text-lime" : "text-lime-deep"}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              ) : item.kicker ? (
                <span className={`eyebrow story-row-index ${dark ? "text-sage" : "text-graphite-soft"}`}>
                  {item.kicker}
                </span>
              ) : null}

              <span className="min-w-0">
                <span
                  className={`block type-title text-h6 transition-colors duration-300 ${
                    dark
                      ? "text-ink-invert group-hover:text-lime"
                      : "text-graphite group-hover:text-lime-deep"
                  }`}
                >
                  {item.title}
                </span>
                <span
                  className={`mt-2 block text-body leading-relaxed ${
                    dark ? "text-sage" : "text-graphite-soft"
                  }`}
                >
                  {item.body}
                </span>

                {item.more ? (
                  <span className="story-row-more">
                    {/* The clipped element carries no padding of its own. A
                        border box cannot be shorter than its own padding, so
                        spacing here would leave the collapsed row ten pixels
                        tall instead of nothing. The inset lives inside it. */}
                    <span>
                      <span
                        className={`block pt-2.5 text-small leading-relaxed ${
                          dark ? "text-sage/85" : "text-graphite-soft/85"
                        }`}
                      >
                        {item.more}
                      </span>
                    </span>
                  </span>
                ) : null}
              </span>

              <span aria-hidden className="story-row-arrow">
                <Arrow />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </List>
  );
}

function Arrow() {
  return (
    <svg
      width="15"
      height="12"
      viewBox="0 0 15 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M1 6h11M8.5 1.5 13 6l-4.5 4.5" />
    </svg>
  );
}
