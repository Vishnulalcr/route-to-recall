"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, FileText } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#666666] hover:text-[#39FF14] transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-[#F3ECFF] flex items-center justify-center">
                <Shield className="h-8 w-8 text-[#A259FF]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1C1C1C]">Privacy Policy</h1>
            </div>
            <p className="text-[#666666] text-lg mb-8">Last updated: January 2025</p>

            <div className="mb-12 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#00C2FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C]">Download Full Privacy Policy</h3>
                    <p className="text-sm text-[#666666]">Complete document in PDF format</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white transition-all"
                >
                  <a
                    href="https://drive.google.com/file/d/1B7F6pZA2aOCQW7lNKfDSxSInuQIVvRF4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download PDF
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Introduction</h2>
              <p className="text-[#666666] leading-relaxed">
                At Route to Recall, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Information We Collect</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Travel preferences and booking information</li>
                <li>Payment and billing information</li>
                <li>Passport and visa information when necessary for travel arrangements</li>
                <li>Communication preferences and correspondence with us</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">How We Use Your Information</h2>
              <p className="text-[#666666] leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Process and manage your travel bookings</li>
                <li>Communicate with you about your trips and our services</li>
                <li>Provide customer support and respond to your inquiries</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our services and develop new offerings</li>
                <li>Comply with legal obligations and protect our legal rights</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Information Sharing and Disclosure</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                We may share your information with third parties in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>With travel service providers (hotels, airlines, tour operators) to fulfill your bookings</li>
                <li>With payment processors to handle transactions</li>
                <li>With legal authorities when required by law</li>
                <li>With your consent or at your direction</li>
              </ul>
              <p className="text-[#666666] leading-relaxed mt-4">
                We do not sell your personal information to third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Data Security</h2>
              <p className="text-[#666666] leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Your Rights</h2>
              <p className="text-[#666666] leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Access and receive a copy of your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where we rely on it to process your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Cookies and Tracking Technologies</h2>
              <p className="text-[#666666] leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience on our website. You can
                control cookie settings through your browser. For more information, please see our Cookie Policy.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Changes to This Policy</h2>
              <p className="text-[#666666] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="bg-[#F7F9FC] rounded-2xl p-8 mt-12">
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Contact Us</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#39FF14] flex items-center justify-center">
                  <FileText className="h-5 w-5 text-[#1C1C1C]" />
                </div>
                <a
                  href="mailto:enquiries@routetorecall.com"
                  className="text-[#A259FF] hover:text-[#39FF14] transition-colors font-semibold text-lg"
                >
                  enquiries@routetorecall.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
