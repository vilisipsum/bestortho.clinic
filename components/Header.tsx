'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ArrowRight, Stethoscope } from 'lucide-react';
import { siteConfig } from '@/lib/content';

interface HeaderProps {
  onOpenBooking?: () => void;
}

export default function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Doctor', href: '/credentials' },
    { label: 'Specialities', href: '/#areas-of-care' },
    { label: 'Surgeries', href: '/#surgeries' },
    { label: 'Stories', href: '/patient-stories' },
    { label: 'Clinic', href: '/clinic' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleBookingClick = (e?: React.MouseEvent) => {
    if (onOpenBooking) {
      if (e) e.preventDefault();
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
          window.location.href = '/contact';
        }
      }, 50);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-2.5 sm:py-3'
            : 'bg-white border-b border-slate-200/80 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* OFFICIAL BRAND LOGO */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg shrink-0"
              aria-label="Dr. Gaurav Sharma Orthopaedic Clinic Home"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-slate-200/80 p-0.5 flex items-center justify-center shadow-sm group-hover:border-brand-500 transition-colors shrink-0 overflow-hidden">
                <Image
                  src="/images/logo/logo-icon-square.png"
                  alt="Dr. Gaurav Sharma Orthopaedic Clinic Monogram"
                  width={44}
                  height={44}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg xl:text-xl font-bold tracking-tight text-brand-950 group-hover:text-brand-700 transition-colors select-none font-display whitespace-nowrap leading-tight">
                  Dr. Gaurav Sharma
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold text-brand-700 whitespace-nowrap leading-tight flex items-center gap-1">
                  Orthopaedics &amp; Joint Replacement <span className="text-slate-400 font-normal hidden sm:inline">| bestortho.clinic</span>
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 shrink-0" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`whitespace-nowrap px-2.5 xl:px-3 py-1.5 rounded-lg text-xs xl:text-[13.5px] 2xl:text-[14.5px] font-medium transition-colors ${
                      isActive
                        ? 'bg-brand-50 text-brand-700 font-semibold'
                        : 'text-slate-600 hover:text-brand-900 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* HEADER ACTIONS (DESKTOP & TABLET) */}
            <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-xs font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors whitespace-nowrap shrink-0"
                title="Call Clinic"
              >
                <Phone className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span className="whitespace-nowrap">{siteConfig.phoneDisplay}</span>
              </a>

              {/* Desktop Booking CTA */}
              <button
                onClick={handleBookingClick}
                className="btn-primary text-xs xl:text-sm py-2 xl:py-2.5 px-3.5 xl:px-4.5 flex items-center justify-center gap-1.5 xl:gap-2 whitespace-nowrap shrink-0 shadow-sm"
                aria-label="Book Consultation"
              >
                <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4 shrink-0" />
                <span className="whitespace-nowrap">Book Consultation</span>
              </button>
            </div>

            {/* MOBILE NAVIGATION ACTIONS (< 1024px) */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-brand-700 transition-colors"
                title="Call Clinic"
                aria-label="Call Clinic Directly"
              >
                <Phone className="w-4 h-4 text-brand-600" />
              </a>

              <button
                onClick={handleBookingClick}
                className="btn-primary text-xs min-h-[40px] sm:min-h-[44px] px-3 sm:px-3.5 flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 sm:hidden"
                aria-label="Book Consultation"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FLYOUT DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white border-l border-slate-200 p-6 shadow-elevated flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 p-0.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                    <Image
                      src="/images/logo/logo-icon-square.png"
                      alt="Dr. Gaurav Sharma Orthopaedic Clinic Monogram"
                      width={36}
                      height={36}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-brand-950 font-display leading-tight">
                      Dr. Gaurav Sharma
                    </span>
                    <span className="text-xs text-brand-700 font-medium">
                      Orthopaedics &amp; Joint Replacement
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-5 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="btn-secondary text-sm py-3 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="whitespace-nowrap">Call {siteConfig.phoneDisplay}</span>
              </a>

              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleBookingClick(e);
                }}
                className="btn-primary text-base py-3.5 flex items-center justify-center gap-2 whitespace-nowrap"
                aria-label="Book Consultation"
              >
                <Calendar className="w-5 h-5 shrink-0" />
                <span className="whitespace-nowrap">Book Consultation</span>
              </button>
              <p className="text-xs text-center text-slate-500 mt-1 font-medium">
                Sikandra, Agra • Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
