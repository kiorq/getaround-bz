import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is there Uber or Lyft in Belize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — Uber and Lyft don't operate in Belize. Instead, travelers in San Pedro, Caye Caulker, and Belize City rely on traditional taxis. GetAround Belize offers a simpler alternative by letting you pre-book a verified driver, so you don't have to figure things out when you arrive.",
      },
    },
    {
      "@type": "Question",
      name: "What's the best way to get around Belize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best way to get around Belize depends on where you're staying, but most travelers rely on taxis for getting between towns, airports, and ferry terminals. Pre-booking your ride is usually the easiest option, especially after a flight or when traveling between places like Belize City, San Pedro, or Placencia. GetAround Belize helps you arrange those rides in advance with verified local drivers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a taxi from the airport in Belize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — taxis are available at Philip S. W. Goldson Airport. However, many travelers prefer to arrange their ride in advance so they don't have to decide on the spot. With GetAround Belize, you can pre-book your ride so your driver is ready when you arrive.",
      },
    },
    {
      "@type": "Question",
      name: "How much is a taxi from the Belize airport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Taxi prices from Philip S. W. Goldson Airport vary depending on your destination. For trips within Belize City, fares typically range from $75 to $100 BZD. Longer distances like to San Ignacio or Belmopan cost more. Many travelers prefer to arrange their ride in advance so they know what to expect. GetAround Belize helps you book a ride ahead of time with a verified driver.",
      },
    },
    {
      "@type": "Question",
      name: "How does GetAround Belize work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your route and we connect you with a verified, licensed taxi driver for your trip. Your ride is arranged in advance, so you don't need to search, call around, or negotiate.",
      },
    },
    {
      "@type": "Question",
      name: "Are the drivers verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every driver is reviewed before joining, including license and vehicle verification, so you know you're riding with someone trusted.",
      },
    },
    {
      "@type": "Question",
      name: "Is this like Uber?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We work with licensed Belize taxi drivers — not replace them. GetAround Belize simply makes those rides easier to book and more reliable for travelers.",
      },
    },
    {
      "@type": "Question",
      name: "Can I book ahead of time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. You can plan your ride from Belize City to San Ignacio, or any route across Belize, in advance so everything is arranged before you need it.",
      },
    },
  ],
};

export function FaqSchema() {
  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
