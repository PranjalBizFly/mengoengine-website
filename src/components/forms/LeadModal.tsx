"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { buttonClass } from "@/components/ui/primitives";
import { EVENTS, track } from "@/lib/analytics";

/**
 * One modal form architecture for the whole site.
 *
 * Any conversion trigger anywhere opens this, configured by intent. Pages never
 * define their own modal, and the source path is captured automatically so the
 * team can see which page produced an enquiry.
 */

export type LeadIntent =
  | "waitlist"
  | "demo"
  | "sales"
  | "expert"
  | "download"
  | "enquiry"
  | "investor"
  | "speaking";

interface IntentConfig {
  heading: string;
  body: string;
  submit: string;
  fields: FieldName[];
  successHeading: string;
  successBody: string;
}

type FieldName =
  | "name"
  | "email"
  | "company"
  | "phone"
  | "website"
  | "industry"
  | "designation"
  | "looking_for"
  | "organisation"
  | "event_type"
  | "event_date"
  | "audience_size"
  | "message";

const INTENTS: Record<LeadIntent, IntentConfig> = {
  waitlist: {
    heading: "Join the Mengo waitlist",
    body: "Early access opens in batches. Tell us what is actually broken in your marketing and we will prioritise accordingly.",
    submit: "Join our waitlist",
    fields: ["name", "email", "phone", "company", "designation", "looking_for"],
    successHeading: "You are on the list",
    successBody: "We will be in touch as access opens. If you described a specific problem, expect a reply about it rather than a newsletter.",
  },
  demo: {
    heading: "Request a walkthrough",
    body: "A short session showing the brief, the calendar and the assets built against a business like yours.",
    submit: "Request a walkthrough",
    fields: ["name", "email", "company", "website", "message"],
    successHeading: "Request received",
    successBody: "We will follow up to arrange a time. Anything you added about your setup will be read before the call.",
  },
  sales: {
    heading: "Talk to the team",
    body: "For questions about fit, pricing or running Mengo across multiple accounts.",
    submit: "Start the conversation",
    fields: ["name", "email", "company", "phone", "message"],
    successHeading: "Message sent",
    successBody: "You will get a direct reply rather than a sequence.",
  },
  expert: {
    heading: "Talk to an expert",
    body: "Describe the situation and we will tell you honestly whether Mengo is the right answer for it.",
    submit: "Send the question",
    fields: ["name", "email", "company", "industry", "message"],
    successHeading: "Question received",
    successBody: "We will reply with a straight answer, including when the answer is that you need something else.",
  },
  download: {
    heading: "Get the resource",
    body: "Send it to your inbox, along with the follow-up sequence it belongs with.",
    submit: "Send it to me",
    fields: ["name", "email", "company"],
    successHeading: "On its way",
    successBody: "Check your inbox. If it has not arrived in a few minutes, check the promotions tab before assuming it failed.",
  },
  enquiry: {
    heading: "Send an enquiry",
    body: "Partnerships, press, or anything that does not fit the other options.",
    submit: "Send enquiry",
    fields: ["name", "email", "company", "message"],
    successHeading: "Enquiry received",
    successBody: "We read everything that comes through here and reply to what needs a reply.",
  },
  speaking: {
    heading: "Invite Jainam to speak",
    body: "For keynotes, workshops, webinars, panels, or school and startup events, send the details and the team will get back to you.",
    submit: "Send invitation",
    fields: ["name", "email", "phone", "organisation", "event_type", "event_date", "audience_size", "message"],
    successHeading: "Invitation sent",
    successBody: "Thank you. Your invitation has been received and the team will be in touch within 48 hours.",
  },
  investor: {
    heading: "Investor enquiry",
    body: "Traction, financials and cap table detail are shared directly rather than published. Tell us a little about your fund or thesis.",
    submit: "Start the conversation",
    fields: ["name", "email", "company", "message"],
    successHeading: "Thank you",
    successBody: "The founder handles these directly and will reply.",
  },
};

const FIELDS: Record<
  FieldName,
  {
    label: string;
    type: string;
    required: boolean;
    autoComplete?: string;
    textarea?: boolean;
    placeholder?: string;
    /** Renders a select rather than a free-text input. */
    options?: string[];
  }
