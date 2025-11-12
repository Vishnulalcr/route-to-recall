"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Route to Recall and what do you offer?",
      answer:
        "Route to Recall is a personalized travel planning and experience design company based in Kerala, India. We create interest-based travel journeys that focus on culture, discovery, and connection. Our services include curated private tours, family holidays, group trips, and experiential journeys across India and around the world. We believe that travel should be meaningful, memorable, and designed around who you are.",
    },
    {
      question: "Can you provide only one travel service, like flights or visas?",
      answer:
        "We offer complete travel experiences and do not handle individual services such as only flights, only visas, or only hotel bookings. Our focus is on creating complete and seamless travel experiences that include planning, stays, logistics, and support throughout your journey.",
    },
    {
      question: "Why should I book my tour with Route to Recall?",
      answer:
        "We focus on quality, personalization, and trust. We work only with reliable, well-rated partners and local suppliers based on verified feedback. Our itineraries come from years of firsthand travel experience across India and abroad. We are a registered private limited company with a physical office in Kerala. Every journey is carefully crafted to match your interests and comfort level. You can always visit us in person or reach out directly.",
    },
    {
      question: "Do you customize tours?",
      answer:
        "Yes, all our tours are customized. Every Route to Recall itinerary is designed specifically for your travel goals, interests, and preferences. To begin, fill out the travel request form on our website with your details such as destinations, travel dates, and budget. We will get in touch to create a journey that fits you perfectly.",
    },
    {
      question: "Do your packages include flights and visas?",
      answer:
        "Flights are not included in the base package prices since airfares change dynamically based on dates and availability. If you wish, we can arrange your flights once your tour is confirmed. The flight cost will be provided separately at the time of booking. For international tours, we can also help with visa processing for clients who have booked their travel packages with us.",
    },
    {
      question: "Do you include entrance fees and meals?",
      answer:
        "All our tours include accommodation with breakfast by default. Depending on the destination and your preference, some itineraries include two or all meals. For international tours, entrance fees to major attractions are usually included unless specified otherwise. For domestic tours within India, entrance fees are usually low and left to your discretion. For foreign travelers visiting India, entrance fees are included as per the itinerary. Please refer to your itinerary for exact inclusions.",
    },
    {
      question: "Do you plan budget tours?",
      answer:
        "We do not operate budget tours. Our focus is on experience-rich, comfortable travel that typically includes four-star or boutique accommodations. Whenever possible, we upgrade to premium or experiential stays that elevate the journey.",
    },
    {
      question: "How do I book a tour?",
      answer:
        "Once you finalize your itinerary, confirm it via email. Bookings are initiated only after the advance payment is received. Please share the payment transaction details along with your confirmation email.",
    },
    {
      question: "What is the best way to contact you?",
      answer:
        "You can reach us easily via Call or WhatsApp at +91 9036 335388, or Email at enquiries@routetorecall.com. For all business or partnership queries, please contact us only through email.",
    },
    {
      question: "How can I make payments, and what are the payment terms?",
      answer: "",
      detailed: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-3 text-[#A259FF]">Payment Options</h4>
            <p className="mb-4">You can make payments using any of the following methods:</p>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Online Bank Transfer or Cheque Deposit:</h5>
                <div className="bg-[#F7F9FC] p-4 rounded-lg space-y-1 text-sm">
                  <p>
                    <strong>Account Name:</strong> Route to Recall Private Limited
                  </p>
                  <p>
                    <strong>Account Number:</strong> 5020 0088 7869 95
                  </p>
                  <p>
                    <strong>Account Type:</strong> Current Account
                  </p>
                  <p>
                    <strong>Bank:</strong> HDFC Bank Ltd
                  </p>
                  <p>
                    <strong>IFSC:</strong> HDFC0009576
                  </p>
                  <p>
                    <strong>Bank Address:</strong> Door No 1/427 B, Ground Floor, Thanangatil Building, Mulanthuruthy,
                    Ernakulam, Kerala 682314
                  </p>
                </div>
              </div>
              <div>
                <h5 className="font-semibold">Credit or Debit Card:</h5>
                <p className="text-[#666666]">A 2% additional service fee applies to all card transactions.</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-3 text-[#A259FF]">Payment Terms</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold mb-2">Domestic Tours (India):</h5>
                <ul className="list-disc pl-6 space-y-1 text-[#666666]">
                  <li>40% advance at the time of booking</li>
                  <li>Remaining 60% due 15 days before the tour start date</li>
                  <li>Flight costs, if booked through us, must be paid in full at the time of booking</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">International Tours:</h5>
                <ul className="list-disc pl-6 space-y-1 text-[#666666]">
                  <li>50% advance at the time of booking</li>
                  <li>Remaining 50% due 45 days before the tour start date</li>
                  <li>Flight and visa costs, if handled by us, must be paid in full at the time of booking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "What is your refund and cancellation policy?",
      answer: "",
      detailed: (
        <div className="space-y-6">
          <p>
            If you wish to cancel your tour, please inform us in writing. Cancellation charges will be effective from
            the date we receive your written notice.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#F7F9FC]">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Time Before Tour Start</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cancellation Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">45 days or more</td>
                  <td className="border border-gray-300 px-4 py-3">
                    15% of tour or service cost or ₹5,000 (whichever is higher)
                  </td>
                </tr>
                <tr className="bg-[#F7F9FC]">
                  <td className="border border-gray-300 px-4 py-3">30 to 44 days</td>
                  <td className="border border-gray-300 px-4 py-3">25% of tour or service cost</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">19 to 10 days</td>
                  <td className="border border-gray-300 px-4 py-3">70% of undiscounted tour cost</td>
                </tr>
                <tr className="bg-[#F7F9FC]">
                  <td className="border border-gray-300 px-4 py-3">7 days</td>
                  <td className="border border-gray-300 px-4 py-3">85% of tour or service cost</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">48 hours prior or No Show</td>
                  <td className="border border-gray-300 px-4 py-3">No refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm italic">
            If the trip is cancelled by Route to Recall due to unforeseen reasons, you will receive a full refund.
          </p>
          <div>
            <h5 className="font-semibold mb-2">Important Notes:</h5>
            <ul className="list-disc pl-6 space-y-1 text-[#666666]">
              <li>
                For international tours, any tour-specific conditions shared in writing will override this policy.
              </li>
              <li>No refunds for unused or partially availed services.</li>
              <li>
                Written cancellations are accepted on working days only. Requests sent on Sundays are treated as
                received the next working day (Monday).
              </li>
              <li>
                Wildlife safaris are non-refundable once booked. Any date change request will be treated as a
                cancellation.
              </li>
              <li>
                Please refer to our detailed{" "}
                <Link href="/terms" className="text-[#39FF14] hover:underline">
                  Terms and Conditions
                </Link>{" "}
                for complete information.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      question: "Do you offer credit or EMI options?",
      answer:
        "No, we currently do not offer EMI or credit payment options. All payments must be completed as per the booking schedule shared above.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-6 left-6 z-50">
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white/90 backdrop-blur-md hover:bg-white border border-gray-200 shadow-lg rounded-full px-6 py-3 transition-all duration-300 hover:shadow-xl"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="relative h-[40vh] md:h-[50vh] flex items-center justify-center bg-gradient-to-br from-[#A259FF]/10 via-[#00C2FF]/10 to-[#39FF14]/10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-[#1C1C1C]">Frequently Asked </span>
            <span className="text-[#39FF14]">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-[#666666] max-w-2xl mx-auto text-balance">
            Everything you need to know about Route to Recall
          </p>
        </motion.div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 text-center"
        >
          <p className="text-[#666666] text-lg">
            Last Updated: <span className="font-semibold">05-04-2025</span>
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left hover:bg-[#F7F9FC] transition-colors"
              >
                <span className="font-semibold text-lg md:text-xl text-[#1C1C1C] pr-4">{faq.question}</span>
                <ChevronDown
                  className={`h-6 w-6 text-[#A259FF] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 md:px-8 md:pb-8"
                >
                  <div className="pt-2 text-[#666666] leading-relaxed">
                    {faq.detailed ? faq.detailed : <p>{faq.answer}</p>}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Office Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-8 bg-gradient-to-br from-[#F7F9FC] to-white rounded-2xl border border-gray-200"
        >
          <h3 className="text-2xl font-bold mb-4 text-[#A259FF]">Office Address</h3>
          <div className="text-[#666666] leading-relaxed">
            <p className="font-semibold text-[#1C1C1C]">Route to Recall Private Limited</p>
            <p>#50, Route to Recall Office</p>
            <p>Green Valley Orchid, Udayamperoor</p>
            <p>Ernakulam, Kerala 682307</p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[#1C1C1C]">Phone</p>
            <a href="tel:+919036335388" className="text-[#666666] hover:text-[#39FF14] transition-colors">
              +91 9036 335388
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-[#666666] mb-6 text-lg">Still have questions?</p>
          <Link href="/contact">
            <Button className="bg-[#39FF14] hover:bg-[#A259FF] text-[#1C1C1C] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
