import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { name, email, phone, destination, travelers, dates, message, website } = body

    // Honeypot check - if website field is filled, it's likely a bot
    if (website) {
      // Silently return success to not alert bots
      return NextResponse.json(
        { success: true, message: "Thank you for your enquiry!" },
        { status: 200 }
      )
    }

    // Validate required fields
    if (!name || !email || !phone || !destination) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, phone, and destination are required" },
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

    // Here you would typically:
    // 1. Send an email notification to the business
    // 2. Store the enquiry in a database
    // 3. Send a confirmation email to the customer
    
    // For now, we'll log the enquiry and return success
    console.log("New Enquiry Received:", {
      name,
      email,
      phone,
      destination,
      travelers: travelers || "Not specified",
      dates: dates || "Not specified",
      message: message || "No additional message",
      timestamp: new Date().toISOString(),
    })

    // You can integrate with email services like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - Nodemailer with SMTP
    // - Or store in a database like Supabase/Neon

    return NextResponse.json(
      { 
        success: true, 
        message: "Thank you for your enquiry! We will get back to you within 24 hours." 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing enquiry:", error)
    return NextResponse.json(
      { error: "Failed to process enquiry. Please try again." },
      { status: 500 }
    )
  }
}
