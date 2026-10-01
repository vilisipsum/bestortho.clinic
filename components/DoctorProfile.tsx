import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, UserCheck, Calendar } from 'lucide-react';
import { doctorProfile } from '@/lib/content';
import CredentialCards from './CredentialCards';

interface DoctorProfileProps {
  showFullDetails?: boolean;
  onOpenBooking?: () => void;
}

export default function DoctorProfile({ showFullDetails = false, onOpenBooking }: DoctorProfileProps) {
  return (
    <section className="py-16 md:py-24 border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="pill-badge bg-accent-orange text-white">
                Orthopaedic Specialist
              </span>
              <span className="pill-badge bg-white text-dark">
                Sikandra, Agra
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
              Meet Dr. Gaurav Sharma
            </h2>
            <p className="text-base sm:text-lg text-dark/70 font-semibold mt-2">
              {doctorProfile.designation}
            </p>
          </div>

          {!showFullDetails && (
            <Link
              href="/about"
              className="btn-secondary self-start md:self-auto text-sm py-3 px-6 flex items-center gap-2"
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
            <div className="card-editorial bg-[#FFF8E7] p-6">
              <div className="relative aspect-[4/5] rounded-2xl border-2 border-dark bg-white overflow-hidden p-6 flex flex-col justify-between mb-4">
                <div className="flex items-center justify-between">
                  <span className="pill-badge bg-accent-lime text-dark text-[10px]">
                    Doctor Headshot
                  </span>
                  <span className="text-xs font-bold text-dark/60">Agra, UP</span>
                </div>

                <div className="my-auto text-center p-4 rounded-xl border-2 border-dashed border-dark/30 bg-[#FFF4D9]/60">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-accent-orange/20 border border-dark flex items-center justify-center">
                    <UserCheck className="w-6 h-6 text-accent-orange" />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded bg-dark text-white text-[10px] font-black uppercase tracking-wider mb-1">
                    PHOTO NEEDED
                  </span>
                  <p className="text-xs font-bold text-dark">
                    Verified Clinic Portrait
                  </p>
                  <p className="text-[11px] text-dark/60 mt-0.5">
                    Authentic photograph reserved for verified clinic upload.
                  </p>
                </div>

                <div className="border-t border-dark/10 pt-3">
                  <p className="font-black text-sm text-dark font-display">{doctorProfile.name}</p>
                  <p className="text-[11px] text-accent-orange font-bold">{doctorProfile.formalTitle}</p>
                </div>
              </div>

              {/* Consultation Timings Pill */}
              <div className="bg-white rounded-xl border-2 border-dark p-3 text-xs space-y-1">
                <p className="font-bold text-dark flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-lime"></span>
                  Consultation Timings
                </p>
                <p className="text-dark/70 text-[11px]">
                  Morning: 10:00 AM – 02:00 PM <br />
                  Evening: 05:30 PM – 08:30 PM
                </p>
              </div>

              <div className="mt-4">
                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="btn-accent-orange w-full text-sm py-3 flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book With Dr. Sharma</span>
                  </button>
                ) : (
                  <Link
                    href="/contact"
                    className="btn-accent-orange w-full text-sm py-3 flex items-center justify-center gap-2"
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
            <div className="card-editorial">
              <h3 className="text-2xl font-black text-dark font-display mb-4">
                Clinical Approach & Consultation Standard
              </h3>
              <p className="text-base sm:text-lg text-dark/80 leading-relaxed mb-6 font-normal">
                {doctorProfile.summary}
              </p>

              <h4 className="text-sm font-black uppercase tracking-wider text-dark/70 mb-3">
                Key Areas of Clinical Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {doctorProfile.specialisations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl border border-dark/15 bg-[#FFF4D9]/40 text-sm font-bold text-dark"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-orange flex-shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Philosophy Steps */}
            <div className="card-cream">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="pill-badge bg-accent-lime text-dark mb-1">
                    Philosophy
                  </span>
                  <h3 className="text-2xl font-black text-dark font-display">
                    How We Structure Your Care
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {doctorProfile.philosophy.map((step) => (
                  <div key={step.step} className="p-4 rounded-2xl bg-white border-2 border-dark shadow-hard-sm">
                    <span className="text-2xl font-black text-accent-orange font-display">
                      {step.step}
                    </span>
                    <h4 className="text-base font-black text-dark font-display mt-1 mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs text-dark/70 leading-relaxed">
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
            <span className="pill-badge bg-accent-blue text-white mb-2">
              Verified Records
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-dark font-display">
              Doctor Qualifications & Practice Records
            </h3>
            <p className="text-sm text-dark/70 mt-1 max-w-2xl">
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
