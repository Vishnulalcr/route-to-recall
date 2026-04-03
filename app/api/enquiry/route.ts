import { NextRequest, NextResponse } from "next/server"
import { getEmailSubject, getEmailHtml } from "@/lib/email-templates"

async function sendBrevoEmail(params: {
  senderEmail: string
  senderName: string
  toEmail: string
  toName: string
  replyToEmail: string
  replyToName: string
  subject: string
  htmlContent: string
}) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error("BREVO_API_KEY is not configured")

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: params.senderName, email: params.senderEmail },
      to: [{ email: params.toEmail, name: params.toName }],
      replyTo: { email: params.replyToEmail, name: params.replyToName },
      subject: params.subject,
      htmlContent: params.htmlContent,
    }),
  })
  if (!res.ok) {
    const errBody = await res.text()
    throw new Error(`Brevo API error ${res.status}: ${errBody}`)
  }
  return res.json()
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, destination, travelers, dates, message, website } = body

    if (website) {
      return NextResponse.json({ success: true, message: "Thank you for your enquiry!" }, { status: 200 })
    }

    if (!name || !email || !phone || !destination) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, and destination are required" },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const emailSubject = getEmailSubject("quote-request", {
      name, email, phone, destination, travelers, dates, message,
    })
    const html = getEmailHtml("quote-request", {
      name, email, phone, destination, travelers, dates, message,
    })

    const senderEmail = process.env.SENDER_EMAIL || "noreply@routetorecall.com"
    const contactEmail = process.env.CONTACT_EMAIL || "enquiries@routetorecall.com"

    await sendBrevoEmail({
      senderEmail,
      senderName: "Route to Recall",
      toEmail: contactEmail,
      toName: "Route to Recall Enquiries",
      replyToEmail: email,
      replyToName: name,
      subject: emailSubject,
      htmlContent: html,
    })

    return NextResponse.json(
      { success: true, message: "Thank you for your enquiry! We will get back to you within 24 hours." },
      { status: 200 }
    )
  } catch (error: any) {
    console.error("[v0] Error processing enquiry:", error?.message)
    return NextResponse.json({ error: "Failed to process enquiry. Please try again." }, { status: 500 })
  }
}
