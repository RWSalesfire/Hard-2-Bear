import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// "Pull up a stool" callback requests. CONTACT_TO / CONTACT_FROM set the
// addresses; the defaults assume the hardtobear.uk domain is set up in Resend.
const TO = process.env.CONTACT_TO || 'hello@hardtobear.uk';
const FROM = process.env.CONTACT_FROM || 'Hard To Bear <noreply@hardtobear.uk>';

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = String(body.name || '').trim().slice(0, 100);
    const phone = String(body.phone || '').trim().slice(0, 40);
    const trade = String(body.trade || '').trim().slice(0, 60);

    if (!name || !phone || !trade) {
      return NextResponse.json({ error: 'Add your name, trade and phone number.' }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: `That didn’t send. Email ${TO} instead.` },
        { status: 503 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: `Stool pulled up: ${name} (${trade})`,
      html: `
        <h2>Someone's pulled up a stool</h2>
        <p><strong>Name:</strong> ${escape(name)}</p>
        <p><strong>Trade:</strong> ${escape(trade)}</p>
        <p><strong>Phone:</strong> ${escape(phone)}</p>
        <p><small>Sent from the Hard To Bear website</small></p>
      `,
      text: `Someone's pulled up a stool\n\nName: ${name}\nTrade: ${trade}\nPhone: ${phone}\n\nSent from the Hard To Bear website`,
    });

    return NextResponse.json({ message: 'Sent' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: `That didn’t send. Email ${TO} instead.` }, { status: 500 });
  }
}
