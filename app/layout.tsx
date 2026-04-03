import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import ScrollToTop from "@/components/scroll-to-top"
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/json-ld"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://routetorecall.com"),
  title: {
    default: "Route to Recall | Experiential Travel Company - Unforgettable Tour Packages",
    template: "%s | Route to Recall",
  },
  description: "Crafting extraordinary travel experiences across Thailand, Singapore, Malaysia, Maldives, Bali, Sri Lanka, Nepal, Dubai & Cambodia. Curated journeys that turn into unforgettable stories. Book your dream vacation today!",
  keywords: [
    "experiential travel",
    "travel company",
    "Thailand tours",
    "Singapore travel",
    "Malaysia holidays",
    "Maldives packages",
    "Bali trips",
    "Sri Lanka tours",
    "Nepal trekking",
    "Dubai tours",
    "Cambodia travel",
    "customized travel",
    "holiday packages",
    "adventure travel",
    "luxury travel",
    "tour packages India",
    "international tour packages",
    "honeymoon packages",
    "family vacation packages",
    "travel agency Kerala",
  ],
  authors: [{ name: "Route to Recall" }],
  creator: "Route to Recall",
  publisher: "Route to Recall",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/logo-black.png", type: "image/png", sizes: "any" },
      { url: "/logo-black.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-black.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo-black.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo-black.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://routetorecall.com",
    siteName: "Route to Recall",
    title: "Route to Recall | Experiential Travel Company",
    description: "Crafting extraordinary travel experiences across Asia. Curated journeys that turn into unforgettable stories. Book your dream vacation today!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Route to Recall - Experiential Travel Company - Unforgettable Tour Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@routetorecall",
    creator: "@routetorecall",
    title: "Route to Recall | Experiential Travel Company",
    description: "Crafting extraordinary travel experiences across Asia. Curated journeys that turn into unforgettable stories.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://routetorecall.com",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "travel",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1C1C1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className={plusJakartaSans.className}>
        <OrganizationJsonLd />
        <WebsiteJsonLd />
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
