import { NextRequest, NextResponse } from "next/server"
import * as Brevo from "@getbrevo/brevo"
import { getEmailSubject, getEmailHtml } from "@/lib/email-templates"

// Initialize Brevo API client
let apiInstance: Brevo.TransactionalEmailsApi | null = null

function getBrevoClient(): Brevo.TransactionalEmailsApi {
  if (!apiInstance) {
    const apiKey = process.env.BREVO_API_KEY
    if (!apiKey) {
      throw new Error("BREVO_API_KEY is not configured")
    }
    apiInstance = new Brevo.TransactionalEmailsApi()
    apiInstance.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, apiKey)
  }
  return apiInstance
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, phone, subject, message, website } = body

    // Honeypot check - if website field is filled, it's likely a bot
    if (website) {
      // Silently return success to not alert bots
      return NextResponse.json(
        { success: true, message: "Thank you for your message!" },
        { status: 200 }
      )
    }

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, subject, and message are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Log the contact message
    console.log("[v0] New Contact Message Received:", {
      name,
      email,
      phone: phone || "Not provided",
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Get email content
    const emailSubject = getEmailSubject("contact", { name, email, phone, subject, message })
    const html = getEmailHtml("contact", { name, email, phone, subject, message })

    // Get Brevo client
    let brevoClient: Brevo.TransactionalEmailsApi
    try {
      brevoClient = getBrevoClient()
    } catch (err) {
      console.error("[v0] BREVO_API_KEY is not configured:", err)
      return NextResponse.json(
        { error: "Email service is not configured. Please contact support." },
        { status: 500 }
      )
    }

    // Prepare email data for Brevo
    const senderEmail = process.env.SENDER_EMAIL || "noreply@routetorecall.com"
    const contactEmail = process.env.CONTACT_EMAIL || "enquiries@routetorecall.com"

    const sendSmtpEmail: Brevo.SendSmtpEmail = {
      sender: {
        name: "Route to Recall",
        email: senderEmail,
      },
      to: [
        {
          email: contactEmail,
          name: "Route to Recall Enquiries",
        },
      ],
      replyTo: {
        email: email,
        name: name,
      },
      subject: emailSubject,
      htmlContent: html,
    }

    console.log("[v0] Sending contact email via Brevo...")

    // Send email via Brevo
    try {
      const result = await brevoClient.sendTransacEmail(sendSmtpEmail)
      console.log("[v0] Contact email sent successfully:", result)

      return NextResponse.json(
        { 
          success: true, 
          message: "Thank you for your message! We will get back to you within 24 hours." 
        },
        { status: 200 }
      )
    } catch (emailError: any) {
      console.error("[v0] Brevo API error:", emailError?.response?.body || emailError?.message)
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("[v0] Error processing contact message:", error)
    return NextResponse.json(
      { error: "Failed to process your message. Please try again." },
      { status: 500 }
    )
  }
}
