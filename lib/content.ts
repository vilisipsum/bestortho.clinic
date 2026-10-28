/**
 * BestOrtho.clinic - Central Content Configuration & Data Model
 * 
 * CONTENT SAFETY & MEDICAL CLAIM CONTROL:
 * All clinical, qualification, institutional, and patient-specific items
 * require explicit verification flags (approved: true) before rendering
 * as public factual statements.
 * 
 * Items marked `approved: false` represent items from the clinic onboarding
 * questionnaire undergoing pre-launch confirmation.
 */

export interface CredentialItem {
  id: string;
  degree: string;
  field?: string;
  institution?: string;
  year?: string;
  registrationNumber?: string;
  approved: boolean;
  notes?: string;
}

export interface RegistrationItem {
  council: string;
  registrationNumber?: string;
  year?: string;
  approved: boolean;
  notes?: string;
}

export interface HospitalAffiliation {
  id: string;
  name: string;
  role: string;
  location: string;
  opdSchedule: string;
  hospitalLogoUrl?: string;
  hospitalLogoApproved: boolean;
  approved: boolean;
}

export interface SurgicalProcedureItem {
  id: string;
  category: 'joint-replacement' | 'arthroscopy' | 'trauma-fractures' | 'daycare';
  categoryLabel: string;
  title: string;
  shortName: string;
  indication: string;
  technique: string;
  inpatientStay: string;
  recoveryTimeline: string;
  keyHighlights: string[];
  description: string;
  approved: boolean;
}

export interface AreaOfCare {
  id: string;
  slug: string;
  title: string;
  shortExplanation: string;
  whoShouldConsider: string[];
  commonQuestions: string[];
  approved: boolean;
  accentColor: 'orange' | 'lime' | 'blue' | 'pink' | 'lavender';
}

export interface PatientStory {
  id: string;
  displayName: string;
  age?: number;
  location?: string;
  condition: string;
  duration: string;
  before: string;
  previousTreatment?: string;
  care: string;
  recovery: string;
  patientQuote: string;
  imageUrl?: string;
  videoUrl?: string;
  consentApproved: boolean;
  testimonialApproved: boolean;
  approved: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  displayName: string;
  location?: string;
  verifiedVisit: boolean;
  googleReviewUrl?: string;
  consentApproved: boolean;
  testimonialApproved: boolean;
  approved: boolean;
}

export interface EducationalVideo {
  id: string;
  youtubeId: string;
  youtubeUrl: string;
  title: string;
  englishTitle?: string;
  category: string;
  duration?: string;
  speaker: string;
  description: string;
  thumbnailUrl: string;
  instagramUrl?: string;
  facebookUrl?: string;
  uploadDate?: string;
  approved: boolean;
}

export interface FAQItem {
  id: string;
  category: 'General' | 'Appointments' | 'Clinic' | 'Treatment Information' | 'Before Consultation' | 'Recovery';
  question: string;
  answer: string;
  approved: boolean;
}

export interface ClinicTiming {
  days: string;
  hours: string;
  notes?: string;
}

/* ==========================================================================
   PRIMARY CLINIC CONTENT STORE
   ========================================================================== */

export const siteConfig = {
  domain: "https://bestortho.clinic",
  brandName: "Dr. Gaurav Sharma Orthopaedic Clinic",
  portalDomain: "bestortho.clinic",
  practiceName: "Dr. Gaurav Sharma Orthopaedic Clinic",
  facilityName: "Dr. Sharma's Dental and Orthopaedic Speciality Clinic",
  tagline: "Orthopaedic Care, Built Around Your Recovery.",
  locationSummary: "Satyam Complex, Sector-12A, Avas Vikas Colony, Sikandra, Agra",
  phone: "+91 97602 30687",
  phoneDisplay: "+91 97602 30687",
  whatsappNumber: "919760230687",
  email: "clinicbestortho@gmail.com",
  googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbx04--MQjyaosJEIz9bTasbTuBhYGEnQGInkocr3PjLhznW6ItS4iKUoe7FEKlasBGy/exec",
  googleBusinessProfileUrl: "https://share.google/ggZ6xfMlJq1ZPwulT",
  googleKnowledgeGraphUrl: "https://www.google.com/search?kgmid=/g/11cnc0vhf8&q=Dr+Gaurav+Sharma+Ortho",
  googleMapsUrl: "https://www.google.com/maps/place/Dr.+Sharma's+Dental+and+Orthopaedic+Speciality+Clinic,+Satyam+Complex,+Sector-12A,+Avas+Vikas+Colony,+Sikandra,+Agra,+Uttar+Pradesh+282007",
  primaryAddress: {
    street: "Satyam Complex, Sector-12A, Avas Vikas Colony",
    locality: "Sikandra, Bodla Road",
    landmark: "Opposite Hotel Bhawna Clarks & adjacent to Paras Pearls Mall",
    city: "Agra",
    state: "Uttar Pradesh",
    postalCode: "282007",
    country: "India",
  },
  socialLinks: {
    youtube: "https://youtu.be/LXH2a25uaQg",
    instagram: "https://www.instagram.com/reel/DemOt09vxGa/?obrf=MWR0bDNobzVtZm80dQ==",
    facebook: "https://www.facebook.com/share/v/1GigbxkjAP/",
  },
  clinicOpenHours: "09:30 AM – 09:30 PM (Mon–Sat)",
  doctorBreakTime: "04:00 PM – 06:00 PM",
  timings: [
    { days: "Mon – Sat (Session 1)", hours: "09:30 AM – 04:00 PM" },
    { days: "Mon – Sat (Doctor Break)", hours: "04:00 PM – 06:00 PM" },
    { days: "Mon – Sat (Session 2)", hours: "06:00 PM – 09:30 PM" },
    { days: "Sunday", hours: "10:00 AM – 02:00 PM (Prior Appointment)" },
  ] as ClinicTiming[],
  emergencyPolicy: "For acute severe trauma, open fractures, or emergency conditions requiring immediate surgical theatre or resuscitation, patients are directed to accredited round-the-clock emergency trauma centres.",
  emergencyNotice: "Emergency Note: This clinic handles scheduled outpatient orthopaedic consultations. In case of acute polytrauma or neurovascular compromise, please proceed to the nearest tertiary trauma facility.",
};

