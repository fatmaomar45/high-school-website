import nodemailer from "nodemailer";

const rateLimitMap = new Map();
function isRateLimited(key) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const max = 5;
  const entry = rateLimitMap.get(key) || { count: 0, start: now };
  if (now - entry.start > windowMs) {
    entry.count = 0;
    entry.start = now;
  }
  entry.count += 1;
  rateLimitMap.set(key, entry);
  return entry.count > max;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request) {
  try {
    const { name, email, subject, message, website } = await request.json();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (website) {
      return Response.json({ error: "Spam detected" }, { status: 400 });
    }

    if (
      String(name).length > 100 ||
      String(email).length > 254 ||
      String(subject).length > 200 ||
      String(message).length > 5000
    ) {
      return Response.json(
        { error: "Input is too long" },
        { status: 400 }
      );
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    if (isRateLimited(`contact:${ip}`)) {
      return Response.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const emailUser = process.env.EMAIL_USER?.trim();
    const emailPass = process.env.EMAIL_PASS?.trim();

    if (!emailUser || !emailPass) {
      console.error("Contact form error: email credentials are not configured");
      return Response.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const mailOptions = {
      from: emailUser,
      to: "fatmaomarmoh@gmail.com",
      subject: `Contact Form: ${String(subject).replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
