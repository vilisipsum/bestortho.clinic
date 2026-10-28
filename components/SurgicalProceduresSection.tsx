'use client';

import React, { useState } from 'react';
import { 
  Stethoscope,
  Play,
  X,
  Video, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Activity, 
  ShieldCheck, 
  ChevronRight,
  ArrowRight,
  Sparkles,
  Building2,
  FileCheck2
} from 'lucide-react';
import { surgicalProcedures, SurgicalProcedureItem } from '@/lib/content';

interface SurgicalProceduresSectionProps {
  onOpenBooking?: (reason?: string, area?: string) => void;
}

type TabType = 'all' | 'joint-replacement' | 'arthroscopy' | 'trauma-fractures' | 'daycare';

export default function SurgicalProceduresSection({ onOpenBooking }: SurgicalProceduresSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  const filteredProcedures = activeTab === 'all' 
    ? surgicalProcedures 
    : surgicalProcedures.filter(p => p.category === activeTab);

  const tabs: { key: TabType; label: string; count: number }[] = [
    { key: 'all', label: 'All Procedures', count: surgicalProcedures.length },
    { key: 'joint-replacement', label: 'Joint Replacement', count: surgicalProcedures.filter(p => p.category === 'joint-replacement').length },
    { key: 'arthroscopy', label: 'Arthroscopy & Sports', count: surgicalProcedures.filter(p => p.category === 'arthroscopy').length },
    { key: 'trauma-fractures', label: 'Trauma & Fractures', count: surgicalProcedures.filter(p => p.category === 'trauma-fractures').length },
    { key: 'daycare', label: 'Daycare Surgeries', count: surgicalProcedures.filter(p => p.category === 'daycare').length },
  ];

  const handleBooking = (procedure: SurgicalProcedureItem) => {
    if (onOpenBooking) {
      onOpenBooking(`Consultation: ${procedure.title}`, procedure.categoryLabel);
    }
  };

  return (
    <section id="surgeries" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="pill-badge bg-brand-50 text-brand-700 border-brand-200 text-xs">
              <Stethoscope className="w-3.5 h-3.5 text-brand-600" />
              Surgical Specialities
            </span>
            <span className="pill-badge bg-emerald-50 text-emerald-800 border-emerald-200 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Verified Operative Scope
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            Surgical Procedures &amp; Reconstructive Care
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
            Consultant orthopaedic surgical interventions performed by <strong className="text-brand-950 font-semibold">Dr. Gaurav Sharma</strong> (MS Orthopaedics, Gold Medalist). Structured around tissue-preserving techniques, modern biocompatible implants, and rapid early mobilization.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-brand-900 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProcedures.map((proc) => (
            <div
              key={proc.id}
              className="card-medical bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-brand-300 transition-all shadow-sm"
            >
              <div>
                {/* Card Header Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-800 border border-brand-100">
                    {proc.categoryLabel}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                    <span>{proc.inpatientStay}</span>
                  </span>
                </div>

                {/* Procedure Title & Summary */}
                <h3 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {proc.description}
                </p>

                {/* Indication Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
                  <span className="block text-[11px] font-bold text-slate-900 uppercase tracking-wider mb-1">
                    Clinical Indication (When Surgery Is Indicated)
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {proc.indication}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="mb-5 space-y-2">
                  <span className="block text-[11px] font-bold text-brand-800 uppercase tracking-wider mb-1.5">
                    Operative Highlights
                  </span>
                  {proc.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Mobilization Timeline Box */}
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs text-emerald-900 mb-6">
                  <span className="font-bold flex items-center gap-1.5 mb-1 text-emerald-950">
                    <Clock className="w-3.5 h-3.5 text-emerald-700" />
                    Recovery &amp; Mobilization Timeline
                  </span>
                  <p className="text-emerald-800 leading-relaxed text-[11.5px]">
                    {proc.recoveryTimeline}
                  </p>
                </div>
              </div>

              {/* Consultation Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleBooking(proc)}
                  className="btn-primary w-full text-xs sm:text-sm py-2.5 px-4 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Consult Dr. Sharma for this Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* NMC Clinical Ethics Statement */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0 text-brand-700 mt-0.5">
              <FileCheck2 className="w-4 h-4" />
            </div>
            <div>
              <strong className="text-slate-900 font-bold block mb-0.5">
                NMC Regulatory Compliance &amp; Surgical Ethics Notice
              </strong>
              <p className="leading-relaxed">
                Operative treatment is recommended strictly after in-person clinical examination, physical film review (X-rays/MRI), and when conservative joint preservation avenues have been exhausted or acute trauma mandates anatomical reconstruction.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenBooking && onOpenBooking('Second Opinion / Surgical Evaluation', 'General')}
            className="btn-secondary whitespace-nowrap text-xs py-2 px-4 shrink-0 flex items-center gap-1.5"
          >
            <span>Request Surgical Evaluation</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      </section>
  );
}
