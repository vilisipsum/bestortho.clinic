import type { Metadata, Viewport } from 'next';
import { DM_Sans, Outfit } from 'next/font/google';
import './globals.css';
import { defaultMetadata, getClinicSchema } from '@/lib/seo';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';
import { Analytics } from '@vercel/analytics/next';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0F2744',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clinicSchema = getClinicSchema();

  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased selection:bg-brand-100 selection:text-brand-900">
        {/* Top Clinical Advisory Bar */}
        <div className="bg-brand-950 text-brand-100 px-4 py-2 text-center text-xs font-medium border-b border-brand-900 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>
            Dr. Gaurav Sharma Orthopaedic Clinic • Sikandra, Agra • Outpatient Consultations by Prior Appointment
          </span>
        </div>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        <MobileActionBar />
        <Analytics />
      </body>
    </html>
  );
}
