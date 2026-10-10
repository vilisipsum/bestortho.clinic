'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Calendar, HelpCircle, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { areasOfCare, AreaOfCare } from '@/lib/content';

interface AreasOfCareProps {
  onOpenBooking?: () => void;
}

export default function AreasOfCare({ onOpenBooking }: AreasOfCareProps) {
  // Only display doctor-approved areas of care
  const approvedAreas = areasOfCare.filter((area) => area.approved);
  const [selectedArea, setSelectedArea] = useState<AreaOfCare>(approvedAreas[0] || null);

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
    <section id="areas-of-care" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-3">
              Approved Clinical Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
              Areas of Orthopaedic Care
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 max-w-xl">
              Focused outpatient evaluations, conservative care protocols, and surgical planning approved for clinical consultation.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Select a topic to explore consultation details</span>
          </div>
        </div>

        {/* Tab/Category Selector */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2">
          {approvedAreas.map((area) => {
            const isSelected = selectedArea?.id === area.id;
            return (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-brand-700 text-white border-brand-700 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {area.title}
              </button>
            );
          })}
        </div>

        {/* Selected Area Feature Detail Card */}
        {selectedArea && (
          <div className="card-medical bg-slate-50 border border-slate-200 p-6 sm:p-10 mb-12 relative overflow-hidden">
            {/* Top Accent Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200">
                  Clinical Focus
                </span>
                <span className="text-xs font-medium text-slate-500 tracking-wide">
                  Outpatient Consultation • Sikandra
                </span>
              </div>

              <button
                onClick={handleBookingClick}
                className="btn-primary text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5 shadow-sm"
                aria-label={`Consult for ${selectedArea.title}`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Consult for {selectedArea.title}</span>
              </button>
            </div>

            <div className="py-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display mb-3">
                {selectedArea.title}
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
                {selectedArea.shortExplanation}
              </p>
            </div>

            {/* Split Content: Who should consider & What patients ask */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Who Should Consider */}
              <div className="p-6 rounded-xl bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-700">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-brand-950 font-display">
                    Who Should Consider Consultation
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selectedArea.whoShouldConsider.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Patients Commonly Ask */}
              <div className="p-6 rounded-xl bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-brand-950 font-display">
                    Common Questions Evaluated
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selectedArea.commonQuestions.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                      <span className="font-medium text-slate-900">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Routing */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-slate-500">
              <p>
                All consultations begin with clinical examination and careful imaging evaluation.
              </p>
              <Link
                href="/faq"
                className="text-brand-700 hover:text-brand-900 font-semibold flex items-center gap-1"
              >
                <span>Read related FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Small Cards Grid for Quick Scan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedAreas.map((area) => (
            <div
              key={area.id}
              className="card-medical flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200">
                    {area.title.split(' ')[0]}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>

                <h4 className="text-xl font-bold text-brand-950 font-display mb-2">
                  {area.title}
                </h4>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {area.shortExplanation}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedArea(area);
                    window.scrollTo({
                      top: document.getElementById('areas-of-care')?.offsetTop || 0,
                      behavior: 'smooth',
                    });
                  }}
                  className="text-xs font-semibold text-brand-700 hover:text-brand-900 flex items-center gap-1"
                >
                  <span>View Care Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <span className="text-xs font-medium text-slate-500">
                  Sikandra Clinic
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
