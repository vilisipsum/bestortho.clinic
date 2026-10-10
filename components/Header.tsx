'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ArrowRight, ShieldCheck, Stethoscope } from 'lucide-react';
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
    { label: 'Doctor', href: '/about#credentials' },
    { label: 'Areas of Care', href: '/#areas-of-care' },
    { label: 'Patient Stories', href: '/patient-stories' },
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
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
            : 'bg-white border-b border-slate-200/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO - EXACT STRING BestOrtho.clinic */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg"
              aria-label="BestOrtho.clinic Home"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-700 flex items-center justify-center font-bold text-white shadow-sm group-hover:bg-brand-800 transition-colors">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-brand-950 group-hover:text-brand-700 transition-colors select-none font-display">
                  BestOrtho.clinic
                </span>
                <span className="text-xs font-medium text-slate-500 hidden sm:block">
                  Dr. Gaurav Sharma • Sikandra, Agra
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-[15px] font-medium transition-colors ${
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

            {/* HEADER ACTIONS */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors"
                title="Call Clinic"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              {/* Desktop Booking CTA */}
              <button
                onClick={handleBookingClick}
                className="btn-primary text-sm py-2.5 px-5 flex items-center gap-2"
                aria-label="Book Consultation"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* MOBILE MENU TOGGLE & MOBILE QUICK BOOK */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={handleBookingClick}
                className="btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5 sm:hidden"
                aria-label="Book Consultation"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-500"
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
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <span className="text-xl font-bold text-brand-950 font-display">
                  BestOrtho.clinic
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="btn-secondary text-sm py-3 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>

              <button
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleBookingClick(e);
                }}
                className="btn-primary text-base py-3.5 flex items-center justify-center gap-2"
                aria-label="Book Consultation"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </button>
              <p className="text-xs text-center text-slate-500 mt-2 font-medium">
                Sikandra, Agra • Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
