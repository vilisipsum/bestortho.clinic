'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DoctorProfile from '@/components/DoctorProfile';
import PracticePhilosophy from '@/components/PracticePhilosophy';
import AreasOfCare from '@/components/AreasOfCare';
import PatientStoriesSection from '@/components/PatientStoriesSection';
import VideoSection from '@/components/VideoSection';
import HospitalAffiliations from '@/components/HospitalAffiliations';
import LocationCard from '@/components/LocationCard';
import FAQAccordion from '@/components/FAQAccordion';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import ConsentNotice from '@/components/ConsentNotice';
import EmergencyNotice from '@/components/EmergencyNotice';
import TestimonialCard from '@/components/TestimonialCard';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {/* Sticky Header */}
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 1. HERO SECTION */}
      <Hero onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 2. DOCTOR INTRODUCTION */}
      <DoctorProfile onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 3. PRACTICE PHILOSOPHY / WHY PATIENTS COME */}
      <PracticePhilosophy />

      {/* 4. AREAS OF CARE */}
      <AreasOfCare onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 5. PATIENT STORIES (Consent-Guarded) */}
      <PatientStoriesSection maxItems={3} showAllLink={true} />

      {/* 6. TESTIMONIALS (Approved Reviews) */}
      <TestimonialCard />

      {/* 7. EDUCATIONAL VIDEOS */}
      <VideoSection />

      {/* 8. HOSPITAL AFFILIATIONS */}
      <HospitalAffiliations />

      {/* 9. CLINIC / LOCATION */}
      <LocationCard onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 10. FAQS SECTION */}
      <section className="py-16 md:py-24 border-b-2 border-dark/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="pill-badge bg-accent-orange text-white mb-3">
                Patient Resources
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-dark/70 font-semibold mt-2">
                Clear answers regarding appointment booking, consultation preparation, and imaging evaluation.
              </p>
            </div>

            <Link
              href="/faq"
              className="btn-secondary self-start md:self-auto text-sm py-3 px-6 flex items-center gap-2"
            >
              <span>View All Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <FAQAccordion limit={6} />
        </div>
      </section>

      {/* 11. EMERGENCY NOTICE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyNotice />
      </div>

      {/* 12. BOOKING CTA */}
      <BookingCTA onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 13. CONSENT NOTICE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsentNotice />
      </div>

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
