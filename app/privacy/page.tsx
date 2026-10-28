import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dr. Gaurav Sharma Orthopaedic Clinic',
  description: 'Privacy policy and patient data security standards for Dr. Gaurav Sharma Orthopaedic Clinic in Sikandra, Agra.',
  alternates: {
    canonical: `${siteConfig.domain}/privacy`,
  },
};

import Header from '@/components/Header';
import { ShieldCheck, Lock, EyeOff, FileText, UserCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <Header />

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs mb-3">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display mb-4">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Last Updated: January 2025 • Dr. Gaurav Sharma Orthopaedic Clinic ({siteConfig.brandName})
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="card-medical bg-white p-8 sm:p-12 space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
            
            <div className="p-4 rounded-xl bg-blue-50/70 flex items-start gap-3">
              <Lock className="w-5 h-5 text-brand-700 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium text-slate-800">
                <strong>Our Privacy Commitment:</strong> We respect patient confidentiality above all else. This website is an educational and appointment coordination portal. We do not sell patient data, engage in tracking advertising, or collect unnecessary personal medical history through web forms.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                When you use our online consultation booking form or message our clinic through phone or WhatsApp, we collect only minimal administrative details required to schedule your visit:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Full patient name</li>
                <li>Contact phone number (for appointment confirmation and reminders)</li>
                <li>Preferred appointment date and consultation slot</li>
                <li>General reason for visit (e.g. knee discomfort, sports injury review)</li>
                <li>Optional voluntary notes describing symptom duration</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                2. Prohibition of Online Medical Record Uploads
              </h2>
              <p>
                In strict accordance with clinical data ethics, Dr. Gaurav Sharma Orthopaedic Clinic (bestortho.clinic) explicitly does not allow users to upload diagnostic radiological records, MRI scans, CT scans, blood test reports, or surgical history through public web forms. Diagnostic materials are reviewed strictly in-person within the secure, private clinic consultation room in Sikandra, Agra.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                3. Purpose of Processing
              </h2>
              <p className="mb-3">
                Personal contact details provided to the clinic are used exclusively for:
              </p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li>Verifying and scheduling in-person outpatient appointments</li>
                <li>Communicating timing adjustments or cancellations</li>
                <li>Responding to direct patient questions submitted via WhatsApp or phone</li>
              </ul>
              <p className="mt-3">
                We never rent, sell, monetize, or transfer your contact information to third-party commercial databases, pharmaceutical marketers, or advertising brokers.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                4. Patient Stories and Media Consent
              </h2>
              <p>
                Any patient narrative, testimonial quote, or clinical case history published on this website appears solely after explicit, written, informed consent has been obtained from the patient or legal guardian. Identifying details are modified or anonymized where requested.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                5. Data Retention & Security
              </h2>
              <p>
                Online appointment requests are reviewed by our clinic desk and purged periodically from web server logs. Physical medical records created during in-clinic doctor consultations are securely preserved in accordance with standard medical regulatory guidelines under the supervision of Dr. Gaurav Sharma.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mb-3">
                6. Contact for Privacy Inquiries
              </h2>
              <p>
                If you have questions regarding our privacy practices or wish to update or withdraw any information, please reach out to our clinic administration:
              </p>
              <div className="mt-3 p-4 rounded-xl bg-slate-50/80 text-xs sm:text-sm font-semibold text-slate-800 space-y-1">
                <p>Clinic Administration: Dr. Gaurav Sharma Orthopaedic Clinic</p>
                <p>Address: {siteConfig.primaryAddress.street}, {siteConfig.locationSummary}</p>
                <p>Phone: {siteConfig.phoneDisplay} • Email: {siteConfig.email}</p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
