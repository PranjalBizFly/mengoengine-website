import type { Feature, Bullet, Faq, Slug } from "@/lib/types";

/**
 * Feature entities.
 *
 * Written through `f()` so the shared shape stays terse and every feature is
 * forced to answer the same four questions: what it is called, what it does in
 * one verb phrase, what problem it removes, and by what mechanism.
 */
function f(
  product: Slug,
  slug: Slug,
  title: string,
  short: string,
  problem: string,
  mechanism: string,
  detail: Bullet[],
  faqs: Faq[],
  relatedFeatures: Slug[],
  updated = "2026-08-12",
): Feature {
  return {
    kind: "feature",
    slug,
    title,
    product,
    short,
    problem,
    mechanism,
    detail,
    faqs,
    relatedFeatures,
    updated,
    summary: mechanism,
  };
}

const b = (label: string, body: string): Bullet => ({ label, body });
const q = (q: string, a: string): Faq => ({ q, a });

/* ------------------------------------------------------------------ */
/* Marketing Engine                                                    */
/* ------------------------------------------------------------------ */

const marketingEngine: Feature[] = [
  f(
    "marketing-engine",
    "business-brief",
    "Business Brief",
    "Capture the business in a guided questionnaire",
    "Marketing tools usually start with a blank canvas, which means the quality of everything downstream depends on how well you happen to prompt on the day.",
    "The Business Brief is a structured intake that asks the questions a strategist would ask in a first meeting, and every layer of your plan is generated from those answers rather than from a one-off prompt.",
    [
      b("Written for non-marketers", "Questions ask what you sell and who buys it, not what your ICP or CAC payback window is. Where jargon is unavoidable, it is explained in place."),
      b("Answers are reusable", "The brief is a stored object. Regenerating a calendar six months later reuses it, so your plan does not quietly change personality between sessions."),
      b("Gaps are visible", "Unanswered questions are shown as gaps in the plan rather than silently filled with assumptions, so you know which parts to trust."),
    ],
    [
      q("How long does the brief take?", "You can save partway and finish later; the plan generates from whatever is complete and flags the rest."),
      q("Can I change my answers later?", "Yes, and changing an answer marks the parts of the plan that depended on it as stale so you can regenerate just those."),
    ],
    ["positioning-generator", "audience-segments", "competitor-context"],
  ),
  f(
    "marketing-engine",
    "positioning-generator",
    "Positioning Generator",
    "Turn what you sell into a claim people can repeat",
    "Most small businesses describe what they do accurately and forgettably, which makes every downstream asset a little harder to write and a lot easier to ignore.",
    "The Positioning Generator drafts a value proposition, a message hierarchy and the specific claim each audience segment needs to hear first, then holds that language as the constraint every asset inherits.",
    [
      b("Claim, not adjective", "Positioning is expressed as something a customer could repeat to a colleague, rather than as a list of qualities like innovative or trusted."),
      b("Message hierarchy", "Primary claim, supporting proof and the objection to pre-empt are separated, so a headline and a FAQ answer do not fight each other."),
      b("Versioned", "Positioning changes are versioned. You can see what your messaging said last quarter and why it moved."),
    ],
    [
      q("What if I disagree with the positioning?", "Edit it. The generated version is a starting draft; everything downstream regenerates against whatever you commit to."),
      q("Does it work for a business with several offers?", "Yes. Each offer gets its own claim under one parent positioning, which is what stops a multi-offer business sounding like three different companies."),
    ],
    ["audience-segments", "offer-architecture", "voice-profile"],
  ),
  f(
    "marketing-engine",
    "audience-segments",
    "Audience Segments",
    "Split the market only where the message has to change",
    "Segmentation is either skipped entirely or overdone into personas with names and stock photos that nobody consults again.",
    "Mengo creates segments only where the message genuinely differs, defines each by the situation the buyer is in, and attaches the one objection that segment holds.",
    [
      b("Situations, not personas", "A segment is defined by circumstance and trigger — what just happened that made them start looking — which is far more actionable than demographics."),
      b("Two to four, deliberately", "Mengo resists creating more segments than a small team can write for. Extra splits are suggested as future experiments instead."),
      b("Each carries an objection", "Every segment stores the single thing most likely to stop it converting, and that objection is what nurture sequences are written against."),
    ],
    [
      q("Can I add a segment manually?", "Yes. Manual segments are treated identically to generated ones and flow into the calendar and nurture sequences."),
      q("How does this affect content?", "Every calendar slot is assigned a segment, so a month of content covers your segments in proportion rather than repeatedly addressing the easiest one."),
    ],
    ["positioning-generator", "intent-segmentation", "objection-mapping"],
  ),
  f(
    "marketing-engine",
    "channel-ranking",
    "Channel Ranking",
    "Commit to a primary, a secondary and one experiment",
    "Advice to be on every platform is how a one-person marketing function ends up doing nine things badly and none of them consistently.",
    "Channel Ranking scores every channel against your buying cycle, price point, content capacity and existing traction, then commits you to exactly one primary channel, one secondary and one experiment.",
    [
      b("Scored against your constraints", "A ninety-day considered purchase and an impulse buy rank channels differently. So do a two-hour weekly capacity and a full-time content role."),
      b("Explicit deprioritisation", "The output names the channels you are choosing not to run this quarter, which is the part that actually saves time."),
      b("Reviewed quarterly", "Ranking is revisited on a schedule against what Growth Signal measured, rather than whenever a channel feels stale."),
    ],
    [
      q("What if my primary channel is not working?", "The quarterly review has a defined threshold for demoting a channel, so the decision is made against evidence rather than fatigue."),
      q("Can I run more than three channels?", "You can, and Mengo will plan for them. The recommendation to run three is about sustainability, not a product limit."),
    ],
    ["seasonality-planning", "channel-attribution", "annual-calendar"],
  ),
  f(
    "marketing-engine",
    "annual-calendar",
    "365-Day Calendar",
    "Decide the year once, not every morning",
    "Deciding what to post each day is a small decision that costs a disproportionate amount of attention, and it is the reason most content plans die in week three.",
    "Mengo lays out a full year themed by month and by week, sequenced so foundational content lands before the offers that depend on it, and paced around the launches and quiet periods you flagged.",
    [
      b("Themed, not scheduled", "Weeks carry a theme and a job — build awareness, handle an objection, drive an offer — so a slot is a brief rather than an empty date."),
      b("Sequenced dependencies", "An offer week is preceded by the education that makes the offer make sense, instead of arriving cold."),
      b("Reflows on change", "Move a launch and the surrounding weeks reflow rather than leaving you to manually shift ninety entries."),
    ],
    [
      q("A year seems like a lot to commit to.", "The far end of the calendar is deliberately looser — themes only. Detail firms up a quarter ahead, which is the horizon most businesses can actually predict."),
      q("Can I export it?", "The calendar exports to CSV and iCal so it can live alongside whatever your team already uses."),
    ],
    ["campaign-themes", "seasonality-planning", "content-briefs"],
  ),
  f(
    "marketing-engine",
    "campaign-themes",
    "Campaign Themes",
    "Give each month a single argument to make",
    "Content without a theme becomes a stream of unrelated observations that never accumulates into a position anyone remembers.",
    "Every month is assigned one argument the business is making, and every asset that month contributes to it from a different angle, so thirty posts build one case instead of thirty unrelated ones.",
    [
      b("One argument per month", "Themes are written as a claim to be argued, not a topic to be covered, which is the difference between a month of content and a month of noise."),
      b("Angles are distributed", "Mengo assigns each slot a distinct angle on the theme — objection, proof, contrast, story, mechanism — so repetition reads as reinforcement rather than recycling."),
      b("Carries into campaigns", "A theme can be promoted into a full campaign brief in Campaign Lab without rewriting the strategy behind it."),
    ],
    [
      q("Won't a month on one theme get repetitive?", "Only if every asset makes the same point the same way. Angle distribution is specifically there to prevent that."),
      q("Can themes span more than a month?", "Yes, for long buying cycles. Quarterly themes with monthly sub-arguments are a supported pattern."),
    ],
    ["annual-calendar", "campaign-briefs", "content-briefs"],
  ),
  f(
    "marketing-engine",
    "offer-architecture",
    "Offer Architecture",
    "Build the ladder from free to core offer",
    "A business with one price point and no entry step asks strangers to make a large decision immediately, and then blames the marketing when they do not.",
    "Offer Architecture designs the ladder — the free entry point, the low-commitment step and the core paid offer — and defines what has to be true before someone moves up a rung.",
    [
      b("Every rung has a job", "An entry offer exists to produce a specific, observable signal of intent, not simply to collect an email address."),
      b("Movement conditions", "The behaviour that qualifies someone to be offered the next rung is written down, which is what makes nurture sequences possible to design."),
      b("Priced coherently", "The ladder is checked for gaps, where the jump between rungs is too large for the trust built so far."),
    ],
    [
      q("What if I only sell one thing?", "Then the ladder is about commitment rather than price — a diagnostic, a sample, a short call. The mechanism is the same."),
      q("Does this apply to ecommerce?", "Yes, usually as a first-purchase product and a repeat or bundle path rather than as a service ladder."),
    ],
    ["positioning-generator", "lead-magnet-builder", "lead-scoring-model"],
  ),
  f(
    "marketing-engine",
    "competitor-context",
    "Competitor Context",
    "Know the conversation you are entering",
    "Positioning written without reference to what buyers are already hearing tends to land as a claim everyone in the category is making at the same volume.",
    "Competitor Context maps the claims your category already makes, identifies the ones that have become table stakes, and points at the space where your positioning can still be distinct.",
    [
      b("Claims, not features", "The map is of messages buyers are exposed to, since that is what your positioning has to cut through."),
      b("Table-stakes detection", "Claims made by everyone are marked as necessary to state but useless as differentiation, which prevents building a homepage around them."),
      b("Honest about parity", "Where you genuinely are not different, Mengo says so and moves the differentiation to another axis rather than inventing one."),
    ],
    [
      q("Where does the competitor information come from?", "From what you supply plus publicly stated positioning. Mengo does not claim access to competitors' private data or performance."),
      q("How often should this be refreshed?", "Quarterly is enough for most categories. Fast-moving ones benefit from a check before each major launch."),
    ],
    ["positioning-generator", "audience-segments", "channel-ranking"],
  ),
  f(
    "marketing-engine",
    "seasonality-planning",
    "Seasonality Planning",
    "Plan around the months that actually behave differently",
    "Generic calendars ignore that most businesses have months when nobody buys and months when everything depends on getting it right.",
    "Mengo maps your demand pattern — from your own history where you have it, from category behaviour where you do not — and shapes the calendar's intensity around it.",
    [
      b("Peaks get lead time", "Preparation for a peak is scheduled backwards from the peak, so assets exist before the window opens rather than during it."),
      b("Troughs get reinvested", "Quiet periods are assigned to the work that never happens otherwise: foundational content, list hygiene, case study collection."),
      b("Regional calendars", "Holiday and season patterns follow the market you actually sell into, not a single default calendar."),
    ],
    [
      q("What if my business has no clear season?", "Then the calendar paces evenly and the trough work is distributed rather than clustered. Mengo will not manufacture a season that is not there."),
      q("Can I add my own key dates?", "Yes — launches, events, fiscal deadlines and anything else you plan around are first-class inputs."),
    ],
    ["annual-calendar", "promotional-calendars", "channel-ranking"],
  ),
];

