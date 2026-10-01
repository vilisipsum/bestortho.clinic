import React from 'react';
import { Eye, FileText, Compass, Activity, CheckCircle, ShieldAlert } from 'lucide-react';

export default function PracticePhilosophy() {
  const pillars = [
    {
      icon: Eye,
      title: "Understanding Your Condition",
      badge: "Step 01",
      description: "We begin with a careful, unhurried physical examination and imaging review. We explain the bone, joint, or ligament anatomy in everyday language so you know what is causing your symptoms.",
      tag: "Clear Explanation",
      accent: "bg-accent-orange/15 text-accent-orange",
    },
    {
      icon: FileText,
      title: "Understanding Your Options",
      badge: "Step 02",
      description: "Not every joint problem requires surgery. We clearly outline non-surgical choices, medication protocols, targeted physiotherapy, and when surgical intervention is genuinely indicated.",
      tag: "Conservative First",
      accent: "bg-accent-lime text-dark",
    },
    {
      icon: Compass,
      title: "Planning the Next Step",
      badge: "Step 03",
      description: "Your work, family life, and physical demands matter. We align on a realistic treatment timeline that fits your schedule, avoiding arbitrary interventions or unverified claims.",
      tag: "Collaborative Plan",
      accent: "bg-accent-blue/15 text-accent-blue",
    },
    {
      icon: Activity,
      title: "Supporting Recovery",
      badge: "Step 04",
      description: "True recovery is measured by functional mobility. We establish structured check-in milestones, guide safe movement retraining, and provide ongoing feedback until you regain confidence.",
      tag: "Milestone Focused",
      accent: "bg-accent-lavender/30 text-dark",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FFF8E7] border-b-2 border-dark/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="pill-badge bg-white text-dark mb-3">
            Our Consultation Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-dark tracking-tight font-display">
            A Patient-First, Evidence-Conscious Philosophy
          </h2>
          <p className="text-base sm:text-lg text-dark/80 mt-3 font-normal leading-relaxed">
            Medical decisions should be grounded in clinical evidence, open communication, and respect for your daily life. We do not make clinical guarantees or promise overnight shortcuts; we provide steady, structured guidance for your musculoskeletal health.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl border-2 border-dark shadow-hard p-6 flex flex-col justify-between hover:-translate-y-1 transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl border-2 border-dark flex items-center justify-center ${pillar.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider text-dark/70 font-display">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-dark font-display mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-dark/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dark/10 flex items-center gap-1.5 text-xs font-bold text-dark">
                  <CheckCircle className="w-3.5 h-3.5 text-accent-orange" />
                  <span>{pillar.tag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Transparency Notice */}
        <div className="mt-10 p-5 rounded-2xl bg-white/80 border-2 border-dark flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-accent-orange flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-dark/80 leading-relaxed">
            <strong className="font-bold text-dark">Ethical Care Commitment:</strong> We strictly avoid hyperbolic marketing terms such as "guaranteed 100% cure" or "instant pain relief." Every human body responds uniquely to treatment. Our promise is conscientious clinical assessment and thorough explanation at every stage.
          </p>
        </div>

      </div>
    </section>
  );
}
