import React from 'react';
import { Award, CheckCircle2, Clock, FileCheck, ShieldAlert, GraduationCap } from 'lucide-react';
import { doctorProfile, CredentialItem } from '@/lib/content';

export default function CredentialCards() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Core Qualifications Cards */}
        {doctorProfile.credentials.map((cred: CredentialItem) => {
          return (
            <div
              key={cred.id}
              className="card-editorial flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-orange/15 border-2 border-dark flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent-orange" />
                  </div>
                  {cred.approved ? (
                    <span className="pill-badge bg-accent-lime text-dark">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  ) : (
                    <span className="pill-badge bg-accent-lavender text-dark">
                      <Clock className="w-3.5 h-3.5" />
                      Verification In Progress
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-black text-dark font-display mb-1">
                  {cred.degree}
                </h4>
                {cred.field && (
                  <p className="text-sm font-bold text-accent-orange mb-3">
                    {cred.field}
                  </p>
                )}

                {/* Verification-gated content */}
                {cred.approved ? (
                  <div className="space-y-1 text-sm text-dark/80">
                    <p className="font-semibold text-dark">{cred.institution}</p>
                    {cred.year && <p className="text-xs text-dark/60">{cred.year}</p>}
                  </div>
                ) : (
                  <div className="p-3.5 rounded-xl bg-[#FFF8E7] border border-dark/20 text-xs text-dark/80 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-dark">
                      <FileCheck className="w-3.5 h-3.5 text-accent-blue" />
                      <span>Onboarding Record (Under Verification)</span>
                    </div>
                    <p className="text-[13px] font-semibold text-dark/90">
                      {cred.institution}
                    </p>
                    <p className="text-[11px] text-dark/60 italic">
                      Final certificate confirmation pending before public accreditation badge.
                    </p>
                  </div>
                )}
              </div>

              {cred.notes && (
                <div className="mt-4 pt-3 border-t border-dark/10 text-[11px] text-dark/60">
                  {cred.notes}
                </div>
              )}
            </div>
          );
        })}

        {/* Clinical Experience Card */}
        <div className="card-editorial flex flex-col justify-between bg-accent-lime/10">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-lime border-2 border-dark flex items-center justify-center">
                <Award className="w-6 h-6 text-dark" />
              </div>
              <span className="pill-badge bg-accent-lime text-dark">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active Practice
              </span>
            </div>

            <h4 className="text-xl font-black text-dark font-display mb-1">
              Clinical Experience
            </h4>
            <p className="text-sm font-bold text-dark/70 mb-3">
              Orthopaedics & Musculoskeletal Care
            </p>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-black text-dark font-display">
                {doctorProfile.experienceYears}+
              </span>
              <span className="text-sm font-bold text-dark/70 uppercase">Years Experience</span>
            </div>
            <p className="text-xs text-dark/80 leading-relaxed">
              Extensive outpatient musculoskeletal evaluation, fracture cast immobilization, conservative joint care, and post-operative recovery guidance.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-dark/10 text-[11px] text-dark/60 font-semibold">
            Based in Agra, Uttar Pradesh
          </div>
        </div>

        {/* State Medical Council Registration Card */}
        <div className="card-editorial flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/15 border-2 border-dark flex items-center justify-center">
                <ShieldAlert className="w-6 h-6 text-accent-blue" />
              </div>
              <span className="pill-badge bg-white text-dark">
                Official Registry
              </span>
            </div>

            <h4 className="text-xl font-black text-dark font-display mb-1">
              Medical Registration
            </h4>
            <p className="text-sm font-bold text-accent-blue mb-3">
              Uttar Pradesh Medical Council
            </p>

            <div className="p-3.5 rounded-xl bg-white border border-dark/20 text-xs text-dark/80 space-y-1.5">
              <p className="font-semibold text-dark">
                National Medical Commission / UPMC
              </p>
              <p className="text-xs text-dark/70">
                Registered Medical Practitioner in Orthopaedic Surgery. Full registration certificate record verified on clinic premises.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-dark/10 text-[11px] text-dark/60">
            Registration documents available for patient inspection at clinic reception.
          </div>
        </div>

        {/* Languages & Communication */}
        <div className="card-editorial flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-accent-pink/20 border-2 border-dark flex items-center justify-center">
                <span className="text-xl font-black text-dark">अ/A</span>
              </div>
              <span className="pill-badge bg-white text-dark">
                Consultation
              </span>
            </div>

            <h4 className="text-xl font-black text-dark font-display mb-1">
              Consultation Languages
            </h4>
            <p className="text-sm font-bold text-dark/70 mb-3">
              Clear & Compassionate Explanations
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {doctorProfile.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3.5 py-1.5 rounded-full border-2 border-dark bg-white font-bold text-xs text-dark shadow-hard-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-xs text-dark/80">
              Consultations conducted with clarity, ensuring patients and families fully understand diagnostic imaging without complex jargon.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-dark/10 text-[11px] text-dark/60">
            Bilingual consultations in Hindi & English
          </div>
        </div>

      </div>
    </div>
  );
}
