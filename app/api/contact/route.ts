import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, teamSize, problem } = body;

    // Validate required fields
    if (!name || !email || !company || !teamSize || !problem) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact russell@hardtobear.uk directly.' },
        { status: 503 }
      );
    }

    // Initialize Resend with API key from environment variable
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Hard To Bear Website <noreply@hardtobear.uk>',
      to: ['russell@hardtobear.uk'],
      subject: `New Sales Reality Check Request from ${name} - ${company}`,
      html: `
        <h2>New Sales Reality Check Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Sales Team Size:</strong> ${teamSize}</p>
        <p><strong>What's Broken:</strong></p>
        <p>${problem.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Submitted from hardtobear.uk contact form</small></p>
      `,
      text: `
New Sales Reality Check Request

Name: ${name}
Email: ${email}
Company: ${company}
Sales Team Size: ${teamSize}

What's Broken:
${problem}

---
Submitted from hardtobear.uk contact form
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
