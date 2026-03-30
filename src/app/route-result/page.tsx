"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { Logo } from "@/components/Logo";
import { siteConfig } from "@/config/site";

// ─── Sample ride card ─────────────────────────────────────────────────────────
function RideCard() {
  const { card } = siteConfig.sampleRide;
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
      <div className="font-bold text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
        {card.route}
      </div>
      <div className="inline-flex items-center gap-1.5 bg-[#a8d800]/10 border border-[#a8d800]/30 text-[#5f7800] text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#a8d800] inline-block" />
        Verified local driver
      </div>
      <div className="space-y-2 mb-4">
        {[
          { label: "Driver",  value: card.driver },
          { label: "Vehicle", value: card.vehicle },
          { label: "Pickup",  value: card.pickup },
          { label: "Contact", value: card.contact },
        ].map(({ label, value }) => (
          <div key={label} className="flex gap-2 text-sm">
            <span className="text-gray-400 w-16 shrink-0">{label}</span>
            <span className="text-gray-700">{value}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-200 pt-4 space-y-1.5">
        {card.notes.map((note) => (
          <div key={note} className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-3.5 h-3.5 text-[#5f7800] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            {note}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Inner page (reads search params) ────────────────────────────────────────
function RouteResultInner() {
  const params = useSearchParams();
  const router = useRouter();
  const destination = params.get("destination") ?? "your destination";

  const [formState, submit] = useForm("mqeyondj");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleNotify(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    await submit({ email, destination, source: "route-result" });
    router.push(`/confirmation?destination=${encodeURIComponent(destination)}`);
  }

  void formState;

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo href="/" className="hover:opacity-80 transition-opacity" />
          <Link href="/route-check" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            ← Change route
          </Link>
        </div>
      </nav>

      <main className="flex-1 px-5 py-16">
        <div className="max-w-2xl mx-auto">

          {/* Route badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
            BZE Airport → {destination}
          </div>

          {/* Heading */}
          <h1
            className="text-3xl sm:text-4xl text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            We're opening this route soon.
          </h1>
          <p className="text-gray-500 leading-relaxed mb-10 max-w-lg">
            We're rolling out routes carefully to keep rides reliable and consistent.
            Here's the kind of experience you can expect when your route goes live.
          </p>

          {/* Sample ride card */}
          <div className="mb-10">
            <RideCard />
          </div>

          {/* Email capture */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8">
            <h2
              className="text-xl text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              Get notified when this route opens
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              We'll reach out as soon as {destination} is available. No spam.
            </p>
            <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                placeholder="Your email address"
                className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#a8d800] focus:ring-2 focus:ring-[#a8d800]/20 transition-all"
                autoFocus
              />
              <button
                type="submit"
                className="bg-[#a8d800] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#94c200] transition-colors text-sm whitespace-nowrap cursor-pointer"
              >
                Notify me →
              </button>
            </form>
            {emailError && <p className="text-red-400 text-xs mt-2">{emailError}</p>}
          </div>

          {/* Trip soon? */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
            <p className="text-sm text-gray-500">
              Trip coming up soon and can't wait?
            </p>
            <div className="flex gap-3">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getaround.bz"}`}
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-full hover:bg-gray-50 transition-colors"
              >
                Email us
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-500 text-sm hover:text-gray-900 transition-colors"
              >
                Back to home
              </Link>
            </div>
          </div>

        </div>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <p className="text-center text-xs text-gray-400">{siteConfig.footer.copyright}</p>
      </footer>
    </div>
  );
}

// ─── Page (wrapped in Suspense for useSearchParams) ───────────────────────────
export default function RouteResultPage() {
  return (
    <Suspense>
      <RouteResultInner />
    </Suspense>
  );
}
