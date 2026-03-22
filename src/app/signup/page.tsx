"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "@formspree/react";
import { siteConfig } from "@/config/site";

// ─── Squiggle decoration (matches landing page) ───────────────────────────────
function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 120 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 10 C20 60, 100 110, 60 160 C20 210, 100 260, 60 310 C20 360, 80 390, 60 400"
        stroke="#a8d800"
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.18"
      />
    </svg>
  );
}

// ─── Step definitions ─────────────────────────────────────────────────────────
type Step =
  | { id: "email";    type: "email" }
  | { id: string;     type: "single" | "multi"; question: string; hint?: string; options: string[] };

const STEPS: Step[] = [
  { id: "email", type: "email" },
  {
    id: "destination",
    type: "single",
    question: "Where are you headed?",
    options: ["Belize City", "San Pedro", "Caye Caulker", "Placencia", "Hopkins", "Belmopan", "Other"],
  },
  {
    id: "trip_type",
    type: "single",
    question: "What's your trip for?",
    options: ["Vacation", "Business", "Visiting friends or family", "Other"],
  },
  {
    id: "visitor_status",
    type: "single",
    question: "Are you visiting Belize or based here?",
    options: ["Visiting Belize", "I live in Belize", "Staying temporarily"],
  },
  {
    id: "current_behavior",
    type: "single",
    question: "How do you usually arrange rides when traveling?",
    options: ["Hotel arranges it", "Taxi at the airport", "Ride app", "Private driver", "Not sure yet"],
  },
  {
    id: "priorities",
    type: "multi",
    question: "What matters most to you when booking a ride?",
    hint: "Choose up to 2",
    options: ["Safety / verified driver", "Fair pricing", "Fixed price upfront", "Convenience", "Speed", "Easy communication", "Trusted local drivers"],
  },
  {
    id: "trust",
    type: "single",
    question: "Would a verified driver make you feel more confident booking a ride?",
    options: ["Yes", "No", "Not sure"],
  },
];

const TOTAL_STEPS = STEPS.length; // excluding processing + final

// ─── Logo ─────────────────────────────────────────────────────────────────────
function Logo() {
  return (
    <Link href="/" className="font-bold text-2xl sm:text-3xl text-gray-900 tracking-tight hover:opacity-80 transition-opacity">
      {siteConfig.nameDisplay.prefix}
      <span className="text-[#a8d800]">{siteConfig.nameDisplay.suffix}</span>
    </Link>
  );
}

// ─── Progress bar — segmented ─────────────────────────────────────────────────
function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="w-full">
      <span className="text-xs text-gray-500 font-medium block mb-3">
        Step {step} of {total}
      </span>
      <div className="flex gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-400 ${
              i < step ? "bg-[#a8d800]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Animated dots (processing screen) ───────────────────────────────────────
