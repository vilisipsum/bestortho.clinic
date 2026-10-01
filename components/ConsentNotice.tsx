import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Lock, EyeOff } from 'lucide-react';

export default function ConsentNotice() {
  return (
    <div className="card-cream p-6 sm:p-8 border-2 border-dark shadow-hard my-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-2xl bg-accent-lime border-2 border-dark flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-5 h-5 text-dark" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="pill-badge bg-white text-dark text-xs">
              Medical Ethics
            </span>
            <span className="text-xs font-bold text-dark/70 uppercase tracking-wider">
              Privacy & Informed Consent
            </span>
          </div>

          <h4 className="text-xl font-black text-dark font-display">
            Our Medical Media & Patient Data Policy
          </h4>

          <p className="text-sm text-dark/80 leading-relaxed">
            In strict compliance with medical ethics and the Medical Council guidelines, this website never publishes identifiable patient records, surgical videos, or personal narratives without verified, explicit, written informed consent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-dark/80">
            <div className="p-3 rounded-xl bg-white border border-dark/15 flex items-center gap-2">
              <Lock className="w-4 h-4 text-accent-orange flex-shrink-0" />
              <span>No online record uploads without access-controlled encryption</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-dark/15 flex items-center gap-2">
              <EyeOff className="w-4 h-4 text-accent-blue flex-shrink-0" />
              <span>Anonymized details upon patient request</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-dark/15 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-accent-lime flex-shrink-0" />
              <span>Right to withdraw consent at any time</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/consent"
              className="text-xs font-black text-dark hover:text-accent-orange underline decoration-2 underline-offset-2 inline-flex items-center gap-1"
            >
              <span>Read Full Patient Media & Consent Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
