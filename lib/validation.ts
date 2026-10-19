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

export function validateBookingForm(data?: BookingFormData | null): { valid: boolean; errors: Partial<Record<keyof BookingFormData, string>> } {
  if (!data || typeof data !== 'object') {
    return {
      valid: false,
      errors: { fullName: "Invalid submission data." },
    };
  }

  const errors: Partial<Record<keyof BookingFormData, string>> = {};

  // Honeypot anti-spam check: bots fill hidden fields
  if (data.honeypot !== undefined && data.honeypot !== null && String(data.honeypot).length > 0) {
    errors.fullName = "Invalid submission detected.";
    return { valid: false, errors };
  }

  if (!data.fullName || typeof data.fullName !== 'string' || data.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  // Indian phone number check (10 digits, optional 0 or 91 country code prefix)
  const phoneRaw = typeof data.phoneNumber === 'string'
    ? data.phoneNumber
    : (typeof data.phoneNumber === 'number' ? String(data.phoneNumber) : '');

  if (!phoneRaw) {
    errors.phoneNumber = "Please enter a valid 10-digit mobile number.";
  } else {
    const phoneClean = phoneRaw.replace(/[\s\-\(\)\+]/g, '');
    if (!/^(?:0|91)?[6-9]\d{9}$/.test(phoneClean)) {
      errors.phoneNumber = "Please enter a valid 10-digit mobile number.";
    }
  }

  // Email validation (optional field, but if entered must be valid format)
  if (data.email && typeof data.email === 'string' && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }
  }

  if (
    !data.preferredDate ||
    typeof data.preferredDate !== 'string' ||
    !/^\d{4}-\d{2}-\d{2}$/.test(data.preferredDate) ||
    isNaN(Date.parse(data.preferredDate))
  ) {
    errors.preferredDate = "Please select a valid consultation date.";
  } else {
    const parts = data.preferredDate.split('-').map(Number);
    const selectedDate = new Date(parts[0], parts[1] - 1, parts[2]);
    if (
      selectedDate.getFullYear() !== parts[0] ||
      selectedDate.getMonth() !== parts[1] - 1 ||
      selectedDate.getDate() !== parts[2]
    ) {
      errors.preferredDate = "Please select a valid consultation date.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        errors.preferredDate = "Consultation date cannot be in the past.";
      }
    }
  }

  if (!data.preferredTime || typeof data.preferredTime !== 'string' || data.preferredTime.trim().length === 0) {
    errors.preferredTime = "Please select your preferred time slot.";
  }

  if (!data.consultationReason || typeof data.consultationReason !== 'string' || data.consultationReason.trim().length === 0) {
    errors.consultationReason = "Please indicate the general reason for consultation.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
