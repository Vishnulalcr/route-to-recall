import type { Metadata } from "next"
import PrivacyContent from "@/components/privacy-content"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Route to Recall collects, uses, and protects your personal information. Our privacy policy explains our data practices and your rights.",
  openGraph: {
    title: "Privacy Policy | Route to Recall",
    description: "Learn how Route to Recall collects, uses, and protects your personal information.",
  },
  alternates: {
    canonical: "https://routetorecall.com/privacy",
  },
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