/* ------------------------------------------------------------------ */
/* Content Studio                                                      */
/* ------------------------------------------------------------------ */

const contentStudio: Feature[] = [
  f(
    "content-studio",
    "asset-library",
    "Asset Library",
    "Over a hundred defined formats, each with its own anatomy",
    "Generic tools produce one shape of text and leave you to reformat it for nine platforms, which is where the platform-native quality quietly disappears.",
    "Every asset type in the library is a defined structure with its own anatomy, length rules and success conditions, so a carousel is generated as a carousel rather than as an article cut into slides.",
    [
      b("Structure before words", "Each format specifies what has to be in the first frame, what carries the middle and what the close must do, before a single sentence is written."),
      b("Platform rules encoded", "Character ceilings, aspect ratios, link behaviour and what each platform's algorithm rewards are part of the format definition, not an afterthought."),
      b("Browsable and linkable", "Formats are documented publicly, so you can see the anatomy of an asset before you generate one."),
    ],
    [
      q("Can I request a format that is not in the library?", "Yes. Custom formats are defined the same way — anatomy, spec, success condition — and then behave like any built-in format."),
      q("Do formats change when platforms change?", "Format definitions are maintained as platforms shift, which is the main reason they are stored centrally rather than baked into prompts."),
    ],
    ["carousel-builder", "short-form-scripts", "repurposing-engine"],
  ),
  f(
    "content-studio",
    "voice-profile",
    "Voice Profile",
    "Hold one voice across a year of output",
    "AI-written content is usually recognisable not because it is wrong but because it is uniformly polite, uniformly structured and uniformly nobody's.",
    "The Voice Profile stores your vocabulary, sentence rhythm, formality, humour tolerance and the claims you are prepared to make, and constrains every asset against it.",
    [
      b("Learned from your best work", "Paste posts that sounded like you and Mengo extracts the patterns rather than imitating the specific posts."),
      b("Includes a banned list", "Words, claims and constructions you never want to see are enforced as hard constraints, not preferences."),
      b("One edit propagates", "Adjusting the profile changes everything generated afterwards, so voice correction is one action rather than a hundred."),
    ],
    [
      q("What if my voice is still forming?", "Mengo starts from your positioning and category norms, then tightens the profile as you approve and reject drafts."),
      q("Can different team members have different voices?", "Yes. Profiles can be scoped per author for founder-led content that sits alongside brand content."),
    ],
    ["editorial-guardrails", "positioning-generator", "hook-writer"],
  ),
  f(
    "content-studio",
    "hook-writer",
    "Hook Writer",
    "Earn the second line",
    "On every feed platform the first line decides whether the rest of the asset exists, and it is the line most people write last and least.",
    "Hook Writer generates openers against the specific mechanism of the platform and the angle of the slot, then ranks them by the tension they create rather than by how clever they sound.",
    [
      b("Angle-aware", "A hook for an objection-handling slot is built differently from one for a proof slot; the angle is an input, not a style preference."),
      b("Ranked, with reasoning", "Options come with a short note on why each might work, so you develop judgement instead of picking at random."),
      b("No manufactured drama", "Guardrails block hooks that promise something the asset does not deliver, which is the fastest way to lose an audience you just earned."),
    ],
    [
      q("How many hook options do I get?", "Enough to choose from without decision fatigue — typically five, ranked, with the reasoning visible."),
      q("Does the same hook style get reused?", "Hook patterns are tracked across your calendar so the same construction does not appear three times in a fortnight."),
    ],
    ["short-form-scripts", "email-copywriting", "voice-profile"],
  ),
  f(
    "content-studio",
    "long-form-drafting",
    "Long-Form Drafting",
    "Articles and landing pages that hold an argument",
    "Long-form generated in one pass tends to be structurally flat — every section the same length, every point the same weight, no argument underneath.",
    "Long-form is drafted outline first: the claim, the sections that carry it, the evidence each needs, and only then the prose, so the finished piece has a spine.",
    [
      b("Outline you approve first", "You correct the argument before any prose exists, which is far cheaper than correcting a finished draft."),
      b("Weighted sections", "Sections are allocated length by importance, so the core argument is not the same size as a caveat."),
      b("Internal links planned", "Related pages on your own site are proposed at draft time rather than retrofitted later."),
    ],
    [
      q("How long can a piece be?", "From a 600-word post to a multi-thousand-word guide. Length is set by what the argument needs, and Mengo will say when a topic does not justify the length you asked for."),
      q("Is the output SEO-aware?", "Headings, internal links and search intent are considered, but the piece is written for a reader first. Mengo will not pad it to hit a word count."),
    ],
    ["content-briefs", "landing-page-copy", "repurposing-engine"],
  ),
  f(
    "content-studio",
    "short-form-scripts",
    "Short-Form Scripts",
    "Timed scripts with on-screen text and beats",
    "A script written as a paragraph becomes obvious the moment someone tries to perform it to camera in thirty seconds.",
    "Scripts are written as timed beats with spoken lines, on-screen text and the visual cue for each beat, so what you record matches what was planned.",
    [
      b("Timed to the format", "Beats are allocated seconds against the target length, and the script is trimmed to fit rather than left for you to cut on the day."),
      b("On-screen text separated", "Captions and overlays are written as their own layer, because they are read, not heard, and need different phrasing."),
      b("Speakable", "Sentence length and vocabulary are constrained to what a person can say naturally in one breath."),
    ],
    [
      q("Does it work for talking-head and b-roll formats?", "Both. The visual cue column changes accordingly, and Mengo flags where you will need footage you may not have."),
      q("Can I get a version for a longer cut?", "Yes — the same beats can be re-timed to a longer format, keeping the argument and expanding the evidence."),
    ],
    ["hook-writer", "carousel-builder", "repurposing-engine"],
  ),
  f(
    "content-studio",
    "carousel-builder",
    "Carousel Builder",
    "Plan frame by frame, with a reason to swipe",
    "Most carousels are a list broken into slides, which gives a reader no reason to reach slide four.",
    "Carousels are planned as a sequence where each frame opens a small loop the next one closes, with the frame count set by the argument rather than by a default of ten.",
    [
      b("Frame-level briefs", "Every frame carries its headline, its supporting line and its job in the sequence, ready to hand to a designer or a template."),
      b("Swipe logic", "Frames are ordered so information is withheld deliberately, which is what actually drives completion."),
      b("Ends on an action", "The final frame is written as a specific next step, not as a generic follow-for-more."),
    ],
    [
      q("Do I get the visuals as well?", "You get the frame-by-frame content and layout intent. Visual production stays in your design tool, which keeps your brand assets under your control."),
      q("How many frames should a carousel have?", "As many as the argument needs — usually between five and nine. Mengo will not pad to a round number."),
    ],
    ["asset-library", "short-form-scripts", "content-briefs"],
  ),
  f(
    "content-studio",
    "email-copywriting",
    "Email Copywriting",
    "Subject, preview and body written as one unit",
    "Subject lines written separately from the email they open produce good open rates and bad reply rates, which is worse than it sounds.",
    "Subject line, preview text and first paragraph are generated together as a single promise-and-payoff unit, and the body is written to deliver exactly what the subject implied.",
    [
      b("Promise and payoff matched", "Guardrails flag a subject line that the body does not deliver, before it costs you a list."),
      b("One call to action", "Emails are written around a single action. Where a second is genuinely needed, it is demoted, not given equal weight."),
      b("Plain-text discipline", "Copy is written to survive without images or styling, since that is how a meaningful share of recipients will see it."),
    ],
    [
      q("Does it write broadcasts as well as sequences?", "Both. Sequences come from Lead Nurturing with the objection assigned; broadcasts are written from the calendar theme."),
      q("Will it handle unsubscribes and compliance text?", "Mengo includes the required elements as structure, but your sending platform and your legal obligations remain yours to configure."),
    ],
    ["sequence-builder", "hook-writer", "objection-mapping"],
  ),
  f(
    "content-studio",
    "lead-magnet-builder",
    "Lead Magnet Builder",
    "Build the thing worth an email address",
    "A lead magnet that promises everything and delivers a two-page summary trains the recipient to ignore your next email.",
    "The builder produces genuinely usable assets — checklists, calculators, templates, diagnostic frameworks — scoped to solve one narrow problem completely rather than one large problem partially.",
    [
      b("Narrow and complete", "Scope is deliberately small so the asset can actually finish the job it promised, which is what earns the next open."),
      b("Tied to the offer", "The magnet is chosen so that someone who finds it useful is measurably closer to needing the paid offer."),
      b("Ships with its sequence", "Every magnet is generated alongside the follow-up sequence it should trigger, so nothing is downloaded into silence."),
    ],
    [
      q("What formats are supported?", "Checklists, templates, worksheets, mini-guides, swipe files, calculators and diagnostic scorecards, among others."),
      q("How do I know which magnet to build?", "Offer Architecture picks it from the rung of the ladder you need to strengthen, rather than from what is easiest to produce."),
    ],
    ["offer-architecture", "sequence-builder", "landing-page-copy"],
  ),
  f(
    "content-studio",
    "repurposing-engine",
    "Repurposing Engine",
    "One idea, worked properly across formats",
    "Repurposing usually means posting the same text on four platforms, which reads as automation to everyone who follows you in more than one place.",
    "The Repurposing Engine takes the underlying idea rather than the finished asset, and re-argues it in each format's native structure, so the same point lands differently in each place.",
    [
      b("Idea-level, not text-level", "The source is the claim and its evidence. Each output is written from that, not paraphrased from a sibling asset."),
      b("Format-appropriate depth", "A long article becomes a carousel by choosing one section to argue properly, not by compressing all of it into nine frames."),
      b("Spacing enforced", "Derived assets are distributed across the calendar so the same idea does not surface on three platforms on the same afternoon."),
    ],
    [
      q("How many assets can come from one idea?", "Typically six to ten across formats before the idea genuinely runs out. Mengo stops rather than manufacturing thin variants."),
      q("Can I repurpose older content?", "Yes. Paste in a past piece and Mengo extracts the idea before rebuilding it in current formats."),
    ],
    ["asset-library", "long-form-drafting", "annual-calendar"],
  ),
  f(
    "content-studio",
    "batch-approval",
    "Batch Approval",
    "Review a month in one sitting",
    "Approving content one asset at a time turns a creative process into a daily interruption, and daily interruptions are what people eventually stop doing.",
    "Content is delivered as a week or a month at once, in a review view that shows the theme, the segment and the funnel stage next to each asset so decisions take seconds.",
    [
      b("Context beside every asset", "You see why an asset exists before you judge it, which prevents approving a good post that does the wrong job."),
      b("Targeted rejection", "Reject the hook, the close or the claim specifically, and only that part regenerates."),
      b("Approval state is visible", "What is approved, what is pending and what is blocked is visible at a glance, so nothing silently misses its slot."),
    ],
    [
      q("Can someone else approve on my behalf?", "Yes. Review can be delegated with the same context view, which is how most small teams split founder voice from brand content."),
      q("What happens to rejected assets?", "They are kept with the reason attached, which is what tightens the voice profile over time."),
    ],
    ["voice-profile", "editorial-guardrails", "content-briefs"],
  ),
  f(
    "content-studio",
    "content-briefs",
    "Content Briefs",
    "Turn a calendar slot into a writable brief",
    "Handing a writer or a freelancer a calendar entry that says product post is how you get a draft you have to rewrite entirely.",
    "Each slot expands into a brief: the audience, the claim, the evidence, the format anatomy, the call to action and what a good version of this asset would achieve.",
    [
      b("Usable by a human or by Mengo", "The same brief can be generated from or handed to a freelancer, which is what makes the system survive you hiring."),
      b("Success condition stated", "Every brief says what the asset is trying to move, so it can be judged against something other than taste."),
      b("Evidence requested explicitly", "Where a brief needs a number or an example only you have, it asks for it rather than inventing one."),
    ],
    [
      q("Can I export briefs to my project tool?", "Yes, as structured text or CSV, so they can live in whatever your team already uses."),
      q("Do briefs work without Mengo generating the asset?", "Entirely. Some teams use Mengo for strategy and briefs and write everything themselves."),
    ],
    ["annual-calendar", "batch-approval", "long-form-drafting"],
  ),
  f(
    "content-studio",
    "editorial-guardrails",
    "Editorial Guardrails",
    "Stop the model claiming things you cannot back",
    "The real risk in AI-generated marketing is not bad prose. It is a confident, specific, entirely invented claim about your business going out under your name.",
    "Guardrails restrict factual and numerical claims to what you supplied, block regulated language for your industry, and mark anything unsourced as a gap for you to fill.",
    [
      b("Claims are sourced or flagged", "A statistic or customer outcome appears only if you provided it. Everything else surfaces as an explicit gap."),
      b("Industry rules applied", "Regulated sectors carry their own blocked-language sets, so drafts do not need to be scrubbed by hand every time."),
      b("Superlatives constrained", "Unprovable superlatives are rewritten into claims you could actually defend if asked."),
    ],
    [
      q("Does this guarantee compliance?", "No. Guardrails reduce the failure rate substantially, but responsibility for what you publish stays with you, and regulated industries should keep human review in the loop."),
      q("Can I add my own blocked claims?", "Yes. Anything on your banned list is enforced as a hard constraint across every asset."),
    ],
    ["voice-profile", "batch-approval", "competitor-context"],
  ),
];

