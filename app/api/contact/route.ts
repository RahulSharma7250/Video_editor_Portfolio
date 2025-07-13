import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, message } = body

    // Validate required fields
    if (!name || !email || !message || !projectType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
      New Contact Form Submission - Cinematic Visuals
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || "Not provided"}
      Project Type: ${projectType}
      
      Message:
      ${message}
      
      ---
      Sent from Cinematic Visuals Website
      Time: ${new Date().toLocaleString()}
    `

    // For demonstration, we'll use a simple email service
    // In production, you would integrate with services like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - AWS SES
    // - Resend

    // Simulate email sending (replace with actual email service)
    console.log("Email would be sent to: connecttogcproduction@gmail.com")
    console.log("Email content:", emailContent)

    // Here you would implement actual email sending
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'rahulsharma18535@gmail.com',
      from: 'noreply@cinematicvisuals.com',
      subject: `New Contact Form Submission from ${name}`,
      text: emailContent,
      replyTo: email
    })
    */

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
