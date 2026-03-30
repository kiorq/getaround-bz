"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/Logo";

// ─── Types ────────────────────────────────────────────────────────────────────
type Phase = "route" | "sample" | "email" | "done";

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

// ─── Progress dots ────────────────────────────────────────────────────────────
function ProgressDots({ phase }: { phase: Phase }) {
  const phases: Phase[] = ["route", "sample", "email"];
  const current = phases.indexOf(phase);
  return (
    <div className="flex gap-2 items-center">
      {phases.map((p, i) => (
        <div
          key={p}
          className={`rounded-full transition-all duration-300 ${
            i < current
              ? "w-2 h-2 bg-[#a8d800]"
              : i === current
              ? "w-4 h-2 bg-[#a8d800]"
              : "w-2 h-2 bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// ─── Sample ride card ─────────────────────────────────────────────────────────
function RideCard({ destination }: { destination: string }) {
  const { card } = siteConfig.sampleRide;
  const route = destination && destination !== "Other"
    ? `BZE Airport → ${destination}`
    : card.route;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 w-full">
      <div
        className="font-bold text-gray-900 mb-3"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {route}
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SignupPage() {
  const [formState, submit] = useForm("mqeyondj");
  const [phase, setPhase] = useState<Phase>("route");
  const [visible, setVisible] = useState(true);

  const [destination, setDestination] = useState("");
  const [email, setEmail]             = useState("");
  const [emailError, setEmailError]   = useState("");

  void formState;

  // Fade transition between phases
  function transition(fn: () => void) {
    setVisible(false);
    setTimeout(() => { fn(); setVisible(true); }, 180);
  }

  // ── Phase 1: route ──────────────────────────────────────────────────────
  function handleRoute() {
    if (!destination) return;
    transition(() => setPhase("sample"));
  }

  // ── Phase 2: sample — just show the card, user clicks continue ──────────
  function handleSampleContinue() {
    transition(() => setPhase("email"));
  }

  // ── Phase 3: email → submit ─────────────────────────────────────────────
  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    await submit({ email, destination, source: "signup" });
    transition(() => setPhase("done"));
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo href="/" className="hover:opacity-80 transition-opacity" />
          {phase !== "done" && (
            <Link href="/" className="text-sm text-gray-400 hover:text-gray-700 transition-colors">
              ← Back
            </Link>
          )}
        </div>
      </nav>

      <main className="flex-1 flex items-center justify-center px-5 py-16">
        <div className="w-full max-w-md">

          {/* Progress + label */}
          {phase !== "done" && (
            <div className="flex items-center justify-between mb-10">
              <ProgressDots phase={phase} />
              <span className="text-xs text-gray-400">
                {phase === "route"  && "Step 1 of 3"}
                {phase === "sample" && "Step 2 of 3"}
                {phase === "email"  && "Step 3 of 3"}
              </span>
            </div>
          )}

          {/* Animated content area */}
          <div
            className="transition-opacity duration-200"
            style={{ opacity: visible ? 1 : 0 }}
          >

            {/* ── Phase 1: Route ─────────────────────────────────────────── */}
            {phase === "route" && (
              <div>
                <h1
                  className="text-3xl sm:text-4xl text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  Where are you headed in Belize?
                </h1>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  We'll show you what your ride could look like before asking anything else.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {DESTINATIONS.map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDestination(d)}
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

                <button
                  onClick={handleRoute}
                  disabled={!destination}
                  className="w-full bg-[#a8d800] text-black font-bold py-4 rounded-2xl hover:bg-[#94c200] transition-colors text-base disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue →
                </button>
              </div>
            )}

            {/* ── Phase 2: Sample ride ────────────────────────────────────── */}
            {phase === "sample" && (
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                  Example ride
                </div>
                <h2
                  className="text-3xl sm:text-4xl text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  Here's what your ride could look like
                </h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  You'll know what to expect before you arrive — no guessing, no negotiating.
                </p>

                <div className="mb-8">
                  <RideCard destination={destination} />
                </div>

                <button
                  onClick={handleSampleContinue}
                  className="w-full bg-[#a8d800] text-black font-bold py-4 rounded-2xl hover:bg-[#94c200] transition-colors text-base cursor-pointer"
                >
                  Get notified when this route opens →
                </button>
              </div>
            )}

            {/* ── Phase 3: Email ──────────────────────────────────────────── */}
            {phase === "email" && (
              <div>
                <h2
                  className="text-3xl sm:text-4xl text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  Get notified when this route opens
                </h2>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  We'll let you know as soon as{destination ? ` the ${destination} route` : " your route"} is available — or sooner if we can help.
                </p>

                <form onSubmit={handleEmail} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    onKeyDown={(e) => e.key === "Enter" && handleEmail(e)}
                    placeholder="Your email address"
                    className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base placeholder-gray-300 focus:outline-none focus:border-[#a8d800] focus:ring-2 focus:ring-[#a8d800]/20 transition-all"
                    autoFocus
                  />
                  {emailError && (
                    <p className="text-red-400 text-xs px-1">{emailError}</p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-[#a8d800] text-black font-bold py-4 rounded-2xl hover:bg-[#94c200] transition-colors text-base cursor-pointer"
                  >
                    Notify me →
                  </button>
                </form>
                <p className="text-gray-400 text-xs mt-4 text-center">
                  No spam. We'll only reach out about your route.
                </p>
              </div>
            )}

            {/* ── Phase 4: Done ───────────────────────────────────────────── */}
            {phase === "done" && (
              <div className="text-center py-6">
                {/* Check */}
                <div className="w-14 h-14 bg-[#a8d800]/10 border border-[#a8d800]/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-7 h-7 text-[#5f7800]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>

                <h2
                  className="text-4xl text-gray-900 mb-4"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  You're on the list.
                </h2>
                <p className="text-gray-500 leading-relaxed max-w-sm mx-auto mb-10">
                  We'll reach out as soon as{destination ? ` the ${destination} route` : " your route"} is available. If your trip is coming up, reach out and we'll try to point you in the right direction.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                  <a
                    href="https://wa.me/5016000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#a8d800] text-black font-bold px-6 py-3.5 rounded-full hover:bg-[#94c200] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp us
                  </a>
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@getaround.bz"}`}
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 text-gray-700 font-medium px-6 py-3.5 rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Email us
                  </a>
                </div>

                <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                  ← Back to homepage
                </Link>
              </div>
            )}

          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8">
        <p className="text-center text-xs text-gray-400">{siteConfig.footer.copyright}</p>
      </footer>
    </div>
  );
}
