import React from 'react';
import { Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { testimonials, Testimonial } from '@/lib/content';

export default function TestimonialCard() {
  // Strict Safety Gate: Only approved testimonials
  const approvedTestimonials = testimonials.filter(
    (t) => t.consentApproved && t.testimonialApproved && t.approved
  );

  return (
    <section className="py-16 md:py-24 border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 mb-3">
            Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            Approved Patient Testimonials
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-2">
            Verifiable patient impressions recorded with explicit consent. Wording is preserved as submitted without promotional embellishment.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approvedTestimonials.map((item: Testimonial) => (
            <div
              key={item.id}
              className="card-medical bg-slate-50 border border-slate-200 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-brand-400 mb-4 opacity-75" />
                <p className="text-base sm:text-lg text-slate-800 font-normal italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-bold text-brand-950 font-display">
                      {item.displayName}
                    </h4>
                    {item.location && (
                      <p className="text-xs text-slate-500 font-medium">
                        {item.location}
                      </p>
                    )}
                  </div>

                  {item.verifiedVisit && (
                    <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Visit
                    </span>
                  )}
                </div>

                {item.googleReviewUrl && (
                  <div className="mt-3">
                    <a
                      href={item.googleReviewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-brand-700 hover:text-brand-900 font-semibold transition-colors"
                    >
                      <span>Google Business Profile Review</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
