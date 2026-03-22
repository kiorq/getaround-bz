// ─────────────────────────────────────────────────────────────────────────────
// SITE CONFIGURATION
// Edit this file to update text, links, CTAs and SEO across the entire site.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {

  // ── Brand — driven by env vars in .env ───────────────────────────────────
  name:        process.env.NEXT_PUBLIC_SITE_NAME    ?? "GetAround Belize",
  nameDisplay: {
    prefix:    process.env.NEXT_PUBLIC_SITE_NAME_PREFIX ?? "GetAround ",
    suffix:    process.env.NEXT_PUBLIC_SITE_NAME_SUFFIX ?? "Belize",
  },
  tagline: "Get around Belize, effortlessly.",
  description:
    "Book verified taxi rides across Belize in seconds. No app download, no haggling — just a trusted local driver waiting for you.",

  // ── URLs ─────────────────────────────────────────────────────────────────
  url:           process.env.NEXT_PUBLIC_SITE_URL        ?? "https://getaround.bz",
  ogImage:       "/og-image.png",   // place a 1200×630 image in /public

  // ── SEO ──────────────────────────────────────────────────────────────────
  seo: {
    title: "Taxi in Belize Made Easy | GetAround",
    titleTemplate: "%s | GetAround Belize",   // used for inner pages
    description:
      "Skip the unpredictable taxis. GetAround connects you with verified, reliable drivers across Belize — book ahead and know exactly who's picking you up.",
    keywords: [
      "Belize taxi",
      "taxi Belize airport",
      "Belize transportation",
      "Belize rides",
      "airport transfer Belize",
      "taxi service Belize",
      "Belize City taxi",
      "San Pedro taxi",
      "reliable taxi Belize",
      "Belize taxi booking",
      "Belize transportation options",
      "how to get around Belize",
      "private driver Belize",
    ],
    robots: "index, follow",
    locale: "en_US",
  },

  // ── Structured Data (JSON-LD) ─────────────────────────────────────────────
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "GetAround Belize",
    areaServed: "Belize",
    description:
      "A platform to book trusted local taxi drivers across Belize.",
    url: "https://getaround.bz",
    serviceType: "Taxi Booking",
    provider: {
      "@type": "Organization",
      name: "GetAround Belize",
    },
  },

  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    links: [
      { label: "Features",    href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ",         href: "#faq" },
    ],
    cta: {
      label: "Plan your ride",
      href:  "/signup",
    },
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    headline: "Skip the Taxi Hustle in Belize.",
    headlineAccent: "Hustle",
    subheadline:
      "No apps, no confusion. Get matched with a verified local driver and know exactly who's picking you up — before they arrive.",
    primaryCta: {
      label: "Plan your ride",
      href:  "/signup",
    },
    secondaryCta: null as null | { label: string; href: string },
    // Trust signals shown below the CTA
    trustBadges: [
      "Verified, licensed drivers",
      "Know your driver before pickup",
      "No negotiating or guesswork",
    ],
  },

  // ── Pain Points ──────────────────────────────────────────────────────────
  painPoints: {
    heading: "Traveling around Belize shouldn't be this hard",
    subheading: "This is how most travelers end up getting around",
    items: [
      {
        title: "Finding a ride at the airport is confusing",
        description: "After landing, you're left figuring out who to trust and how to get to your destination.",
      },
      {
        title: "You end up calling multiple drivers just to find one available",
        description: "Many travelers rely on saved numbers or hotel contacts — calling around until someone finally picks up.",
      },
      {
        title: "You're not sure if your driver will actually show up",
        description: "Booking through random contacts can leave you unsure if your ride will arrive on time.",
      },
      {
        title: "You're not sure if you're paying a fair price",
        description: "Fares can vary, and you may need to negotiate or second-guess what you're paying.",
      },
    ],
    bridge: "GetAround Belize removes the guesswork.",
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    heading: "Everything you need for a reliable ride in Belize",
    subheading: "Travel Belize with confidence",
    items: [
      {
        title: "Trusted Local Drivers",
        description:
          "Every driver is vetted, licensed, and rated by real travelers. You'll know who's picking you up before they arrive.",
        icon: "shield-check",
      },
      {
        title: "No Apps or Downloads Needed",
        description:
          "Book directly from your browser. No installs, no accounts required — just enter where you're going and you're set.",
        icon: "clock",
      },
      {
        title: "Know Your Ride in Advance",
        description:
          "See your driver's name, photo, and vehicle before pickup. No surprises, no anxiety.",
        icon: "map-pin",
      },
      {
        title: "Available Across Belize",
        description:
          "From Belize City to San Pedro, Placencia to San Ignacio — we've got drivers ready wherever you're headed.",
        icon: "credit-card",
      },
    ],
  },

  // ── How It Works ─────────────────────────────────────────────────────────
  howItWorks: {
    heading: "Get started in seconds",
    subheading: "Three simple steps to your first ride",
    steps: [
      {
        number: "01",
        title: "Enter your route",
        description:
          "Tell us where you're headed and when. Takes less than a minute.",
      },
      {
        number: "02",
        title: "We match you with a verified driver",
        description:
          "We find a licensed, rated local driver for your trip — no guesswork on your end.",
      },
      {
        number: "03",
        title: "Get your ride details before pickup",
        description:
          "See your driver's name and vehicle before they arrive. You're in control.",
      },
    ],
  },

  // ── Pricing ───────────────────────────────────────────────────────────────
  pricing: {
    heading: "Simple, transparent pricing",
    subheading: "No hidden fees. No surprises. Just great rides.",
    plans: [
      {
        name: "GetAround Pro",
        price: "$9.99",
        period: "/mo",
        note: "Billed monthly in BZD",
        recommended: true,
        features: [
          "Unlimited rides per month",
          "Priority driver matching",
          "Real-time GPS tracking",
          "In-app chat with driver",
          "Ride history & receipts",
        ],
        cta: {
          label: "Get Started",
          href:  "#",
        },
      },
      {
        name: "Pay Per Ride",
        price: "Free",
        period: "",
        note: "Pay only when you ride",
        recommended: false,
        features: [
          "No monthly commitment",
          "Competitive per-ride rates",
          "Real-time GPS tracking",
          "Secure in-app payments",
          "Star-rated drivers",
        ],
        cta: {
          label: "Download Free",
          href:  "#",
        },
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────────────────────────
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        question: "Is there Uber or Lyft in Belize?",
        answer:
          "No — Uber and Lyft don't operate in Belize. Instead, travelers in San Pedro, Caye Caulker, and Belize City rely on traditional taxis. GetAround Belize offers a simpler alternative by letting you pre-book a verified driver, so you don't have to figure things out when you arrive.",
      },
      {
        question: "What's the best way to get around Belize?",
        answer:
          "The best way to get around Belize depends on where you're staying, but most travelers rely on taxis for getting between towns, airports, and ferry terminals. Pre-booking your ride is usually the easiest option, especially after a flight or when traveling between places like Belize City, San Pedro, or Placencia. GetAround Belize helps you arrange those rides in advance with verified local drivers.",
      },
      {
        question: "Can I get a taxi from the airport in Belize?",
        answer:
          "Yes — taxis are available at Philip S. W. Goldson Airport. However, many travelers prefer to arrange their ride in advance so they don't have to decide on the spot. With GetAround Belize, you can pre-book your ride so your driver is ready when you arrive.",
      },
      {
        question: "How much is a taxi from the Belize airport?",
        answer:
          "Taxi prices from Philip S. W. Goldson Airport vary depending on your destination. For trips within Belize City, fares typically range from $75 to $100 BZD. Longer distances like to San Ignacio or Belmopan cost more. Many travelers prefer to arrange their ride in advance so they know what to expect. GetAround Belize helps you book a ride ahead of time with a verified driver.",
      },
      {
        question: "How does GetAround Belize work?",
        answer:
          "Enter your route and we connect you with a verified, licensed taxi driver for your trip. Your ride is arranged in advance, so you don't need to search, call around, or negotiate.",
      },
      {
        question: "Are the drivers verified?",
        answer:
          "Yes. Every driver is reviewed before joining, including license and vehicle verification, so you know you're riding with someone trusted.",
      },
      {
        question: "Is this like Uber?",
        answer:
          "No. We work with licensed Belize taxi drivers — not replace them. GetAround Belize simply makes those rides easier to book and more reliable for travelers.",
      },
      {
        question: "Can I book ahead of time?",
        answer:
          "Yes. You can plan your ride from Belize City to San Ignacio, or any route across Belize, in advance so everything is arranged before you need it.",
      },
    ],
    // Shown separately at the bottom of the FAQ — lower visual weight
    driverCta: {
      question: "Are you a taxi driver in Belize?",
      answer:
        "We're building a network of trusted, licensed drivers. Interested in joining our network?",
      linkLabel: `Contact ${process.env.NEXT_PUBLIC_DRIVER_EMAIL ?? "driver@getaround.bz"}`,
      linkHref:  `mailto:${process.env.NEXT_PUBLIC_DRIVER_EMAIL ?? "driver@getaround.bz"}`,
    },
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    tagline: "Trusted taxi rides across Belize.",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Features",     href: "#features" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "FAQ",          href: "#faq" },
        ],
      },
      {
        heading: "Company",
        links: [
          { label: "Press & Media", href: "/press" },
        ],
      },
      {
        heading: "Contact",
        links: [
          {
            label: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getaround.bz",
            href:  `mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getaround.bz"}`,
          },
        ],
      },
    ],
    cta: {
      label: "Plan your ride",
      href:  "/signup",
    },
    copyright: process.env.NEXT_PUBLIC_COPYRIGHT ?? "© 2026 GetAround Belize. All rights reserved.",
  },

} satisfies SiteConfig;

