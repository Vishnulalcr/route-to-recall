import type { Metadata } from "next"
import FAQContent from "@/components/faq-content"

export const metadata: Metadata = {
  title: "FAQ",
  description: "Find answers to frequently asked questions about Route to Recall travel services, bookings, payments, cancellation policy, and more.",
  openGraph: {
    title: "Frequently Asked Questions | Route to Recall",
    description: "Find answers to common questions about our travel services, booking process, and policies.",
  },
  alternates: {
    canonical: "https://routetorecall.com/faq",
  },
}

export default function FAQPage() {
  return <FAQContent />
}
