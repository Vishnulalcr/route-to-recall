import type { Metadata } from "next"
import CancellationContent from "@/components/cancellation-content"

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy",
  description: "Understand Route to Recall's cancellation and refund policy. Learn about cancellation charges, refund timelines, and modification procedures for your travel bookings.",
  openGraph: {
    title: "Cancellation & Refund Policy | Route to Recall",
    description: "Understand our cancellation and refund policy for travel bookings.",
  },
  alternates: {
    canonical: "https://routetorecall.com/cancellation",
  },
}

export default function CancellationPage() {
  return <CancellationContent />
}
