import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);
    // 1. Send to site owner/admin
    await resend.emails.send({
      from: 'Website Contact <no-reply@abacoaggregate.net>',
      to: 'info@abacoaggregate.net', // Replace with your client’s email
      cc: ['kino.simmons73@gmail.com', 'madonnasimmons@hotmail.com', 'abacoaggregate@gmail.com'], 
      replyTo: email,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `
    });

    // 2. Send confirmation to user
    await resend.emails.send({
      from: 'Abaco Aggregate <no-reply@abacoaggregate.net>',
      to: email,
      replyTo: 'info@abacoaggregate.net', // ✅ So they can reply with questions
      subject: 'Thanks for contacting Abaco Aggregate',
      text: `Hi ${name},
      
      Thanks for reaching out to Abaco Aggregate. We've received your message and will get back to you shortly.
      
      Here’s what you sent:
      ${message}
      
      If you have any urgent questions, feel free to reply to this email.
      
      Best,
      The Abaco Aggregate Team`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>Thanks for contacting Abaco Aggregate</h2>
          <p>Hi ${name},</p>
          <p>We’ve received your message and will be in touch soon.</p>
          <h3>Your message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <p>If you have any urgent questions, just reply to this email.</p>
          <p>— The Abaco Aggregate Team</p>
        </div>
      `
    });
    

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
