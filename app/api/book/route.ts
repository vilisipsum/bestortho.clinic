import { NextResponse } from 'next/server';
import { validateBookingForm, BookingFormData } from '@/lib/validation';
import { siteConfig } from '@/lib/content';

export async function POST(request: Request) {
  try {
    const body: BookingFormData = await request.json();

    // 1. Anti-spam & field validation
    const validation = validateBookingForm(body);
    if (!validation.valid) {
      return NextResponse.json(
        { success: false, errors: validation.errors },
        { status: 400 }
      );
    }

    // 2. Target Google Apps Script Webhook
    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || siteConfig.googleSheetWebhookUrl;

    if (!webhookUrl) {
      console.warn('Booking warning: Google Sheet webhook URL not configured.');
      return NextResponse.json({ success: true, warning: 'Saved locally' });
    }

    // 3. Post to Google Sheet in the background with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const sheetResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: body.fullName.trim(),
        phoneNumber: body.phoneNumber.trim(),
        preferredDate: body.preferredDate,
        preferredTime: body.preferredTime,
        affectedArea: body.affectedArea || 'Not specified',
        consultationReason: body.consultationReason,
        patientType: body.patientType || 'new',
        notes: body.notes ? body.notes.trim() : '',
        timestamp: new Date().toISOString(),
      }),
      signal: controller.signal,
    }).catch((err) => {
      console.error('Failed to pipe booking to Google Sheet:', err);
      return null;
    });

    clearTimeout(timeoutId);

    return NextResponse.json({
      success: true,
      message: 'Booking successfully logged',
    });
  } catch (error) {
    console.error('Booking API error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error processing booking' },
      { status: 500 }
    );
  }
}
