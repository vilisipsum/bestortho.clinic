'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import PatientStoriesSection from '@/components/PatientStoriesSection';
import TestimonialCard from '@/components/TestimonialCard';
import ConsentNotice from '@/components/ConsentNotice';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import { ShieldCheck, Heart, UserCheck } from 'lucide-react';

export default function PatientStoriesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="py-12 md:py-16 border-b-2 border-dark/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-accent-lime text-dark text-xs">
              Clinical Case Records
            </span>
            <span className="pill-badge bg-accent-orange text-white text-xs">
              Verified Patient Consent
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-dark tracking-tight font-display mb-4">
            Patient Stories & Recovery Experiences
          </h1>
          <p className="text-lg sm:text-xl text-dark/75 font-semibold max-w-3xl">
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
