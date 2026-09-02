import type { SubSite } from "@/lib/subdomains";
import { mainUrl, siteUrl } from "@/lib/subdomains";

/**
 * The media site.
 *
 * Register: editorial, newsroom shape.
 *
 * The prohibition that matters most in this ecosystem lives here. Fabricated
 * press coverage — an invented publication, a plausible journalist's name, a
 * quote nobody said — is not an exaggeration, it is a fabricated third-party
 * endorsement. It would be repeated by anyone who found it, and it would damage
 * real publications by association. So the coverage page is empty and says so,
 * and no publication, journalist or quotation appears anywhere on this site.
 *
 * The company facts page is the useful counterweight: everything a journalist
 * would otherwise guess at, sourced from what the company has actually
 * published, in a form that can be quoted.
 */
export const media: SubSite = {
  key: "media",
  name: "Mengo Media",
  shortName: "Media",
  tagline: "Newsroom and press resources",
  description:
    "Press resources for Mengo: verified company facts, brand assets, and how to reach the company for interviews and comment.",
  register: "editorial",
  nav: [
    { label: "Newsroom", path: "" },
    { label: "Announcements", path: "announcements" },
    { label: "Company facts", path: "company-facts" },
    { label: "Brand assets", path: "brand-assets" },
    { label: "Media kit", path: "media-kit" },
    { label: "Contact", path: "contact" },
  ],
  pages: [
    {
      path: "",
      title: "Mengo Media",
      seoTitle: "Mengo Media — newsroom and press resources",
      seoDescription:
        "Press resources for Mengo: verified company facts, brand assets and usage rules, and how to reach the company for interviews and comment.",
      hero: {
        kind: "editorial",
        eyebrow: "Newsroom",
        title: "Press resources",
        lead:
          "Everything on this site is verified against what the company has published. There is no press coverage to list and no announcements have been issued, and both pages say so rather than being filled.",
        actions: [
          { label: "Company facts", href: "company-facts" },
          { label: "Brand assets", href: "brand-assets" },
        ],
        facts: [
          { label: "Announcements", value: "None issued" },
          { label: "Press coverage", value: "None listed" },
          { label: "Spokesperson", value: "Jainam Jain, founder" },
          { label: "Company stage", value: "Pre-launch" },
        ],
      },
      blocks: [
        {
          type: "callout",
          heading: "A note on what is not here",
          body:
            "This newsroom lists no press coverage and no press releases. That is because none exists to list — not because it is held elsewhere. If you are verifying a claim about Mengo that you found somewhere else, the company facts page is the source of record, and anything not on it has not come from the company.",
          action: { label: "Company facts", href: "company-facts" },
        },
        {
          type: "index",
          heading: "For journalists",
          links: [
            { label: "Company facts", href: "company-facts", blurb: "Verified, quotable facts about the company, the founder and the product." },
            { label: "Brand assets", href: "brand-assets", blurb: "The logo, and the rules for using it." },
            { label: "Media kit", href: "media-kit", blurb: "What is available and what is not." },
            { label: "Leadership", href: "leadership", blurb: "The founder's published background." },
            { label: "Media contact", href: "contact", blurb: "How to reach the company, and what to expect." },
          ],
        },
        {
          type: "index",
          heading: "The record",
          links: [
            { label: "News", href: "news", blurb: "Company news. Currently none." },
            { label: "Press releases", href: "press-releases", blurb: "Formal releases. Currently none." },
            { label: "Media coverage", href: "coverage", blurb: "Third-party coverage. Deliberately empty." },
            { label: "Announcements", href: "announcements", blurb: "Product and company announcements." },
          ],
        },
      ],
    },

    {
      path: "news",
      title: "News",
      group: "The record",
      seoTitle: "Mengo news",
      seoDescription:
        "Company news from Mengo. No news items have been published; this page explains what will appear here.",
      hero: {
        kind: "document",
        eyebrow: "The record",
        title: "News",
        lead:
          "Nothing has been published. The company is pre-launch and has not made any public announcements.",
      },
      blocks: [
        {
          type: "prose",
          heading: "What will appear here",
          body: [
            "Company news: things that have happened rather than things that are planned. A launch, a funding event, a significant product release, a change in the company's position on something it has previously published.",
            "Roadmap intentions and product plans do not belong here, because a newsroom that carries intentions becomes indistinguishable from marketing and stops being useful to a journalist.",
          ],
        },
        {
          type: "callout",
          heading: "In the meantime",
          body:
            "The company facts page carries everything currently verifiable about Mengo, and is the appropriate source for anything you need to attribute.",
          action: { label: "Company facts", href: "company-facts" },
        },
      ],
    },

    {
      path: "press-releases",
      title: "Press releases",
      navLabel: "Press releases",
      group: "The record",
      seoTitle: "Mengo press releases",
      seoDescription:
        "Formal press releases from Mengo. None have been issued; this page explains the distinction between a release and an announcement.",
      hero: {
        kind: "document",
        eyebrow: "The record",
        title: "Press releases",
        lead:
          "None issued. Kept separate from announcements deliberately, because the two are different things and merging them inflates the record.",
      },
      blocks: [
        {
          type: "definitions",
          heading: "The distinction this site keeps",
          items: [
            { label: "A press release", body: "A formal, dated statement issued for publication, with a quote and a contact. Written to be reproduced." },
            { label: "An announcement", body: "The company saying something publicly — a product change, a policy update. Written to inform users rather than to be reproduced." },
            { label: "News", body: "Something that happened, recorded after the fact." },
            { label: "Coverage", body: "What other people published about the company. Not ours to write, which is why that page is empty and will stay that way until it is not." },
          ],
        },
        {
          type: "pending",
          heading: "Press release archive",
          body:
            "No releases have been issued. When they are, they will be dated, kept permanently, and not silently edited after publication.",
          needs: [
            "The first release, when there is something to announce",
            "A named press contact for attribution",
            "Whether releases are distributed through a wire service",
          ],
        },
      ],
    },

    {
      path: "coverage",
      title: "Media coverage",
      navLabel: "Coverage",
      group: "The record",
      seoTitle: "Media coverage of Mengo",
      seoDescription:
        "Third-party media coverage of Mengo. None is listed, and this page explains why nothing will be listed here that cannot be linked.",
      hero: {
        kind: "document",
        eyebrow: "The record",
        title: "Media coverage",
        lead:
          "Nothing is listed. This is the page on which a company is most tempted to overstate, so it is worth being explicit about the rule applied to it.",
      },
      blocks: [
        {
          type: "prose",
          heading: "The rule",
          body: [
            "Only coverage that can be linked to appears here, with the publication named and the date given, so that anyone can check it. No paraphrased mentions, no logos without articles behind them, no “as featured in” without a link.",
            "The founder's published record includes several awards and a TEDx appearance, which are recorded on the founder page and on the leadership page here. Those are the company's own account of them; they are not press coverage and are not listed as such.",
          ],
        },
        {
          type: "callout",
          heading: "If you have written about Mengo",
          body:
            "Send the link through the media contact route and it will be added. If something you have found attributes a claim to Mengo that does not appear on the company facts page, it did not come from the company.",
          action: { label: "Media contact", href: "contact" },
        },
      ],
    },

    {
      path: "announcements",
      title: "Announcements",
      group: "The record",
      seoTitle: "Mengo announcements",
      seoDescription:
        "Product and company announcements from Mengo. None have been issued; this page explains what will be announced here and what will not.",
      hero: {
        kind: "document",
        eyebrow: "The record",
        title: "Announcements",
        lead:
          "None issued. What would appear here is product and policy change that affects users, rather than news written for reproduction.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What gets announced",
          items: [
            "Changes to what the product does, particularly any change to the boundary — publishing, sending, ad spend — since that boundary is published as a commitment.",
            "Changes to the legal terms, privacy policy or acceptable use policy.",
            "Access opening to a new waitlist batch.",
            "Anything the company has previously published that turns out to be wrong.",
          ],
        },
        {
          type: "callout",
          heading: "Where product changes are recorded",
          body:
            "Developer-facing changes are recorded on the developer changelog, and operational events on the status site. This page is for changes a user or a journalist would care about.",
          action: { label: "Developer changelog", href: siteUrl("developers", "changelog"), external: true },
        },
      ],
    },

    {
      path: "company-facts",
      title: "Company facts",
      navLabel: "Company facts",
      group: "For journalists",
      seoTitle: "Mengo company facts — the verified record",
      seoDescription:
        "Verified, quotable facts about Mengo: what the product does, the founder's published background, the company's stage, and what is deliberately not published.",
      hero: {
        kind: "split",
        eyebrow: "For journalists",
        title: "Company facts",
        lead:
          "The source of record. Everything here is drawn from what the company has published and is safe to quote. Anything attributed to Mengo that is not on this page did not come from the company.",
        facts: [
          { label: "Trading name", value: "Mengo" },
          { label: "Product", value: "MengoEngine" },
          { label: "Founder", value: "Jainam Jain" },
          { label: "Stage", value: "Pre-launch, waitlist" },
        ],
      },
      blocks: [
        {
          type: "table",
          heading: "The product",
          columns: ["", ""],
          rows: [
            ["What it is", "An AI co-founder for the marketing function of small businesses"],
            ["Input", "A single guided business brief — no integrations, no onboarding call"],
            ["Output", "A strategy layer, a 365-day calendar, platform-native assets, nurture sequences and a small metric set"],
            ["Structure", "Five engines: Marketing Engine, Content Studio, Campaign Lab, Lead Nurturing, Growth Signal"],
            ["What it does not do", "Publish, send email, hold ad spend, buy media, produce video, or act as a system of record"],
            ["Claim handling", "Statistics and outcomes appear only where the user supplied them; unsourced claims surface as explicit gaps"],
          ],
        },
        {
          type: "checklist",
          heading: "The founder, as published",
          intro:
            "From the founder page on the main site. Each of these is the company's own published statement.",
          items: [
            "Jainam Jain founded Mengo Engine at 14",
            "Described as Dubai's youngest AI startup founder",
            "National Young Achievers Award, honoured by Suryadatta Institutes, February 2025",
            "Change Your Life: Super Hero Award, presented by Bollywood actor Sonu Sood at LifeGurukul, January 2025",
            "Jain Baal Ratna and Jain Star Puraskar, honoured by Shrirampur Shree Sangh and Bhagwan Mahavir Swami Samiti, 2024",
            "Completed IGCSE 10th board exams at age 13",
            "TEDx speaker, and a leadership coach delivering keynotes and workshops",
          ],
        },
        {
          type: "definitions",
          heading: "What is deliberately not published",
          intro:
            "Listed so that an absence is not mistaken for something a journalist merely failed to find.",
          items: [
            { label: "Funding, revenue and valuation", body: "The company's stated position is that traction, financial and cap table details are shared directly with prospective investors rather than published." },
            { label: "User or customer numbers", body: "Not published. The product is pre-launch with access opening in batches from a waitlist." },
            { label: "Team size and composition", body: "Not published. The founder is the only publicly named person." },
            { label: "Customers and case studies", body: "None published, and none exist to cite." },
            { label: "Corporate registration details", body: "Registered entity, number and jurisdiction are not published." },
          ],
        },
        {
          type: "callout",
          heading: "Quoting the company",
          body:
            "Statements of position — the product thesis, the boundary, the responsible-AI stance — can be quoted from the published pages, which are linked throughout this ecosystem. For a fresh quote or an interview, use the media contact route.",
          action: { label: "Media contact", href: "contact" },
        },
      ],
    },

    {
      path: "brand-assets",
      title: "Brand assets",
      navLabel: "Brand assets",
      group: "For journalists",
      seoTitle: "Mengo brand assets and usage rules",
      seoDescription:
        "The Mengo mark and wordmark, the brand colours, and the rules for using them in editorial and partner contexts.",
      hero: {
        kind: "document",
        eyebrow: "For journalists",
        title: "Brand assets",
        lead:
          "The mark, the wordmark and the colours, with the rules that apply to them. Usable in editorial coverage without asking.",
      },
      blocks: [
        {
          type: "table",
          heading: "The palette",
          intro:
            "The two brand colours. Everything else in the identity is a neutral built around them.",
          columns: ["Colour", "Value", "Use"],
          rows: [
            ["Lime", "#A3E625", "The accent. Never a background for body text."],
            ["Deep forest", "#022018", "The dark ground the identity sits on."],
          ],
        },
        {
          type: "definitions",
          heading: "Usage rules",
          items: [
            { label: "Do not recolour the mark", body: "The lime mark is legible on both light and dark grounds and does not need an alternate version." },
            { label: "Do not alter the lockup", body: "The mark and wordmark have a fixed relationship. Do not re-space, re-set the wordmark in another typeface, or add a tagline into the lockup." },
            { label: "Do not imply endorsement", body: "Using the mark in editorial coverage is fine. Using it to suggest partnership, certification or endorsement is not, and there is currently no partner status that could be represented." },
            { label: "Leave clear space", body: "Keep clear space around the lockup at least equal to the height of the mark." },
            { label: "Company name", body: "The trading name is Mengo; the product is MengoEngine. Both are written as one word with a capital M, and MengoEngine carries a capital E." },
          ],
        },
        {
          type: "pending",
          heading: "A downloadable asset pack",
          body:
            "The mark is available on the site in the form the site itself uses. A proper press pack — vector files, cleared photography, approved screenshots — has not been assembled.",
          needs: [
            "Vector logo files in a downloadable archive",
            "Approved product screenshots",
            "A cleared founder photograph with usage rights stated",
            "A written brand guideline document",
          ],
          action: { label: "Request assets", href: "contact" },
        },
      ],
    },

    {
      path: "media-kit",
      title: "Media kit",
      navLabel: "Media kit",
      group: "For journalists",
      seoTitle: "Mengo media kit — what is available",
      seoDescription:
        "What the Mengo media kit currently contains, what it does not, and how to request material that has not been assembled.",
      hero: {
        kind: "document",
        eyebrow: "For journalists",
        title: "Media kit",
        lead:
          "There is no downloadable kit. What a kit would contain is available in pieces, and this page says where each piece is.",
      },
      blocks: [
        {
          type: "index",
          heading: "Available now",
          links: [
            { label: "Company facts", href: "company-facts", blurb: "The verified, quotable record — the substance of any kit." },
            { label: "Brand assets and usage rules", href: "brand-assets", blurb: "The mark, the palette and the rules." },
            { label: "Founder background", href: "leadership", blurb: "The published record." },
            { label: "Product documentation", href: siteUrl("docs"), external: true, blurb: "The most accurate description of what has been built." },
            { label: "Responsible AI position", href: mainUrl("/company/responsible-ai/"), external: true, blurb: "The company's stated position on claim safety — usually the most newsworthy part." },
          ],
        },
        {
          type: "pending",
          heading: "A packaged kit",
          body:
            "Assembling a downloadable kit requires cleared assets that do not currently exist.",
          needs: [
            "Vector logo archive",
            "Cleared founder photography with stated usage rights",
            "Approved product screenshots",
            "A one-page company summary as a document",
            "Boilerplate copy for the end of an article",
          ],
          action: { label: "Request what you need", href: "contact" },
        },
      ],
    },

    {
      path: "leadership",
      title: "Leadership and interviews",
      navLabel: "Leadership",
      group: "For journalists",
      seoTitle: "Leadership and interviews — Jainam Jain",
      seoDescription:
        "The founder's published background, the topics he can speak to, and how to request an interview or comment.",
      hero: {
        kind: "document",
        eyebrow: "For journalists",
        title: "Leadership and interviews",
        lead:
          "One publicly named person. The topics below are ones on which the company has already taken a published position, which is usually the most useful basis for an interview.",
      },
      blocks: [
        {
          type: "prose",
          heading: "Jainam Jain, founder",
          body: [
            "Jainam founded Mengo Engine at 14, to solve a problem he kept seeing in the businesses around him: marketing that was slow, scattered and inconsistent, with founders spending their days writing captions instead of building their companies.",
            "He is a TEDx speaker and delivers keynotes, webinars, workshops and seminars aimed particularly at young people. Speaking enquiries are handled separately from press enquiries and go through the route on the main site's founder page.",
          ],
        },
        {
          type: "checklist",
          heading: "Topics with a published position",
          intro:
            "An interview on any of these can start from something already on the record rather than from first principles.",
          items: [
            "Why AI-written marketing content is converging on sameness, and what that implies for small businesses",
            "Claim safety: why the dangerous failure is a fluent invented fact rather than bad prose",
            "Why marketing fails in small businesses specifically — the missing external deadline",
            "The case for narrow AI products that refuse to expand into execution",
            "Building a company young, and what that is actually like",
          ],
        },
        {
          type: "callout",
          heading: "Requesting an interview",
          body:
            "Use the media contact route with your outlet, your angle and your deadline. A specific angle gets a faster and more useful response than a general request.",
          action: { label: "Media contact", href: "contact" },
        },
      ],
    },

    {
      path: "contact",
      title: "Media contact",
      navLabel: "Contact",
      group: "For journalists",
      seoTitle: "Media contact — press enquiries",
      seoDescription:
        "How to reach Mengo for press enquiries, interviews and fact checking, and what to include so the reply arrives before your deadline.",
      hero: {
        kind: "document",
        eyebrow: "For journalists",
        title: "Media contact",
        lead:
          "Press enquiries reach a small team directly. There is no press office, which means a specific request gets a much faster answer than a general one.",
      },
      blocks: [
        {
          type: "checklist",
          heading: "What to include",
          items: [
            "Your outlet and your deadline, in the first line.",
            "The angle, specifically. “A piece about AI marketing tools” and “whether guardrails actually stop AI inventing customer statistics” produce very different responses.",
            "Whether you need a quote, an interview, assets, or a fact checked.",
            "If you are fact checking: the exact claim and where you found it. Anything not on the company facts page did not come from the company.",
          ],
        },
        {
          type: "callout",
          heading: "The route",
          body:
            "Press enquiries go through the contact form on the main site. There is no dedicated press address, and this page will not invent one.",
          action: { label: "Contact form", href: mainUrl("/contact/"), external: true },
        },
        {
          type: "index",
          heading: "Before you write",
          links: [
            { label: "Company facts", href: "company-facts", blurb: "Most factual questions are answered here." },
            { label: "Brand assets", href: "brand-assets", blurb: "Usable without asking." },
            { label: "Speaking enquiries", href: mainUrl("/company/founder/"), external: true, blurb: "Handled separately from press." },
          ],
        },
      ],
    },
  ],
};
