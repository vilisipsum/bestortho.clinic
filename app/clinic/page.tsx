'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import LocationCard from '@/components/LocationCard';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import EmergencyNotice from '@/components/EmergencyNotice';
import { siteConfig } from '@/lib/content';
import { MapPin, Clock, Phone, MessageCircle, FileText, CheckCircle2, Car, ShieldCheck } from 'lucide-react';

export default function ClinicPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Hero Banner */}
      <section className="py-12 md:py-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Outpatient Clinic
            </span>
            <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-xs">
              Sikandra, Agra
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-950 tracking-tight font-display mb-4">
            Visit Dr. Gaurav Sharma Clinic
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 font-normal max-w-3xl">
            Complete clinic information, OPD consultation timings, directions, and pre-visit guidelines for orthopaedic consultations in Sikandra, Agra.
          </p>
        </div>
      </section>

      {/* Main Location & Timings Card */}
      <LocationCard onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Patient Visit Guidelines & Preparation */}
      <section className="py-16 border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="pill-badge bg-white text-brand-700 border-slate-200 mb-3 shadow-subtle">
              Preparation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-950 font-display">
              Preparing for Your Clinic Consultation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal mt-2">
              To make your consultation as productive and thorough as possible, please keep the following recommendations in mind:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="card-medical bg-white p-6">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-700 mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 font-display mb-2">
                1. Bring Previous Scans & Reports
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Bring any existing X-rays, MRI films, CD-ROMs, CT scans, blood test results, or past prescription slips. Comparing historical imaging with present physical symptoms provides critical diagnostic context.
              </p>
            </div>

            <div className="card-medical bg-white p-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 font-display mb-2">
                2. Arrive 10 Minutes Prior
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Consultations are coordinated to minimize wait times. Arriving slightly ahead of your scheduled time allows the reception staff to record your vital signs and arrange previous records.
              </p>
            </div>

            <div className="card-medical bg-white p-6">
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-brand-950 font-display mb-2">
                3. Accessibility & Parking
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The clinic features ground-floor access, wheelchair-friendly entry pathways, and convenient curbside patient drop-off space directly off the main Sikandra corridor.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Emergency Notice */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmergencyNotice />
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
