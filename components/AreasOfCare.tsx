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

  const getAccentStyles = (color: AreaOfCare['accentColor']) => {
    switch (color) {
      case 'orange':
        return {
          badge: 'bg-accent-orange text-white',
          border: 'border-accent-orange',
          light: 'bg-accent-orange/10',
          dot: 'bg-accent-orange',
        };
      case 'lime':
        return {
          badge: 'bg-accent-lime text-dark',
          border: 'border-accent-lime',
          light: 'bg-accent-lime/15',
          dot: 'bg-accent-lime',
        };
      case 'blue':
        return {
          badge: 'bg-accent-blue text-white',
          border: 'border-accent-blue',
          light: 'bg-accent-blue/10',
          dot: 'bg-accent-blue',
        };
      case 'pink':
        return {
          badge: 'bg-accent-pink text-dark',
          border: 'border-accent-pink',
          light: 'bg-accent-pink/15',
          dot: 'bg-accent-pink',
        };
      case 'lavender':
        return {
          badge: 'bg-accent-lavender text-dark',
          border: 'border-accent-lavender',
          light: 'bg-accent-lavender/25',
          dot: 'bg-accent-lavender',
        };
    }
  };

  return (
    <section id="areas-of-care" className="py-16 md:py-24 border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="pill-badge bg-accent-lime text-dark mb-3">
              Approved Clinical Areas
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
              Areas of Orthopaedic Care
            </h2>
            <p className="text-base sm:text-lg text-dark/70 font-semibold mt-2 max-w-2xl">
              Focused outpatient evaluations, conservative care protocols, and surgical planning approved for clinical consultation.
            </p>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-dark/70">
            <CheckCircle2 className="w-4 h-4 text-accent-orange" />
            <span>Select a topic to explore consultation details</span>
          </div>
        </div>

        {/* Tab/Category Selector */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2">
          {approvedAreas.map((area) => {
            const isSelected = selectedArea?.id === area.id;
            return (
              <button
                key={area.id}
                onClick={() => setSelectedArea(area)}
                className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all border-2 border-dark ${
                  isSelected
                    ? 'bg-dark text-white shadow-hard'
                    : 'bg-white text-dark shadow-hard-sm hover:bg-[#FFF8E7]'
                }`}
              >
                {area.title}
              </button>
            );
          })}
        </div>

        {/* Selected Area Feature Detail Card */}
        {selectedArea && (
          <div className="card-editorial bg-white p-6 sm:p-10 mb-12 relative overflow-hidden">
            {/* Top Accent Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-dark/10">
              <div className="flex items-center gap-3">
                <span className={`pill-badge ${getAccentStyles(selectedArea.accentColor).badge}`}>
                  Clinical Focus
                </span>
                <span className="text-xs font-bold text-dark/60 uppercase tracking-wider">
                  Outpatient Consultation • Sikandra
                </span>
              </div>

              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="btn-accent-orange text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Consult for {selectedArea.title}</span>
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="btn-accent-orange text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Consult for {selectedArea.title}</span>
                </Link>
              )}
            </div>

            <div className="py-6">
              <h3 className="text-2xl sm:text-3xl font-black text-dark font-display mb-3">
                {selectedArea.title}
              </h3>
              <p className="text-base sm:text-lg text-dark/80 leading-relaxed font-normal max-w-3xl">
                {selectedArea.shortExplanation}
              </p>
            </div>

            {/* Split Content: Who should consider & What patients ask */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Who Should Consider */}
              <div className="p-6 rounded-2xl bg-[#FFF8E7] border-2 border-dark">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-orange border border-dark flex items-center justify-center text-white">
                    <Users className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-black text-dark font-display">
                    Who Should Consider Consultation
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selectedArea.whoShouldConsider.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-dark/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-orange mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What Patients Commonly Ask */}
              <div className="p-6 rounded-2xl bg-white border-2 border-dark">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-accent-lime border border-dark flex items-center justify-center text-dark">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-black text-dark font-display">
                    Common Questions Evaluated
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selectedArea.commonQuestions.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-dark/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-dark mt-2 flex-shrink-0" />
                      <span className="font-medium text-dark">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Routing */}
            <div className="mt-8 pt-6 border-t border-dark/10 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-dark/70">
              <p>
                All consultations begin with clinical examination and careful imaging evaluation.
              </p>
              <Link
                href="/faq"
                className="text-dark hover:text-accent-orange underline decoration-2 underline-offset-2 flex items-center gap-1"
              >
                <span>Read related FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

        {/* Small Cards Grid for Quick Scan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {approvedAreas.map((area) => {
            const styles = getAccentStyles(area.accentColor);
            return (
              <div
                key={area.id}
                className="card-editorial flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`pill-badge ${styles.badge}`}>
                      {area.title.split(' ')[0]}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full border border-dark bg-accent-lime" />
                  </div>

                  <h4 className="text-xl font-black text-dark font-display mb-2">
                    {area.title}
                  </h4>

                  <p className="text-sm text-dark/75 leading-relaxed mb-4">
                    {area.shortExplanation}
                  </p>
                </div>

                <div className="pt-4 border-t border-dark/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedArea(area);
                      window.scrollTo({
                        top: document.getElementById('areas-of-care')?.offsetTop || 0,
                        behavior: 'smooth',
                      });
                    }}
                    className="text-xs font-black text-dark hover:text-accent-orange flex items-center gap-1 uppercase tracking-wider"
                  >
                    <span>View Care Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <span className="text-[11px] font-bold text-dark/50">
                    Sikandra Clinic
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
