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
    <div className="card-editorial bg-white p-6 sm:p-8 lg:p-10 border-2 border-dark shadow-hard relative overflow-hidden flex flex-col justify-between">
      {/* Editorial Header */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b-2 border-dark/10">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-accent-lime border-2 border-dark flex items-center justify-center font-black text-dark text-sm">
              {story.displayName.charAt(0)}
            </div>
            <div>
              <p className="font-black text-dark text-base">
                {story.displayName}
                {story.age && <span className="text-dark/60 font-semibold text-sm">, {story.age} yrs</span>}
              </p>
              {story.location && (
                <p className="text-xs text-dark/60 font-medium">
                  {story.location}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="pill-badge bg-[#FFF4D9] text-dark border-dark text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-orange" />
              Consented Case Record
            </span>
          </div>
        </div>

        {/* Condition Banner */}
        <div className="py-4">
          <span className="text-xs font-black uppercase tracking-wider text-accent-orange">
            Documented Condition
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-dark font-display mt-0.5">
            {story.condition}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-dark/70 font-semibold mt-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Symptom Duration: {story.duration}</span>
          </div>
        </div>

        {/* Case Progression Grid (Before -> Care -> Documented Milestone) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          {/* Before */}
          <div className="p-4 rounded-2xl bg-[#FFF8E7] border-2 border-dark">
            <span className="text-[11px] font-black uppercase tracking-wider text-dark/60">
              Before Consultation
            </span>
            <p className="text-xs sm:text-sm text-dark/80 mt-1 leading-relaxed">
              {story.before}
            </p>
            {story.previousTreatment && (
              <p className="text-[11px] text-dark/60 mt-2 pt-2 border-t border-dark/10 italic">
                Prior care: {story.previousTreatment}
              </p>
            )}
          </div>

          {/* Care / Treatment */}
          <div className="p-4 rounded-2xl bg-white border-2 border-dark">
            <span className="text-[11px] font-black uppercase tracking-wider text-accent-blue font-bold">
              Treatment & Care
            </span>
            <p className="text-xs sm:text-sm text-dark/80 mt-1 leading-relaxed">
              {story.care}
            </p>
          </div>

          {/* Recovery / Documented Outcome */}
          <div className="p-4 rounded-2xl bg-accent-lime/20 border-2 border-dark">
            <span className="text-[11px] font-black uppercase tracking-wider text-dark font-bold">
              Documented Milestone
            </span>
            <p className="text-xs sm:text-sm text-dark/80 mt-1 leading-relaxed">
              {story.recovery}
            </p>
          </div>
        </div>

        {/* Patient's Own Words / Quote */}
        <div className="p-5 rounded-2xl bg-dark text-white border-2 border-dark my-4 relative">
          <Quote className="w-6 h-6 text-accent-lime mb-2 opacity-80" />
          <p className="text-sm sm:text-base font-medium italic text-white/90 leading-relaxed">
            &ldquo;{story.patientQuote}&rdquo;
          </p>
          <p className="text-right text-xs text-accent-lime font-bold mt-2">
            — {story.displayName}, Consented Patient Statement
          </p>
        </div>
      </div>

      {/* Visual Media Placeholder Box (Strictly labeled PHOTO NEEDED per prompt instructions) */}
      <div className="mt-4 pt-4 border-t border-dark/10 flex items-center justify-between text-xs text-dark/60">
        <span className="flex items-center gap-1.5 font-medium">
          <CheckCircle className="w-3.5 h-3.5 text-accent-lime" />
          Patient consent on physical clinical file
        </span>
        <span className="text-[10px] font-black uppercase tracking-wider text-dark/40">
          Individual results depend on condition & protocol
        </span>
      </div>
    </div>
  );
}
