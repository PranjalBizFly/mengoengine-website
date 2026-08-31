import Link from "next/link";
import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DefinitionList, Eyebrow, JsonLd, Section, TextLink } from "@/components/ui/primitives";
import { InlineLeadForm } from "@/components/forms/LeadModal";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes, site } from "@/lib/site";

const PATH = routes.contact();
const CRUMBS = [{ label: "Contact", href: PATH }];

export const metadata: Metadata = pageMetadata({
  title: "Contact Mengo",
  description:
    "Questions about fit, partnerships, press or investment. Messages go to a person and get a direct reply rather than an automated sequence.",
  path: PATH,
  ogKicker: "Contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS])} />

      <div className="bg-paper">
        <Breadcrumbs crumbs={CRUMBS} />
        <div className="container-page grid gap-12 pb-16 pt-10 md:pt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow className="mb-5">Contact</Eyebrow>
            <h1 className="max-w-[16ch] text-d2" data-reveal>
              Tell us what is actually broken
            </h1>
            <p
              className="mt-6 max-w-[46ch] text-lead text-graphite-soft"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            >
              A description of your situation is far more useful to us than a general enquiry, and it gets a far better
              reply. We read everything that comes through here.
            </p>

            <div className="mt-12">
              <Eyebrow className="mb-4">Other routes</Eyebrow>
              <ul className="space-y-3">
                <li className="text-[0.9375rem] text-graphite-soft">
                  Early access — <TextLink href={routes.waitlist()}>join the waitlist</TextLink>
                </li>
                <li className="text-[0.9375rem] text-graphite-soft">
                  Investment — <TextLink href={routes.invest()}>investor enquiries</TextLink>
                </li>
                <li className="text-[0.9375rem] text-graphite-soft">
                  Social —{" "}
                  {site.social.slice(0, 3).map((item, i) => (
                    <span key={item.href}>
                      {i > 0 ? ", " : ""}
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-block py-1 underline decoration-lime-deep underline-offset-[3px] transition-colors hover:text-lime-deep"
                      >
                        {item.label}
                      </a>
                    </span>
                  ))}
                </li>
              </ul>
            </div>
          </div>

          <div className="rule-t pt-10 lg:border-t-0 lg:pt-0" data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            <InlineLeadForm intent="enquiry" />
          </div>
        </div>
      </div>

      <Section tone="warm">
        <Eyebrow>Before you write</Eyebrow>
        <DefinitionList
          items={[
            {
              label: "If you are asking whether Mengo fits you",
              body: "Include what you sell, roughly how long a customer takes to decide, and which part of your marketing keeps stopping. That is enough for an honest answer, including when the answer is no.",
            },
            {
              label: "If you want early access",
              body: "The waitlist is the faster route, and what you write there feeds directly into the build order. Access opens in batches.",
            },
            {
              label: "If you are an agency or consultant",
              body: "Say how many accounts you run. The per-account brief and voice profile model is what makes multiple clients workable, and we will show you that specifically.",
            },
            {
              label: "If this is about investment",
              body: "Use the investor enquiry route so it reaches the founder directly. Traction and financial detail are shared in conversation rather than published.",
            },
          ]}
        />
      </Section>

      <Section tone="forest">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-20">
          <div>
            <Eyebrow className="mb-5">While you are here</Eyebrow>
            <h2 className="max-w-[20ch] text-d3 text-paper" data-reveal>
              Most questions are already answered somewhere on this site
            </h2>
          </div>
          <ul className="space-y-3" data-reveal>
            {[
              { label: "How Mengo works, step by step", href: routes.company("how-it-works") },
              { label: "Who it is for — and who it is not for", href: routes.company("who-its-for") },
              { label: "How we use AI responsibly", href: routes.company("responsible-ai") },
              { label: "Compared with an agency, a hire or a chatbot", href: routes.compare() },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rule-t block py-3 text-[0.9375rem] text-sage transition-colors hover:text-lime"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
