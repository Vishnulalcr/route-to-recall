import type { Metadata } from "next"
import FAQContent from "@/components/faq-content"
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/json-ld"
import { faqData } from "@/lib/faq-data"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to frequently asked questions about Route to Recall travel services, bookings, payments, cancellation policy, customized tours, and more. Get all the information you need before booking your dream vacation.",
  keywords: [
    "Route to Recall FAQ",
    "travel agency FAQ",
    "tour booking questions",
    "travel payment terms",
    "cancellation policy",
    "customized tours India",
    "international tour packages FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions | Route to Recall",
    description: "Find answers to common questions about our travel services, booking process, payments, and policies.",
    url: "https://routetorecall.com/faq",
  },
  alternates: {
    canonical: "https://routetorecall.com/faq",
  },
}

export default function FAQPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://routetorecall.com" },
    { name: "FAQ", url: "https://routetorecall.com/faq" },
  ]

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <FAQJsonLd faqs={faqData} />
      <FAQContent />
    </>
  )
}
