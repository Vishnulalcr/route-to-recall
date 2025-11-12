"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
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
                    <h3 className="font-bold text-[#1C1C1C]">Download Full Terms of Use</h3>
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
          <motion.div
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
              <p className="text-[#666666] leading-relaxed mt-4">
                If you are accepting these Terms on behalf of a company or other legal entity, you represent that you
                have the authority to bind such entity to these Terms. In that case, the terms "you" and "your" shall
                refer to that entity.
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
              <p className="text-[#666666] leading-relaxed mt-4">
                By confirming a booking with us, you acknowledge that you have read and agreed to these policies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">2. Modifications</h2>
              <p className="text-[#666666] leading-relaxed">
                Route to Recall reserves the right, at its sole discretion, to modify, suspend, or discontinue the
                website or Services, or to revise these Terms at any time without prior notice. Any changes will be
                posted on the website, with the "Last Updated" date reflecting the modification.
              </p>
              <p className="text-[#666666] leading-relaxed mt-4">
                By continuing to use our website or Services after such changes are posted, you agree to be bound by the
                updated Terms. If you do not accept the revised Terms, your sole remedy is to discontinue use of the
                website and Services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">3. Reliance on Information & Disclaimer</h2>
              <p className="text-[#666666] leading-relaxed">
                The information and materials provided on our website are for general informational purposes only and do
                not constitute legal, professional, or other expert advice. While we strive to ensure accuracy, Route to
                Recall does not guarantee that the information is error-free or up to date.
              </p>
              <p className="text-[#666666] leading-relaxed mt-4">
                We are not liable for any direct, indirect, incidental, or consequential loss or damage resulting from
                reliance on any information provided on this website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">4. Intellectual Property Rights</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                All content on this website—including text, graphics, images, videos, designs, and software—is the
                intellectual property of Route to Recall or its licensors, protected under applicable copyright and
                trademark laws.
              </p>
              <p className="text-[#666666] leading-relaxed mb-4">
                You may print or download limited extracts for personal, non-commercial use only, provided that:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>You do not modify any materials;</li>
                <li>You do not separate graphics, photographs, or videos from accompanying text; and</li>
                <li>Our ownership and copyright notices remain intact.</li>
              </ul>
              <p className="text-[#666666] leading-relaxed mt-4">
                You may not use, reproduce, or distribute any material for commercial purposes without prior written
                consent from Route to Recall. Any unauthorized use will result in immediate termination of your access
                rights.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">5. Website Updates</h2>
              <p className="text-[#666666] leading-relaxed">
                We strive to keep our site updated regularly; however, content may change without notice. We are not
                obligated to update outdated materials, and access to the website may be suspended or discontinued at
                our discretion.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">6. General Prohibitions</h2>
              <p className="text-[#666666] leading-relaxed mb-4">You agree not to engage in any activity that:</p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Infringes upon any third-party rights (including intellectual property and privacy);</li>
                <li>Violates any applicable law or regulation;</li>
                <li>Contains misleading, obscene, defamatory, or offensive material;</li>
                <li>Promotes discrimination, hate speech, or illegal activities;</li>
                <li>Attempts to gain unauthorized access to any part of our systems or Services;</li>
                <li>Introduces harmful code such as viruses, trojans, or malware;</li>
                <li>Uses automated means (like bots or crawlers) to access or extract data;</li>
                <li>Interferes with or disrupts the proper functioning of the website; or</li>
                <li>Impersonates any person or entity or misrepresents your affiliation.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">7. No Unlawful or Prohibited Use</h2>
              <p className="text-[#666666] leading-relaxed">
                You agree not to use the Route to Recall website for any unlawful purpose or in any way that could
                damage, disable, or impair the website's operation or restrict others from using it. Any misuse may
                result in suspension or termination of your access.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">8. Viruses and Cybersecurity</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                You must not introduce viruses, worms, trojans, or other malicious software onto our site. Attempting
                unauthorized access to our systems or conducting a denial-of-service attack is a criminal offense under
                applicable Indian cyber laws.
              </p>
              <p className="text-[#666666] leading-relaxed">
                In such cases, we will report violations to the relevant authorities and cooperate in investigations.
                Route to Recall shall not be liable for losses or damages caused by such attacks or malware resulting
                from use of our website or links to third-party sites.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">9. Links to Third-Party Websites</h2>
              <p className="text-[#666666] leading-relaxed">
                Our website may include links to external sites for your convenience. These sites are operated by third
                parties, and Route to Recall does not control or endorse their content. We assume no responsibility for
                their policies or practices. Please review their respective terms of use and privacy policies before
                engaging with them.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">10. Indemnity</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                You agree to defend, indemnify, and hold harmless Route to Recall, its owners, employees, and agents
                from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Your use of the website or Services;</li>
                <li>Your breach of these Terms; or</li>
                <li>Violation of any law or rights of a third party.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">11. Limitation of Liability</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                To the fullest extent permitted by law, Route to Recall shall not be liable for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#666666]">
                <li>Any indirect, incidental, special, or consequential damages;</li>
                <li>Loss of profits, data, goodwill, or business opportunity;</li>
                <li>Service interruptions or technical failures; or</li>
                <li>Any damages arising from interactions with other users or third-party providers.</li>
              </ul>
              <p className="text-[#666666] leading-relaxed mt-4">
                Your sole and exclusive remedy for dissatisfaction with the website or Services is to stop using them.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">12. Dispute Resolution</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                Any disputes arising out of or related to these Terms or the use of our Services will be resolved
                through the following two-step Alternative Dispute Resolution (ADR) process:
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1C1C1C]">a. Mediation:</h3>
              <p className="text-[#666666] leading-relaxed">
                Both parties shall first attempt to resolve disputes amicably within 30 days of written notice of the
                dispute.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3 text-[#1C1C1C]">b. Arbitration:</h3>
              <p className="text-[#666666] leading-relaxed mb-4">
                If unresolved, disputes shall be referred to a sole arbitrator appointed by Route to Recall. Arbitration
                will be conducted in English, with the seat of arbitration in Bengaluru, Karnataka, India. The decision
                of the arbitrator shall be final and binding.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Each party shall bear its own costs unless otherwise directed by the arbitrator.
              </p>
              <p className="text-[#666666] leading-relaxed mt-4">
                These Terms and all related policies shall be governed by and construed in accordance with the laws of
                India, and the courts at Bengaluru shall have exclusive jurisdiction.
              </p>
            </div>

            <div className="bg-[#F7F9FC] rounded-2xl p-8 mt-12">
              <h2 className="text-3xl font-bold mb-4 text-[#1C1C1C]">13. Contact Us</h2>
              <p className="text-[#666666] leading-relaxed mb-4">
                If you have any questions regarding these Terms or your use of the website, please contact us at:
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
              <p className="text-[#666666] leading-relaxed mt-4">
                🌐{" "}
                <a
                  href="https://www.routetorecall.com"
                  className="text-[#A259FF] hover:text-[#39FF14] transition-colors"
                >
                  www.routetorecall.com
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
