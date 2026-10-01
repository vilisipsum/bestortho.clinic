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
    <section id="clinic-location" className="py-16 md:py-24 border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-accent-orange text-white mb-3">
            Visit The Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
            Clinic Location & Consultation Hours
          </h2>
          <p className="text-base sm:text-lg text-dark/70 font-semibold mt-2">
            Centrally situated in Sikandra, Agra, offering easy regional access along the main highway corridor with dedicated outpatient consulting facilities.
          </p>
        </div>

        {/* Master Location Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours & Direct Action Buttons */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="card-editorial bg-white p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-6 border-b-2 border-dark/10">
                <div>
                  <span className="pill-badge bg-accent-lime text-dark text-xs mb-1">
                    Primary Outpatient Practice
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-dark font-display">
                    {siteConfig.practiceName}
                  </h3>
                </div>
              </div>

              {/* Address Block */}
              <div className="py-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent-orange/15 border-2 border-dark flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent-orange" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black uppercase text-dark tracking-wider">
                      Clinic Address
                    </h4>
                    <p className="text-base font-bold text-dark mt-0.5">
                      {siteConfig.primaryAddress.street}
                    </p>
                    <p className="text-sm text-dark/80">
                      {siteConfig.primaryAddress.locality}, {siteConfig.primaryAddress.city} – {siteConfig.primaryAddress.postalCode}, {siteConfig.primaryAddress.state}
                    </p>
                    <p className="text-xs text-dark/60 mt-1">
                      Landmark: Near Sikandra Crossing, Delhi-Agra Highway Corridor
                    </p>
                  </div>
                </div>

                {/* Consultation Hours */}
                <div className="flex items-start gap-3 pt-4 border-t border-dark/10">
                  <div className="w-10 h-10 rounded-xl bg-accent-lime border-2 border-dark flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-dark" />
                  </div>
                  <div className="w-full">
                    <h4 className="text-sm font-black uppercase text-dark tracking-wider">
                      OPD Consultation Timings
                    </h4>
                    <div className="mt-2 space-y-2 text-sm">
                      {siteConfig.timings.map((timing, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-xl bg-[#FFF8E7] border border-dark/10"
                        >
                          <span className="font-bold text-dark">{timing.days}</span>
                          <span className="text-dark/80 font-mono text-xs sm:text-sm font-semibold">
                            {timing.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4 border-t-2 border-dark/10">
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-accent-orange" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="btn-secondary text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-accent-orange" />
                  <span>Call Clinic</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-accent-lime text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-dark" />
                  <span>WhatsApp</span>
                </a>

                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="btn-accent-orange text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book OPD</span>
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-accent-orange text-xs py-3 px-3 flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book OPD</span>
                  </Link>
                )}
              </div>

            </div>

            {/* Emergency & Acute Trauma Notice */}
            <div className="p-5 rounded-2xl bg-white border-2 border-dark flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-accent-orange/20 border border-dark flex items-center justify-center flex-shrink-0 text-accent-orange">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="text-xs text-dark/80 space-y-1">
                <h5 className="font-black text-dark uppercase tracking-wider text-xs">
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
            <div className="card-editorial bg-[#FFF8E7] h-full p-6 sm:p-8 flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="pill-badge bg-accent-blue text-white text-xs">
                    Location Guide
                  </span>
                  <span className="text-xs font-bold text-dark/60">Agra, UP</span>
                </div>

                <h4 className="text-2xl font-black text-dark font-display mb-2">
                  Visiting from Agra & Nearby
                </h4>
                <p className="text-sm text-dark/75 leading-relaxed mb-6">
                  Sikandra is conveniently connected for patients travelling from Central Agra, Dayalbagh, Bodla, Runakta, and along the National Highway corridor.
                </p>

                {/* Map Graphic / Interactive Direction Box */}
                <div className="rounded-2xl border-2 border-dark bg-white p-5 shadow-hard-sm mb-6">
                  <div className="flex items-center justify-between pb-3 border-b border-dark/10">
                    <span className="text-xs font-black uppercase text-dark">
                      Sikandra Corridor Map
                    </span>
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-accent-blue flex items-center gap-1 hover:underline"
                    >
                      <span>Open Live Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <div className="my-4 py-8 px-4 rounded-xl bg-[#FFF4D9]/80 border-2 border-dashed border-dark/30 text-center">
                    <MapPin className="w-8 h-8 text-accent-orange mx-auto mb-2" />
                    <p className="text-xs font-black text-dark uppercase tracking-wider">
                      Sikandra Crossing, Agra
                    </p>
                    <p className="text-[11px] text-dark/70 mt-1">
                      Coordinates: 27.2183° N, 77.9482° E
                    </p>
                  </div>

                  <div className="space-y-2 text-xs text-dark/80">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                      <span>Ground-level consultation access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                      <span>Dedicated patient drop-off area</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                      <span>Nearby diagnostic imaging facilities</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Cashless / TPA transparency box */}
              <div className="p-4 rounded-xl bg-white border border-dark/20 text-xs text-dark/70 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-accent-blue flex-shrink-0 mt-0.5" />
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