/* ------------------------------------------------------------------ */
/* Campaign Lab                                                        */
/* ------------------------------------------------------------------ */

const campaignLab: Feature[] = [
  f(
    "campaign-lab",
    "campaign-briefs",
    "Campaign Briefs",
    "Force the four decisions a campaign depends on",
    "Campaigns fail before launch, in the ambiguity about what exactly is being offered, to whom, for how long, and what counts as working.",
    "The campaign brief refuses to proceed until the offer, the audience, the window and the success condition are all stated, then generates everything else from those four answers.",
    [
      b("Four required fields", "Offer, audience, window, success condition. Nothing downstream generates until all four exist."),
      b("Inherits your strategy", "The brief pulls positioning, segments and voice from Marketing Engine, so a campaign is not a separate personality."),
      b("Retrospective built in", "The brief becomes the scoring sheet at the end, which is the only reliable way to learn from a campaign."),
    ],
    [
      q("How detailed does the offer need to be?", "Specific enough that a customer could tell you what they get and what it costs. Anything vaguer produces vague assets."),
      q("Can I run overlapping campaigns?", "Yes, and Mengo checks the calendar for audience collision so the same segment is not receiving two competing offers."),
    ],
    ["channel-sequencing", "decision-rules", "campaign-retrospectives"],
  ),
  f(
    "campaign-lab",
    "channel-sequencing",
    "Channel Sequencing",
    "Decide which channel carries which stage",
    "Running the same message on every channel simultaneously wastes the channels that are good at attention on work that channels good at conversion should be doing.",
    "Sequencing assigns awareness, consideration and conversion to the channels that actually carry them for your business, and makes the handoff between stages explicit.",
    [
      b("Stage-to-channel mapping", "Each stage names its channel and its asset, so nobody is left wondering where a lead is supposed to go next."),
      b("Handoffs are designed", "The moment someone moves from a feed to an inbox is a designed step with its own asset, not an accident."),
      b("Load-aware", "Sequencing respects how much you can actually produce in the window, and shortens the campaign rather than under-resourcing it."),
    ],
    [
      q("What if I only have one channel?", "Then stages are sequenced in time on that channel instead of across channels, which works but needs a longer window."),
      q("Does it account for paid and organic together?", "Yes. Paid is usually assigned to the stage where reach is the constraint, rather than applied uniformly."),
    ],
    ["campaign-briefs", "channel-ranking", "promotional-calendars"],
  ),
  f(
    "campaign-lab",
    "launch-checklists",
    "Launch Checklists",
    "Nothing launches with a missing landing page",
    "Most launch problems are not strategic. Something obvious did not exist on the day, because it was never on a list with a name and a date against it.",
    "Every campaign generates a complete checklist of assets, pages, links and settings, each with an owner and a due date derived backwards from launch.",
    [
      b("Derived from the sequence", "The list is generated from what the campaign actually requires, so it cannot omit an asset the plan depends on."),
      b("Backward-scheduled", "Due dates count back from launch, which surfaces an impossible timeline while there is still time to change it."),
      b("Includes the unglamorous items", "Tracking links, confirmation pages, autoresponders and reply handling are on the list, because those are what actually break."),
    ],
    [
      q("Can I assign items to other people?", "Yes, with owners and dates, and the checklist shows what is blocking launch at any point."),
      q("What if we miss the date?", "The checklist recalculates and tells you what has to move, rather than leaving a launch half-ready."),
    ],
    ["campaign-briefs", "landing-page-copy", "decision-rules"],
  ),
  f(
    "campaign-lab",
    "landing-page-copy",
    "Landing Page Copy",
    "One page, one decision",
    "Landing pages built from whatever sections a template offered ask visitors to make several decisions at once and get none of them.",
    "Copy is generated against the single decision the page exists to produce, with each section earning its place by removing one specific reason not to act.",
    [
      b("Section-by-section justification", "Every section states which objection it removes. Sections that remove nothing are cut."),
      b("Above the fold does one job", "The opening states what it is, who it is for and what happens next, before anything else competes for attention."),
      b("Variants for the same page", "Alternative headline and proof arrangements are generated for testing, not five entirely different pages."),
    ],
    [
      q("Does it build the page as well?", "It produces the copy and the section structure. Building happens in your site or page tool, so your stack stays yours."),
      q("How does it handle long-form sales pages?", "Same principle, more objections. Length comes from the number of genuine objections, not from a template."),
    ],
    ["ad-concepting", "lead-magnet-builder", "long-form-drafting"],
  ),
  f(
    "campaign-lab",
    "ad-concepting",
    "Ad Concepting",
    "Concepts and copy, tested against the same claim",
    "Ad testing usually varies the wording while leaving the underlying claim untouched, which is why so many tests produce no useful information.",
    "Mengo generates ad concepts that vary the claim, the angle and the format deliberately, so a test tells you something about your market rather than about your adjectives.",
    [
      b("Varies claim, not wording", "Test sets are built to isolate the argument, which is the variable that actually moves performance."),
      b("Format-correct", "Copy is written to each placement's length and behaviour rather than reused across all of them."),
      b("Paired with landing copy", "Ad and destination are generated together, so the promise made in the ad is the promise the page answers."),
    ],
    [
      q("Does Mengo run the ads?", "No. It writes and structures them; placement and spend stay in your ad accounts."),
      q("How many concepts should I test at once?", "Mengo recommends a set sized to your budget, since testing more variants than your traffic can resolve produces noise."),
    ],
    ["landing-page-copy", "campaign-briefs", "decision-rules"],
  ),
  f(
    "campaign-lab",
    "promotional-calendars",
    "Promotional Calendars",
    "Keep offers from stacking on the same audience",
    "Businesses that run promotions ad hoc end up discounting into the same audience repeatedly and training it to wait for the next offer.",
    "The promotional calendar sits over your content calendar, spaces offers against your buying cycle and flags when a segment is being asked to buy too often.",
    [
      b("Offer spacing by cycle", "Minimum gaps between offers to the same segment are derived from how long your purchase decision actually takes."),
      b("Discount discipline", "Repeated discounting to the same audience is surfaced explicitly, since it is invisible when planned one promotion at a time."),
      b("Coordinates with seasonality", "Offers are placed where demand exists rather than where the calendar happened to be empty."),
    ],
    [
      q("Does this apply if I never discount?", "Yes — the same spacing logic governs any ask, including launches, events and paid workshops."),
      q("Can it handle multiple audiences?", "Spacing is tracked per segment, so two segments can receive different offers in the same week."),
    ],
    ["seasonality-planning", "channel-sequencing", "offer-architecture"],
  ),
  f(
    "campaign-lab",
    "decision-rules",
    "Decision Rules",
    "Agree when to push, change or cut before you launch",
    "Decisions about a struggling campaign made mid-campaign are made by whoever is most tired, and usually amount to waiting a bit longer.",
    "Decision rules are written into the brief before launch: the thresholds at which you increase spend, change the creative, or stop the campaign entirely.",
    [
      b("Thresholds, not feelings", "Each rule is a number and a date, set while you are still objective about the campaign."),
      b("Includes a stop rule", "The condition for cutting the campaign is mandatory, which is the rule most campaigns are missing."),
      b("Checked on schedule", "Rules are reviewed at fixed points rather than continuously, which prevents reacting to a single bad day."),
    ],
    [
      q("What if I have no historical benchmarks?", "Mengo sets provisional thresholds from your funnel maths and marks them as estimates to be replaced after the first campaign."),
      q("Can rules be changed mid-campaign?", "They can, but the change is recorded with a reason, which makes the retrospective honest."),
    ],
    ["campaign-retrospectives", "funnel-diagnostics", "campaign-briefs"],
  ),
  f(
    "campaign-lab",
    "campaign-retrospectives",
    "Campaign Retrospectives",
    "Score the campaign against what it promised",
    "Without a retrospective, every campaign is remembered as roughly fine, and the same avoidable mistake is repeated three months later.",
    "The retrospective scores the campaign against the success condition written in its own brief, separates what the offer did from what the execution did, and writes the lesson into the next brief.",
    [
      b("Judged against its own brief", "Success is measured against the condition set before launch, not against a target invented afterwards."),
      b("Offer versus execution", "A campaign can fail because the offer was wrong or because the execution was late; the retrospective distinguishes them."),
      b("Feeds forward", "Conclusions become constraints on the next campaign brief automatically."),
    ],
    [
      q("How long should a retrospective take?", "Twenty minutes, because the questions are fixed and most of the data was defined before launch."),
      q("What if the campaign was a clear success?", "Successful campaigns are the ones most worth documenting, since the reason for success is what you want to repeat deliberately."),
    ],
    ["decision-rules", "experiment-log", "campaign-briefs"],
  ),
];

