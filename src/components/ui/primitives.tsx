import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { PageImageDescriptor } from "@/lib/images";
// Moved to a leaf module so the client-side hub browser can import it without
// pulling this file's image and modal dependencies into the browser bundle.
export { RowLink } from "@/components/ui/rows";
import { PhotoBackdrop } from "@/components/ui/PageVisual";

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
  photo,
  photoLayout = "full",
  photoPosition,
  photoPriority = false,
}: {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  /** Skip the container, for sections that manage their own full-bleed layout. */
  bleed?: boolean;
  /**
   * Carry the section on a full-bleed photograph.
   *
   * The photograph is the section's ground, not a decorative band beneath it:
   * the same children render over the picture. That is the whole point of the
   * device — an image with unrelated cards sitting on top reads as a backdrop,
   * while an image carrying the argument reads as a composition.
   */
  photo?: PageImageDescriptor;
  /**
   * How the content meets the picture. Varying this is what stops a page with
   * two image sections reading as the same section twice.
   *
   *   full     content across the frame on an even wash
   *   start    content held left, the picture clear on the right
   *   end      content held right, the picture clear on the left
   *   panel    content inside a translucent panel, most of the picture visible
   *   inline   the picture on the section's own light ground, opening the
   *            content directly beneath it — the treatment that lets a page
   *            carry two photographs without two dark bands meeting
   */
  photoLayout?: "full" | "start" | "end" | "panel" | "inline";
  /** Focal point of the photograph, when the subject is off-centre. */
  photoPosition?: string;
  photoPriority?: boolean;
}) {
  if (photo && photoLayout === "inline") {
    // Light ground, photograph first. It shares the section with the content it
    // introduces rather than sitting between two sections as a band of its own.
    return (
      <section id={id} className={`${TONE_CLASS[tone]} py-section ${className}`}>
        <div className="container-page">
          <figure className="media-frame group mb-14 border border-sage/15" data-reveal="media" data-parallax>
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width || 2000}
                height={photo.height || 1125}
                priority={photoPriority}
                sizes="(max-width: 1024px) 100vw, 1400px"
                className="h-full w-full object-cover"
                {...(photoPosition ? { style: { objectPosition: photoPosition } } : {})}
              />
            </div>
            <figcaption className="flex items-center justify-between gap-4 border-t border-sage/15 bg-forest px-5 py-3 text-fine text-ink-invert">
              <span className="min-w-0">{photo.title}</span>
              {photo.photographer ? (
                <span className="shrink-0 text-sage">Photo: {photo.photographer}</span>
              ) : null}
            </figcaption>
          </figure>
          {children}
        </div>
      </section>
    );
  }

  if (photo) {
    const scrim =
      photoLayout === "panel"
        ? "panel"
        : photoLayout === "start" || photoLayout === "end"
          ? photoLayout
          : "content";
    return (
      <section id={id} className={`on-dark photo-band py-section text-sage ${className}`}>
        <PhotoBackdrop
          image={photo}
          priority={photoPriority}
          scrim={scrim}
          position={photoPosition}
        />
        {bleed ? (
          children
        ) : (
          <div className="container-page">
            {photoLayout === "panel" ? (
              <div className="photo-panel max-w-[62rem] p-8 md:p-12 lg:p-14">{children}</div>
            ) : photoLayout === "start" || photoLayout === "end" ? (
              <div className={`max-w-[64rem] ${photoLayout === "end" ? "ml-auto" : ""}`}>
                {children}
              </div>
            ) : (
              children
            )}
          </div>
        )}
      </section>
    );
  }

  return (
    <section id={id} className={`${TONE_CLASS[tone]} py-section ${className}`}>
      {bleed ? children : <div className="container-page">{children}</div>}
    </section>
  );
}

