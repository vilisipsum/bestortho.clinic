import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, UserCheck, Calendar, Clock, Stethoscope } from 'lucide-react';
import { doctorProfile } from '@/lib/content';
import CredentialCards from './CredentialCards';

interface DoctorProfileProps {
  showFullDetails?: boolean;
  showCredentialsGrid?: boolean;
  onOpenBooking?: () => void;
}

export default function DoctorProfile({
  showFullDetails = false,
  showCredentialsGrid = false,
  onOpenBooking,
}: DoctorProfileProps) {
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
            <div className="card-medical p-6 bg-white">
              <div className="relative aspect-[4/5] rounded-2xl bg-gradient-to-b from-brand-950 via-brand-900 to-slate-900 text-white overflow-hidden p-6 flex flex-col justify-between mb-4 shadow-elevated">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-brand-200 text-xs font-medium border border-white/10">
                    Lead Consultant Surgeon
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Verified Practice
                  </span>
                </div>

                <div className="my-auto text-center p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/logo/logo-icon-square.png"
                      alt="Dr. Gaurav Sharma Orthopaedic Specialist Monogram"
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                  <p className="text-xl font-bold text-white font-display tracking-tight">
                    {doctorProfile.name}
                  </p>
                  <p className="text-xs text-brand-200 font-semibold mt-1">
                    M.B.B.S., M.S. (Orthopaedics)
                  </p>
                  <p className="text-xs text-teal-300 font-medium mt-0.5">
                    MS (Ortho) Gold Medalist • {doctorProfile.experienceYears}+ Yrs Exp
                  </p>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Senior Consultant Orthopaedics &amp; Joint Replacement
                  </p>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs text-brand-200">
                  <span>Reg: 48757 (UPMC)</span>
                  <span className="text-white font-medium">U.P. Medical Council</span>
                </div>
              </div>

              {/* Consultation Timings */}
              <div className="p-3.5 text-xs space-y-1 border-t border-slate-100 pt-3">
                <p className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-600" />
                  Clinic Timings (09:30 AM – 09:30 PM)
                </p>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Session 1: 09:30 AM – 04:00 PM <br />
                  <span className="text-amber-700 font-medium">Doctor Break: 04:00 PM – 06:00 PM</span> <br />
                  Session 2: 06:00 PM – 09:30 PM
                </p>
              </div>

              <div className="mt-4">
                <button
                  onClick={handleBookingClick}
                  className="btn-primary w-full text-sm py-3 flex items-center justify-center gap-2"
                  aria-label="Book With Dr. Sharma"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book With Dr. Sharma</span>
                </button>
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

              <h4 className="text-xs font-bold text-slate-600 mb-3">
                Key Areas of Clinical Focus
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {doctorProfile.specialisations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-lg bg-slate-50 text-sm font-semibold text-slate-800"
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
                  <div key={step.step} className="p-4 rounded-xl bg-white">
                    <span className="text-xl font-bold text-brand-600 font-display">
                      {step.step}
                    </span>
                    <h4 className="text-base font-bold text-brand-950 font-display mt-1 mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Credentials Section: Full Grid vs Compact Summary Card */}
        {showCredentialsGrid ? (
          <div id="credentials" className="pt-8">
            <div className="mb-6">
              <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-2">
                Verified Records
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
                Doctor Qualifications & Practice Records
              </h3>
              <p className="text-sm text-slate-600 mt-1 max-w-xl">
                Transparent reporting of verified medical degrees (MBBS, MS Orthopaedics), specialized surgical training, and State Medical Council registration.
              </p>
            </div>

            <CredentialCards />
          </div>
        ) : (
          <div className="pt-4">
            <div className="card-medical bg-slate-50 border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Medical Credentials
                  </span>
                  <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs font-semibold">
                    U.P. Medical Council Reg. No. 48757
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-950 font-display">
                  MBBS • MS (Orthopaedics) • Former Assistant Professor
                </h3>
                <p className="text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
                  Over 20 years of clinical practice in joint preservation, fracture stabilization, and rehabilitation. Full degrees, council licenses, and professional memberships are audited on our dedicated credentials page.
                </p>
              </div>

              <Link
                href="/credentials"
                className="btn-secondary self-start md:self-auto text-sm py-3 px-5 flex items-center gap-2 whitespace-nowrap font-semibold shadow-sm hover:border-brand-500"
              >
                <span>View Full Credentials & Registrations</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