/* ------------------------------------------------------------------ */
/* Lead Nurturing                                                      */
/* ------------------------------------------------------------------ */

const leadNurturing: Feature[] = [
  f(
    "lead-nurturing",
    "intent-segmentation",
    "Intent Segmentation",
    "Split the list by what people actually did",
    "Treating everyone who ever gave you an email address as one list means writing to the average of a browser and a buyer, which serves neither.",
    "Mengo segments contacts by observed behaviour — what they downloaded, what they asked, how far they got — and writes a different sequence for each level of intent.",
    [
      b("Behaviour over source", "Where a lead came from matters less than what they did after arriving, so behaviour is the primary split."),
      b("Three or four levels", "Cold, warm, hot and stalled cover most businesses. More granularity is added only where the message genuinely differs."),
      b("Movement is tracked", "Contacts move between segments as they act, and the sequence they are in changes accordingly."),
    ],
    [
      q("What if I have no behavioural data?", "Start with the source split and one action-based split. Mengo adds granularity as data accumulates rather than requiring it up front."),
      q("Does this need a CRM?", "It works better with one, but the sequences and segment definitions are produced regardless of what you send from."),
    ],
    ["lead-scoring-model", "audience-segments", "sequence-builder"],
  ),
  f(
    "lead-nurturing",
    "sequence-builder",
    "Sequence Builder",
    "Write the whole follow-up, not the first message",
    "Almost every business writes an excellent first reply and then nothing, which is why the majority of leads are lost to silence rather than to a competitor.",
    "The Sequence Builder writes the entire arc — every message, its job, its timing and its exit condition — so following up is a system rather than a memory test.",
    [
      b("Every message has one job", "Messages are assigned a single objection or a single piece of evidence, which is what stops a sequence repeating itself."),
      b("Exit conditions defined", "Each sequence states what causes someone to leave it, whether that is booking, buying or explicitly declining."),
      b("Branching where it matters", "Branches exist only where behaviour genuinely changes the next message, keeping sequences maintainable."),
    ],
    [
      q("How long should a sequence be?", "Mengo derives length from your buying cycle. Considered purchases usually need more touches, spaced further apart, than founders expect."),
      q("Does it write for channels other than email?", "Yes — email, WhatsApp and SMS sequences follow different rules for length, tone and timing."),
    ],
    ["objection-mapping", "cadence-planning", "whatsapp-sequences"],
  ),
  f(
    "lead-nurturing",
    "objection-mapping",
    "Objection Mapping",
    "Assign one objection to every message",
    "Follow-up that repeats the pitch louder each time gives a hesitant buyer nothing new to change their mind with.",
    "Mengo maps the objections that actually stop your buyers — price, timing, trust, switching cost, internal approval — and assigns each message in a sequence exactly one to dissolve.",
    [
      b("Objections from your market", "The map is built from your brief and your segments, not from a generic list of five sales objections."),
      b("Ordered by when they surface", "Trust objections are handled before price ones, because arguing about price with someone who does not trust you yet does not work."),
      b("Reusable across channels", "The same objection map informs sales calls, landing pages and FAQ content, so the business argues consistently."),
    ],
    [
      q("How do I know what my buyers actually object to?", "Start with what you hear on calls. Mengo structures those into a map and flags where you are guessing."),
      q("What about objections nobody says out loud?", "Unstated objections — usually risk and internal politics — are included explicitly, since they are the ones that quietly end deals."),
    ],
    ["sequence-builder", "audience-segments", "sales-handoff-notes"],
  ),
  f(
    "lead-nurturing",
    "cadence-planning",
    "Cadence Planning",
    "Match the follow-up rhythm to the decision",
    "The same follow-up rhythm applied to a same-day purchase and a six-month decision will be intrusive in one case and absent in the other.",
    "Cadence is set from your buying cycle: intervals widen as the decision lengthens, and the total window is capped so nobody is pursued indefinitely.",
    [
      b("Intervals from cycle length", "A ninety-day cycle gets a sequence that is still present at day sixty, which is where most follow-up has already stopped."),
      b("Front-loaded, then patient", "Early messages are close together while attention is high, then space out rather than stopping abruptly."),
      b("A defined end", "Every cadence terminates, with the contact either converted, re-segmented or archived deliberately."),
    ],
    [
      q("How do I find my buying cycle length?", "From enquiry-to-decision time on your last ten deals. Where you have no data, Mengo uses the industry profile and marks it as an estimate."),
      q("Is there a risk of contacting people too often?", "Cadence planning exists to prevent exactly that, and it accounts for marketing broadcasts as well as sequence messages."),
    ],
    ["sequence-builder", "promotional-calendars", "list-hygiene"],
  ),
  f(
    "lead-nurturing",
    "reengagement-flows",
    "Re-engagement Flows",
    "Work the leads you already paid for",
    "Most businesses have a list of people who once raised their hand and were never contacted again, which is the cheapest demand they will ever have access to.",
    "Re-engagement flows re-open the conversation with stalled contacts using a reason to make contact that is not simply checking in, and end with a clear archive decision.",
    [
      b("A real reason to write", "Re-engagement messages lead with something new — a change, a resource, a relevant development — rather than with your need for an answer."),
      b("Acknowledges the gap", "The silence is addressed directly, which performs far better than pretending the last six months did not happen."),
      b("Ends in a decision", "The flow concludes by asking for a yes or a no, and a no results in a clean archive rather than continued sending."),
    ],
    [
      q("How old can a lead be and still be worth reviving?", "Older than most people assume, provided consent is still valid and the message acknowledges the gap honestly."),
      q("Does this risk spam complaints?", "It reduces them, because the flow explicitly offers an exit early rather than continuing to send to people who have moved on."),
    ],
    ["list-hygiene", "sequence-builder", "intent-segmentation"],
  ),
  f(
    "lead-nurturing",
    "whatsapp-sequences",
    "WhatsApp Sequences",
    "Write for a notification, not an inbox",
    "Email copy pasted into WhatsApp reads as a broadcast and gets treated like one, because the channel's entire expectation is conversational.",
    "WhatsApp sequences are shorter, written in the second person, paced to a channel where every message is a notification, and structured to invite a reply rather than a click.",
    [
      b("Short and answerable", "Messages are written so a reply takes one line, which is what turns a sequence into a conversation."),
      b("Timing-sensitive", "Send windows respect local hours, because an inbox is patient and a phone is not."),
      b("Template-compliant", "Structure accounts for business messaging rules on templated versus session messages, which differ from email entirely."),
    ],
    [
      q("Does Mengo send WhatsApp messages?", "No. It writes and structures them for whatever business messaging platform you use, so consent and template approval stay with you."),
      q("How is this different from SMS?", "Length, tone and expectation of reply all differ. Mengo writes them separately rather than reusing one for the other."),
    ],
    ["sequence-builder", "cadence-planning", "objection-mapping"],
  ),
  f(
    "lead-nurturing",
    "sales-handoff-notes",
    "Sales Handoff Notes",
    "Arrive at the call already informed",
    "A call that starts by asking what someone is looking for wastes the one thing the nurture sequence just spent three weeks building.",
    "Every contact reaching a call carries a handoff note: what they responded to, which objection they engaged with, and the two questions worth opening with.",
    [
      b("Behavioural summary", "What the contact actually read, clicked and replied to, rather than a lead score with no explanation behind it."),
      b("Opening questions", "Two suggested questions specific to what this contact engaged with, which changes the first minute of the call entirely."),
      b("Known objection flagged", "The objection they have already shown is named, so it can be addressed rather than rediscovered."),
    ],
    [
      q("Does this work for a solo founder taking their own calls?", "That is the main case. The note replaces the memory of a conversation from three weeks ago."),
      q("Can it push into my CRM?", "Notes export as structured text so they can be attached to whatever record system you use."),
    ],
    ["lead-scoring-model", "objection-mapping", "intent-segmentation"],
  ),
  f(
    "lead-nurturing",
    "lead-scoring-model",
    "Lead Scoring Model",
    "Score on behaviour that predicts buying",
    "Lead scores built from job titles and email domains rank people by how much they resemble a customer rather than by how likely they are to become one.",
    "Mengo scores on actions that correlate with buying in your business, keeps the model small enough to explain, and shows the reason behind every score.",
    [
      b("Behaviour-weighted", "Actions close to purchase — pricing views, replies, booking attempts — carry the weight; passive signals carry little."),
      b("Explainable", "Every score shows its components, so you can disagree with it and adjust rather than trusting a black box."),
      b("Recalibrated", "The model is revisited against who actually bought, which is the only way scoring stops being decorative."),
    ],
    [
      q("Do I need a lot of data for this to work?", "No. The initial model is simple and rule-based; it becomes more accurate as outcomes accumulate."),
      q("What score means ready to contact?", "Mengo sets the threshold from your capacity to follow up, since a threshold that produces more leads than you can call is useless."),
    ],
    ["intent-segmentation", "sales-handoff-notes", "funnel-diagnostics"],
  ),
  f(
    "lead-nurturing",
    "list-hygiene",
    "List Hygiene",
    "Protect the ability to reach the people who want to hear from you",
    "Sending to a list full of dead addresses and disengaged contacts damages delivery to the people who actually open, which is a slow and largely invisible failure.",
    "Mengo defines the rules for suppression, re-permission and archiving, and schedules the cleanup so it happens rather than being permanently deferred.",
    [
      b("Engagement-based suppression", "Contacts who have not engaged within a defined window are suppressed before they affect delivery to everyone else."),
      b("Re-permission before removal", "A final, honest opportunity to stay is offered, which recovers a meaningful share and cleanly removes the rest."),
      b("Scheduled, not aspirational", "Hygiene is a calendar item in the quiet periods identified by seasonality planning."),
    ],
    [
      q("Isn't removing contacts the same as losing reach?", "List size is not reach. Reach is who receives and opens, and that improves when disengaged contacts are removed."),
      q("Does Mengo manage consent records?", "No. Consent capture and record-keeping stay in your sending platform, where your legal obligations sit."),
    ],
    ["reengagement-flows", "cadence-planning", "seasonality-planning"],
  ),
];

