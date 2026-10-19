'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CredentialCards from '@/components/CredentialCards';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import { doctorProfile, hospitalAffiliations, siteConfig } from '@/lib/content';
import { Award, ShieldCheck, GraduationCap, Building2, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CredentialsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsBookingOpen(true);
      window.dispatchEvent(new CustomEvent('booking-modal-opened'));
    };
    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Page Header Banner */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified Practice Records
            </span>
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs font-semibold">
              U.P. Medical Council Reg. No. 48757
            </span>
            <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-xs">
              Sikandra, Agra
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display mb-4">
            Doctor Qualifications & Practice Records
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal max-w-3xl leading-relaxed">
            Transparent reporting of verified medical degrees (MBBS, MS Orthopaedics), specialized arthroscopy surgical training, 
            academic teaching tenure, and State Medical Council registration for Dr. Gaurav Sharma.
          </p>
        </div>
      </section>

      {/* Main Credentials Grid */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
              Academic Degrees & Official Registrations
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              All undergraduate, post-graduate, and licensing certificates are verified and registered with national and state medical statutory bodies.
            </p>
          </div>

          <CredentialCards />
        </div>
      </section>

      {/* Academic Faculty & Clinical History */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Academic Faculty Experience */}
            <div className="card-medical p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700 font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="pill-badge bg-indigo-50 text-indigo-700 border-indigo-200 text-xs">
                      Teaching Tenure
                    </span>
                    <h3 className="text-xl font-bold text-brand-950 font-display mt-0.5">
                      Academic Faculty Background
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <p className="font-bold text-brand-950 text-base">Former Assistant Professor (Orthopaedics)</p>
                    <p className="text-xs font-semibold text-brand-700 mt-0.5">F.H. Medical College & Hospital, Tundla</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Served as Assistant Professor responsible for clinical teaching of undergraduate and post-graduate medical trainees, conducting surgical training workshops, and presiding over diagnostic orthopaedic procedures.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <p className="font-bold text-brand-950 text-base">Specialized MS Orthopaedics Thesis</p>
                    <p className="text-xs font-semibold text-brand-700 mt-0.5">Bundelkhand University / M.L.B. Medical College, Jhansi (2008)</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed italic">
                      &quot;Diagnostic Arthroscopy of Knee Joint and Arthroscopic Lavage&quot;
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Foundational scientific research establishing early clinical protocols in minimally invasive joint care and knee joint preservation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Academic faculty record verified on official institutional file.
              </div>
            </div>

            {/* Hospital Consultant History */}
            <div className="card-medical p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-700 font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
                      Consultant Practice
                    </span>
                    <h3 className="text-xl font-bold text-brand-950 font-display mt-0.5">
                      Hospital Consultant Appointments
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  {hospitalAffiliations.map((hosp) => (
                    <div key={hosp.id} className="p-4 rounded-xl bg-white border border-slate-200/80">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-bold text-brand-950 text-sm">{hosp.name}</p>
                          <p className="text-xs font-semibold text-brand-700 mt-0.5">{hosp.role}</p>
                        </div>
                        <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-[10px] whitespace-nowrap">
                          {hosp.location}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1.5">{hosp.opdSchedule}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Inpatient surgical admissions and emergency interventions managed through accredited partner hospitals.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Advanced Surgical & Cadaveric Workshops */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
              Advanced Surgical & Arthroscopy Training
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Continuous medical education and advanced hands-on surgical workshops attended throughout Dr. Sharma&apos;s clinical career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card-medical p-5 bg-white">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Arthroscopy</span>
              <h4 className="font-bold text-brand-950 text-sm mt-1 mb-2 font-display">
                Cadaveric Arthroscopy Workshop
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Arthroscopic Society (IAS), 5th Annual Conference, Kolkata. Advanced hands-on diagnostic and operative keyhole techniques.
              </p>
            </div>

            <div className="card-medical p-5 bg-white">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Trauma</span>
              <h4 className="font-bold text-brand-950 text-sm mt-1 mb-2 font-display">
                Fracture Neck Femur Workshop
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Orthopaedic Association, 25th State Conference. Complex hip and lower extremity fracture stabilization.
              </p>
            </div>

            <div className="card-medical p-5 bg-white">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Spine</span>
              <h4 className="font-bold text-brand-950 text-sm mt-1 mb-2 font-display">
                Spinal Instrumentation Workshop
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                J.N. Medical College, AMU, Aligarh (UPOA). Modern posterior spinal fixation, pedicle screw instrumentation, and decompression.
              </p>
            </div>

            <div className="card-medical p-5 bg-white">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">International CME</span>
              <h4 className="font-bold text-brand-950 text-sm mt-1 mb-2 font-display">
                AAOS Education Program
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                American Academy of Orthopaedic Surgeons (AAOS). Trans-education curriculum covering international evidence-based surgical guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory & Medical Ethics Notice */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card-medical bg-slate-50 border border-slate-200 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 text-brand-700">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-brand-950 font-display">
                  Public Credential & Medical Ethics Standard
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  BestOrtho.clinic adheres strictly to National Medical Commission (NMC) ethical regulations and transparent credential disclosure. 
                  All academic records (MBBS from Dr. B.R. Ambedkar University, MS Orthopaedics from Bundelkhand University, and U.P. Medical Council Registration No. 48757) 
                  are available for verification. In accordance with medical ethics, no unsubstantiated surgical claims or promotional guarantees are published on this website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <BookingCTA onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
