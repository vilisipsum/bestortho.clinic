'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, BookOpen, Calendar, ArrowRight, UserCheck, Stethoscope, Clock, CheckCircle2, Award } from 'lucide-react';
import { siteConfig, doctorProfile } from '@/lib/content';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const handleBookingClick = (e?: React.MouseEvent) => {
    if (onOpenBooking) {
      if (e) e.preventDefault();
      onOpenBooking();
      return;
    }

    if (typeof window !== 'undefined') {
      let handled = false;
      const handleAck = () => { handled = true; };
      window.addEventListener('booking-modal-opened', handleAck, { once: true });
      window.dispatchEvent(new CustomEvent('open-booking-modal'));

      setTimeout(() => {
        window.removeEventListener('booking-modal-opened', handleAck);
        if (!handled) {
          window.location.href = '/contact';
        }
      }, 50);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-slate-100/50 pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle Architectural Grid Background Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-0"
        style={{
          backgroundImage: `radial-gradient(#0F2744 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Status Bar: Immediate Clinic Availability */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-700 mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-brand-950">OPD Consultations Available</span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600">Sikandra Crossing, Agra</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authoritative Editorial Presentation */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Pill Labels */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="pill-badge bg-brand-50 text-brand-700 border-brand-200">
                <Stethoscope className="w-3.5 h-3.5 text-brand-600" />
                Orthopaedic Specialist Practice
              </span>
              <span className="pill-badge bg-emerald-50 text-emerald-800 border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Evidence-Conscious Care
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-brand-950 tracking-tight leading-[1.3] mb-6 font-display">
              Orthopaedic Care, <br />
              <span className="text-brand-900">
                Built Around Your Recovery.
              </span>
            </h1>

            {/* Factual, Trust-Building Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Meet Dr. Gaurav Sharma and learn about his orthopaedic practice, qualifications, areas of care, clinic timings in Sikandra, and patient educational resources. Structured around thorough clinical examination, transparent options, and measurable recovery milestones.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={handleBookingClick}
                className="btn-primary text-base sm:text-lg py-3.5 px-8 flex items-center gap-3 shadow-md"
                aria-label="Book Consultation"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>

              <Link
                href="/about"
                className="btn-secondary text-base sm:text-lg py-3.5 px-7 flex items-center gap-2"
              >
                <span>Meet Dr. Gaurav Sharma</span>
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-brand-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900">
                    20+ Years Experience
                  </span>
                  <p className="text-xs text-slate-500">
                    Orthopaedic & Joint Care
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900">
                    Sikandra, Agra
                  </span>
                  <p className="text-xs text-slate-500">
                    Satyam Complex, Sector-12A
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/90 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center flex-shrink-0 text-sky-700">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-sm font-bold text-slate-900">
                    Patient Education
                  </span>
                  <p className="text-xs text-slate-500">
                    Condition & Rehab Guides
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait Clean Single-Layer Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Medical Specialist Single-Layer Card */}
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-7 flex flex-col justify-between">
                
                {/* Status Header */}
                <div className="flex justify-between items-center pb-4 mb-4 border-b border-slate-100">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 border border-brand-200 text-brand-900">
                    Consultant Orthopaedic Specialist
                  </span>
                  <span className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-xs font-bold text-emerald-800">
                    ✓
                  </span>
                </div>

                {/* Reserved Portrait Area */}
                <div className="py-10 px-4 rounded-2xl bg-slate-50 text-center mb-5">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-blue-100/70 flex items-center justify-center text-brand-700">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-slate-800 text-white text-xs font-semibold tracking-wide mb-1.5">
                    Official Clinic Portrait
                  </span>
                  <p className="text-sm font-bold text-slate-900">
                    Reserved for Dr. Gaurav Sharma
                  </p>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                    Authentic clinic photography only. No synthetic or stock doctor imagery used.
                  </p>
                </div>

                {/* Doctor Bio Details */}
                <div className="pt-2">
                  <h2 className="text-xl font-bold text-brand-950 font-display leading-tight">
                    {doctorProfile.name}
                  </h2>
                  <p className="text-xs font-semibold text-brand-700 mt-0.5">
                    {doctorProfile.formalTitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Sikandra, Agra • Consultation by Prior Appointment
                  </p>
                </div>

                {/* Sub-card badges */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <Clock className="w-3.5 h-3.5" />
                    OPD Mon–Sat & Sun
                  </span>
                  <Link
                    href="/about"
                    className="text-brand-700 hover:text-brand-900 font-semibold flex items-center gap-1"
                  >
                    <span>View Qualifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
