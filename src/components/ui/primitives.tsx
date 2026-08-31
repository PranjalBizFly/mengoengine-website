import Link from "next/link";
import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

export function JsonLd({ data }: { data: unknown | (unknown | null)[] }) {
  const list = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (list.length === 0) return null;
  return (
    <>
      {list.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schema objects are built in-repo from typed data; there is no user input here.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

type Tone = "paper" | "warm" | "forest";

const TONE_CLASS: Record<Tone, string> = {
  paper: "bg-paper text-graphite",
  warm: "bg-paper-warm text-graphite",
  forest: "on-dark bg-forest text-sage",
};

/**
 * The one section wrapper. Vertical rhythm comes from a single token so a page
 * built from ten sections has one consistent cadence rather than ten opinions.
 */
export function Section({
  children,
  tone = "paper",
  id,
  className = "",
  bleed = false,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  /** Skip the container, for sections that manage their own full-bleed layout. */
  bleed?: boolean;
}) {
  return (
    <section id={id} className={`${TONE_CLASS[tone]} py-section ${className}`}>
      {bleed ? children : <div className="container-page">{children}</div>}
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`}>{children}</p>;
}

/**
 * Section heading with an optional lead. The `align` prop exists because an
 * editorial page needs both left-aligned working headings and the occasional
 * wide statement, and inventing a new heading component for each is how design
 * systems rot.
 */
export function Heading({
  eyebrow,
  title,
  lead,
  size = "d3",
  className = "",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  size?: "d1" | "d2" | "d3" | "d4";
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const sizeClass = {
    d1: "text-d1",
    d2: "text-d2",
    d3: "text-d3",
    d4: "text-d4",
  }[size];

  return (
    <div className={`max-w-[46rem] ${className}`} data-reveal>
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <Tag className={sizeClass}>{title}</Tag>
      {lead ? <p className="mt-5 text-lead text-graphite-soft [.on-dark_&]:text-sage">{lead}</p> : null}
    </div>
  );
}

/** Applies the staggered reveal delay to a list of children. */
export function Stagger({
  children,
  step = 70,
  className = "",
}: {
  children: ReactNode[];
  step?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <div key={i} data-reveal style={{ "--reveal-delay": `${i * step}ms` } as React.CSSProperties}>
          {child}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Actions                                                             */
/* ------------------------------------------------------------------ */

type ButtonVariant = "primary" | "secondary" | "ghost";

const BUTTON_BASE =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-[0.9375rem] font-semibold transition-[background-color,color,border-color,transform] duration-200 ease-[var(--ease-out-expo)] active:translate-y-px";

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  primary: "bg-lime text-forest hover:bg-lime-bright",
  secondary:
    "border border-forest/20 bg-transparent text-forest hover:border-forest/60 [.on-dark_&]:border-sage/35 [.on-dark_&]:text-paper [.on-dark_&]:hover:border-lime [.on-dark_&]:hover:text-lime",
  ghost: "px-0 text-forest underline decoration-lime decoration-2 underline-offset-[6px] hover:decoration-lime-deep [.on-dark_&]:text-paper",
};

export function buttonClass(variant: ButtonVariant = "primary", className = "") {
  return `${BUTTON_BASE} ${BUTTON_VARIANT[variant]} ${className}`;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}

/** Inline text link with the house underline treatment. */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-block py-1 underline decoration-lime-deep decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-lime-deep [.on-dark_&]:decoration-lime [.on-dark_&]:hover:text-lime ${className}`}
    >
      {children}
    </Link>
  );
}

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
      className="group grid gap-1 rule-t py-4 transition-colors hover:bg-paper-warm/70 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-6 sm:py-5 [.on-dark_&]:hover:bg-forest-700"
    >
      <span className="flex items-baseline gap-3">
        <span className="font-display text-[1.0625rem] font-semibold tracking-[-0.015em] text-graphite transition-colors group-hover:text-lime-deep [.on-dark_&]:text-paper [.on-dark_&]:group-hover:text-lime">
          {label}
        </span>
        {meta ? <span className="eyebrow shrink-0">{meta}</span> : null}
      </span>
      {blurb ? (
        <span className="text-[0.9375rem] leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
          {blurb}
        </span>
      ) : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ — native disclosure, no JavaScript                              */
/* ------------------------------------------------------------------ */

export function FaqList({ faqs, className = "" }: { faqs: { q: string; a: string }[]; className?: string }) {
  if (faqs.length === 0) return null;
  return (
    <div className={className}>
      {faqs.map((faq) => (
        <details key={faq.q} className="group rule-t">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 font-display text-[1.0625rem] font-semibold tracking-[-0.015em] transition-colors hover:text-lime-deep [&::-webkit-details-marker]:hidden [.on-dark_&]:hover:text-lime">
            {faq.q}
            <span
              aria-hidden
              className="relative mt-2 h-3 w-3 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-3 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-[46rem] pb-6 text-[0.9375rem] leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
            {faq.a}
          </p>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Editorial devices                                                   */
/* ------------------------------------------------------------------ */

/** Numbered process rail. Used where order genuinely matters. */
export function ProcessRail({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="mt-12">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="rule-t grid gap-2 py-7 sm:grid-cols-[4rem_minmax(0,22rem)_1fr] sm:gap-8"
          data-reveal
          style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
        >
          <span className="tnum font-display text-[0.8125rem] font-semibold text-lime-deep [.on-dark_&]:text-lime">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-[1.125rem] tracking-[-0.02em]">{step.title}</h3>
          <p className="text-[0.9375rem] leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">{step.body}</p>
        </li>
      ))}
    </ol>
  );
}

/** Two-column definition list. The workhorse for "label + explanation" content. */
export function DefinitionList({
  items,
  columns = 2,
}: {
  items: { label: string; body: string }[];
  columns?: 1 | 2;
}) {
  return (
    <dl className={`mt-10 grid gap-x-12 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((item, i) => (
        <div
          key={item.label}
          className="rule-t py-6"
          data-reveal
          style={{ "--reveal-delay": `${i * 50}ms` } as React.CSSProperties}
        >
          <dt className="font-display text-[1.0625rem] font-semibold tracking-[-0.015em]">{item.label}</dt>
          <dd className="mt-2 text-[0.9375rem] leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
            {item.body}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** A plain, tight list used for factual enumerations (outputs, inputs, realities). */
export function MarkerList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="relative pl-6 text-[0.9375rem] leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
          <span aria-hidden className="absolute left-0 top-[0.7em] h-px w-3.5 bg-lime-deep [.on-dark_&]:bg-lime" />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** A pull statement. Sparingly used — it is the loudest device in the system. */
export function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <figure className="max-w-[38rem]" data-reveal>
      <blockquote className="editorial text-d3">{children}</blockquote>
      {attribution ? <figcaption className="eyebrow mt-5">{attribution}</figcaption> : null}
    </figure>
  );
}
