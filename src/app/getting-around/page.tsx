import type { Metadata } from "next";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "How to Get Around Belize: Taxis, Ferries, Flights & More | GetAround",
  description:
    "Complete guide on how to get around Belize. Learn about taxis, water taxis, buses, domestic flights, and car rentals. Updated 2026 pricing for routes from Belize airport to San Pedro, Caye Caulker, and more.",
  keywords: [
    "how to get around Belize",
    "getting around Belize",
    "getting around Belize without a car",
    "Belize transportation",
    "Belize taxi",
    "Belize taxi app",
    "Belize transportation guide",
    "taxi from Belize airport",
    "Belize City taxi",
    "San Pedro taxi",
    "Caye Caulker taxi",
    "Ambergris Caye taxi",
    "Belize ferry",
    "water taxi Belize",
    "Belize water taxi",
    "San Pedro Belize Express",
    "Belize domestic flights",
    "Maya Island Air Belize",
    "Tropic Air Belize",
    "Belize bus",
    "Belize shuttle",
    "rental car Belize",
    "golf cart rental Belize",
    "golf cart San Pedro",
    "golf cart Caye Caulker",
    "Ambergris Caye transportation",
    "Caye Caulker getting there",
    "Belize travel guide",
    "Belize car rental",
    "Belize boat",
    "Belize cycling",
    "how to travel Belize",
    "Belize airport to city",
    "Belize airport taxi price",
    "best way to get around Belize",
  ],
  openGraph: {
    title: "How to Get Around Belize | GetAround",
    description:
      "Complete guide on how to get around Belize — taxis, ferries, buses, flights, and car rentals with 2026 pricing.",
    type: "article",
    url: `${siteConfig.url}/getting-around`,
    images: [
      {
        url: `${siteConfig.url}/ads/no-text/getaroundbz-notext-01.png`,
        width: 1200,
        height: 630,
        alt: "GetAround Belize - Reliable Taxi Booking",
      },
    ],
  },
  alternates: {
    canonical: `${siteConfig.url}/getting-around`,
  },
};

const gettingAroundFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you get around Belize without a car?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get around Belize by taxi, public bus, water taxi, domestic flight, or rental car. Taxis are the most common for short trips, while buses are the cheapest option for longer journeys between towns.",
      },
    },
    {
      "@type": "Question",
      name: "Is there Uber or Lyft in Belize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, Uber and Lyft do not operate in Belize. Instead, travelers use traditional taxis, which can be arranged through hotels or at taxi stands. GetAround Belize offers a modern alternative for booking reliable taxi rides in advance.",
      },
    },
    {
      "@type": "Question",
      name: "How much is a taxi from Belize airport to Belize City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A taxi from Philip S. W. Goldson International Airport (BZE) to Belize City typically costs Bz$25–60 (approximately $12–30 USD).",
      },
    },
    {
      "@type": "Question",
      name: "How much is the water taxi from Belize City to Caye Caulker?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Water taxi fares from Belize City to Caye Caulker typically cost Bz$20–50 (approximately $10–25 USD) one-way.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to get from Belize airport to San Pedro?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best way to get from Philip S. W. Goldson Airport to San Pedro (Ambergris Caye) is to take a taxi or shuttle to the water taxi terminal in Belize City, then catch a ferry to San Pedro. Alternatively, you can book a combined transfer in advance through GetAround Belize.",
      },
    },
    {
      "@type": "Question",
      name: "Do you need a car to get around Belize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, you do not need a car to get around Belize. Public buses, taxis, and shuttles connect most destinations. For island visits like San Pedro or Caye Caulker, water taxis and golf carts are the main modes of transport.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to rent a car in Belize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Car rental in Belize starts around US$50 per day. Gas costs approximately Bz$8 per gallon (~$4 USD). Agencies are available at the airport, in Belize City, San Ignacio, and Placencia.",
      },
    },
  ],
};

