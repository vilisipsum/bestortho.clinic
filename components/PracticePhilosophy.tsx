import React from 'react';
import { Eye, FileText, Compass, Activity, CheckCircle, ShieldAlert, ArrowRight } from 'lucide-react';

export default function PracticePhilosophy() {
  const pillars = [
    {
      icon: Eye,
      title: "Understanding Your Condition",
      step: "01",
      description: "We begin with a careful, unhurried physical examination and imaging review. We explain the bone, joint, or ligament anatomy in everyday language so you know what is causing your symptoms.",
      tag: "Clear Explanation",
      accent: "bg-blue-50 text-brand-700",
    },
    {
      icon: FileText,
      title: "Understanding Your Options",
      step: "02",
      description: "Not every joint problem requires surgery. We clearly outline non-surgical choices, medication protocols, targeted physiotherapy, and when surgical intervention is genuinely indicated.",
      tag: "Conservative First",
      accent: "bg-emerald-50 text-emerald-700",
    },
    {
      icon: Compass,
      title: "Planning the Next Step",
      step: "03",
      description: "Your work, family life, and physical demands matter. We align on a realistic treatment timeline that fits your schedule, avoiding arbitrary interventions or unverified claims.",
      tag: "Collaborative Plan",
      accent: "bg-sky-50 text-sky-700",
    },
    {
      icon: Activity,
      title: "Supporting Recovery",
      step: "04",
      description: "True recovery is measured by functional mobility. We establish structured check-in milestones, guide safe movement retraining, and provide ongoing feedback until you regain confidence.",
      tag: "Milestone Focused",
      accent: "bg-purple-50 text-purple-700",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <span className="pill-badge bg-white text-brand-700 border-slate-200 mb-3 shadow-sm">
            Clinical Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            A Patient-First, Evidence-Conscious Philosophy
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal leading-relaxed">
            Medical decisions should be grounded in clinical evidence, open communication, and respect for your daily life. We do not make clinical guarantees or promise overnight shortcuts; we provide steady, structured guidance for your musculoskeletal health.
          </p>
        </div>

        {/* Pillars Grid with Step Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-card transition-all relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${pillar.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      STEP {pillar.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-brand-950 font-display mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1.5 text-brand-700">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600" />
                    <span>{pillar.tag}</span>
                  </span>
                  <span className="text-slate-400 font-mono text-xs">
                    0{idx + 1}/04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
