import Link from "next/link";

/**
 * Row and directory listing, in a leaf module.
 *
 * These live apart from `primitives.tsx` and `sections/page.tsx` because the
 * filterable hub browser is a client component and imports them: pulling them
 * from either of those files would drag `next/image`, the photo backdrop and
 * the lead-capture modal into the client bundle of every hub page along with
 * them. Both original modules re-export from here, so existing imports are
 * unaffected.
 */

/**
 * The site's recurring "next page" affordance: a full-width row with a rule
 * above it. Used instead of cards so dense index pages stay readable.
 */
export function RowLink({
  href,
  label,
  blurb,
  meta,
}: {
  href: string;
  label: string;
  blurb?: string;
  meta?: string;
}) {
  return (
    <Link
      href={href}
      className="group -mx-4 grid gap-1 rounded-2xl px-4 py-4 transition-[background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-paper-warm/80 motion-safe:hover:translate-x-1 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8 sm:py-5 [.on-dark_&]:hover:bg-forest-700"
    >
      {/* Label and meta are stacked, not side by side. Sharing one narrow
          column meant a long meta overflowed and painted over the wrapped
          label; stacking also gives the label the full column, so titles like
          "Sales Follow-up Email" stop wrapping to three lines. */}
      <span className="min-w-0">
        <span className="type-title block text-h6 text-graphite transition-colors group-hover:text-lime-deep [.on-dark_&]:text-ink-invert [.on-dark_&]:group-hover:text-lime">
          {label}
        </span>
        {meta ? <span className="eyebrow mt-1.5 block">{meta}</span> : null}
      </span>
      {blurb ? (
        <span className="text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
          {blurb}
        </span>
      ) : null}
    </Link>
  );
}

export interface DirectoryItem {
  label: string;
  href: string;
  blurb?: string;
  meta?: string;
}

export interface DirectoryGroup {
  heading: string;
  id?: string;
  blurb?: string;
  items: DirectoryItem[];
}

/** Dense directory listing used by every hub page. */
export function Directory({ groups }: { groups: DirectoryGroup[] }) {
  return (
    <div className="grid gap-14">
      {groups.map((group) => (
        <div key={group.heading} id={group.id} data-reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-paper-line pb-5">
            <h2 className="text-d3">{group.heading}</h2>
            <span className="eyebrow">
              {group.items.length} {group.items.length === 1 ? "page" : "pages"}
            </span>
          </div>
          {group.blurb ? <p className="mt-5 max-w-[54ch] text-lead text-graphite-soft">{group.blurb}</p> : null}
          <div className="mt-6" data-reveal-stagger>
            {group.items.map((item) => (
              <RowLink key={item.href} href={item.href} label={item.label} blurb={item.blurb} meta={item.meta} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