/* ------------------------------------------------------------------ */
/* Growth Signal                                                       */
/* ------------------------------------------------------------------ */

const growthSignal: Feature[] = [
  f(
    "growth-signal",
    "metric-selection",
    "Metric Selection",
    "Choose the few numbers worth watching",
    "Dashboards with forty metrics produce the same decisions as dashboards with none, because nobody can hold forty numbers in mind while deciding anything.",
    "Mengo selects a small metric set from your business model — typically one demand, one conversion and one retention number — and names explicitly what to stop watching.",
    [
      b("Model-derived", "A subscription business, a high-ticket service and a repeat-purchase shop get genuinely different metric sets, not the same three with different labels."),
      b("A stop list", "Metrics you should deliberately ignore are named, which is what makes the set small enough to actually use."),
      b("Each has a decision", "A metric with no decision attached is removed, on the grounds that watching it is a hobby rather than management."),
    ],
    [
      q("What if my leadership wants more metrics?", "The full set stays available for reporting. The point is which few drive weekly decisions, not which exist."),
      q("How often should the set change?", "Quarterly at most. Metric sets that change monthly cannot show a trend."),
    ],
    ["review-cadence", "reporting-templates", "funnel-diagnostics"],
  ),
  f(
    "growth-signal",
    "review-cadence",
    "Review Cadence",
    "Three reviews, three different questions",
    "One monolithic monthly meeting tries to answer execution, channel and strategy questions at once, and usually answers only the first.",
    "Mengo separates the rhythm: weekly for execution, monthly for channel mix, quarterly for strategy, each with a fixed agenda short enough to actually hold.",
    [
      b("Fixed agendas", "Each review has the same questions every time, which is what allows it to take fifteen minutes."),
      b("Different altitudes", "A weekly review never debates positioning; a quarterly one never debates a single post's performance."),
      b("Conclusions are written down", "Each review ends with recorded decisions that feed back into the plan, rather than with a shared feeling."),
    ],
    [
      q("Is a weekly review realistic for a solo founder?", "It is fifteen minutes against three numbers. The agenda is fixed precisely so it survives a busy week."),
      q("What if nothing changed this week?", "Then the review concludes in five minutes and confirms you keep executing, which is a valid and useful outcome."),
    ],
    ["metric-selection", "experiment-log", "reporting-templates"],
  ),
  f(
    "growth-signal",
    "channel-attribution",
    "Channel Attribution",
    "Enough attribution to make the next decision",
    "Waiting for perfect attribution before making channel decisions means making channel decisions by intuition for years while the tracking project continues.",
    "Mengo works to the level of attribution your business can honestly support, states the uncertainty plainly, and shows what would need to be true for the decision to change.",
    [
      b("Honest about uncertainty", "Where a channel's contribution genuinely cannot be isolated, that is stated rather than obscured with a confident percentage."),
      b("Decision-sufficient", "The question is whether the data can distinguish between the options you are actually choosing between, not whether it is complete."),
      b("Improvement path", "The single highest-value tracking improvement is named, rather than a plan to instrument everything."),
    ],
    [
      q("Do I need a full analytics stack?", "No. Most channel decisions can be made from source questions on your forms plus basic platform data."),
      q("How does this handle offline or word of mouth?", "As a named, acknowledged share rather than as an unattributed gap, usually captured by asking people directly."),
    ],
    ["channel-ranking", "funnel-diagnostics", "metric-selection"],
  ),
  f(
    "growth-signal",
    "funnel-diagnostics",
    "Funnel Diagnostics",
    "Find which step is actually leaking",
    "Businesses respond to weak results by making more content, when the loss is usually at a later step that more content will only feed.",
    "Funnel diagnostics locate the step with the largest drop relative to its benchmark, and name the specific fix for that step rather than recommending more volume.",
    [
      b("Relative, not absolute", "Every step drops. The diagnostic finds the one dropping more than that step type should, which is a different question."),
      b("Fix matched to step", "An awareness problem and a close problem have entirely different remedies, and the diagnostic says which one you have."),
      b("Rechecked after the fix", "The step is re-measured after intervention, so you learn whether the diagnosis was right."),
    ],
    [
      q("What if several steps look weak?", "Mengo sequences them, because fixing a later step first means the improvement is visible immediately rather than diluted."),
      q("Can this work with incomplete data?", "Yes, with wider uncertainty. The diagnostic states its confidence rather than presenting a guess as a finding."),
    ],
    ["channel-attribution", "lead-scoring-model", "content-performance"],
  ),
  f(
    "growth-signal",
    "content-performance",
    "Content Performance",
    "Judge content by the job it was given",
    "Ranking every post by engagement rewards the content that was never meant to convert and quietly kills the content that was.",
    "Each asset is scored against the job assigned in its brief, so an awareness post and a conversion post are judged on different things and neither is punished for the other's metric.",
    [
      b("Scored against its brief", "The success condition written when the asset was commissioned is the one used to judge it."),
      b("Patterns, not posts", "The output identifies which formats, angles and themes work for you, which is what changes next month's calendar."),
      b("Survivorship handled", "Assets that underperformed are analysed rather than quietly ignored, since that is where most of the learning is."),
    ],
    [
      q("How much content do I need before patterns are meaningful?", "Usually a couple of months of consistent output. Mengo marks findings as provisional until then rather than over-reading early data."),
      q("Does this feed back into the calendar?", "Yes. Confirmed patterns change the format and angle mix in the next planning cycle."),
    ],
    ["content-briefs", "funnel-diagnostics", "experiment-log"],
  ),
  f(
    "growth-signal",
    "experiment-log",
    "Experiment Log",
    "Stop re-running experiments you already ran",
    "Without a log, a small team tries the same idea every eighteen months, gets the same result, and treats it as new information each time.",
    "The experiment log records the hypothesis, the change, the window, the result and the conclusion, so institutional memory survives busy quarters and staff changes.",
    [
      b("Hypothesis first", "An experiment is recorded before it runs, with a stated expectation, which is what makes the result interpretable."),
      b("Includes the failures", "Negative results are the most valuable entries, because they are the ones most likely to be repeated otherwise."),
      b("Searchable", "Past experiments surface when a similar idea is proposed, before effort is spent on it again."),
    ],
    [
      q("How formal do experiments need to be?", "Informal is fine. A one-line hypothesis and an honest conclusion beats a rigorous test that never gets run."),
      q("What counts as an experiment?", "Any deliberate change you intend to learn from — a new channel, a new offer, a different posting rhythm."),
    ],
    ["review-cadence", "campaign-retrospectives", "content-performance"],
  ),
  f(
    "growth-signal",
    "reporting-templates",
    "Reporting Templates",
    "Report in a page, in the same shape every time",
    "Reports rebuilt from scratch each month cost hours to produce and are impossible to compare against last month's version.",
    "Reporting templates fix the shape of the weekly, monthly and quarterly report so producing one is a fill-in task and reading one is a comparison rather than a fresh interpretation.",
    [
      b("Same shape every period", "Consistency is what makes a trend visible; a redesigned report hides the thing it exists to show."),
      b("Conclusions above data", "The decision goes at the top and the supporting numbers below it, because that is the order a reader needs them in."),
      b("Audience-appropriate", "Founder, team and investor versions differ in depth, not in the underlying numbers."),
    ],
    [
      q("Can I share these outside the business?", "Yes. The investor-facing version is built for that, and excludes operational detail that is noise to an external reader."),
      q("How long should a monthly report be?", "One page. If it needs more, the metric set is too large."),
    ],
    ["metric-selection", "review-cadence", "campaign-retrospectives"],
  ),
];

export const features: Feature[] = [
  ...marketingEngine,
  ...contentStudio,
  ...campaignLab,
  ...leadNurturing,
  ...growthSignal,
];

export const featureBySlug = new Map(features.map((x) => [x.slug, x]));

export function featuresForProduct(productSlug: Slug): Feature[] {
  return features.filter((x) => x.product === productSlug);
}
