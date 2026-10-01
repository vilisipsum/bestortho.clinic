import React from 'react';
import { AlertTriangle, Phone, ShieldAlert, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/content';

export default function EmergencyNotice() {
  return (
    <div id="emergency" className="my-8 p-6 rounded-2xl bg-amber-50/70 border border-amber-200/90 shadow-subtle">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-11 h-11 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0 text-amber-800">
          <AlertTriangle className="w-6 h-6" />
        </div>
        
        <div className="space-y-2 flex-grow">
          <div className="flex items-center gap-2">
            <span className="pill-badge bg-amber-100 text-amber-900 border-amber-200 text-[10px] font-bold">
              Critical Medical Advisory
            </span>
            <span className="text-xs font-bold uppercase text-slate-700 tracking-wider">
              Emergency & Trauma Protocol
            </span>
          </div>

          <h4 className="text-lg font-bold text-slate-900 font-display">
            When to Seek Immediate Emergency Hospital Trauma Care
          </h4>

          <p className="text-sm text-slate-700 leading-relaxed">
            {siteConfig.emergencyPolicy}
          </p>

          <div className="pt-2 text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">
              Proceed immediately to the nearest tertiary emergency department if you observe:
            </p>
            <ul className="list-disc list-inside space-y-0.5 pl-1">
              <li>Open fractures where bone has broken through the skin</li>
              <li>Sudden loss of pulse, severe coldness, or blue discoloration in fingers or toes</li>
              <li>High-velocity vehicular accidents with head, chest, or spine involvement</li>
              <li>Inability to move limbs following a high fall</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
