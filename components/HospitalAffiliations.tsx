import React from 'react';
import { Building2, MapPin, Clock, ShieldCheck, Info } from 'lucide-react';
import { hospitalAffiliations, HospitalAffiliation } from '@/lib/content';

export default function HospitalAffiliations() {
  const approvedAffiliations = hospitalAffiliations.filter((h) => h.approved);

  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-white text-brand-700 border-slate-200 mb-3 shadow-subtle">
            Institutional Practice
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            Hospital Affiliations & Inpatient Links
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-2">
            Where advanced surgical theatres, emergency trauma admission, or inpatient orthopaedic care is coordinated in Agra.
          </p>
        </div>

        {/* Affiliations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approvedAffiliations.map((hosp: HospitalAffiliation) => (
            <div
              key={hosp.id}
              className="card-medical bg-white p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-brand-700">
                    <Building2 className="w-6 h-6" />
                  </div>

                  {/* Logo Policy: Strictly gated behind hospitalLogoApproved */}
                  {hosp.hospitalLogoApproved ? (
                    <span className="text-xs font-semibold text-slate-900">Verified Brand</span>
                  ) : (
                    <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200 text-xs">
                      Verified Affiliation
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-brand-950 font-display mb-1">
                  {hosp.name}
                </h3>
                <p className="text-sm font-semibold text-brand-700 mb-4">
                  {hosp.role}
                </p>

                <div className="space-y-3 text-sm text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <span>{hosp.location}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-slate-800">Schedule & Access:</p>
                      <p className="text-xs text-slate-500">{hosp.opdSchedule}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified clinical associate privilege in Agra</span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-slate-200 shadow-subtle flex items-center gap-3 text-xs text-slate-600">
          <Info className="w-4 h-4 text-brand-600 flex-shrink-0" />
          <span>
            Institutional logos and trade dress are displayed strictly where express administrative permission has been granted, per medical ethics and clinic onboarding guidelines.
          </span>
        </div>

      </div>
    </section>
  );
}
