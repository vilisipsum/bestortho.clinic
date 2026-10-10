'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import PatientStoriesSection from '@/components/PatientStoriesSection';
import TestimonialCard from '@/components/TestimonialCard';
import ConsentNotice from '@/components/ConsentNotice';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import { ShieldCheck, Heart, UserCheck } from 'lucide-react';

export default function PatientStoriesPage() {
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

      {/* Hero Banner */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
              Clinical Case Records
            </span>
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Verified Patient Consent
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-950 tracking-tight font-display mb-4">
            Patient Stories & Recovery Experiences
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl">
            Real musculoskeletal cases treated by Dr. Gaurav Sharma. Published strictly with documented informed patient consent, illustrating genuine diagnostic pathways and recovery milestones.
          </p>
        </div>
      </section>

      {/* Patient Stories List */}
      <PatientStoriesSection maxItems={10} showAllLink={false} />

      {/* Testimonials */}
      <TestimonialCard />

      {/* Consent & Ethics Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsentNotice />
      </div>

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
