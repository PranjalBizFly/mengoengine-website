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

  return (
    <Section tone={tone}>
      <nav aria-label={`Previous and next in ${within}`}>
        <p className="eyebrow mb-6">In {within}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {previous ? (
            <Step direction="previous" link={previous} />
          ) : (
            <span className="hidden sm:block" aria-hidden />
          )}
          {next ? <Step direction="next" link={next} /> : null}
        </div>
      </nav>
    </Section>
  );
}

function Step({ direction, link }: { direction: "previous" | "next"; link: PrevNextLink }) {
  const isNext = direction === "next";
  return (
    <Link
      href={link.href}
      rel={isNext ? "next" : "prev"}
      className={`group surface-card flex min-h-24 flex-col justify-center gap-1.5 p-6 transition-[border-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:border-lime-deep/40 md:p-7 ${
        isNext ? "sm:items-end sm:text-right" : ""
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
