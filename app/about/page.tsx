'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import DoctorProfile from '@/components/DoctorProfile';
import PracticePhilosophy from '@/components/PracticePhilosophy';
import HospitalAffiliations from '@/components/HospitalAffiliations';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import { doctorProfile, siteConfig } from '@/lib/content';
import { Award, ShieldCheck, MapPin, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Page Header Banner */}
      <section className="py-12 md:py-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Doctor Profile
            </span>
            <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-xs">
              Sikandra, Agra
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-950 tracking-tight font-display mb-4">
            About Dr. Gaurav Sharma
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl">
            Consultant Orthopaedic & Joint Reconstruction Specialist practicing at Sikandra, Agra. 
            Providing clinical evaluations, structured non-surgical management, and operative consultation.
          </p>
        </div>
      </section>

      {/* Main Doctor Profile Section */}
      <DoctorProfile showFullDetails={true} onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Practice Philosophy */}
      <PracticePhilosophy />

      {/* Hospital Affiliations */}
      <HospitalAffiliations />

      {/* Academic Verification Notice */}
      <section className="py-12 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-medical bg-slate-50 border border-slate-200 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-brand-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-brand-950 font-display">
                  Public Credential Verification Standard
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  BestOrtho.clinic adheres to strict medical ethics standards. All academic records (including MBBS, postgraduate MS Orthopaedics, and State Medical Council registrations) are maintained with complete institutional documentation at the clinic reception. In compliance with medical practice regulations, no exaggerated surgical counts or unsubstantiated awards are published on this domain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