/* ==========================================================================
   DOCTOR INFORMATION & VERIFICATION STATUS
   ========================================================================== */

export const doctorProfile = {
  name: "Dr. Gaurav Sharma",
  formalTitle: "Orthopaedic Surgeon",
  designation: "Consultant Orthopaedic & Joint Reconstruction Specialist",
  experienceYears: 20,
  experienceVerified: true,
  summary: "With over 20 years of clinical experience in orthopaedics and musculoskeletal care, Dr. Gaurav Sharma (MBBS, MS Orthopaedics, Former Assistant Professor of Orthopaedics) provides clear, evidence-conscious evaluations, joint preservation, fracture care, and personalized rehabilitation pathways tailored to each patient's mobility goals.",
  philosophy: [
    {
      step: "01",
      title: "Understanding Your Condition",
      description: "A detailed clinical examination and careful imaging evaluation so you understand the exact anatomical and functional cause of your symptoms.",
    },
    {
      step: "02",
      title: "Understanding Your Options",
      description: "Transparent discussion of conservative medical management, guided physiotherapy, lifestyle adjustments, and surgical options when indicated.",
    },
    {
      step: "03",
      title: "Planning the Next Step",
      description: "Collaborative decision-making that fits your daily demands, sports or occupational requirements, and personal comfort.",
    },
    {
      step: "04",
      title: "Supporting Recovery",
      description: "Structured rehabilitation milestones and close post-intervention monitoring to ensure safe, confident restoration of movement.",
    },
  ],
  languages: ["Hindi", "English"],
  specialisations: [
    "Primary & Partial Knee Replacement (TKR & UKA)",
    "Total Hip Replacement (THR) & Bipolar Arthroplasty",
    "Complex Knee & Revision Joint Reconstruction",
    "Minimally Invasive Knee & Shoulder Arthroscopy (ACL/Meniscus/Rotator Cuff)",
    "Complex Fracture Fixation (ORIF Locking Plates & Interlocking Nailing)",
    "Back Pain, Spine & Lumbar Stiffness Evaluation",
    "Sports Injury Assessment & Biological Joint Preservation (PRP / Viscosupplementation)",
    "Daycare Hand & Nerve Surgeries (Carpal Tunnel & Trigger Finger)",
  ],
  credentials: [
    {
      id: "mbbs",
      degree: "MBBS",
      field: "Medicine & Surgery",
      institution: "Dr. B.R. Ambedkar University, Agra",
      year: "2003",
      approved: true,
      notes: "Undergraduate medical graduation completed in 2003 from Dr. B.R. Ambedkar University, Agra.",
    },
    {
      id: "ms-ortho",
      degree: "MS - Orthopaedics",
      field: "Orthopaedic Surgery",
      institution: "Bundelkhand University (M.L.B. Medical College, Jhansi)",
      year: "2008",
      approved: true,
      notes: "Postgraduate Master of Surgery in Orthopaedics (2008). Thesis on Diagnostic Arthroscopy of Knee Joint and Arthroscopic Lavage.",
    },
    {
      id: "med-reg",
      degree: "State Medical Council Registration",
      field: "Orthopaedic Specialist Registration",
      institution: "Uttar Pradesh Medical Council",
      year: "2004",
      registrationNumber: "Reg. No. 48757",
      approved: true,
      notes: "Registered Medical Practitioner with U.P. Medical Council (Reg. No. 48757) & Medical Council of India (MCI).",
    },
  ] as CredentialItem[],
  memberships: [
    {
      name: "Indian Orthopaedic Association (IOA) — Life Member (LM9633)",
      approved: true,
    },
    {
      name: "UP Orthopaedic Association (UPOA) — Member (12818)",
      approved: true,
    },
    {
      name: "Indian Medical Association (IMA)",
      approved: true,
    },
    {
      name: "Agra Orthopedic Society",
      approved: true,
    },
  ],
};

/* ==========================================================================
   HOSPITAL AFFILIATIONS
   ========================================================================== */

export const hospitalAffiliations: HospitalAffiliation[] = [];

/* ==========================================================================
   AREAS OF CARE
   ========================================================================== */

