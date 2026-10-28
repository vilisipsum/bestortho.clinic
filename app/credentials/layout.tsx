import { Metadata } from 'next';
import { siteConfig } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Doctor Credentials & Registration (UPMC 48757) | Dr. Gaurav Sharma',
  description: 'Verified qualifications and registration details for Dr. Gaurav Sharma: MBBS, MS Orthopaedics Gold Medalist, UP Medical Council Registration No. 48757, and hospital affiliations.',
  alternates: {
    canonical: `${siteConfig.domain}/credentials`,
  },
  openGraph: {
    title: 'Doctor Qualifications & Medical Registration | Dr. Gaurav Sharma',
    description: 'Medical degrees, surgical experience, state medical council verification, and teaching background.',
    url: `${siteConfig.domain}/credentials`,
    images: [`${siteConfig.domain}/images/doctor-portrait.jpg`],
  },
};

export default function CredentialsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
