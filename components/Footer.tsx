import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, ArrowUpRight, Stethoscope, Video, ExternalLink } from 'lucide-react';
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
                <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                  <Image
                    src="/images/logo/logo-icon-square.png"
                    alt="Dr. Gaurav Sharma Orthopaedic Clinic"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-white font-display block leading-tight">
                    {siteConfig.practiceName}
                  </span>
                  <span className="text-xs text-brand-200 font-medium">
                    Orthopaedics &amp; Joint Replacement • bestortho.clinic
                  </span>
                </div>
              </div>
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-brand-100 transition-colors"
                title="Verified Google Business Profile & Patient Reviews"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Google Verified Practice</span>
                <ArrowUpRight className="w-3 h-3 text-brand-300" />
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 min-h-[38px] rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-brand-100 transition-colors"
                title="Open Clinic Location Directly on Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-300" />
                <span>Google Maps</span>
                <ArrowUpRight className="w-3 h-3 text-brand-300" />
              </a>
            </div>

            {/* Doctor Verified Video & Social Channels */}
            <div className="flex flex-wrap items-center gap-2 mt-2.5">
              <a
                href={siteConfig.socialLinks?.youtube || "https://youtu.be/LXH2a25uaQg"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-red-600/30 hover:bg-red-600/40 text-[11px] font-semibold text-red-200 transition-colors border border-red-500/30"
                title="Dr. Gaurav Sharma YouTube Channel"
              >
                <Video className="w-3 h-3 text-red-400" />
                <span>YouTube Guidance</span>
              </a>
              <a
                href={siteConfig.socialLinks?.instagram || "https://www.instagram.com/reel/DemOt09vxGa/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-pink-600/20 hover:bg-pink-600/30 text-[11px] font-semibold text-pink-200 transition-colors border border-pink-500/30"
                title="Dr. Gaurav Sharma on Instagram"
              >
                <span>Instagram</span>
              </a>
              <a
                href={siteConfig.socialLinks?.facebook || "https://www.facebook.com/share/v/1GigbxkjAP/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-[11px] font-semibold text-blue-200 transition-colors border border-blue-500/30"
                title="Dr. Gaurav Sharma on Facebook"
              >
                <span>Facebook</span>
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
                      title="Open Exact Clinic Location on Google Maps"
                    >
                      <MapPin className="w-3.5 h-3.5 text-brand-300" />
                      <span>Directions on Google Maps</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <span className="text-brand-400">•</span>
                    <a
                      href={siteConfig.googleBusinessProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 min-h-[44px] hover:underline hover:text-white transition-colors"
                      title="Google Business Profile & Patient Reviews"
                    >
                      <span>Google Reviews & Profile</span>
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
          <p className="text-center md:text-left max-w-xl leading-relaxed">
            <strong className="text-white">NMC Compliance & Medical Notice:</strong> Published for patient educational guidance and appointment coordination under NMC Ethics Regulations. The domain <span className="text-white font-medium">bestortho.clinic</span> functions strictly as a technical web portal and does not constitute a superlative or comparative claim of medical superiority. Outpatient OPD appointments do not replace emergency trauma services.
          </p>
          <p className="font-semibold text-brand-100 whitespace-nowrap">
            © {currentYear} Dr. Gaurav Sharma Orthopaedic Clinic.
          </p>
        </div>
      </div>
    </footer>
  );
}