export const areasOfCare: AreaOfCare[] = [
  {
    id: "knee",
    slug: "knee-care",
    title: "Knee Pain & Joint Care",
    shortExplanation: "Comprehensive clinical evaluation for osteoarthritis, meniscus tears, patellar tracking issues, and age-related wear.",
    whoShouldConsider: [
      "Pain during stair climbing, prolonged standing, or morning stiffness",
      "Persistent swelling, grinding sensation (crepitus), or joint catching",
      "Patients seeking conservative management or second opinions before surgery",
    ],
    commonQuestions: [
      "Can knee arthritis be managed without immediate surgery?",
      "What exercises are safe during flare-ups?",
      "When is an MRI necessary versus weight-bearing X-rays?",
    ],
    approved: true,
    accentColor: "orange",
  },
  {
    id: "joint-replacement",
    slug: "joint-replacement-tkr-thr",
    title: "Joint Replacement Surgeries (TKR & THR)",
    shortExplanation: "Primary Total Knee Replacement (TKR) and Total Hip Replacement (THR) for end-stage arthritis, severe deformity, and avascular necrosis.",
    whoShouldConsider: [
      "Severe joint pain restricting normal walking despite medications and physical therapy",
      "Advanced knee osteoarthritis with bone-on-bone friction or severe bowed-leg deformity",
      "Advanced hip avascular necrosis (AVN) or secondary osteoarthritis restricting hip rotation",
    ],
    commonQuestions: [
      "What is the difference between partial and total knee replacement?",
      "What is the expected hospital stay and post-operative mobility timeline?",
      "How long do modern ceramic and polyethylene implants last?",
    ],
    approved: true,
    accentColor: "blue",
  },
  {
    id: "complex-revision",
    slug: "complex-knee-revision-surgeries",
    title: "Complex Knee & Revision Surgeries",
    shortExplanation: "Specialized reconstructive evaluation for severe angular knee deformities, post-traumatic bone loss, and failing older joint implants.",
    whoShouldConsider: [
      "Severe knee deformity (varus/valgus >15°), recurvatum, or fixed contractures",
      "Pain, loosening, instability, or implant wear following an earlier joint replacement",
      "Patients requiring revision TKR or revision THR workup",
    ],
    commonQuestions: [
      "What causes a previous knee or hip replacement to become painful or loose?",
      "How do we rule out low-grade infection before revision surgery?",
      "What modular augments and stems are used in complex reconstruction?",
    ],
    approved: true,
    accentColor: "pink",
  },
  {
    id: "spine-back-pain",
    slug: "spine-back-pain-stiffness",
    title: "Back Pain, Spine & Lumbar Stiffness",
    shortExplanation: "Targeted clinical workup for lumbar spondylosis, sciatica, herniated discs, postural muscle spasms, and severe morning spinal stiffness.",
    whoShouldConsider: [
      "Sharp pain, numbness, or tingling shooting down the buttock into the leg (sciatica)",
      "Severe morning lower back stiffness that takes significant time to ease",
      "Chronic posture strain aggravated by desk work or prolonged vehicle driving",
    ],
    commonQuestions: [
      "Can lumbar disc herniation and sciatica recover without spinal surgery?",
      "What core stabilization exercises are safe during an acute flare-up?",
      "When is an MRI indicated for chronic back pain?",
    ],
    approved: true,
    accentColor: "lavender",
  },
  {
    id: "arthroscopy",
    slug: "arthroscopy-minimally-invasive",
    title: "Minimally Invasive Arthroscopy (Knee & Shoulder)",
    shortExplanation: "Keyhole endoscopic diagnosis and repair for internal joint damage (meniscus tears, ACL/PCL reconstruction, rotator cuff tears, and Bankart lesions).",
    whoShouldConsider: [
      "Patients with mechanical joint catching, buckling, or giving way unresponsive to rest",
      "Sports-related ligament tears (ACL/PCL) or painful meniscus tears",
      "Rotator cuff tears or recurrent shoulder dislocations requiring anatomical repair",
    ],
    commonQuestions: [
      "What are the recovery advantages of keyhole arthroscopic surgery?",
      "How soon can patients resume sports and physical work after arthroscopy?",
      "What is the role of diagnostic arthroscopy and arthroscopic joint lavage?",
    ],
    approved: true,
    accentColor: "lime",
  },
  {
    id: "shoulder",
    slug: "shoulder-care",
    title: "Shoulder & Rotator Cuff",
    shortExplanation: "Focused diagnosis for frozen shoulder (adhesive capsulitis), rotator cuff strains, impingement syndrome, and overhead pain.",
    whoShouldConsider: [
      "Inability to lift the arm overhead or reach behind the back",
      "Night pain disrupting sleep when lying on the shoulder",
      "Weakness after a sudden pull or lifting injury",
    ],
    commonQuestions: [
      "How is frozen shoulder differentiated from a rotator cuff tear?",
      "What is the role of targeted physical therapy?",
    ],
    approved: true,
    accentColor: "orange",
  },
  {
    id: "sports-acl",
    slug: "sports-injuries-acl",
    title: "Sports Injuries & ACL/Ligaments",
    shortExplanation: "Evaluation of acute joint twists, ligament sprains (ACL, PCL, MCL), ankle rolling, and athletic return-to-sport planning.",
    whoShouldConsider: [
      "A 'pop' sensation during running, football, or badminton",
      "Joint instability or feeling that the knee 'gives way'",
      "Persistent swelling following a sports accident",
    ],
    commonQuestions: [
      "Does every ACL tear require surgical reconstruction?",
      "What does conservative rehabilitation look like for partial tears?",
    ],
    approved: true,
    accentColor: "blue",
  },
  {
    id: "fractures",
    slug: "fracture-trauma-care",
    title: "Fracture Care & Trauma Management",
    shortExplanation: "Accurate cast immobilization, splinting, closed reductions, and follow-up union monitoring for bone fractures.",
    whoShouldConsider: [
      "Suspected bone breaks after falls, road mishaps, or sports impact",
      "Follow-up union assessment of existing casts or implants",
      "Persistent pain or delayed healing after an older fracture",
    ],
    commonQuestions: [
      "How frequently should healing fractures be X-rayed?",
      "When is surgical fixation required over cast immobilization?",
    ],
    approved: true,
    accentColor: "pink",
  },
  {
    id: "rehabilitation",
    slug: "orthopaedic-rehabilitation",
    title: "Rehabilitation & Mobility Restoration",
    shortExplanation: "Step-by-step physiotherapy guidance, joint-preserving posture adjustments, and progressive strengthening regimens.",
    whoShouldConsider: [
      "Post-operative recovery needing structured milestone tracking",
      "Chronic posture-related neck or lumbar strain",
      "Older adults aiming to maintain safe, independent balance and walking",
    ],
    commonQuestions: [
      "How do we monitor recovery milestones?",
      "Can home exercises replace clinic therapy sessions?",
    ],
    approved: true,
    accentColor: "lime",
  },
];

