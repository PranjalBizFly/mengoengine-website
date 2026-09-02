import Link from "next/link";
import { Section } from "@/components/ui/primitives";

/**
 * Sequential navigation within a set.
 *
 * Distinct from the related rail, which is a graph: this is the reader's place
 * in an ordered run — the next term alphabetically, the next article by date,
 * the next capability inside the same engine. On a site of this size that is
 * the difference between a page that ends and a page that continues.
 *
 * `within` names the sequence out loud, because "next" is meaningless until the
 * reader knows next in what.
 */

export interface PrevNextLink {
  label: string;
  href: string;
}

export function PrevNext({
  previous,
  next,
  within,
  tone = "paper",
}: {
  previous?: PrevNextLink;
  next?: PrevNextLink;
  /** The sequence these sit in, e.g. "Content Studio", "A–Z". */
  within: string;
  tone?: "paper" | "warm" | "forest";
}) {
  if (!previous && !next) return null;

  // Most pages in a run have both ends; the first and last have one. A
  // two-column grid holding a single card left half a section empty and the
  // card stranded away from the label naming the sequence, which is a lot of
  // page spent saying "continue". A run of one spans the width instead, with
  // the direction at one end and the destination at the other.
  const both = Boolean(previous && next);

  return (
    <Section tone={tone}>
      <nav aria-label={`Previous and next in ${within}`}>
        <p className="eyebrow mb-5">In {within}</p>
        <div className={`rule-t ${both ? "grid sm:grid-cols-2" : ""}`}>
          {previous ? <Step direction="previous" link={previous} spread={!both} /> : null}
          {next ? <Step direction="next" link={next} spread={!both} divided={both} /> : null}
        </div>
      </nav>
    </Section>
  );
}

function Step({
  direction,
  link,
  spread,
  divided = false,
}: {
  direction: "previous" | "next";
  link: PrevNextLink;
  /** The only step in the run: lay it across the full measure. */
  spread: boolean;
  /** A hairline separating it from the step beside it. */
  divided?: boolean;
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={link.href}
      rel={isNext ? "next" : "prev"}
      className={`group -mx-4 flex min-h-24 rounded-2xl px-4 py-7 transition-[background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-paper-warm/80 [.on-dark_&]:hover:bg-forest-700 ${
        spread
          ? "flex-wrap items-baseline justify-between gap-x-8 gap-y-2"
          : `flex-col justify-center gap-1.5 ${isNext ? "sm:items-end sm:text-right" : ""}`
      } ${divided ? "sm:border-l sm:border-paper-line sm:pl-9" : ""} ${
        isNext ? "motion-safe:hover:translate-x-1" : "motion-safe:hover:-translate-x-1"
      }`}
      data-reveal
    >
      <span className="eyebrow flex items-center gap-2">
        {!isNext ? <Chevron back /> : null}
        {isNext ? "Next" : "Previous"}
        {isNext ? <Chevron /> : null}
      </span>
      <span className="type-title text-h7 text-graphite transition-colors group-hover:text-lime-deep [.on-dark_&]:text-ink-invert [.on-dark_&]:group-hover:text-lime">
        {link.label}
      </span>
    </Link>
  );
}

function Chevron({ back = false }: { back?: boolean }) {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 13 11"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      className={`transition-transform duration-300 ease-[var(--ease-out-expo)] ${
        back
          ? "motion-safe:group-hover:-translate-x-1 rotate-180"
          : "motion-safe:group-hover:translate-x-1"
      }`}
    >
      <path d="M1 5.5h10M7.5 1.5l4 4-4 4" />
    </svg>
  );
}