export function Eyebrow({
  children,
  className = "",
  as: Tag = "p",
  plain = false,
  reveal = false,
}: {
  children: ReactNode;
  className?: string;
  /**
   * Promote to a heading where the eyebrow labels a content region rather than
   * captioning something. Styling is identical either way — this only affects
   * the document outline, which is what screen-reader users navigate by.
   */
  as?: "p" | "h2" | "h3";
  /**
   * Drop back to the flat lettering. For eyebrows that label a field or a
   * column rather than opening a section, where a pill is noise.
   */
  plain?: boolean;
  /**
   * Join the surrounding entrance rather than painting immediately. Only the
   * heroes pass it: elsewhere the eyebrow sits inside a block that is already
   * revealed as a unit, and marking it again would animate it twice.
   */
  reveal?: boolean;
}) {
  return (
    <Tag
      className={`${plain ? "eyebrow" : "eyebrow-pill"} ${className}`}
      {...(reveal ? { "data-reveal": "" } : {})}
    >
      {children}
    </Tag>
  );
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
    <div className={`max-w-[48rem] ${className}`} data-reveal>
      {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
      <Tag className={sizeClass}>{title}</Tag>
      {lead ? (
        <p className="mt-6 text-lead text-graphite-soft [.on-dark_&]:text-sage">{lead}</p>
      ) : null}
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
/** "sm" is the header/toolbar size: it matches the 44px icon buttons it sits beside. */
export type ButtonSize = "md" | "sm";

/* `max-w-full` and a centred label are what stop a long action — "How to
   write case studies without data" — running past the edge of a 320px
   screen. The label wraps inside the pill rather than the pill growing
   wider than the viewport it sits in. */
const BUTTON_BASE =
  "type-button inline-flex max-w-full items-center justify-center gap-2 text-balance rounded-full text-center transition-[background-color,color,border-color,transform,box-shadow] duration-300 ease-[var(--ease-out-expo)] active:translate-y-px motion-safe:hover:-translate-y-0.5";

const BUTTON_SIZE: Record<ButtonSize, string> = {
  md: "min-h-12 px-7 py-3.5",
  /* No `whitespace-nowrap` here: the header is the one place that needs it and
     it opts in with its own class. Forcing it globally is what made a long
     label overflow instead of wrapping. */
  sm: "min-h-11 px-5 py-2.5",
};

const BUTTON_VARIANT: Record<ButtonVariant, string> = {
  primary:
    "bg-lime text-on-accent shadow-[0_8px_22px_-8px_rgb(111_159_26/0.65)] hover:bg-lime-bright hover:shadow-[0_16px_34px_-10px_rgb(111_159_26/0.6)]",
  /**
   * The section-action button, and the one that most often lands on a
   * photograph. A 22% hairline vanishes over a busy frame, so on a dark ground
   * the border is carried at 35% over a faint wash of its own — enough to read
   * as a button against any part of a picture without turning into a filled
   * one and competing with the page's actual primary action.
   */
  secondary:
    "border border-graphite/25 bg-transparent text-graphite hover:border-graphite/60 hover:bg-graphite/[0.04] [.on-dark_&]:border-ink-invert/35 [.on-dark_&]:bg-ink-invert/[0.07] [.on-dark_&]:text-ink-invert [.on-dark_&]:hover:border-lime [.on-dark_&]:hover:bg-lime/15 [.on-dark_&]:hover:text-lime",
  ghost: "px-0 text-graphite underline decoration-lime decoration-2 underline-offset-[6px] hover:decoration-lime-deep [.on-dark_&]:text-ink-invert",
};

export function buttonClass(variant: ButtonVariant = "primary", className = "", size: ButtonSize = "md") {
  return `${BUTTON_BASE} ${BUTTON_SIZE[size]} ${BUTTON_VARIANT[variant]} ${className}`;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className, size)}>
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

/* ------------------------------------------------------------------ */
/* FAQ — native disclosure, no JavaScript                              */
/* ------------------------------------------------------------------ */

export function FaqList({ faqs, className = "" }: { faqs: { q: string; a: string }[]; className?: string }) {
  if (faqs.length === 0) return null;
  return (
    <div className={className} data-faq>
      {faqs.map((faq) => (
        <details
          key={faq.q}
          className="group surface-card mb-3 px-6 py-1 last:mb-0 md:px-7"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 type-title text-h6 transition-colors hover:text-lime-deep [&::-webkit-details-marker]:hidden [.on-dark_&]:hover:text-lime">
            {faq.q}
            <span
              aria-hidden
              className="relative mt-2 h-3 w-3 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-px before:w-3 before:-translate-y-1/2 before:bg-current after:absolute after:left-1/2 after:top-0 after:h-3 after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-300 group-open:after:scale-y-0"
            />
          </summary>
          <p className="max-w-[46rem] pb-6 text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
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

/**
 * Numbered process rail. Used where order genuinely matters.
 *
 * The steps are laid along a hairline with the numerals sitting on it, rather
 * than boxed. Two reasons. A sequence carried on a line reads as one process;
 * the same five steps as five cards read as five unrelated features. And the
 * column count follows the step count, so a five-step process is a row of five
 * rather than a row of four with one card orphaned beneath it.
 *
 * Above five the row would be too narrow to read, so it splits into two even
 * rows — six becomes 3 × 2 rather than 4 + 2.
 */
export function ProcessRail({ steps }: { steps: { title: string; body: string }[] }) {
  const columns = steps.length <= 5 ? Math.max(steps.length, 1) : Math.ceil(steps.length / 2);

  return (
    <ol
      className="process-rail mt-14"
      style={{ "--rail-cols": String(columns) } as React.CSSProperties}
      data-reveal-stagger
    >
      {steps.map((step, i) => (
        <li key={step.title} data-reveal>
          <span aria-hidden className="process-mark">
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-h6 tracking-[-0.02em]">{step.title}</h3>
          <p className="mt-3 text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

/**
 * The workhorse for "label + explanation" content, as a ruled index.
 *
 * This is the most-used content component on the site, which is why it is not
 * a card grid: whatever shape it takes is the shape a reader remembers the
 * whole site having.
 *
 * `columns` is the count at the *small* breakpoint rather than a fixed track
 * count: 2 goes two-up from `sm`, 1 stays single-column until `lg`. Items with
 * long bodies pass 1 so they get the full measure on a phone and a tablet, and
 * still pair up on a desktop rather than leaving half the row empty.
 */
export function DefinitionList({
  items,
  columns = 2,
}: {
  items: { label: string; body: string }[];
  columns?: 1 | 2;
}) {
  return (
    <dl
      className={`index-list mt-12 ${columns === 2 ? "sm:grid-cols-2" : "lg:grid-cols-2"}`}
      data-reveal-stagger
    >
      {items.map((item) => (
        <div key={item.label} data-reveal>
          <dt className="type-title text-h6">{item.label}</dt>
          <dd className="mt-3 max-w-[52ch] text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
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
    <ul className={`space-y-4 ${className}`} data-reveal-stagger>
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-7 text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage"
          data-reveal
        >
          <span
            aria-hidden
            className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-lime-deep [.on-dark_&]:bg-lime"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

/** A pull statement. Sparingly used — it is the loudest device in the system. */
export function PullQuote({ children, attribution }: { children: ReactNode; attribution?: string }) {
  return (
    <figure className="relative max-w-[40rem] pl-7 md:pl-9" data-reveal>
      <span
        aria-hidden
        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-lime [.on-dark_&]:bg-lime"
      />
      <blockquote className="editorial text-d3">{children}</blockquote>
      {attribution ? <figcaption className="eyebrow mt-6">{attribution}</figcaption> : null}
    </figure>
  );
}