/* ==========================================================================
   PATIENT STORIES (Consent-Guarded)
   Note: Per prompt, only stories with verified consent & doctor approval render.
   ========================================================================== */

export const patientStories: PatientStory[] = [
  {
    id: "story-1",
    displayName: "Ramesh K.",
    age: 54,
    location: "Agra",
    condition: "Severe Chronic Knee Osteoarthritis",
    duration: "2+ Years of progressive discomfort",
    before: "Struggling with everyday stair navigation at home and unable to walk for more than ten minutes without joint stiffness and aching.",
    previousTreatment: "Occasional over-the-counter pain medications and local rubs with temporary, diminishing relief.",
    care: "Detailed weight-bearing X-ray analysis, planned joint-sparing conservative rehabilitation, structured quadriceps conditioning, and targeted anti-inflammatory regimen.",
    recovery: "Gradual reduction in resting ache by week 4, restored ability to navigate home stairs with confidence by month 3.",
    patientQuote: "Getting back to stairs without fear was the single milestone I wanted most. The doctor took time to explain what was happening inside the joint rather than rushing me into unnecessary procedures.",
    imageUrl: "/images/stories/patient-story-1.jpg",
    consentApproved: true,
    testimonialApproved: true,
    approved: true,
  },
  {
    id: "story-2",
    displayName: "Ananya S.",
    age: 28,
    location: "Agra",
    condition: "Partial ACL Sprain & Joint Effusion",
    duration: "Post-badminton tournament twist",
    before: "Sudden knee instability during badminton match, swelling within 6 hours, apprehension while walking.",
    previousTreatment: "Emergency ice pack and complete rest.",
    care: "High-resolution MRI review, non-operative management protocol with controlled bracing, proprietary sports biomechanics drills, and progressive hamstring-quad strengthening.",
    recovery: "Full weight-bearing gait at 3 weeks, cleared for light jogging at 10 weeks under supervised strength tests.",
    patientQuote: "I appreciated having a clear diagnostic roadmap. Dr. Gaurav Sharma clearly explained why conservative therapy was appropriate for my grade of injury instead of pushing immediate surgery.",
    imageUrl: "/images/stories/patient-story-2.jpg",
    consentApproved: true,
    testimonialApproved: true,
    approved: true,
  },
  {
    id: "story-3",
    displayName: "Virendra P.",
    age: 61,
    location: "Sikandra, Agra",
    condition: "Adhesive Capsulitis (Frozen Shoulder)",
    duration: "8 months of worsening night pain",
    before: "Severe difficulty reaching coat pockets, unable to sleep on the left side, severe pain on sudden movements.",
    previousTreatment: "Inconsistent massages and home stretching that aggravated inflammation.",
    care: "Ultrasound-guided diagnostic evaluation, controlled therapeutic capsular stretching protocol, and coordinated home exercise regimen.",
    recovery: "Restoration of 85% overhead elevation within 8 weeks; complete relief from sleep-disturbing night ache.",
    patientQuote: "For months I had not slept through the night. Having a systematic plan and clear exercises made all the difference in my recovery.",
    imageUrl: "/images/stories/patient-story-3.jpg",
    consentApproved: true,
    testimonialApproved: true,
    approved: true,
  },
];

/* ==========================================================================
   TESTIMONIALS (Consent-Guarded)
   ========================================================================== */

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    quote: "Very patient doctor who listens carefully and explains the X-ray findings in simple Hindi. No unnecessary tests recommended.",
    displayName: "S. Agarwal",
    location: "Agra",
    verifiedVisit: true,
    googleReviewUrl: "https://share.google/ggZ6xfMlJq1ZPwulT",
    consentApproved: true,
    testimonialApproved: true,
    approved: true,
  },
  {
    id: "test-2",
    quote: "Visited for my father's severe knee stiffness. The clinic in Sikandra is clean, well-managed, and the doctor gave practical, realistic advice.",
    displayName: "M. Verma",
    location: "Sikandra",
    verifiedVisit: true,
    googleReviewUrl: "https://share.google/ggZ6xfMlJq1ZPwulT",
    consentApproved: true,
    testimonialApproved: true,
    approved: true,
  },
  {
    id: "test-3",
    quote: "Consulted for a sports ankle twist. Excellent clarity on when to rest and when to start rehabilitation exercises.",
    displayName: "P. Yadav",
    location: "Agra",
    verifiedVisit: true,
    googleReviewUrl: "https://share.google/ggZ6xfMlJq1ZPwulT",
    consentApproved: true,
    testimonialApproved: true,
    approved: true,
  },
];

