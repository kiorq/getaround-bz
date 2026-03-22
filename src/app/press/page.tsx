import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const withText = [
  { src: "/ads/with-text/getaroundbz-ad-02.png", alt: "Just landed? Your ride is already handled." },
  { src: "/ads/with-text/getaroundbz-ad-03.png", alt: "Your ride is here. Trusted drivers, ready when you are." },
  { src: "/ads/with-text/getaroundbz-ad-04.png", alt: "Don't wait around. Your ride is already set." },
  { src: "/ads/with-text/getaroundbz-ad-05.png", alt: "See more. Without the hassle." },
  { src: "/ads/with-text/getaroundbz-ad-06.png", alt: "Skip this part. Book before you arrive." },
  { src: "/ads/with-text/getaroundbz-ad-07.png", alt: "GetAround Belize ad 07" },
  { src: "/ads/with-text/getaroundbz-ad-08.png", alt: "GetAround Belize ad 08" },
];

const noText = [
  { src: "/ads/no-text/getaroundbz-notext-01.png", alt: "GetAround Belize scene 01" },
  { src: "/ads/no-text/getaroundbz-notext-02.png", alt: "GetAround Belize scene 02" },
  { src: "/ads/no-text/getaroundbz-notext-03.png", alt: "GetAround Belize scene 03" },
  { src: "/ads/no-text/getaroundbz-notext-04.png", alt: "GetAround Belize scene 04" },
  { src: "/ads/no-text/getaroundbz-notext-05.png", alt: "GetAround Belize scene 05" },
];

export const metadata = {
  title: "Press & Media | GetAround Belize",
  description: "Download logos, images and brand assets for GetAround Belize.",
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-gray-900 tracking-tight hover:opacity-80 transition-opacity">
            {siteConfig.nameDisplay.prefix}
            <span className="text-[#a8d800]">{siteConfig.nameDisplay.suffix}</span>
          </Link>
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
            ← Back to site
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-5 py-20">

        {/* Header */}
        <div className="mb-16">
          <h1
            className="text-4xl sm:text-5xl text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Press &amp; Media
          </h1>
          <p className="text-gray-500 text-lg max-w-xl">
            Brand assets and marketing images for GetAround Belize. Free to use for editorial and press coverage.
          </p>
          <p className="text-sm text-gray-400 mt-3">
            Questions? <a href={`mailto:${siteConfig.footer.columns[1]?.links[0]?.href?.replace("mailto:", "") ?? "hello@getaround.bz"}`} className="underline underline-offset-2 hover:text-gray-600 transition-colors">Get in touch</a>
          </p>
        </div>

        {/* With text */}
        <section className="mb-20">
          <h2
            className="text-xl text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Campaign images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {withText.map((img) => (
              <a
                key={img.src}
                href={img.src}
                download
                className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-[#a8d800]/40 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[1.91/1] w-full bg-gray-50">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <p className="text-xs text-gray-400 truncate pr-2">{img.alt}</p>
                  <span className="text-xs text-[#a8d800] font-medium shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    Download ↓
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* No text */}
        <section>
          <h2
            className="text-xl text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-display)", fontWeight: 800 }}
          >
            Scene images
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {noText.map((img) => (
              <a
                key={img.src}
                href={img.src}
                download
                className="group block rounded-2xl overflow-hidden border border-gray-100 hover:border-[#a8d800]/40 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-[1.91/1] w-full bg-gray-50">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <p className="text-xs text-gray-400 truncate pr-2">{img.alt}</p>
                  <span className="text-xs text-[#a8d800] font-medium shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    Download ↓
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8 mt-20">
        <p className="text-center text-xs text-gray-400">{siteConfig.footer.copyright}</p>
      </footer>
    </div>
  );
}
