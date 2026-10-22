import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, FileCheck2 } from 'lucide-react';
import { patientStories } from '@/lib/content';
import PatientStoryCard from './PatientStoryCard';

interface PatientStoriesSectionProps {
  maxItems?: number;
  showAllLink?: boolean;
}

export default function PatientStoriesSection({ maxItems = 3, showAllLink = true }: PatientStoriesSectionProps) {
  // Only display stories where consentApproved && testimonialApproved && approved are all true
  const approvedStories = patientStories
    .filter((s) => s.consentApproved && s.testimonialApproved && s.approved)
    .slice(0, maxItems);

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200">
                Verified Clinical Cases
              </span>
              <span className="pill-badge bg-slate-100 text-slate-700 border-slate-200">
                Patient Permission Documented
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
              Patient Recovery Stories
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 max-w-xl">
              Documented patient experiences with verified informed consent. We do not use actors, fabricated reviews, or unverified claims.
            </p>
          </div>

          {showAllLink && (
            <Link
              href="/patient-stories"
              className="btn-secondary self-start md:self-auto text-sm py-2.5 px-5 flex items-center gap-2"
            >
              <span>View All Patient Stories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        {/* Stories List */}
        <div className="space-y-8">
          {approvedStories.map((story) => (
            <PatientStoryCard key={story.id} story={story} />
          ))}
        </div>

      </div>
    </section>
  );
}
