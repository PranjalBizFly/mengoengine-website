import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Logo, Mark } from "@/components/brand/Logo";
import {
  buttonClass,
  DefinitionList,
  Eyebrow,
  FaqList,
  MarkerList,
  ProcessRail,
  PullQuote,
  RowLink,
  Section,
  TextLink,
} from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { routes } from "@/lib/site";

/**
 * The living design system.
 *
 * Every swatch, type specimen and component on this page is rendered by the
 * same tokens and components the site uses, so it cannot drift from reality.
 * Internal reference: noindex, and deliberately absent from the sitemap and
 * the navigation.
 */

const PATH = "/design-system/";

export const metadata: Metadata = pageMetadata({
  title: "Design system",
  description:
    "The MengoEngine design system: brand assets, colour tokens, the type scale and its roles, and the component library — rendered live from the tokens the site uses.",
  path: PATH,
  ogKicker: "Internal",
  noindex: true,
});

/* ------------------------------------------------------------------ */
/* Specimen helpers                                                    */
/* ------------------------------------------------------------------ */

function Swatch({ token, hex, name, note, dark }: { token: string; hex: string; name: string; note: string; dark?: boolean }) {
  return (
    <div className="rule-t py-4">
      <div
        className="mb-3 h-16 w-full rounded-md"
        style={{ background: hex, border: dark ? "1px solid var(--color-paper-line)" : "none" }}
      />
      <p className="type-title text-h8">{name}</p>
      <p className="mt-1 text-fine text-graphite-soft">{note}</p>
      <p className="tnum mt-2 text-fine text-graphite-soft">
        <code>{token}</code> · {hex.toUpperCase()}
      </p>
    </div>
  );
}

