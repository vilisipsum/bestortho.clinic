import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { siteConfig, doctorProfile } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white border-t-4 border-dark mt-20">
      {/* Top Banner Accent */}
      <div className="bg-accent-orange py-3 px-4 border-b-2 border-dark text-white text-center font-bold text-sm tracking-wide">
        Evidence-Conscious Orthopaedic Consultations • Sikandra, Agra • Consultation by Appointment
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Practice Branding & Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-lime border-2 border-white flex items-center justify-center font-black text-dark text-xl shadow-hard-sm">
                  +
                </div>
                <span className="text-2xl font-black tracking-tight text-white font-display">
                  BestOrtho.clinic
                </span>
              </div>
              <h3 className="text-lg font-bold text-accent-lime mb-2">
                {siteConfig.practiceName}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Consultant Orthopaedic & Musculoskeletal Specialist practice in Sikandra, Agra. 
                Dedicated to clinical examination, diagnostic clarity, and rehabilitation structured around your individual recovery goals.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-white/90">
              <ShieldCheck className="w-4 h-4 text-accent-lime" />
              <span>Verified Local Medical Practice</span>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="text-base font-black uppercase tracking-wider text-accent-lime mb-4">
              Clinic Contact & Hours
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/90">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">{siteConfig.primaryAddress.street}</p>
                  <p className="text-white/70">{siteConfig.locationSummary}</p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent-lime font-bold mt-1 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-5 h-5 text-accent-orange flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-white hover:text-accent-lime transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-accent-lime flex-shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-white hover:text-accent-lime transition-colors"
                >
                  WhatsApp Consultation Enquiry
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10 mt-2">
                <Clock className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-white">OPD Consultation Hours:</p>
                  {siteConfig.timings.map((t, idx) => (
                    <p key={idx} className="text-white/80">
                      <span className="font-medium text-white/90">{t.days}:</span> {t.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-black uppercase tracking-wider text-accent-lime mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Dr. Sharma
                </Link>
              </li>
              <li>
                <Link href="/#areas-of-care" className="text-white/80 hover:text-white transition-colors">
                  Areas of Care
                </Link>
              </li>
              <li>
                <Link href="/patient-stories" className="text-white/80 hover:text-white transition-colors">
                  Patient Stories
                </Link>
              </li>
              <li>
                <Link href="/clinic" className="text-white/80 hover:text-white transition-colors">
                  Clinic & Timings
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-white/80 hover:text-white transition-colors">
                  Patient FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-base font-black uppercase tracking-wider text-accent-lime mb-4">
              Legal & Safety
            </h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white/80 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/consent" className="text-white/80 hover:text-white transition-colors">
                  Patient Media & Consent
                </Link>
              </li>
              <li>
                <Link href="/contact#emergency" className="text-accent-orange hover:underline transition-colors">
                  Emergency Trauma Note
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left max-w-3xl leading-relaxed">
            <strong className="text-white/80">Clinical & Regulatory Notice:</strong> Content on BestOrtho.clinic is published for general educational reference and practice orientation. It is not an alternative to in-person medical evaluation. Outpatient appointments do not replace emergency hospital trauma resuscitation.
          </p>
          <p className="font-bold text-white/90 whitespace-nowrap">
            © {currentYear} BestOrtho.clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
