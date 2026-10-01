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
    notes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    }, 600);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Dr. Gaurav Sharma Clinic,%20I%20would%20like%20to%20request%20a%20consultation%20appointment.%0AName:%20${encodeURIComponent(formData.fullName || 'Patient')}%0AReason:%20${encodeURIComponent(formData.consultationReason)}%0APreferred%20Time:%20${encodeURIComponent(formData.preferredTime)}`;
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="py-12 md:py-16 border-b-2 border-dark/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-accent-orange text-white text-xs">
              Direct OPD Scheduling
            </span>
            <span className="pill-badge bg-accent-lime text-dark text-xs">
              Sikandra, Agra
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-dark tracking-tight font-display mb-4">
            Book a Consultation
          </h1>
          <p className="text-lg sm:text-xl text-dark/75 font-semibold max-w-3xl">
            Schedule an outpatient appointment with Dr. Gaurav Sharma. Contact our reception by phone, WhatsApp, or through the secure appointment request form below.
          </p>
        </div>
      </section>

      {/* Direct Contact Options & Form Grid */}
      <section className="py-16 md:py-24 border-b-2 border-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Quick Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="card-editorial bg-[#FFF8E7] p-6 sm:p-8">
                <span className="pill-badge bg-accent-lime text-dark mb-2">
                  Immediate Booking
                </span>
                <h2 className="text-2xl font-black text-dark font-display mb-2">
                  Direct Reception Channels
                </h2>
                <p className="text-sm text-dark/75 mb-6">
                  For same-day inquiries or urgent outpatient slot requests, contact our reception desk directly:
                </p>

                <div className="space-y-4">
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-dark shadow-hard-sm hover:bg-accent-orange hover:text-white transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-orange/15 border border-dark flex items-center justify-center text-accent-orange group-hover:bg-white group-hover:text-dark">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider block">
                        Telephone Appointment Desk
                      </span>
                      <span className="text-lg font-black font-mono">
                        {siteConfig.phoneDisplay}
                      </span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-dark shadow-hard-sm hover:bg-accent-lime transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent-lime border border-dark flex items-center justify-center text-dark">
                      <MessageCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider block">
                        WhatsApp Consultation Desk
                      </span>
                      <span className="text-base font-black">
                        Chat with Clinic Coordinator
                      </span>
                    </div>
                  </a>
                </div>

                <div className="mt-6 pt-6 border-t border-dark/10 space-y-2 text-xs text-dark/70">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-orange flex-shrink-0" />
                    <span>Morning OPD: 10:00 AM – 02:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-orange flex-shrink-0" />
                    <span>Evening OPD: 05:30 PM – 08:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent-lime flex-shrink-0" />
                    <span>Sunday OPD: 10:30 AM – 01:00 PM (Prior Booking)</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-dark text-xs text-dark/80 space-y-2">
                <div className="flex items-center gap-2 font-black text-dark uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-accent-blue" />
                  <span>No Medical Uploads Policy</span>
                </div>
                <p className="leading-relaxed">
                  Per medical data compliance standards, diagnostic records (X-rays, MRI scans) are inspected directly in-clinic during your visit. We never request patient imaging uploads through unencrypted web forms.
                </p>
              </div>

            </div>

            {/* Right Column: Online Request Form */}
            <div className="lg:col-span-7">
              <div className="card-editorial bg-white p-6 sm:p-10 border-2 border-dark shadow-hard-lg">
                
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-accent-lime border-2 border-dark mx-auto flex items-center justify-center shadow-hard">
                      <CheckCircle2 className="w-8 h-8 text-dark" />
                    </div>

                    <span className="pill-badge bg-[#FFF4D9] text-dark text-xs">
                      Submission Success
                    </span>

                    <h3 className="text-3xl font-black text-dark font-display">
                      Appointment Request Logged
                    </h3>

                    <p className="text-base text-dark/80 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="font-bold text-dark">{formData.fullName}</strong>. Your request for <strong className="font-bold text-dark">{formData.preferredDate}</strong> ({formData.preferredTime}) has been received. Our clinic receptionist in Sikandra will call you at <strong className="font-bold text-dark">{formData.phoneNumber}</strong> to confirm your slot.
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="btn-accent-lime text-xs py-3 px-6 flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4 text-dark" />
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
                            notes: '',
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
                    <div className="mb-6 pb-6 border-b-2 border-dark/10">
                      <span className="pill-badge bg-accent-orange text-white text-xs mb-2">
                        Online Booking Form
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-dark font-display">
                        Request a Clinic Appointment
                      </h2>
                      <p className="text-xs sm:text-sm text-dark/70 font-semibold mt-1">
                        Fill in your preferred date and contact details. No advance online payment is required.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-black uppercase text-dark mb-1">
                            Patient Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Enter your full name"
                            className="w-full px-4 py-3 rounded-xl border-2 border-dark bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange font-medium"
                          />
                          {errors.fullName && (
                            <p className="text-xs text-red-600 font-bold mt-1">{errors.fullName}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase text-dark mb-1">
                            Mobile Phone Number (10 digits) *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phoneNumber}
                            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            placeholder="e.g. 9412255566"
                            className="w-full px-4 py-3 rounded-xl border-2 border-dark bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange font-medium"
                          />
                          {errors.phoneNumber && (
                            <p className="text-xs text-red-600 font-bold mt-1">{errors.phoneNumber}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-black uppercase text-dark mb-1">
                            Preferred Consultation Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-dark bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange font-medium"
                          />
                          {errors.preferredDate && (
                            <p className="text-xs text-red-600 font-bold mt-1">{errors.preferredDate}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-black uppercase text-dark mb-1">
                            Preferred Time Slot *
                          </label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border-2 border-dark bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange font-medium"
                          >
                            <option value="Morning (10:00 AM - 02:00 PM)">Morning (10:00 AM - 02:00 PM)</option>
                            <option value="Evening (05:30 PM - 08:30 PM)">Evening (05:30 PM - 08:30 PM)</option>
                            <option value="Sunday Morning (10:30 AM - 01:00 PM)">Sunday Morning (10:30 AM - 01:00 PM)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase text-dark mb-1">
                          Reason for Consultation *
                        </label>
                        <select
                          value={formData.consultationReason}
                          onChange={(e) => setFormData({ ...formData, consultationReason: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-dark bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange font-medium"
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

                      <div>
                        <label className="block text-xs font-black uppercase text-dark mb-1">
                          Symptoms / Prior Treatment Notes (Optional)
                        </label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          placeholder="You may mention how long you've had symptoms, or if you have recent X-rays to show..."
                          className="w-full px-4 py-3 rounded-xl border-2 border-dark bg-white text-dark text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange font-medium"
                        />
                      </div>

                      <div className="p-3.5 rounded-xl bg-[#FFF8E7] border border-dark/20 flex items-start gap-2.5 text-xs text-dark/70">
                        <Lock className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
                        <p>
                          <strong>Data Privacy Notice:</strong> Your contact details are collected solely to schedule this clinic consultation and will never be shared with third parties for marketing.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-accent-orange w-full text-base py-4 flex items-center justify-center gap-2 shadow-hard"
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