function Spec({
  token,
  size,
  role,
  sample,
  className,
}: {
  token: string;
  size: string;
  role: string;
  sample: string;
  className: string;
}) {
  return (
    <div className="rule-t grid gap-3 py-6 md:grid-cols-[13rem_1fr] md:gap-8">
      <div>
        <p className="tnum text-fine text-graphite-soft">
          <code>{token}</code>
        </p>
        <p className="tnum mt-1 text-fine text-graphite-soft">{size}</p>
        <p className="mt-2 text-fine text-graphite-soft">{role}</p>
      </div>
      <p className={`${className} min-w-0 text-graphite`}>{sample}</p>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <>
      <div className="bg-paper">
        <Breadcrumbs crumbs={[{ label: "Design system", href: PATH }]} />
        <div className="container-page pb-14 pt-10 md:pb-20 md:pt-14">
          <Eyebrow className="mb-5">Internal reference · not indexed</Eyebrow>
          <h1 className="max-w-[18ch] text-d2">The MengoEngine design system</h1>
          <p className="mt-6 max-w-[52ch] text-lead text-graphite-soft">
            Everything below is rendered by the same tokens and components the site uses. If a value changes in{" "}
            <code>globals.css</code>, this page changes with it — which is the only way a design system stays true.
          </p>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      <Section tone="warm" id="brand">
        <Eyebrow>01 · Brand</Eyebrow>
        <h2 className="mt-4 text-d3">The mark</h2>
        <p className="mt-5 max-w-[52ch] text-body text-graphite-soft">
          The lime pinwheel is the official MengoEngine mark, used exactly as supplied. It is legible on both the paper
          and forest surfaces, so there is one mark rather than a light and dark variant. Only the wordmark changes
          colour.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-paper p-8">
            <Logo href={null} />
            <p className="mt-6 text-fine text-graphite-soft">Lockup on paper</p>
          </div>
          <div className="on-dark rounded-lg bg-forest p-8">
            <Logo href={null} tone="light" />
            <p className="mt-6 text-fine text-sage">Lockup on forest</p>
          </div>
          <div className="rounded-lg bg-paper p-8">
            <Mark size={34} />
            <p className="mt-6 text-fine text-graphite-soft">Mark alone, 34px</p>
          </div>
          <div className="on-dark rounded-lg bg-forest p-8">
            <Mark size={34} />
            <p className="mt-6 text-fine text-sage">Mark alone on forest</p>
          </div>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section tone="paper" id="colour">
        <Eyebrow>02 · Colour</Eyebrow>
        <h2 className="mt-4 text-d3">Two surfaces, one accent</h2>
        <p className="mt-5 max-w-[52ch] text-body text-graphite-soft">
          Lime is the only accent, and it does one job: marking the next action. Everything structural is carried by
          the forest and paper families. Signal colours appear for state only — never as decoration.
        </p>

        <h3 className="mt-12 type-title text-h6">Brand</h3>
        <div className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          <Swatch token="--color-lime" hex="#a3e625" name="Lime" note="Actions and accents on dark surfaces" />
          <Swatch token="--color-lime-deep" hex="#6f9f1a" name="Lime deep" note="Accent on paper, where full lime fails contrast" />
          <Swatch token="--color-forest" hex="#022018" name="Forest" note="The primary dark surface" />
          <Swatch token="--color-sage" hex="#8fa396" name="Sage" note="Body copy on forest" />
        </div>

        <h3 className="mt-12 type-title text-h6">Paper</h3>
        <div className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          <Swatch token="--color-paper" hex="#f6f7f3" name="Paper" note="Default page ground" dark />
          <Swatch token="--color-paper-warm" hex="#eef0e8" name="Paper warm" note="Alternating section ground" dark />
          <Swatch token="--color-graphite" hex="#14201a" name="Graphite" note="Headings and primary text" />
          <Swatch token="--color-graphite-soft" hex="#45524b" name="Graphite soft" note="Body copy on paper" />
        </div>

        <div className="mt-12 max-w-[52rem] rule-t pt-6">
          <Eyebrow className="mb-3">Contrast</Eyebrow>
          <p className="text-body text-graphite-soft">
            The brand lime on paper measures roughly 1.6:1 and fails text contrast outright, which is why{" "}
            <code>--color-lime-deep</code> exists. Lime is used at full strength only on forest, where it clears AA
            comfortably. Body copy pairs graphite-soft on paper and sage on forest, both above 7:1.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section tone="warm" id="typography">
        <Eyebrow>03 · Typography</Eyebrow>
        <h2 className="mt-4 text-d3">Three families, each with a job</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rule-t pt-5">
            <p className="font-display text-h5 font-semibold tracking-[-0.03em]">Sora</p>
            <p className="mt-2 text-fine text-graphite-soft">
              <code>--font-display</code> · 400 / 600 / 700
            </p>
            <p className="mt-3 text-body text-graphite-soft">
              Display and every heading. Geometric enough to hold at 6.5rem, tight enough to work at 1rem.
            </p>
          </div>
          <div className="rule-t pt-5">
            <p className="text-h5 font-semibold">Instrument Sans</p>
            <p className="mt-2 text-fine text-graphite-soft">
              <code>--font-sans</code> · 400 / 500 / 600
            </p>
            <p className="mt-3 text-body text-graphite-soft">
              Body, navigation, labels, buttons and form fields. Everything read or operated.
            </p>
          </div>
          <div className="rule-t pt-5">
            <p className="editorial text-h5">Instrument Serif</p>
            <p className="mt-2 text-fine text-graphite-soft">
              <code>--font-editorial</code> · 400 italic only
            </p>
            <p className="mt-3 text-body text-graphite-soft">
              Pull statements and single emphasised words. Deliberately rationed — it is the loudest device available.
            </p>
          </div>
        </div>

        <h3 className="mt-16 type-title text-h6">Display scale — fluid</h3>
        <p className="mt-3 max-w-[52ch] text-body text-graphite-soft">
          Page and section headings. Every step is a <code>clamp()</code>, so the scale is continuous from 320px to
          1920px and there are no breakpoint jumps to design around.
        </p>
        <div className="mt-6">
          <Spec token="--text-d1" size="clamp 2.6 → 6.5rem" role="Page hero, once per page" sample="Your AI co-founder" className="text-d1" />
          <Spec token="--text-d2" size="clamp 2.1 → 4.5rem" role="Document hero, major statement" sample="Marketing is the only job with no deadline" className="text-d2" />
          <Spec token="--text-d3" size="clamp 1.7 → 3rem" role="Section heading" sample="Five engines, one brief between them" className="text-d3" />
          <Spec token="--text-d4" size="clamp 1.35 → 2rem" role="Subsection heading" sample="What goes in, what comes out" className="text-d4" />
          <Spec token="--text-lead" size="clamp 1.05 → 1.35rem" role="Standfirst under a heading" sample="Answer a guided questionnaire. Mengo returns the strategy most founders never get around to writing." className="text-lead" />
        </div>

        <h3 className="mt-16 type-title text-h6">Component headings — fixed</h3>
        <p className="mt-3 max-w-[52ch] text-body text-graphite-soft">
          Titles <em>inside</em> a section. Deliberately not fluid: a card title that grows with the viewport stops
          reading as a card title. Pair with the <code>type-title</code> role, which carries the family and tracking.
        </p>
        <div className="mt-6">
          <Spec token="--text-h5" size="1.25rem / 20px" role="Menu feature, engine name" sample="Marketing Engine" className="type-title text-h5" />
          <Spec token="--text-h6" size="1.125rem / 18px" role="Process step title" sample="Decide the year, not the day" className="type-title text-h6" />
          <Spec token="--text-h7" size="1.0625rem / 17px" role="Row and card titles, FAQ questions" sample="What exactly does Mengo produce?" className="type-title text-h7" />
          <Spec token="--text-h8" size="1rem / 16px" role="Definition terms, dense listings" sample="Editorial guardrails" className="type-title text-h8" />
        </div>

        <h3 className="mt-16 type-title text-h6">Reading scale</h3>
        <p className="mt-3 max-w-[52ch] text-body text-graphite-soft">
          Everything read rather than scanned. <code>body</code> is the workhorse at 15px and carries roughly two
          thirds of the site&rsquo;s text.
        </p>
        <div className="mt-6">
          <Spec token="--text-prose" size="1.0625rem / 17px" role="Long-form articles and guides" sample="Marketing is the only function without an external deadline, which is why it loses." className="text-prose" />
          <Spec token="--text-body" size="0.9375rem / 15px" role="Default body and UI copy" sample="Positioning, audience segments and channel priorities become stored objects." className="text-body" />
          <Spec token="--text-small" size="0.875rem / 14px" role="Supporting copy, blurbs" sample="One primary channel, one secondary, one experiment." className="text-small" />
          <Spec token="--text-fine" size="0.8125rem / 13px" role="Metadata, captions, legal" sample="Last updated 31 August 2026 · 6 min read" className="text-fine" />
          <Spec token="--text-eyebrow" size="0.75rem / 12px" role="Section labels, uppercase" sample="What you actually get" className="eyebrow" />
          <Spec token="--text-statement" size="1.375rem / 22px" role="Editorial pull statement" sample="The cost of competent copy has collapsed." className="editorial text-statement" />
        </div>

        <h3 className="mt-16 type-title text-h6">Roles</h3>
        <p className="mt-3 max-w-[52ch] text-body text-graphite-soft">
          A role is family plus weight plus tracking. Size stays separate, so one role works at several sizes — a row
          title and a menu heading are the same role at <code>h7</code> and <code>h5</code>.
        </p>
        <div className="mt-6">
          <DefinitionList
            columns={1}
            items={[
              { label: "type-title", body: "Sora 600, −0.02em. Every heading inside a section. Pair with h5–h8." },
              { label: "type-nav", body: "Instrument Sans 500 at body size. Navigation links, in the header and the mobile panel." },
              { label: "type-button", body: "Instrument Sans 600 at body size. Every button label, so a button never inherits surrounding copy." },
              { label: "eyebrow", body: "Instrument Sans 600, 12px, 0.14em, uppercase. Section labels. Recolours automatically on dark surfaces." },
              { label: "editorial", body: "Instrument Serif 400 italic. Pull statements only." },
              { label: "tnum", body: "Tabular numerals, for any figure that sits in a column." },
            ]}
          />
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section tone="paper" id="buttons">
        <Eyebrow>04 · Buttons and links</Eyebrow>
        <h2 className="mt-4 text-d3">One primary action per view</h2>
        <p className="mt-5 max-w-[52ch] text-body text-graphite-soft">
          Every button is at least 44px tall, uses <code>type-button</code>, and states what happens rather than
          inviting a click. Lime is reserved for the primary action so it never has to compete with itself.
        </p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow className="mb-5">On paper</Eyebrow>
            <div className="flex flex-wrap items-center gap-3">
              <span className={buttonClass("primary")}>Join our waitlist</span>
              <span className={buttonClass("secondary")}>See how it works</span>
              <span className={buttonClass("ghost")}>Read more</span>
            </div>
            <p className="mt-6 text-body">
              Inline link treatment: <TextLink href={routes.platform()}>explore the platform</TextLink>
            </p>
          </div>
          <div className="on-dark rounded-lg bg-forest p-8">
            <Eyebrow className="mb-5">On forest</Eyebrow>
            <div className="flex flex-wrap items-center gap-3">
              <span className={buttonClass("primary")}>Join our waitlist</span>
              <span className={buttonClass("secondary")}>See how it works</span>
            </div>
            <p className="mt-6 text-body text-sage">
              Inline link treatment: <TextLink href={routes.platform()}>explore the platform</TextLink>
            </p>
          </div>
        </div>

        <div className="mt-12 max-w-[52rem] rule-t pt-6">
          <Eyebrow className="mb-3">Writing button labels</Eyebrow>
          <p className="text-body text-graphite-soft">
            A label names the outcome: &ldquo;Join our waitlist&rdquo;, not &ldquo;Submit&rdquo;. Where the site
            reuses live wording from mengoengine.com — &ldquo;Join our waitlist&rdquo;, &ldquo;Try the Demo&rdquo;,
            &ldquo;Invite Jainam to speak&rdquo; — that wording wins over anything invented here.
          </p>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section tone="warm" id="components">
        <Eyebrow>05 · Components</Eyebrow>
        <h2 className="mt-4 text-d3">The structural devices</h2>
        <p className="mt-5 max-w-[52ch] text-body text-graphite-soft">
          Hairline rules do the work a generic template gives to card borders. There is no card component, which is
          the single decision that keeps 500 pages from looking like a component gallery.
        </p>

        <h3 className="mt-12 type-title text-h6">Row link — dense index listings</h3>
        <div className="mt-4 max-w-[52rem]">
          <RowLink href={routes.solution("build-a-marketing-system")} label="Build a Marketing System" blurb="Replace scattered activity with something that survives a busy quarter." meta="Solution" />
          <RowLink href={routes.feature("annual-calendar")} label="365-Day Calendar" blurb="Decide the year once, not every morning." meta="Capability" />
        </div>

        <h3 className="mt-12 type-title text-h6">Marker list — factual enumerations</h3>
        <div className="mt-4 max-w-[38rem]">
          <MarkerList
            items={[
              "Positioning statement and message hierarchy",
              "Two to four audience segments, each carrying its objection",
              "A ranked channel strategy naming what to stop running",
            ]}
          />
        </div>

        <h3 className="mt-12 type-title text-h6">Process rail — where order carries meaning</h3>
        <div className="max-w-[52rem]">
          <ProcessRail
            steps={[
              { title: "Answer the guided questionnaire", body: "What you sell, who buys it, and what stops them." },
              { title: "Get the strategy layer", body: "Positioning, segments, offer ladder, ranked channels." },
            ]}
          />
        </div>

        <h3 className="mt-12 type-title text-h6">FAQ — native disclosure, no JavaScript</h3>
        <div className="mt-4 max-w-[52rem]">
          <FaqList
            faqs={[
              { q: "Does Mengo publish or send anything?", a: "No. It writes and structures; publishing and sending stay in the tools you already use." },
              { q: "Will it invent facts about my business?", a: "Guardrails restrict claims to what you supplied. Anything unsourced surfaces as an explicit gap." },
            ]}
          />
        </div>

        <h3 className="mt-12 type-title text-h6">Pull statement — rationed</h3>
        <div className="mt-6">
          <PullQuote attribution="Why Mengo exists">
            What is still scarce is knowing what to make, for whom, and in what order.
          </PullQuote>
        </div>
      </Section>

      {/* ---------------------------------------------------------------- */}
      <Section tone="forest" id="rules">
        <Eyebrow>06 · Rules</Eyebrow>
        <h2 className="mt-4 text-d3 text-paper">What this system will not do</h2>
        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <MarkerList
            items={[
              "No card grids. Rules and whitespace carry structure instead.",
              "No decorative gradients. The one gradient-free accent is lime, and it marks actions.",
              "No dashboard mockups depicting a product interface that does not exist.",
              "No badge or pill unless it encodes real state.",
            ]}
          />
          <MarkerList
            items={[
              "No section that cannot state the objection it removes.",
              "No animation that moves more than 20px or lasts beyond 700ms.",
              "No font weight below 400 or above 700.",
              "No arbitrary font size — every size is a named token, enforced in review.",
            ]}
          />
        </div>
        <p className="mt-10 max-w-[52ch] text-body">
          The last rule is checkable:{" "}
          <code>grep -rE &quot;text-\[[0-9.]+rem\]&quot; src/</code> should return nothing.
        </p>
      </Section>

      <Section tone="paper">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="text-body text-graphite-soft">
            Tokens live in <code>src/app/globals.css</code>. Components in <code>src/components/</code>.
          </p>
          <Link href={routes.sitemapPage()} className={buttonClass("secondary")}>
            Browse the full site
          </Link>
        </div>
      </Section>
    </>
  );
}
