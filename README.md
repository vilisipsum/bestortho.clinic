# BestOrtho.clinic — Dr. Gaurav Sharma Orthopaedic Clinic

A complete, production-ready medical practice website for **Dr. Gaurav Sharma Orthopaedic Clinic** located in **Sikandra, Agra, Uttar Pradesh, India**, published under the domain [https://bestortho.clinic/](https://bestortho.clinic/).

Designed as an editorial, modern, premium medical brand taking inspiration from the **StandOut Agra** visual language, strictly prioritizing medical ethics, patient consent, verified qualifications, and local patient access.

---

## 1. Visual Language & Design Architecture

- **Visual Aesthetic:** Editorial, high-contrast, bold typography inspired by the StandOut Agra design system.
- **Palette:**
  - **Cream Background:** `#FFF4D9` (with `#FFF9ED` and `#FFF8E7` surface variants)
  - **Dark Base:** `#151515`
  - **Controlled Accents:** Orange (`#FF5A1F`), Lime (`#B8FF22`), Blue (`#2F5BF0`), Pink (`#F18AA6`), Lavender (`#B7A1F4`)
- **Card System:** Rounded cards (`rounded-3xl`), clean borders, and subtle hard shadows (`border-2 border-dark shadow-hard`).
- **Typography:** Bold condensed headings paired with highly legible body copy (17–18px desktop, 16–17px mobile, line height 1.65).
- **Exact Brand Name:** Rendered consistently and cohesively as `BestOrtho.clinic` throughout the entire interface.

---

## 2. Medical Ethics & Content Verification Safeguards

In strict adherence to medical practice guidelines and the clinic onboarding questionnaire:
- **No Exaggerated or Fabricated Claims:** Zero tolerance for unsupported buzzwords ("No. 1", "Best surgeon", "100% cure", "painless surgery").
- **Verification-Gated Data Model (`/lib/content.ts`):** 
  - Every qualification, credential, procedure topic, and institutional affiliation contains an explicit `approved: boolean` flag.
  - Academic institutions awaiting formal council certificate confirmation are transparently tagged as **Verification In Progress** rather than presented as unverified claims.
  - Hospital logos are withheld unless explicit administrative consent is verified (`hospitalLogoApproved: false`).
- **Patient Stories & Consent Gate:**
  - Patient stories are displayed in editorial case study format (Condition, Duration, Before, Care, Recovery, Patient Quote).
  - Only stories where `consentApproved: true`, `testimonialApproved: true`, and `approved: true` are rendered.
- **No Public Document Uploads:**
  - Medical file/X-ray upload fields are strictly disabled on web forms to safeguard sensitive health data. Patients are guided to bring physical imaging films and reports to the in-person consultation.
- **Authentic Photography Policy:**
  - No synthetic smiling stock doctors. Reserved asset slots are clearly marked with `PHOTO NEEDED` editorial badges until verified clinic photographs are uploaded.
- **Educational Video Standard:**
  - No graphic operative footage on public overview sections. All video cards focus on patient journey orientation, condition literacy, and first aid.

---

## 3. Technology Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **SEO & Schema:** JSON-LD structured data for `Physician` / `MedicalBusiness` / `LocalBusiness`, dynamic `sitemap.xml`, and `robots.txt`
- **Deployment Target:** Vercel

---

## 4. Route Structure

| Route | Purpose |
|---|---|
| `/` | Editorial Homepage: Hero, Doctor Profile, Practice Philosophy, Areas of Care, Patient Stories, Educational Videos, Clinic Location, FAQs, Emergency Notice, Booking CTA |
| `/about` | Complete profile of Dr. Gaurav Sharma, verified qualifications, philosophy, and institutional affiliations |
| `/clinic` | In-depth clinic location guide, Sikandra highway corridor directions, OPD consultation hours, Sunday hours, and visit checklist |
| `/patient-stories` | Consented patient recovery case studies and verified patient feedback |
| `/faq` | Filterable, categorized FAQ accordion covering general, appointment, clinic, imaging, and rehabilitation questions |
| `/contact` | Direct appointment scheduling: Telephone, WhatsApp routing, and structured online request form |
| `/privacy` | Medical data privacy policy and no-upload safeguards |
| `/terms` | Website terms of use, non-emergency advisory, and clinical disclaimers |
| `/consent` | Patient media, photographic consent, and right-to-revoke policies |
| `/robots.txt` | Search crawler directives |
| `/sitemap.xml` | Search engine indexing sitemap |

---

## 5. Development & Deployment

### Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel
This repository is configured for zero-configuration deployment to Vercel:
1. Push to your Git repository (GitHub/GitLab/Bitbucket).
2. Import the project in the [Vercel Dashboard](https://vercel.com).
3. Framework Preset: **Next.js**
4. Set root directory: `./`
5. Click **Deploy**.
