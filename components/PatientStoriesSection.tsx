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
    <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
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
            <p className="text-base sm:text-lg text-slate-600 font-normal mt-2 max-w-2xl">
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

        {/* Ethics & Consent Policy Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 text-brand-700 mt-1">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-brand-950 font-display">
                Patient Privacy & Media Ethics Notice
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed max-w-2xl">
                Every case published on BestOrtho.clinic has explicit written consent on file for educational representation. Clinical outcomes vary by age, compliance, severity, and individual biological factors.
              </p>
            </div>
          </div>

          <Link
            href="/consent"
            className="btn-secondary text-xs py-2.5 px-4 whitespace-nowrap flex items-center gap-1.5 self-start md:self-auto"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>Read Patient Media Policy</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
