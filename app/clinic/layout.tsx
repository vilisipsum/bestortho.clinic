import { Metadata } from 'next';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Clinic Timings, Location & Directions | Sikandra, Agra',
  description: 'Visit Dr. Gaurav Sharma Orthopaedic Clinic at Satyam Complex, Sector-12A, Sikandra, Agra. OPD timings: 09:30 AM – 09:30 PM (Break 4–6 PM). Get direct turn-by-turn directions.',
  alternates: {
    canonical: `${siteConfig.domain}/clinic`,
  },
  openGraph: {
    title: 'Clinic Timings, Location & Directions | Sikandra, Agra',
    description: 'OPD hours, address at Satyam Complex, Sikandra, Agra, and patient visit preparation guidelines.',
    url: `${siteConfig.domain}/clinic`,
    images: [`${siteConfig.domain}/images/doctor-portrait.jpg`],
  },
};

export default function ClinicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
