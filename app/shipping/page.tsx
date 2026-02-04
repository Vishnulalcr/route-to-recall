import type { Metadata } from "next"
import ShippingContent from "@/components/shipping-content"

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy",
  description: "Learn about Route to Recall's document delivery policy. Understand how travel documents, confirmations, and vouchers are delivered electronically to our clients.",
  openGraph: {
    title: "Shipping & Delivery Policy | Route to Recall",
    description: "Learn about our document delivery policy for travel bookings.",
  },
  alternates: {
    canonical: "https://routetorecall.com/shipping",
  },
}

export default function ShippingPage() {
  return <ShippingContent />
}
