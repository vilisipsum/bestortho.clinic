import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight, Stethoscope } from 'lucide-react';
import { siteConfig, doctorProfile } from '@/lib/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-950 text-white mt-20">
      {/* Top Banner Accent */}
      <div className="bg-brand-900 py-3 px-4 text-brand-100 text-center font-medium text-xs sm:text-sm tracking-wide">
        Evidence-Conscious Orthopaedic Consultations • Sikandra, Agra • Consultation by Appointment
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Practice Branding & Summary */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center font-bold text-white shadow-sm">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white font-display">
                  BestOrtho.clinic
                </span>
              </div>
              <h3 className="text-base font-bold text-brand-200 mb-2">
                {siteConfig.practiceName}
              </h3>
              <p className="text-brand-100 text-sm leading-relaxed mb-6 font-normal max-w-sm">
                Consultant Orthopaedic & Musculoskeletal Specialist practice in Sikandra, Agra. 
                Dedicated to clinical examination, diagnostic clarity, and rehabilitation structured around your individual recovery goals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 mt-4">
              <a
                href={siteConfig.googleBusinessProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-brand-100 transition-colors"
                title="Verified Google Business Profile & Patient Reviews"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Google Verified Practice & Reviews</span>
                <ArrowUpRight className="w-3 h-3 text-brand-300" />
              </a>
              <a
                href={siteConfig.googleKnowledgeGraphUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-brand-100 transition-colors"
                title="Google Knowledge Graph Entity ID: /g/11cnc0vhf8"
              >
                <span>Knowledge Graph (/g/11cnc0vhf8)</span>
                <ArrowUpRight className="w-3 h-3 text-brand-300" />
              </a>
            </div>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-200 mb-4">
              Clinic Contact & Hours
            </h3>
            <div className="flex flex-col gap-3 text-sm text-brand-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">{siteConfig.primaryAddress.street}</p>
                  <p className="text-brand-100 text-xs mt-0.5">{siteConfig.locationSummary}</p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-2 text-xs text-brand-200 font-semibold">
                    <a
                      href={siteConfig.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 min-h-[44px] hover:underline hover:text-white transition-colors"
                    >
                      <span>Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="text-brand-400">•</span>
                    <a
                      href={siteConfig.googleBusinessProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 min-h-[44px] hover:underline hover:text-white transition-colors"
                    >
                      <span>Google Business Profile & Reviews</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="text-brand-400">•</span>
                    <a
                      href={siteConfig.googleKnowledgeGraphUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 min-h-[44px] hover:underline hover:text-white transition-colors"
                      title="Google Knowledge Graph ID: /g/11cnc0vhf8"
                    >
                      <span>Knowledge Graph (/g/11cnc0vhf8)</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-4 h-4 text-brand-300 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                  className="font-semibold text-white hover:text-brand-200 transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20Dr.%20Gaurav%20Sharma%20Clinic,%20I%20would%20like%20to%20enquire%20about%20a%20consultation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-emerald-300 transition-colors"
                >
                  WhatsApp Consultation Enquiry
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10 mt-2">
                <Clock className="w-4 h-4 text-brand-300 flex-shrink-0 mt-1" />
                <div className="text-xs space-y-1">
                  <p className="font-semibold text-white">OPD Consultation Hours:</p>
                  {siteConfig.timings.map((t, idx) => (
                    <p key={idx} className="text-brand-100">
                      <span className="font-medium text-white">{t.days}:</span> {t.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-200 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/about" className="text-brand-100 hover:text-white transition-colors">
                  About Dr. Sharma
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Credentials</span>
                </Link>
              </li>
              <li>
                <Link href="/#areas-of-care" className="text-brand-100 hover:text-white transition-colors">
                  Areas of Care
                </Link>
              </li>
              <li>
                <Link href="/patient-stories" className="text-brand-100 hover:text-white transition-colors">
                  Patient Stories
                </Link>
              </li>
              <li>
                <Link href="/clinic" className="text-brand-100 hover:text-white transition-colors">
                  Clinic & Timings
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-brand-100 hover:text-white transition-colors">
                  Patient FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-100 hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-brand-200 mb-4">
              Legal & Safety
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/privacy" className="text-brand-100 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-brand-100 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/consent" className="text-brand-100 hover:text-white transition-colors">
                  Patient Media & Consent
                </Link>
              </li>
              <li>
                <Link href="/contact#emergency" className="text-amber-300 hover:underline transition-colors">
                  Emergency Trauma Note
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Clinical Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-brand-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-center md:text-left max-w-md leading-relaxed">
            <strong className="text-white">Clinical & Regulatory Notice:</strong> Content on BestOrtho.clinic is published for general educational reference and practice orientation. It is not an alternative to in-person medical evaluation. Outpatient appointments do not replace emergency hospital trauma resuscitation.
          </p>
          <p className="font-semibold text-brand-100 whitespace-nowrap">
            © {currentYear} BestOrtho.clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
