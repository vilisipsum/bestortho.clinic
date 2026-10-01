import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, UserCheck, Calendar, Clock, Stethoscope } from 'lucide-react';
import { doctorProfile } from '@/lib/content';
import CredentialCards from './CredentialCards';

interface DoctorProfileProps {
  showFullDetails?: boolean;
  onOpenBooking?: () => void;
}

export default function DoctorProfile({ showFullDetails = false, onOpenBooking }: DoctorProfileProps) {
  return (
    <section className="py-16 md:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200">
                Orthopaedic Specialist
              </span>
              <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200">
                Sikandra, Agra
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
              Meet Dr. Gaurav Sharma
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium mt-2">
              {doctorProfile.designation}
            </p>
          </div>

          {!showFullDetails && (
            <Link
              href="/about"
              className="btn-secondary self-start md:self-auto text-sm py-2.5 px-5 flex items-center gap-2"
            >
              <span>View Full Doctor Profile</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Doctor Summary & Portrait Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          
          {/* Authentic Portrait Card (Marked PHOTO NEEDED per strict instructions) */}
          <div className="lg:col-span-4">
            <div className="card-medical p-6 bg-slate-50 border border-slate-200">
              <div className="relative aspect-[4/5] rounded-2xl border border-slate-200 bg-white overflow-hidden p-6 flex flex-col justify-between mb-4 shadow-subtle">
                <div className="flex items-center justify-between">
                  <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-[10px]">
                    Doctor Headshot
                  </span>
                  <span className="text-xs font-medium text-slate-500">Agra, UP</span>
                </div>

                <div className="my-auto text-center p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-700">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-slate-800 text-white text-[10px] font-semibold uppercase tracking-wider mb-1">
                    PHOTO NEEDED
                  </span>
                  <p className="text-xs font-bold text-slate-900">
                    Verified Clinic Portrait
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Authentic photograph reserved for verified clinic upload.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <p className="font-bold text-sm text-brand-950 font-display">{doctorProfile.name}</p>
                  <p className="text-[11px] text-brand-700 font-semibold">{doctorProfile.formalTitle}</p>
                </div>
              </div>

              {/* Consultation Timings Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-3.5 text-xs space-y-1 shadow-subtle">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                  Consultation Timings
                </p>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Morning: 10:00 AM – 02:00 PM <br />
                  Evening: 05:30 PM – 08:30 PM
                </p>
              </div>

              <div className="mt-4">
                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="btn-primary w-full text-sm py-3 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book With Dr. Sharma</span>
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-sm py-3 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book With Dr. Sharma</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Bio & Clinical Focus */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full space-y-8">
            <div className="card-medical">
              <h3 className="text-2xl font-bold text-brand-950 font-display mb-4">
                Clinical Approach & Consultation Standard
              </h3>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
                {doctorProfile.summary}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Areas of Clinical Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {doctorProfile.specialisations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Philosophy Steps */}
            <div className="card-medical bg-slate-50 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-1">
                    Philosophy
                  </span>
                  <h3 className="text-2xl font-bold text-brand-950 font-display">
                    How We Structure Your Care
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {doctorProfile.philosophy.map((step) => (
                  <div key={step.step} className="p-4 rounded-xl bg-white border border-slate-200 shadow-subtle">
                    <span className="text-xl font-bold text-brand-600 font-display">
                      {step.step}
                    </span>
                    <h4 className="text-base font-bold text-brand-950 font-display mt-1 mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Credentials Grid */}
        <div id="credentials" className="pt-8">
          <div className="mb-6">
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-2">
              Verified Records
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
              Doctor Qualifications & Practice Records
            </h3>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Transparent reporting of medical degrees, training background, and clinical council registration. 
              Unverified academic records remain tagged until certificate audit is completed.
            </p>
          </div>

          <CredentialCards />
        </div>

      </div>
    </section>
  );
}
