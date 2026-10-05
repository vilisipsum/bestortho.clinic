'use client';

import React from 'react';
import { 
  Stethoscope, 
  Scan, 
  CheckCircle, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  HeartPulse
} from 'lucide-react';
import Link from 'next/link';

interface PatientJourneyProps {
  onOpenBooking?: () => void;
}

export default function PatientJourney({ onOpenBooking }: PatientJourneyProps) {
  const steps = [
    {
      step: '01',
      title: 'Detailed Clinical Consultation',
      subtitle: 'Listening, History & Physical Examination',
      icon: Stethoscope,
      accent: 'bg-blue-50 text-brand-700',
      description: 'Your visit begins with an unhurried discussion of your symptoms, onset, everyday activity restrictions, and previous treatments. Dr. Sharma performs careful physical testing of joint range of motion, muscle strength, and ligament stability.',
      highlights: [
        'Unhurried symptom review & pain history',
        'Physical joint mobility & stability tests',
        'Discussion of personal occupational & athletic goals',
      ],
    },
    {
      step: '02',
      title: 'In-Depth Imaging & Diagnosis',
      subtitle: 'Physical Film Review & Plain-Language Explanation',
      icon: Scan,
      accent: 'bg-emerald-50 text-emerald-700',
      description: 'We examine your actual physical X-rays, MRI scans, and past investigation reports directly on the clinic light box. Rather than complex medical jargon, you receive a clear, anatomical explanation of what is causing your symptoms.',
      highlights: [
        'Direct review of your physical X-ray and MRI films',
        'Explanation in clear, accessible Hindi or English',
        'No repeat imaging requested unless clinically necessary',
      ],
    },
    {
      step: '03',
      title: 'Treatment & Recovery Pathway',
      subtitle: 'Joint Preservation First & Structured Follow-up',
      icon: HeartPulse,
      accent: 'bg-purple-50 text-purple-700',
      description: 'We prioritize joint-preserving, conservative care—including targeted medication, guided physiotherapy regimens, and activity modifications. Surgical solutions are discussed transparently only when conservative avenues have been exhausted.',
      highlights: [
        'Conservative management prioritized wherever viable',
        'Targeted home exercises & rehabilitation roadmap',
        'Transparent second opinions on surgical recommendations',
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="pill-badge bg-white text-brand-700 border-slate-200 text-xs shadow-sm">
              Your Clinic Visit
            </span>
            <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
              What to Expect
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            A Transparent, 3-Step Patient Journey
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
            From the moment you arrive at our Sikandra clinic to your long-term mobility milestones, your care follows a structured, evidence-conscious clinical pathway.
          </p>
        </div>

        {/* 3 Step Progression Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-bold text-slate-400">
                      STEP {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-700 mb-4">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Checklist of what's included */}
                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    Key Focus:
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Joint Preservation Philosophy Callout */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800">
                20+ Years Clinical Experience
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-brand-950 font-display">
              Conservative Management Before Surgery
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Dr. Gaurav Sharma believes that successful orthopaedic care begins with preserving natural joint function. Surgery is recommended only when indicated by objective clinical and imaging findings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
            {onOpenBooking ? (
              <button
                onClick={onOpenBooking}
                className="btn-primary text-xs py-3 px-6 flex items-center justify-center gap-2 font-bold shadow-sm whitespace-nowrap"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href="/contact"
                className="btn-primary text-xs py-3 px-6 flex items-center justify-center gap-2 font-bold shadow-sm whitespace-nowrap"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
