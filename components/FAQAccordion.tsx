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
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all border-2 border-dark ${
                isActive
                  ? 'bg-dark text-white shadow-hard-sm'
                  : 'bg-white text-dark shadow-hard-sm hover:bg-accent-lime'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {displayedFaqs.map((faq: FAQItem) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-2xl border-2 border-dark transition-all duration-200 ${
                isOpen
                  ? 'bg-white shadow-hard'
                  : 'bg-white/80 hover:bg-white shadow-hard-sm'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-accent-orange rounded-2xl"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#FFF4D9] border border-dark flex items-center justify-center flex-shrink-0 text-xs font-black text-dark">
                    Q
                  </span>
                  <span className="text-base sm:text-lg font-black text-dark font-display">
                    {faq.question}
                  </span>
                </div>

                <div
                  className={`w-8 h-8 rounded-full border border-dark flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-accent-lime rotate-180' : 'bg-[#FFF8E7]'
                  }`}
                >
                  <ChevronDown className="w-4 h-4 text-dark" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-dark/10 text-dark/80 text-sm sm:text-base leading-relaxed">
                  <p>{faq.answer}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-bold text-dark/50">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent-lime" />
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
