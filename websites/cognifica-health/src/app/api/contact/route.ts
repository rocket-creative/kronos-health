import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  address: z.string().max(200).optional(),
  city_state_zip: z.string().max(100).optional(),
  primary_physician: z.string().max(100).optional(),
  symptoms: z.array(z.string()).optional(),
  location_preference: z
    .enum(['west-harrison', 'aquebogue', 'stamford'])
    .optional(),
  concern: z.string().max(500).optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = ContactSchema.safeParse(body)

    if (!data.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    // HIPAA: do NOT log any patient data
    // HIPAA: do NOT store in any database — forward via email only
    // HIPAA: email service must have a signed BAA (use Resend Business plan)
    console.log('Cognifica appointment request received at', new Date().toISOString())

    // TODO: uncomment after configuring Resend with signed BAA
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@cognifica.health',
    //   to: process.env.CONTACT_EMAIL!,
    //   subject: 'New Appointment Request — Cognifica Health',
    //   text: `Name: ${data.data.name}\nPhone: ${data.data.phone}\nLocation: ${data.data.location_preference}`,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
