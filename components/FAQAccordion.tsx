'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { faqs, FAQItem } from '@/lib/content';

interface FAQAccordionProps {
  initialCategory?: string;
  limit?: number;
}

export default function FAQAccordion({ initialCategory = 'All', limit }: FAQAccordionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const categories = [
    'All',
    'General',
    'Before Consultation',
    'Appointments',
    'Clinic',
    'Treatment Information',
    'Recovery',
  ];

  // Only display approved FAQs
  const approvedFaqs = faqs.filter((f) => f.approved);

  const filteredFaqs = selectedCategory === 'All'
    ? approvedFaqs
    : approvedFaqs.filter((f) => f.category === selectedCategory);

  const displayedFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="w-full">
      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border ${
                isActive
                  ? 'bg-brand-700 text-white border-brand-700 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 shadow-subtle'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5">
        {displayedFaqs.map((faq: FAQItem) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border transition-all duration-200 ${
                isOpen
                  ? 'bg-white border-brand-200 shadow-card'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-subtle'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-2xl"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3.5">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-xs font-bold text-brand-700">
                    Q
                  </span>
                  <span className="text-base sm:text-lg font-bold text-brand-950 font-display">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-brand-50 text-brand-700 rotate-180' : 'bg-slate-50 text-slate-500'
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>{faq.answer}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Doctor Approved Guidance • Category: {faq.category}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
