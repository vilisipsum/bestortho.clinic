'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import FAQAccordion from '@/components/FAQAccordion';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import { HelpCircle, Stethoscope, FileQuestion } from 'lucide-react';

export default function FAQPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="py-12 md:py-16 border-b-2 border-dark/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-accent-orange text-white text-xs">
              Patient Guidance
            </span>
            <span className="pill-badge bg-accent-lime text-dark text-xs">
              Doctor-Approved
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-dark tracking-tight font-display mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-dark/75 font-semibold max-w-3xl">
            Everything you need to know about scheduling, preparing for consultations, bringing previous imaging, and managing orthopaedic recovery at our Sikandra clinic.
          </p>
        </div>
      </section>

      {/* FAQs List Section */}
      <section className="py-16 md:py-24 border-b-2 border-dark/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion />
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
