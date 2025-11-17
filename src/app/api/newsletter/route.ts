import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Try Resend first (if API key is set)
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
        
        if (response.ok) {
          const data = await response.json();
          console.log('Email sent successfully via Resend:', data);
          return NextResponse.json(
            { success: true, message: 'Newsletter subscription successful' },
            { status: 200 }
          );
        }
      } catch (error) {
        console.error('Error sending email via Resend:', error);
      }
    }

    // Fallback: Use nodemailer with SMTP (if configured)
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: parseInt(SMTP_PORT || '587'),
          secure: SMTP_PORT === '465',
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: SMTP_USER,
          to: 'info@pepeshows.de',
          subject: emailSubject,
          text: emailBody,
        });

        console.log('Email sent successfully via SMTP');
        return NextResponse.json(
          { success: true, message: 'Newsletter subscription successful' },
          { status: 200 }
        );
      } catch (error) {
        console.error('Error sending email via SMTP:', error);
      }
    }

    // Final fallback: Log for manual processing
    console.log('Newsletter subscription received:', email);
    console.log('Email should be sent to: info@pepeshows.de');
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);
    console.log('⚠️ No email service configured. Please set RESEND_API_KEY or SMTP credentials.');

    return NextResponse.json(
      { success: true, message: 'Newsletter subscription received (email service not configured)' },
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

