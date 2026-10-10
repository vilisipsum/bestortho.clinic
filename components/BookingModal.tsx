'use client';

import React, { useState, useEffect } from 'react';
import { X, Calendar, Phone, MessageCircle, Clock, ShieldCheck, CheckCircle2, Lock, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/lib/content';
import { validateBookingForm, BookingFormData } from '@/lib/validation';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultReason?: string;
  defaultArea?: string;
}

export default function BookingModal({ isOpen, onClose, defaultReason = '', defaultArea = 'Knee' }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 02:00 PM)',
    consultationReason: defaultReason || 'Knee Pain / Joint Discomfort',
    affectedArea: defaultArea || 'Knee',
    patientType: 'new',
    notes: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync defaultReason and defaultArea when opened from different buttons
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setFormData(prev => ({
        ...prev,
        consultationReason: defaultReason || prev.consultationReason || 'Knee Pain / Joint Discomfort',
        affectedArea: defaultArea || prev.affectedArea || 'Knee',
      }));
    }
  }, [isOpen, defaultReason, defaultArea]);

  if (!isOpen) return null;

  // Format today's date as YYYY-MM-DD for min date attribute
  const todayString = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookingForm(formData);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.warn('Booking network warning:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Dr. Gaurav Sharma Clinic,%20I%20would%20like%20to%20request%20a%20consultation%20appointment.%0AName:%20${encodeURIComponent(formData.fullName || 'Patient')}%0APatient%20Type:%20${formData.patientType === 'new' ? 'New%20Patient' : 'Follow-up%20Patient'}%0AAffected%20Area:%20${encodeURIComponent(formData.affectedArea || 'Not%20specified')}%0AReason:%20${encodeURIComponent(formData.consultationReason)}%0APreferred%20Time:%20${encodeURIComponent(formData.preferredTime)}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-elevated max-w-xl w-full p-6 sm:p-8 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"
          aria-label="Close Booking Window"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center text-emerald-600 shadow-subtle">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Request Received
            </span>

            <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
              Consultation Request Logged
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="font-semibold text-slate-900">{formData.fullName}</strong>. Our clinic reception in Sikandra will review your preferred slot ({formData.preferredDate}, {formData.preferredTime}) and contact you at <strong className="font-semibold text-slate-900">{formData.phoneNumber}</strong> to confirm your appointment.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left space-y-2 max-w-md mx-auto">
              <p className="font-bold text-slate-900">Appointment Checklist:</p>
              <p>• Please arrive 10 minutes early.</p>
              <p>• Bring previous X-rays, MRI scans, or prescription slips.</p>
              <p>• Direct clinic phone: {siteConfig.phoneDisplay}</p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppRedirect}
                className="btn-accent-emerald text-xs py-3 px-5 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="btn-secondary text-xs py-3 px-5"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="pr-8 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
                  Direct OPD Scheduling
                </span>
                <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-xs">
                  Sikandra, Agra
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display leading-tight">
                Request a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                {siteConfig.practiceName} • Consultation with Dr. Gaurav Sharma
              </p>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-center hover:bg-white hover:border-slate-300 transition-colors shadow-subtle"
              >
                <Phone className="w-4 h-4 mx-auto text-brand-700 mb-1" />
                <span className="text-xs font-bold text-slate-900 block">Call Direct</span>
                <span className="text-xs text-slate-500 font-medium">{siteConfig.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-center hover:bg-emerald-50 transition-colors shadow-subtle"
              >
                <MessageCircle className="w-4 h-4 mx-auto text-emerald-700 mb-1" />
                <span className="text-xs font-bold text-emerald-900 block">WhatsApp</span>
                <span className="text-xs text-emerald-700 font-medium">Instant Response</span>
              </a>
            </div>

            <div className="relative flex py-2 items-center mb-4">
              <div className="flex-grow border-t border-slate-200"></div>
              <span className="flex-shrink mx-3 text-xs font-semibold text-slate-500">or online request</span>
              <div className="flex-grow border-t border-slate-200"></div>
            </div>

            {/* Appointment Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Type Selector */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Patient Type
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'new' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                      formData.patientType === 'new'
                        ? 'bg-brand-900 text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    New Patient Visit
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'existing' })}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
                      formData.patientType === 'existing'
                        ? 'bg-brand-900 text-white shadow-sm'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-200/60'
                    }`}
                  >
                    Follow-up / Existing
                  </button>
                </div>
              </div>

              {/* Anti-spam Honeypot (hidden from human users) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-modal-hp">Website</label>
                <input
                  id="website-modal-hp"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot || ''}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter patient's name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 font-medium mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone (10 digits) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                  {errors.phoneNumber && (
                    <p className="text-xs text-red-600 font-medium mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={todayString}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  />
                  {errors.preferredDate && (
                    <p className="text-xs text-red-600 font-medium mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Slot *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  >
                    <option value="Morning (10:00 AM - 02:00 PM)">Morning (10:00 AM - 02:00 PM)</option>
                    <option value="Evening (05:30 PM - 08:30 PM)">Evening (05:30 PM - 08:30 PM)</option>
                    <option value="Sunday Morning (10:30 AM - 01:00 PM)">Sunday Morning (10:30 AM - 01:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Area of Concern
                  </label>
                  <select
                    value={formData.affectedArea || 'Knee'}
                    onChange={(e) => setFormData({ ...formData, affectedArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  >
                    <option value="Knee">Knee Joint</option>
                    <option value="Shoulder">Shoulder / Rotator Cuff</option>
                    <option value="Hip">Hip Joint / Pelvis</option>
                    <option value="Spine / Back">Spine / Lower Back</option>
                    <option value="Neck / Cervical">Neck / Cervical Spine</option>
                    <option value="Elbow">Elbow / Forearm</option>
                    <option value="Wrist & Hand">Wrist & Hand</option>
                    <option value="Ankle & Foot">Ankle & Foot</option>
                    <option value="Fracture / Trauma">Fracture / Bone Injury</option>
                    <option value="Sports Injury">Sports / Ligament Sprain</option>
                    <option value="Other / General">Other / General Ortho</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Reason for Consultation *
                  </label>
                  <select
                    value={formData.consultationReason}
                    onChange={(e) => setFormData({ ...formData, consultationReason: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                  >
                    <option value="Knee Pain / Joint Discomfort">Knee Pain / Joint Discomfort</option>
                    <option value="Shoulder Pain / Frozen Shoulder">Shoulder Pain / Frozen Shoulder</option>
                    <option value="Sports Injury / Ligament Sprain">Sports Injury / Ligament Sprain</option>
                    <option value="Fracture Follow-up / Cast Check">Fracture Follow-up / Cast Check</option>
                    <option value="Spine / Back / Neck Evaluation">Spine / Back / Neck Evaluation</option>
                    <option value="Second Opinion on Surgery">Second Opinion on Surgery</option>
                    <option value="General Orthopaedic Consultation">General Orthopaedic Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Optional Notes (Symptoms, Duration)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Briefly describe your symptoms or how long you've had pain..."
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                />
              </div>

              {/* CRITICAL COMPLIANCE NOTICE: Document uploads disabled per prompt */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-600">
                <Lock className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Medical Privacy Notice:</strong> In compliance with patient health privacy, medical document uploads are disabled online. Please bring your existing X-rays, MRI scans, and physical reports directly to the clinic for in-person review.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-base py-3.5 flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-5 h-5" />
                <span>{isSubmitting ? 'Submitting Request...' : 'Submit Appointment Request'}</span>
              </button>

              <p className="text-xs text-center text-slate-500 font-medium">
                By submitting, you agree to be contacted via phone or WhatsApp for appointment scheduling.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}
