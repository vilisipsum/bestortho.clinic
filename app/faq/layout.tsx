import { Metadata } from 'next';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Orthopaedic Consultation FAQs | Dr. Gaurav Sharma Clinic, Agra',
  description: 'Answers to common questions about clinic appointments, bringing previous X-rays/MRI scans, knee pain treatments, surgical evaluation, and recovery timelines.',
  alternates: {
    canonical: `${siteConfig.domain}/faq`,
  },
  openGraph: {
    title: 'Frequently Asked Questions | Dr. Gaurav Sharma Orthopaedic Clinic',
    description: 'Doctor-approved answers regarding consultation preparation, second opinions, and diagnostic imaging.',
    url: `${siteConfig.domain}/faq`,
    images: [`${siteConfig.domain}/images/doctor-portrait.jpg`],
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
