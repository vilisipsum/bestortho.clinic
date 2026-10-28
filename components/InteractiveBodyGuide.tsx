'use client';

import React, { useState } from 'react';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Info,
  Stethoscope
} from 'lucide-react';
import { siteConfig } from '@/lib/content';

export interface SurgicalOption {
  title: string;
  indication: string;
  description: string;
}

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
  surgicalOptions?: SurgicalOption[];
}

export const anatomicalAreas: AnatomicalArea[] = [
  {
    id: 'knee',
    name: 'Knee Joint',
    iconLabel: 'Knee',
    badge: 'TKR • Arthroscopy • Preservation',
    summary: 'Degenerative osteoarthritis, complex joint wear, meniscus tears, ligament sprains, and anterior knee instability.',
    commonSymptoms: [
      'Severe pain or joint stiffness during stair climbing or prolonged walking',
      'Audible clicking, bone-on-bone grinding (crepitus), or sudden joint catching',
      'Persistent joint swelling (effusion) and bowed knee deformity (varus/valgus)',
      'Morning stiffness that restricts standing upright or getting up from low seating',
    ],
    firstLineGuidance: 'Avoid deep squatting, cross-legged sitting, and high-impact jumping. Use cold packs for acute swelling, supportive footwear, and perform gentle non-weight-bearing straight-leg lifts.',
    whenToConsult: 'Consult promptly if the knee buckles, gives way, cannot fully straighten, or if persistent pain disrupts sleep and daily walking despite conservative medication and rest.',
    defaultReason: 'Knee Pain / Joint Discomfort',
    surgicalOptions: [
      {
        title: 'Total Knee Replacement (TKR)',
        indication: 'Advanced tricompartmental osteoarthritis (Grade 4) with bone-on-bone wear.',
        description: 'Precision joint resurfacing using durable biocompatible implants, restoring anatomical alignment, joint stability, and pain-free walking.',
      },
      {
        title: 'Complex Knee Replacement',
        indication: 'Severe angular deformity (varus/valgus >15°), fixed flexion contracture, or post-traumatic bone loss.',
        description: 'Advanced reconstruction utilizing modular metal augments, stem extensions, and constrained condylar knee (CCK) systems.',
      },
      {
        title: 'Revision Knee Replacement (Revision TKR)',
        indication: 'Aseptic implant loosening, polyethylene wear, joint instability, or pain following older knee surgeries.',
        description: 'Specialized exchange of failing components with modular revision prostheses, restoring the mechanical joint line and bone stability.',
      },
      {
        title: 'Partial / Unicondylar Knee Replacement (UKA)',
        indication: 'Isolated medial compartment osteoarthritis with healthy native ACL and preserved outer cartilage.',
        description: 'Minimally invasive bone-preserving resurfacing of only the worn inner joint surface, retaining all native cruciate ligaments for a natural bending feel.',
      },
      {
        title: 'Minimally Invasive Knee Arthroscopy & ACL/PCL Reconstruction',
        indication: 'Ligament ruptures, sports twisting injuries, pivoting instability, and mechanical joint locking.',
        description: 'High-definition 4K keyhole endoscopic ligament reconstruction and joint clearance with minimal tissue trauma and rapid functional recovery.',
      },
      {
        title: 'Arthroscopic Meniscus Repair & Preservation',
        indication: 'Vascular bucket-handle, radial, or longitudinal meniscus tears causing painful catching and swelling.',
        description: 'Bio-absorbable all-inside and inside-out suture anchor repair, preserving native shock-absorbing cartilage to prevent long-term arthritis.',
      },
    ],
  },
  {
    id: 'hip',
    name: 'Hip & Pelvis',
    iconLabel: 'Hip',
    badge: 'THR • Revision • AVN Care',
    summary: 'Avascular necrosis (AVN) of femoral head, primary and secondary osteoarthritis, trochanteric bursitis, and labral pathology.',
    commonSymptoms: [
      'Deep groin ache, buttock discomfort, or lateral hip tenderness during walking',
      'Difficulty putting on socks, tying shoelaces, or cutting toenails due to stiffness',
      'Marked stiffness and difficulty standing up after sitting for moderate periods',
      'Noticeable limp or leg-length shortening after brief walking',
    ],
    firstLineGuidance: 'Avoid sitting on low stools or crossing legs. Use cushioned supportive footwear, walk with a walking aid during flare-ups, and avoid sudden torsional hip twists.',
    whenToConsult: 'A clinical X-ray evaluation is essential if groin pain persists beyond 2 weeks, especially in individuals with a history of steroid medication, post-COVID joint ache, or a sudden limp.',
    defaultReason: 'Hip Pain / Joint Replacement Evaluation',
    surgicalOptions: [
      {
        title: 'Total Hip Replacement (THR)',
        indication: 'Advanced Avascular Necrosis (AVN Stage III/IV), severe osteoarthritis, or neck femur fracture.',
        description: 'Replaces the arthritic femoral head and acetabulum with modern ceramic/metal-on-polyethylene bearings for frictionless joint restoration.',
      },
      {
        title: 'Revision Hip Replacement (Revision THR)',
        indication: 'Aseptic loosening of older hip components, cup migration, liner wear, or periprosthetic fractures.',
        description: 'Reconstructive exchange utilizing specialized long-stem revision implants, modular necks, and trabecular metal acetabular reconstruction.',
      },
      {
        title: 'Core Decompression (Joint Preservation)',
        indication: 'Early-stage (Stage I & II) Avascular Necrosis (AVN) before femoral head collapse occurs.',
        description: 'Minimally invasive decompression reducing intraosseous pressure and promoting vascular bone regeneration to preserve the native hip joint.',
      },
    ],
  },
  {
    id: 'spine',
    name: 'Spine & Lower Back',
    iconLabel: 'Back',
    badge: 'Back Pain • Stiffness • Sciatica',
    summary: 'Lumbar spondylosis, disc herniation, sciatica, facet joint arthrosis, postural strain, and morning lumbar stiffness.',
    commonSymptoms: [
      'Localized lower back ache and spinal stiffness aggravated by prolonged sitting or driving',
      'Sharp radiating pain, tingling, or electric sensations down the buttock into the leg (sciatica)',
      'Severe morning lumbar stiffness requiring several minutes to stand fully upright',
      'Spasm in paraspinal muscles when bending forward or rising from bed',
    ],
    firstLineGuidance: 'Maintain neutral lumbar lordosis with a small lumbar cushion. Take short standing/walking breaks every 45 minutes rather than prolonged bed rest. Apply warm compresses for muscular spasms.',
    whenToConsult: 'Urgent medical evaluation is required if you experience progressive leg weakness (foot drop), numbness in the saddle/groin area, or bladder/bowel incontinence (cauda equina red flags).',
    defaultReason: 'Spine / Back / Neck Evaluation',
    surgicalOptions: [
      {
        title: 'Comprehensive Spine & Posture Assessment',
        indication: 'Chronic lumbar back pain, disc bulge, facet arthritis, and recurrent stiffness.',
        description: 'Structured neurological testing, segmental mobility checks, posture evaluation, and digital MRI/X-ray review.',
      },
      {
        title: 'Conservative Spine & Selective Block Protocol',
        indication: 'Acute lumbar disc herniation, sciatica, and radicular leg pain without motor deficit.',
        description: 'Evidence-based core neuromuscular rehabilitation, ergonomic workstation correction, and targeted selective nerve root block evaluation.',
      },
      {
        title: 'Surgical Spine Triage & Microdiscectomy Referral',
        indication: 'Intractable radiculopathy failing 6–8 weeks of conservative therapy, or progressive motor weakness (foot drop).',
        description: 'Clinical evaluation and hospital surgical coordination for minimally invasive microdiscectomy, decompression, or lumbar stabilization.',
      },
    ],
  },
  {
    id: 'shoulder',
    name: 'Shoulder & Rotator Cuff',
    iconLabel: 'Shoulder',
    badge: 'Rotator Cuff • Arthroscopy • Dislocation',
    summary: 'Frozen shoulder (adhesive capsulitis), rotator cuff tendon tears, subacromial impingement, and recurrent instability.',
    commonSymptoms: [
      'Inability to lift your arm overhead, reach behind your back, or fasten clothing',
      'Dull, aching night discomfort when sleeping on the affected side',
      'Sharp catching sensation when reaching into car backseats or onto upper shelves',
      'Progressive loss of active overhead range and generalized shoulder girdle weakness',
    ],
    firstLineGuidance: 'Avoid forcing painful overhead movements or aggressive pulling. Use a supportive pillow beneath the elbow while sleeping on your back and perform gentle pendulum warm-ups.',
    whenToConsult: 'Seek evaluation if night discomfort disrupts regular sleep, pain radiates into the forearm with numbness, or arm elevation remains restricted past 2 weeks.',
    defaultReason: 'Shoulder Pain / Frozen Shoulder',
    surgicalOptions: [
      {
        title: 'Arthroscopic Rotator Cuff Repair',
        indication: 'Full-thickness rotator cuff tears or subacromial impingement unyielding to structured physiotherapy.',
        description: 'Keyhole suture-anchor repair reattaching the torn tendon footprint onto the humeral head under high-definition visualization.',
      },
      {
        title: 'Arthroscopic Bankart & Labral Repair',
        indication: 'Recurrent shoulder dislocations or post-traumatic labrum tears (Bankart lesion).',
        description: 'Minimally invasive capsulolabral reconstruction using bio-composite suture anchors to restore shoulder joint stability.',
      },
      {
        title: 'Shoulder Arthroplasty (Hemi / Reverse Shoulder Replacement)',
        indication: 'Severe glenohumeral osteoarthritis or rotator cuff tear arthropathy in elderly patients.',
        description: 'Anatomic or reverse geometry joint replacement restoring functional overhead elevation and pain-free movement.',
      },
    ],
  },
  {
    id: 'neck',
    name: 'Neck & Cervical Spine',
    iconLabel: 'Neck',
    badge: 'Cervical Spondylosis • Posture',
    summary: 'Cervical spondylosis, nerve root radiculopathy, trapezius spasm, and digital screen neck strain.',
    commonSymptoms: [
      'Neck stiffness and occipital headaches after prolonged desk work or mobile use',
      'Tingling, numbness, or shooting discomfort travelling down the arm into the fingers',
      'Sharp pain when rotating the neck to look over the shoulder or reverse a vehicle',
      'Upper shoulder muscle trigger points and chronic paraspinal tension',
    ],
    firstLineGuidance: 'Raise mobile screens and computer monitors to eye level. Avoid thick double pillows during sleep and take hourly gentle neck retraction breaks.',
    whenToConsult: 'Consult if radiating arm numbness, clumsiness with shirt buttons, or dropping objects occurs, indicating cervical nerve impingement.',
    defaultReason: 'Spine / Back / Neck Evaluation',
    surgicalOptions: [
      {
        title: 'Cervical Spine Diagnostic Workup',
        indication: 'Persistent neck stiffness, radiculopathy, or tingling down the arms.',
        description: 'Clinical reflex and dermatomal mapping, cervical lordosis assessment, and dynamic digital radiographic/MRI evaluation.',
      },
      {
        title: 'Cervical Decompression & Fusion Referral',
        indication: 'Cervical myelopathy, severe canal stenosis, or progressive hand grip weakness.',
        description: 'Hospital surgical coordination for anterior cervical discectomy and fusion (ACDF) or cervical disc arthroplasty.',
      },
    ],
  },
  {
    id: 'elbow',
    name: 'Elbow & Forearm',
    iconLabel: 'Elbow',
    badge: 'Tendon Overuse • Epicondylitis',
    summary: 'Lateral epicondylitis (Tennis Elbow), medial epicondylitis (Golfer’s Elbow), and olecranon bursitis.',
    commonSymptoms: [
      'Sharp pain on the outside of the elbow when gripping objects or lifting bags',
      'Weakness when shaking hands, turning doorknobs, or lifting teacups',
      'Tenderness directly over the bony outer elbow bump (lateral epicondyle)',
      'Aching forearm muscles following repetitive manual or keyboard work',
    ],
    firstLineGuidance: 'Rest the affected forearm from repetitive twisting or heavy tool use. Use a counterforce forearm strap during necessary manual work and apply cold packs after activity.',
    whenToConsult: 'Book an evaluation if grip weakness prevents routine work or if resting elbow ache persists despite 10 days of activity modification.',
    defaultReason: 'General Orthopaedic Consultation',
    surgicalOptions: [
      {
        title: 'Minimally Invasive Tendon Debridement & Repair',
        indication: 'Recalcitrant tennis or golfer’s elbow failing 6+ months of structured conservative care.',
        description: 'Micro-release of degenerated extensor carpi radialis brevis (ECRB) tendon tissue and decortication to stimulate vascular healing.',
      },
    ],
  },
  {
    id: 'wrist-hand',
    name: 'Wrist & Hand',
    iconLabel: 'Hand',
    badge: 'Nerve Entrapment • Tendonitis',
    summary: 'Carpal tunnel syndrome, De Quervain’s tenosynovitis, trigger finger, and small joint arthritis.',
    commonSymptoms: [
      'Numbness and pins-and-needles in the thumb, index, and middle fingers',
      'Pain near the base of the thumb when texting, typing, or lifting objects',
      'Morning finger stiffness or fingers catching and clicking in a bent position',
      'Need to shake out the hands during the night to relieve tingling numbness',
    ],
    firstLineGuidance: 'Keep wrists in a neutral position while typing. Apply brief cold compresses for thumb base tenderness and wear a resting wrist splint at night.',
    whenToConsult: 'Consult if finger numbness awakens you from sleep or if you notice weakness and thinning of the thumb base muscles (thenar atrophy).',
    defaultReason: 'General Orthopaedic Consultation',
    surgicalOptions: [
      {
        title: 'Carpal Tunnel Release & Trigger Finger Release',
        indication: 'Severe median nerve compression with sensory loss, or persistent painful finger locking.',
        description: 'Outpatient minimally invasive release under local anesthesia, decompressing the nerve and restoring free tendon gliding.',
      },
    ],
  },
  {
    id: 'ankle-foot',
    name: 'Ankle & Foot',
    iconLabel: 'Ankle',
    badge: 'Ligament Sprain • Plantar Fascia',
    summary: 'Ankle ligament sprains, plantar fasciitis, Achilles tendinopathy, and stress reactions.',
    commonSymptoms: [
      'Sharp, stabbing heel pain on taking the very first steps out of bed in the morning',
      'Ankle instability, recurrent twisting, or swelling following a stumble',
      'Ache along the Achilles tendon during or after morning walks',
      'Difficulty bearing full weight after a rolling ankle injury',
    ],
    firstLineGuidance: 'Follow the R.I.C.E. protocol for acute sprains (Rest, Ice, Compression, Elevation). Use supportive arch footwear and avoid walking barefoot on hard tile floors.',
    whenToConsult: 'A clinical X-ray is required if you cannot take 4 steps immediately after injury, if bone tenderness is present over the malleoli, or if swelling persists past 7 days.',
    defaultReason: 'General Orthopaedic Consultation',
    surgicalOptions: [
      {
        title: 'Ankle Ligament Reconstruction & Arthroscopy',
        indication: 'Chronic mechanical ankle instability, osteochondral talar defects, or recurrent giving-way.',
        description: 'Anatomic lateral ligament repair (Brostrom-Gould procedure) or arthroscopic debridement restoring joint stability and athletic function.',
      },
    ],
  },
];

