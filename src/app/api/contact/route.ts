import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, issueType, date, timeSlot, notes } = body;

    if (!name || !phone || !email || !issueType) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    await sendContactEmail({
      name,
      phone,
      email,
      subject: issueType,
      message: `\n  Data: ${date || ''}\n  Facia Oraria: ${timeSlot || ''}\n  Note: ${notes || ''}`,
    });

    return NextResponse.json({ message: 'Form submitted successfully.' }, { status: 200 });
  } catch (err) {
    console.error('Error processing contact form:', err);
    return NextResponse.json({ error: 'Server error.' }, { status: 500 });
  }
}
