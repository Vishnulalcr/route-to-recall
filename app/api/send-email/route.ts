import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import {
  type FormType,
  type EmailData,
  getEmailSubject,
  getEmailHtml,
} from "@/lib/email-templates"

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY)

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limit: 3 submissions per hour per IP
const RATE_LIMIT = 3
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour in milliseconds

function getRateLimitInfo(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    // Reset or create new record
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return { allowed: true, remaining: RATE_LIMIT - 1 }
  }

  if (record.count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 }
  }

  record.count++
  return { allowed: true, remaining: RATE_LIMIT - record.count }
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Sanitize input to prevent injection
function sanitizeInput(input: string): string {
  if (typeof input !== "string") return ""
  return input
    .trim()
    .slice(0, 5000) // Limit length
    .replace(/[<>]/g, "") // Remove potential HTML tags
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor?.split(",")[0] || "unknown"

    // Check rate limit
    const { allowed, remaining } = getRateLimitInfo(ip)
    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "X-RateLimit-Remaining": "0",
            "Retry-After": "3600",
          },
        }
      )
    }

    const body = await request.json()
    const { formType, ...formData } = body as { formType: FormType } & EmailData

    // Honeypot check - if website field is filled, it's likely a bot
    if ((formData as any).website) {
      // Silently return success to not alert bots
      return NextResponse.json(
        { success: true, message: "Thank you for your submission!" },
        { status: 200 }
      )
    }

    // Validate form type
    if (!["quick-contact", "contact", "quote-request"].includes(formType)) {
      return NextResponse.json(
        { success: false, error: "Invalid form type" },
        { status: 400 }
      )
    }

    // Validate and sanitize based on form type
    const sanitizedData: EmailData = {} as EmailData

    // Common validations
    if (!formData.name || typeof formData.name !== "string") {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      )
    }
    ;(sanitizedData as any).name = sanitizeInput(formData.name)

    if (!formData.email || !emailRegex.test(formData.email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      )
    }
    ;(sanitizedData as any).email = sanitizeInput(formData.email)

    if (!formData.phone || typeof formData.phone !== "string") {
      return NextResponse.json(
        { success: false, error: "Phone number is required" },
        { status: 400 }
      )
    }
    ;(sanitizedData as any).phone = sanitizeInput(formData.phone)

    // Form-specific validations
    if (formType === "quick-contact") {
      if (!formData.destination) {
        return NextResponse.json(
          { success: false, error: "Destination is required" },
          { status: 400 }
        )
      }
      ;(sanitizedData as any).destination = sanitizeInput(formData.destination)
    } else if (formType === "contact") {
      if (!formData.subject) {
        return NextResponse.json(
          { success: false, error: "Subject is required" },
          { status: 400 }
        )
      }
      if (!formData.message) {
        return NextResponse.json(
          { success: false, error: "Message is required" },
          { status: 400 }
        )
      }
      ;(sanitizedData as any).subject = sanitizeInput(formData.subject)
      ;(sanitizedData as any).message = sanitizeInput(formData.message)
    } else if (formType === "quote-request") {
      if (!formData.destination) {
        return NextResponse.json(
          { success: false, error: "Destination is required" },
          { status: 400 }
        )
      }
      ;(sanitizedData as any).destination = sanitizeInput(formData.destination)
      ;(sanitizedData as any).travelers = sanitizeInput(
        formData.travelers || "Not specified"
      )
      ;(sanitizedData as any).dates = sanitizeInput(
        formData.dates || "Flexible"
      )
      ;(sanitizedData as any).message = sanitizeInput(formData.message || "")
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured")
      return NextResponse.json(
        {
          success: false,
          error: "Email service is not configured. Please contact support.",
        },
        { status: 500 }
      )
    }

    // Get email content
    const subject = getEmailSubject(formType, sanitizedData)
    const html = getEmailHtml(formType, sanitizedData)

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Route to Recall <noreply@routetorecall.com>",
      to: ["enquiries@routetorecall.com"],
      replyTo: (sanitizedData as any).email,
      subject: subject,
      html: html,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 }
      )
    }

    // Success response
    const successMessages: Record<FormType, string> = {
      "quick-contact":
        "Thank you for your inquiry! We'll get back to you within 24 hours.",
      contact:
        "Thank you for your message! Our team will respond shortly.",
      "quote-request":
        "Thank you for your quote request! We'll prepare a customized itinerary for you.",
    }

    return NextResponse.json(
      {
        success: true,
        message: successMessages[formType],
        messageId: data?.id,
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Remaining": remaining.toString(),
        },
      }
    )
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