function AnimatedDots() {
  return (
    <span className="inline-flex gap-1 items-center">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#a8d800] animate-bounce"
          style={{ animationDelay: `${i * 0.15}s`, animationDuration: "0.8s" }}
        />
      ))}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PlanPage() {
  const [formspreeState, submitToFormspree] = useForm("mqeyondj");
  const [currentStep, setCurrentStep] = useState(0); // 0-indexed into STEPS
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [multiSelected, setMultiSelected] = useState<string[]>([]);
  const [phase, setPhase] = useState<"questions" | "processing" | "done">("questions");
  const [visible, setVisible] = useState(true);

  // Suppress unused variable warning — formspreeState available for error handling if needed
  void formspreeState;

  const step = STEPS[currentStep];
  const humanStep = currentStep + 1; // 1-indexed for display

  // ── Fade transition helper ────────────────────────────────────────────────
  function transition(fn: () => void) {
    setVisible(false);
    setTimeout(() => {
      fn();
      setVisible(true);
    }, 220);
  }

  // ── Email step submit ─────────────────────────────────────────────────────
  function handleEmail() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    transition(() => {
      setAnswers((a) => ({ ...a, email }));
      setCurrentStep((s) => s + 1);
    });
  }

  // ── Single-choice select ──────────────────────────────────────────────────
  function handleSingle(option: string) {
    transition(() => {
      setAnswers((a) => ({ ...a, [step.id]: option }));
      if (currentStep + 1 >= TOTAL_STEPS) {
        startProcessing();
      } else {
        setCurrentStep((s) => s + 1);
      }
    });
  }

  // ── Multi-choice toggle ───────────────────────────────────────────────────
  function toggleMulti(option: string) {
    setMultiSelected((prev) => {
      if (prev.includes(option)) return prev.filter((o) => o !== option);
      if (prev.length >= 2) return prev; // max 2
      return [...prev, option];
    });
  }

  function handleMultiContinue() {
    if (multiSelected.length === 0) return;
    transition(() => {
      setAnswers((a) => ({ ...a, [step.id]: multiSelected }));
      setMultiSelected([]);
      if (currentStep + 1 >= TOTAL_STEPS) {
        startProcessing();
      } else {
        setCurrentStep((s) => s + 1);
      }
    });
  }

  // ── Processing → done ─────────────────────────────────────────────────────
  function startProcessing() {
    setPhase("processing");

    // Build payload — all values must be strings (arrays → comma-joined)
    const payload: Record<string, string> = {};
    for (const [key, value] of Object.entries(answers)) {
      payload[key] = Array.isArray(value) ? value.join(", ") : value;
    }

    // Submit via @formspree/react — errors are silently swallowed so UX is unaffected
    submitToFormspree(payload);

    // Always advance to "done" after the processing animation completes
    setTimeout(() => setPhase("done"), 2800);
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div
      className="relative min-h-screen bg-white flex flex-col items-center justify-center px-5 py-16 overflow-hidden"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ── Decorative squiggles — above brand and below form ────────────── */}
      <Squiggle className="pointer-events-none absolute top-0 left-1/2 -translate-x-[280px] h-28 w-10 rotate-90 hidden sm:block" />
      <Squiggle className="pointer-events-none absolute top-0 left-1/2 translate-x-[200px] h-28 w-10 rotate-90 hidden sm:block" />
      <Squiggle className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-[280px] h-28 w-10 rotate-90 hidden sm:block" />
      <Squiggle className="pointer-events-none absolute bottom-0 left-1/2 translate-x-[200px] h-28 w-10 rotate-90 hidden sm:block" />
      <main className="w-full max-w-md flex flex-col">
        {/* Brand + subtitle */}
        <div className="mb-10">
          <Logo />
          {phase === "questions" && (
            <span className="text-xs text-gray-500 mt-1 block">
              Set up your ride details
            </span>
          )}
        </div>

        <div className="w-full">

          {/* ── Processing screen ──────────────────────────────────────── */}
          {phase === "processing" && (
            <div className="text-center py-20">
              <AnimatedDots />
              <h2
                className="text-3xl text-gray-900 mt-6 mb-3"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Checking availability for your route
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                We're finding the right driver for your trip.
              </p>
            </div>
          )}

          {/* ── Final "You're early" screen ─────────────────────────────── */}
          {phase === "done" && (
            <div className="text-center py-12">
              {/* Badge */}
              <span className="inline-block bg-[#a8d800]/10 border border-[#a8d800]/30 text-[#6a8800] text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
                Early access
              </span>
              <h2
                className="text-5xl text-gray-900 mb-5"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                You're early.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-2 max-w-sm mx-auto">
                GetAround Belize isn't available for your route just yet.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
                We're rolling it out carefully to ensure every ride is reliable, safe, and handled by a verified driver. We'll notify you as soon as it's ready.
              </p>

              {/* Trust signals */}
              <div className="flex flex-col gap-3 mb-10 text-left max-w-xs mx-auto">
                {[
                  "Verified local drivers",
                  "Reliable ride experience",
                  "Built for travelers in Belize",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#a8d800]/15 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#a8d800]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-500 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/"
                className="inline-block border border-gray-200 text-gray-600 text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Back to homepage
              </Link>
              <p className="mt-6 text-xs text-gray-400">
                Need a ride sooner?{" "}
                <a
                  href={`mailto:${siteConfig.footer.columns[2]?.links[0]?.href?.replace("mailto:", "") ?? "hello@getaround.bz"}`}
                  className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors"
                >
                  Contact us
                </a>
              </p>
            </div>
          )}

          {/* ── Question steps ───────────────────────────────────────────── */}
          {phase === "questions" && (
            <>
              {/* Progress */}
              <div className="mb-10">
                <ProgressBar step={humanStep} total={TOTAL_STEPS} />
              </div>

              {/* Card */}
              <div
                className="transition-opacity duration-200"
                style={{ opacity: visible ? 1 : 0 }}
              >
                {/* ── Email step ─────────────────────────────────────────── */}
                {step.type === "email" && (
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl text-gray-900 mb-2"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      Where should we send your ride details?
                    </h2>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                      A few quick questions so we can line up the right driver for your trip.
                    </p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                        onKeyDown={(e) => e.key === "Enter" && handleEmail()}
                        placeholder="Your email address"
                        className="w-full border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 text-base placeholder-gray-300 focus:outline-none focus:border-[#a8d800] focus:ring-2 focus:ring-[#a8d800]/20 transition-all"
                        autoFocus
                      />
                      {emailError && (
                        <p className="text-red-400 text-xs px-1">{emailError}</p>
                      )}
                      <button
                        onClick={handleEmail}
                        className="w-full bg-[#a8d800] text-black font-bold py-4 rounded-2xl hover:bg-[#94c200] transition-colors text-base cursor-pointer"
                      >
                        Continue
                      </button>
                    </div>
                    <p className="text-gray-500 text-xs mt-4 text-center">
                      We won't share your email or send spam.
                    </p>
                  </div>
                )}

                {/* ── Single-choice step ─────────────────────────────────── */}
                {step.type === "single" && (
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl text-gray-900 mb-8"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {step.question}
                    </h2>
                    <div className="space-y-3">
                      {step.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSingle(opt)}
                          className="w-full text-left border border-gray-200 bg-gray-50 hover:bg-[#a8d800]/10 hover:border-[#a8d800]/50 text-gray-800 font-medium py-4 px-5 rounded-2xl transition-all text-base active:scale-[0.99] cursor-pointer"
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* ── Multi-choice step ──────────────────────────────────── */}
                {step.type === "multi" && (
                  <div>
                    <h2
                      className="text-3xl sm:text-4xl text-gray-900 mb-1"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                    >
                      {step.question}
                    </h2>
                    {step.hint && (
                      <p className="text-gray-500 text-sm mb-7">{step.hint}</p>
                    )}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {step.options.map((opt) => {
                        const selected = multiSelected.includes(opt);
                        const maxed = multiSelected.length >= 2 && !selected;
                        return (
                          <button
                            key={opt}
                            onClick={() => !maxed && toggleMulti(opt)}
                            className={`px-4 py-2.5 rounded-full border text-sm font-medium transition-all cursor-pointer ${
                              selected
                                ? "bg-[#a8d800] border-[#a8d800] text-black"
                                : maxed
                                ? "border-gray-200 text-gray-400 cursor-not-allowed bg-white opacity-50"
                                : "border-gray-200 text-gray-700 bg-white hover:border-[#a8d800]/60 hover:bg-[#a8d800]/8"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      onClick={handleMultiContinue}
                      disabled={multiSelected.length === 0}
                      className="w-full bg-[#a8d800] text-black font-bold py-4 rounded-2xl hover:bg-[#94c200] transition-colors text-base disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Continue
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

        </div>

        <footer className="text-center mt-12">
          <p className="text-xs text-gray-400">{siteConfig.footer.copyright}</p>
        </footer>
      </main>
    </div>
  );
}