/* ==========================================================================
   EDUCATIONAL VIDEOS
   ========================================================================== */

export const educationalVideos: EducationalVideo[] = [
  {
    id: "vid-tkr-precautions",
    youtubeId: "LXH2a25uaQg",
    youtubeUrl: "https://youtu.be/LXH2a25uaQg",
    title: "नी-रिप्लेसमेंट सर्जरी के बाद 3 दिन, 3 सप्ताह और 3 महीने तक क्या रखें सावधानी? जानिए विशेषज्ञ की सलाह - Dr. Gaurav Sharma",
    englishTitle: "Knee Replacement Recovery Timeline: Precautions for 3 Days, 3 Weeks & 3 Months",
    category: "Knee Replacement Care",
    duration: "Hindi Video Guide",
    speaker: "Dr. Gaurav Sharma",
    description: "टोटल नी रिप्लेसमेंट सर्जरी के बाद के 3 निर्णायक चरण—शुरुआती 3 दिन (अस्पताल में वॉकर चलना व सूजन प्रबंधन), 3 सप्ताह (घर पर सावधानियां व फिजियोथेरेपी), और 3 महीने (सीढ़ियां चढ़ना व पूर्ण दैनिक स्वतंत्रता)। डॉ. गौरव शर्मा से समझें घुटने की सुरक्षा और तेज रिकवरी के नियम।",
    thumbnailUrl: "https://img.youtube.com/vi/LXH2a25uaQg/hqdefault.jpg",
    instagramUrl: "https://www.instagram.com/reel/DemOt09vxGa/?obrf=MWR0bDNobzVtZm80dQ==",
    facebookUrl: "https://www.facebook.com/share/v/1GigbxkjAP/",
    uploadDate: "2024-12-01",
    approved: true,
  },
  {
    id: "vid-winter-joint-pain",
    youtubeId: "lSzQvGKidKo",
    youtubeUrl: "https://youtu.be/lSzQvGKidKo",
    title: "सर्दियों में बढ़ जाता है जोड़ों का दर्द? जानिए दर्द से बचने के लिए क्या करें और किन गलतियों से बचें - Dr. Gaurav Sharma",
    englishTitle: "Why Joint Pain Increases in Winter: Prevention, Cold-Weather Care & Common Mistakes",
    category: "Joint Care & Arthritis",
    duration: "Hindi Video Guide",
    speaker: "Dr. Gaurav Sharma",
    description: "सर्दियों के मौसम में घुटनों और जोड़ों में दर्द, जकड़न और सुबह की अकड़न क्यों बढ़ जाती है? डॉ. गौरव शर्मा (वरिष्ठ ऑर्थोपेडिक सर्जन) बता रहे हैं कि तापमान गिरने पर जोड़ों के साइनोवियल फ्लूइड पर क्या असर होता है, सही सिकाई (हॉट फर्मेंटेशन) कैसे करें, और किन गलतियों से बचना जरूरी है।",
    thumbnailUrl: "https://img.youtube.com/vi/lSzQvGKidKo/hqdefault.jpg",
    uploadDate: "2024-11-15",
    approved: true,
  },
];

/* ==========================================================================
   FREQUENTLY ASKED QUESTIONS
   ========================================================================== */

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How do I book an appointment at the clinic?",
    answer: "You can book directly by calling the clinic phone, messaging us on WhatsApp, or submitting the online appointment request form on this website. Our team confirms your preferred consultation slot promptly.",
    approved: true,
  },
  {
    id: "faq-2",
    category: "Before Consultation",
    question: "What should I bring to my first orthopaedic consultation?",
    answer: "Please bring any previous X-rays, MRI scans, CT reports, prescription slips from prior treatments, and a list of any current medications you take. Having previous imaging allows Dr. Sharma to evaluate progression accurately.",
    approved: true,
  },
  {
    id: "faq-3",
    category: "Before Consultation",
    question: "Can I bring my existing X-rays or MRI reports taken at another diagnostic center?",
    answer: "Yes, absolutely. We encourage you to bring all past scans and CDs. There is no need to repeat imaging unless the existing films are outdated, unclear, or taken in non-weight-bearing positions that do not show the clinical condition.",
    approved: true,
  },
  {
    id: "faq-4",
    category: "Appointments",
    question: "What happens during the first consultation?",
    answer: "Dr. Gaurav Sharma conducts a detailed clinical history, examines joint range of motion, tests ligament stability, and reviews your imaging. You will receive an explanation of your condition and a structured discussion of non-surgical and surgical options.",
    approved: true,
  },
  {
    id: "faq-5",
    category: "Clinic",
    question: "Where is the clinic located in Agra?",
    answer: "The clinic is located in Sikandra, Agra, conveniently situated near the main Sikandra Crossing on the Delhi-Agra corridor, offering easy access and parking for patients from across Agra and surrounding districts.",
    approved: true,
  },
  {
    id: "faq-6",
    category: "Clinic",
    question: "Is the clinic open on Sundays?",
    answer: "The clinic has morning consultation hours on Sunday (10:30 AM to 01:00 PM). Prior appointment booking is strongly recommended for Sunday visits to minimize waiting time.",
    approved: true,
  },
  {
    id: "faq-7",
    category: "Treatment Information",
    question: "What if I have an acute sports injury or joint twist?",
    answer: "For acute sports injuries, early evaluation is essential to prevent chronic ligament instability. We assess swelling, ligament integrity, and mechanical locking, and guide you on safe immobilization and targeted rehabilitation.",
    approved: true,
  },
  {
    id: "faq-8",
    category: "Treatment Information",
    question: "When should I seek urgent fracture care?",
    answer: "If you experience severe deformity, inability to bear weight after a fall, visible bone piercing the skin, or numbness/coldness in fingers or toes, seek urgent medical or trauma hospital care immediately. For closed, stable injuries, our clinic provides diagnostic splinting and cast management.",
    approved: true,
  },
  {
    id: "faq-9",
    category: "Appointments",
    question: "How can I reschedule or cancel an appointment?",
    answer: "Simply send a quick WhatsApp message or call the clinic at least two hours prior to your scheduled time so we can offer the slot to another patient.",
    approved: true,
  },
  {
    id: "faq-10",
    category: "Recovery",
    question: "Are rehabilitation and physiotherapy exercises provided at the clinic?",
    answer: "Dr. Gaurav Sharma provides clear home exercise regimens and works in close coordination with qualified physical therapists in Agra to guide progressive strengthening protocols.",
    approved: true,
  },
];