> = {
  name: { label: "Your name", type: "text", required: true, autoComplete: "name" },
  email: { label: "Work email", type: "email", required: true, autoComplete: "email" },
  company: { label: "Company", type: "text", required: false, autoComplete: "organization" },
  phone: { label: "Phone", type: "tel", required: false, autoComplete: "tel" },
  website: { label: "Website", type: "url", required: false, autoComplete: "url", placeholder: "https://" },
  industry: { label: "Industry", type: "text", required: false, placeholder: "e.g. dental practice, B2B services" },
  designation: { label: "Designation", type: "text", required: false, autoComplete: "organization-title" },
  looking_for: {
    label: "What are you looking for?",
    type: "text",
    required: false,
    textarea: true,
    placeholder: "e.g. content creation, lead generation, marketing strategy",
  },
  organisation: { label: "Organisation / school", type: "text", required: false, autoComplete: "organization" },
  event_type: {
    label: "Event type",
    type: "text",
    required: false,
    options: ["Keynote", "Workshop", "Webinar", "Panel", "School session", "Other"],
  },
  event_date: { label: "Event date", type: "date", required: false },
  audience_size: {
    label: "Expected audience size",
    type: "text",
    required: false,
    options: ["Under 50", "50-200", "200-500", "500+"],
  },
  message: { label: "What is not working right now?", type: "text", required: false, textarea: true },
};

/**
 * Validation.
 *
 * Native constraint validation gives the browser's own messages, which vary by
 * browser and locale and cannot be styled or announced consistently. This
 * produces one human-readable message per field, wired to the input through
 * `aria-describedby` and `aria-invalid`.
 */
const MAX_LENGTH: Partial<Record<FieldName, number>> = { message: 2000, looking_for: 2000 };

function validate(fields: FieldName[], data: FormData): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};

  for (const field of fields) {
    const config = FIELDS[field];
    const raw = data.get(field);
    const value = typeof raw === "string" ? raw.trim() : "";

    if (config.required && value === "") {
      errors[field] = `${config.label} is required.`;
      continue;
    }
    if (value === "") continue;

    if (config.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      errors[field] = "That does not look like an email address. Check for a typo.";
    }
    if (config.type === "tel" && !/^[\d\s()+.-]{6,}$/.test(value)) {
      errors[field] = "Use digits, spaces and the usual phone punctuation only.";
    }
    if (config.type === "url" && !/^https?:\/\/\S+\.\S+/.test(value)) {
      errors[field] = "Include the full address, starting with https://";
    }
    const max = MAX_LENGTH[field];
    if (max && value.length > max) {
      errors[field] = `Keep this under ${max.toLocaleString()} characters — currently ${value.length.toLocaleString()}.`;
    }
  }
  return errors;
}

interface ModalState {
  intent: LeadIntent;
  /** Where the visitor was when they triggered it. Submitted with the form. */
  source: string;
  /** Optional context, e.g. the resource being requested. */
  subject?: string;
}

interface LeadModalContext {
  open: (intent: LeadIntent, subject?: string) => void;
}

const Ctx = createContext<LeadModalContext | null>(null);

export function useLeadModal(): LeadModalContext {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLeadModal must be used inside <LeadModalProvider>");
  return ctx;
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ModalState | null>(null);
  const pathname = usePathname();

  const open = useCallback(
    (intent: LeadIntent, subject?: string) => {
      track(EVENTS.formOpen, { intent, source: pathname, subject: subject ?? null });
      setState({ intent, source: pathname, subject });
    },
    [pathname],
  );

  const value = useMemo(() => ({ open }), [open]);

  return (
    <Ctx.Provider value={value}>
      {children}
      {state ? <Modal state={state} onClose={() => setState(null)} /> : null}
    </Ctx.Provider>
  );
}

