'use client';

import React, { useState } from 'react';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  HelpCircle, 
  ShieldCheck, 
  Sparkles,
  Info
} from 'lucide-react';
import { siteConfig } from '@/lib/content';

export interface AnatomicalArea {
  id: string;
  name: string;
  iconLabel: string;
  badge: string;
  summary: string;
  commonSymptoms: string[];
  firstLineGuidance: string;
  whenToConsult: string;
  defaultReason: string;
}

export const anatomicalAreas: AnatomicalArea[] = [
  {
    id: 'knee',
    name: 'Knee Joint',
    iconLabel: 'Knee',
    badge: 'Most Common',
    summary: 'Degenerative wear, meniscus tears, ligament sprains, and anterior knee pain during activity.',
    commonSymptoms: [
      'Discomfort or stiffness while climbing or descending stairs',
      'Audible clicking, catching sensation, or sudden locking',
      'Persistent swelling (effusion) after walking or standing',
      'Morning stiffness that eases slightly after gentle movement',
    ],
    firstLineGuidance: 'Avoid deep squatting, sitting cross-legged, or high-impact jumping. Apply cold packs for acute swelling and perform gentle straight-leg lifts to support the quadriceps.',
    whenToConsult: 'Consult promptly if the knee buckles or gives way, cannot fully straighten, or if joint ache persists past 10–14 days despite rest.',
    defaultReason: 'Knee Pain / Joint Discomfort',
  },
  {
    id: 'shoulder',
    name: 'Shoulder & Rotator Cuff',
    iconLabel: 'Shoulder',
    badge: 'Rotator Cuff & Mobility',
    summary: 'Frozen shoulder (adhesive capsulitis), rotator cuff tendinopathy, impingement, and overhead restriction.',
    commonSymptoms: [
      'Inability to lift your arm overhead or reach behind your back',
      'Dull, aching night pain when sleeping on the affected side',
      'Sharp catch when reaching for car seats or upper shelves',
      'Progressive loss of active and passive joint range',
    ],
    firstLineGuidance: 'Avoid forcing painful overhead movements or aggressive pulling. Use a supportive pillow beneath the elbow at night and perform gentle pendulum swings.',
    whenToConsult: 'Seek evaluation if night discomfort disrupts regular sleep, pain radiates into the forearm with numbness, or arm elevation remains restricted.',
    defaultReason: 'Shoulder Pain / Frozen Shoulder',
  },
  {
    id: 'hip',
    name: 'Hip & Pelvis',
    iconLabel: 'Hip',
    badge: 'Weight-Bearing Joint',
    summary: 'Avascular necrosis (AVN), hip osteoarthritis, trochanteric bursitis, and labral irritation.',
    commonSymptoms: [
      'Deep groin ache or lateral hip tenderness while walking',
      'Difficulty putting on socks, tying shoes, or cutting toenails',
      'Stiffness when standing up after sitting for long periods',
      'Limping or uneven weight distribution after moderate walking',
    ],
    firstLineGuidance: 'Avoid prolonged standing on one leg or low-seated chairs. Use cushioned footwear and avoid sudden rotational hip twists.',
    whenToConsult: 'A clinical X-ray evaluation is essential if groin pain persists beyond 2 weeks, especially in individuals with past steroid use or sudden limp.',
    defaultReason: 'General Orthopaedic Consultation',
  },
  {
    id: 'spine',
    name: 'Spine & Lower Back',
    iconLabel: 'Back',
    badge: 'Posture & Disc Care',
    summary: 'Lumbar disc herniation, sciatica, postural strain, and degenerative disc narrowing.',
    commonSymptoms: [
      'Localized lower back ache aggravated by prolonged sitting',
      'Shooting pain, tingling, or electric sensations down the leg (sciatica)',
      'Stiffness when attempting to stand upright in the morning',
      'Discomfort when bending forward to lift objects',
    ],
    firstLineGuidance: 'Maintain neutral lumbar posture with a small lower-back cushion. Take short walking breaks every 45 minutes rather than remaining immobile in bed.',
    whenToConsult: 'Urgent medical assessment is required if you experience leg weakness (foot drop), numbness in the groin area, or bowel/bladder changes.',
    defaultReason: 'Spine / Back / Neck Evaluation',
  },
  {
    id: 'neck',
    name: 'Neck & Cervical Spine',
    iconLabel: 'Neck',
    badge: 'Cervical & Posture',
    summary: 'Cervical spondylosis, nerve root compression, trapezius spasm, and digital screen neck strain.',
    commonSymptoms: [
      'Neck stiffness and occipital headaches after desk work',
      'Tingling, numbness, or weakness travelling down the arm into fingers',
      'Pain when rotating the neck to check blind spots',
      'Upper shoulder muscle spasms and trigger points',
    ],
    firstLineGuidance: 'Raise mobile screens and computer monitors to eye level. Avoid thick double pillows during sleep and take hourly gentle neck retraction breaks.',
    whenToConsult: 'Consult if radiating arm numbness, clumsiness with buttons, or dropping objects occurs, indicating cervical nerve impingement.',
    defaultReason: 'Spine / Back / Neck Evaluation',
  },
  {
    id: 'elbow',
    name: 'Elbow & Forearm',
    iconLabel: 'Elbow',
    badge: 'Tendon Overuse',
    summary: 'Lateral epicondylitis (Tennis Elbow), medial epicondylitis (Golfer’s Elbow), and olecranon bursitis.',
    commonSymptoms: [
      'Sharp pain on the outside of the elbow when gripping objects',
      'Weakness when shaking hands, turning doorknobs, or lifting cups',
      'Tenderness directly over the bony outer elbow bump',
      'Aching forearm muscles after repetitive wrist motion',
    ],
    firstLineGuidance: 'Rest the affected forearm from repetitive twisting or heavy tool use. Use a counterforce forearm strap during necessary manual work.',
    whenToConsult: 'Book an evaluation if grip weakness prevents routine work or if resting elbow ache persists despite 10 days of activity modification.',
    defaultReason: 'General Orthopaedic Consultation',
  },
  {
    id: 'wrist-hand',
    name: 'Wrist & Hand',
    iconLabel: 'Hand',
    badge: 'Nerve & Tendon',
    summary: 'Carpal tunnel syndrome, De Quervain’s tenosynovitis, trigger finger, and small joint arthritis.',
    commonSymptoms: [
      'Numbness and pins-and-needles in the thumb, index, and middle fingers',
      'Pain near the base of the thumb when texting or lifting a child',
      'Morning finger stiffness or fingers catching in a bent position',
      'Need to shake out the hands at night to relieve numbness',
    ],
    firstLineGuidance: 'Keep wrists in a neutral position while typing. Apply brief cold compresses for thumb base tenderness and avoid repetitive tight gripping.',
    whenToConsult: 'Consult if finger numbness awakens you from sleep or if you notice weakness and thinning of the thumb base muscles.',
    defaultReason: 'General Orthopaedic Consultation',
  },
  {
    id: 'ankle-foot',
    name: 'Ankle & Foot',
    iconLabel: 'Ankle',
    badge: 'Sprain & Tendon',
    summary: 'Ankle ligament sprains, plantar fasciitis, Achilles tendinopathy, and stress reactions.',
    commonSymptoms: [
      'Sharp heel pain on taking the very first steps out of bed',
      'Ankle instability or swelling following a sudden twisting stumble',
      'Ache along the Achilles tendon during or after morning walks',
      'Tenderness along the outer ankle ligament borders',
    ],
    firstLineGuidance: 'Follow the PRICE protocol (Protection, Rest, Ice, Compression, Elevation) for acute sprains. For heel pain, perform gentle calf stretches against a wall.',
    whenToConsult: 'Consult promptly if you cannot take four weight-bearing steps immediately after an ankle twist, or if heel pain prevents daily standing.',
    defaultReason: 'Sports Injury / Ligament Sprain',
  },
  {
    id: 'trauma',
    name: 'Fractures & Bone Trauma',
    iconLabel: 'Fractures',
    badge: 'Trauma & Bone Union',
    summary: 'Suspected bone fractures, post-cast review, union assessment, and fall-related musculoskeletal injuries.',
    commonSymptoms: [
      'Intense, pinpoint bone tenderness following a fall or impact',
      'Rapid swelling, bruising, and inability to bear weight',
      'Follow-up check needed for existing plaster cast or surgical implant',
      'Persistent ache or stiffness months after a healed fracture',
    ],
    firstLineGuidance: 'Immobilize the affected limb immediately with a splint. Avoid attempting to massage, manipulate, or force movement on suspected broken bones.',
    whenToConsult: 'Bring existing physical X-rays to the clinic for clinical cast inspection, union verification, and safe remobilization guidance.',
    defaultReason: 'Fracture Follow-up / Cast Check',
  },
  {
    id: 'sports',
    name: 'Sports & Athletic Injuries',
    iconLabel: 'Sports',
    badge: 'Ligament & Return-to-Play',
    summary: 'ACL, PCL, MCL ligament tears, meniscus injuries, muscle strains, and athletic rehabilitation planning.',
    commonSymptoms: [
      'Heard or felt an audible "pop" during football, cricket, running, or badminton',
      'Rapid joint swelling within 2 to 6 hours of the incident',
      'Sensation that the joint cannot be trusted to support full body weight',
      'Pain when changing directions or pivoting on the field',
    ],
    firstLineGuidance: 'Halt competitive play immediately. Apply ice wrapped in cloth for 15-minute intervals, compress lightly with an elastic bandage, and keep the limb elevated.',
    whenToConsult: 'An in-person clinical ligament laxity test and MRI scan review is critical to determine whether conservative rehabilitation or repair is indicated.',
    defaultReason: 'Sports Injury / Ligament Sprain',
  },
];

