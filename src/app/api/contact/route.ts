import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, organization, message, product, source } = result.data;

    const subject = product
      ? `Demo Request: ${product} from ${name}`
      : `Contact Form: ${name}`;

    const emailBody = `
New ${product ? "Demo Request" : "Contact Form Submission"}

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${organization ? `Organization: ${organization}` : ""}
${product ? `Product: ${product}` : ""}
${source ? `Source: ${source}` : ""}

Message:
${message}

---
Submitted at: ${new Date().toISOString()}
    `.trim();

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: "Kronos Group <noreply@kronoshealth.co>",
        to: ["info@kronoshealth.co"],
        replyTo: email,
        subject,
        text: emailBody,
      });
    } else {
      console.log("Email would be sent (no RESEND_API_KEY configured):", { subject, body: emailBody });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
