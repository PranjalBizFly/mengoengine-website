import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Capability depth.
 *
 * A feature record answers what the capability is called, what it does in a
 * verb phrase, what problem it removes and by what mechanism. Three questions
 * were left over, and they are the ones a reader arriving from search actually
 * has: what goes in, what comes out, and how this connects to everything else.
 *
 * `lead` replaces the terse verb phrase in the hero, which read as a label
 * rather than as an explanation.
 */
export const featureDepth: DepthMap = {
  /* ---------------- Marketing Engine ---------------- */

  "business-brief": {
    lead:
      "A structured intake that asks what a strategist would ask in a first meeting — what you sell, who buys it, what triggers the purchase — and becomes the source every other layer of your marketing is generated from.",
    explain: [
      s(
        "What it needs from you",
        "Answers about the business, not about marketing: what you sell and at what price, who has bought it before, what usually triggers someone to start looking, what you are planning in the next year, and how much time you actually have each week. Questions are written for someone who does not work in marketing.",
      ),
      s(
        "What it produces",
        "A stored, reusable brief object rather than a session. It is what positioning, segments, channel ranking and the calendar are all generated against, which is why regenerating six months later produces a plan with the same personality rather than a different one.",
      ),
    ],
    connects:
      "Nothing else in Mengo works without it. Positioning, segments, channel ranking, the calendar, the voice profile and every asset produced from them all resolve back to answers given here — which is why changing an answer marks the parts of the plan that depended on it as stale.",
    related: {
      guides: ["marketing-system-playbook"],
      articles: ["the-brief-is-the-bottleneck", "what-ai-cannot-know-about-your-business"],
      useCases: ["audit-your-existing-marketing"],
    },
    close: close(
      "Everything starts here",
      "The brief takes a sitting to complete and can be saved partway. Join our waitlist and it is the first thing you will fill in.",
    ),
  },

  "positioning-generator": {
    lead:
      "Drafts the claim your business makes, the hierarchy of messages beneath it and the specific line each audience segment needs to hear first — then holds that language as a constraint on everything generated afterwards.",
    explain: [
      s(
        "How the draft is built",
        "It works from what you sell, who has bought it and what the category already claims. Where several offers exist, each gets its own claim under one parent position, which is what stops a multi-offer business reading as three separate companies.",
      ),
      s(
        "What you do with it",
        "Edit it. The generated version is a starting draft and the committed version is what matters, because everything downstream regenerates against whatever you commit to. Versions are kept, so you can see what your messaging said last quarter and why it moved.",
      ),
    ],
    connects:
      "Positioning is the constraint the Voice Profile enforces, the Asset Library inherits and the Content Briefs quote. It is also what Audience Segments are cut against, since a segment only exists where the claim has to change.",
    related: {
      guides: ["positioning-framework"],
      articles: ["your-positioning-is-a-description"],
      useCases: ["define-your-positioning"],
    },
    close: close(
      "A claim, not a description",
      "If the honest answer is that you are not differentiated, Mengo says so and moves the differentiation to another axis rather than inventing one. Join our waitlist to see the draft.",
    ),
  },

  "audience-segments": {
    lead:
      "Splits your market only where the message genuinely has to change, defines each segment by the situation the buyer is in rather than by demographics, and attaches the single objection that segment holds.",
    explain: [
      s(
        "Why the count stays small",
        "Two to four segments is what a small business can maintain. Beyond that the distinctions stop being applied, content reverts to an average and the framework becomes a document. Mengo will merge two segments that respond to the same claim rather than keep both.",
      ),
      s(
        "What each segment carries",
        "A situation, a claim from the positioning hierarchy, and one objection. That objection is what the nurture sequence for the segment is built around, which is how a segmentation decision made in the strategy layer reaches an actual email.",
      ),
    ],
    connects:
      "Segments are cut from the positioning and consumed by the calendar, which assigns each slot an audience, and by Lead Nurturing, which routes contacts into the sequence matching their segment and intent level.",
    related: {
      guides: ["positioning-framework", "objection-map-template"],
      articles: ["content-that-only-you-could-write"],
      useCases: ["define-your-positioning"],
    },
    close: close(
      "Segments that change the writing",
      "A segment that does not change what gets written is a label. Join our waitlist and see how few you actually need.",
    ),
  },

  "channel-ranking": {
    lead:
      "Scores every channel against your buying cycle, price point, content capacity and existing traction, then commits you to one primary channel, one secondary and one experiment — and names everything else as paused.",
    explain: [
      s(
        "What the score is built from",
        "Whether your buyers are actually there, whether the channel suits a decision of your length, whether your price point supports its cost, and whether you can sustain the format it demands. Capacity is weighted heavily, because a channel you cannot maintain scores badly regardless of its potential.",
      ),
      s(
        "The paused list is the output that matters",
        "Naming what you are not doing, with a date to revisit, is what returns time. An unwritten no gets quietly reversed the first time someone forwards you an article about a platform.",
      ),
    ],
    connects:
      "The ranking decides which channels the calendar allocates slots to and which asset formats are in scope. Channel Sequencing then assigns funnel stages across those channels for individual campaigns.",
    related: {
      guides: ["channel-selection-framework"],
      articles: ["be-everywhere-is-bad-advice"],
      useCases: ["choose-the-right-channels"],
    },
    close: close(
      "Three channels, chosen honestly",
      "Mengo will tell you when the answer is that your primary channel should be the one you are currently neglecting. Join our waitlist for early access.",
    ),
  },

  "annual-calendar": {
    lead:
      "Lays out twelve months themed by month and by week, sequenced so foundational content lands before the offers that depend on it, and paced around the launches and quiet periods you flagged in the brief.",
    explain: [
      s(
        "Planned at two resolutions",
        "Themes for the year, slot-level detail for the coming quarter. Detail beyond a quarter is guesswork that gets rewritten, and no detail at all is the state most calendars are in. The next quarter firms up as it approaches.",
      ),
      s(
        "What happens when the plan changes",
        "The calendar reflows. Moving a launch shifts the surrounding weeks and the dependencies attached to them, rather than requiring the year to be rebuilt. That is the difference between a plan and a spreadsheet.",
      ),
    ],
    connects:
      "Every slot in the calendar becomes a Content Brief, which becomes an asset in Content Studio. Seasonality Planning shapes the intensity across the year, and Campaign Themes supply the argument each month makes.",
    related: {
      guides: ["90-day-content-plan", "marketing-system-playbook"],
      articles: ["the-daily-decision-is-the-cost"],
      useCases: ["plan-a-year-of-content", "fill-an-empty-calendar"],
    },
    close: close(
      "Decide the year once",
      "The expensive part of marketing is not writing the post, it is deciding which post. Join our waitlist and have that settled in advance.",
    ),
  },

  "campaign-themes": {
    lead:
      "Assigns each month one argument the business is making, so every asset that month contributes to it from a different angle and thirty posts build a single case rather than thirty unrelated observations.",
    explain: [
      s(
        "Themes are arguments, not topics",
        "A topic is a subject area. A theme is a claim: something you want your market to believe by the end of the month that they do not believe now. The difference determines whether the month accumulates or merely fills.",
      ),
      s(
        "Angles are distributed deliberately",
        "Within a month each slot is assigned a distinct entry route — the objection, the proof, the contrast, the story, the mechanism. That distribution is what makes a themed month read as reinforcement rather than as repetition.",
      ),
    ],
    connects:
      "Themes are derived from the positioning and the offer ladder, and they set the argument every Content Brief inherits. Campaign Lab uses the same theme structure for bounded promotional windows.",
    related: {
      guides: ["90-day-content-plan"],
      articles: ["why-your-content-does-not-compound"],
      useCases: ["plan-a-year-of-content"],
    },
    close: close(
      "One argument a month",
      "Content that accumulates into a position is worth more than content that accumulates into a volume. Join our waitlist for early access.",
    ),
  },

  "offer-architecture": {
    lead:
      "Designs the ladder from a free entry point through a low-commitment step to the core paid offer, and defines what has to be true before someone moves up a rung.",
    explain: [
      s(
        "The qualifying step is what makes it a ladder",
        "Without a defined signal that someone is ready to move up — a completed session, a result achieved, a specific question asked — the rungs are a price list. Naming the signal is what allows the follow-up to be built around it.",
      ),
      s(
        "Three rungs is usually the honest number",
        "Each additional rung has to be explained, delivered and maintained. Most businesses find the returns stop at the third, and a ladder with seven steps tends to describe an aspiration rather than a working path.",
      ),
    ],
    connects:
      "The ladder determines what the Lead Magnet Builder produces, what the Promotional Calendar spaces, and which offer each campaign points at. It also sets the payback arithmetic Growth Signal reports against.",
    related: {
      guides: ["offer-ladder-framework"],
      articles: ["price-objections-are-rarely-about-price"],
      useCases: ["build-a-lead-magnet"],
    },
    close: close(
      "A path from stranger to customer",
      "Asking a stranger to make your largest decision first is why most enquiries stall. Join our waitlist to see the ladder Mengo designs for your offer.",
    ),
  },

  "competitor-context": {
    lead:
      "Maps the claims your category already makes, identifies which have become table stakes rather than differentiators, and points at the space where your positioning can still say something distinct.",
    explain: [
      s(
        "It maps claims, not companies",
        "The output is a picture of the language your buyer has already heard, which is what determines whether your claim registers. It is deliberately not a competitor scorecard, because a scorecard invites feature comparison and feature comparison rarely wins a small business anything.",
      ),
      s(
        "Table stakes are the useful finding",
        "Discovering that four of your five differentiators are claimed by everyone in your category is uncomfortable and immediately actionable. It moves the positioning conversation to the axis where you can genuinely be different.",
      ),
    ],
    connects:
      "It feeds the Positioning Generator directly, and it supplies the honest characterisation that comparison content depends on. Editorial Guardrails prevent it from generating claims about a competitor that you cannot evidence.",
    related: {
      guides: ["positioning-framework"],
      articles: ["your-positioning-is-a-description"],
      comparisons: ["mengo-vs-doing-it-yourself"],
    },
    close: close(
      "Know what has already been said",
      "Positioning written without knowing the category conversation tends to land on a claim four competitors already make. Join our waitlist for early access.",
    ),
  },

  "seasonality-planning": {
    lead:
      "Maps your demand pattern — from your own history where you have it, from category behaviour where you do not — and shapes the intensity of the calendar around the months that genuinely behave differently.",
    explain: [
      s(
        "Preparation is scheduled backwards",
        "Work that supports a peak has to happen before it, during a period with capacity. Planning forwards from today reliably produces campaigns that arrive in the busiest fortnight of the year, which is when they get abandoned.",
      ),
      s(
        "Quiet months are production windows",
        "The trough is when evergreen assets, list hygiene and next year's planning can actually be done. Treating it as downtime rather than as capacity is the most common and most expensive seasonal mistake.",
      ),
    ],
    connects:
      "Seasonality shapes the 365-Day Calendar's intensity and tells the Promotional Calendar when offers will land badly. It also decides when List Hygiene work is scheduled, since that work never survives a peak.",
    related: {
      guides: ["seasonal-planning-playbook"],
      articles: ["what-quiet-months-are-for"],
      useCases: ["plan-a-seasonal-campaign"],
    },
    close: close(
      "Plan around the year you actually have",
      "Every business has a shape to its year. Join our waitlist and have the calendar built around yours rather than around twelve equal months.",
    ),
  },

  /* ---------------- Content Studio ---------------- */

  "asset-library": {
    lead:
      "Every format Mengo produces is a defined structure with its own anatomy, length rules and success conditions, so a carousel is generated as a carousel rather than as an article cut into slides.",
    explain: [
      s(
        "What a format definition contains",
        "The anatomy — what has to be in each part and why — the specification it must respect, and the inputs the business has to supply for it to be produced well. That last part is what determines whether the output is usable or plausible.",
      ),
      s(
        "Why the library is large",
        "Formats are not interchangeable containers. A LinkedIn poll, a WhatsApp reply script and a negative keyword plan have almost nothing structurally in common, and treating them as variations of one text generator is precisely what makes AI content read as AI content.",
      ),
    ],
    connects:
      "Channel Ranking decides which parts of the library are in scope. Content Briefs choose a format per slot, and the Repurposing Engine uses format anatomy to re-argue one idea natively in several places.",
    related: {
      guides: ["content-brief-template"],
      articles: ["write-for-the-format"],
      useCases: ["repurpose-one-idea-into-ten"],
    },
    close: close(
      "Formats, not templates",
      "Browse the library and you will see the structures Mengo writes to. Join our waitlist to see them produced against your brief.",
    ),
  },

  "voice-profile": {
    lead:
      "Stores your vocabulary, sentence rhythm, formality, humour tolerance and the claims you are prepared to make, then constrains every generated asset against it so a year of output reads as one business.",
    explain: [
      s(
        "The banned list does the most work",
        "Positive descriptions of voice are hard to apply consistently. A specific list of words and constructions you will not use is immediately enforceable and removes most of what makes generated content sound generic.",
      ),
      s(
        "Tone varies inside a fixed voice",
        "A launch email and an apology should be recognisably from the same business without being written identically. Tone settings sit per asset type inside the profile, which is what allows register to move while voice stays put.",
      ),
    ],
    connects:
      "The profile constrains everything Content Studio produces and everything Lead Nurturing writes. Editorial Guardrails handle what may be claimed; the Voice Profile handles how anything is said.",
    related: {
      guides: ["voice-profile-worksheet"],
      articles: ["ai-content-sounds-the-same"],
      useCases: ["document-your-brand-voice"],
    },
    close: close(
      "One voice, held across a year",
      "Voice that lives in one person's head cannot be delegated to anyone, software included. Join our waitlist and write it down once.",
    ),
  },

  "hook-writer": {
    lead:
      "Generates openings against the specific mechanics of the platform and the angle of the slot, then ranks them by the tension they create rather than by how clever the phrasing is.",
    explain: [
      s(
        "Options differ by angle, not by wording",
        "Five rewordings of one opening produce five similar results and no information. A contrast, a number, an admitted mistake, a question and a demonstration are five different arguments, and which one wins tells you something about your audience.",
      ),
      s(
        "It will not write a hook the asset cannot pay off",
        "Guardrails reject openings that promise more than the body delivers. That constraint costs a little short-term performance and protects the thing that actually compounds, which is whether people open the next one.",
      ),
    ],
    connects:
      "Hooks are generated with the asset they belong to, from the same Content Brief, and scored afterwards by Content Performance against the job the slot assigned rather than against raw reach.",
    related: {
      guides: ["linkedin-founder-playbook", "instagram-reels-playbook"],
      articles: ["hooks-are-not-clickbait"],
      assetTypes: ["reel-hook-set", "tiktok-hook-set"],
    },
    close: close(
      "The line that decides the rest",
      "On a feed the opening is the whole decision, and it is the part most people write last. Join our waitlist for early access.",
    ),
  },

  "long-form-drafting": {
    lead:
      "Drafts articles and long pages outline first — the claim, the sections that carry it, the evidence each section needs — and only then the prose, so the finished piece has a spine rather than a word count.",
    explain: [
      s(
        "Structure before sentences",
        "Most weak long-form is structurally weak: it arrives at its point three sections late, or makes four arguments where one would have persuaded. Fixing that at outline stage is cheap; fixing it in the draft is a rewrite.",
      ),
      s(
        "Evidence is requested, not invented",
        "Each section names what it needs to be credible. Where that is a figure, a case or a source only you hold, the outline asks for it and marks the gap rather than producing a confident sentence with nothing behind it.",
      ),
    ],
    connects:
      "It draws its claim from the month's theme and its structure from the format anatomy in the Asset Library. Internal links are planned at outline stage rather than retrofitted after publication.",
    related: {
      guides: ["content-brief-template"],
      articles: ["write-for-the-format"],
      assetTypes: ["seo-article", "comparison-article"],
    },
    close: close(
      "An argument with a shape",
      "Long-form that holds together is an outlining problem before it is a writing problem. Join our waitlist for early access.",
    ),
  },

  "short-form-scripts": {
    lead:
      "Writes video as timed beats — the spoken line, the on-screen text and the visual cue for each — so what gets recorded matches what was planned and the edit does not have to rescue the structure.",
    explain: [
      s(
        "Generated against what you can film",
        "Scripts requiring a second person, three locations or equipment you do not own are scripts that never get made. Mengo generates against the production capacity you declared, which is why the results tend to specify a desk, a screen or one prop.",
      ),
      s(
        "The caption layer is written separately",
        "A verbatim transcript is hard to read at speed. Writing on-screen text as its own layer, in shorter units than the spoken line, is what makes a video comprehensible with the sound off — which is how a large share of it will be watched.",
      ),
    ],
    connects:
      "Scripts are produced with a hook set from the Hook Writer and scored by Content Performance against watch-through rather than reach, since that is the signal that governs distribution on short-form platforms.",
    related: {
      guides: ["instagram-reels-playbook"],
      articles: ["write-for-the-format"],
      assetTypes: ["instagram-reel-script", "tiktok-script"],
    },
    close: close(
      "Scripts you can actually shoot",
      "The best script you will not film is worth less than the adequate one you will. Join our waitlist for early access.",
    ),
  },

  "carousel-builder": {
    lead:
      "Plans carousels frame by frame as a sequence where each slide opens a small loop the next one closes, with the frame count set by the argument rather than by a default of ten.",
    explain: [
      s(
        "Swipes are earned, not assumed",
        "A slide that completes its thought gives the reader permission to stop. The structure Mengo builds sets up the next slide on the current one, which is a writing decision and the reason cut-up articles fail as carousels.",
      ),
      s(
        "The cover competes as a still image",
        "In a feed the first slide is judged as a photograph. It has to state a specific outcome in type readable at thumbnail size, and if it does not, the quality of the following eight slides is irrelevant.",
      ),
    ],
    connects:
      "The builder works from the underlying claim supplied by the Content Brief rather than from a finished draft, which is what the Repurposing Engine relies on when the same idea also runs as an article or a post.",
    related: {
      guides: ["linkedin-founder-playbook"],
      articles: ["repurposing-is-not-reposting"],
      assetTypes: ["linkedin-carousel", "instagram-carousel"],
    },
    close: close(
      "A reason to reach the last slide",
      "Carousels fail structurally far more often than they fail visually. Join our waitlist for early access.",
    ),
  },

  "email-copywriting": {
    lead:
      "Generates the subject line, preview text and opening paragraph together as a single promise, then writes the body to deliver exactly what that promise implied.",
    explain: [
      s(
        "Three elements, one unit",
        "Subject and preview are read together in an inbox, and the first line is read immediately after. Writing them separately produces the common failure where the subject wins the open and the opening paragraph starts somewhere unrelated.",
      ),
      s(
        "One action, sized to commitment",
        "Every email closes on a single next step chosen against how much the reader currently trusts you. A request for a call in message two of a nurture sequence is the same mistake as a request for a reply in the confirmation email.",
      ),
    ],
    connects:
      "Email copy inherits its objection from Objection Mapping and its timing from Cadence Planning, so a message knows both what it is for and where it sits in the arc before it is written.",
    related: {
      guides: ["email-newsletter-playbook", "welcome-sequence-template"],
      articles: ["the-follow-up-gap"],
      assetTypes: ["nurture-email", "newsletter-issue"],
    },
    close: close(
      "The promise and the payoff, written together",
      "Most email underperformance happens in the gap between the subject line and the first sentence. Join our waitlist for early access.",
    ),
  },

  "lead-magnet-builder": {
    lead:
      "Produces genuinely usable assets — checklists, calculators, templates, diagnostic frameworks — scoped to solve one narrow problem completely rather than one large problem partially.",
    explain: [
      s(
        "Narrow is a design decision",
        "A one-page checklist that solves a specific problem this week outperforms a forty-page guide that solves a category of problems eventually. The comprehensive version is slower to make, slower to consume, and rarely finished.",
      ),
      s(
        "The sequence is produced with it",
        "A magnet with no follow-up produces a list of people who received one thing and heard nothing more. The welcome sequence is generated alongside the asset, because the magnet is what makes the first email relevant.",
      ),
    ],
    connects:
      "The magnet sits on the bottom rung of the Offer Architecture, and its landing page copy and welcome sequence are generated at the same time so the promise stays consistent across all three.",
    related: {
      guides: ["welcome-sequence-template", "offer-ladder-framework"],
      articles: ["the-lead-magnet-nobody-wanted"],
      useCases: ["build-a-lead-magnet"],
    },
    close: close(
      "Worth the email address",
      "A weak magnet trains the recipient to ignore everything that follows, which makes it worse than having none. Join our waitlist for early access.",
    ),
  },

  "repurposing-engine": {
    lead:
      "Takes the underlying idea rather than the finished asset and re-argues it in each format's native structure, so the same point lands differently in a carousel, a script and an article.",
    explain: [
      s(
        "It works from the claim, not the draft",
        "Reformatting a finished piece produces content that visibly belongs somewhere else. Returning to the argument and writing it natively for the next format is more work and it is the only version that reads as though it was written for the place it appears.",
      ),
      s(
        "Repurposing is reach, not economy",
        "The audience overlap between a newsletter and a short video is smaller than most businesses assume. The point is reaching people who were never going to encounter the first version, which is also why quality cannot be traded away in the second.",
      ),
    ],
    connects:
      "It reads format anatomy from the Asset Library and slot context from the Content Brief, and it is scheduled by the calendar so the second and third expressions of an idea are planned rather than opportunistic.",
    related: {
      guides: ["content-brief-template"],
      articles: ["repurposing-is-not-reposting"],
      useCases: ["repurpose-one-idea-into-ten"],
    },
    close: close(
      "One idea, written properly four times",
      "The version of repurposing that reads as automation is the version that starts from the draft. Join our waitlist for early access.",
    ),
  },

  "batch-approval": {
    lead:
      "Delivers a week or a month of content at once in a review view that shows the theme, the segment and the funnel stage beside each asset, so approving is a short sitting rather than a daily interruption.",
    explain: [
      s(
        "Context is what makes review fast",
        "Judging an asset in isolation is slow, because the first question is always what this was for. Showing the slot's job next to the draft turns most decisions into a few seconds of reading.",
      ),
      s(
        "Batching beats a daily habit",
        "A month approved in one sitting survives a busy quarter. Twenty minutes every morning does not, and the failure is not discipline — it is that a daily commitment competes with client work every single day.",
      ),
    ],
    connects:
      "Batch Approval sits between Content Studio and publication, and the decisions made in it feed Content Performance, which scores each asset against the job shown beside it during review.",
    related: {
      guides: ["marketing-system-playbook"],
      articles: ["batching-beats-daily", "the-quiet-period-you-are-waiting-for"],
      useCases: ["produce-a-month-of-content"],
    },
    close: close(
      "A month in one sitting",
      "The sustainable version of consistency is a monthly review, not a daily habit. Join our waitlist for early access.",
    ),
  },

  "content-briefs": {
    lead:
      "Expands each calendar slot into a writable brief: the audience, the claim, the evidence needed, the format anatomy, the call to action and what a good version of this asset would actually achieve.",
    explain: [
      s(
        "The brief is what stops the blank page",
        "Producing an asset from a brief is execution. Producing one from a slot with a date on it is invention, performed daily, which is the cost that actually stops most marketing rather than the writing itself.",
      ),
      s(
        "It names what it cannot supply",
        "Where a section needs a number, a customer example or a piece of evidence only your business holds, the brief requests it. That request is more useful than a confident sentence generated in its place.",
      ),
    ],
    connects:
      "Briefs are generated from calendar slots and consumed by every producing capability — drafting, scripts, carousels, email. They are also where internal links are planned, before the asset exists.",
    related: {
      guides: ["content-brief-template"],
      articles: ["the-brief-is-the-bottleneck"],
      useCases: ["brief-a-freelance-writer"],
    },
    close: close(
      "The bottleneck, removed",
      "A brief is also what makes delegation possible — to a freelancer, a new hire, or software. Join our waitlist for early access.",
    ),
  },

  "editorial-guardrails": {
    lead:
      "Restricts factual and numerical claims to what you supplied, blocks regulated language for your industry, and marks anything unsourced as a gap for you to fill rather than generating a plausible substitute.",
    explain: [
      s(
        "The risk is fluency, not error",
        "Clumsy generated prose is visible and gets fixed. A confident, specific, invented claim published under your name is neither, and it is the failure mode that actually costs a business something.",
      ),
      s(
        "Sector rules are configured once",
        "Health, finance, legal and childcare each carry language that cannot be used regardless of how well it converts. Encoding those constraints once is considerably safer than relying on a reviewer to catch them every time.",
      ),
    ],
    connects:
      "Guardrails apply to everything Content Studio, Campaign Lab and Lead Nurturing produce. Where the Voice Profile governs how something is said, guardrails govern what may be said at all.",
    related: {
      guides: ["ai-content-guardrails-checklist"],
      articles: ["the-hallucination-that-matters", "should-you-disclose-ai"],
      industries: ["healthcare", "financial-services"],
    },
    close: close(
      "The claim you never made",
      "Every generated claim resolves to something you supplied, or it is flagged. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Campaign Lab ---------------- */

  "campaign-briefs": {
    lead:
      "Refuses to generate anything until the offer, the audience, the window and the success condition are all stated — then produces the entire campaign from those four answers.",
    explain: [
      s(
        "The refusal is the feature",
        "Campaigns that begin with creative become a set of posts with a discount attached. The four decisions take under an hour and determine whether anything produced afterwards can be evaluated at all.",
      ),
      s(
        "The success condition has to be checkable",
        "More awareness is not a success condition. A number of enquiries, a number of bookings, a proportion of a segment reached — something that can be looked at afterwards and answered yes or no. It is also what the retrospective scores against.",
      ),
    ],
    connects:
      "The brief drives Channel Sequencing, the Launch Checklist, landing page copy and every email in the arc, and it is the document Campaign Retrospectives compare the outcome against.",
    related: {
      guides: ["launch-checklist"],
      articles: ["what-quiet-months-are-for"],
      useCases: ["run-a-product-launch", "plan-a-seasonal-campaign"],
    },
    close: close(
      "Four decisions before anything is written",
      "A campaign without an end condition quietly becomes your permanent baseline. Join our waitlist for early access.",
    ),
  },

  "channel-sequencing": {
    lead:
      "Assigns awareness, consideration and conversion to the channels that actually carry them for your business, and makes the handoff between stages explicit rather than assumed.",
    explain: [
      s(
        "Not every channel does every job",
        "A channel that builds recognition efficiently may convert badly, and asking it to do both produces a campaign that underperforms on the metric it was never suited to. Sequencing puts each stage where it works.",
      ),
      s(
        "The handoff is where campaigns leak",
        "Someone who saw the awareness content and never encountered the consideration material has no route forward. Naming the transition — what moves someone from one stage to the next, and where — is the step most campaign plans omit.",
      ),
    ],
    connects:
      "Sequencing works inside the Channel Ranking's committed set, and it decides which asset formats the campaign needs. The Launch Checklist then derives the production list from that decision.",
    related: {
      guides: ["channel-selection-framework", "launch-checklist"],
      articles: ["be-everywhere-is-bad-advice"],
      useCases: ["run-a-product-launch"],
    },
    close: close(
      "Each stage where it works",
      "Campaigns rarely fail on a single channel; they fail in the gap between two. Join our waitlist for early access.",
    ),
  },

  "launch-checklists": {
    lead:
      "Generates the complete list of assets, pages, links and settings a campaign needs, each with an owner and a due date derived backwards from the launch date.",
    explain: [
      s(
        "Derived, not templated",
        "The list comes from the campaign brief and the channel sequence, so a webinar launch and a seasonal promotion produce genuinely different checklists rather than the same one with items crossed out.",
      ),
      s(
        "Dates work backwards from launch",
        "An item due the week of launch is an item that will not be done. Scheduling backwards exposes the assets that need to exist three weeks earlier, which is the information a checklist ordered by category never surfaces.",
      ),
    ],
    connects:
      "The checklist is generated from the Campaign Brief and Channel Sequencing, and it is what makes Decision Rules operable — the tracking and thresholds have to be in place before launch, not after.",
    related: {
      guides: ["launch-checklist"],
      articles: ["speed-is-a-conversion-strategy"],
      useCases: ["run-a-product-launch", "prepare-for-a-trade-show"],
    },
    close: close(
      "Nothing launches with a missing page",
      "The most common launch failure is an asset nobody was assigned. Join our waitlist for early access.",
    ),
  },

  "landing-page-copy": {
    lead:
      "Writes the page against the single decision it exists to produce, with each section earning its place by removing one specific reason not to act.",
    explain: [
      s(
        "Sections are justified by objections",
        "A page section added because the page felt short adds length without persuasion. Mapping each section to a named hesitation from the objection map is what produces a page that is as long as it needs to be and no longer.",
      ),
      s(
        "The action is repeated in identical words",
        "Varying the phrasing of the same call to action reads as several different actions and reintroduces the hesitation the previous section removed. Consistency here is worth more than variety.",
      ),
    ],
    connects:
      "Copy is generated from the Campaign Brief's single decision and the segment's objection map, and it is the destination that Ad Concepting and search ad copy are written against, so the promise stays consistent through the click.",
    related: {
      guides: ["landing-page-checklist", "objection-map-template"],
      articles: ["your-landing-page-asks-for-too-much", "forms-that-lose-you-money"],
      useCases: ["write-landing-page-copy"],
    },
    close: close(
      "One page, one decision",
      "Pages that ask for several things at once tend to get none of them. Join our waitlist for early access.",
    ),
  },

  "ad-concepting": {
    lead:
      "Generates concepts that vary the claim, the angle and the format deliberately, so a test tells you something about your market rather than about your choice of adjectives.",
    explain: [
      s(
        "One claim per concept",
        "A concept carrying three arguments produces a result nobody can interpret. Isolating the claim is what makes the winner informative and, more usefully, makes the loser informative too.",
      ),
      s(
        "Angles come from segments and objections",
        "Each concept enters through a problem a specific segment actually has, which is why the set is usually four to six rather than twenty. Angles that address the same problem in different words cannot be told apart by a test.",
      ),
    ],
    connects:
      "Concepts are written against the landing page they point at and the objection map for the segment being targeted. Results feed the Experiment Log so the same angle is not retried in a year's time.",
    related: {
      guides: ["launch-checklist"],
      articles: ["testing-adjectives-teaches-nothing"],
      assetTypes: ["meta-ad-creative-brief", "offer-angle-set"],
    },
    close: close(
      "Tests that teach you something",
      "Varying the wording produces a winner you cannot explain and cannot reuse. Join our waitlist for early access.",
    ),
  },

  "promotional-calendars": {
    lead:
      "Sits over the content calendar, spaces offers against your buying cycle, and flags when a segment is being asked to buy too often by campaigns that were each planned in isolation.",
    explain: [
      s(
        "Offers cluster when planned one at a time",
        "Each individual promotion looks reasonable. Four of them in six weeks, all aimed at the audience that is easiest to reach, teaches that audience to wait for the next discount — and nobody decided that should happen.",
      ),
      s(
        "Spacing comes from the buying cycle",
        "The right gap between offers is a function of how long a purchase decision takes in your category, not of how the quarter is going. That is the number the calendar spaces against.",
      ),
    ],
    connects:
      "It reads the buying cycle from the Business Brief and the segments from Audience Segments, and it constrains what Campaign Lab is allowed to schedule against a given audience in a given window.",
    related: {
      guides: ["seasonal-planning-playbook", "offer-ladder-framework"],
      articles: ["what-quiet-months-are-for"],
      useCases: ["plan-a-seasonal-campaign", "announce-a-price-change"],
    },
    close: close(
      "Offers that do not stack",
      "The audience that receives every promotion is usually the one you can least afford to exhaust. Join our waitlist for early access.",
    ),
  },

  "decision-rules": {
    lead:
      "Writes the thresholds into the brief before launch: at what point you increase spend, at what point you change the creative, and at what point you stop the campaign entirely.",
    explain: [
      s(
        "Decided in advance, when it is cheap",
        "Every threshold is easier to set before there is a result attached to it. Deciding mid-campaign, with money already spent, is where sunk cost quietly becomes strategy.",
      ),
      s(
        "The stop rule is the one that matters",
        "Rules for scaling up get written; rules for stopping rarely do. Naming the condition under which a campaign ends is what prevents a two-week test from becoming a four-month commitment nobody chose.",
      ),
    ],
    connects:
      "Decision rules are recorded in the Campaign Brief and checked at the Review Cadence. The Launch Checklist ensures the measurement they depend on is in place before the campaign starts.",
    related: {
      guides: ["metric-selection-framework", "launch-checklist"],
      articles: ["stop-measuring-everything"],
      useCases: ["diagnose-a-funnel-drop"],
    },
    close: close(
      "Agree the stop condition first",
      "A threshold set after the spend has started is a justification, not a decision. Join our waitlist for early access.",
    ),
  },

  "campaign-retrospectives": {
    lead:
      "Scores the campaign against the success condition written in its own brief, separates what the offer did from what the execution did, and writes the lesson into the next brief.",
    explain: [
      s(
        "Offer and execution fail differently",
        "A campaign can be well executed for an offer nobody wanted, or badly executed for a good one. Separating the two is what stops a business rewriting the creative when the problem was the price, and vice versa.",
      ),
      s(
        "The lesson has to land somewhere",
        "A retrospective that ends in a document is a retrospective that gets rediscovered. Writing the conclusion into the next campaign brief is what makes the learning operational rather than archival.",
      ),
    ],
    connects:
      "The retrospective reads the Campaign Brief's success condition and feeds the Experiment Log, which is what stops the same approach being retried after the people who ran it have moved on.",
    related: {
      guides: ["monthly-review-template"],
      articles: ["testing-adjectives-teaches-nothing", "the-cost-of-restarting"],
      useCases: ["run-a-monthly-marketing-review"],
    },
    close: close(
      "Judged against its own promise",
      "A campaign scored against a condition invented afterwards can always be described as a success. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Lead Nurturing ---------------- */

  "intent-segmentation": {
    lead:
      "Segments contacts by observed behaviour — what they downloaded, what they asked, how far they got — and writes a different sequence for each level of intent rather than one sequence for everyone.",
    explain: [
      s(
        "Behaviour is available before intent is stated",
        "Almost nobody announces that they are evaluating. What they do instead is return, read further, forward something or reply, and those actions are already recorded in systems you have.",
      ),
      s(
        "It changes the message, not the frequency",
        "The point of separating high-intent contacts is not to email them more. It is to send them something different: specifics, objections and a next step sized to where they are rather than to where the sequence has reached.",
      ),
    ],
    connects:
      "Intent levels decide which sequence the Sequence Builder routes a contact into, and they feed the Lead Scoring Model, which is the same behavioural evidence expressed as an order of operations.",
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["the-follow-up-gap"],
      useCases: ["qualify-leads-before-a-call"],
    },
    close: close(
      "Follow-up that reads the room",
      "A hesitant reader and a ready buyer receiving the same email is the most common reason both go quiet. Join our waitlist for early access.",
    ),
  },

  "sequence-builder": {
    lead:
      "Writes the entire follow-up arc — every message, its job, its timing and its exit condition — so following up is a system rather than something remembered on a good day.",
    explain: [
      s(
        "The whole arc, not the first message",
        "Most businesses have message one. The value is in messages three through seven, which are the ones that arrive during the weeks when a decision is actually being made and nobody has the capacity to write them.",
      ),
      s(
        "Every sequence has an exit",
        "A sequence with no defined end pursues people indefinitely and damages the list it runs on. Each arc specifies what removes someone from it — a reply, a booking, a threshold of silence — before it is generated.",
      ),
    ],
    connects:
      "Sequences take their objection from Objection Mapping, their timing from Cadence Planning and their audience from Intent Segmentation, and they hand a contact who reaches a call to Sales Handoff Notes.",
    related: {
      guides: ["lead-nurture-blueprint", "welcome-sequence-template"],
      articles: ["the-follow-up-gap"],
      useCases: ["follow-up-with-every-enquiry", "write-a-welcome-sequence"],
    },
    close: close(
      "The messages after the first one",
      "Most enquiries are lost to silence rather than to competitors. Join our waitlist and tell us where yours currently go quiet.",
    ),
  },

  "objection-mapping": {
    lead:
      "Maps the hesitations that actually stop your buyers — price, timing, trust, switching cost, internal approval — and assigns each message in a sequence exactly one of them to dissolve.",
    explain: [
      s(
        "One objection per message",
        "Sequences fail when each email restates the pitch. Assigning a single hesitation gives the message somewhere to go and gives the reader a reason to open the next one, because the sequence is visibly progressing.",
      ),
      s(
        "The stated objection is often a proxy",
        "Price is the most commonly stated reason and frequently stands in for uncertainty about outcome, timing or internal approval. The map separates the two so the message answers the real blocker.",
      ),
    ],
    connects:
      "The map is built per audience segment, drives the order of the nurture arc, and supplies the section structure for landing pages and FAQ pages — the same hesitations, answered in a different format.",
    related: {
      guides: ["objection-map-template"],
      articles: ["price-objections-are-rarely-about-price", "the-internal-champion-problem"],
      useCases: ["handle-price-objections"],
    },
    close: close(
      "Answer the actual hesitation",
      "Follow-up that repeats the pitch louder gives a hesitant buyer nothing new to change their mind with. Join our waitlist for early access.",
    ),
  },

  "cadence-planning": {
    lead:
      "Sets the follow-up rhythm from your buying cycle: intervals widen as the decision lengthens, and the total window is capped so nobody is pursued indefinitely.",
    explain: [
      s(
        "Length is derived, not defaulted",
        "A three-email sequence against a four-month decision stops talking to people three months before they choose. The cycle you reported in the brief is what sets both the number of touches and the gaps between them.",
      ),
      s(
        "The cap is a courtesy and a strategy",
        "Contacts pursued past the point of interest unsubscribe, complain, or quietly damage your deliverability. Ending the sequence and moving them to a slower rhythm preserves both the relationship and the list.",
      ),
    ],
    connects:
      "Cadence reads the buying cycle from the Business Brief, paces every Sequence Builder arc, and coordinates with the Promotional Calendar so a nurture sequence and a campaign do not arrive on the same day.",
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["how-much-marketing-is-enough"],
      useCases: ["follow-up-with-every-enquiry"],
    },
    close: close(
      "Paced to the decision, not to a default",
      "Software defaults are built for software buying cycles. Join our waitlist and have yours paced against your own.",
    ),
  },


  "reengagement-flows": {
    lead:
      "Re-opens the conversation with stalled contacts using a genuine reason to make contact rather than a check-in, and ends with an explicit decision to keep them or archive them.",
    explain: [
      s(
        "A reason, not a plea",
        "Asking whether someone still wants to hear from you gives them nothing to react to. Arriving with something new and specific — a change, a result, a piece of work — is what actually re-opens a dormant relationship.",
      ),
      s(
        "The archive step is the point",
        "Recovery is only half the value. Contacts who do not respond to a direct approach are suppressed, which improves delivery for everyone still reading and makes every subsequent number honest.",
      ),
    ],
    connects:
      "Re-engagement is scheduled by Seasonality Planning into quiet periods and paired with List Hygiene, so the suppression rules the flow depends on already exist when it runs.",
    related: {
      guides: ["reengagement-playbook"],
      articles: ["the-cost-of-restarting"],
      useCases: ["revive-a-cold-list", "win-back-churned-customers"],
    },
    close: close(
      "The leads you already paid for",
      "A quiet list is usually cheaper to work than a new audience is to acquire. Join our waitlist for early access.",
    ),
  },

  "whatsapp-sequences": {
    lead:
      "Writes for a channel where every message is a notification on a personal device: shorter, in the second person, paced carefully, and structured to invite a reply rather than a click.",
    explain: [
      s(
        "A reply is what the channel is good at",
        "Closing a WhatsApp message with a link wastes its single advantage. Ending on a question someone can answer in one line converts far better and starts the conversation the channel exists to enable.",
      ),
      s(
        "It asks who is available to answer",
        "A sequence inviting replies into an unmonitored number is worse than no sequence. Mengo asks about reply capacity before generating one and paces the arc against that answer.",
      ),
    ],
    connects:
      "WhatsApp sequences draw on the same objection map as the email arc but are rewritten for the medium, and they are counted against the frequency cap the Promotional Calendar maintains per segment.",
    related: {
      guides: ["whatsapp-nurture-playbook"],
      articles: ["speed-is-a-conversion-strategy"],
      industries: ["real-estate", "healthcare"],
    },
    close: close(
      "Written for a phone, not an inbox",
      "An email reformatted for WhatsApp reads exactly like an email reformatted for WhatsApp. Join our waitlist for early access.",
    ),
  },

  "sales-handoff-notes": {
    lead:
      "Gives every contact who reaches a call a short note: what they responded to, which objection they engaged with, and the two questions worth opening the conversation with.",
    explain: [
      s(
        "It removes the repeated questions",
        "A qualifying call that starts from nothing asks things the contact has already answered through their behaviour. Opening from what they actually read is both faster and a visible signal that someone was paying attention.",
      ),
      s(
        "Two questions, not a script",
        "The note suggests where to start rather than how to run the call. Anything longer gets skimmed, and a conversation conducted from a script is the thing the note exists to avoid.",
      ),
    ],
    connects:
      "Notes are assembled from Intent Segmentation and the Lead Scoring Model, and what happens after the call feeds back as the objection actually raised, which the follow-up email is then written against.",
    related: {
      guides: ["lead-nurture-blueprint"],
      articles: ["speed-is-a-conversion-strategy", "the-internal-champion-problem"],
      useCases: ["qualify-leads-before-a-call"],
    },
    close: close(
      "Start where their research stopped",
      "The gap between marketing and the first conversation is where most context is lost. Join our waitlist for early access.",
    ),
  },

  "lead-scoring-model": {
    lead:
      "Scores contacts on the actions that correlate with buying in your business, keeps the model small enough to explain, and shows the reason behind every number.",
    explain: [
      s(
        "Behaviour, not resemblance",
        "Scores built from company size and job title measure how much a contact looks like a customer. Scores built from what they did measure whether they are acting like one, which is both a better predictor and cheaper to maintain.",
      ),
      s(
        "A score you can disagree with",
        "A number arriving without a reason gets ignored by whoever is making the calls. Showing what drove it lets the person following up override it deliberately, which is the only way a model survives contact with real use.",
      ),
    ],
    connects:
      "The model is fed by Intent Segmentation and consumed by Sales Handoff Notes. Its threshold is set against your actual follow-up capacity rather than against a target number of qualified leads.",
    related: {
      guides: ["lead-nurture-blueprint", "metric-selection-framework"],
      articles: ["the-follow-up-gap"],
      useCases: ["qualify-leads-before-a-call"],
    },
    close: close(
      "Small enough to explain",
      "A scoring model nobody understands is a scoring model nobody uses. Join our waitlist for early access.",
    ),
  },

  "list-hygiene": {
    lead:
      "Defines the rules for suppression, re-permission and archiving, and schedules the work into the periods where it can actually be done rather than leaving it permanently deferred.",
    explain: [
      s(
        "Reach is the asset, not list size",
        "Sending to contacts who never open is evidence against you with every mailbox provider, and the damage lands on delivery to the people who were still reading. Removing them improves reach for everyone who remains.",
      ),
      s(
        "Scheduled, because nobody does it voluntarily",
        "Suppression reduces a number most businesses are attached to, which is why it never happens during a busy quarter. Placing it in a defined window is the difference between a policy and an intention.",
      ),
    ],
    connects:
      "Hygiene rules are what Re-engagement Flows end in, and they are scheduled by Seasonality Planning into the quiet months. Growth Signal reports against the engaged list rather than the total.",
    related: {
      guides: ["reengagement-playbook"],
      articles: ["what-quiet-months-are-for"],
      useCases: ["revive-a-cold-list"],
    },
    close: close(
      "Protect the people who still read",
      "A smaller list that reaches the inbox is worth more than a large one that does not. Join our waitlist for early access.",
    ),
  },

  /* ---------------- Growth Signal ---------------- */

  "metric-selection": {
    lead:
      "Selects a small metric set from your business model — typically one demand number, one conversion number and one retention number — and names explicitly what you should stop watching.",
    explain: [
      s(
        "Every metric carries a decision",
        "A number with no action attached is a number that gets reported and ignored. Each metric in the set comes with what you would do if it moved, which is also the test for whether it belongs in the set.",
      ),
      s(
        "The stop list is half the output",
        "Dashboards accumulate. Naming the numbers you are deliberately not watching is what makes a fifteen-minute weekly review possible, and it is the part most measurement advice omits.",
      ),
    ],
    connects:
      "The set is chosen from the business model in the brief and reviewed at the Review Cadence. It is also what Decision Rules reference, since a threshold needs a metric that is actually being watched.",
    related: {
      guides: ["metric-selection-framework"],
      articles: ["stop-measuring-everything"],
      useCases: ["decide-what-to-measure"],
    },
    close: close(
      "Three numbers, each with a decision",
      "Most marketing dashboards are a record of what was easy to measure. Join our waitlist for early access.",
    ),
  },

  "review-cadence": {
    lead:
      "Separates the rhythm into three: weekly for execution, monthly for channel mix, quarterly for strategy — each with a fixed agenda short enough that it still happens in a bad week.",
    explain: [
      s(
        "Different questions on different clocks",
        "Reconsidering strategy weekly produces a plan that never runs long enough to be judged. Reviewing execution quarterly means problems persist for months. Separating the clocks is what lets both happen properly.",
      ),
      s(
        "The test is your worst week",
        "A review that requires an hour of preparation does not survive a busy month. Fifteen minutes against a fixed agenda does, and a review that happens badly is worth considerably more than one that happens rarely.",
      ),
    ],
    connects:
      "The weekly review reads the metric set, the monthly reads channel performance and attribution, and the quarterly revisits positioning, channel ranking and the marketing mix. Reporting Templates fix the shape of each.",
    related: {
      guides: ["monthly-review-template", "marketing-system-playbook"],
      articles: ["stop-measuring-everything"],
      useCases: ["run-a-monthly-marketing-review"],
    },
    close: close(
      "A review that survives a busy month",
      "The review rhythm that works is the one short enough to be trivial. Join our waitlist for early access.",
    ),
  },

  "channel-attribution": {
    lead:
      "Works to the level of attribution your business can honestly support, states the uncertainty plainly, and shows what would have to be true for the decision to change.",
    explain: [
      s(
        "Enough to decide, not enough to prove",
        "Most small businesses need to know which two or three channels deserve continued investment. That is answerable with rough data. Building a model precise enough to allocate credit per touch is a project that outlives its usefulness.",
      ),
      s(
        "Ask the buyer as well as the analytics",
        "One open question at enquiry recovers what no tracking configuration can, particularly for word of mouth and offline discovery. It is the cheapest attribution improvement available and it is usually missing.",
      ),
    ],
    connects:
      "Attribution informs the quarterly Channel Ranking review and is reported as a range — first-touch beside last-touch — rather than as a single figure that would imply more certainty than exists.",
    related: {
      guides: ["metric-selection-framework", "marketing-audit-checklist"],
      articles: ["stop-measuring-everything"],
      useCases: ["decide-what-to-measure"],
    },
    close: close(
      "Honest about what the data supports",
      "Waiting for perfect attribution means deciding by intuition for years while the tracking project continues. Join our waitlist for early access.",
    ),
  },

  "funnel-diagnostics": {
    lead:
      "Locates the step with the largest drop relative to what that step type should achieve, and names the specific fix for that step rather than recommending more volume.",
    explain: [
      s(
        "Compare a step to its own kind",
        "A landing page and an article convert at different rates because they do different jobs. Benchmarking each step against its type is what turns a set of percentages into a diagnosis.",
      ),
      s(
        "The fix is step-specific",
        "A page that does not convert is a copy problem. Enquiries that do not become calls are usually a speed problem. Calls that do not close are usually an objection problem. Naming the step tells you which kind of work is needed.",
      ),
    ],
    connects:
      "Diagnostics read the metric set and hand their finding to the capability that can act on it — Objection Mapping for a stalling middle, Landing Page Copy for a failing conversion step, Cadence Planning for a slow follow-up.",
    related: {
      guides: ["marketing-audit-checklist", "metric-selection-framework"],
      articles: ["stop-measuring-everything"],
      useCases: ["diagnose-a-funnel-drop"],
    },
    close: close(
      "Find the step, not the symptom",
      "Weak results feel like a traffic problem far more often than they are one. Join our waitlist and describe where things currently stall.",
    ),
  },

  "content-performance": {
    lead:
      "Scores each asset against the job assigned in its brief, so an awareness post and a conversion post are judged on different things and neither is punished for the other's metric.",
    explain: [
      s(
        "The brief is the benchmark",
        "Every slot was assigned a job before the asset was produced. Scoring against that job is what stops a deliberately quiet, deliberately specific piece being read as a failure because it reached fewer people.",
      ),
      s(
        "Patterns matter more than posts",
        "A single asset's numbers are mostly noise at small volumes. What is worth acting on is a format, a theme or a slot type that consistently under-performs its own benchmark across a quarter.",
      ),
    ],
    connects:
      "Performance data flows back into the calendar's format mix and into Campaign Retrospectives, and it is deliberately kept separate from engagement rate, which measures distribution rather than outcome.",
    related: {
      guides: ["metric-selection-framework"],
      articles: ["stop-measuring-everything", "why-your-content-does-not-compound"],
      useCases: ["audit-your-existing-marketing"],
    },
    close: close(
      "Judged on the job it was given",
      "Holding every asset to one number is how the most useful content gets cut. Join our waitlist for early access.",
    ),
  },

  "experiment-log": {
    lead:
      "Records the hypothesis, the change, the window, the result and the conclusion, so what you learned survives a busy quarter and a change of staff.",
    explain: [
      s(
        "Negative results are the valuable entries",
        "Ideas that did not work are the ones that will otherwise be proposed again in eighteen months by someone who was not there. The log is mostly a defence against repeating expensive lessons.",
      ),
      s(
        "The hypothesis has to be written first",
        "A result recorded without the expectation that preceded it can be interpreted to mean almost anything. Writing the expectation down before the change is what makes the conclusion trustworthy later.",
      ),
    ],
    connects:
      "The log receives conclusions from Campaign Retrospectives and Ad Concepting tests, and it is consulted at the quarterly review before anything is proposed as new.",
    related: {
      guides: ["monthly-review-template"],
      articles: ["testing-adjectives-teaches-nothing", "the-cost-of-restarting"],
      useCases: ["run-a-monthly-marketing-review"],
    },
    close: close(
      "Institutional memory, written down",
      "Most small businesses re-run the same experiment every couple of years. Join our waitlist for early access.",
    ),
  },

  "reporting-templates": {
    lead:
      "Fixes the shape of the weekly, monthly and quarterly report, so producing one is a fill-in task and reading one is a comparison rather than a fresh interpretation.",
    explain: [
      s(
        "Same shape, every time",
        "A report whose structure changes each month cannot be compared against the last one. Fixing the shape is what turns a series of reports into a trend you can actually read.",
      ),
      s(
        "One page, or the format is wrong",
        "A monthly report that needs several pages is reporting on too many metrics. The length constraint is a forcing function on the metric set rather than a formatting preference.",
      ),
    ],
    connects:
      "Templates take their content from Metric Selection and their rhythm from Review Cadence, and they are where Channel Attribution's stated uncertainty is presented rather than quietly rounded away.",
    related: {
      guides: ["monthly-review-template", "metric-selection-framework"],
      articles: ["stop-measuring-everything"],
      useCases: ["run-a-monthly-marketing-review"],
    },
    close: close(
      "A page, in the same shape",
      "Reports that change format every month cannot be compared, which is most of what a report is for. Join our waitlist for early access.",
    ),
  },
};
