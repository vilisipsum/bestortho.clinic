/**
 * Validation & Safety Utilities
 */

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  consultationReason: string;
  affectedArea?: string;
  patientType?: 'new' | 'existing';
  notes?: string;
  honeypot?: string;
}

export function validateBookingForm(data: BookingFormData): { valid: boolean; errors: Partial<Record<keyof BookingFormData, string>> } {
  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  // Honeypot anti-spam check: bots fill hidden fields
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.fullName = "Invalid submission detected.";
    return { valid: false, errors };
  }

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  // Indian phone number check (10 digits, optional country code)
  const phoneClean = data.phoneNumber.replace(/[\s\-\(\)\+]/g, '');
  if (!phoneClean || phoneClean.length < 10 || !/^\d+$/.test(phoneClean)) {
    errors.phoneNumber = "Please enter a valid 10-digit mobile number.";
  }

  // Email validation (optional field, but if entered must be valid format)
  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (!data.preferredDate) {
    errors.preferredDate = "Please select a preferred consultation date.";
  }

  if (!data.preferredTime) {
    errors.preferredTime = "Please select your preferred time slot.";
  }

  if (!data.consultationReason) {
    errors.consultationReason = "Please indicate the general reason for consultation.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