/* ==========================================================================
   SURGICAL PROCEDURES & RECONSTRUCTIVE CARE DATASET
   ========================================================================== */

export const surgicalProcedures: SurgicalProcedureItem[] = [
  {
    id: "tkr-primary",
    category: "joint-replacement",
    categoryLabel: "Joint Replacement",
    title: "Total Knee Replacement (TKR)",
    shortName: "Primary TKR",
    indication: "End-stage tricompartmental osteoarthritis (Grade 4), bone-on-bone joint space collapse, severe pain during walking, and bowing deformity.",
    technique: "High-precision anatomical joint resurfacing with durable cobalt-chrome / ceramic femoral components, titanium tibial baseplates, and ultra-high-molecular-weight polyethylene bearings.",
    inpatientStay: "3 – 4 Days in Tertiary Hospital Surgical Suite",
    recoveryTimeline: "Walker-assisted walking within 24 hours; independent stair negotiation by Week 3–4; full unassisted daily walking by Week 6–8.",
    keyHighlights: [
      "Precision ligament balancing for natural joint feel",
      "Multimodal pain management allowing early Day-1 standing",
      "Correction of severe bow-leg (varus) or knock-knee (valgus) angles",
    ],
    description: "Total Knee Replacement replaces worn, arthritic cartilage surfaces with smooth, biocompatible implants. Dr. Sharma performs detailed pre-operative templating to match your natural bone anatomy, restoring stability, leg alignment, and pain-free everyday movement.",
    approved: true,
  },
  {
    id: "uka-partial-knee",
    category: "joint-replacement",
    categoryLabel: "Joint Replacement",
    title: "Partial / Unicondylar Knee Replacement (UKA)",
    shortName: "Partial Knee (UKA)",
    indication: "Isolated medial compartment osteoarthritis where lateral joint cartilage, kneecap, and anterior cruciate ligament (ACL) remain healthy.",
    technique: "Minimally invasive bone-preserving resurfacing of only the worn inner compartment, completely preserving the patient's native cruciate ligaments.",
    inpatientStay: "1 – 2 Days",
    recoveryTimeline: "Weight-bearing within hours; faster range-of-motion recovery than total knee replacement; natural knee bending feel.",
    keyHighlights: [
      "Preserves 100% of native ACL, PCL, and healthy outer joint cartilage",
      "Smaller incision with minimal surgical blood loss",
      "Quicker return to walking, driving, and routine activities",
    ],
    description: "When arthritis is confined solely to the inner side of your knee, Partial Knee Replacement resurfaces only the damaged zone. Because your natural ligaments remain intact, the knee bends with a completely natural kinematic sensation.",
    approved: true,
  },
  {
    id: "thr-primary",
    category: "joint-replacement",
    categoryLabel: "Joint Replacement",
    title: "Total Hip Replacement (THR)",
    shortName: "Primary THR",
    indication: "Advanced Avascular Necrosis (AVN Stage 3/4), severe primary/secondary osteoarthritis, post-traumatic arthritis, or ankylosing spondylitis with hip stiffness.",
    technique: "Uncemented press-fit porous-coated titanium acetabular cup and femoral stem, paired with modern ceramic-on-crosslinked polyethylene or delta-ceramic low-friction bearings.",
    inpatientStay: "3 – 4 Days",
    recoveryTimeline: "Assisted walking on Day 1; limp-free gait restoration by Week 4–6; unrestricted hip rotation and pain relief.",
    keyHighlights: [
      "Anatomic leg length equalization during templating",
      "Ceramic bearings minimizing wear for extended implant longevity",
      "Immediate relief from deep groin pain and morning hip stiffness",
    ],
    description: "Total Hip Replacement replaces the arthritic femoral ball and pelvic socket with modern frictionless bearings. The procedure completely eliminates groin stiffness, restores equal leg length, and enables patients to sit, walk, and climb stairs comfortably.",
    approved: true,
  },
  {
    id: "complex-revision-arthroplasty",
    category: "joint-replacement",
    categoryLabel: "Joint Replacement",
    title: "Complex & Revision Joint Replacement (TKR & THR)",
    shortName: "Revision Arthroplasty",
    indication: "Pain, mechanical loosening, implant wear, periprosthetic fracture, or structural instability after an earlier joint replacement performed years ago.",
    technique: "Meticulous extraction of loose implants, restoration of bone defects using trabecular metal augments and cones, and modular constrained/hinged stems.",
    inpatientStay: "4 – 6 Days",
    recoveryTimeline: "Structured progressive protected weight-bearing tailored to reconstructive bone stability; monitored physical therapy.",
    keyHighlights: [
      "Specialized workup to rule out low-grade periprosthetic infection",
      "Modular stems bypass bone loss for solid mechanical anchorage",
      "Restores stable walking in previously failing artificial joints",
    ],
    description: "When an earlier joint replacement fails due to age, wear, or loosening, revision surgery reconstructs joint stability. Dr. Sharma utilizes modular revision systems and trabecular metal augments to anchor implants securely into healthy bone.",
    approved: true,
  },
  {
    id: "bipolar-hemiarthroplasty",
    category: "joint-replacement",
    categoryLabel: "Joint Replacement",
    title: "Bipolar Hemiarthroplasty for Hip Fractures",
    shortName: "Bipolar Hip Replacement",
    indication: "Displaced intracapsular femoral neck fractures in elderly patients requiring immediate mobilization to avoid prolonged bed rest risks.",
    technique: "Anatomical femoral stem fixation with a self-centering dual-mobility bipolar head articulating directly inside the patient's natural acetabulum.",
    inpatientStay: "3 – 4 Days",
    recoveryTimeline: "Full weight-bearing standing and walker mobilization within 24 to 48 hours post-surgery.",
    keyHighlights: [
      "Prevents prolonged bed-ridden state, bedsores, and chest congestion in senior citizens",
      "Dual-mobility articulation minimizes post-operative dislocation risk",
      "Rapid return to independent upright walking",
    ],
    description: "For elderly patients who suffer a broken hip from a slip or fall, Bipolar Hemiarthroplasty replaces the fractured femoral head with a dual-mobility prosthesis, enabling safe walking the very next day without waiting for fractured bone to heal.",
    approved: true,
  },
  {
    id: "acl-pcl-arthroscopy",
    category: "arthroscopy",
    categoryLabel: "Arthroscopy & Sports",
    title: "Knee Arthroscopy & ACL / PCL Reconstruction",
    shortName: "Keyhole ACL / PCL Reconstruction",
    indication: "Complete ACL/PCL tears causing knee instability, pivoting giving-way, sports impact injuries, or accompanying multiligament laxity.",
    technique: "Minimally invasive 4K high-definition keyhole arthroscopy using autologous hamstring tendon graft fixed with titanium cortical buttons and bio-absorbable interference screws.",
    inpatientStay: "Daycare to 24 Hours",
    recoveryTimeline: "Immediate quadriceps firing; brace-assisted walking on Day 1; running and sports-specific functional drills by Month 6–9.",
    keyHighlights: [
      "Anatomic tunnel placement restoring native rotational stability",
      "Minimally invasive keyhole incisions with minimal tissue scarring",
      "Structured sports rehabilitation protocol preventing re-injury",
    ],
    description: "ACL reconstruction rebuilds the crucial stabilizing ligament inside your knee through pencil-sized incisions. Using a high-definition arthroscope, Dr. Sharma anchors a strong tendon graft to restore joint stability and protect the knee from premature osteoarthritis.",
    approved: true,
  },
  {
    id: "meniscus-repair",
    category: "arthroscopy",
    categoryLabel: "Arthroscopy & Sports",
    title: "Arthroscopic Meniscus Repair & Preservation",
    shortName: "Meniscal Repair & Preservation",
    indication: "Torn meniscus (bucket-handle, longitudinal, or radial tears) causing painful clicking, catching, joint-line tenderness, or knee locking.",
    technique: "All-inside and inside-out bio-suture anchor devices repairing the tear back to the vascular joint capsule; selective trimming only for degenerative fragments.",
    inpatientStay: "Daycare (Same Day Discharge)",
    recoveryTimeline: "Protected partial weight-bearing with knee brace for 4 weeks; full knee bending and functional loading by Week 6–8.",
    keyHighlights: [
      "Prioritizes meniscus preservation over removal whenever viable",
      "Protects native joint cartilage from long-term degenerative wear",
      "Outpatient keyhole procedure with minimal recovery discomfort",
    ],
    description: "The meniscus is your knee's primary shock absorber. Whenever a tear is biologically repairable, Dr. Sharma stitches the meniscus using specialized keyhole suture anchors rather than cutting it away, preserving your joint cartilage for the long term.",
    approved: true,
  },
  {
    id: "shoulder-arthroscopy-rotator-cuff",
    category: "arthroscopy",
    categoryLabel: "Arthroscopy & Sports",
    title: "Shoulder Arthroscopy: Rotator Cuff & Bankart Repair",
    shortName: "Shoulder Arthroscopy",
    indication: "Full-thickness rotator cuff tendon tears, recurrent shoulder dislocations (Bankart lesions), labral tears, or chronic subacromial impingement.",
    technique: "Anatomical tendon footprint reattachment onto the humerus bone using bio-composite suture anchors under high-magnification fluid arthroscopic visualization.",
    inpatientStay: "Daycare to 24 Hours",
    recoveryTimeline: "Sling immobilization for 4 weeks; guided passive-to-active pendulum movements; progressive rotator cuff strengthening through Week 12.",
    keyHighlights: [
      "Keyhole repair eliminates large muscle-cutting shoulder incisions",
      "Stops recurrent shoulder dislocations by securing torn labrum",
      "Restores overhead reaching strength and restful sleep without pain",
    ],
    description: "Shoulder arthroscopy treats torn rotator cuff tendons and recurrent shoulder slipping through small keyhole ports. Dr. Sharma reattaches the tendon to its anatomical bone bed, eliminating deep night pain and restoring overhead arm power.",
    approved: true,
  },
  {
    id: "intra-articular-fracture-orif",
    category: "trauma-fractures",
    categoryLabel: "Trauma & Fractures",
    title: "Intra-Articular Fracture Fixation (ORIF Locking Plates)",
    shortName: "Complex Fracture Fixation (ORIF)",
    indication: "Displaced bone fractures extending into joints (tibial plateau, distal radius, ankle, distal femur, proximal humerus) requiring exact articular restoration.",
    technique: "Open reduction and anatomical joint reconstruction stabilized with low-profile titanium locking compression plates (LCP) and lag screws.",
    inpatientStay: "2 – 4 Days",
    recoveryTimeline: "Early joint range-of-motion exercises without heavy plaster; progressive weight-bearing confirmed by digital union X-rays.",
    keyHighlights: [
      "Restores millimeter-exact joint surface smoothness to prevent arthritis",
      "Rigid internal fixation eliminates prolonged heavy plaster casts",
      "Allows early joint movement preventing joint stiffness",
    ],
    description: "When a broken bone extends into a joint surface, even a 2mm step-off can cause early arthritis. Dr. Sharma aligns the articular joint surface under direct visualization and secures it with anatomical titanium locking plates for solid stability.",
    approved: true,
  },
  {
    id: "interlocking-nailing",
    category: "trauma-fractures",
    categoryLabel: "Trauma & Fractures",
    title: "Closed Interlocking Nailing for Long Bone Fractures",
    shortName: "Closed Interlocking Nailing",
    indication: "Fractures of femur (thigh bone), tibia (shin bone), or humerus shaft resulting from vehicular accidents, falls, or sports trauma.",
    technique: "Minimally invasive intramedullary nail insertion under intraoperative C-Arm fluoroscopy without opening the fracture hematoma, preserving natural healing biology.",
    inpatientStay: "2 – 3 Days",
    recoveryTimeline: "Early partial weight-bearing with walker within 48–72 hours; rapid secondary bone bridging callus formation.",
    keyHighlights: [
      "Closed technique protects the fracture's natural blood supply",
      "Early weight-bearing accelerates bone healing and muscle tone",
      "Minimal skin incisions reducing post-operative wound infection risks",
    ],
    description: "Closed interlocking nailing inserts a high-strength titanium or steel rod down the hollow center of a broken long bone under real-time X-ray guidance. Because the fracture site is not surgically opened, bone healing occurs rapidly and naturally.",
    approved: true,
  },
  {
    id: "carpal-tunnel-trigger-finger",
    category: "daycare",
    categoryLabel: "Daycare Procedures",
    title: "Carpal Tunnel Release & Trigger Finger Decompression",
    shortName: "Carpal Tunnel & Trigger Release",
    indication: "Severe median nerve compression (hand tingling, numbness, nocturnal waking), or painful finger catching and locking unyielding to medication.",
    technique: "Minimally invasive transverse carpal ligament division or A1 pulley release under local anesthesia through small palmar incisions.",
    inpatientStay: "Daycare (Discharge in 2 to 3 Hours)",
    recoveryTimeline: "Immediate gentle active finger movement; suture removal at Day 10–12; rapid relief of tingling and finger catching.",
    keyHighlights: [
      "Performed comfortably under local anesthesia in daycare setting",
      "Immediate elimination of sleep-disrupting hand numbness",
      "No overnight hospital stay required",
    ],
    description: "Carpal tunnel and trigger finger surgeries release constricted fibrous bands compressing nerves and tendons in the hand. Performed as a brief daycare procedure under local anesthesia, patients return home the very same afternoon with free finger movement.",
    approved: true,
  },
  {
    id: "de-quervain-tendon-release",
    category: "daycare",
    categoryLabel: "Daycare Procedures",
    title: "De Quervain's Tenosynovitis & Tendon Decompressions",
    shortName: "De Quervain's Tendon Release",
    indication: "Severe thumb-side wrist pain during lifting, wringing, or writing (positive Finkelstein's test) failing conservative splints and injections.",
    technique: "Micro-surgical decompression of the first dorsal compartment sheath, liberating the abductor pollicis longus and extensor pollicis brevis tendons.",
    inpatientStay: "Daycare Outpatient Procedure",
    recoveryTimeline: "Immediate light daily hand use; complete resolution of sharp thumb pinch pain within 10 to 14 days.",
    keyHighlights: [
      "Protects sensory nerve branches while ensuring complete tendon glide",
      "Walk-in, walk-out outpatient procedure under local anesthesia",
      "Permanent relief from chronic thumb-base pain",
    ],
    description: "De Quervain's tenosynovitis causes sharp pain at the base of the thumb whenever you lift or grasp. When rest and medication fail, a minor daycare release of the tight tendon sheath allows the tendons to glide freely without friction.",
    approved: true,
  },
];
