import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { patientStories } from '@/lib/content';
import PatientStoryCard from './PatientStoryCard';

interface PatientStoriesSectionProps {
  maxItems?: number;
  showAllLink?: boolean;
  variant?: 'compact' | 'detailed';
}

export default function PatientStoriesSection({ 
  maxItems = 3, 
  showAllLink = true,
  variant = 'compact'
}: PatientStoriesSectionProps) {
  // Only display stories where consentApproved && testimonialApproved && approved are all true
  const approvedStories = patientStories
    .filter((s) => s.consentApproved && s.testimonialApproved && s.approved)
    .slice(0, maxItems);

  const isCompact = variant === 'compact';

  return (
    <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="pill-badge bg-emerald-50 text-emerald-800 border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Verified Clinical Outcomes
              </span>
              <span className="pill-badge bg-white text-slate-700 border-slate-200 shadow-xs">
                Informed Consent on File
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
              Patient Recovery Experiences
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 max-w-2xl">
              Authentic recovery journeys and mobility milestones from patients treated under Dr. Gaurav Sharma&apos;s structured, evidence-conscious care protocols.
            </p>
          </div>

          {showAllLink && (
            <Link
              href="/patient-stories"
              className="btn-secondary self-start md:self-auto text-sm py-2.5 px-5 flex items-center gap-2"
            >
              <span>View Full Case Records</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Stories List: Grid if Compact, Stacked if Detailed */}
        {isCompact ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approvedStories.map((story) => (
              <PatientStoryCard key={story.id} story={story} variant="compact" />
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            {approvedStories.map((story) => (
              <PatientStoryCard key={story.id} story={story} variant="detailed" />
            ))}
          </div>
        )}

        {/* Bottom Banner on Homepage */}
        {isCompact && showAllLink && (
          <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              Documented patient consent archived in accordance with medical ethics standards.
            </span>
            <Link
              href="/patient-stories"
              className="text-brand-700 hover:text-brand-900 font-semibold flex items-center gap-1 shrink-0 hover:underline"
            >
              <span>Explore complete clinical diagnostic pathways</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
