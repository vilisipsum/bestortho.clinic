import type { Metadata, Viewport } from 'next';
import './globals.css';
import { defaultMetadata, getClinicSchema } from '@/lib/seo';
import Footer from '@/components/Footer';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-900">
        {/* Top Clinical Advisory Bar */}
        <div className="bg-brand-950 text-slate-200 px-4 py-2 text-center text-xs font-medium border-b border-brand-900 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>
            Dr. Gaurav Sharma Orthopaedic Clinic • Sikandra, Agra • Outpatient Consultations by Prior Appointment
          </span>
        </div>

        <main className="flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
