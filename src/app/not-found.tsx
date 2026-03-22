import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Page Not Found | GetAround Belize",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-gray-900 tracking-tight hover:opacity-80 transition-opacity">
            {siteConfig.nameDisplay.prefix}
            <span className="text-[#5f7800]">{siteConfig.nameDisplay.suffix}</span>
          </Link>
        </div>
      </nav>

      {/* Body */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 text-center">

        {/* Big number */}
        <p
          className="text-[10rem] leading-none font-black text-gray-100 select-none mb-2"
          aria-hidden="true"
          style={{ fontFamily: "var(--font-display)" }}
        >
          404
        </p>

        <h1
          className="text-3xl sm:text-4xl text-gray-900 mb-4 -mt-4"
          style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
        >
          Wrong turn in Belize.
        </h1>

        <p className="text-gray-500 max-w-sm mb-10 leading-relaxed">
          This page doesn't exist — but your ride still can. Head back home and we'll get you where you're going.
        </p>

        <Link
          href="/"
          className="bg-[#a8d800] text-black font-bold px-8 py-3.5 rounded-full hover:bg-[#94c200] transition-colors shadow-lg shadow-[#a8d800]/20"
        >
          Back to home
        </Link>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <p className="text-center text-xs text-gray-400">{siteConfig.footer.copyright}</p>
      </footer>

    </div>
  );
}
