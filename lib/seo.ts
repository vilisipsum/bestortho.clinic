import { Metadata } from 'next';
import { siteConfig, doctorProfile, faqs, FAQItem, educationalVideos } from './content';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Dr. Gaurav Sharma - Orthopaedic Clinic, Sikandra, Agra",
    template: "%s | Dr. Gaurav Sharma Orthopaedic Clinic",
  },
  description: "Official website for Dr. Gaurav Sharma Orthopaedic Clinic in Sikandra, Agra. Evidence-conscious joint care, knee and shoulder evaluation, fracture care, and rehabilitation.",
  keywords: [
    "Orthopaedic doctor in Agra",
    "Orthopaedic consultation in Sikandra",
    "Dr Gaurav Sharma Orthopaedic",
    "Knee pain consultation Agra",
    "Joint pain specialist Sikandra",
    "Sports injury doctor Agra",
    "Fracture clinic Sikandra Agra",
    "Shoulder pain doctor Agra",
    "Orthopaedic surgeon Agra Uttar Pradesh",
    "bestortho.clinic",
  ],
  authors: [{ name: doctorProfile.name }],
  creator: siteConfig.brandName,
  publisher: siteConfig.practiceName,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: `${siteConfig.brandName} | Dr. Gaurav Sharma Orthopaedic Clinic`,
    description: "Orthopaedic Care, Built Around Your Recovery. Outpatient consultations in Sikandra, Agra.",
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    images: [
      {
        url: `${siteConfig.domain}/images/doctor-portrait.jpg`,
        width: 1024,
        height: 1024,
        alt: `${doctorProfile.name} - ${doctorProfile.formalTitle}`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Dr. Gaurav Sharma Orthopaedic Clinic`,
    description: "Orthopaedic Care, Built Around Your Recovery. Sikandra, Agra, Uttar Pradesh.",
    images: [`${siteConfig.domain}/images/doctor-portrait.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Generates Structured Data (JSON-LD) for LocalBusiness / Physician
 */
export function getClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Physician", "MedicalBusiness", "LocalBusiness"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.practiceName,
    legalName: siteConfig.practiceName,
    alternateName: ["Dr Gaurav Sharma Ortho", siteConfig.facilityName, "bestortho.clinic"],
    sameAs: [
      siteConfig.googleBusinessProfileUrl,
      siteConfig.googleKnowledgeGraphUrl,
    ],
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.domain}/images/doctor-portrait.jpg`,
    logo: `${siteConfig.domain}/images/logo/logo-horizontal-clean.png`,
    medicalSpecialty: [
      "https://health-lifesci.schema.org/Orthopedic",
      "https://health-lifesci.schema.org/SportsMedicine",
      "https://health-lifesci.schema.org/Surgical",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Total Knee Replacement (TKR)",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Primary anatomical knee resurfacing with durable biocompatible implants, restoring alignment and pain-free walking.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Partial / Unicondylar Knee Replacement (UKA)",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Minimally invasive bone-preserving resurfacing of isolated medial compartment arthritis, preserving native cruciate ligaments.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Total Hip Replacement (THR)",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Anatomical hip reconstruction for Avascular Necrosis (AVN) and advanced arthritis using modern ceramic bearings.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Bipolar Hemiarthroplasty for Hip Fractures",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Dual-mobility hip prosthesis for displaced femoral neck fractures in senior citizens, enabling Day-1 walking.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Complex & Revision Joint Replacement (TKR & THR)",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Specialized reconstruction for severe deformities, bone loss, and failing or loose older artificial joints.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Knee Arthroscopy & ACL / PCL Reconstruction",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Keyhole high-definition reconstructive surgery for sports ligament tears, restoring knee rotational stability.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Arthroscopic Meniscus Repair & Preservation",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Keyhole bio-absorbable suture repair of torn meniscus tissue to preserve native shock-absorbing joint cartilage.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Shoulder Arthroscopy: Rotator Cuff & Bankart Repair",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Endoscopic keyhole reattachment of torn rotator cuff tendons and labral stabilization for recurrent dislocations.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Intra-Articular Fracture Fixation (ORIF Locking Plates)",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Millimeter-exact anatomical articular joint reconstruction stabilized with low-profile titanium locking compression plates.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Closed Interlocking Nailing for Long Bone Fractures",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Biological closed reduction under fluoroscopy with intramedullary nails for femur, tibia, and humerus fractures.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Carpal Tunnel & Trigger Finger Daycare Release",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Outpatient local anesthesia decompression relieving nocturnal hand numbness and painful finger locking.",
      },
      {
        "@type": "MedicalProcedure",
        name: "De Quervain's Tenosynovitis Tendon Release",
        procedureType: "https://health-lifesci.schema.org/SurgicalProcedure",
        description: "Micro-surgical release of the first dorsal compartment sheath relieving severe thumb-base motion pain.",
      },
      {
        "@type": "MedicalProcedure",
        name: "In-Clinic Joint Preservation & Injections",
        procedureType: "https://health-lifesci.schema.org/PercutaneousProcedure",
        description: "Intra-articular viscosupplementation (hyaluronic acid lubrication), Platelet-Rich Plasma (PRP), and guided joint aspiration.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Spine & Back Pain Evaluation",
        procedureType: "https://health-lifesci.schema.org/Diagnostic",
        description: "Diagnostic workup for lumbar spondylosis, sciatica, herniated discs, morning back stiffness, and conservative spine rehab.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Fracture Management & Splint Immobilization",
        procedureType: "https://health-lifesci.schema.org/NoninvasiveProcedure",
        description: "Accurate plaster/fiberglass casting, closed reduction, splinting, and union monitoring for bone fractures.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Orthopaedic Rehabilitation Guidance",
        description: "Supervised physiotherapy pathways, post-fracture mobility restoration, and joint-protective ergonomic correction.",
      },
    ],
    knowsAbout: [
      "Orthopaedic Surgery",
      "Joint Preservation",
      "Total Knee Replacement (TKR)",
      "Total Hip Replacement (THR)",
      "Complex Knee Replacement",
      "Revision Joint Replacement",
      "Knee Osteoarthritis",
      "Knee Arthroscopy & Lavage",
      "Shoulder Arthroscopy & Rotator Cuff Repair",
      "Frozen Shoulder (Adhesive Capsulitis)",
      "ACL and Ligament Injuries",
      "Bone Fractures & Trauma",
      "Lumbar Spondylosis & Sciatica",
      "Avascular Necrosis (AVN)",
      "Musculoskeletal Sports Medicine",
    ],
    physician: {
      "@type": "Person",
      name: doctorProfile.name,
      jobTitle: doctorProfile.formalTitle,
      description: `${doctorProfile.summary}`,
      image: `${siteConfig.domain}/images/doctor-portrait.jpg`,
    logo: `${siteConfig.domain}/images/logo/logo-horizontal-clean.png`,
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Dr. B.R. Ambedkar University, Agra",
        },
        {
          "@type": "EducationalOrganization",
          name: "Bundelkhand University, Jhansi",
        },
      ],
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "MBBS (2003)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "MS - Orthopaedics (2008)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: "State Medical Council Registration No. 48757",
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: "Uttar Pradesh Medical Council",
          },
        },
      ],
      worksFor: {
        "@id": `${siteConfig.domain}/#organization`,
      },
      sameAs: [
        siteConfig.googleKnowledgeGraphUrl,
        siteConfig.googleBusinessProfileUrl,
      ],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.primaryAddress.street,
      addressLocality: siteConfig.primaryAddress.locality,
      addressRegion: siteConfig.primaryAddress.state,
      postalCode: siteConfig.primaryAddress.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.2183", // Sikandra, Agra coordinates
      longitude: "77.9482",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "18:00",
        closes: "21:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
    isAcceptingNewPatients: true,
    hasMap: siteConfig.googleMapsUrl,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "appointments and consultations",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
  };
}

/**
 * Generates Structured Data (JSON-LD) for FAQPage
 */
export function getFAQSchema(items: FAQItem[] = faqs) {
  const approvedFaqs = items.filter(f => f.approved);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": approvedFaqs.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };
}

/**
 * Generates Structured Data (JSON-LD) for VideoObject
 */
export function getVideoSchema() {
  const approvedVideos = educationalVideos.filter(v => v.approved);
  return approvedVideos.map(video => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnailUrl],
    uploadDate: video.uploadDate || "2024-12-01T08:00:00+05:30",
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.youtubeId}`,
    contentUrl: video.youtubeUrl,
    inLanguage: "hi",
    author: {
      "@type": "Physician",
      name: doctorProfile.name,
      jobTitle: doctorProfile.formalTitle,
      url: siteConfig.domain,
    },
  }));
}
