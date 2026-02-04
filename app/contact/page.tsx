import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import BentoNavigation from "@/components/bento-navigation"
import BentoFooter from "@/components/bento-footer"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Route to Recall. Have questions about your next adventure? We'd love to hear from you. Contact us via email, phone, or visit our office in Kerala.",
  openGraph: {
    title: "Contact Us | Route to Recall",
    description: "Get in touch with Route to Recall for your travel inquiries and trip planning.",
  },
  alternates: {
    canonical: "https://routetorecall.com/contact",
  },
}

export default function ContactPage() {
  return (
    <main className="bg-white text-[#1C1C1C] min-h-screen">
      <BentoNavigation />

      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-[#666666] hover:text-[#39FF14] transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 text-[#1C1C1C]">Get in Touch</h1>
            <p className="text-[#666666] text-lg max-w-2xl">
              Have questions about your next adventure? We'd love to hear from you. Send us a message and we'll respond
              as soon as possible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#1C1C1C]">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-[#A259FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C1C1C] mb-1">Email</h3>
                      <a
                        href="mailto:enquiries@routetorecall.com"
                        className="text-[#666666] hover:text-[#39FF14] transition-colors"
                      >
                        enquiries@routetorecall.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-[#00C2FF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C1C1C] mb-1">Phone</h3>
                      <a href="tel:6363331334" className="text-[#666666] hover:text-[#39FF14] transition-colors">
                        +91 6363 331 334
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F3ECFF] flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-[#39FF14]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1C1C1C] mb-1">Office</h3>
                      <address className="text-[#666666] not-italic">
                        Route to Recall Private Limited
                        <br />
                        #50, Route to Recall Office
                        <br />
                        Green Valley Orchid, Udayamperoor
                        <br />
                        Ernakulam, Kerala 682307
                      </address>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F9FC] rounded-2xl p-6">
                <h3 className="font-semibold text-[#1C1C1C] mb-3">Office Hours</h3>
                <div className="space-y-2 text-[#666666]">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6 text-[#1C1C1C]">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BentoFooter />
    </main>
  )
}
