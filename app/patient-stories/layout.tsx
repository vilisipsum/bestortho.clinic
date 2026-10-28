import { Metadata } from 'next';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Patient Recovery Stories & Outcomes | Dr. Gaurav Sharma Ortho, Agra',
  description: 'Real clinical recovery milestones and documented experiences from patients treated for knee arthritis, sports ligament sprains, and frozen shoulder in Agra.',
  alternates: {
    canonical: `${siteConfig.domain}/patient-stories`,
  },
  openGraph: {
    title: 'Patient Stories & Recovery Experiences | Dr. Gaurav Sharma Clinic',
    description: 'Documented musculoskeletal outcomes published strictly with informed patient consent.',
    url: `${siteConfig.domain}/patient-stories`,
    images: [`${siteConfig.domain}/images/doctor-portrait.jpg`],
  },
};

export default function PatientStoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
