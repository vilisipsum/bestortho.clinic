'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InteractiveBodyGuide from '@/components/InteractiveBodyGuide';
import DoctorProfile from '@/components/DoctorProfile';
import AreasOfCare from '@/components/AreasOfCare';
import SurgicalProceduresSection from '@/components/SurgicalProceduresSection';
import VideoSection from '@/components/VideoSection';
import PatientJourney from '@/components/PatientJourney';
import PatientStoriesSection from '@/components/PatientStoriesSection';
import LocationCard from '@/components/LocationCard';
import FAQAccordion from '@/components/FAQAccordion';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getFAQSchema, getVideoSchema } from '@/lib/seo';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingReason, setBookingReason] = useState('Knee Pain / Joint Discomfort');
  const [bookingArea, setBookingArea] = useState('Knee');

  const faqSchema = getFAQSchema();
  const videoSchema = getVideoSchema();

  const handleOpenBooking = (reason?: string, area?: string) => {
    if (reason) setBookingReason(reason);
    if (area) setBookingArea(area);
    setIsBookingOpen(true);
  };

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
      {/* FAQ Schema Graph for SEO Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* VideoObject Schema Graph for Google Video Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* Sticky Header with Official Logo */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* 1. HERO SECTION (With Fast OPD Schedule & Clinic Access Card) */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 2. INTERACTIVE SYMPTOM NAVIGATOR (Elevated to top for immediate patient engagement) */}
      <InteractiveBodyGuide onOpenBooking={(reason, area) => handleOpenBooking(reason, area)} />

      {/* 3. MEET DR. GAURAV SHARMA (Sole dedicated doctor authority & credentials showcase) */}
      <DoctorProfile onOpenBooking={() => handleOpenBooking()} />

      {/* 4. CLINICAL SPECIALITIES & AREAS OF CARE */}
      <AreasOfCare onOpenBooking={() => handleOpenBooking()} />

      {/* 5. DEDICATED SURGICAL PROCEDURES & RECONSTRUCTIVE CARE */}
      <SurgicalProceduresSection onOpenBooking={(reason, area) => handleOpenBooking(reason, area)} />

      {/* 6. DOCTOR VIDEO GUIDANCE (Real Authentic Hindi Video Advice) */}
      <VideoSection />

      {/* 7. 3-STEP PATIENT JOURNEY & CLINICAL PROCESS */}
      <PatientJourney onOpenBooking={() => handleOpenBooking()} />

      {/* 7. PATIENT RECOVERY STORIES (Single consolidated, consent-guarded social proof) */}
      <PatientStoriesSection maxItems={3} showAllLink={true} />

      {/* 8. CLINIC LOCATION, OPD TIMINGS & DIRECTIONS */}
      <LocationCard onOpenBooking={() => handleOpenBooking()} />

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-3">
                Patient Resources
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal mt-2">
                Clear answers regarding appointment booking, consultation preparation, and imaging evaluation.
              </p>
            </div>

            <Link
              href="/faq"
              className="btn-secondary self-start md:self-auto text-sm py-2.5 px-5 flex items-center gap-2"
            >
              <span>View All Questions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <FAQAccordion limit={4} />
        </div>
      </section>

      {/* 10. FINAL CONSULTATION BOOKING CTA */}
      <BookingCTA onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultReason={bookingReason}
        defaultArea={bookingArea}
      />
    </>
  );
}