// ─── Type definitions ────────────────────────────────────────────────────────

type NavLink   = { label: string; href: string };
type CtaButton = { label: string; href: string };

interface SiteConfig {
  name: string;
  nameDisplay: { prefix: string; suffix: string };
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  seo: {
    title: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    robots: string;
    locale: string;
  };
  jsonLd: Record<string, unknown>;
  nav: { links: NavLink[]; cta: CtaButton };
  hero: {
    headline: string;
    headlineAccent: string;
    subheadline: string;
    primaryCta: CtaButton;
    secondaryCta: CtaButton | null;
    trustBadges: string[];
  };
  features: {
    heading: string;
    subheading: string;
    items: { title: string; description: string; icon: string }[];
  };
  painPoints: {
    heading: string;
    subheading: string;
    items: { title: string; description: string }[];
    bridge: string;
  };
  howItWorks: {
    heading: string;
    subheading: string;
    steps: { number: string; title: string; description: string }[];
  };
  pricing: {
    heading: string;
    subheading: string;
    plans: {
      name: string;
      price: string;
      period: string;
      note: string;
      recommended: boolean;
      features: string[];
      cta: CtaButton;
    }[];
  };
  faq: {
    heading: string;
    items: { question: string; answer: string }[];
    driverCta: { question: string; answer: string; linkLabel: string; linkHref: string };
  };
  footer: {
    tagline: string;
    columns: { heading: string; links: NavLink[] }[];
    cta: CtaButton;
    copyright: string;
  };
}
