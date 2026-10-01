'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, BookOpen, Calendar, ArrowRight, UserCheck, Stethoscope, Clock } from 'lucide-react';
import { siteConfig, doctorProfile } from '@/lib/content';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/25 to-slate-50 pt-10 pb-16 lg:py-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Pill Labels */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200">
                <MapPin className="w-3.5 h-3.5" />
                Sikandra, Agra
              </span>
              <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200">
                <Stethoscope className="w-3.5 h-3.5 text-brand-600" />
                Orthopaedic Specialist Practice
              </span>
              <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200">
                Evidence-Conscious Care
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brand-950 tracking-tight leading-[1.12] mb-6 font-display">
              Orthopaedic Care, <br />
              <span className="text-brand-700">Built Around Your</span> Recovery.
            </h1>

            {/* Factual, Neutral Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
              Meet Dr. Gaurav Sharma and learn about his orthopaedic practice, clinical qualifications, areas of care, clinic timings in Sikandra, and patient educational resources. Structured around careful examination, clear options, and measurable recovery milestones.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="btn-primary text-base sm:text-lg py-3.5 px-8 flex items-center gap-3 shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="btn-primary text-base sm:text-lg py-3.5 px-8 flex items-center gap-3 shadow-md"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              )}

              <Link
                href="/about"
                className="btn-secondary text-base sm:text-lg py-3.5 px-7 flex items-center gap-2"
              >
                <span>Meet Dr. Gaurav Sharma</span>
              </Link>
            </div>

            {/* Small Trust Indicators Beneath Hero */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-brand-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                    Verified Credentials
                  </h4>
                  <p className="text-xs text-slate-500">
                    Transparent qualification records
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                    Local Consultation
                  </h4>
                  <p className="text-xs text-slate-500">
                    Sikandra, Agra clinic facility
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center flex-shrink-0 text-purple-700">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 tracking-wide uppercase">
                    Patient Education
                  </h4>
                  <p className="text-xs text-slate-500">
                    Clear guidance on your condition
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait Professional Composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with Refined Medical Aesthetics */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-elevated overflow-hidden p-6 sm:p-7">
                
                {/* Visual Frame for Authentic Doctor Photography */}
                <div className="relative aspect-[4/5] rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden flex flex-col justify-between p-6">
                  
                  {/* Status Tag */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-brand-900 shadow-subtle">
                      Consultant Orthopaedic Specialist
                    </span>
                    <span className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-xs font-bold text-emerald-800">
                      ✓
                    </span>
                  </div>

                  {/* Reserved Portrait Space (Clearly labeled PHOTO NEEDED per compliance) */}
                  <div className="my-auto py-8 px-4 rounded-xl bg-white border border-dashed border-slate-300 text-center shadow-subtle">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-700">
                      <UserCheck className="w-7 h-7" />
                    </div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-slate-800 text-white text-[11px] font-semibold tracking-wider uppercase mb-1.5">
                      PHOTO NEEDED
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      Official Clinic Portrait
                    </p>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">
                      Dr. Gaurav Sharma authentic clinic headshot reserved. No synthetic doctor imagery used.
                    </p>
                  </div>

                  {/* Doctor Card Caption */}
                  <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-subtle">
                    <h3 className="text-base font-bold text-brand-950 font-display leading-tight">
                      {doctorProfile.name}
                    </h3>
                    <p className="text-xs font-semibold text-brand-700">
                      {doctorProfile.formalTitle}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Sikandra, Agra • Consultation by Prior Appointment
                    </p>
                  </div>

                </div>

                {/* Sub-card badges */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-slate-600">
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
