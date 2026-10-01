import React from 'react';
import { Building2, MapPin, Clock, ShieldCheck, Info } from 'lucide-react';
import { hospitalAffiliations, HospitalAffiliation } from '@/lib/content';

export default function HospitalAffiliations() {
  const approvedAffiliations = hospitalAffiliations.filter((h) => h.approved);

  return (
    <section className="py-16 md:py-20 bg-[#FFF8E7] border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-white text-dark mb-3">
            Institutional Practice
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
            Hospital Affiliations & Inpatient Links
          </h2>
          <p className="text-base sm:text-lg text-dark/70 font-semibold mt-2">
            Where advanced surgical theatres, emergency trauma admission, or inpatient orthopaedic care is coordinated in Agra.
          </p>
        </div>

        {/* Affiliations Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approvedAffiliations.map((hosp: HospitalAffiliation) => (
            <div
              key={hosp.id}
              className="card-editorial bg-white p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 border-2 border-dark flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent-blue" />
                  </div>

                  {/* Logo Policy: Strictly gated behind hospitalLogoApproved */}
                  {hosp.hospitalLogoApproved ? (
                    <span className="text-xs font-bold text-dark">Verified Brand</span>
                  ) : (
                    <span className="pill-badge bg-white text-dark text-[10px]">
                      Verified Affiliation
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-dark font-display mb-1">
                  {hosp.name}
                </h3>
                <p className="text-sm font-bold text-accent-orange mb-4">
                  {hosp.role}
                </p>

                <div className="space-y-3 text-sm text-dark/80 pt-2 border-t border-dark/10">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-dark/60 mt-0.5 flex-shrink-0" />
                    <span>{hosp.location}</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-dark/60 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-dark">Schedule & Access:</p>
                      <p className="text-xs text-dark/70">{hosp.opdSchedule}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-dark/10 text-[11px] text-dark/60 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-lime" />
                <span>Verified clinical associate privilege in Agra</span>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance Note */}
        <div className="mt-8 p-4 rounded-2xl bg-white/70 border border-dark/20 flex items-center gap-3 text-xs text-dark/70">
          <Info className="w-4 h-4 text-accent-blue flex-shrink-0" />
          <span>
            Institutional logos and trade dress are displayed strictly where express administrative permission has been granted, per medical ethics and clinic onboarding guidelines.
          </span>
        </div>

      </div>
    </section>
  );
}
