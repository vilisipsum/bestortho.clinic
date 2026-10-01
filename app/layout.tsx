import type { Metadata, Viewport } from 'next';
import './globals.css';
import { defaultMetadata, getClinicSchema } from '@/lib/seo';
import Footer from '@/components/Footer';

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFF4D9',
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
      <body className="min-h-screen flex flex-col bg-[#FFF4D9] text-dark antialiased">
        {/* Top Emergency Advisory Bar */}
        <div className="bg-dark text-white px-4 py-1.5 text-center text-xs font-semibold border-b border-dark flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse"></span>
          <span>
            Dr. Gaurav Sharma Orthopaedic Clinic • Sikandra, Agra • Outpatient Consultations by Appointment
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
