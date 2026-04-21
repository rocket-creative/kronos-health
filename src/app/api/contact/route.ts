import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";

const SOURCE_LABELS: Record<string, string> = {
  homepage: "Homepage (www.kronosgroup.health)",
  contact_page: "Contact Page (www.kronosgroup.health/contact)",
  about: "About Page (www.kronosgroup.health/about)",
  franchise: "Cognitive Franchise Program",
  digital_health: "Digital Health Tools",
  neuropsychology: "Clinically Integrated Neuropsychology",
  demo_request: "Demo Request Form",
};

function formatSource(source?: string): string {
  if (!source) return "www.kronosgroup.health";
  return SOURCE_LABELS[source] ?? source;
}

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

    const formType = product ? "Demo Request" : "Contact Form";
    const sourceLabel = formatSource(source);

    const subject = product
      ? `[Kronos Health] Demo Request: ${product} — ${name}`
      : `[Kronos Health] Contact Form — ${sourceLabel} — ${name}`;

    const emailBody = `
================================================================================
KRONOS HEALTH — ${formType.toUpperCase()}
================================================================================

SITE:       www.kronosgroup.health
FORM:       ${formType}
SOURCE:     ${sourceLabel}
${product ? `SERVICE:    ${product}\n` : ""}
SUBMITTED:  ${new Date().toLocaleString("en-US", { timeZone: "America/New_York", dateStyle: "full", timeStyle: "short" })} ET

--------------------------------------------------------------------------------
CONTACT DETAILS
--------------------------------------------------------------------------------

Name:         ${name}
Email:        ${email}
${phone ? `Phone:        ${phone}\n` : ""}${organization ? `Organization: ${organization}\n` : ""}
--------------------------------------------------------------------------------
MESSAGE
--------------------------------------------------------------------------------

${message}

================================================================================
    `.trim();

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Kronos Health <noreply@kronoshealth.co>",
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
