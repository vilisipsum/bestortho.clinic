import { Metadata } from 'next';
import { siteConfig, doctorProfile, faqs, FAQItem } from './content';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.brandName} | Dr. Gaurav Sharma Orthopaedic Clinic, Sikandra, Agra`,
    template: `%s | ${siteConfig.brandName}`,
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
    "BestOrtho.clinic",
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
  openGraph: {
    title: `${siteConfig.brandName} | Dr. Gaurav Sharma Orthopaedic Clinic`,
    description: "Orthopaedic Care, Built Around Your Recovery. Outpatient consultations in Sikandra, Agra.",
    url: siteConfig.domain,
    siteName: siteConfig.brandName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Dr. Gaurav Sharma Orthopaedic Clinic`,
    description: "Orthopaedic Care, Built Around Your Recovery. Sikandra, Agra, Uttar Pradesh.",
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
    alternateName: [siteConfig.brandName, siteConfig.facilityName, "Dr Gaurav Sharma Ortho"],
    sameAs: [
      siteConfig.googleBusinessProfileUrl,
      siteConfig.googleKnowledgeGraphUrl,
    ],
    url: siteConfig.domain,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.domain}/images/doctor-portrait.jpg`,
    medicalSpecialty: [
      "Orthopedic",
      "Surgical",
    ],
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
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "17:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "10:30",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    isAcceptingNewPatients: true,
    hasMap: siteConfig.googleMapsUrl,
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
