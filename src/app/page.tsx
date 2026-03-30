import { siteConfig } from "@/config/site";
import { CtaButton, NavLink } from "@/components/AnalyticsLinks";
import { Logo } from "@/components/Logo";

// ─── Decorative SVG underline ─────────────────────────────────────────────────
function Underline({ word }: { word: string }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{word}</span>
      <svg
        aria-hidden="true"
        className="absolute -bottom-2 left-0 w-full overflow-visible"
        height="10"
        viewBox="0 0 300 10"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M2 7 C40 2, 80 9, 120 5 C160 1, 200 8, 240 4 C265 2, 285 7, 298 5"
          stroke="#5f7800"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

// ─── Background squiggle decoration ──────────────────────────────────────────
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

// ─── Sample ride card ─────────────────────────────────────────────────────────
function RideCard({ card, size = "sm" }: {
  card: typeof siteConfig.sampleRide.card;
  size?: "sm" | "lg";
}) {
  const pad = size === "lg" ? "p-8" : "p-5";
  const routeSize = size === "lg" ? "text-lg" : "text-base";
  return (
    <div className={`bg-white rounded-2xl border border-gray-200 shadow-xl shadow-gray-100 ${pad} w-full`}>
      {/* Route header */}
      <div className={`font-bold text-gray-900 ${routeSize} mb-4`} style={{ fontFamily: "var(--font-display)" }}>
        {card.route}
      </div>
      {/* Status badge */}
      <div className="inline-flex items-center gap-1.5 bg-[#a8d800]/10 border border-[#a8d800]/30 text-[#5f7800] text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#a8d800] inline-block" />
        Verified local driver
      </div>
      {/* Driver details */}
      <div className="space-y-2 mb-4">
        {[
          { label: "Driver", value: card.driver },
          { label: "Vehicle", value: card.vehicle },
          { label: "Pickup", value: card.pickup },
          { label: "Contact", value: card.contact },
        ].map(({ label, value }) => (
          <div key={label} className="flex gap-2 text-sm">
            <span className="text-gray-400 w-16 shrink-0">{label}</span>
            <span className="text-gray-700">{value}</span>
          </div>
        ))}
      </div>
      {/* Notes */}
      {size === "lg" && (
        <div className="border-t border-gray-100 pt-4 space-y-1.5">
          {card.notes.map((note) => (
            <div key={note} className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-3.5 h-3.5 text-[#5f7800] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {note}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Feature icon map ─────────────────────────────────────────────────────────
const icons: Record<string, React.ReactNode> = {
  "map-pin": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  "clock": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "credit-card": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  ),
  "shield-check": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  const { nav, hero, socialProof, painPoints, sampleRide, features, howItWorks, faq, footer } = siteConfig;

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">

      {/* ── Navbar ────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
          <Logo />
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
            {nav.links.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} className="hover:text-gray-900 transition-colors">
                {link.label}
              </NavLink>
            ))}
          </div>
          <CtaButton
            href={nav.cta.href}
            label={nav.cta.label}
            location="navbar"
            className="bg-[#a8d800] text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-[#94c200] transition-colors"
          >
            {nav.cta.label}
          </CtaButton>
        </div>
      </nav>

      <main>

        {/* ── Hero — split layout ───────────────────────────────────────────── */}
        <section className="relative max-w-6xl mx-auto px-5 pt-20 pb-24">
          <Squiggle className="absolute -left-16 top-10 h-72 w-20 hidden lg:block pointer-events-none" />
          <Squiggle className="absolute -right-16 top-24 h-56 w-16 hidden lg:block pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — copy */}
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-[#a8d800]/10 border border-[#a8d800]/30 text-[#5f7800] text-xs font-semibold px-3 py-1.5 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a8d800] inline-block" />
                Trusted rides across Belize
              </div>

              {/* Headline */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
              >
                Know your ride{" "}
                <Underline word="before" />{" "}
                you land in Belize.
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-lg">
                {hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <CtaButton
                  href={hero.primaryCta.href}
                  label={hero.primaryCta.label}
                  location="hero"
                  className="bg-[#a8d800] text-black font-bold px-8 py-4 rounded-full hover:bg-[#94c200] transition-colors shadow-lg shadow-[#a8d800]/20 text-base text-center"
                >
                  {hero.primaryCta.label}
                </CtaButton>
                {hero.secondaryCta && (
                  <CtaButton
                    href={hero.secondaryCta.href}
                    label={hero.secondaryCta.label}
                    location="hero"
                    className="border border-gray-200 text-gray-700 font-medium px-8 py-4 rounded-full hover:bg-gray-50 transition-colors text-base text-center"
                  >
                    {hero.secondaryCta.label}
                  </CtaButton>
                )}
              </div>

              {/* Trust badges */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2">
                {hero.trustBadges.map((badge) => (
                  <span key={badge} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <svg className="w-4 h-4 text-[#5f7800] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                    </svg>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — ride card */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm">
                <RideCard card={sampleRide.card} size="sm" />
                <p className="text-xs text-gray-400 text-center mt-3">Example ride — BZE Airport to Belize City</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Social proof strip ────────────────────────────────────────────── */}
        <section className="border-y border-gray-100 bg-gray-50 py-6">
          <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-600 text-center sm:text-left">
              {socialProof.headline}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2">
              {socialProof.items.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                  <svg className="w-3.5 h-3.5 text-[#5f7800] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pain Points ───────────────────────────────────────────────────── */}
        <section className="bg-gray-900 text-white py-24">
          <div className="max-w-6xl mx-auto px-5">
            <h2
              className="text-4xl sm:text-5xl text-center text-white mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {painPoints.heading}
            </h2>
            <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto text-lg">
              {painPoints.subheading}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 -mx-5 sm:mx-0 gap-px bg-gray-700">
              {painPoints.items.map((item, i) => (
                <div key={item.title} className="bg-gray-900 p-5 sm:p-10 group hover:bg-[#ef4444] transition-colors">
                  <div className="flex items-start gap-5">
                    <span
                      className="text-5xl font-black text-[#ef4444]/50 group-hover:text-black transition-colors leading-none mt-1 shrink-0"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3
                        className="text-xl sm:text-2xl text-white group-hover:text-black transition-colors mb-2"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-900 transition-colors leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-12 text-lg text-[#a8d800] font-bold">
              {painPoints.bridge}
            </p>
          </div>
        </section>

        {/* ── Sample ride — "What this looks like" ──────────────────────────── */}
        <section id="sample-ride" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Left — card */}
              <div className="flex justify-center">
                <div className="w-full max-w-md">
                  <RideCard card={sampleRide.card} size="lg" />
                </div>
              </div>

              {/* Right — copy */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
                  Example ride
                </div>
                <h2
                  className="text-4xl sm:text-5xl text-gray-900 mb-6"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                >
                  {sampleRide.heading}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-10">
                  {sampleRide.subheading}
                </p>
                <CtaButton
                  href={sampleRide.cta.href}
                  label={sampleRide.cta.label}
                  location="sample-ride"
                  className="inline-block bg-[#a8d800] text-black font-bold px-8 py-4 rounded-full hover:bg-[#94c200] transition-colors shadow-lg shadow-[#a8d800]/20"
                >
                  {sampleRide.cta.label}
                </CtaButton>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ──────────────────────────────────────────────────── */}
        <section id="how-it-works" className="bg-gray-100 py-24">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex justify-center mb-10">
              <span className="inline-flex items-center gap-2 bg-white text-gray-500 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-gray-200">
                How it works
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl text-center text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {howItWorks.heading}
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-md mx-auto">{howItWorks.subheading}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-14">
              {howItWorks.steps.map((step) => (
                <div key={step.number} className="flex flex-col">
                  <span
                    className="text-6xl text-[#5f7800] mb-4 leading-none"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-xl text-gray-900 mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            {/* CTA after steps */}
            <div className="text-center">
              <CtaButton
                href={nav.cta.href}
                label={nav.cta.label}
                location="how-it-works"
                className="inline-block bg-[#a8d800] text-black font-bold px-8 py-4 rounded-full hover:bg-[#94c200] transition-colors"
              >
                {nav.cta.label}
              </CtaButton>
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────────────────── */}
        <section id="features" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex justify-center mb-10">
              <span className="inline-flex items-center gap-2 bg-[#a8d800]/15 text-[#6a8800] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                Why GetAround Belize
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl text-center text-gray-900 mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {features.heading}
            </h2>
            <p className="text-gray-600 text-center mb-16 max-w-xl mx-auto">{features.subheading}</p>
            <div className="divide-y divide-gray-100">
              {features.items.map((item, i) => (
                <div
                  key={item.title}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-8 py-10 group"
                >
                  <span
                    className="text-7xl sm:text-8xl font-black text-gray-100 group-hover:text-[#a8d800]/30 transition-colors select-none leading-none shrink-0 w-28 text-left"
                    style={{ fontFamily: "var(--font-display)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-[#a8d800]/10 rounded-lg flex items-center justify-center text-[#5f7800] shrink-0">
                        {icons[item.icon]}
                      </div>
                      <h3
                        className="text-xl sm:text-2xl text-gray-900"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-xl">{item.description}</p>
                  </div>
                  <div className="hidden sm:block h-12 w-px bg-gray-100 group-hover:bg-[#a8d800]/40 transition-colors shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────────── */}
        <section id="faq" className="bg-gray-100 py-24">
          <div className="max-w-3xl mx-auto px-5">
            <h2
              className="text-4xl sm:text-5xl text-center text-gray-900 mb-14"
              style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
            >
              {faq.heading}
            </h2>
            <div className="space-y-3">
              {faq.items.map((item) => (
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

            {/* CTA after FAQ */}
            <div className="mt-10 text-center">
              <p className="text-gray-500 text-sm mb-4">Still planning your trip?</p>
              <CtaButton
                href={nav.cta.href}
                label={nav.cta.label}
                location="faq"
                className="inline-block bg-[#a8d800] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#94c200] transition-colors"
              >
                {nav.cta.label}
              </CtaButton>
            </div>

            {/* Driver CTA */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">For drivers</p>
              <p className="text-gray-500 text-sm mb-1">{faq.driverCta.question}</p>
              <p className="text-gray-500 text-sm">
                {faq.driverCta.answer}{" "}
                <NavLink
                  href={faq.driverCta.linkHref}
                  label={faq.driverCta.linkLabel}
                  className="text-gray-500 underline underline-offset-2 hover:text-gray-700 transition-colors"
                >
                  {faq.driverCta.linkLabel}
                </NavLink>
              </p>
            </div>
          </div>
        </section>

        {/* ── Final CTA band ────────────────────────────────────────────────── */}
        <section className="bg-gray-900 py-20 px-5 text-center">
          <h2
            className="text-3xl sm:text-4xl text-white mb-4 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Traveling to Belize soon? Don't figure it out last minute.
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Check if your route is available and get notified as soon as it's ready.
          </p>
          <CtaButton
            href={nav.cta.href}
            label={nav.cta.label}
            location="final-cta"
            className="inline-block bg-[#a8d800] text-black font-bold px-10 py-4 rounded-full hover:bg-[#94c200] transition-colors shadow-lg shadow-[#a8d800]/20 text-base"
          >
            {nav.cta.label} →
          </CtaButton>
        </section>

      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white pt-14 pb-8 px-5 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 mb-10">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-bold text-lg">
              {siteConfig.nameDisplay.prefix}
              <span className="text-[#5f7800]">{siteConfig.nameDisplay.suffix}</span>
            </span>
            <p className="text-gray-500 text-sm mt-3 leading-relaxed">{footer.tagline}</p>
          </div>
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h5 className="text-white text-xs font-bold uppercase tracking-widest mb-4">{col.heading}</h5>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <NavLink href={link.href} label={link.label} className="text-gray-500 text-sm hover:text-white transition-colors">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                {col.heading === "Contact" && (
                  <li className="mt-3">
                    <CtaButton
                      href={footer.cta.href}
                      label={footer.cta.label}
                      location="footer"
                      className="inline-flex items-center gap-2 bg-[#a8d800] text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-[#94c200] transition-colors"
                    >
                      {footer.cta.label}
                    </CtaButton>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-xs">{footer.copyright}</p>
        </div>
      </footer>

    </div>
  );
}
