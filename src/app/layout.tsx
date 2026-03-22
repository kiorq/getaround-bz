import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

// ─── Viewport ────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Basic
  title: {
    default:  siteConfig.seo.title,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.description,
  keywords:    siteConfig.seo.keywords,

  // Canonical & robots
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      "max-video-preview":  -1,
      "max-image-preview":  "large",
      "max-snippet":        -1,
    },
  },

  // Open Graph
  openGraph: {
    type:        "website",
    locale:      siteConfig.seo.locale,
    url:         siteConfig.url,
    siteName:    siteConfig.name,
    title:       "Taxi in Belize Made Easy | GetAround Belize",
    description: "Book trusted taxis in Belize instantly. Safe, reliable, no hassle.",
    images: [
      {
        url:    siteConfig.ogImage,
        width:  1200,
        height: 630,
        alt:    "Book a Ride in Belize — GetAround Belize",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card:        "summary_large_image",
    title:       "Taxi in Belize Made Easy",
    description: "No apps. No confusion. Just reliable rides across Belize.",
    site:        siteConfig.twitterHandle,
    creator:     siteConfig.twitterHandle,
    images:      [siteConfig.ogImage],
  },

  // App / icon hints
  icons: {
    icon:    "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple:   "/apple-touch-icon.png",
  },

  // Manifest
  manifest: "/site.webmanifest",

  // Author
  authors:   [{ name: siteConfig.name, url: siteConfig.url }],
  creator:   siteConfig.name,
  publisher: siteConfig.name,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`h-full antialiased scroll-smooth ${dmSans.variable}`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteConfig.jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
