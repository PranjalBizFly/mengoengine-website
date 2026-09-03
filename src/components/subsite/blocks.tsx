import Link from "next/link";
import type { ReactNode } from "react";
import {
  ButtonLink,
  DefinitionList,
  FaqList,
  Heading,
  MarkerList,
  ProcessRail,
  PullQuote,
  Section,
} from "@/components/ui/primitives";
import type { SiteBlock, SiteKey, SiteLink } from "@/lib/subdomains";
import { sitePath } from "@/lib/subdomains";

/**
 * The block renderer shared by all twelve sites.
 *
 * Two jobs. It maps each typed block onto the design system's existing devices,
 * so a definition list on the docs site and a definition list on the careers
 * site are the same object rather than two people's idea of one. And it assigns
 * section tones, which is what gives a page built from data the same alternating
 * rhythm a hand-composed page gets — without every content file having to hold
 * an opinion about backgrounds.
 */

/* ------------------------------------------------------------------ */
/* Links                                                               */
/* ------------------------------------------------------------------ */

/** Resolve an in-site path to the internal route; leave absolute URLs alone. */
export function hrefFor(site: SiteKey, link: SiteLink): string {
  if (link.external || /^https?:\/\//.test(link.href) || link.href.startsWith("/")) return link.href;
  return sitePath(site, link.href);
}

function BlockLink({ site, link, className = "" }: { site: SiteKey; link: SiteLink; className?: string }) {
  const href = hrefFor(site, link);
  const external = link.external || /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      {...(external ? { rel: "noopener" } : {})}
      className={`group -mx-4 grid gap-1 rounded-2xl px-4 py-4 transition-[background-color,transform] duration-300 ease-[var(--ease-out-expo)] hover:bg-paper-warm/80 motion-safe:hover:translate-x-1 sm:grid-cols-[minmax(0,18rem)_1fr] sm:gap-8 [.on-dark_&]:hover:bg-forest-700 ${className}`}
    >
      <span className="type-title block text-h6 text-graphite transition-colors group-hover:text-lime-deep [.on-dark_&]:text-ink-invert [.on-dark_&]:group-hover:text-lime">
        {link.label}
      </span>
      {link.blurb ? (
        <span className="text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">{link.blurb}</span>
      ) : null}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Devices that do not already exist in the design system              */
/* ------------------------------------------------------------------ */

/**
 * A genuinely tabular block.
 *
 * Scrolls inside its own container rather than widening the page — a
 * requirements matrix at 320px has to remain a table, and the alternative
 * (collapsing every row into a stack) loses the column comparison that is the
 * entire reason the material is a table.
 */
function DataTable({
  columns,
  rows,
  caption,
}: {
  columns: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="mt-10 overflow-x-auto rounded-2xl border border-paper-line [.on-dark_&]:border-line-invert">
      <table className="w-full min-w-[42rem] border-collapse text-left">
        {caption ? <caption className="eyebrow px-6 pt-5 text-left">{caption}</caption> : null}
        <thead>
          <tr className="border-b border-paper-line [.on-dark_&]:border-line-invert">
            {columns.map((column) => (
              <th
                key={column}
                scope="col"
                className="eyebrow px-6 py-4 align-bottom text-graphite-soft [.on-dark_&]:text-sage"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row[0]}
              className="border-b border-paper-line last:border-b-0 [.on-dark_&]:border-line-invert"
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`px-6 py-5 align-top text-body leading-relaxed ${
                    i === 0
                      ? "type-title text-h8 text-graphite [.on-dark_&]:text-ink-invert"
                      : "text-graphite-soft [.on-dark_&]:text-sage"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Sequenced entries with an elapsed or dated marker in their own column. */
function Timeline({
  entries,
  level,
}: {
  entries: { when: string; title: string; body: string }[];
  /** h3 under a block heading, h2 when the block has none. */
  level: "h2" | "h3";
}) {
  const Title = level;
  return (
    <ol className="mt-12" data-reveal-stagger>
      {entries.map((entry) => (
        <li
          key={entry.title}
          className="rule-t grid gap-2 py-8 lg:grid-cols-[minmax(0,12rem)_minmax(0,44rem)] lg:gap-14"
          data-reveal
        >
          <p className="eyebrow lg:pt-1">{entry.when}</p>
          <div className="min-w-0">
            <Title className="type-title text-h6">{entry.title}</Title>
            <p className="mt-2.5 text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
              {entry.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * The operational board.
 *
 * Every service is listed with what it covers and an explicitly indeterminate
 * indicator. An indicator that defaulted to green would be a claim about
 * uptime, and this application has no monitoring behind it to make that claim
 * with. Neutral is the only honest resting state, and it is what a real
 * provider's payload will replace.
 */
function StatusBoard({
  services,
  level,
}: {
  services: { name: string; blurb: string }[];
  level: "h2" | "h3";
}) {
  const Title = level;
  return (
    <ul className="mt-12" data-reveal-stagger>
      {services.map((service) => (
        <li
          key={service.name}
          className="rule-t flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-6"
          data-reveal
        >
          <div className="min-w-0 max-w-[42rem]">
            <Title className="type-title text-h7">{service.name}</Title>
            <p className="mt-1.5 text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
              {service.blurb}
            </p>
          </div>
          <p className="flex items-center gap-2.5 text-fine text-graphite-soft [.on-dark_&]:text-sage">
            <span
              aria-hidden
              className="inline-block h-2 w-2 rounded-full border border-graphite-soft/50 [.on-dark_&]:border-sage/60"
            />
            Awaiting monitoring
          </p>
        </li>
      ))}
    </ul>
  );
}

/**
 * The approved-content marker.
 *
 * Several destinations in this ecosystem are real and their factual content is
 * not ours to write — commission rates, financial statements, certifications,
 * open roles, incident history. There are three ways to handle that and only
 * one of them is acceptable. Inventing the numbers is a lie. Deleting the
 * section leaves a reader who came for exactly that information with no
 * explanation. So the section renders, states plainly what belongs in it and
 * what has to be supplied before it can be filled, and offers the reader the
 * path that does exist today.
 *
 * It is styled to read as a considered part of the page rather than as a build
 * error, because it is one — but it is deliberately distinct from ordinary
 * content, so nobody mistakes it for a claim.
 */
function Pending({
  site,
  heading,
  body,
  needs,
  action,
}: {
  site: SiteKey;
  heading: string;
  body: string;
  needs: string[];
  action?: SiteLink;
}) {
  return (
    <div
      className="mt-12 rounded-2xl border border-dashed border-paper-line bg-paper-warm/50 p-7 md:p-9 [.on-dark_&]:border-line-invert [.on-dark_&]:bg-white/[0.03]"
      data-reveal
    >
      <p className="eyebrow">Awaiting approved content</p>
      {/* This is the section's own heading, so it is a level two. Rendering it
          as h3 skipped a level on any page that opens with one of these. */}
      <h2 className="mt-4 text-d4">{heading}</h2>
      <p className="mt-4 max-w-[58ch] text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
        {body}
      </p>
      <p className="eyebrow mt-8">Requires</p>
      <ul className="mt-3 grid gap-2">
        {needs.map((need) => (
          <li
            key={need}
            className="relative pl-6 text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage"
          >
            <span
              aria-hidden
              className="absolute left-0 top-[0.62em] h-1.5 w-1.5 rounded-full bg-lime-deep [.on-dark_&]:bg-lime"
            />
            {need}
          </li>
        ))}
      </ul>
      {action ? (
        <div className="mt-8">
          <ButtonLink href={hrefFor(site, action)} variant="secondary" size="sm">
            {action.label}
          </ButtonLink>
        </div>
      ) : null}
    </div>
  );
}

function Callout({ site, heading, body, action }: { site: SiteKey; heading: string; body: string; action?: SiteLink }) {
  return (
    <aside
      className="mt-12 border-l-2 border-lime pl-6 md:pl-8 [.on-dark_&]:border-lime"
      data-reveal
    >
      <h2 className="type-title text-h6">{heading}</h2>
      <p className="mt-3 max-w-[58ch] text-body leading-relaxed text-graphite-soft [.on-dark_&]:text-sage">
        {body}
      </p>
      {action ? (
        <div className="mt-6">
          <ButtonLink href={hrefFor(site, action)} variant="secondary" size="sm">
            {action.label}
          </ButtonLink>
        </div>
      ) : null}
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* Tone rhythm                                                         */
/* ------------------------------------------------------------------ */

type Tone = "paper" | "warm" | "forest";

/**
 * Assign each block a ground.
 *
 * A page rendered from data will alternate paper and warm as it goes, which is
 * the cadence the main site's hand-composed pages already keep. Two exceptions
 * carry meaning rather than rhythm: a statement always lands on the dark ground,
 * because that is the one device in the system loud enough to need it, and a
 * block never repeats the tone of the block above it.
 */
function toneFor(block: SiteBlock, index: number): Tone {
  if (block.type === "statement") return "forest";
  return index % 2 === 0 ? "paper" : "warm";
}

/* ------------------------------------------------------------------ */
/* Renderer                                                            */
/* ------------------------------------------------------------------ */

export function SiteBlocks({
  site,
  blocks,
  inline = false,
}: {
  site: SiteKey;
  blocks: SiteBlock[];
  /**
   * Render inside an existing column rather than as full-bleed sections.
   *
   * The documentation layout is two columns, and a full-bleed alternating
   * ground inside one of them would paint a stripe down the article. In that
   * context the blocks keep their spacing and lose their backgrounds, with a
   * rule doing the separating instead.
   */
  inline?: boolean;
}) {
  if (inline) {
    return (
      <div className="max-w-[52rem]">
        {blocks.map((block, i) => (
          <div key={i} className={i === 0 ? "" : "rule-t mt-14 pt-14"}>
            <BlockBody site={site} block={block} />
          </div>
        ))}
      </div>
    );
  }

  let toneIndex = 0;
  return (
    <>
      {blocks.map((block, i) => {
        const tone = toneFor(block, toneIndex);
        if (block.type !== "statement") toneIndex += 1;
        return (
          <Section key={i} tone={tone}>
            <BlockBody site={site} block={block} />
          </Section>
        );
      })}
    </>
  );
}

function BlockBody({ site, block }: { site: SiteKey; block: SiteBlock }): ReactNode {
  switch (block.type) {
    case "prose":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <div className={`${block.heading ? "mt-10" : ""} max-w-[46rem]`} data-reveal-stagger>
            {block.body.map((paragraph, i) => (
              <p
                key={i}
                className="mt-6 text-prose text-graphite-soft first:mt-0 [.on-dark_&]:text-sage"
                data-reveal
              >
                {paragraph}
              </p>
            ))}
          </div>
        </>
      );

    case "editorial":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <div className={block.heading ? "mt-14" : ""} data-reveal-stagger>
            {block.sections.map((section) => {
              const SectionHeading = block.heading ? "h3" : "h2";
              return (
              <div
                key={section.heading}
                className="rule-t grid gap-4 py-10 lg:grid-cols-[minmax(0,23rem)_minmax(0,44rem)] lg:gap-16"
                data-reveal
              >
                <SectionHeading className="text-d4 text-balance lg:sticky lg:top-[calc(var(--header-h)+3rem)] lg:self-start">
                  {section.heading}
                </SectionHeading>
                <p className="min-w-0 text-prose text-graphite-soft [.on-dark_&]:text-sage">{section.body}</p>
              </div>
              );
            })}
          </div>
        </>
      );

    case "definitions":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <DefinitionList items={block.items} columns={block.columns ?? 2} />
        </>
      );

    case "steps":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <ProcessRail steps={block.steps} />
        </>
      );

    case "checklist":
      return (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>{block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}</div>
          <MarkerList items={block.items} className="min-w-0" />
        </div>
      );

    case "table":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <DataTable columns={block.columns} rows={block.rows} caption={block.caption} />
        </>
      );

    case "faq":
      return (
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div>
            <Heading title={block.heading ?? "Questions"} lead={block.intro} />
          </div>
          <FaqList faqs={block.items} />
        </div>
      );

    case "timeline":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <Timeline entries={block.entries} level={block.heading ? "h3" : "h2"} />
        </>
      );

    case "index":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <div className={block.heading ? "mt-10" : ""} data-reveal-stagger>
            {block.links.map((link) => (
              <div key={link.href} className="rule-t" data-reveal>
                <BlockLink site={site} link={link} />
              </div>
            ))}
          </div>
        </>
      );

    case "statement":
      return <PullQuote attribution={block.attribution}>{block.text}</PullQuote>;

    case "callout":
      return <Callout site={site} heading={block.heading} body={block.body} action={block.action} />;

    case "statusBoard":
      return (
        <>
          {block.heading ? <Heading title={block.heading} lead={block.intro} /> : null}
          <StatusBoard services={block.services} level={block.heading ? "h3" : "h2"} />
        </>
      );

    case "pending":
      return (
        <Pending
          site={site}
          heading={block.heading}
          body={block.body}
          needs={block.needs}
          action={block.action}
        />
      );
  }
}
