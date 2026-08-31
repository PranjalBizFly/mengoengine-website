import type { Channel, Faq, Slug } from "@/lib/types";

/**
 * Channels Mengo plans and writes for.
 *
 * A channel entity records the mechanics that decide what works there, so both
 * Channel Ranking and Content Studio have one place to read platform reality from.
 */
function c(
  slug: Slug,
  title: string,
  summary: string,
  mechanics: string[],
  assets: Slug[],
  cadence: string,
  signals: string[],
  industries: Slug[],
  faqs: Faq[],
  updated = "2026-08-14",
): Channel {
  return {
    kind: "channel",
    slug,
    title,
    summary,
    mechanics,
    assets,
    cadence,
    signals,
    industries,
    faqs,
    updated,
  };
}

const q = (q: string, a: string): Faq => ({ q, a });

export const channels: Channel[] = [
  c(
    "linkedin",
    "LinkedIn",
    "LinkedIn rewards a specific person saying something specific to a professional audience. Mengo plans it as an argument built over weeks, not as a feed of company announcements.",
    [
      "Personal profiles consistently out-reach company pages, so founder-led posting is the default plan rather than an optional extra.",
      "The first two lines decide everything, because the rest sits behind a see-more truncation.",
      "Comments in the first hour matter more than any other signal, which makes posting time and reply availability part of the plan.",
      "External links suppress reach, so link placement is planned deliberately rather than pasted into the body.",
    ],
    ["linkedin-text-post", "linkedin-carousel", "linkedin-newsletter", "linkedin-poll", "founder-story-post", "case-breakdown-post"],
    "Three to five posts a week from a personal profile, with one longer piece a fortnight.",
    ["Profile views following a post", "Connection requests from the target segment", "Comment quality rather than comment count", "Inbound conversations started"],
    ["b2b-services", "saas", "professional-services", "recruitment", "consulting-firms"],
    [
      q("Should I post from my company page or my profile?", "Your profile, with the company page used for credibility and reposting. Mengo plans founder-led content first and treats the page as supporting infrastructure."),
      q("How personal should the content be?", "Personal enough to be identifiable, professional enough to be useful. Mengo sets the boundary in your voice profile rather than defaulting to confessional storytelling."),
    ],
  ),
  c(
    "instagram",
    "Instagram",
    "Instagram is three distinct products sharing an app. Mengo plans reels, grid and stories separately, because they reach different people and do different jobs.",
    [
      "Reels reach beyond your followers; grid posts and stories mostly do not, which sets what each format is for.",
      "The first second of a reel determines retention, and retention determines distribution.",
      "Stories reach existing followers reliably and are the natural place for offers and reminders.",
      "Saves and shares outweigh likes as a distribution signal, which changes what content is worth making.",
    ],
    ["instagram-reel-script", "instagram-carousel", "instagram-caption", "story-sequence", "reel-hook-set", "grid-plan"],
    "Three to five reels a week, two carousels, and stories most days.",
    ["Reel retention through the first three seconds", "Saves and shares per post", "Profile visits from reels", "Story reply volume"],
    ["ecommerce", "hospitality", "fitness-wellness", "beauty-salons", "creator-economy"],
    [
      q("Do I need to be on camera?", "It helps, but Mengo also plans faceless formats — text-on-screen, product-in-use, screen recordings — as a full path rather than a fallback."),
      q("How do hashtags factor in?", "As a minor topical signal, not a distribution strategy. Mengo includes a small relevant set and puts the effort into the hook."),
    ],
  ),
  c(
    "email",
    "Email",
    "Email is the only channel where you own the list. Mengo treats it as the destination other channels feed, and plans it for reply rate rather than open rate.",
    [
      "Deliverability depends on engagement, so sending to disengaged contacts damages reach to engaged ones.",
      "Subject and preview text are read together as one line, and are the entire decision.",
      "Plain-text emails often outperform designed templates for one-to-one style messages.",
      "Reply rate is a stronger signal of a healthy list than open rate, which has become unreliable.",
    ],
    ["welcome-sequence", "nurture-email", "newsletter-issue", "launch-email", "reengagement-email", "sales-followup-email"],
    "One broadcast a week, plus automated sequences triggered by behaviour.",
    ["Reply rate", "Click-to-open on the primary action", "Unsubscribe rate per send", "List engagement over a rolling 90 days"],
    ["saas", "ecommerce", "education", "professional-services", "nonprofits"],
    [
      q("How often should I email?", "Weekly is sustainable for most businesses and frequent enough to stay recognised. Mengo sets the exact rhythm from your cycle and your capacity."),
      q("Does Mengo send the emails?", "No. It writes and sequences them; sending stays in your platform so deliverability, consent and unsubscribe handling remain yours."),
    ],
  ),
  c(
    "whatsapp",
    "WhatsApp",
    "WhatsApp arrives as a notification on a personal device, which makes it the highest-attention and least forgiving channel Mengo writes for.",
    [
      "Business messaging distinguishes templated messages from session messages, and the rules differ sharply between them.",
      "Message length expectations are conversational; anything that reads as a broadcast gets treated as one.",
      "Response windows are short, so a sequence that cannot handle a reply quickly should not be started.",
      "Opt-in quality determines everything, because the cost of an unwanted message is much higher than in email.",
    ],
    ["whatsapp-opt-in-message", "whatsapp-nurture-message", "whatsapp-broadcast", "whatsapp-reply-script", "catalogue-message"],
    "Short bursts tied to a trigger, rather than a standing schedule.",
    ["Reply rate", "Opt-out rate", "Time to first reply", "Conversation-to-booking rate"],
    ["real-estate", "healthcare", "education", "automotive", "hospitality"],
    [
      q("Is WhatsApp appropriate for cold outreach?", "No. Mengo plans it as an opted-in channel only, because unsolicited business messaging on a personal device damages the brand faster than it generates leads."),
      q("How is it different from SMS?", "Expectation of conversation. WhatsApp messages invite a reply; SMS is closer to a notification. Mengo writes them separately."),
    ],
  ),
  c(
    "youtube",
    "YouTube",
    "YouTube is a search engine with a recommendation feed attached. Mengo plans for both, because the content that ranks and the content that gets recommended are rarely the same.",
    [
      "Titles and thumbnails determine click-through, and click-through gates everything else.",
      "Retention over the first thirty seconds is the primary distribution signal for recommended video.",
      "Search-intent video keeps earning views for years, which makes it a compounding rather than a perishable asset.",
      "Shorts and long-form reach different audiences and rarely convert one into the other automatically.",
    ],
    ["youtube-long-form-script", "youtube-short-script", "video-title-set", "thumbnail-brief", "video-description", "chapter-plan"],
    "One long-form video a week or fortnight, supported by two or three shorts.",
    ["Click-through rate on impressions", "Average view duration", "Subscribers gained per video", "Search-driven views over time"],
    ["saas", "education", "home-services", "financial-services", "creator-economy"],
    [
      q("Long-form or shorts first?", "Depends on the job. Shorts build reach quickly; long-form builds trust and ranks in search. Channel Ranking picks based on your buying cycle."),
      q("Does Mengo edit video?", "No. It produces scripts, titles, thumbnail briefs, descriptions and chapters. Production stays with you or your editor."),
    ],
  ),
  c(
    "tiktok",
    "TikTok",
    "TikTok distributes almost entirely on content quality rather than follower count, which makes it the fastest channel to test a message on and the hardest to coast on.",
    [
      "Every video is redistributed from near zero, so past performance guarantees very little.",
      "Watch-through and rewatch are the dominant signals, which rewards tight editing over production value.",
      "Native trends matter, but only as a vehicle for a message you already have.",
      "Comments frequently become the next video, making the channel genuinely iterative.",
    ],
    ["tiktok-script", "tiktok-hook-set", "trend-adaptation-brief", "comment-response-video", "series-plan"],
    "Four to seven videos a week while testing, settling to a sustainable three.",
    ["Watch-through rate", "Rewatches", "Comment-to-view ratio", "Profile visits per video"],
    ["ecommerce", "beauty-salons", "fitness-wellness", "food-beverage", "creator-economy"],
    [
      q("Is TikTok worth it for a B2B business?", "Sometimes, where the buyer is reachable as a person rather than as a job title. Channel Ranking will say so honestly rather than recommending it by default."),
      q("How long before I know if it is working?", "Around thirty videos, because variance on any single video is too high to read anything from a handful."),
    ],
  ),
  c(
    "x",
    "X",
    "X rewards frequency and specificity. Mengo uses it to test claims cheaply and to find the phrasing that later carries longer-form content.",
    [
      "Posting volume tolerance is far higher than on other platforms, which makes it a testing ground.",
      "Replies to larger accounts often reach further than original posts for a small account.",
      "Threads work when each post stands alone; they fail when they are a blog post cut into pieces.",
      "The half-life of a post is short, so repetition of good ideas is expected rather than penalised.",
    ],
    ["x-post", "x-thread", "reply-strategy-brief", "quote-post"],
    "One to three posts a day, with a thread once or twice a week.",
    ["Impressions per follower", "Profile clicks", "Bookmark rate", "Conversations started with target accounts"],
    ["saas", "creator-economy", "b2b-services", "fintech"],
    [
      q("Does X still drive real business?", "For technical, founder and creator audiences it does. For local and consumer businesses it usually ranks low, and Mengo will say so."),
      q("How do I use it without spending all day there?", "Mengo plans a fixed posting set plus a bounded reply window, so the channel has a time budget rather than an open-ended one."),
    ],
  ),
  c(
    "facebook",
    "Facebook",
    "Facebook's organic reach now sits mostly in groups and local discovery. Mengo plans it for community and local intent rather than for page posting.",
    [
      "Page organic reach is low; group participation and local recommendations carry far more weight.",
      "Local intent — recommendations, marketplace, events — remains genuinely strong.",
      "Video and native photo posts outperform link posts substantially.",
      "The audience skews older than Instagram or TikTok, which changes both offer and phrasing.",
    ],
    ["facebook-group-post", "local-community-post", "facebook-event-page", "facebook-video-post"],
    "Two to three posts a week plus consistent group participation.",
    ["Group engagement", "Local recommendation mentions", "Event responses", "Message enquiries"],
    ["home-services", "local-retail", "hospitality", "nonprofits", "real-estate"],
    [
      q("Is a Facebook page still worth maintaining?", "As credibility infrastructure, yes — people check it. As a distribution channel, rarely, and Mengo plans accordingly."),
      q("What about Facebook groups?", "Often the strongest part of the channel, especially for local and interest-based businesses. Mengo plans participation, not broadcasting."),
    ],
  ),
  c(
    "organic-search",
    "Organic Search",
    "Search is where demand that already exists goes looking. Mengo plans it as a compounding asset, starting with the queries closest to a purchase decision.",
    [
      "Intent varies enormously by query, and a page written for the wrong intent will not rank regardless of quality.",
      "Results compound over months, which makes search a poor choice for an urgent launch and an excellent one for a durable business.",
      "Topical depth across related pages outperforms isolated articles on the same terms.",
      "Internal linking between related pages is one of the few levers entirely within your control.",
    ],
    ["seo-article", "comparison-article", "landing-page", "faq-page", "glossary-entry", "location-page"],
    "Two to four substantial pages a month, plus continuous internal linking.",
    ["Rankings for commercial-intent queries", "Non-branded organic sessions", "Conversion rate from organic", "Pages earning links"],
    ["saas", "professional-services", "financial-services", "healthcare", "legal-services"],
    [
      q("How long until search works?", "Typically three to six months for meaningful movement on competitive terms, faster on specific long-tail queries. Mengo starts with the latter."),
      q("Should I write for search or for readers?", "For readers, structured for search. Mengo will not pad a page to a word count, because that no longer works and never read well."),
    ],
  ),
  c(
    "google-ads",
    "Google Ads",
    "Google Ads buys existing demand. Mengo plans it around the queries where someone is already deciding, and against a landing page written for that exact query.",
    [
      "Query intent and landing page must match precisely, or spend converts into bounces.",
      "Brand and non-brand campaigns behave completely differently and should never share a budget line.",
      "Cost is set by competition for intent, which means the cheapest useful clicks are usually on specific, unglamorous queries.",
      "Conversion tracking accuracy determines whether any optimisation is real.",
    ],
    ["search-ad-copy", "landing-page", "keyword-intent-map", "ad-extension-set", "negative-keyword-plan"],
    "Continuous, with structured review every two weeks.",
    ["Cost per qualified enquiry", "Search term relevance", "Landing page conversion rate", "Impression share on core terms"],
    ["legal-services", "home-services", "healthcare", "financial-services", "b2b-services"],
    [
      q("Does Mengo manage the spend?", "No. It produces the keyword intent map, ad copy and landing page copy. Bidding and spend stay in your account."),
      q("What budget is realistic to start?", "Enough to accumulate conversions on your core terms within a month. Below that, results are noise, and Mengo will say when a budget is too small to learn from."),
    ],
  ),
  c(
    "meta-ads",
    "Meta Ads",
    "Meta Ads create demand rather than capture it, which means the creative carries almost all of the performance and the targeting carries much less than people expect.",
    [
      "Creative is the primary lever; broad targeting with strong creative usually beats narrow targeting with weak creative.",
      "The first three seconds decide whether the spend produced anything at all.",
      "Retargeting and prospecting need entirely different messages and should be budgeted separately.",
      "Creative fatigue is real and predictable, so a refresh cadence belongs in the plan from the start.",
    ],
    ["meta-ad-creative-brief", "meta-ad-copy", "retargeting-sequence", "ugc-brief", "offer-angle-set"],
    "Continuous, with new creative every two to three weeks.",
    ["Cost per result by creative", "Hook retention", "Frequency before fatigue", "Retargeting conversion rate"],
    ["ecommerce", "fitness-wellness", "education", "beauty-salons", "hospitality"],
    [
      q("How many creatives do I need?", "Enough distinct angles to learn from — usually three to five per test, varying the claim rather than the colour."),
      q("Can Mengo produce the video itself?", "It produces the creative brief, script and copy. Filming and editing stay with you, which keeps the footage genuinely yours."),
    ],
  ),
  c(
    "pinterest",
    "Pinterest",
    "Pinterest behaves like a visual search engine with a long tail. Mengo plans it where purchase intent is visual and the buying window is long.",
    [
      "Pins keep earning impressions for months, unlike feed posts that expire in hours.",
      "Search terms matter, so pin titles and descriptions are written for query language.",
      "Vertical, text-overlaid images outperform lifestyle photography without context.",
      "Boards function as topical clusters, which rewards planning rather than ad hoc pinning.",
    ],
    ["pin-design-brief", "pin-description", "board-structure-plan", "idea-pin-script"],
    "Consistent weekly pinning against a planned board structure.",
    ["Outbound clicks", "Saves", "Impressions over a 90-day tail", "Traffic to product or booking pages"],
    ["ecommerce", "interior-design", "events-weddings", "food-beverage", "beauty-salons"],
    [
      q("Is Pinterest only for consumer brands?", "Mostly. It works where the purchase is visual and considered. Mengo ranks it low for most B2B and will say so rather than recommending it broadly."),
      q("How long before Pinterest produces traffic?", "Slower to start than feed platforms, but it keeps producing. Expect movement over months, not weeks."),
    ],
  ),
  c(
    "podcasts",
    "Podcasts",
    "Podcast audiences are small and disproportionately trusting. Mengo plans podcasting for depth of trust, not reach, and usually as guesting before hosting.",
    [
      "Listener trust is unusually high, which makes a mention convert far above its audience size.",
      "Guesting on established shows is faster and cheaper than building your own audience.",
      "Episodes are searchable and durable, and transcripts extend that into search.",
      "Attribution is genuinely difficult, so the channel is judged on assisted rather than direct conversion.",
    ],
    ["podcast-pitch", "guest-talking-points", "episode-outline", "show-notes", "podcast-clip-plan"],
    "Two to four guest appearances a quarter, or one owned episode a fortnight.",
    ["Direct traffic spikes after episodes", "Mentions in sales conversations", "Email signups from episode pages", "Repeat invitations"],
    ["b2b-services", "consulting-firms", "saas", "financial-services", "education"],
    [
      q("Should I start my own show?", "Usually not first. Guesting tests whether your message resonates in audio before you commit to a production schedule."),
      q("How do I pitch a podcast successfully?", "With a specific angle their audience has not heard, not with a biography. Mengo writes pitches against the show's actual back catalogue."),
    ],
  ),
  c(
    "events-webinars",
    "Events & Webinars",
    "A live event compresses the whole funnel into an hour. Mengo plans the promotion, the session structure and the follow-up as one system, because the follow-up is where the value is.",
    [
      "Registration is a much lower bar than attendance, so the plan must drive both separately.",
      "The recording is often worth more than the live session, and should be planned as an asset from the start.",
      "Follow-up within 48 hours determines the majority of the outcome.",
      "Live questions are the highest-quality market research most businesses ever get.",
    ],
    ["webinar-promotion-sequence", "session-outline", "registration-page", "attendance-reminder-set", "post-event-sequence", "event-followup-note"],
    "One event a month or quarter, with a four-week promotion window.",
    ["Registration-to-attendance rate", "Questions asked per attendee", "Follow-up reply rate", "Bookings within 14 days"],
    ["b2b-services", "saas", "education", "financial-services", "professional-services"],
    [
      q("What attendance is worth running an event for?", "Fewer than most people assume. Twenty engaged attendees in a considered-purchase business is a strong pipeline week."),
      q("Does Mengo handle registration?", "No. It writes the promotion sequence, registration page copy, session outline and follow-up. Hosting stays in your event tool."),
    ],
  ),
];

export const channelBySlug = new Map(channels.map((x) => [x.slug, x]));
