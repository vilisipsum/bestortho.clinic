import React from 'react';
import { UserCheck, ShieldCheck, Quote, Clock, CheckCircle } from 'lucide-react';
import { PatientStory } from '@/lib/content';

interface PatientStoryCardProps {
  story: PatientStory;
}

export default function PatientStoryCard({ story }: PatientStoryCardProps) {
  // Strict Safety Gate: Do not render unconsented or unapproved patient stories
  if (!story.consentApproved || !story.testimonialApproved || !story.approved) {
    return null;
  }

  return (
    <div className="card-medical bg-white p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between">
      {/* Editorial Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center font-bold text-brand-700 text-sm">
              {story.displayName.charAt(0)}
            </div>
            <div>
              <p className="font-bold text-slate-900 text-base">
                {story.displayName}
                {story.age && <span className="text-slate-500 font-normal text-sm">, {story.age} yrs</span>}
              </p>
              {story.location && (
                <p className="text-xs text-slate-500 font-medium">
                  {story.location}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              Consented Case Record
            </span>
          </div>
        </div>

        {/* Condition Banner */}
        <div className="py-4">
          <span className="text-xs font-semibold text-brand-700">
            Documented Condition
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-brand-950 font-display mt-0.5">
            {story.condition}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Symptom Duration: {story.duration}</span>
          </div>
        </div>

        {/* Case Progression (Before -> Care -> Documented Milestone) - Flat Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 pt-4 border-t border-slate-100">
          {/* Before */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-500">
              Before Consultation
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {story.before}
            </p>
            {story.previousTreatment && (
              <p className="text-xs text-slate-500 italic pt-1 border-t border-slate-100">
                Prior care: {story.previousTreatment}
              </p>
            )}
          </div>

          {/* Care / Treatment */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-brand-700">
              Treatment & Care
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {story.care}
            </p>
          </div>

          {/* Recovery / Documented Outcome */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-emerald-800">
              Documented Milestone
            </span>
            <p className="text-sm text-slate-700 leading-relaxed">
              {story.recovery}
            </p>
          </div>
        </div>

        {/* Patient's Own Words / Quote - Clean Editorial Blockquote */}
        <blockquote className="border-l-4 border-brand-600 pl-5 py-2 my-5 bg-slate-50/60 rounded-r-xl">
          <Quote className="w-5 h-5 text-brand-500 mb-1 opacity-80" />
          <p className="text-sm sm:text-base font-normal italic text-slate-800 leading-relaxed">
            &ldquo;{story.patientQuote}&rdquo;
          </p>
          <p className="text-xs text-brand-700 font-medium mt-2">
            — {story.displayName}, Consented Patient Statement
          </p>
        </blockquote>
      </div>

      {/* Footer Notes */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
          Patient consent on physical clinical file
        </span>
        <span className="text-xs font-medium text-slate-500">
          Individual results depend on condition & protocol
        </span>
      </div>
    </div>
  );
}
