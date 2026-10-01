import React from 'react';
import Header from '@/components/Header';
import { siteConfig } from '@/lib/content';
import { AlertTriangle, ShieldCheck, Scale } from 'lucide-react';

export default function TermsPage() {
  return (
    <>
      <Header />

      <section className="py-12 md:py-16 border-b border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs mb-3">
            Practice Terms
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display mb-4">
            Terms of Use & Medical Disclaimer
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Effective Date: January 2025 • BestOrtho.clinic (Dr. Gaurav Sharma Practice)
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="card-medical bg-white p-8 sm:p-12 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-800">
                <strong>CRITICAL MEDICAL NOTICE:</strong> Content on BestOrtho.clinic is for general health literacy and outpatient practice coordination. It is not an online diagnostic service, emergency triage channel, or prescription generator.
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                1. No Doctor-Patient Relationship via Website Browsing
              </h2>
              <p>
                Browsing this website, reading educational content, viewing videos, or submitting an online appointment enquiry does not create a formal, legally binding doctor-patient relationship. A clinical relationship begins only upon formal in-person clinical registration, clinical examination, and mutual agreement during a consultation at the clinic premises in Sikandra, Agra.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                2. Outpatient Scheduling & Emergency Situations
              </h2>
              <p>
                The appointment scheduling form is intended solely for non-urgent elective orthopaedic reviews. For severe limb trauma, open fractures with bleeding, loss of limb sensation, acute spinal injury, or high-speed collision trauma, do not wait for an online appointment response. Immediately transport the patient to the nearest accredited emergency hospital trauma centre.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                3. Verification of Clinical Qualifications
              </h2>
              <p>
                Dr. Gaurav Sharma practices as a qualified orthopaedic surgeon registered under Indian Medical Council regulations. Academic institutions, council registration numbers, and institutional privileges are subject to administrative review. We disclaim all exaggerated promotional representations and guarantee transparent records available at the clinic.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                4. Patient Stories and Realistic Outcomes
              </h2>
              <p>
                Case studies and patient narratives reflect individual clinical journeys and are published with informed consent. Musculoskeletal recovery timelines, mobility improvements, and treatment success depend strictly upon diagnosis severity, age, co-morbidities, and adherence to rehabilitation protocols. Past patient outcomes do not constitute a guarantee of identical results.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                5. Intellectual Property & Brand Integrity
              </h2>
              <p>
                The domain name <strong>BestOrtho.clinic</strong>, brand layout, logos, written educational materials, and practice designs are the exclusive property of Dr. Gaurav Sharma Orthopaedic Clinic and may not be reproduced, copied, or used for commercial medical promotion without written authorization.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                6. Governing Jurisdiction
              </h2>
              <p>
                Any legal notices, inquiries, or disputes arising from the use of this website or clinic consultation arrangements shall be governed exclusively by the laws of India and subject to the exclusive jurisdiction of the competent courts in Agra, Uttar Pradesh.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
