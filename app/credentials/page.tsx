'use client';

import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import CredentialCards from '@/components/CredentialCards';
import BookingCTA from '@/components/BookingCTA';
import BookingModal from '@/components/BookingModal';
import { doctorProfile, siteConfig } from '@/lib/content';
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
                      Foundational scientific thesis establishing clinical protocols in minimally invasive keyhole joint examination, cartilage assessment, and arthroscopic knee preservation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <p className="font-bold text-brand-950 text-base">Arthroplasty & Joint Replacement Academics</p>
                    <p className="text-xs font-semibold text-brand-700 mt-0.5">Surgical Instruction & Postgraduate Case Conferences</p>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      Conducted postgraduate clinical instruction, surgical workshops, and clinical case conferences covering primary Total Knee Replacement (TKR), Total Hip Replacement (THR), and complex joint reconstructive biomechanics during medical college faculty tenure.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Academic faculty record verified on official institutional file.
              </div>
            </div>

            {/* Professional Memberships & Clinical Scope */}
            <div className="card-medical p-6 sm:p-8 bg-slate-50 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
                      Professional Societies
                    </span>
                    <h3 className="text-xl font-bold text-brand-950 font-display mt-0.5">
                      Associations & Clinical Experience
                    </h3>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-bold text-brand-950 text-sm">Indian Orthopaedic Association (IOA)</p>
                        <p className="text-xs font-semibold text-emerald-700 mt-0.5">Life Member • LM9633</p>
                      </div>
                      <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px] whitespace-nowrap">
                        Verified
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Active life membership in the premier national association for orthopaedic surgeons in India.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-bold text-brand-950 text-sm">Uttar Pradesh Orthopaedic Association</p>
                        <p className="text-xs font-semibold text-brand-700 mt-0.5">State Chapter Member</p>
                      </div>
                      <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-[10px] whitespace-nowrap">
                        UPOA
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Participation in state-level continuous surgical education and evidence-based orthopaedic guidelines.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-bold text-brand-950 text-sm">20+ Years Outpatient Musculoskeletal Care</p>
                        <p className="text-xs font-semibold text-slate-600 mt-0.5">Sikandra, Agra, Uttar Pradesh</p>
                      </div>
                      <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-[10px] whitespace-nowrap">
                        Active Practice
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      Dedicated clinical care in joint preservation, fracture reduction, knee & shoulder evaluation, and conservative recovery.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 text-xs text-slate-500">
                Official medical society registrations on active professional file.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="card-medical p-6 bg-white border border-slate-200">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Arthroplasty</span>
              <h4 className="font-bold text-brand-950 text-base mt-1 mb-2 font-display">
                Primary & Complex TKR Masterclass
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive training covering measured resection, gap balancing, severe angular deformity correction (varus/valgus &gt;15°), and constrained condylar knee (CCK) systems.
              </p>
            </div>

            <div className="card-medical p-6 bg-white border border-slate-200">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Hip Arthroplasty</span>
              <h4 className="font-bold text-brand-950 text-base mt-1 mb-2 font-display">
                Total Hip & Revision Arthroplasty
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uncemented and cemented cup/stem positioning, offset and leg-length restoration for avascular necrosis (AVN), and modular revision stem techniques for loose implants.
              </p>
            </div>

            <div className="card-medical p-6 bg-white border border-slate-200">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Arthroscopy</span>
              <h4 className="font-bold text-brand-950 text-base mt-1 mb-2 font-display">
                Cadaveric Arthroscopy Workshop
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Arthroscopic Society (IAS), 5th Annual Conference, Kolkata. Advanced hands-on diagnostic and operative keyhole techniques for knee and shoulder reconstruction.
              </p>
            </div>

            <div className="card-medical p-6 bg-white border border-slate-200">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Trauma & Pelvis</span>
              <h4 className="font-bold text-brand-950 text-base mt-1 mb-2 font-display">
                Fracture Neck Femur & Complex Trauma
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indian Orthopaedic Association, 25th State Conference. Complex hip, peri-articular, and lower extremity fracture stabilization and anatomical reduction.
              </p>
            </div>

            <div className="card-medical p-6 bg-white border border-slate-200">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">Spine Care</span>
              <h4 className="font-bold text-brand-950 text-base mt-1 mb-2 font-display">
                Spinal Instrumentation & Lumbar Decompression
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                J.N. Medical College, AMU, Aligarh (UPOA). Modern posterior spinal fixation, pedicle screw instrumentation, lumbar disc decompression, and sciatica triage.
              </p>
            </div>

            <div className="card-medical p-6 bg-white border border-slate-200">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">International CME</span>
              <h4 className="font-bold text-brand-950 text-base mt-1 mb-2 font-display">
                AAOS Comprehensive Curriculum
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                American Academy of Orthopaedic Surgeons (AAOS). Trans-education curriculum covering international evidence-based surgical guidelines and patient outcomes.
              </p>
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
