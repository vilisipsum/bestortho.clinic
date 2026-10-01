'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
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

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-[#FFF4D9]/95 backdrop-blur-md border-b-2 border-dark shadow-hard-sm py-3'
            : 'bg-[#FFF4D9] border-b-2 border-dark/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* BRAND LOGO - EXACT STRING BestOrtho.clinic */}
            <Link
              href="/"
              className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-accent-orange rounded-xl"
              aria-label="BestOrtho.clinic Home"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-orange border-2 border-dark flex items-center justify-center font-black text-white text-lg shadow-hard-sm group-hover:-translate-y-0.5 transition-transform">
                +
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-dark group-hover:text-accent-orange transition-colors select-none font-display">
                  BestOrtho.clinic
                </span>
                <span className="text-[11px] font-bold text-dark/70 uppercase tracking-wider hidden sm:block">
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
                    className={`px-3.5 py-2 rounded-full text-[15px] font-bold transition-all ${
                      isActive
                        ? 'bg-dark text-white border-2 border-dark shadow-hard-sm'
                        : 'text-dark hover:bg-white/80 hover:border-2 hover:border-dark'
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
                className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full border-2 border-dark bg-white text-dark text-sm font-bold shadow-hard-sm hover:-translate-y-0.5 transition-transform"
                title="Call Clinic"
              >
                <Phone className="w-4 h-4 text-accent-orange" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="btn-accent-orange text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="btn-accent-orange text-sm py-2.5 px-5 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </Link>
              )}
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="flex items-center gap-2 lg:hidden">
              {onOpenBooking ? (
                <button
                  onClick={onOpenBooking}
                  className="btn-accent-orange text-xs py-2 px-3.5 flex items-center gap-1.5 sm:hidden"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </button>
              ) : (
                <Link
                  href="/contact"
                  className="btn-accent-orange text-xs py-2 px-3.5 flex items-center gap-1.5 sm:hidden"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book</span>
                </Link>
              )}

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl border-2 border-dark bg-white shadow-hard-sm text-dark focus:outline-none focus:ring-2 focus:ring-accent-orange"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE FLYOUT DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-dark/60 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#FFF4D9] border-l-2 border-dark p-6 shadow-hard-xl flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b-2 border-dark/10">
                <span className="text-xl font-black text-dark font-display">
                  BestOrtho.clinic
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl border-2 border-dark bg-white shadow-hard-sm"
                  aria-label="Close Navigation Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-2xl border-2 border-dark bg-white font-bold text-dark shadow-hard-sm hover:bg-accent-lime transition-colors"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t-2 border-dark/10 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="btn-secondary text-sm py-3 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-accent-orange" />
                <span>Call {siteConfig.phoneDisplay}</span>
              </a>

              {onOpenBooking ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="btn-accent-orange text-base py-3.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </button>
              ) : (
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-accent-orange text-base py-3.5 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Book Consultation</span>
                </Link>
              )}
              <p className="text-xs text-center text-dark/70 font-semibold mt-2">
                Sikandra, Agra • Uttar Pradesh
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
