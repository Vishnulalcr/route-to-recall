import { NextRequest, NextResponse } from "next/server"
import {
  type FormType,
  type EmailData,
  getEmailSubject,
  getEmailHtml,
} from "@/lib/email-templates"

const rateLimitStore = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5
const RATE_LIMIT_WINDOW = 60 * 60 * 1000

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitStore.get(ip)
  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT - 1 }
  }
  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 }
  }
  record.count++
  return { allowed: true, remaining: RATE_LIMIT - record.count }
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function sanitizeInput(input: string): string {
  if (typeof input !== "string") return ""
  return input.trim().slice(0, 5000).replace(/[<>]/g, "")
}

async function sendBrevoEmail(params: {
  toEmail: string
  toName: string
  replyToEmail: string
  replyToName: string
  subject: string
  htmlContent: string
}) {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) throw new Error("BREVO_API_KEY is not set")

  // Use the contact email as sender if set, otherwise fall back to a safe default.
  // IMPORTANT: The sender email MUST be verified in your Brevo account
  // (Brevo dashboard → Senders & IPs → Senders → Add a sender).
  // If SENDER_EMAIL is not verified, Brevo will reject the request with 400.
  const senderEmail = process.env.SENDER_EMAIL || "enquiries@routetorecall.com"
  const senderName = "Route to Recall"

  const payload = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email: params.toEmail, name: params.toName }],
    replyTo: { email: params.replyToEmail, name: params.replyToName },
    subject: params.subject,
    htmlContent: params.htmlContent,
  }

  console.log("[v0] Brevo payload:", JSON.stringify({ ...payload, htmlContent: "[truncated]" }))

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const responseText = await res.text()
  console.log("[v0] Brevo response status:", res.status)
  console.log("[v0] Brevo response body:", responseText)

  if (!res.ok) {
    throw new Error(`Brevo API error ${res.status}: ${responseText}`)
  }

  return JSON.parse(responseText)
}

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor?.split(",")[0] || "unknown"

    const { allowed, remaining } = getRateLimitInfo(ip)
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429, headers: { "X-RateLimit-Remaining": "0", "Retry-After": "3600" } }
      )
    }

    const body = await request.json()
    console.log("[v0] Received form body:", JSON.stringify({ ...body, email: body.email ? "[redacted]" : undefined }))

    const { formType, ...formData } = body as { formType: FormType } & EmailData

    // Honeypot
    if ((formData as any).website) {
      return NextResponse.json({ success: true, message: "Thank you for your submission!" }, { status: 200 })
    }

    if (!["quick-contact", "contact", "quote-request"].includes(formType)) {
      return NextResponse.json({ success: false, error: "Invalid form type" }, { status: 400 })
    }

    const sanitizedData: EmailData = {} as EmailData

    if (!formData.name || typeof formData.name !== "string") {
      return NextResponse.json({ success: false, error: "Name is required" }, { status: 400 })
    }
    ;(sanitizedData as any).name = sanitizeInput(formData.name)

    if (!formData.email || !emailRegex.test(formData.email)) {
      return NextResponse.json({ success: false, error: "Valid email is required" }, { status: 400 })
    }
    ;(sanitizedData as any).email = sanitizeInput(formData.email)

    ;(sanitizedData as any).phone = sanitizeInput((formData as any).phone || "Not provided")

    if (formType === "quick-contact") {
      if (!(formData as any).destination) {
        return NextResponse.json({ success: false, error: "Destination is required" }, { status: 400 })
      }
      ;(sanitizedData as any).destination = sanitizeInput((formData as any).destination)
    } else if (formType === "contact") {
      if (!(formData as any).subject) {
        return NextResponse.json({ success: false, error: "Subject is required" }, { status: 400 })
      }
      if (!(formData as any).message) {
        return NextResponse.json({ success: false, error: "Message is required" }, { status: 400 })
      }
      ;(sanitizedData as any).subject = sanitizeInput((formData as any).subject)
      ;(sanitizedData as any).message = sanitizeInput((formData as any).message)
    } else if (formType === "quote-request") {
      if (!(formData as any).destination) {
        return NextResponse.json({ success: false, error: "Destination is required" }, { status: 400 })
      }
      ;(sanitizedData as any).destination = sanitizeInput((formData as any).destination)
      ;(sanitizedData as any).travelers = sanitizeInput((formData as any).travelers || "Not specified")
      ;(sanitizedData as any).dates = sanitizeInput((formData as any).dates || "Flexible")
      ;(sanitizedData as any).message = sanitizeInput((formData as any).message || "")
    }

    const subject = getEmailSubject(formType, sanitizedData)
    const html = getEmailHtml(formType, sanitizedData)
    const contactEmail = process.env.CONTACT_EMAIL || "enquiries@routetorecall.com"

    await sendBrevoEmail({
      toEmail: contactEmail,
      toName: "Route to Recall Enquiries",
      replyToEmail: (sanitizedData as any).email,
      replyToName: (sanitizedData as any).name,
      subject,
      htmlContent: html,
    })

    const successMessages: Record<FormType, string> = {
      "quick-contact": "Thank you for your inquiry! We'll get back to you within 24 hours.",
      contact: "Thank you for your message! Our team will respond shortly.",
      "quote-request": "Thank you for your quote request! We'll prepare a customized itinerary for you.",
    }

    return NextResponse.json(
      { success: true, message: successMessages[formType] },
      { status: 200, headers: { "X-RateLimit-Remaining": remaining.toString() } }
    )
  } catch (error: any) {
    console.error("[v0] Email API error:", error?.message)
    return NextResponse.json(
      { success: false, error: "Failed to send. Please try again or contact us directly at enquiries@routetorecall.com" },
      { status: 500 }
    )
  }
}
