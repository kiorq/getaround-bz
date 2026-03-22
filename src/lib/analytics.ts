declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

function sendEvent({ action, category, label, value }: GTagEvent) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// ── CTA Clicks ────────────────────────────────────────────────────────────────
export function trackCtaClick(label: string, location: string) {
  sendEvent({
    action: "cta_click",
    category: "engagement",
    label: `${location}: ${label}`,
  });
}

// ── Navigation Link Clicks ────────────────────────────────────────────────────
export function trackNavClick(label: string) {
  sendEvent({
    action: "nav_click",
    category: "engagement",
    label,
  });
}

// ── Signup Funnel Events ──────────────────────────────────────────────────────
export function trackSignupStep(step: number, question: string) {
  sendEvent({
    action: "signup_step",
    category: "signup_funnel",
    label: `step_${step}: ${question}`,
    value: step,
  });
}

export function trackSignupSubmit(success: boolean) {
  sendEvent({
    action: success ? "signup_complete" : "signup_error",
    category: "signup_funnel",
    label: success ? "form_submitted" : "form_failed",
  });
}

export function trackSignupDropOff(step: number, question: string) {
  sendEvent({
    action: "signup_dropoff",
    category: "signup_funnel",
    label: `step_${step}: ${question}`,
    value: step,
  });
}

// ── Feature Section Views ─────────────────────────────────────────────────────
export function trackSectionView(section: string) {
  sendEvent({
    action: "section_view",
    category: "engagement",
    label: section,
  });
}