const faqItems = [
  {
    question: "How do you get around Belize without a car?",
    answer: "You can get around Belize by taxi, public bus, water taxi, domestic flight, or rental car. Taxis are the most common for short trips, while buses are the cheapest option for longer journeys between towns.",
  },
  {
    question: "Is there Uber or Lyft in Belize?",
    answer: "No, Uber and Lyft do not operate in Belize. Instead, travelers use traditional taxis, which can be arranged through hotels or at taxi stands. GetAround Belize offers a modern alternative for booking reliable taxi rides in advance.",
  },
  {
    question: "How much is a taxi from Belize airport to Belize City?",
    answer: "A taxi from Philip S. W. Goldson International Airport (BZE) to Belize City typically costs Bz$25–60 (approximately $12–30 USD).",
  },
  {
    question: "How much is the water taxi from Belize City to Caye Caulker?",
    answer: "Water taxi fares from Belize City to Caye Caulker typically cost Bz$20–50 (approximately $10–25 USD) one-way.",
  },
  {
    question: "What is the best way to get from Belize airport to San Pedro?",
    answer: "The best way to get from Philip S. W. Goldson Airport to San Pedro (Ambergris Caye) is to take a taxi or shuttle to the water taxi terminal in Belize City, then catch a ferry to San Pedro. Alternatively, you can book a combined transfer in advance through GetAround Belize.",
  },
  {
    question: "Do you need a car to get around Belize?",
    answer: "No, you do not need a car to get around Belize. Public buses, taxis, and shuttles connect most destinations. For island visits like San Pedro or Caye Caulker, water taxis and golf carts are the main modes of transport.",
  },
  {
    question: "How much does it cost to rent a car in Belize?",
    answer: "Car rental in Belize starts around US$50 per day. Gas costs approximately Bz$8 per gallon (~$4 USD). Agencies are available at the airport, in Belize City, San Ignacio, and Placencia.",
  },
];

const transportOptions = [
  {
    title: "Taxis",
    description:
      "Taxis are the go-to option for getting around Belize. They're easy to spot — vehicles have green license plates. There's no Uber or Lyft here, so you'll arrange rides through your hotel or at taxi stands. Within towns, fares are typically Bz$8–10 fixed rate. From the airport to Belize City, expect to pay around Bz$25–60. Taxis accept both US and Belize currency.",
    image: "/images/belize-city-aerial.webp",
  },
  {
    title: "Water Taxis & Ferries",
    description:
      "To reach the islands, you'll need a water taxi. San Pedro Belize Express operates regular ferries between Belize City and both Caye Caulker and San Pedro (Ambergris Caye). Tickets typically cost Bz$25–45. Show up about 30 minutes before departure — there's usually plenty of room. There are also international water taxis to Guatemala and Mexico.",
    image: "/images/ferry.webp",
  },
  {
    title: "Domestic Flights",
    description:
      "For a quick way to cover longer distances, Maya Island Air and Tropic Air offer flights from Philip S. W. Goldson International Airport to destinations like San Pedro, Placencia, Caye Caulker, Dangriga, and Corozal. Flights start at around Bz$70–90 and take just 15–20 minutes domestically. Ideal for time-conscious travelers or reaching places unreachable by road.",
    image: "/images/san-pedro.webp",
  },
  {
    title: "Private Shuttles",
    description:
      "Private shuttles offer door-to-door convenience with friendly, knowledgeable drivers who can share local insights along the way. Great for families, groups, or anyone who wants to sit back and enjoy the scenic drives. Book in advance to have a driver waiting when you arrive.",
    image: "/images/private-shuttle.jpg",
  },
  {
    title: "Public Buses",
    description:
      "Belize's bus network connects all major towns and villages and is the cheapest way to travel. Express buses connect major cities like Belize City, Belmopan, and San Ignacio — the longest trip (Belize City to Punta Gorda) costs only Bz$25. For villages off the main highways, local buses run once or twice daily. You can catch them at terminals or flag them down on the roadside.",
    image: "/images/bus.jpg",
  },
  {
    title: "Rental Cars",
    description:
      "Renting a car gives you flexibility to explore at your own pace. Agencies are available in Belize City, at the airport, San Ignacio, and Placencia. Driving is on the right side of the road. Keep in mind: car rental starts around US$50/day, gas costs about Bz$8/gallon (~$4 USD), and gas stations are mostly in towns. Drivers are generally safe but be alert to unexpected overtaking. Avoid driving at night on rural roads.",
    image: "/images/car-rental.jpg",
  },
  {
    title: "Golf Carts & Bikes",
    description:
      "Once you're on the islands, golf carts are the most common way to get around San Pedro and Caye Caulker. Daily rentals are available and give you freedom to explore the caye at your leisure. Bike rentals are also available in San Ignacio and Placencia for around Bz$15–25 per day.",
    image: "/images/golf-cart.jpg",
  },
];

const popularRoutes = [
  { from: "Philip S. W. Goldson Airport", to: "Belize City", bzd: "$25–$60", usd: "$12–$30" },
  { from: "Philip S. W. Goldson Airport", to: "San Ignacio", bzd: "$150–$300", usd: "$75–$150" },
  { from: "Philip S. W. Goldson Airport", to: "Belmopan", bzd: "$100–$130", usd: "$50–$65" },
  { from: "Belize City", to: "Caye Caulker (ferry)", bzd: "$20–$50", usd: "$10–$25" },
  { from: "Belize City", to: "San Pedro (ferry)", bzd: "$38–$66", usd: "$19–$33" },
];

