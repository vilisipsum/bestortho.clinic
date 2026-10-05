'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '@/lib/content';

interface MobileActionBarProps {
  onOpenBooking?: () => void;
}

export default function MobileActionBar({ onOpenBooking }: MobileActionBarProps) {
  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
      return;
    }

    if (typeof window !== 'undefined') {
      let handled = false;
      const handleAck = () => { handled = true; };
      window.addEventListener('booking-modal-opened', handleAck, { once: true });
      window.dispatchEvent(new CustomEvent('open-booking-modal'));

      setTimeout(() => {
        window.removeEventListener('booking-modal-opened', handleAck);
        if (!handled) {
          if (window.location.pathname === '/contact') {
            const formEl = document.querySelector('form');
            if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.location.href = '/contact';
          }
        }
      }, 50);
    }
  };

  return (
    <aside 
      aria-label="Quick Contact Actions"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-elevated"
    >
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        {/* Call Direct */}
        <a
          href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 transition-colors active:scale-95"
          aria-label={`Call Dr. Gaurav Sharma Clinic at ${siteConfig.phoneDisplay}`}
        >
          <Phone className="w-5 h-5 text-brand-700 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Call Direct</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-900 transition-colors active:scale-95"
          aria-label="Message Dr. Gaurav Sharma Clinic on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight text-emerald-800">WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <button
          type="button"
          onClick={handleBooking}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-900 hover:bg-brand-950 text-white transition-colors active:scale-95 shadow-sm"
          aria-label="Book Orthopaedic Consultation"
        >
          <Calendar className="w-5 h-5 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Book Visit</span>
        </button>
      </div>
    </aside>
  );
}