function Modal({ state, onClose }: { state: ModalState; onClose: () => void }) {
  const config = INTENTS[state.intent];
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});
  const summaryRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const node = dialogRef.current;
    node?.querySelector<HTMLElement>("input, textarea, button")?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !node) return;
      const focusable = node.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Guard against a double submit from a fast second click or Enter key.
    if (status === "sending") return;

    const form = new FormData(event.currentTarget);
    // Honeypot: a real person never fills a field they cannot see.
    if (form.get("company_website")) {
      setStatus("sent");
      return;
    }

    const errors = validate(config.fields, form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError(null);
      track(EVENTS.formValidationError, {
        intent: state.intent,
        source: state.source,
        reason: Object.keys(errors).join(", "),
      });
      // Announce the summary, then send focus to the first field at fault.
      requestAnimationFrame(() => {
        const first = Object.keys(errors)[0];
        dialogRef.current?.querySelector<HTMLElement>(`#${titleId}-${first}`)?.focus();
      });
      return;
    }

    setFieldErrors({});
    setStatus("sending");
    setError(null);
    track(EVENTS.formSubmit, { intent: state.intent, source: state.source, subject: state.subject ?? null });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(form.entries()),
          intent: state.intent,
          source: state.source,
          subject: state.subject ?? null,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      track(EVENTS.formSuccess, { intent: state.intent, source: state.source, subject: state.subject ?? null });
      if (state.intent === "download") {
        track(EVENTS.resourceRequest, { intent: state.intent, subject: state.subject ?? null, source: state.source });
      }
    } catch {
      setStatus("error");
      setError(
        "That did not send — it may be a connection problem rather than anything you did. Try again, or reach us through the contact page.",
      );
      track(EVENTS.formError, { intent: state.intent, source: state.source, reason: "network-or-server" });
    }
  }

  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center overscroll-contain p-0 sm:items-center sm:p-6">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-forest/70 backdrop-blur-[2px]"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[92dvh] w-full max-w-[34rem] overflow-y-auto rounded-t-2xl bg-paper p-6 shadow-lift sm:rounded-2xl sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-graphite-soft transition-colors hover:bg-paper-warm hover:text-graphite"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="py-6">
            <h2 id={titleId} className="text-d4">
              {config.successHeading}
            </h2>
            <p className="mt-4 text-body leading-relaxed text-graphite-soft">{config.successBody}</p>
            <button type="button" onClick={onClose} className={buttonClass("secondary", "mt-8")}>
              Close
            </button>
          </div>
        ) : (
          <>
            <h2 id={titleId} className="pr-10 text-d4">
              {config.heading}
            </h2>
            <p className="mt-3 text-body leading-relaxed text-graphite-soft">{config.body}</p>
            {state.subject ? (
              <p className="eyebrow mt-4">Regarding: {state.subject}</p>
            ) : null}

            <form onSubmit={onSubmit} className="mt-7 grid gap-5" noValidate>
              <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
                <label htmlFor="company_website">Do not fill this in</label>
                <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {Object.keys(fieldErrors).length > 0 ? (
                <p ref={summaryRef} role="alert" className="rounded-xl bg-signal-error/10 px-4 py-3 text-small text-signal-error">
                  {Object.keys(fieldErrors).length === 1
                    ? "One field needs attention before this can be sent."
                    : `${Object.keys(fieldErrors).length} fields need attention before this can be sent.`}
                </p>
              ) : null}

              {config.fields.map((field) => (
                <Field key={field} name={field} error={fieldErrors[field]} idPrefix={titleId} />
              ))}

              {error ? (
                <div role="alert" className="rounded-xl bg-signal-error/10 px-4 py-3">
                  <p className="text-small text-signal-error">{error}</p>
                </div>
              ) : null}

              <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "w-full disabled:opacity-60")}>
                {status === "sending" ? "Sending…" : status === "error" ? "Try again" : config.submit}
              </button>

              <p className="text-fine leading-relaxed text-graphite-soft">
                We use this only to reply and, where you asked for it, to send what you requested. See the{" "}
                <a href="/legal/privacy-policy/" className="underline decoration-lime-deep underline-offset-2">
                  privacy policy
                </a>
                .
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ name, error, idPrefix }: { name: FieldName; error?: string; idPrefix: string }) {
  const config = FIELDS[name];
  const id = `${idPrefix}-${name}`;
  const errorId = `${id}-error`;
  const shared = `mt-2 w-full rounded-xl border bg-white px-4 py-3 text-body text-graphite outline-none transition-colors placeholder:text-graphite-soft/60 ${
    error ? "border-signal-error focus:border-signal-error" : "border-paper-line focus:border-lime-deep"
  }`;
  const a11y = {
    "aria-invalid": error ? (true as const) : undefined,
    "aria-describedby": error ? errorId : undefined,
  };

  return (
    <div>
      <label htmlFor={id} className="text-fine font-semibold text-graphite">
        {config.label}
        {config.required ? (
          <span className="text-lime-deep"> *</span>
        ) : (
          <span className="font-normal text-graphite-soft"> (optional)</span>
        )}
      </label>
      {config.options ? (
        <select id={id} name={name} defaultValue="" className={shared} {...a11y}>
          <option value="" disabled>
            Select {config.label.toLowerCase()}
          </option>
          {config.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : config.textarea ? (
        <textarea id={id} name={name} rows={3} placeholder={config.placeholder} className={shared} {...a11y} />
      ) : (
        <input
          id={id}
          name={name}
          type={config.type}
          autoComplete={config.autoComplete}
          placeholder={config.placeholder}
          className={shared}
          {...a11y}
        />
      )}
      {error ? (
        <p id={errorId} className="mt-1.5 text-fine text-signal-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/**
 * The same form, rendered inline rather than in a dialog.
 *
 * Contact and waitlist pages need a form on the page itself — a modal that has
 * to be opened before a visitor can do the only thing the page exists for is a
 * gratuitous step. Both share one intent config, one field set and one endpoint.
 */
export function InlineLeadForm({ intent, subject }: { intent: LeadIntent; subject?: string }) {
  const config = INTENTS[intent];
  const pathname = usePathname();
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = new FormData(event.currentTarget);
    if (form.get("company_website")) {
      setStatus("sent");
      return;
    }

    const errors = validate(config.fields, form);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      track(EVENTS.formValidationError, { intent, source: pathname, reason: Object.keys(errors).join(", ") });
      requestAnimationFrame(() => {
        document.getElementById(`${formId}-${Object.keys(errors)[0]}`)?.focus();
      });
      return;
    }

    setFieldErrors({});
    setStatus("sending");
    track(EVENTS.formSubmit, { intent, source: pathname, subject: subject ?? null });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...Object.fromEntries(form.entries()),
          intent,
          source: pathname,
          subject: subject ?? null,
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus("sent");
      track(EVENTS.formSuccess, { intent, source: pathname, subject: subject ?? null });
    } catch {
      setStatus("error");
      track(EVENTS.formError, { intent, source: pathname, reason: "network-or-server" });
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="rule-t pt-8">
        <h2 className="text-d4">{config.successHeading}</h2>
        <p className="mt-3 max-w-[46ch] text-body leading-relaxed text-graphite-soft">{config.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
        <label htmlFor="inline_company_website">Do not fill this in</label>
        <input id="inline_company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {Object.keys(fieldErrors).length > 0 ? (
        <p role="alert" className="rounded-xl bg-signal-error/10 px-4 py-3 text-small text-signal-error">
          {Object.keys(fieldErrors).length === 1
            ? "One field needs attention before this can be sent."
            : `${Object.keys(fieldErrors).length} fields need attention before this can be sent.`}
        </p>
      ) : null}

      {config.fields.map((field) => (
        <Field key={field} name={field} error={fieldErrors[field]} idPrefix={formId} />
      ))}

      {status === "error" ? (
        <div role="alert" className="rounded-xl bg-signal-error/10 px-4 py-3">
          <p className="text-small text-signal-error">
            That did not send — it may be a connection problem rather than anything you did. Try again, or reach us on
            one of the social accounts in the footer.
          </p>
        </div>
      ) : null}

      <button type="submit" disabled={status === "sending"} className={buttonClass("primary", "justify-self-start disabled:opacity-60")}>
        {status === "sending" ? "Sending…" : status === "error" ? "Try again" : config.submit}
      </button>

      <p className="max-w-[46ch] text-fine leading-relaxed text-graphite-soft">
        We use this only to reply and, where you asked for it, to send what you requested. See the{" "}
        <a href="/legal/privacy-policy/" className="underline decoration-lime-deep underline-offset-2">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}

/** The trigger used everywhere a conversion action appears. */
export function LeadButton({
  intent = "waitlist",
  subject,
  children,
  variant = "primary",
  className = "",
}: {
  intent?: LeadIntent;
  subject?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const { open } = useLeadModal();
  return (
    <button
      type="button"
      onClick={() => {
        track(EVENTS.ctaClick, { intent, subject: subject ?? null });
        open(intent, subject);
      }}
      className={buttonClass(variant, className)}
    >
      {children}
    </button>
  );
}
