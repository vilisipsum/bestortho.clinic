import { Metadata } from 'next';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Contact & Book Consultation | Dr. Gaurav Sharma Ortho, Agra',
  description: 'Book an orthopaedic consultation in Sikandra, Agra. Call +91 97602 30687 or message on WhatsApp. Fast appointment confirmation for knee pain, arthritis, and joint care.',
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
  openGraph: {
    title: 'Book an Orthopaedic Consultation | Dr. Gaurav Sharma, Agra',
    description: 'Schedule an appointment at Satyam Complex, Sikandra, Agra. In-clinic examination, joint evaluations, and rehabilitation planning.',
    url: `${siteConfig.domain}/contact`,
    images: [`${siteConfig.domain}/images/doctor-portrait.jpg`],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
