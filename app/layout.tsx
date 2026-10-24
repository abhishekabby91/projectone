import type { Metadata, Viewport } from "next";
import "./globals.css";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeaderBar from "@/components/header-bar";
import TouchRipple from "@/components/touch-ripple";
import BackToTop from "@/components/back-to-top";
import InquiryModal from "@/components/inquiry-modal";
import InquiryRailMount from "@/components/inquiry-rail-mount";
import Analytics from "@/components/analytics";
import CookieConsent from "@/components/cookie-consent";
import { generateOrganizationSchema, generateWebsiteSchema, baseUrl } from "@/lib/seo";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,       // allow pinch-zoom for accessibility — do NOT set to 1
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a5f" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1f35" },
  ],
  colorScheme: "light",
  // Lets the page run edge to edge on notch/home-bar phones. Without it iOS
  // letterboxes the viewport and every env(safe-area-inset-*) resolves to 0 --
  // which is the state this file was in: globals.css already carried
  // safe-area padding for the header, the top bar and the footer, and none of
  // it did anything. Every element fixed to an edge must now add its own inset
  // (the enquiry bar, the cookie banner and the back-to-top button all do).
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  // iOS Safari turns number-like strings into blue tel: links on its own, which
  // on this site could surface the phone number the owner asked never to be
  // displayed as readable text. This disables that automatic detection only --
  // the explicit tel: link behind the header's phone icon still dials.
  formatDetection: { telephone: false, address: false, email: false },
  appleWebApp: {
    capable: true,
    title: "Accounstone",
    statusBarStyle: "black-translucent",
  },
  title: {
    // Fallback only - every page sets its own title, and the homepage sets
    // its exact SEO title via absoluteTitle. Kept distinct from the homepage
    // title so the two are not the same string in two places.
    default: "Accounstone — Accounting Outsourcing for CPA & Accounting Firms",
    template: "%s | Accounstone",
  },
  description:
    "Accounting outsourcing for CPA and accounting firms, including bookkeeping, accounting operations and tax-preparation support within existing review workflows.",
  authors: [{ name: "Accounstone" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
  manifest: "/manifest.webmanifest",
  icons: {
    // Ordered smallest-first; browsers take the best match. The .ico carries
    // 16/32/48 internally for older clients and Windows shortcuts.
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Accounstone",
    // Fallback only - every page sets its own og:title through
    // generateMetadata, the homepage included. Kept brand-led so it is not the
    // homepage SEO title duplicated in a second file.
    title: "Accounstone — Accounting Outsourcing for CPA & Accounting Firms",
    description:
      "Accounting, bookkeeping and tax outsourcing support for accounting firms and businesses. Accounstone works within existing systems, processes and review structures.",
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Accounstone — Accounting Outsourcing for CPA & Accounting Firms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // Fallback only, as above.
    title: "Accounstone — Accounting, Bookkeeping & Tax Outsourcing",
    description:
      "Accounting, bookkeeping and tax outsourcing support for accounting firms and businesses. Accounstone works within existing systems, processes and review structures.",
    images: [`${baseUrl}/og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className="bg-background">
      <head>
        {/*
          Google Consent Mode v2 defaults, denied. Must run before any Google
          tag, so it is a plain inline script in <head> rather than next/script
          — ~300 bytes, no network request, no cookie. It is what any tag added
          later (through GTM, say) inherits, so nothing can fire unasked even if
          it bypasses components/analytics.tsx.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=window.gtag||gtag;" +
              "gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'," +
              "analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied'," +
              "security_storage:'granted',wait_for_update:500});",
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-lg focus:bg-primary focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <TouchRipple />
        <HeaderBar />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
        <BackToTop />
        <InquiryModal />
        {/* The right-edge enquiry rail, mounted once for every route. It lives
            outside <main> on purpose — it is site chrome, not page content.
            Exceptions and the reason for each are in the component. */}
        <InquiryRailMount />

        {/*
          GA4 lives in `components/analytics.tsx` and renders no script at all
          until analytics consent exists. It used to load unconditionally here,
          which set `_ga` before the visitor had been asked anything.
        */}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}