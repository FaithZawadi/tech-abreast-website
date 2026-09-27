import { NextResponse } from 'next/server'

// Receives contact-form submissions. If CONTACT_WEBHOOK_URL is set
// (e.g. a Zapier/Make/Formspree/Slack webhook), the enquiry is forwarded there;
// otherwise it is logged on the server.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const str = (k: string, max: number) => String(body[k] ?? '').trim().slice(0, max)
  const enquiry = {
    name: str('name', 120),
    organisation: str('organisation', 160),
    email: str('email', 160),
    phone: str('phone', 40),
    topic: str('topic', 80),
    message: str('message', 4000),
    receivedAt: new Date().toISOString(),
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (str('website', 200)) return NextResponse.json({ ok: true })

  if (!enquiry.name || !enquiry.message) {
    return NextResponse.json({ error: 'Please provide your name and a message.' }, { status: 400 })
  }
  if (!EMAIL.test(enquiry.email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  const hook = process.env.CONTACT_WEBHOOK_URL
  if (hook) {
    const res = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiry),
    }).catch(() => null)
    if (!res || !res.ok) {
      return NextResponse.json(
        { error: 'We could not send your message right now. Please email info@tech-abreast.com.' },
        { status: 502 },
      )
    }
  } else {
    console.log('[contact] new enquiry', enquiry)
  }

  return NextResponse.json({ ok: true })
}
