import type { Metadata } from "next"
import AboutContent from "@/components/about-content"
import { BreadcrumbJsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "About Us - Our Story & Team",
  description: "Meet the passionate team behind Route to Recall. Learn our story - from suits to sandals, how founders Ajisha Rajan and Vinayak Lal turned their passion for travel into Kerala's leading experiential travel company.",
  keywords: [
    "about Route to Recall",
    "travel company India",
    "Kerala travel agency",
    "Ajisha Rajan",
    "Vinayak Lal",
    "experiential travel company",
    "travel agency founders",
  ],
  openGraph: {
    title: "About Us | Route to Recall - Our Story & Team",
    description: "Meet the team behind Route to Recall and learn our story of creating unforgettable travel experiences across Asia.",
    url: "https://routetorecall.com/about",
  },
  alternates: {
    canonical: "https://routetorecall.com/about",
  },
}

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://routetorecall.com" },
    { name: "About Us", url: "https://routetorecall.com/about" },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <AboutContent />
    </>
  )
}
