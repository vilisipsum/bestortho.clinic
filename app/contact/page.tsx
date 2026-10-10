'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import LocationCard from '@/components/LocationCard';
import EmergencyNotice from '@/components/EmergencyNotice';
import { siteConfig } from '@/lib/content';
import { validateBookingForm, BookingFormData } from '@/lib/validation';
import { Phone, MessageCircle, Calendar, MapPin, CheckCircle2, Lock, ShieldCheck, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    preferredDate: '',
    preferredTime: 'Morning (10:00 AM - 02:00 PM)',
    consultationReason: 'Knee Pain / Joint Discomfort',
    affectedArea: 'Knee',
    patientType: 'new',
    notes: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const todayString = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookingForm(formData);
    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Dr. Gaurav Sharma Clinic,%20I%20would%20like%20to%20request%20a%20consultation%20appointment.%0AName:%20${encodeURIComponent(formData.fullName || 'Patient')}%0APatient%20Type:%20${formData.patientType === 'new' ? 'New%20Patient' : 'Follow-up%20Patient'}%0AAffected%20Area:%20${encodeURIComponent(formData.affectedArea || 'Not%20specified')}%0AReason:%20${encodeURIComponent(formData.consultationReason)}%0APreferred%20Time:%20${encodeURIComponent(formData.preferredTime)}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Direct OPD Scheduling
            </span>
            <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-xs">
              Sikandra, Agra
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-950 tracking-tight font-display mb-4">
            Book a Consultation
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl">
            Schedule an outpatient appointment with Dr. Gaurav Sharma. Contact our reception by phone, WhatsApp, or through the secure appointment request form below.
          </p>
        </div>
      </section>

      {/* Direct Contact Options & Form Grid */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Quick Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="card-medical bg-white p-6 sm:p-8">
                <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 mb-2">
                  Immediate Booking
                </span>
                <h2 className="text-2xl font-bold text-brand-950 font-display mb-2">
                  Direct Reception Channels
                </h2>
                <p className="text-sm text-slate-600 mb-6">
                  For same-day inquiries or urgent outpatient slot requests, contact our reception desk directly:
                </p>

                <div className="space-y-3.5">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-brand-50 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-brand-700 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-500 block">
                        Telephone Appointment Desk
                      </span>
                      <span className="text-base font-bold text-brand-950">
                        {siteConfig.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50/50 hover:bg-emerald-100/60 transition-all group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-emerald-700 block">
                        WhatsApp Consultation Desk
                      </span>
                      <span className="text-sm font-bold text-emerald-950">
                        Chat with Clinic Coordinator
                      </span>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span>Morning OPD: 10:00 AM – 02:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-brand-600 flex-shrink-0" />
                    <span>Evening OPD: 05:30 PM – 08:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Sunday OPD: 10:30 AM – 01:00 PM (Prior Booking)</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-subtle text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-brand-600" />
                  <span>No Medical Uploads Policy</span>
                </div>
                <p className="leading-relaxed">
                  Per medical data compliance standards, diagnostic records (X-rays, MRI scans) are inspected directly in-clinic during your visit. We never request patient imaging uploads through unencrypted web forms.
                </p>
              </div>

            </div>

            {/* Right Column: Online Request Form */}
            <div className="lg:col-span-7">
              <div className="card-medical bg-white p-6 sm:p-10">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 mx-auto flex items-center justify-center text-emerald-600 shadow-subtle">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
                      Submission Success
                    </span>

                    <h3 className="text-3xl font-bold text-brand-950 font-display">
                      Appointment Request Logged
                    </h3>

                    <p className="text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="font-semibold text-slate-900">{formData.fullName}</strong>. Your request for <strong className="font-semibold text-slate-900">{formData.preferredDate}</strong> ({formData.preferredTime}) has been received. Our clinic receptionist in Sikandra will call you at <strong className="font-semibold text-slate-900">{formData.phoneNumber}</strong> to confirm your slot.
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="btn-accent-emerald text-xs py-3 px-6 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 text-white" />
                        <span>Confirm via WhatsApp</span>
                      </button>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            phoneNumber: '',
                            preferredDate: '',
                            preferredTime: 'Morning (10:00 AM - 02:00 PM)',
                            consultationReason: 'Knee Pain / Joint Discomfort',
                            affectedArea: 'Knee',
                            patientType: 'new',
                            notes: '',
                            honeypot: '',
                          });
                        }}
                        className="btn-secondary text-xs py-3 px-6"
                      >
                        Request Another Slot
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6 pb-6 border-b border-slate-100">
                      <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs mb-2">
                        Online Booking Form
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
                        Request a Clinic Appointment
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                        Fill in your preferred date and contact details. No advance online payment is required.
                      </p>
                    </div>

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
                        <label htmlFor="website-contact-hp">Website</label>
                        <input
                          id="website-contact-hp"
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
                            Patient Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Enter your full name"
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
                            placeholder="e.g. 9412255566"
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
                            Preferred Consultation Date *
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
                            Preferred Time Slot *
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
                          Symptoms / Prior Treatment Notes (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="You may mention how long you've had symptoms, or if you have recent X-rays to show..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 font-medium"
                        />
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50/80 flex items-start gap-2.5 text-xs text-slate-600">
                        <Lock className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                        <p>
                          <strong>Data Privacy Notice:</strong> Your contact details are collected solely to schedule this clinic consultation and will never be shared with third parties for marketing.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full text-base py-3.5 flex items-center justify-center gap-2 shadow-sm"
                      >
                        <Calendar className="w-5 h-5" />
                        <span>{isSubmitting ? 'Submitting Request...' : 'Submit Consultation Request'}</span>
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Clinic Map & Directions Section */}
      <LocationCard />

      {/* Emergency Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyNotice />
      </div>
    </>
  );
}
