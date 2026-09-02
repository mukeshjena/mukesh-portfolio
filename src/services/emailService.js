/**
 * Service to handle sending contact emails via the custom Odina Email API.
 */

const EMAIL_API_URL = 'https://odina.mukeshjena.com/api/email/send';
const RECIPIENT_EMAIL = 'mukeshjena706@gmail.com';
const SENDER_NAME = 'Mukesh Jena Portfolio';
const SENDER_EMAIL = 'info@mukeshjena.com';

/**
 * Safely escape characters to prevent HTML injection.
 */
const escapeHtml = (text) => {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Generate a responsive, modern HTML email template matching the portfolio's color science:
 * - Primary Palette: #0284c7 (primary-600) to #2563eb (blue-600) gradient
 * - Accent: #0ea5e9 (primary-500)
 * - Light Background: #f8fafc (slate-50)
 * - Elevated Card: #ffffff with subtle slate border and soft shadow
 * - Typography: Inter / system-ui clean modern sans-serif
 */
export const generateContactEmailHtml = ({ name, email, message }) => {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata'
  }).format(new Date());

  const currentYear = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Portfolio Message</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;-webkit-font-smoothing:antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f1f5f9;padding:40px 15px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04);border:1px solid #e2e8f0;">
          
          <!-- Header Banner with Gradient -->
          <tr>
            <td style="background:linear-gradient(135deg, #0284c7 0%, #2563eb 100%);padding:36px 32px;text-align:left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <!-- Pill Tag -->
                    <span style="display:inline-block;padding:4px 12px;background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3);border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:#ffffff;margin-bottom:12px;">
                      ✦ Portfolio Notification
                    </span>
                    <h1 style="margin:8px 0 4px 0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.025em;line-height:1.2;">
                      New Message Received
                    </h1>
                    <p style="margin:0;font-size:14px;color:rgba(255,255,255,0.85);">
                      Someone reached out to you through your portfolio website.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding:32px;">
              <!-- Sender Overview Card -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td width="30%" style="font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:#64748b;padding:6px 0;vertical-align:top;">
                          Sender Name
                        </td>
                        <td style="font-size:15px;font-weight:600;color:#0f172a;padding:6px 0;">
                          ${safeName}
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" style="font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:#64748b;padding:6px 0;vertical-align:top;">
                          Sender Email
                        </td>
                        <td style="font-size:15px;color:#0284c7;font-weight:500;padding:6px 0;">
                          <a href="mailto:${safeEmail}" style="color:#0284c7;text-decoration:none;">
                            ${safeEmail}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="30%" style="font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;color:#64748b;padding:6px 0;vertical-align:top;">
                          Timestamp
                        </td>
                        <td style="font-size:14px;color:#475569;padding:6px 0;">
                          ${formattedDate} (IST)
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Section -->
              <div style="margin-bottom:12px;">
                <span style="font-size:12px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:#64748b;">
                  Message Content
                </span>
              </div>

              <!-- Styled Message Box -->
              <div style="background-color:#f0f9ff;border:1px solid #bae6fd;border-left:4px solid #0ea5e9;border-radius:10px;padding:20px;margin-bottom:28px;">
                <p style="margin:0;font-size:15px;line-height:1.7;color:#0c4a6e;white-space:pre-wrap;word-break:break-word;">${safeMessage}</p>
              </div>

              <!-- Quick CTA Button -->
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom:12px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${safeEmail}?subject=Re:%20Portfolio%20Inquiry%20-%20Mukesh%20Jena" 
                       style="display:inline-block;background:linear-gradient(135deg, #0284c7 0%, #2563eb 100%);color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:14px 32px;border-radius:10px;box-shadow:0 4px 14px rgba(2,132,199,0.35);letter-spacing:0.01em;">
                      Reply directly to ${safeName} &rarr;
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f8fafc;border-top:1px solid #e2e8f0;padding:24px 32px;text-align:center;">
              <p style="margin:0 0 6px 0;font-size:13px;font-weight:600;color:#0f172a;">
                Mukesh Jena • Dot Net & Full Stack Developer
              </p>
              <p style="margin:0 0 10px 0;font-size:12px;color:#64748b;">
                Sent automatically via contact form on <a href="https://mukeshjena.com" target="_blank" style="color:#0284c7;text-decoration:none;font-weight:500;">mukeshjena.com</a>
              </p>
              <p style="margin:0;font-size:11px;color:#94a3b8;">
                &copy; ${currentYear} Mukesh Jena. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

/**
 * Generate a clean plain-text fallback version.
 */
export const generateContactEmailText = ({ name, email, message }) => {
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata'
  }).format(new Date());

  return `NEW PORTFOLIO MESSAGE
==================================================

From:      ${name}
Email:     ${email}
Received:  ${formattedDate} (IST)

MESSAGE CONTENT:
--------------------------------------------------
${message}
--------------------------------------------------

Reply directly to: ${email}
Sent from: Mukesh Jena Portfolio (mukeshjena.com)
`;
};

/**
 * Sends contact form inquiry via the email API.
 * 
 * @param {Object} data
 * @param {string} data.name - Sender's name
 * @param {string} data.email - Sender's email
 * @param {string} data.message - Sender's message
 * @returns {Promise<{success: boolean, data?: any, error?: string}>}
 */
export const sendContactEmail = async ({ name, email, message }) => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();

  const html = generateContactEmailHtml({
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage
  });

  const text = generateContactEmailText({
    name: trimmedName,
    email: trimmedEmail,
    message: trimmedMessage
  });

  const payload = {
    to: [RECIPIENT_EMAIL],
    subject: `New Portfolio Message from ${trimmedName}`,
    html,
    text,
    customConfig: {
      fromName: SENDER_NAME,
      fromEmail: SENDER_EMAIL,
      replyTo: trimmedEmail
    }
  };

  const response = await fetch(EMAIL_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Server returned ${response.status}: ${errorText || response.statusText}`);
  }

  const result = await response.json();
  if (result.success === false) {
    throw new Error(result.error || result.message || 'Failed to dispatch email');
  }

  return result;
};
