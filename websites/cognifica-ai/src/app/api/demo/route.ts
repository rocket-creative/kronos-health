import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase'

const DemoRequestSchema = z.object({
  name: z.string().min(1).max(100),
  phone: z.string().max(20).optional(),
  email: z.string().email(),
  organization: z.string().min(1).max(200),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const result = DemoRequestSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }

    const supabase = createServerSupabaseClient()
    const { error: dbError } = await supabase.from('demo_requests').insert({
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      organization: result.data.organization,
    })

    if (dbError) {
      throw new Error(dbError.message)
    }

    // TODO: send notification email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@cognificaai.com',
    //   to: process.env.NOTIFICATION_EMAIL!,
    //   subject: `CognificaAI Demo Request — ${result.data.organization}`,
    //   text: `Name: ${result.data.name}\nEmail: ${result.data.email}\nOrg: ${result.data.organization}`,
    // })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
