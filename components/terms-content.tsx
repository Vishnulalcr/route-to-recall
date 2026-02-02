"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"

export default function TermsContent() {
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
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#1C1C1C]">Terms of Use</h1>
            <p className="text-[#666666] text-lg mb-2">Route to Recall</p>
            <p className="text-[#666666] text-lg mb-8">Last Updated: 05-04-2025</p>

            <div className="mb-12 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center">
                    <FileText className="h-6 w-6 text-[#A259FF]" />
                  </div>
                  <div>
                    <h2 className="font-bold text-[#1C1C1C]">Download Full Terms of Use</h2>
                    <p className="text-sm text-[#666666]">Complete document in PDF format</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="rounded-full bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white transition-all"
                >
                  <a
                    href="https://drive.google.com/file/d/1XFSwbga0A_RCpc4euxOYwrgYXCIIU0a-/view?usp=sharing"
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
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#F7F9FC] border-l-4 border-[#39FF14] p-6 rounded-r-xl">
              <p className="text-[#666666] leading-relaxed">
                Welcome to Route to Recall (referred to as "we," "us," or "our"). These Terms of Use ("Terms") govern
                your access to and use of our website and travel-related services (collectively referred to as the
                "Services"). By accessing, browsing, or using our website, you agree to be bound by these Terms, forming
                a binding legal agreement between you and Route to Recall (routetorecall.com).
              </p>
              <p className="text-[#666666] leading-relaxed mt-4">
                <strong>
                  If you do not agree with these Terms, you may not access or use the website or any of our Services.
                </strong>
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">1. Booking on the Route to Recall Website</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Before booking any of our tours or services, please read carefully the following documents:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Tour Booking Terms & Conditions</li>
                <li>Tour Cancellation Policy</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">2. Modifications</h2>
              <p className="text-[#666666] leading-relaxed">
                Route to Recall reserves the right, at its sole discretion, to modify, suspend, or discontinue the
                website or Services, or to revise these Terms at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">3. Intellectual Property Rights</h2>
              <p className="text-[#666666] leading-relaxed">
                All content on this website—including text, graphics, images, videos, designs, and software—is the
                intellectual property of Route to Recall or its licensors, protected under applicable copyright and
                trademark laws.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">4. General Prohibitions</h2>
              <p className="text-[#666666] leading-relaxed mb-4">You agree not to engage in any activity that:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Infringes upon any third-party rights</li>
                <li>Violates any applicable law or regulation</li>
                <li>Contains misleading, obscene, defamatory, or offensive material</li>
                <li>Attempts to gain unauthorized access to any part of our systems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">5. Limitation of Liability</h2>
              <p className="text-[#666666] leading-relaxed">
                To the fullest extent permitted by law, Route to Recall shall not be liable for any indirect, incidental,
                special, or consequential damages arising from your use of our Services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">6. Dispute Resolution</h2>
              <p className="text-[#666666] leading-relaxed">
                Any disputes arising out of these Terms will be resolved through mediation first, followed by arbitration
                in Bengaluru, Karnataka, India. These Terms shall be governed by the laws of India.
              </p>
            </div>

            <aside className="bg-[#F7F9FC] rounded-2xl p-8 mt-12">
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">Contact Us</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                If you have any questions regarding these Terms, please contact us at:
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
            </aside>
          </motion.article>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
