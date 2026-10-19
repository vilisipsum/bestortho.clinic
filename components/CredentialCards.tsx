import React from 'react';
import { Award, CheckCircle2, Clock, FileCheck, ShieldCheck, GraduationCap, Stethoscope, BookOpen } from 'lucide-react';
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
                    {cred.year && <p className="text-xs text-slate-500 font-medium">{cred.year}</p>}
                    {cred.registrationNumber && (
                      <p className="text-xs font-bold text-brand-800 mt-1">{cred.registrationNumber}</p>
                    )}
                  </div>
                ) : (
                  <div className="p-3.5 rounded-lg bg-slate-50 text-xs text-slate-600 space-y-1">
                    <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                      <FileCheck className="w-3.5 h-3.5 text-brand-600" />
                      <span>Onboarding Record</span>
                    </div>
                    <p className="text-sm font-medium text-slate-900 leading-normal">
                      {cred.institution}
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

        {/* Academic & Teaching Faculty Card */}
        <div className="card-medical flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-700">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>

            <h4 className="text-xl font-bold text-brand-950 font-display mb-1">
              Academic Faculty
            </h4>
            <p className="text-sm font-semibold text-indigo-700 mb-3">
              Former Assistant Professor (Orthopaedics)
            </p>

            <div className="p-3.5 rounded-lg bg-slate-50 text-xs text-slate-600 space-y-1.5">
              <p className="font-semibold text-slate-800">
                F.H. Medical College & Hospital
              </p>
              <p className="text-xs text-slate-500">
                Clinical teaching background in orthopaedic surgery, postgraduate trainee instruction, and diagnostic arthroscopy.
              </p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
            Teaching & Hospital Consultant Background
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

      {/* Verified Professional Memberships Banner */}
      <div className="card-medical bg-slate-50 border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs mb-1.5 inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Verified Professional Associations
            </span>
            <h4 className="text-lg font-bold text-brand-950 font-display">
              Professional Society Memberships
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Official active memberships in national and state orthopaedic scientific associations.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {doctorProfile.memberships.map((membership, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-sm flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                <span>{membership.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
