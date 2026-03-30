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
      { label: "How It Works", href: "#how-it-works" },
      { label: "Features",     href: "#features" },
      { label: "FAQ",          href: "#faq" },
    ],
    cta: {
      label: "Check your route",
      href:  "/route-check",
    },
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    headline: "Know your ride before you land in Belize.",
    headlineAccent: "before",
    subheadline:
      "No app downloads. No airport guesswork. See what to expect, who might pick you up, and how to get moving — before your trip.",
    primaryCta: {
      label: "Check your route",
      href:  "/route-check",
    },
    secondaryCta: { label: "See a sample ride", href: "#sample-ride" } as null | { label: string; href: string },
    trustBadges: [
      "Verified local drivers",
      "Clear pickup expectations",
      "Built for Belize travel",
    ],
  },

  // ── Social proof strip ────────────────────────────────────────────────────
  socialProof: {
    headline: "Designed for travelers navigating Belize for the first time",
    items: [
      "No Uber or Lyft in Belize",
      "Avoid last-minute airport confusion",
      "Know what to expect before you arrive",
    ],
  },

  // ── Pain Points ──────────────────────────────────────────────────────────
  painPoints: {
    heading: "What usually happens when you land in Belize",
    subheading: "Most travelers figure it out after they arrive. That's the problem.",
    items: [
      {
        title: "You land tired and still have to figure out who to trust",
        description: "After a long flight, the last thing you want is to size up strangers outside arrivals with no reference point.",
      },
      {
        title: "You message around or ask your hotel just to find a driver",
        description: "Many travelers rely on saved numbers or hotel contacts — calling around until someone finally picks up.",
      },
      {
        title: "You're not sure if the driver will actually show up",
        description: "Booking through random contacts can leave you unsure if your ride will arrive on time.",
      },
      {
        title: "You don't know what a fair price looks like",
        description: "Fares vary and there's no reference — you either overpay or spend energy negotiating at the curb.",
      },
    ],
    bridge: "GetAround Belize is built to remove that uncertainty.",
  },

  // ── Sample ride ──────────────────────────────────────────────────────────
  sampleRide: {
    heading: "Here's what a simple ride could look like",
    subheading: "You know what to expect before your plane lands.",
    cta: { label: "Check your route", href: "/route-check" },
    card: {
      route: "BZE Airport → San Pedro",
      driver: "Carlos R.",
      vehicle: "Ford Transit Van",
      pickup: "Meet outside arrivals — sign with your name",
      contact: "WhatsApp message sent before arrival",
      notes: [
        "Knows your arrival time",
        "Fixed expectation of the ride",
        "No negotiating at the airport",
      ],
    },
  },

  // ── Features ─────────────────────────────────────────────────────────────
  features: {
    heading: "Why this feels easier than figuring it out yourself",
    subheading: "Built around how travelers actually move through Belize",
    items: [
      {
        title: "Know your driver ahead of time",
        description:
          "No guessing who's picking you up. You see the driver's name and vehicle before they arrive.",
        icon: "shield-check",
      },
      {
        title: "No apps or downloads",
        description:
          "Simple and direct — works with how people already travel. No account, no install, no friction.",
        icon: "clock",
      },
      {
        title: "Built for Belize travel reality",
        description:
          "Airport pickups, island transfers, intercity routes. Designed around the routes travelers actually need.",
        icon: "map-pin",
      },
      {
        title: "Clear next steps, not guesswork",
        description:
          "You're not left figuring things out last minute. Every step is laid out before you need it.",
        icon: "credit-card",
      },
    ],
  },

  // ── How It Works ─────────────────────────────────────────────────────────
  howItWorks: {
    heading: "How it works",
    subheading: "Simple and honest about where things stand",
    steps: [
      {
        number: "01",
        title: "Tell us your route",
        description:
          "Where you're landing and where you're headed. Takes less than a minute.",
      },
      {
        number: "02",
        title: "We check availability",
        description:
          "We're rolling out routes carefully to keep every ride reliable and consistent.",
      },
      {
        number: "03",
        title: "Get notified or guided next",
        description:
          "We'll let you know when your route is ready — or point you in the right direction if your trip is soon.",
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
          { label: "Getting Around Belize", href: "/getting-around" },
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
      label: "Check your route",
      href:  "/route-check",
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
  socialProof: {
    headline: string;
    items: string[];
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
  sampleRide: {
    heading: string;
    subheading: string;
    cta: CtaButton;
    card: {
      route: string;
      driver: string;
      vehicle: string;
      pickup: string;
      contact: string;
      notes: string[];
    };
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
