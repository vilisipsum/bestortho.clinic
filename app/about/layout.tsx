import { Metadata } from 'next';
import { siteConfig, doctorProfile } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About Dr. Gaurav Sharma | Orthopaedic Specialist in Agra',
  description: `Meet ${doctorProfile.name} (${doctorProfile.formalTitle}). Over 20 years of clinical orthopaedic experience, former Assistant Professor, specialized in joint preservation, knee replacement, and fracture care in Sikandra, Agra.`,
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
  openGraph: {
    title: `About ${doctorProfile.name} | Orthopaedic Specialist, Sikandra, Agra`,
    description: doctorProfile.summary,
    url: `${siteConfig.domain}/about`,
    images: [`${siteConfig.domain}/images/doctor-portrait.jpg`],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
