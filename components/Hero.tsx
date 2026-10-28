'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  MapPin, 
  BookOpen, 
  Calendar, 
  ArrowRight, 
  Stethoscope, 
  Clock, 
  Award,
  Phone,
  MessageCircle,
  Activity
} from 'lucide-react';
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
              Consultant orthopaedic and joint replacement care in Sikandra, Agra by Dr. Gaurav Sharma. Structured around in-depth clinical examination, transparent non-surgical and surgical options, and measurable recovery milestones.
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
                <span>Doctor Credentials</span>
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
                    Orthopaedic &amp; Joint Care
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
                    Condition &amp; Rehab Guides
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Doctor Portrait & Primary Authority Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle Ambient Elevation Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-brand-600/15 via-teal-500/10 to-transparent rounded-[32px] blur-xl opacity-70 -z-10" />

              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-4 sm:p-5 flex flex-col justify-between">
                
                {/* Live Availability Status Header */}
                <div className="flex justify-between items-center pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold text-slate-900 tracking-wide">
                      OPD Consultations Available
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-brand-50 border border-brand-200 text-brand-900">
                    Sikandra, Agra
                  </span>
                </div>

                {/* Doctor Portrait Image with Floating Credential Badges */}
                <div className="relative aspect-[4/4.2] sm:aspect-[4/4] rounded-2xl overflow-hidden bg-slate-900 shadow-md mb-3.5 group">
                  <Image
                    src="/images/doctor-portrait.jpg"
                    alt="Dr. Gaurav Sharma - Consultant Orthopaedic & Joint Replacement Surgeon"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 450px"
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    priority
                  />
                  
                  {/* Gentle Gradient Contrast Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badges on Photo */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-950/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/15 shadow-sm">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      MS (Ortho) Gold Medalist
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-950/80 backdrop-blur-md text-emerald-300 text-[11px] font-semibold border border-emerald-500/30 shadow-sm">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Verified
                    </span>
                  </div>

                  {/* Bottom Text Details Inside Photo */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <p className="text-xl font-bold font-display tracking-tight text-white drop-shadow-sm">
                      Dr. Gaurav Sharma
                    </p>
                    <p className="text-xs text-brand-200 font-medium">
                      M.B.B.S., M.S. (Orthopaedics) • 20+ Yrs Exp
                    </p>
                  </div>
                </div>

                {/* Doctor Designation & Credentials Detail */}
                <div className="mb-3.5 px-1">
                  <p className="text-xs font-bold text-slate-900 leading-snug">
                    Consultant Orthopaedic &amp; Joint Replacement Surgeon
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5 flex items-center justify-between">
                    <span>Former Assistant Professor of Orthopaedics</span>
                    <span className="font-semibold text-slate-700">Reg: 48757 (UPMC)</span>
                  </p>
                  
                  {/* Timings Quick Summary Bar */}
                  <div className="mt-2.5 p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                      <span>
                        <span className="font-semibold text-slate-900">09:30 AM – 09:30 PM</span>
                        <span className="text-[10px] text-amber-700 font-medium ml-1.5">(Break 4–6 PM)</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-brand-700 bg-white border border-slate-200 px-2 py-0.5 rounded-md">
                      Mon – Sat
                    </span>
                  </div>
                </div>

                {/* Direct Action Row: 1-Tap Call & WhatsApp */}
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-700" />
                    <span>Call Clinic</span>
                  </a>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20inquire%20about%20an%20OPD%20appointment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Direct Consultation Booking CTA */}
                <button
                  onClick={handleBookingClick}
                  className="w-full btn-primary text-xs py-2.5 px-4 flex items-center justify-center gap-2 mb-2.5 shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation With Dr. Sharma</span>
                </button>

                {/* Landmark Footer */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1 truncate max-w-[260px]">
                    <MapPin className="w-3 h-3 text-brand-600 shrink-0" />
                    <span className="truncate">{siteConfig.primaryAddress.street}, {siteConfig.primaryAddress.city}</span>
                  </span>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline font-semibold shrink-0"
                  >
                    Get Directions
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