interface InteractiveBodyGuideProps {
  onOpenBooking?: (reason?: string, area?: string) => void;
}

export default function InteractiveBodyGuide({ onOpenBooking }: InteractiveBodyGuideProps) {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('knee');

  const selectedArea = anatomicalAreas.find(a => a.id === selectedAreaId) || anatomicalAreas[0];

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking(selectedArea.defaultReason, selectedArea.name);
    } else {
      window.location.href = `/contact?reason=${encodeURIComponent(selectedArea.defaultReason)}&area=${encodeURIComponent(selectedArea.name)}`;
    }
  };

  return (
    <section id="symptom-navigator" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Interactive Clinical Tool
            </span>
            <span className="pill-badge bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
              Symptom Navigator
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-950 tracking-tight font-display">
            Where Does It Hurt?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal mt-3 leading-relaxed">
            Select the anatomical area where you are experiencing pain or stiffness. Review common clinical presentations, initial self-care rules, and when an in-person consultation with Dr. Gaurav Sharma is recommended.
          </p>
        </div>

        {/* Anatomical Selection Buttons / Pills */}
        <div 
          role="tablist" 
          aria-label="Anatomical Area Selector"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none"
        >
          {anatomicalAreas.map((area) => {
            const isSelected = area.id === selectedAreaId;
            return (
              <button
                key={area.id}
                role="tab"
                id={`tab-${area.id}`}
                aria-selected={isSelected}
                aria-controls={`panel-${area.id}`}
                onClick={() => setSelectedAreaId(area.id)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-brand-900 text-white shadow-sm ring-2 ring-brand-900/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <span>{area.name}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Area Detail View (Flat Layout - No Nested Cards) */}
        <div 
          id={`panel-${selectedArea.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedArea.id}`}
          className="mt-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Summary, Symptoms & Self-Care */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="pill-badge bg-blue-50 text-brand-800 border-blue-200 text-xs font-semibold">
                    {selectedArea.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    Outpatient Guide
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-brand-950 font-display">
                  {selectedArea.name}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal leading-relaxed">
                  {selectedArea.summary}
                </p>
              </div>

              {/* Primary Symptoms & Self-Care Card */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200">
                <h4 className="text-sm font-bold text-brand-950 mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4 text-brand-700" />
                  <span>Common Symptoms & Functional Difficulties</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {selectedArea.commonSymptoms.map((symp, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{symp}</span>
                    </li>
                  ))}
                </ul>

                {/* Initial Conservative Guidance integrated with clean divider */}
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <p className="text-xs font-bold text-brand-950 mb-1 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-brand-700 flex-shrink-0" />
                    <span>Initial Conservative Self-Care:</span>
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                    {selectedArea.firstLineGuidance}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Triage & Direct Booking */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* When to Consult Clinical Card */}
              <div className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-brand-950 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-brand-600" />
                  <span>When to Consult Dr. Gaurav Sharma</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {selectedArea.whenToConsult}
                </p>

                <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Physical film review and joint stability tests conducted in-clinic.</span>
                </div>
              </div>

              {/* Direct Booking CTA Card */}
              <div className="bg-brand-950 rounded-2xl p-6 sm:p-7 text-white space-y-4 shadow-subtle">
                <span className="text-xs font-bold tracking-wider text-brand-200 block">
                  OPD Evaluation
                </span>
                <h4 className="text-xl font-bold font-display text-white">
                  Schedule an In-Person Consultation
                </h4>
                <p className="text-xs text-brand-100 leading-relaxed">
                  Have your {selectedArea.name.toLowerCase()} evaluated with dedicated physical examination and transparent recovery planning in Sikandra, Agra.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleBookingClick}
                    className="btn-accent-emerald text-xs py-3 px-5 flex items-center justify-center gap-2 w-full font-bold shadow-sm"
                  >
                    <span>Book Evaluation for {selectedArea.iconLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Medical Transparency Note */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex items-start gap-2.5">
            <HelpCircle className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Medical Disclaimer:</strong> This symptom navigator is published purely for patient education and practice orientation. It is not an alternative to in-person medical evaluation. Outpatient orthopaedic consultations require clinical examination and physical imaging evaluation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
