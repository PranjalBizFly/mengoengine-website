import type { DepthMap } from "@/data/depth";
import { close } from "@/data/depth";

/**
 * Company page depth.
 *
 * These pages are the only ones on the site making claims about Mengo itself,
 * so the depth layer here is deliberately thin: an opening paragraph that
 * frames what the page is for, and a closing line written for this page rather
 * than for the page type. Nothing is added about history, headcount, funding,
 * customers or achievements, because none of that would be verifiable from the
 * existing content.
 */
export const companyDepth: DepthMap = {
  about: {
    intro:
      "This page states what Mengo is, what it was built in response to, and where the product currently stands. It is written to be checked rather than admired: everything on it is either an explanation of the approach or a statement about the current stage, and there are no customer numbers because the product is pre-launch.",
    close: close(
      "Early access opens in batches",
      "Join our waitlist with a line about what is actually broken in your marketing. What people describe is what sets the build order.",
    ),
  },

  "how-it-works": {
    intro:
      "Five steps, one brief. This page walks through what happens between answering a guided questionnaire and holding a marketing system that runs without a daily decision — including which parts stay with you, since a system that claims to do everything is a system that will surprise you later.",
    close: close(
      "See it against your own business",
      "The steps are the same for everyone; the output is not. Join our waitlist and tell us what you sell.",
    ),
  },

  "who-its-for": {
    intro:
      "Most product pages describe an ideal customer and stop. This one names the situations where Mengo is the wrong answer as well, because that is more useful to a reader making a decision and considerably cheaper for both of us than finding out three months in.",
    close: close(
      "If the fit is wrong, we would rather say so",
      "Describe your situation when you join the waitlist. If Mengo is not the right tool for it, that is a faster answer than a trial.",
    ),
  },

  founder: {
    intro:
      "Mengo was built by one person in response to a pattern he kept seeing in the businesses around him. This page covers why the product exists and what he does besides building it — speaking, coaching and the work that led to the problem being noticed in the first place.",
    close: close(
      "Talk to the founder",
      "Investor conversations, speaking enquiries and questions about the product are handled directly. Use the form and say which.",
    ),
  },

  invest: {
    intro:
      "This page is written for people evaluating Mengo as an investment rather than as a product. It covers what is being built, why the timing is what it is, and where the company currently stands — stated plainly, with no projections presented as facts.",
    close: close(
      "Conversations handled directly",
      "Investor enquiries go straight to the founder rather than through a process. Use the form and include what you would want to see.",
    ),
  },

  "responsible-ai": {
    intro:
      "A system that writes marketing under your name can do real damage by inventing one confident, specific, plausible fact. This page explains the failure mode Mengo is designed against, what the guardrails actually do, and — equally important — which responsibilities remain yours.",
    close: close(
      "Ask about a constraint in your sector",
      "If your industry restricts particular claims, tell us which when you join the waitlist so the guardrails can be configured for it.",
    ),
  },
};
