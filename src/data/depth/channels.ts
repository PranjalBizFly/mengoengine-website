import type { DepthMap } from "@/data/depth";
import { close, s } from "@/data/depth";

/**
 * Channel depth.
 *
 * The channel records state the mechanics, the cadence and the signals. What a
 * reader deciding whether to commit to a channel also needs is an honest
 * account of what it costs to run properly and who should not bother — which
 * is the part channel guides almost never include.
 */
export const channelDepth: DepthMap = {
  linkedin: {
    intro:
      "LinkedIn is the one large platform where a professional audience is reachable without paying for it, and where a single person's account consistently outperforms the company they work for. That asymmetry is the whole opportunity, and it is also why the channel resists being delegated to a marketing coordinator.",
    explain: [
      s(
        "What it actually costs to run",
        "Three to five posts a week from a personal profile, plus availability to reply during the hour after posting. The writing is the visible cost; the reply window is the one that surprises people and the one that most affects reach.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses selling to consumers, to trades, or to anyone whose working day does not involve a professional feed. LinkedIn is an excellent channel for a specific set of buyers and an expensive habit for everyone else.",
      ),
    ],
    connects:
      "LinkedIn is usually the primary channel for considered B2B purchases, feeding an email list that carries the longer nurture. Where it ranks first, the calendar allocates the majority of production capacity to it and treats the other channels as support.",
    related: {
      guides: ["linkedin-founder-playbook"],
      articles: ["founder-brand-without-oversharing", "be-everywhere-is-bad-advice"],
      useCases: ["start-posting-on-linkedin"],
    },
    close: close(
      "A person, not a page",
      "The plan Mengo builds for LinkedIn assumes founder-led posting, because that is what the platform actually distributes. Join our waitlist for early access.",
    ),
  },

  instagram: {
    intro:
      "Instagram is three products sharing an icon. Reels reach strangers, the grid explains you to people who arrive, and stories talk to the followers you already have. Treating them as one channel with one plan is the most common reason an account with good content grows slowly.",
    explain: [
      s(
        "What it actually costs to run",
        "Production capacity, not writing time. Reels need filming and editing, carousels need design, and stories need someone present most days. It is the most equipment-dependent of the organic channels and the plan has to be sized to that.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses whose buyers make considered, evidence-led decisions in a professional context. Visual discovery is a poor fit for a purchase that turns on specifications, references or internal approval.",
      ),
    ],
    connects:
      "Instagram usually sits as the discovery layer for visual and local businesses, with the grid doing the explaining and email or messaging carrying the follow-up. Reels feed reach; stories carry the offers.",
    related: {
      guides: ["instagram-reels-playbook"],
      articles: ["write-for-the-format", "hooks-are-not-clickbait"],
      industries: ["beauty-salons", "interior-design"],
    },
    close: close(
      "Three formats, three jobs",
      "Mengo plans reels, grid and stories separately because they reach different people. Join our waitlist for early access.",
    ),
  },

  email: {
    intro:
      "Email is the only channel where the audience belongs to you. Every other platform lends you reach and can adjust it without notice, which makes a list the one marketing asset that appreciates rather than depreciating with a product update.",
    explain: [
      s(
        "What it actually costs to run",
        "Less time than any social channel and more discipline. One broadcast a week is sustainable; the harder part is the hygiene — suppression, re-permission, list maintenance — which never feels urgent and quietly determines whether anything reaches an inbox.",
      ),
      s(
        "Who should not prioritise it",
        "Almost nobody, which is unusual for a channel. The exception is a business with no way to capture addresses and no intention of building one, where effort belongs in creating that capture first.",
      ),
    ],
    connects:
      "Email is the destination the other channels feed. Social builds recognition and search captures intent; email is where the sequence, the objection handling and the offer actually happen.",
    related: {
      guides: ["email-newsletter-playbook", "welcome-sequence-template"],
      articles: ["the-follow-up-gap"],
      useCases: ["launch-a-newsletter"],
    },
    close: close(
      "The list is the asset",
      "Platform reach changes without notice; a list does not. Join our waitlist for early access.",
    ),
  },

  whatsapp: {
    intro:
      "WhatsApp arrives as a notification on a personal device, between messages from family. That is the highest attention available to any marketing channel and the least forgiving context for anything that reads as a broadcast.",
    explain: [
      s(
        "What it actually costs to run",
        "Someone available to reply. The channel's advantage is conversation, and a sequence that invites replies into an unmonitored number damages the relationship more than sending nothing would. Reply capacity is a prerequisite rather than a nice-to-have.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses with no genuine opt-in path and no capacity to answer. The cost of an unwanted message here is far higher than in email, and it is paid in reports and blocks rather than in unsubscribes.",
      ),
    ],
    connects:
      "WhatsApp usually handles the fast, personal stage of a relationship — qualification, booking, rebooking — while email carries the longer nurture. The two are planned against a shared frequency cap so a contact is not messaged twice in a week by two systems.",
    related: {
      guides: ["whatsapp-nurture-playbook"],
      articles: ["speed-is-a-conversion-strategy"],
      industries: ["real-estate", "automotive"],
    },
    close: close(
      "Only start it if you can answer",
      "Mengo asks about reply capacity before generating a WhatsApp sequence. Join our waitlist for early access.",
    ),
  },

  youtube: {
    intro:
      "YouTube is a search engine with a recommendation feed attached, and the two behave differently enough to be treated as separate channels. Search video keeps earning views for years; recommended video is a distribution lottery decided in the first thirty seconds.",
    explain: [
      s(
        "What it actually costs to run",
        "The highest production cost of any organic channel — scripting, filming, editing, thumbnails — and the longest payback. It is a poor choice for a business that needs enquiries this quarter and an excellent one for a business that will still exist in three years.",
      ),
      s(
        "Who should not prioritise it",
        "Anyone without the capacity to sustain one video a fortnight for a year. Three videos and a pause produces almost nothing, and the effort is large enough that the abandonment is demoralising.",
      ),
    ],
    connects:
      "Search-intent video compounds alongside written search content and answers the same queries in a different format. Shorts reach a separate audience that rarely converts into long-form viewers automatically, which is why they are planned as their own track.",
    related: {
      guides: ["content-brief-template"],
      articles: ["why-your-content-does-not-compound", "write-for-the-format"],
      assetTypes: ["youtube-long-form-script", "thumbnail-brief"],
    },
    close: close(
      "A compounding asset with a long payback",
      "Search video keeps earning for years, which is the argument for starting before you need it. Join our waitlist for early access.",
    ),
  },

  tiktok: {
    intro:
      "TikTok distributes almost entirely on content rather than on following, which makes it the fastest place to find out whether a message works and the hardest place to coast on past success. Every video starts from close to zero.",
    explain: [
      s(
        "What it actually costs to run",
        "Four to seven videos a week while testing, which is a genuine production commitment. The editing standard is high in a specific way — pacing rather than polish — and that is a skill that takes weeks to develop.",
      ),
      s(
        "Who should not prioritise it",
        "Most B2B businesses, most regulated categories, and anyone whose buyer is not on the platform. It is a superb channel for a narrow set of businesses and a large, visible waste of effort for the rest.",
      ),
    ],
    connects:
      "Where TikTok works it is usually the discovery layer, with the offer and the follow-up living somewhere the platform does not control. Its comments are also the cheapest market research available, and they feed content ideas back into the calendar.",
    related: {
      guides: ["instagram-reels-playbook"],
      articles: ["you-do-not-need-to-be-on-tiktok"],
      assetTypes: ["tiktok-script", "tiktok-hook-set"],
    },
    close: close(
      "Fast to test, expensive to sustain",
      "Mengo will tell you when the honest ranking puts this channel outside your three. Join our waitlist for early access.",
    ),
  },

  x: {
    intro:
      "X tolerates a posting volume no other platform does, which makes it unusually cheap as a place to find out whether a claim lands. The half-life of a post is short enough that repeating a good idea is expected rather than penalised.",
    explain: [
      s(
        "What it actually costs to run",
        "Attention rather than production. One to three short posts a day is not a writing burden; the cost is the pull of the platform itself, which is why the reply activity that drives most of the reach needs a time box.",
      ),
      s(
        "Who should not prioritise it",
        "Local businesses and most consumer categories. The audience concentration that makes X valuable for software, finance and media is exactly what makes it thin for a business serving one town.",
      ),
    ],
    connects:
      "X works well as the testing ground ahead of longer-form work: a claim proven in a single post becomes a thread, then an article, then a section of a landing page. The phrasing that survives compression here tends to survive everywhere.",
    related: {
      guides: ["positioning-framework"],
      articles: ["your-positioning-is-a-description", "testing-adjectives-teaches-nothing"],
      assetTypes: ["x-post", "x-thread"],
    },
    close: close(
      "Cheap to test a claim",
      "A claim that survives 280 characters is one you can use everywhere else. Join our waitlist for early access.",
    ),
  },

  facebook: {
    intro:
      "Facebook's organic reach has moved out of pages and into groups and local discovery. That is a real change rather than a decline: for a local business, community recommendations and event listings are more valuable than page posts ever were.",
    explain: [
      s(
        "What it actually costs to run",
        "Participation rather than publishing. Group presence requires showing up as a person in conversations you did not start, which is more time than posting and considerably more effective in this context.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses selling to a younger audience or to a professional buyer. The demographic skew is real, and it changes both which offers land and how they should be phrased.",
      ),
    ],
    connects:
      "Facebook usually sits alongside local search for businesses serving a place, with groups producing recommendations and events carrying the local footfall. Direct contact then moves to phone or messaging rather than to email.",
    related: {
      guides: ["local-seo-checklist"],
      articles: ["referrals-are-not-a-strategy"],
      assetTypes: ["facebook-group-post", "local-community-post"],
    },
    close: close(
      "Groups and local, not pages",
      "The reach moved; it did not disappear. Join our waitlist for early access.",
    ),
  },

  "organic-search": {
    intro:
      "Search is where demand that already exists goes looking. That makes it the only channel where you are not interrupting anyone, and the only one where a page written this year can still be producing enquiries in three.",
    explain: [
      s(
        "What it actually costs to run",
        "Patience more than effort. Two to four substantial pages a month plus internal linking is sustainable; the difficulty is that nothing visible happens for several months, which is when most search programmes are abandoned.",
      ),
      s(
        "Who should not prioritise it",
        "Anyone who needs enquiries within a quarter. Search is the wrong channel for an urgent launch and close to the best one for a durable business, and confusing those two situations is expensive in both directions.",
      ),
    ],
    connects:
      "Search underpins everything else because it captures demand the other channels created. It is also where an article, a glossary entry and a location page reinforce each other through internal links, which is a lever entirely within your control.",
    related: {
      guides: ["local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
      assetTypes: ["seo-article", "comparison-article"],
    },
    close: close(
      "Slow, then compounding",
      "The pages that produce enquiries in year three were written in year one. Join our waitlist for early access.",
    ),
  },

  "google-ads": {
    intro:
      "Google Ads buys demand that already exists, which makes it the fastest way to test whether a market is there. It is also the least forgiving of a mismatch between the query, the advert and the page it lands on.",
    explain: [
      s(
        "What it actually costs to run",
        "Budget and attention in roughly equal measure. An account left unmanaged converts spend into irrelevant clicks within weeks, which is why the negative keyword list and a fortnightly review are part of the plan rather than optional refinements.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses whose margins cannot support the cost per click in their category, and businesses with no page written for the query being bid on. In both cases the spend converts to bounces rather than to enquiries.",
      ),
    ],
    connects:
      "Paid search works from the same intent map as organic search, which is what keeps the two from competing. It also depends on landing page copy written for the exact query, so the channel and the page are planned together.",
    related: {
      guides: ["landing-page-checklist", "metric-selection-framework"],
      articles: ["stop-measuring-everything"],
      assetTypes: ["search-ad-copy", "negative-keyword-plan"],
    },
    close: close(
      "Buys demand, does not create it",
      "The cheapest useful clicks are almost always on specific, unglamorous queries. Join our waitlist for early access.",
    ),
  },

  "meta-ads": {
    intro:
      "Meta Ads create demand rather than capture it, which changes where the effort belongs. Targeting matters less than most people expect and creative matters more, to the point where broad targeting with strong creative usually beats the reverse.",
    explain: [
      s(
        "What it actually costs to run",
        "New creative every two to three weeks, indefinitely. Fatigue is predictable rather than exceptional, and a plan without a refresh cadence built in will spend its way into declining performance and call it an algorithm change.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses with a long, considered, multi-person buying decision. Interrupting someone in a feed works for a purchase they can make today; it works poorly for one that requires three internal approvals.",
      ),
    ],
    connects:
      "Prospecting and retargeting are separate budgets with separate messages, and both point at landing pages written for the specific offer. The angle set that varies the argument is what makes the results interpretable.",
    related: {
      guides: ["launch-checklist"],
      articles: ["testing-adjectives-teaches-nothing"],
      assetTypes: ["meta-ad-creative-brief", "offer-angle-set"],
    },
    close: close(
      "Creative is the lever",
      "A refresh cadence belongs in the plan from the start, not as a response to a falling number. Join our waitlist for early access.",
    ),
  },

  pinterest: {
    intro:
      "Pinterest behaves like a visual search engine with an unusually long tail. A pin keeps earning impressions for months, which makes it one of the few social-shaped channels where the work compounds rather than expiring in a day.",
    explain: [
      s(
        "What it actually costs to run",
        "Consistent weekly pinning against a planned board structure, plus image production. The writing is minimal; the discipline is in the structure, because boards are how the platform understands what the account is about.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses whose purchase is not visual and not planned in advance. Pinterest is strong where someone is imagining an outcome months ahead and weak where the decision is urgent or technical.",
      ),
    ],
    connects:
      "Pinterest works from the same intent map as search, using query language rather than brand language, and sends traffic to pages that have to deliver what the pin promised. Boards function as topical clusters in the same way internal linking does.",
    related: {
      guides: ["local-seo-checklist"],
      articles: ["why-your-content-does-not-compound"],
      industries: ["interior-design", "events-weddings"],
    },
    close: close(
      "Long tail, visual intent",
      "A pin published this month can still be producing visits next year. Join our waitlist for early access.",
    ),
  },

  podcasts: {
    intro:
      "Podcast audiences are small and disproportionately trusting, which inverts the usual reach calculation. A mention to two thousand engaged listeners frequently outperforms a post seen by fifty thousand people who were scrolling.",
    explain: [
      s(
        "What it actually costs to run",
        "Guesting costs preparation and pitching; hosting costs a fortnightly production commitment indefinitely. For most businesses guesting is the right starting point, because it borrows an audience rather than building one from zero.",
      ),
      s(
        "Who should not prioritise it",
        "Anyone who needs measurable attribution. This channel is genuinely difficult to track, and a business that will only fund what it can attribute directly should not start here.",
      ),
    ],
    connects:
      "Guest appearances draw on the same positioning as everything else, and the episodes become durable searchable assets through show notes and transcripts. Clips carry the episode onto the channels where short video works.",
    related: {
      guides: ["positioning-framework"],
      articles: ["founder-brand-without-oversharing", "stop-measuring-everything"],
      assetTypes: ["podcast-pitch", "guest-talking-points"],
    },
    close: close(
      "Trust rather than reach",
      "Small audiences that trust the host convert well above their size. Join our waitlist for early access.",
    ),
  },

  "events-webinars": {
    intro:
      "A live session compresses the entire funnel into an hour: awareness, consideration, objection handling and a decision, with the audience present for all of it. That concentration is the value, and it is also why the follow-up matters more than the session.",
    explain: [
      s(
        "What it actually costs to run",
        "A four-week promotion window, the session itself, and a follow-up split by attendance. The session is the visible cost and the smallest one; the promotion and the follow-up together take considerably more time and produce most of the result.",
      ),
      s(
        "Who should not prioritise it",
        "Businesses with a small list and no partner audience to borrow. An event promoted to two hundred people produces a room that is discouraging to present to and rarely justifies the preparation.",
      ),
    ],
    connects:
      "Events draw on the email list to fill the room and hand the follow-up back to it afterwards. The live questions asked during a session are the highest-quality objection research most businesses ever collect, and they feed directly into the objection map.",
    related: {
      guides: ["webinar-playbook"],
      articles: ["speed-is-a-conversion-strategy"],
      useCases: ["build-a-webinar-funnel"],
    },
    close: close(
      "The follow-up is the channel",
      "Registration is a much lower bar than attendance, and attendance is a much lower bar than a decision. Join our waitlist for early access.",
    ),
  },
};
