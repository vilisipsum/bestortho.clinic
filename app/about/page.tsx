'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import DoctorProfile from '@/components/DoctorProfile';
import PracticePhilosophy from '@/components/PracticePhilosophy';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import { doctorProfile, siteConfig } from '@/lib/content';
import { Award, ShieldCheck, MapPin, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsBookingOpen(true);
      window.dispatchEvent(new CustomEvent('booking-modal-opened'));
    };
    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Page Header Banner */}
      <section className="py-12 md:py-16 bg-white">
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
