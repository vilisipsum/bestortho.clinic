import React from 'react';
import { Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { testimonials, Testimonial } from '@/lib/content';

export default function TestimonialCard() {
  // Strict Safety Gate: Only approved testimonials
  const approvedTestimonials = testimonials.filter(
    (t) => t.consentApproved && t.testimonialApproved && t.approved
  );

  return (
    <section className="py-16 md:py-24 border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-white text-dark mb-3">
            Patient Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
            Approved Patient Testimonials
          </h2>
          <p className="text-base sm:text-lg text-dark/70 font-semibold mt-2">
            Verifiable patient impressions recorded with explicit consent. Wording is preserved as submitted without promotional embellishment.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approvedTestimonials.map((item: Testimonial) => (
            <div
              key={item.id}
              className="card-editorial bg-white p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              <div>
                <Quote className="w-8 h-8 text-accent-orange mb-4 opacity-75" />
                <p className="text-base sm:text-lg text-dark font-medium italic leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-dark/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-black text-dark font-display">
                      {item.displayName}
                    </h4>
                    {item.location && (
                      <p className="text-xs text-dark/60 font-semibold">
                        {item.location}
                      </p>
                    )}
                  </div>

                  {item.verifiedVisit && (
                    <span className="pill-badge bg-accent-lime text-dark text-[10px]">
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
                      className="inline-flex items-center gap-1 text-xs text-dark/70 hover:text-accent-orange font-bold transition-colors"
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