const travelerTips = [
  {
    title: "Tours pick you up",
    description: "Most tour operators will pick you up directly from your hotel or accommodation — just let them know where you're staying.",
  },
  {
    title: "Transportation can add up",
    description: "Getting between multiple destinations in Belize can get pricey. Booking shuttles or taxis in advance helps you budget better.",
  },
  {
    title: "No need for a rental car",
    description: "Many travelers find they don't need a rental car. Between taxis, shuttles, and organized tours, you can cover most of Belize without driving yourself.",
  },
  {
    title: "Stay central when possible",
    description: "Choosing accommodations in central areas like San Ignacio Town makes it easier to catch tours and get around without a vehicle.",
  },
];

export default function GettingAroundPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo href="/" />
          <a href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            ← Back to site
          </a>
        </div>
      </nav>

      <main>
        {/* Hero with Image */}
        <section className="relative">
          <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
            <img
              src="/images/belize-city-aerial.webp"
              alt="Aerial view of Belize City"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-5 pb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[#a8d800] mb-4">
              Transportation Guide
            </p>
            <h1
              className="text-4xl sm:text-5xl text-white mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Getting Around Belize
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              From taxis and ferries to domestic flights and rental cars — here's what you need to know.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-5 py-16">
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Getting around Belize without a car is easier than you might think. There's no Uber or Lyft here — but taxis, buses, water taxis, and shuttles cover most travel needs for visitors.
            </p>
            <p>
              Whether you're heading from the airport to Belize City, catching a water taxi to San Pedro, or taking a domestic flight to Placencia, this guide covers all your options for getting around Belize.
            </p>
          </div>
        </section>

        {/* Transportation Options */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2
              className="text-3xl sm:text-4xl text-gray-900 mb-12 text-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              How to Get Around Belize
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {transportOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#a8d800]/40 transition-colors"
                >
                  {option.image && (
                    <div className="h-40 overflow-hidden">
                      <img
                        src={option.image}
                        alt={option.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3
                      className="text-xl text-gray-900 mb-3"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                    >
                      {option.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Routes */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2
              className="text-3xl sm:text-4xl text-gray-900 mb-4 text-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Common Taxi Routes & Pricing
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-xl mx-auto">
              Taxis in Belize don't have meters — fares are typically negotiated or follow standard rates. Here's what to expect for popular routes from Philip S. W. Goldson Airport.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="border border-gray-200 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                        Route
                      </th>
                      <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                        BZD
                      </th>
                      <th className="text-right px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                        USD
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {popularRoutes.map((route) => (
                      <tr key={`${route.from}-${route.to}`} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <span className="text-gray-900 text-sm">{route.from}</span>
                          <span className="text-gray-400 text-sm mx-2">→</span>
                          <span className="text-gray-900 text-sm">{route.to}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-[#5f7800] font-medium text-sm">{route.bzd}</span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <span className="text-gray-500 text-sm">{route.usd}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            <p className="text-xs text-gray-400 mt-4 text-center">
              * Prices are approximate and may vary. GetAround helps you book these rides in advance.
            </p>
            </div>
          </div>
        </section>

        {/* Traveler Tips */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-5">
            <h2
              className="text-3xl sm:text-4xl text-gray-900 mb-12 text-center"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Tips for Getting Around Belize
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {travelerTips.map((tip) => (
                <div
                  key={tip.title}
                  className="bg-white border border-gray-200 rounded-2xl p-6"
                >
                  <h3
                    className="text-lg text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-100 py-24">
          <div className="max-w-3xl mx-auto px-5">
            <h2
              className="text-4xl sm:text-5xl text-center text-gray-900 mb-14"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <div key={item.question} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#a8d800]/30 transition-colors">
                  <h3
                    className="text-gray-900 text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {item.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema for SEO */}
        <Script
          id="getting-around-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(gettingAroundFaqSchema) }}
        />

        {/* CTA */}
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h2
              className="text-3xl sm:text-4xl text-white mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Book Your Belize Taxi in Advance
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Skip the guesswork. With GetAround Belize, you can arrange your taxi ride before you land — so your driver is waiting when you arrive.
            </p>
            <a
              href="/"
              className="inline-block bg-[#a8d800] text-black font-bold px-10 py-4 rounded-full hover:bg-[#94c200] transition-colors"
            >
              Book Your Ride
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-xs text-gray-400">{siteConfig.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
}
