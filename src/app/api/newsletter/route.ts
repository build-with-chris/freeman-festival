import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailSubject = 'Newsletter-Anmeldung Freeman Festival';
    const emailBody = `Neue Newsletter-Anmeldung:

E-Mail: ${email}
Datum: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}

Diese E-Mail wurde automatisch generiert.`;

    // Send email using fetch to a mail service
    // For production, integrate with a service like Resend, SendGrid, or Nodemailer
    // For now, we'll use a simple approach that can be extended
    
    // Option 1: Use a webhook service or email API
    // Option 2: Use server-side email library (requires SMTP config)
    
    // For immediate functionality, we'll log and prepare for email service integration
    console.log('Newsletter subscription received:', email);
    console.log('Email should be sent to: info@pepeshows.de');
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);

    // Send email using a simple approach
    // Try to send email via fetch to a mail service
    // If RESEND_API_KEY is set, use Resend, otherwise log for manual processing
    
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    
    if (RESEND_API_KEY) {
      try {
        const response = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'Freeman Festival <noreply@freemanfestival.de>',
            to: 'info@pepeshows.de',
            subject: emailSubject,
            text: emailBody,
          }),
        });
        
        if (!response.ok) {
          const errorData = await response.text();
          console.error('Resend API error:', errorData);
          // Continue to log fallback
        } else {
          const data = await response.json();
          console.log('Email sent successfully via Resend:', data);
          return NextResponse.json(
            { success: true, message: 'Newsletter subscription successful' },
            { status: 200 }
          );
        }
      } catch (error) {
        console.error('Error sending email via Resend:', error);
        // Continue to log fallback
      }
    }
    
    // Fallback: Log email data (for manual processing or integration with other services)
    // In production, you should integrate with an email service
    return NextResponse.json(
      { success: true, message: 'Newsletter subscription successful' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Failed to process newsletter subscription' },
      { status: 500 }
    );
  }
}

