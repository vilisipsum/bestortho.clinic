'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, MessageCircle, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/content';

interface BookingCTAProps {
  onOpenBooking?: () => void;
}

export default function BookingCTA({ onOpenBooking }: BookingCTAProps) {
  return (
    <section className="py-16 md:py-24 border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl border-2 border-dark bg-dark text-white p-8 sm:p-12 lg:p-16 shadow-hard-xl overflow-hidden">
          
          {/* Background Graphic Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-orange/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent-lime/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="pill-badge bg-accent-lime text-dark">
                  Direct OPD Access
                </span>
                <span className="pill-badge bg-white/10 text-white border-white/20">
                  Sikandra, Agra
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display mb-4">
                Schedule Your Orthopaedic Consultation
              </h2>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal max-w-xl mb-8">
                Consult with Dr. Gaurav Sharma for diagnostic evaluation of joint pain, sports injuries, or fracture recovery. Morning and evening clinic slots available Monday through Saturday, plus Sunday morning hours.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="btn-accent-orange text-base sm:text-lg py-4 px-8 flex items-center gap-3 shadow-hard"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Consultation Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-accent-orange text-base sm:text-lg py-4 px-8 flex items-center gap-3 shadow-hard"
                  >
                    <Calendar className="w-5 h-5" />
                    <span>Book Consultation Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent-lime text-base py-4 px-7 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-dark" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Pill Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-accent-orange flex items-center justify-center font-bold text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white/60 font-black tracking-wider">
                      Direct Appointment Desk
                    </p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      className="text-lg font-black text-white hover:text-accent-lime transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-accent-lime flex items-center justify-center font-bold text-dark flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-white/60 font-black tracking-wider">
                      Clinic Location
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {siteConfig.primaryAddress.street}, Sikandra, Agra
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-white/70 pt-1">
                  <ShieldCheck className="w-4 h-4 text-accent-lime flex-shrink-0" />
                  <span>No upfront online payment required • Confirmation by clinic desk</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
