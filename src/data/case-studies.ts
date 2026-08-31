import type { CaseStudy } from "@/lib/types";

/**
 * Case studies.
 *
 * Deliberately empty.
 *
 * Mengo is pre-launch and has no completed customer engagements to describe.
 * The page type is fully implemented — `CaseStudyPage` renders any entry added
 * here — so publishing the first study is a data change, not a build.
 *
 * Before adding an entry, three things must be true:
 *
 *   1. Written permission to describe the work, and to name the client if
 *      `anonymised` is false.
 *   2. Every figure in `results` has an `evidence` string naming where it came
 *      from — an analytics export, an invoice, the client's own report. A figure
 *      that cannot be pointed at does not ship.
 *   3. Any `quote` has recorded consent, which is what the `consentRecorded`
 *      flag asserts.
 *
 * The interim approach for demonstrating competence without customer data is
 * documented at /use-cases/write-case-studies-without-data/.
 */
export const caseStudies: CaseStudy[] = [];

export const caseStudyBySlug = new Map(caseStudies.map((c) => [c.slug, c]));
