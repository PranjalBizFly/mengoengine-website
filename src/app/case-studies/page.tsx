import type { Metadata } from "next";

import { IndexHero, CtaBand } from "@/components/sections/page";
import { Eyebrow, JsonLd, MarkerList, RowLink, Section, TextLink } from "@/components/ui/primitives";
import { pageMetadata } from "@/seo/metadata";
import { breadcrumbSchema } from "@/seo/schema";
import { routes } from "@/lib/site";
import { caseStudies } from "@/data/case-studies";

const PATH = routes.caseStudies();
const CRUMBS = [{ label: "Case studies", href: PATH }];

/**
 * Case study index.
 *
 * With no published studies this page states that plainly rather than filling
 * the space, and is noindex until there is at least one. It exists so the route
 * and the template are wired and reviewable now.
 */
export const metadata: Metadata = pageMetadata({
  title: "Case studies",
  description:
    "Mengo is pre-launch and has no completed customer engagements to describe. Rather than publish invented outcomes, this page explains what will appear here and what we use in the meantime.",
  path: PATH,
  ogKicker: "Case studies",
  noindex: caseStudies.length === 0,
});

export default function CaseStudiesIndexPage() {
  const published = caseStudies.length > 0;

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, ...CRUMBS])} />

      <IndexHero
        crumbs={CRUMBS}
        eyebrow="Case studies"
        title={published ? "How this has worked in practice" : "No case studies yet, and none invented"}
        lead={
          published
            ? "Each study runs situation, challenge, approach, implementation and results, with every figure naming the evidence behind it."
            : "Mengo is pre-launch. There are no completed engagements to write up, so there is nothing here — rather than a page of plausible-sounding outcomes that never happened."
        }
        count={published ? `${caseStudies.length} studies` : undefined}
      />

      {published ? (
        <Section tone="paper">
          <div>
            {caseStudies.map((study) => (
              <RowLink
                key={study.slug}
                href={routes.caseStudy(study.slug)}
                label={study.title}
                blurb={study.situation}
                meta={study.anonymised ? "Anonymised" : study.client}
              />
            ))}
          </div>
        </Section>
      ) : (
        <>
          <Section tone="paper">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
              <div>
                <Eyebrow className="mb-5">The standard</Eyebrow>
                <h2 className="max-w-[20ch] text-d3">What has to be true before a study appears here</h2>
                <p className="mt-5 max-w-[42ch] text-body text-graphite-soft">
                  The template is built and wired. Publishing the first study is a data change, not a build — but only
                  once these hold.
                </p>
              </div>
              <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
                <MarkerList
                  items={[
                    "Written permission to describe the work, and to name the client where they are named",
                    "Every figure carries the evidence behind it — an analytics export, an invoice, the client's own reporting",
                    "Any quote has recorded consent from the person quoted",
                    "Nothing stated that the client would not recognise as their own account of it",
                  ]}
                />
                <p className="mt-8 text-body text-graphite-soft">
                  A figure that cannot be pointed at does not ship. The results section renders only where every entry
                  names its source, so the constraint is enforced by the template rather than by discipline.
                </p>
              </div>
            </div>
          </Section>

          <Section tone="warm">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
              <div>
                <Eyebrow className="mb-5">In the meantime</Eyebrow>
                <h2 className="max-w-[20ch] text-d3">Demonstrating competence without customer data</h2>
              </div>
              <div data-reveal style={{ "--reveal-delay": "80ms" } as React.CSSProperties}>
                <p className="text-body text-graphite-soft">
                  This is a problem most businesses have before their first published study, and there is a legitimate
                  answer to it: situation-and-method pieces that show judgement without disclosing anything
                  client-identifiable. Method transparency frequently outperforms unverifiable numbers, because a
                  sophisticated buyer discounts figures they cannot check.
                </p>
                <p className="mt-6 text-body">
                  <TextLink href={routes.useCase("write-case-studies-without-data")}>
                    How to write case studies without data
                  </TextLink>
                </p>
                <p className="mt-3 text-body">
                  <TextLink href={routes.useCases()}>Browse the use cases</TextLink> for what the work looks like in
                  practice.
                </p>
              </div>
            </div>
          </Section>
        </>
      )}

      <CtaBand
        title="Working with us early"
        body="Early access opens in batches. If you would be willing to have the work written up afterwards, say so when you join — it changes nothing about what you get, and it helps us build this page honestly."
        secondary={{ label: "Who Mengo is for", href: routes.company("who-its-for") }}
      />
    </>
  );
}
