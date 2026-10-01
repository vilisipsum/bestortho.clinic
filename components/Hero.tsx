'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, BookOpen, Calendar, ArrowRight, UserCheck, Stethoscope } from 'lucide-react';
import { siteConfig, doctorProfile } from '@/lib/content';

interface HeroProps {
  onOpenBooking?: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 border-b-2 border-dark/10">
      {/* Background accents / subtle geometry */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-accent-orange/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-accent-lime/15 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Pill Labels */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="pill-badge bg-accent-lime text-dark">
                <MapPin className="w-3.5 h-3.5" />
                Sikandra, Agra
              </span>
              <span className="pill-badge bg-white text-dark">
                <Stethoscope className="w-3.5 h-3.5 text-accent-orange" />
                Orthopaedic Specialist Practice
              </span>
              <span className="pill-badge bg-accent-lavender text-dark">
                Evidence-Conscious Care
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-dark tracking-tight leading-[1.08] mb-6 font-display">
              Orthopaedic Care, <br />
              <span className="relative inline-block mt-1">
                <span className="relative z-10">Built Around Your</span>
                <span className="absolute left-0 bottom-1.5 w-full h-3.5 bg-accent-lime/60 -z-0 rounded-sm"></span>
              </span>{' '}
              Recovery.
            </h1>

            {/* Factual, Neutral Supporting Copy */}
            <p className="text-lg sm:text-xl text-dark/80 leading-relaxed max-w-2xl mb-8 font-normal">
              Meet Dr. Gaurav Sharma and learn about his orthopaedic practice, clinical qualifications, areas of care, clinic timings in Sikandra, and patient educational resources. Structured around clear examination, thoughtful options, and measurable recovery milestones.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="btn-accent-orange text-base sm:text-lg py-4 px-8 flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="btn-accent-orange text-base sm:text-lg py-4 px-8 flex items-center gap-3"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              )}

              <Link
                href="/about"
                className="btn-secondary text-base sm:text-lg py-4 px-7 flex items-center gap-2"
              >
                <span>Meet Dr. Gaurav Sharma</span>
              </Link>
            </div>

            {/* Small Trust Indicators Beneath Hero */}
            <div className="pt-6 border-t-2 border-dark/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-dark/10">
                <div className="w-8 h-8 rounded-full bg-accent-lime border border-dark flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-4 h-4 text-dark" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-dark tracking-wider">
                    Verified Credentials
                  </h4>
                  <p className="text-xs text-dark/70">
                    Transparent qualification records
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-dark/10">
                <div className="w-8 h-8 rounded-full bg-accent-orange border border-dark flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-dark tracking-wider">
                    Local Consultation
                  </h4>
                  <p className="text-xs text-dark/70">
                    Sikandra, Agra clinic facility
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/70 border border-dark/10">
                <div className="w-8 h-8 rounded-full bg-accent-blue border border-dark flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-dark tracking-wider">
                    Patient Education
                  </h4>
                  <p className="text-xs text-dark/70">
                    Clear guidance on your condition
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait Editorial Composition */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative accent card behind */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-3xl bg-accent-orange border-2 border-dark -z-0" />
              
              {/* Main Card with Editorial Composition */}
              <div className="relative z-10 bg-white rounded-3xl border-2 border-dark shadow-hard-lg overflow-hidden p-6 sm:p-7">
                
                {/* Visual Frame for Authentic Doctor Photography */}
                <div className="relative aspect-[4/5] rounded-2xl border-2 border-dark bg-[#F4E3BA] overflow-hidden flex flex-col justify-between p-6">
                  
                  {/* Status Tag */}
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white border border-dark text-dark shadow-hard-sm">
                      Consultant Orthopaedic
                    </span>
                    <span className="w-7 h-7 rounded-full bg-accent-lime border border-dark flex items-center justify-center text-xs font-bold shadow-hard-sm">
                      ✓
                    </span>
                  </div>

                  {/* Editorial Placeholder Box (Strictly labeled PHOTO NEEDED per prompt instructions) */}
                  <div className="my-auto py-8 px-4 rounded-xl bg-white/80 border-2 border-dashed border-dark text-center">
                    <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-accent-orange/20 border-2 border-dark flex items-center justify-center">
                      <UserCheck className="w-7 h-7 text-accent-orange" />
                    </div>
                    <span className="inline-block px-3 py-1 rounded-md bg-dark text-white text-xs font-black uppercase tracking-wider mb-2">
                      PHOTO NEEDED
                    </span>
                    <p className="text-sm font-bold text-dark">
                      Official Clinic Portrait
                    </p>
                    <p className="text-xs text-dark/70 max-w-xs mx-auto mt-1">
                      Dr. Gaurav Sharma authentic clinic headshot reserved. No synthetic doctor imagery used.
                    </p>
                  </div>

                  {/* Doctor Card Caption */}
                  <div className="bg-white rounded-xl border-2 border-dark p-3.5 shadow-hard-sm">
                    <h3 className="text-base font-black text-dark font-display leading-tight">
                      {doctorProfile.name}
                    </h3>
                    <p className="text-xs font-semibold text-accent-orange">
                      {doctorProfile.formalTitle}
                    </p>
                    <p className="text-[11px] text-dark/70 mt-0.5">
                      Sikandra, Agra • Consultation by Appointment
                    </p>
                  </div>

                </div>

                {/* Sub-card badges */}
                <div className="mt-4 pt-4 border-t-2 border-dark/10 flex items-center justify-between text-xs font-bold text-dark">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                    OPD Mon–Sat & Sun
                  </span>
                  <Link
                    href="/about"
                    className="text-dark hover:text-accent-orange underline decoration-2 underline-offset-2 flex items-center gap-1"
                  >
                    <span>View Credentials</span>
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
