import React from 'react';
import { AlertTriangle, Phone, ShieldAlert, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/content';

export default function EmergencyNotice() {
  return (
    <div id="emergency" className="my-8 p-6 rounded-3xl bg-white border-2 border-dark shadow-hard">
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-accent-orange/20 border-2 border-dark flex items-center justify-center flex-shrink-0 text-accent-orange">
          <AlertTriangle className="w-6 h-6" />
        </div>
        
        <div className="space-y-2 flex-grow">
          <div className="flex items-center gap-2">
            <span className="pill-badge bg-accent-orange text-white text-[10px]">
              Critical Medical Advisory
            </span>
            <span className="text-xs font-black uppercase text-dark tracking-wider">
              Emergency & Trauma Protocol
            </span>
          </div>

          <h4 className="text-lg font-black text-dark font-display">
            When to Seek Immediate Emergency Hospital Trauma Care
          </h4>

          <p className="text-sm text-dark/80 leading-relaxed">
            {siteConfig.emergencyPolicy}
          </p>

          <div className="pt-2 text-xs text-dark/70 space-y-1">
            <p className="font-bold text-dark">
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
