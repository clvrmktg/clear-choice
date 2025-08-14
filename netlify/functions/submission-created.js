import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// --- Utility: Get Site Context ---
function getSiteContext(event) {
  const domain = event.headers?.host?.replace(/^www\./, "") || "example.com";

  const siteName = process.env.APP_SITE_NAME || domain.split(".")[0];
  const siteEmail = process.env.APP_SITE_EMAIL || `noreply@${domain}`;
  const adminEmail = process.env.APP_ADMIN_EMAIL || `info@${domain}`;
  const ccEmails =
  process.env.APP_CC_EMAILS && process.env.APP_USE_CC !== "false"
    ? process.env.APP_CC_EMAILS.split(",").map(e => e.trim()).filter(Boolean)
    : [];

  return { domain, siteName, siteEmail, adminEmail, ccEmails };
}

// --- Utility: Validate Email ---
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// --- Inquiry Map ---
const inquiryMap = {
  "": "No selection",
  "general-inquiry": "General Inquiry",
  "hurricane-windows": "Hurricane Windows",
  "impact-doors": "Impact Doors",
  "custom-glass-mirrors": "Custom Glass & Mirrors",
  "shower-enclosures": "Shower Enclosures",
  "storefronts": "Storefronts"
};

// --- Templates ---
function adminEmailTemplate({ siteName, name, email, inquiryLabel, message }) {
  return {
    subject: `New Contact Form Submission from ${siteName}`,
    text: `Name: ${name}\nEmail: ${email}\nInquiry Type: ${inquiryLabel}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryLabel}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      </div>
    `,
  };
}


function confirmationEmailTemplate({ siteName, name, message }) {
  return {
    subject: `Thanks for contacting ${siteName}`,
    text: `Hi ${name},

Thanks for reaching out to ${siteName}. We've received your message and will get back to you shortly.

Here's what you sent:
${message}

If you have any urgent questions, feel free to reply to this email.

Best,
The ${siteName} Team`,
    html: `
      <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
        <h2>Thanks for contacting ${siteName}</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will be in touch soon.</p>
        <h3>Your message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <p>If you have any urgent questions, just reply to this email.</p>
        <p>— The ${siteName} Team</p>
      </div>
    `,
  };
}


// --- Main Handler ---
export const handler = async (event) => {
  try {
    const { payload } = JSON.parse(event.body || "{}");
    if (!payload?.data) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid form submission" }) };
    }

    const { name, email, message, inquiry } = payload.data;
    if (!isValidEmail(email)) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid email address" }) };
    }

    const inquiryLabel = inquiryMap[inquiry] || inquiry;

    const { siteName, siteEmail, adminEmail, ccEmails } = getSiteContext(event);

    // --- Admin Email ---
    const adminTemplate = adminEmailTemplate({ siteName, name, email, inquiryLabel, message });
    await resend.emails.send({
      from: `${siteName} <${siteEmail}>`,
      to: adminEmail,
      cc: ccEmails.length ? ccEmails : undefined,
      replyTo: email,
      subject: adminTemplate.subject,
      text: adminTemplate.text,
      html: adminTemplate.html,
    });

    // --- Confirmation Email ---
    if (process.env.APP_SEND_CONFIRMATION !== "false") {
      const confirmTemplate = confirmationEmailTemplate({
        siteName,
        name,
        message: `Inquiry Type: ${inquiryLabel}\n\n${message}`
      });

      await resend.emails.send({
        from: `${siteName} <${siteEmail}>`,
        to: email,
        replyTo: adminEmail,
        subject: confirmTemplate.subject,
        text: confirmTemplate.text,
        html: confirmTemplate.html,
      });
    }

    return { statusCode: 200, body: JSON.stringify({ success: true }) };

  } catch (err) {
    console.error("Email failed:", err);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};

