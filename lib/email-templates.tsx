// Email templates for Route to Recall forms

export type FormType = 'quick-contact' | 'contact' | 'quote-request'

interface QuickContactData {
  name: string
  email: string
  phone: string
  destination: string
}

interface ContactData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

interface QuoteRequestData {
  name: string
  email: string
  phone: string
  destination: string
  travelers: string
  dates: string
  message: string
}

export type EmailData = QuickContactData | ContactData | QuoteRequestData

// Quick Contact Email Template (Homepage Hero Form)
export function getQuickContactEmailHtml(data: QuickContactData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quick Inquiry from Homepage</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1C1C1C 0%, #2d2d2d 100%); padding: 30px; text-align: center;">
              <h1 style="color: #39FF14; margin: 0; font-size: 24px; font-weight: bold;">Quick Inquiry</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">New inquiry from homepage</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 15px;">
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 16px; font-weight: 600;">${escapeHtml(data.name)}</p>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email Address</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 16px;"><a href="mailto:${escapeHtml(data.email)}" style="color: #A259FF; text-decoration: none;">${escapeHtml(data.email)}</a></p>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 16px;"><a href="tel:${escapeHtml(data.phone)}" style="color: #A259FF; text-decoration: none;">${escapeHtml(data.phone)}</a></p>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td style="padding: 15px; background-color: #39FF14; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #1C1C1C; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Interested Destination</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 18px; font-weight: bold;">${escapeHtml(data.destination)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #666; font-size: 12px;">This inquiry was submitted via the Route to Recall homepage.</p>
              <p style="margin: 10px 0 0 0; color: #999; font-size: 11px;">© ${new Date().getFullYear()} Route to Recall. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

// Full Contact Email Template (Contact Page Form)
export function getContactEmailHtml(data: ContactData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #A259FF 0%, #7c3aed 100%); padding: 30px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: bold;">Contact Form Message</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">New message from contact page</p>
            </td>
          </tr>
          
          <!-- Subject Banner -->
          <tr>
            <td style="background-color: #1C1C1C; padding: 20px 30px;">
              <p style="margin: 0 0 5px 0; color: #39FF14; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
              <p style="margin: 0; color: #ffffff; font-size: 20px; font-weight: bold;">${escapeHtml(data.subject)}</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 16px; font-weight: 600;">${escapeHtml(data.name)}</p>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="48%" style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                          <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                          <p style="margin: 0; font-size: 14px;"><a href="mailto:${escapeHtml(data.email)}" style="color: #A259FF; text-decoration: none;">${escapeHtml(data.email)}</a></p>
                        </td>
                        <td width="4%"></td>
                        <td width="48%" style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                          <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</p>
                          <p style="margin: 0; font-size: 14px;"><a href="tel:${escapeHtml(data.phone || 'Not provided')}" style="color: #A259FF; text-decoration: none;">${escapeHtml(data.phone || 'Not provided')}</a></p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height: 15px;"></td></tr>
                <tr>
                  <td style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #A259FF;">
                    <p style="margin: 0 0 10px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #666; font-size: 12px;">This message was submitted via the Route to Recall contact page.</p>
              <p style="margin: 10px 0 0 0; color: #999; font-size: 11px;">© ${new Date().getFullYear()} Route to Recall. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

// Quote Request Email Template (Destination Pages Modal)
export function getQuoteRequestEmailHtml(data: QuoteRequestData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quote Request</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #1C1C1C 0%, #2d2d2d 100%); padding: 30px; text-align: center;">
              <h1 style="color: #39FF14; margin: 0; font-size: 24px; font-weight: bold;">New Quote Request</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 14px;">Trip planning inquiry</p>
            </td>
          </tr>
          
          <!-- Destination Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #39FF14 0%, #32d912 100%); padding: 25px 30px; text-align: center;">
              <p style="margin: 0 0 5px 0; color: #1C1C1C; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Destination</p>
              <p style="margin: 0; color: #1C1C1C; font-size: 28px; font-weight: bold;">${escapeHtml(data.destination)}</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <!-- Customer Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Customer Name</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 18px; font-weight: 600;">${escapeHtml(data.name)}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Contact Info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="48%" style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                    <p style="margin: 0; font-size: 14px;"><a href="mailto:${escapeHtml(data.email)}" style="color: #A259FF; text-decoration: none;">${escapeHtml(data.email)}</a></p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding: 15px; background-color: #f8f9fa; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</p>
                    <p style="margin: 0; font-size: 14px;"><a href="tel:${escapeHtml(data.phone)}" style="color: #A259FF; text-decoration: none;">${escapeHtml(data.phone)}</a></p>
                  </td>
                </tr>
              </table>
              
              <!-- Trip Details -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 20px;">
                <tr>
                  <td width="48%" style="padding: 15px; background-color: #1C1C1C; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #39FF14; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Travelers</p>
                    <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: bold;">${escapeHtml(data.travelers || 'Not specified')}</p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding: 15px; background-color: #1C1C1C; border-radius: 8px;">
                    <p style="margin: 0 0 5px 0; color: #39FF14; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Preferred Dates</p>
                    <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: bold;">${escapeHtml(data.dates || 'Flexible')}</p>
                  </td>
                </tr>
              </table>
              
              <!-- Message -->
              ${data.message ? `
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #39FF14;">
                    <p style="margin: 0 0 10px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Additional Notes</p>
                    <p style="margin: 0; color: #1C1C1C; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
                  </td>
                </tr>
              </table>
              ` : ''}
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0; color: #666; font-size: 12px;">This quote request was submitted via a Route to Recall destination page.</p>
              <p style="margin: 10px 0 0 0; color: #999; font-size: 11px;">© ${new Date().getFullYear()} Route to Recall. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// Get email subject based on form type
export function getEmailSubject(formType: FormType, data: EmailData): string {
  switch (formType) {
    case 'quick-contact':
      return `Quick Inquiry from Homepage - ${(data as QuickContactData).name}`
    case 'contact':
      return `Contact Form - ${(data as ContactData).subject} - ${(data as ContactData).name}`
    case 'quote-request':
      return `Quote Request for ${(data as QuoteRequestData).destination} - ${(data as QuoteRequestData).name}`
    default:
      return `New Inquiry - Route to Recall`
  }
}

// Get email HTML based on form type
export function getEmailHtml(formType: FormType, data: EmailData): string {
  switch (formType) {
    case 'quick-contact':
      return getQuickContactEmailHtml(data as QuickContactData)
    case 'contact':
      return getContactEmailHtml(data as ContactData)
    case 'quote-request':
      return getQuoteRequestEmailHtml(data as QuoteRequestData)
    default:
      return ''
  }
}
