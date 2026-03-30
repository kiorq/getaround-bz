"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";

const DESTINATIONS = [
  "Belize City",
  "San Pedro",
  "Caye Caulker",
  "Placencia",
  "Hopkins",
  "Belmopan",
  "San Ignacio",
  "Other",
];

export default function RouteCheckPage() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [visitorStatus, setVisitorStatus] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!destination) {
      setError("Please select a destination.");
      return;
    }
    if (!visitorStatus) {
      setError("Please let us know if you're visiting or local.");
      return;
    }
    setError("");
    const params = new URLSearchParams({
      destination,
      visitor: visitorStatus,
      ...(arrivalDate && { date: arrivalDate }),
    });
    router.push(`/route-result?${params.toString()}`);
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo href="/" className="hover:opacity-80 transition-opacity" />
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            ← Back
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-5 py-16">
        <div className="w-full max-w-md">

          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-[#a8d800]/10 border border-[#a8d800]/30 text-[#5f7800] text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a8d800] inline-block" />
              Takes less than a minute
            </div>
            <h1
              className="text-3xl sm:text-4xl text-gray-900 mb-3"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Where are you headed in Belize?
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              We'll check if your route is available and show you what to expect.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Destination */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Destination
              </label>
              <div className="grid grid-cols-2 gap-2">
                {DESTINATIONS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => { setDestination(d); setError(""); }}
                    className={`text-left border rounded-xl px-4 py-3 text-sm font-medium transition-all cursor-pointer ${
                      destination === d
                        ? "border-[#a8d800] bg-[#a8d800]/10 text-gray-900"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-[#a8d800]/50 hover:bg-[#a8d800]/5"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Visitor status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you visiting Belize or based here?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Visiting Belize", "I live in Belize"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => { setVisitorStatus(s); setError(""); }}
                    className={`text-left border rounded-xl px-4 py-3 text-sm font-medium transition-all cursor-pointer ${
                      visitorStatus === s
                        ? "border-[#a8d800] bg-[#a8d800]/10 text-gray-900"
                        : "border-gray-200 bg-gray-50 text-gray-700 hover:border-[#a8d800]/50 hover:bg-[#a8d800]/5"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Arrival date — optional */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Arrival date <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <input
                type="date"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#a8d800] focus:ring-2 focus:ring-[#a8d800]/20 transition-all"
              />
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button
              type="submit"
              className="w-full bg-[#a8d800] text-black font-bold py-4 rounded-2xl hover:bg-[#94c200] transition-colors text-base cursor-pointer mt-2"
            >
              Check availability →
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">{siteConfig.footer.copyright}</p>
        </div>
      </main>
    </div>
  );
}
