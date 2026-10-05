'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DoctorProfile from '@/components/DoctorProfile';
import PracticePhilosophy from '@/components/PracticePhilosophy';
import PatientJourney from '@/components/PatientJourney';
import InteractiveBodyGuide from '@/components/InteractiveBodyGuide';
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
import { ArrowRight } from 'lucide-react';
import { getFAQSchema } from '@/lib/seo';

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingReason, setBookingReason] = useState('Knee Pain / Joint Discomfort');
  const [bookingArea, setBookingArea] = useState('Knee');

  const faqSchema = getFAQSchema();

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

      {/* Sticky Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* 1. HERO SECTION */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 2. DOCTOR INTRODUCTION */}
      <DoctorProfile onOpenBooking={() => handleOpenBooking()} />

      {/* 3. PRACTICE PHILOSOPHY */}
      <PracticePhilosophy />

      {/* 4. 3-STEP PATIENT JOURNEY (What to Expect) */}
      <PatientJourney onOpenBooking={() => handleOpenBooking()} />

      {/* 5. INTERACTIVE SYMPTOM NAVIGATOR (Where Does It Hurt?) */}
      <InteractiveBodyGuide onOpenBooking={(reason, area) => handleOpenBooking(reason, area)} />

      {/* 6. AREAS OF CARE */}
      <AreasOfCare onOpenBooking={() => handleOpenBooking()} />

      {/* 7. PATIENT STORIES (Consent-Guarded) */}
      <PatientStoriesSection maxItems={3} showAllLink={true} />

      {/* 8. TESTIMONIALS (Approved Reviews) */}
      <TestimonialCard />

      {/* 9. EDUCATIONAL VIDEOS */}
      <VideoSection />

      {/* 10. HOSPITAL AFFILIATIONS */}
      <HospitalAffiliations />

      {/* 11. CLINIC / LOCATION */}
      <LocationCard onOpenBooking={() => handleOpenBooking()} />

      {/* 12. FAQS SECTION */}
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

          <FAQAccordion limit={6} />
        </div>
      </section>

      {/* 13. EMERGENCY NOTICE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyNotice />
      </div>

      {/* 14. BOOKING CTA */}
      <BookingCTA onOpenBooking={() => handleOpenBooking()} />

      {/* 15. CONSENT NOTICE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConsentNotice />
      </div>

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
