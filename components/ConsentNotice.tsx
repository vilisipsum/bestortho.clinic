import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck, Lock, EyeOff } from 'lucide-react';

export default function ConsentNotice() {
  return (
    <div className="card-medical bg-slate-50 border border-slate-200 p-6 sm:p-8 my-8">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-brand-700">
          <ShieldCheck className="w-5 h-5" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Medical Ethics
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Privacy & Informed Consent
            </span>
          </div>

          <h4 className="text-xl font-bold text-brand-950 font-display">
            Our Medical Media & Patient Data Policy
          </h4>

          <p className="text-sm text-slate-600 leading-relaxed">
            In strict compliance with medical ethics and the Medical Council guidelines, this website never publishes identifiable patient records, surgical videos, or personal narratives without verified, explicit, written informed consent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-600">
            <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-subtle">
              <Lock className="w-4 h-4 text-brand-600 flex-shrink-0" />
              <span>No online record uploads without access-controlled encryption</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-subtle">
              <EyeOff className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span>Anonymized details upon patient request</span>
            </div>
            <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center gap-2 shadow-subtle">
              <FileCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Right to withdraw consent at any time</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/consent"
              className="text-xs font-bold text-brand-700 hover:text-brand-900 underline decoration-1 underline-offset-2 inline-flex items-center gap-1"
            >
              <span>Read Full Patient Media & Consent Policy</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
