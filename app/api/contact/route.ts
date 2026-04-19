import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "amoghshukla1616@gmail.com",
      replyTo: email,
      subject: `New message from ${name} — Portfolio`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: monospace; background:#0a0a0a; color:#e8e6e0; padding:32px; max-width:560px;">
          <p style="color:#c8b97a; font-size:11px; letter-spacing:0.12em; margin-bottom:24px;">NEW MESSAGE — PORTFOLIO</p>
          <table style="width:100%; font-size:13px; margin-bottom:24px;">
            <tr><td style="color:#6b6960; padding:6px 0; width:80px;">Name</td><td style="color:#e8e6e0;">${name}</td></tr>
            <tr><td style="color:#6b6960; padding:6px 0;">Email</td><td style="color:#c8b97a;">${email}</td></tr>
          </table>
          <div style="border-top:1px solid #1e1e1c; padding-top:20px; color:#9e9b94; line-height:1.8; font-size:13px; white-space:pre-wrap;">${message}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}