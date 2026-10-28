import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Patient Media & Informed Consent Policy | Dr. Gaurav Sharma Clinic',
  description: 'Informed consent protocols and patient privacy ethics governing case recordings and educational media.',
  alternates: {
    canonical: `${siteConfig.domain}/consent`,
  },
};

import Header from '@/components/Header';
import { ShieldCheck, FileCheck, EyeOff, AlertCircle, HeartHandshake } from 'lucide-react';

export default function ConsentPolicyPage() {
  return (
    <>
      <Header />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs mb-3">
            Clinical Ethics Standard
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display mb-4">
            Patient Media & Informed Consent Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Dr. Gaurav Sharma Orthopaedic Clinic • Sikandra, Agra
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="card-medical bg-white p-8 sm:p-12 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <div className="p-4 rounded-xl bg-emerald-50/80 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-800 font-medium">
                <strong>Ethics First:</strong> We believe patient dignity, privacy, and informed consent are fundamental to trustworthy medical practice. We do not hire actors, generate synthetic patient testimonials, or publish clinical experiences without explicit consent.
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                1. Informed Consent Requirements
              </h2>
              <p className="mb-3">
                Prior to publishing any patient story, recovery photograph, audio statement, or educational video featuring a patient on the clinic website (bestortho.clinic), the clinic requires:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>A signed physical Informed Consent Form on clinic record</li>
                <li>Explicit indication of which media formats (text, portrait, X-ray, video) the patient authorizes</li>
                <li>Verification that the patient has completed the documented treatment phase</li>
                <li>Confirmation of whether the patient wishes to use their full name, initials, or an anonymized pseudonym</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                2. Prohibition of Surgical Voyeurism
              </h2>
              <p>
                Graphic intra-operative surgical recordings are strictly prohibited on the public landing sections of this website. If any surgical footage is utilized for peer education or specialist training, it is placed in gated educational environments preceded by clear anatomical warnings and ethical disclosures.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                3. Right to Revoke Consent
              </h2>
              <p>
                Every patient possesses an absolute right to withdraw consent at any time. If a patient or legal representative requests the modification or removal of their narrative, photograph, or quote, our digital team will redact or permanently remove the content within 48 business hours upon receipt of written notice.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                4. Authentic Clinic Photography Standards
              </h2>
              <p>
                We do not use generic smiling stock doctor imagery to simulate clinic procedures. During technical staging and development, placeholder markers labeled <strong>PHOTO NEEDED</strong> are utilized until verified clinic photography is formally uploaded.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                5. How to Submit or Revoke Consent
              </h2>
              <p>
                For questions regarding patient media policies or to submit a consent revocation request, contact our clinic privacy desk:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-slate-50/80 text-xs sm:text-sm font-semibold text-slate-800 space-y-1">
                <p>Ethics & Privacy Coordinator: Dr. Gaurav Sharma Orthopaedic Clinic</p>
                <p>Clinic Address: {siteConfig.primaryAddress.street}, {siteConfig.locationSummary}</p>
                <p>Contact: {siteConfig.phoneDisplay} • Email: care@bestortho.clinic</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
