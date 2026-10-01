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
  title: string;
  category: 'Doctor Introduction' | 'Patient Journey' | 'Doctor Education' | 'Treatment Education';
  duration: string;
  thumbnailPlaceholderText: string;
  description: string;
  videoUrl?: string;
  transcriptAvailable: boolean;
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
  brandName: "BestOrtho.clinic",
  practiceName: "Dr. Gaurav Sharma Orthopaedic Clinic",
  tagline: "Orthopaedic Care, Built Around Your Recovery.",
  locationSummary: "Sikandra, Agra, Uttar Pradesh, India",
  phone: "+91 94122 55566", // Clinic primary phone placeholder for launch
  phoneDisplay: "+91 94122 55566",
  whatsappNumber: "919412255566",
  email: "care@bestortho.clinic",
  googleMapsUrl: "https://maps.google.com/?q=Sikandra+Agra+Uttar+Pradesh+India",
  primaryAddress: {
    street: "Near Sikandra Crossing, Delhi-Agra Highway",
    locality: "Sikandra",
    city: "Agra",
    state: "Uttar Pradesh",
    postalCode: "282007",
    country: "India",
  },
  timings: [
    { days: "Monday – Saturday (Morning)", hours: "10:00 AM – 02:00 PM" },
    { days: "Monday – Saturday (Evening)", hours: "05:30 PM – 08:30 PM" },
    { days: "Sunday", hours: "10:30 AM – 01:00 PM (Prior Appointment Recommended)" },
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
  experienceYears: 12,
  experienceVerified: true,
  summary: "Dedicated to clear, evidence-conscious orthopaedic evaluation and personalized musculoskeletal care. Dr. Gaurav Sharma focuses on thorough diagnostic clarity, patient education, and recovery pathways structured around patient mobility goals.",
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
    "Joint Pain & Arthritis Management",
    "Knee & Shoulder Arthroscopy",
    "Fracture & Musculoskeletal Trauma Care",
    "Sports Injury Assessment & Rehabilitation",
    "Soft Tissue & Ligament Disorders",
    "Spine & Postural Care Guidance",
  ],
  credentials: [
    {
      id: "mbbs",
      degree: "MBBS",
      field: "Medicine & Surgery",
      institution: "Sarojini Naidu Medical College, Agra",
      year: "Verification in progress",
      approved: false, // Per prompt: Academic institution awaiting final verification before public claim
      notes: "Onboarding record noted Sarojini Naidu Medical College, Agra. Final certificate verification in progress.",
    },
    {
      id: "ms-ortho",
      degree: "MS - Orthopaedics",
      field: "Orthopaedic Surgery",
      institution: "M.L.B. Medical College, Jhansi",
      year: "Verification in progress",
      approved: false, // Per prompt: Academic institution awaiting final verification before public claim
      notes: "Onboarding record noted M.L.B. Medical College, Jhansi. Final verification in progress.",
    },
    {
      id: "med-reg",
      degree: "Medical Council Registration",
      field: "Orthopaedic Specialist Registration",
      institution: "Uttar Pradesh Medical Council / National Medical Commission",
      approved: false, // Per prompt: Exact registration number to be confirmed before launch
      notes: "Registration number pending upload of state council certificate.",
    },
  ] as CredentialItem[],
  memberships: [
    {
      name: "Indian Orthopaedic Association (IOA)",
      approved: false, // Pending confirmation
    },
    {
      name: "UP Orthopaedic Association (UPOA)",
      approved: false, // Pending confirmation
    },
  ],
};

/* ==========================================================================
   HOSPITAL AFFILIATIONS
   ========================================================================== */

export const hospitalAffiliations: HospitalAffiliation[] = [
  {
    id: "hosp-1",
    name: "Agra Ortho & Trauma Care Center",
    role: "Visiting Consultant Orthopaedic Surgeon",
    location: "Sikandra Road, Agra",
    opdSchedule: "By Referral & Scheduled Operating Hours",
    hospitalLogoApproved: false, // Keep false until formal hospital permission is on file
    approved: true,
  },
  {
    id: "hosp-2",
    name: "Apex Multispeciality Hospital",
    role: "Associated Orthopaedic Specialist",
    location: "Agra, Uttar Pradesh",
    opdSchedule: "Evening Elective Admissions & Reviews",
    hospitalLogoApproved: false, // Logo permission withheld per onboarding compliance
    approved: true,
  },
];

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
      "Pain during stair climbing or prolonged walking",
      "Persistent swelling, morning stiffness, or joint locking",
      "Patients seeking conservative management or second opinions before surgery",
    ],
    commonQuestions: [
      "Can knee arthritis be managed without immediate surgery?",
      "What exercises are safe during flare-ups?",
      "When is an MRI necessary versus standard X-rays?",
    ],
    approved: true,
    accentColor: "orange",
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
    accentColor: "lime",
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
    id: "arthroscopy",
    slug: "arthroscopy-minimally-invasive",
    title: "Minimally Invasive Arthroscopy",
    shortExplanation: "Diagnostic and therapeutic keyhole examination for internal joint pathologies with minimal soft-tissue disruption.",
    whoShouldConsider: [
      "Patients with mechanical joint catching unresponsive to rest",
      "Cartilage flaps or loose bodies causing recurrent effusions",
    ],
    commonQuestions: [
      "What are the typical hospital stay expectations for arthroscopic procedures?",
      "What is the timeline for resuming office work?",
    ],
    approved: true,
    accentColor: "lavender",
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
    googleReviewUrl: "https://maps.google.com/?q=Sikandra+Agra",
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
    googleReviewUrl: "https://maps.google.com/?q=Sikandra+Agra",
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
    googleReviewUrl: "https://maps.google.com/?q=Sikandra+Agra",
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
    id: "vid-1",
    title: "Meet Dr. Gaurav Sharma & Welcome to the Clinic",
    category: "Doctor Introduction",
    duration: "2:45",
    thumbnailPlaceholderText: "VIDEO: Doctor Introduction & Practice Philosophy",
    description: "An overview of our outpatient orthopaedic consultation process, diagnostic workflow, and commitment to patient-centred recovery.",
    transcriptAvailable: true,
    approved: true,
  },
  {
    id: "vid-2",
    title: "Understanding Knee Osteoarthritis: Stages & Non-Surgical Options",
    category: "Doctor Education",
    duration: "4:12",
    thumbnailPlaceholderText: "VIDEO: Knee Osteoarthritis Explained Clearly",
    description: "Learn how joint cartilage changes over time, what symptoms signify different stages, and evidence-supported ways to preserve mobility.",
    transcriptAvailable: true,
    approved: true,
  },
  {
    id: "vid-3",
    title: "What to Do Immediately Following an Acute Sports Ankle or Knee Twist",
    category: "Treatment Education",
    duration: "3:30",
    thumbnailPlaceholderText: "VIDEO: Acute Joint Twist First-Response Protocol",
    description: "Safe initial response rules (PRICE guidelines), signs that require urgent clinical assessment, and common mistakes to avoid.",
    transcriptAvailable: true,
    approved: true,
  },
  {
    id: "vid-4",
    title: "The Patient Journey: From Consultation to Recovery Milestones",
    category: "Patient Journey",
    duration: "3:55",
    thumbnailPlaceholderText: "VIDEO: How Structured Recovery Pathways Work",
    description: "Walkthrough of how follow-up visits, rehabilitation check-ins, and mobility goals are coordinated at our clinic.",
    transcriptAvailable: true,
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
