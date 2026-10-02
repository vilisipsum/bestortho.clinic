'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Clock, Calendar, ArrowUpRight, AlertTriangle, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/content';

interface LocationCardProps {
  onOpenBooking?: () => void;
}

export default function LocationCard({ onOpenBooking }: LocationCardProps) {
  return (
    <section id="clinic-location" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-3">
            Visit The Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            Clinic Location & Consultation Hours
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-2">
            Centrally situated in Sikandra, Agra, offering easy regional access along the main highway corridor with dedicated outpatient consulting facilities.
          </p>
        </div>

        {/* Master Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours & Direct Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="card-medical bg-white p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs mb-1">
                    Primary Outpatient Practice
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
                    {siteConfig.practiceName}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    Facility: {siteConfig.facilityName}
                  </p>
                </div>
              </div>

              {/* Address Block */}
              <div className="py-6 space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-brand-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-600">
                      Clinic Address & Location
                    </h4>
                    <p className="text-base font-bold text-slate-900 mt-0.5">
                      {siteConfig.primaryAddress.street}
                    </p>
                    <p className="text-sm text-slate-600">
                      {siteConfig.primaryAddress.locality}, {siteConfig.primaryAddress.city} – {siteConfig.primaryAddress.postalCode}, {siteConfig.primaryAddress.state}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Landmark: {siteConfig.primaryAddress.landmark} (Sikandra – Bodla Corridor)
                    </p>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3.5 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-xs font-bold text-slate-600">
                      OPD Consultation Timings
                    </h4>
                    <div className="mt-2 space-y-2 text-sm">
                      {siteConfig.timings.map((timing, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-slate-50"
                        >
                          <span className="font-semibold text-slate-900">{timing.days}</span>
                          <span className="text-slate-600 font-medium text-xs sm:text-sm">
                            {timing.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-brand-600" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="btn-secondary text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>Call Clinic</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent-emerald text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="btn-primary text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book OPD</span>
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-primary text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book OPD</span>
                  </Link>
                )}
              </div>

            </div>

            {/* Emergency & Acute Trauma Notice */}
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-800">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-700 space-y-1">
                <h5 className="font-bold text-slate-900 text-xs">
                  Acute Trauma & Emergency Clarification
                </h5>
                <p className="leading-relaxed">
                  {siteConfig.emergencyPolicy}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Map / Environmental Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="card-medical bg-slate-50 border border-slate-200 h-full p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
                    Location Guide
                  </span>
                  <span className="text-xs font-semibold text-slate-500">Agra, UP</span>
                </div>

                <h4 className="text-2xl font-bold text-brand-950 font-display mb-2">
                  Visiting from Agra & Nearby
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Sikandra is conveniently connected for patients travelling from Central Agra, Dayalbagh, Bodla, Runakta, and along the National Highway corridor.
                </p>

                {/* Map Graphic Box */}
                <div className="rounded-xl bg-white p-5 mb-6">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-700">
                      Google Business Profile
                    </span>
                    <a
                      href={siteConfig.googleBusinessProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-700 flex items-center gap-1 hover:underline"
                    >
                      <span>View on Google</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="my-4 py-5 px-4 rounded-lg bg-slate-50 text-center">
                    <MapPin className="w-7 h-7 text-brand-700 mx-auto mb-1.5" />
                    <p className="text-sm font-bold text-brand-950">
                      Satyam Complex, Sector-12A
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Avas Vikas Colony, Sikandra, Agra
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Opp. Bhawna Clarks Inn & Padam Plaza
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Ground-level consultation access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Dedicated patient drop-off area</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>Nearby diagnostic imaging facilities</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Cashless / TPA transparency box */}
              <div className="p-4 rounded-xl bg-white/80 text-xs text-slate-600 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Insurance & Cashless Information:</strong> Outpatient consultations are payable directly. For hospital-based admissions or elective surgeries, cashless TPA assistance is facilitated at affiliated hospital partner desks.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
