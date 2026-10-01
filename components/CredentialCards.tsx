import React from 'react';
import { Award, CheckCircle2, Clock, FileCheck, ShieldAlert, GraduationCap, Stethoscope } from 'lucide-react';
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
              className="card-medical flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-brand-700">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  {cred.approved ? (
                    <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  ) : (
                    <span className="pill-badge bg-amber-50 text-amber-800 border-amber-200">
                      <Clock className="w-3.5 h-3.5" />
                      Verification In Progress
                    </span>
                  )}
                </div>

                <h4 className="text-xl font-bold text-brand-950 font-display mb-1">
                  {cred.degree}
                </h4>
                {cred.field && (
                  <p className="text-sm font-semibold text-brand-700 mb-3">
                    {cred.field}
                  </p>
                )}

                {/* Verification-gated content */}
                {cred.approved ? (
                  <div className="space-y-1 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">{cred.institution}</p>
                    {cred.year && <p className="text-xs text-slate-500">{cred.year}</p>}
                  </div>
                ) : (
                  <div className="p-3.5 rounded-lg bg-slate-50 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <FileCheck className="w-3.5 h-3.5 text-brand-600" />
                      <span>Onboarding Record (Under Verification)</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 leading-normal">
                      {cred.institution}
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      Final certificate confirmation pending before public accreditation badge.
                    </p>
                  </div>
                )}
              </div>

              {cred.notes && (
                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  {cred.notes}
                </div>
              )}
            </div>
          );
        })}

        {/* Clinical Experience Card */}
        <div className="card-medical flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Award className="w-6 h-6" />
              </div>
              <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Active Practice
              </span>
            </div>

            <h4 className="text-xl font-bold text-brand-950 font-display mb-1">
              Clinical Experience
            </h4>
            <p className="text-sm font-semibold text-slate-600 mb-3">
              Orthopaedics & Musculoskeletal Care
            </p>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-extrabold text-brand-950 font-display">
                {doctorProfile.experienceYears}+
              </span>
              <span className="text-sm font-semibold text-slate-500">Years Clinical Experience</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Extensive outpatient musculoskeletal evaluation, fracture cast immobilization, conservative joint care, and post-operative recovery guidance.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 font-medium">
            Based in Agra, Uttar Pradesh
          </div>
        </div>

        {/* State Medical Council Registration Card */}
        <div className="card-medical flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center text-sky-700">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200">
                Official Registry
              </span>
            </div>

            <h4 className="text-xl font-bold text-brand-950 font-display mb-1">
              Medical Registration
            </h4>
            <p className="text-sm font-semibold text-sky-700 mb-3">
              Uttar Pradesh Medical Council
            </p>

            <div className="p-3.5 rounded-lg bg-slate-50 text-xs text-slate-600 space-y-1.5">
              <p className="font-semibold text-slate-800">
                National Medical Commission / UPMC
              </p>
              <p className="text-xs text-slate-500">
                Registered Medical Practitioner in Orthopaedic Surgery. Full registration certificate record verified on clinic premises.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
            Registration documents available for patient inspection at clinic reception.
          </div>
        </div>

        {/* Languages & Communication */}
        <div className="card-medical flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700 font-bold">
                <span className="text-base font-bold">अ/A</span>
              </div>
              <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200">
                Bilingual Care
              </span>
            </div>

            <h4 className="text-xl font-bold text-brand-950 font-display mb-1">
              Consultation Languages
            </h4>
            <p className="text-sm font-semibold text-slate-600 mb-3">
              Clear & Compassionate Explanations
            </p>

            <div className="flex flex-wrap gap-2 mb-3">
              {doctorProfile.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 rounded-lg border border-slate-200 bg-slate-50 font-semibold text-xs text-slate-700"
                >
                  {lang}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Consultations conducted with clarity, ensuring patients and families fully understand diagnostic imaging without complex jargon.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
            Fluent Hindi & English consultations
          </div>
        </div>

      </div>
    </div>
  );
}
