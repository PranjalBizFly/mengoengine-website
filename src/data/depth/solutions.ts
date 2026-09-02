import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Solution depth.
 *
 * Solutions sit on three axes — a goal, a team shape, or a stage of business —
 * and a reader arrives at one because they recognised themselves in it. What
 * the record did not answer is why this situation persists despite obvious
 * effort, and what the first thirty days of addressing it actually involve.
 */
export const solutionDepth: DepthMap = {
  /* ---------------- Goal ---------------- */

  "build-a-marketing-system": {
    intro:
      "Most businesses that describe their marketing as broken do not have a talent problem or a budget problem. They have a decision problem: too many small choices being made repeatedly, under time pressure, by someone whose real job is something else. A system is what settles those choices in advance.",
    explain: [
      s(
        "Why effort alone does not fix it",
        "Working harder at an unstructured process produces the same output at greater cost. The pattern — two good weeks, a busy month, a reset — recurs across thousands of businesses, and a failure that consistent is structural rather than personal.",
      ),
      s(
        "What the first month looks like",
        "The strategy layer written down and settled: positioning, two to four segments, an offer ladder, a channel ranking. Then a themed year at low resolution and a detailed current quarter. Production comes fourth, and it is the easy part once the first three exist.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook", "marketing-audit-checklist"],
      articles: ["marketing-is-a-systems-problem", "the-daily-decision-is-the-cost"],
    },
    close: close(
      "Four layers, in order",
      "Strategy, calendar, production, review — each one making the next cheaper. Join our waitlist and tell us which layer is currently missing.",
    ),
  },

  "fix-inconsistent-posting": {
    intro:
      "Inconsistent publishing is almost never a motivation problem. It is what happens when a task with no external deadline competes daily against work that has one — and the deadline wins, correctly, every time it comes up.",
    explain: [
      s(
        "Why resolving to try harder fails",
        "The advice to be more consistent describes the outcome and calls it a method. Nothing about the underlying competition for time has changed, so the same collapse arrives on roughly the same schedule as last time.",
      ),
      s(
        "What actually changes the pattern",
        "Removing the daily decision and moving production into batches. A month approved in one sitting survives a busy quarter; twenty minutes every morning does not, because every morning is a fresh negotiation with client work.",
      ),
    ],
    related: {
      guides: ["90-day-content-plan", "marketing-system-playbook"],
      articles: ["batching-beats-daily", "the-cost-of-restarting"],
    },
    close: close(
      "Consistency without willpower",
      "The version of consistency that lasts is the one that does not require a decision each day. Join our waitlist for early access.",
    ),
  },

  "scale-content-without-hiring": {
    intro:
      "The decision to hire usually arrives when output has to increase and the founder has run out of hours. It is a reasonable response and an expensive one, and it frequently transfers the volume problem without transferring the context that made the founder's version good.",
    explain: [
      s(
        "Why a hire does not automatically solve it",
        "A new marketer inherits none of the accumulated judgement about positioning, voice and audience, and spends months reconstructing it. Volume rises quickly and distinctiveness falls, which is the trade nobody intended to make.",
      ),
      s(
        "What has to exist either way",
        "A documented strategy layer, a brief per slot, and a voice profile with a banned list. That documentation is what makes generation useful and what makes a hire productive — which is why doing it first is worthwhile regardless of the eventual decision.",
      ),
    ],
    related: {
      guides: ["content-brief-template", "voice-profile-worksheet"],
      articles: ["hire-or-tool", "the-brief-is-the-bottleneck"],
      comparisons: ["mengo-vs-an-in-house-marketer"],
    },
    close: close(
      "Document first, then decide",
      "The same documentation makes a hire effective and makes software useful. Join our waitlist for early access.",
    ),
  },

  "build-a-content-engine": {
    intro:
      "An engine is different from a habit. A habit produces content when the person is available; an engine produces it because each stage hands something specific to the next one, and the output does not depend on anybody remembering what to do.",
    explain: [
      s(
        "Where most content operations break",
        "At the brief. Everything upstream is enthusiasm and everything downstream is execution, and in between someone has to decide what this specific asset argues, to whom, with what evidence. That decision is the actual bottleneck.",
      ),
      s(
        "What the stages are",
        "Theme, slot, brief, draft, review, publish, repurpose. Each stage takes a defined input and produces a defined output, which is what allows any of them to be delegated to a person or to software without the whole thing collapsing.",
      ),
    ],
    related: {
      guides: ["content-brief-template", "90-day-content-plan"],
      articles: ["the-brief-is-the-bottleneck", "repurposing-is-not-reposting"],
    },
    close: close(
      "Stages, not effort",
      "An engine is a set of handoffs, and the handoff that usually fails is the brief. Join our waitlist for early access.",
    ),
  },

  "launch-a-new-product": {
    intro:
      "A launch concentrates months of decisions into a few weeks, which is why launches expose whatever was already missing. The businesses that launch well are rarely the ones with the best announcement; they are the ones that settled the offer, the audience and the definition of success before producing anything.",
    explain: [
      s(
        "Why launch week is the wrong time to build",
        "Producing assets during the launch means every piece is made under pressure, by the person also running the launch, with no time to check any of it against the rest. The result is uneven and internally inconsistent.",
      ),
      s(
        "What has to be settled first",
        "The offer, the audience, the window and the success condition — plus the decision rules that say when to increase spend, change the creative or stop. All four are cheap to agree in advance and contentious once money has been committed.",
      ),
    ],
    related: {
      guides: ["launch-checklist"],
      articles: ["speed-is-a-conversion-strategy", "testing-adjectives-teaches-nothing"],
    },
    close: close(
      "Decide before you produce",
      "A launch with no agreed success condition can always be reported as a success. Join our waitlist for early access.",
    ),
  },

  "run-a-seasonal-promotion": {
    intro:
      "Seasonal businesses know exactly when their peak arrives and prepare during it anyway. Working forwards from today puts production a few weeks out, which lands squarely inside the window when there is no capacity to do it.",
    explain: [
      s(
        "Why the trough is the real opportunity",
        "The quiet period is the only time the assets, sequences and pages that support a peak can be built. Treating it as downtime rather than as capacity is why the same scramble repeats annually.",
      ),
      s(
        "What has to be spaced",
        "Offers, against the buying cycle. Seasonal promotions planned individually tend to cluster on the same audience, and an audience offered a discount four times in six weeks learns to wait for the fifth.",
      ),
    ],
    related: {
      guides: ["seasonal-planning-playbook", "offer-ladder-framework"],
      articles: ["what-quiet-months-are-for"],
    },
    close: close(
      "Build in the trough, run in the peak",
      "Preparation has to happen when there is time, which is never during the season. Join our waitlist for early access.",
    ),
  },

  "generate-qualified-leads": {
    intro:
      "Almost every business that says it needs more leads is describing a symptom. The common causes are that the enquiries arriving are the wrong ones, or that the right ones are arriving and nothing happens after the first reply. Both look like a volume problem from the inside.",
    explain: [
      s(
        "Why more traffic is usually the wrong lever",
        "If the follow-up is empty or the qualification is loose, additional volume produces additional waste at proportional cost. The step that is leaking has to be named before spending is increased, or the leak simply scales.",
      ),
      s(
        "What qualified actually requires",
        "A definition the person doing the follow-up agrees with, set against how many conversations they can genuinely have. A threshold producing four times the calls anyone can make is not a lead generation success.",
      ),
    ],
    related: {
      guides: ["lead-nurture-blueprint", "metric-selection-framework"],
      articles: ["the-follow-up-gap", "stop-measuring-everything"],
    },
    close: close(
      "Most lead problems are follow-up problems",
      "Name the leaking step before increasing the volume into it. Join our waitlist and describe where things currently stall.",
    ),
  },

  "shorten-the-sales-cycle": {
    intro:
      "A cycle that keeps stretching is usually carrying an unanswered question. Somewhere between interest and decision there is an objection nobody addressed, or a person who has to approve it and has never spoken to you.",
    explain: [
      s(
        "Why pushing harder lengthens it",
        "Increased contact frequency without new information reads as pressure and produces polite deferral. The buyer is not waiting for another reminder; they are waiting for something that resolves the specific thing holding them.",
      ),
      s(
        "What actually compresses it",
        "Speed at the front — replying while intent is live — and material that arms the internal champion, because a stall in the middle of a cycle is usually an argument happening in a room you are not in.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "lead-nurture-blueprint"],
      articles: ["speed-is-a-conversion-strategy", "the-internal-champion-problem"],
    },
    close: close(
      "Find the unanswered question",
      "A lengthening cycle is information about your content, not about your persistence. Join our waitlist for early access.",
    ),
  },

  "recover-cold-leads": {
    intro:
      "A list of past enquiries nobody has contacted is a common and slightly uncomfortable asset. These contacts were already paid for, a proportion of them are still in the market, and the main obstacle to working them is that it feels awkward.",
    explain: [
      s(
        "Why the awkwardness is misplaced",
        "Most contacts went quiet because of timing, not rejection. An approach that names the gap and arrives with something genuinely new is received far better than expected, and the people who are not interested will remove themselves cleanly.",
      ),
      s(
        "Why the archive step matters",
        "Recovery is half of the value. Suppressing the contacts who do not respond improves deliverability for everyone still reading, which makes every subsequent send more effective and every subsequent number honest.",
      ),
    ],
    related: {
      guides: ["reengagement-playbook"],
      articles: ["the-cost-of-restarting", "the-follow-up-gap"],
    },
    close: close(
      "Recover some, release the rest",
      "A quiet list is usually cheaper to reopen than an equivalent audience is to acquire. Join our waitlist for early access.",
    ),
  },

  "prove-marketing-roi": {
    intro:
      "The demand to prove marketing return usually arrives during a difficult quarter, and it is frequently answered with a dashboard rather than a decision. The useful version is narrower: which two or three activities deserve continued investment, and what would have to change for that answer to change.",
    explain: [
      s(
        "Why perfect attribution is the wrong target",
        "It does not exist. Buyers use devices you cannot link, read things you cannot track and are recommended by people who never appear in your data. Waiting for certainty means deciding by intuition for years while the tracking project continues.",
      ),
      s(
        "What a defensible answer looks like",
        "A small metric set with a decision attached to each number, first-touch and last-touch reported as a range rather than a verdict, and an explicit statement of what the data cannot tell you.",
      ),
    ],
    related: {
      guides: ["metric-selection-framework", "monthly-review-template"],
      articles: ["stop-measuring-everything"],
    },
    close: close(
      "Enough certainty to decide",
      "The question is which activities to continue, not how to allocate credit per touch. Join our waitlist for early access.",
    ),
  },

  "enter-a-new-market": {
    intro:
      "Entering a new market — a new sector, a new region, a new buyer — usually means repeating what worked at lower intensity across more ground. Density was what made the first market work, and thin coverage reproduces none of it.",
    explain: [
      s(
        "Why the existing plan does not transfer",
        "Positioning that resonates in one market often lands differently in another, because the objections, the alternatives and the vocabulary are different. Reusing the messaging without testing that assumption is the most common early error.",
      ),
      s(
        "What entry actually requires",
        "One concentrated area rather than a region, genuine local or sector-specific substance, whatever proof you can assemble, and a bounded success condition before the second area is opened.",
      ),
    ],
    related: {
      guides: ["positioning-framework", "channel-selection-framework"],
      articles: ["marketing-before-product-market-fit"],
    },
    close: close(
      "Density before coverage",
      "One market done properly is what makes the second cheaper. Join our waitlist for early access.",
    ),
  },

  "build-a-founder-brand": {
    intro:
      "In most small businesses the founder is more credible than the company, and people follow people. The difficulty is that founder-led marketing is usually advised as personal disclosure, which is neither necessary nor sustainable for most people.",
    explain: [
      s(
        "Why the oversharing advice is wrong",
        "Recognition comes from a consistent position, not from personal revelation. What makes founder content work is that a specific person is arguing something specific, and that requires no biography at all.",
      ),
      s(
        "What sustains it past three months",
        "A cadence sized to a busy delivery month, a stated position that the content keeps returning to, and stories drawn from work rather than from private life — which is both more comfortable and more relevant to the reader.",
      ),
    ],
    related: {
      guides: ["linkedin-founder-playbook", "positioning-framework"],
      articles: ["founder-brand-without-oversharing", "content-that-only-you-could-write"],
    },
    close: close(
      "A position, not a diary",
      "Founder content works because someone specific is arguing something specific. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Team ---------------- */

  "solo-founders": {
    intro:
      "When you are also the delivery, marketing competes with billable work every day and loses on most of them. This is not a discipline failure; it is the correct prioritisation of the thing with a client attached, repeated until the pipeline is empty.",
    explain: [
      s(
        "Why the feast-and-famine cycle persists",
        "Marketing happens between clients, so the pipeline is emptiest exactly when delivery finishes. The next quiet period arrives with nothing in it, and the cycle restarts at a cost each time.",
      ),
      s(
        "What has to be true for a plan to survive",
        "It has to be sized to a busy month rather than a good one, batched so the work happens in blocks, and decided in advance so no daily choice is required. A plan that requires four spare hours a week produces nothing.",
      ),
    ],
    related: {
      guides: ["marketing-system-playbook", "90-day-content-plan"],
      articles: ["marketing-when-you-are-the-business", "batching-beats-daily"],
    },
    close: close(
      "Sized for your worst week",
      "A plan that only works in a quiet month is a plan for a month you will not have. Join our waitlist for early access.",
    ),
  },

  "small-marketing-teams": {
    intro:
      "A team of one to three spends a surprising proportion of its capacity on coordination: deciding what to do, briefing it, reviewing it, and re-explaining context that lives in someone's head. That overhead is invisible and it is usually the constraint.",
    explain: [
      s(
        "Where small-team capacity actually goes",
        "Not into writing. Into deciding what to write, chasing the input needed to write it, and reconciling three people's understanding of the positioning. Documented briefs remove most of that without removing anyone's judgement.",
      ),
      s(
        "What changes with a shared system",
        "Everyone works from the same strategy layer, the same voice profile and the same brief format, which makes review fast and makes the output consistent regardless of who produced it.",
      ),
    ],
    related: {
      guides: ["content-brief-template", "voice-profile-worksheet"],
      articles: ["the-brief-is-the-bottleneck", "ai-marketing-tools-that-stay-empty"],
    },
    close: close(
      "Remove the coordination overhead",
      "Most small-team capacity is lost before anyone starts writing. Join our waitlist for early access.",
    ),
  },

  "agencies-and-freelancers": {
    intro:
      "Running several client accounts creates a specific risk: they start sounding alike. Shared processes are what make an agency efficient, and shared language is what makes clients wonder what they are paying for.",
    explain: [
      s(
        "Why accounts converge",
        "The same person, the same templates and the same reference points produce the same rhythms. Convergence is gradual and invisible from inside, and it is usually noticed first by a client reading a competitor's feed.",
      ),
      s(
        "What keeps them distinct",
        "A separate voice profile per client, with its own vocabulary and banned list, and a separate positioning that each account's content is generated against. Efficiency comes from the shared process, not from shared phrasing.",
      ),
    ],
    related: {
      guides: ["voice-profile-worksheet", "content-brief-template"],
      articles: ["ai-content-sounds-the-same", "marketing-when-you-are-the-business"],
      comparisons: ["mengo-vs-a-marketing-agency"],
    },
    close: close(
      "Shared process, separate voices",
      "The efficiency should come from the system, not from the phrasing. Join our waitlist for early access.",
    ),
  },

  "sales-led-teams": {
    intro:
      "In a sales-led business, marketing is often asked to produce leads and nothing else. That framing hides where most of the available return is: the material that supports a conversation already in progress, and the follow-up that happens between calls.",
    explain: [
      s(
        "Why the handoff is where value leaks",
        "A qualifying call that starts from nothing repeats questions the contact has already answered by their behaviour. What they read, downloaded and asked should arrive with the record, and usually does not.",
      ),
      s(
        "What marketing should be producing here",
        "Objection material sales can send after a specific conversation, a one-pager written for the approver rather than the champion, and sequences that keep a stalled opportunity warm without the salesperson having to remember.",
      ),
    ],
    related: {
      guides: ["objection-map-template", "lead-nurture-blueprint"],
      articles: ["the-internal-champion-problem", "speed-is-a-conversion-strategy"],
    },
    close: close(
      "Support the conversation, not just the lead",
      "Most sales-led marketing value sits after the first call rather than before it. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Stage ---------------- */

  "pre-launch-startups": {
    intro:
      "Marketing before you have customers is a genuine problem rather than an excuse: the usual proof — case studies, testimonials, numbers — does not exist yet, and inventing it is both dishonest and easy to detect.",
    explain: [
      s(
        "What can be published instead of proof",
        "The reasoning. Why you are building this, what you believe about the problem that others do not, and how your approach differs. That is credible without evidence because it is an argument rather than a claim.",
      ),
      s(
        "Why narrow beats broad at this stage",
        "A minimum viable audience — the smallest group that could sustain the business — is reachable without budget and specific enough to write for. Describing a large market produces content that persuades nobody in particular.",
      ),
    ],
    related: {
      guides: ["positioning-framework"],
      articles: ["marketing-before-product-market-fit", "content-that-only-you-could-write"],
    },
    close: close(
      "Publish the reasoning",
      "Method and specificity build credibility that case studies you cannot yet write would otherwise have to carry. Join our waitlist for early access.",
    ),
  },

  "established-local-businesses": {
    intro:
      "An established local business usually has the two things that are hardest to build — a reputation and a customer base — and no system for using either. Growth is treated as an acquisition question when the immediate opportunity is almost always in what already exists.",
    explain: [
      s(
        "Where the unused value sits",
        "Past customers nobody has contacted, reviews sitting on one page, and a referral flow that happens by chance and cannot be increased. All three are cheaper to work than any new audience.",
      ),
      s(
        "Why the online presence lags the reputation",
        "The business was built on word of mouth, so the website and search presence were never load-bearing. When a new generation of buyers searches first, the gap between local reputation and online visibility becomes the constraint.",
      ),
    ],
    related: {
      guides: ["local-seo-checklist", "reengagement-playbook"],
      articles: ["referrals-are-not-a-strategy", "the-cost-of-restarting"],
    },
    close: close(
      "Use what you already have",
      "Past customers, reviews and referrals are cheaper than any new audience and are usually untouched. Join our waitlist for early access.",
    ),
  },
};
