import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "How to Get Around Belize | Complete Transportation Guide | GetAround",
  description:
    "How to get around Belize — from the airport to San Pedro, Caye Caulker, and beyond. Learn about taxis, water taxis, buses, flights, and how to book reliable rides in advance.",
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
    "Belize ferry",
    "water taxi Belize",
    "San Pedro Belize Express",
    "Belize domestic flights",
    "Maya Island Air Belize",
    "Belize bus",
    "Belize shuttle",
    "rental car Belize",
    "golf cart rental Belize",
    "Ambergris Caye transportation",
    "Caye Caulker getting there",
  ],
  openGraph: {
    title: "How to Get Around Belize | GetAround",
    description:
      "Everything you need to know about getting around Belize — taxis, water taxis, buses, domestic flights, and how to book reliable rides in advance.",
    type: "article",
  },
};

const transportOptions = [
  {
    title: "Taxis",
    description:
      "Taxis are the go-to option for getting around Belize, whether you need a ride within Belize City or a longer trip to Belmopan or Hopkins. There's no Uber or Lyft here — so you'll arrange taxis through your hotel or at taxi stands. From the airport to Belize City, expect to pay around $75–$100 BZD.",
  },
  {
    title: "Water Taxis & Ferries",
    description:
      "To reach the islands, you'll need a water taxi. San Pedro Belize Express operates regular ferries between Belize City and both Caye Caulker and San Pedro (Ambergris Caye). The scenic ride takes 30–75 minutes depending on your destination.",
  },
  {
    title: "Domestic Flights",
    description:
      "For a quick way to cover longer distances, Maya Island Air and Tropic Air offer flights from Philip S. W. Goldson International Airport to destinations like San Pedro. Flights take just 15–20 minutes, making them ideal for time-conscious travelers.",
  },
  {
    title: "Shuttles",
    description:
      "Private shuttles are a convenient option, especially for airport transfers or trips between major destinations like the airport and San Ignacio. Book in advance to have a driver waiting when you arrive.",
  },
  {
    title: "Public Buses",
    description:
      "Belize's bus network connects all major towns and villages. The older 'chicken buses' are budget-friendly, while express buses offer a faster, more comfortable ride between cities like Belize City, Belmopan, and San Ignacio.",
  },
  {
    title: "Rental Cars",
    description:
      "Renting a car gives you flexibility to explore at your own pace. Driving is on the right side of the road, and major highways connect key areas. Note that some rural roads are unpaved, and it's best to avoid driving at night.",
  },
  {
    title: "Golf Carts & Bikes",
    description:
      "Once you're on the islands, golf carts are the most common way to get around San Pedro and Caye Caulker. Daily rentals are available and give you freedom to explore the caye at your leisure.",
  },
];

const popularRoutes = [
  { from: "Philip S. W. Goldson Airport", to: "Belize City", typical: "$75–$100 BZD" },
  { from: "Philip S. W. Goldson Airport", to: "San Ignacio", typical: "$150–$200 BZD" },
  { from: "Philip S. W. Goldson Airport", to: "Belmopan", typical: "$100–$125 BZD" },
  { from: "Belize City", to: "Caye Caulker (ferry)", typical: "$20–$30 BZD" },
  { from: "Belize City", to: "San Pedro (ferry)", typical: "$30–$40 BZD" },
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
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-5 pt-20 pb-16 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#a8d800] mb-4">
            Transportation Guide
          </p>
          <h1
            className="text-4xl sm:text-5xl text-gray-900 mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Getting Around Belize
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From taxis and ferries to domestic flights and rental cars — here's what you need to know about navigating Belize.
          </p>
        </section>

        {/* Intro */}
        <section className="max-w-4xl mx-auto px-5 pb-20">
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
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#a8d800]/40 transition-colors"
                >
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
                        Typical Fare
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
                          <span className="text-[#5f7800] font-medium text-sm">{route.typical}</span>
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
