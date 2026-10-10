'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Phone, MessageCircle, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/content';

interface BookingCTAProps {
  onOpenBooking?: () => void;
}

export default function BookingCTA({ onOpenBooking }: BookingCTAProps) {
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-brand-950 text-white p-8 sm:p-12 lg:p-16 shadow-elevated overflow-hidden border border-brand-900">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-700/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="pill-badge bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                  Direct OPD Access
                </span>
                <span className="pill-badge bg-brand-900 text-brand-100 border-brand-700">
                  Sikandra, Agra
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display mb-4">
                Schedule Your Orthopaedic Consultation
              </h2>

              <p className="text-base sm:text-lg text-brand-100 leading-relaxed font-normal max-w-xl mb-8">
                Consult with Dr. Gaurav Sharma for diagnostic evaluation of joint pain, sports injuries, or fracture recovery. Morning and evening clinic slots available Monday through Saturday, plus Sunday morning hours.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleBookingClick}
                  className="btn-primary bg-brand-600 hover:bg-brand-500 text-base sm:text-lg py-3.5 px-8 flex items-center gap-3 shadow-md border-none"
                  aria-label="Book Consultation Now"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent-emerald text-base py-3.5 px-7 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Panel */}
            <div className="lg:col-span-5">
              <div className="bg-brand-900/80 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3.5 pb-4 border-b border-brand-800/80">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center font-bold text-white">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 font-semibold tracking-wide">
                      Direct Appointment Desk
                    </p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      className="text-lg font-bold text-white hover:text-brand-200 transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pb-4 border-b border-brand-800">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center font-bold text-white flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-200 font-semibold tracking-wide">
                      Clinic Location
                    </p>
                    <p className="text-sm font-medium text-white">
                      {siteConfig.primaryAddress.street}, Sikandra, Agra
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-brand-200 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
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