interface InteractiveBodyGuideProps {
  onOpenBooking?: (reason?: string, area?: string) => void;
}

export default function InteractiveBodyGuide({ onOpenBooking }: InteractiveBodyGuideProps) {
  const [selectedAreaId, setSelectedAreaId] = useState<string>('knee');

  const selectedArea = anatomicalAreas.find((a) => a.id === selectedAreaId) || anatomicalAreas[0];

  const handleBookingClick = () => {
    if (onOpenBooking) {
      onOpenBooking(selectedArea.defaultReason, selectedArea.name);
      return;
    }

    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-booking-modal', {
          detail: {
            reason: selectedArea.defaultReason,
            area: selectedArea.name,
          },
        })
      );
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100" id="symptom-navigator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="pill-badge bg-blue-50 text-brand-700 border-blue-200 text-xs">
              Symptom Navigator
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Interactive Clinical Guide
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-950 font-display">
            Where Does It Hurt?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal leading-relaxed">
            Select your affected joint or anatomical region below to understand common clinical presentations, initial self-care steps, and surgical pathways when indicated.
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
                className={`flex-shrink-0 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
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

        {/* Selected Area Detail View */}
        <div 
          id={`panel-${selectedArea.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${selectedArea.id}`}
          className="mt-6"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Summary, Symptoms & Surgical Pathways */}
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

                {/* Initial Conservative Guidance */}
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

              {/* Surgical & Interventional Procedures Section */}
              {selectedArea.surgicalOptions && selectedArea.surgicalOptions.length > 0 && (
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <h4 className="text-sm font-bold text-brand-950 flex items-center gap-2">
                      <Stethoscope className="w-4 h-4 text-brand-700" />
                      <span>Surgical & Interventional Procedures</span>
                    </h4>
                    <span className="pill-badge bg-emerald-50 text-emerald-800 border-emerald-200 text-[10px] font-semibold">
                      When Indicated
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    {selectedArea.surgicalOptions.map((surg, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 transition-colors">
                        <p className="font-bold text-brand-950 text-xs sm:text-sm">{surg.title}</p>
                        <p className="text-[11px] font-medium text-brand-700 mt-0.5">Indication: {surg.indication}</p>
                        <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{surg.description}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-[11px] text-slate-500 italic pt-2 leading-relaxed">
                    *In alignment with National Medical Commission (NMC) regulations, surgical intervention is evaluated only after dedicated physical examination, imaging review, and when conservative management has been adequately explored.
                  </p>
                </div>
              )}
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
                    className="btn-accent-emerald text-xs min-h-[44px] py-3.5 px-5 flex items-center justify-center gap-2 w-full font-bold shadow-sm"
                  >
                    <span>Book Evaluation for {selectedArea.iconLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
