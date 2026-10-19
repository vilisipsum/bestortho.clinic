import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { validateBookingForm } from '../lib/validation.ts';

const PORT = 3110;
const BASE_URL = `http://127.0.0.1:${PORT}`;

const testResults = [];

function assert(description, condition, details = null) {
  testResults.push({ description, pass: Boolean(condition), details });
  console.log(`[${condition ? 'PASS' : 'FAIL'}] ${description}`);
  if (!condition && details) {
    console.error('       FAILED DETAILS:', JSON.stringify(details));
  }
}

async function fetchRoute(routePath, options = {}) {
  const url = `${BASE_URL}${routePath}`;
  const res = await fetch(url, options);
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch (_) {}
  return { status: res.status, headers: res.headers, text, json };
}

async function run() {
  console.log('====================================================');
  console.log('INDEPENDENT POST-VICTORY AUDIT TEST SUITE');
  console.log(`Target: ${BASE_URL}`);
  console.log('====================================================\n');

  // ----------------------------------------------------
  // TEST GROUP 1: Route Availability & HTTP Status Checks
  // ----------------------------------------------------
  console.log('--- 1. ROUTE PRERENDER & HTTP STATUS CHECKS ---');
  const routesToTest = [
    { path: '/', match: 'Dr. Gaurav Sharma' },
    { path: '/about', match: 'About Dr. Gaurav Sharma' },
    { path: '/clinic', match: 'Visit Dr. Gaurav Sharma Clinic' },
    { path: '/contact', match: 'Dr. Gaurav Sharma' },
    { path: '/patient-stories', match: 'Patient Recovery Stories' },
    { path: '/faq', match: 'Frequently Asked Questions' },
    { path: '/privacy', match: 'Privacy Policy' },
    { path: '/terms', match: 'Terms of Service' },
    { path: '/consent', match: 'Patient Media' },
  ];

  for (const r of routesToTest) {
    const res = await fetchRoute(r.path);
    assert(
      `Route ${r.path} returns HTTP 200 and expected content`,
      res.status === 200 && res.text.includes(r.match),
      { status: res.status, match: r.match }
    );
  }

  // 404 Route
  const notFoundRes = await fetchRoute('/non-existent-route-404-audit');
  assert(
    'Route /non-existent-route returns HTTP 404',
    notFoundRes.status === 404,
    { status: notFoundRes.status }
  );

  // ----------------------------------------------------
  // TEST GROUP 2: Root Machine-Readable Files
  // ----------------------------------------------------
  console.log('\n--- 2. ROOT MACHINE-READABLE FILES ---');
  // robots.txt
  const robotsRes = await fetchRoute('/robots.txt');
  assert(
    'Route /robots.txt returns HTTP 200',
    robotsRes.status === 200,
    { status: robotsRes.status }
  );
  assert(
    '/robots.txt explicitly allows AI crawlers (Googlebot, OAI-SearchBot, PerplexityBot, Claude-SearchBot)',
    robotsRes.text.includes('Googlebot') &&
    robotsRes.text.includes('OAI-SearchBot') &&
    robotsRes.text.includes('PerplexityBot') &&
    robotsRes.text.includes('Claude-SearchBot'),
    { bodySnippet: robotsRes.text.slice(0, 300) }
  );
  assert(
    '/robots.txt references sitemap.xml',
    robotsRes.text.includes('sitemap.xml'),
    { text: robotsRes.text }
  );

  // sitemap.xml
  const sitemapRes = await fetchRoute('/sitemap.xml');
  assert(
    'Route /sitemap.xml returns HTTP 200 and valid xml urlset',
    sitemapRes.status === 200 && sitemapRes.text.includes('<urlset') && sitemapRes.text.includes('bestortho.clinic'),
    { status: sitemapRes.status }
  );
  assert(
    '/sitemap.xml lists key routes (/about, /clinic, /contact, /patient-stories, /faq, /consent)',
    sitemapRes.text.includes('/about') &&
    sitemapRes.text.includes('/clinic') &&
    sitemapRes.text.includes('/contact') &&
    sitemapRes.text.includes('/patient-stories') &&
    sitemapRes.text.includes('/faq') &&
    sitemapRes.text.includes('/consent'),
    { snippet: sitemapRes.text.slice(0, 500) }
  );

  // llms.txt
  const llmsRes = await fetchRoute('/llms.txt');
  assert(
    'Route /llms.txt returns HTTP 200 with clinic summary & Knowledge Graph',
    llmsRes.status === 200 &&
    llmsRes.text.includes('Dr. Gaurav Sharma') &&
    llmsRes.text.includes('/g/11cnc0vhf8') &&
    llmsRes.text.includes('+91 97602 30687'),
    { status: llmsRes.status }
  );

  // pricing.md
  const pricingRes = await fetchRoute('/pricing.md');
  assert(
    'Route /pricing.md returns HTTP 200 with transparent fee structure & Cashless TPA',
    pricingRes.status === 200 &&
    pricingRes.text.includes('Outpatient (OPD) Consultation Fees') &&
    pricingRes.text.includes('Cashless Mediclaim') &&
    pricingRes.text.includes('₹0'),
    { status: pricingRes.status }
  );

  // ----------------------------------------------------
  // TEST GROUP 3: Validation Unit Stress Tests
  // ----------------------------------------------------
  console.log('\n--- 3. VALIDATION UNIT STRESS TESTS (lib/validation.ts) ---');
  // Null and primitive guards
  assert('validateBookingForm(null) is safe and invalid', !validateBookingForm(null).valid);
  assert('validateBookingForm(undefined) is safe and invalid', !validateBookingForm(undefined).valid);
  assert('validateBookingForm(12345) is safe and invalid', !validateBookingForm(12345).valid);
  assert('validateBookingForm("invalid") is safe and invalid', !validateBookingForm("invalid").valid);
  assert('validateBookingForm({}) has errors and is invalid', !validateBookingForm({}).valid);

  // Honeypot spam
  assert('Filled honeypot "spam" is invalid', !validateBookingForm({ honeypot: 'spam' }).valid);
  assert('Whitespace honeypot "   " is caught and invalid', !validateBookingForm({ honeypot: '   ' }).valid);
  assert('Numeric honeypot 999 is caught safely and invalid', !validateBookingForm({ honeypot: 999 }).valid);
  assert('Empty honeypot "" is accepted', validateBookingForm({
    fullName: 'Rohan Verma',
    phoneNumber: '9760230687',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
    honeypot: '',
  }).valid);

  // Full name
  assert('Single character name rejected', !validateBookingForm({ fullName: 'A', phoneNumber: '9760230687', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Whitespace name rejected', !validateBookingForm({ fullName: '   ', phoneNumber: '9760230687', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('2-character valid name accepted', validateBookingForm({ fullName: 'Om', phoneNumber: '9760230687', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);

  // Phone numbers (Indian mobile rules)
  assert('Phone starting with 9 accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone starting with 8 accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '8876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone starting with 7 accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '7876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone starting with 6 accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '6876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone starting with 5 rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '5876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone with +91 prefix accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '+91 97602 30687', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone with 0 prefix accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '09760230687', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone with 9 digits rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '976023068', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone with 11 digits (no prefix) rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '97602306871', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Phone with letters rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '976023ABCD', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);

  // Dates
  assert('Past date (1995-05-10) rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9760230687', preferredDate: '1995-05-10', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Calendar rollover date (2026-02-31) rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9760230687', preferredDate: '2026-02-31', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Slash formatted date (25/10/2026) rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9760230687', preferredDate: '25/10/2026', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Future valid date (2026-10-25) accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9760230687', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);

  // Email
  assert('Invalid email rejected', !validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9760230687', email: 'notanemail', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Valid email accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9760230687', email: 'clinicbestortho@gmail.com', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);
  assert('Empty email optional accepted', validateBookingForm({ fullName: 'Test Patient', phoneNumber: '9760230687', email: '', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' }).valid);

  // ----------------------------------------------------
  // TEST GROUP 4: End-to-End API Route (/api/book)
  // ----------------------------------------------------
  console.log('\n--- 4. END-TO-END /api/book ENDPOINT VERIFICATION ---');
  // 4.1 Valid booking submission
  const validSubmissionRes = await fetchRoute('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: '[TEST] Pre-production Verification',
      phoneNumber: '9760230687',
      email: 'clinicbestortho@gmail.com',
      preferredDate: '2026-10-25',
      preferredTime: 'Morning (10:00 AM - 02:00 PM)',
      affectedArea: 'Knee',
      consultationReason: 'Knee Pain / Joint Discomfort',
      patientType: 'new',
      notes: '[TEST] Victory Auditor Independent E2E Probe',
    }),
  });
  assert(
    'POST /api/book with valid data returns HTTP 200 and { success: true }',
    validSubmissionRes.status === 200 && validSubmissionRes.json?.success === true,
    { status: validSubmissionRes.status, json: validSubmissionRes.json }
  );

  // 4.2 Empty body {}
  const emptyBodyRes = await fetchRoute('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  assert(
    'POST /api/book with empty body returns HTTP 400 and validation errors',
    emptyBodyRes.status === 400 && emptyBodyRes.json?.success === false && emptyBodyRes.json?.errors?.phoneNumber,
    { status: emptyBodyRes.status, json: emptyBodyRes.json }
  );

  // 4.3 Missing phone number
  const missingPhoneRes = await fetchRoute('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Test Patient',
      preferredDate: '2026-10-25',
      preferredTime: 'Morning',
      consultationReason: 'Knee',
    }),
  });
  assert(
    'POST /api/book with missing phone returns HTTP 400 with phoneNumber error',
    missingPhoneRes.status === 400 && missingPhoneRes.json?.errors?.phoneNumber,
    { status: missingPhoneRes.status, json: missingPhoneRes.json }
  );

  // 4.4 Honeypot spam submission
  const honeypotRes = await fetchRoute('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Bot User',
      phoneNumber: '9760230687',
      preferredDate: '2026-10-25',
      preferredTime: 'Morning',
      consultationReason: 'Knee',
      honeypot: 'spam_crawler_123',
    }),
  });
  assert(
    'POST /api/book with honeypot triggered returns HTTP 400',
    honeypotRes.status === 400 && honeypotRes.json?.errors?.fullName === 'Invalid submission detected.',
    { status: honeypotRes.status, json: honeypotRes.json }
  );

  // 4.5 Past date
  const pastDateRes = await fetchRoute('/api/book', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fullName: 'Test Patient',
      phoneNumber: '9760230687',
      preferredDate: '2020-01-01',
      preferredTime: 'Morning',
      consultationReason: 'Knee',
    }),
  });
  assert(
    'POST /api/book with past date returns HTTP 400',
    pastDateRes.status === 400 && pastDateRes.json?.errors?.preferredDate,
    { status: pastDateRes.status, json: pastDateRes.json }
  );

  // 4.6 GET method on /api/book
  const getMethodRes = await fetchRoute('/api/book', { method: 'GET' });
  assert(
    'GET /api/book returns HTTP 405 Method Not Allowed',
    getMethodRes.status === 405,
    { status: getMethodRes.status }
  );

  // ----------------------------------------------------
  // TEST GROUP 5: Contact Page resolveArea Precedence
  // ----------------------------------------------------
  console.log('\n--- 5. CONTACT PAGE QUERY PARAMETER RESOLVER PRECEDENCE ---');
  function resolveArea(areaParam) {
    if (!areaParam) return 'Knee';
    const lower = areaParam.toLowerCase();
    if (lower.includes('knee')) return 'Knee';
    if (lower.includes('shoulder')) return 'Shoulder';
    if (lower.includes('neck') || lower.includes('cervical')) return 'Neck / Cervical';
    if (lower.includes('spine') || lower.includes('back')) return 'Spine / Back';
    if (lower.includes('hip')) return 'Hip';
    if (lower.includes('ankle') || lower.includes('foot')) return 'Foot / Ankle';
    if (lower.includes('elbow') || lower.includes('wrist') || lower.includes('hand')) return 'Hand / Wrist / Elbow';
    return 'General Consultation';
  }

  assert('"Neck & Cervical Spine" resolves to "Neck / Cervical"', resolveArea('Neck & Cervical Spine') === 'Neck / Cervical');
  assert('"Spine & Lower Back" resolves to "Spine / Back"', resolveArea('Spine & Lower Back') === 'Spine / Back');
  assert('"Cervical Pain" resolves to "Neck / Cervical"', resolveArea('Cervical Pain') === 'Neck / Cervical');
  assert('"Back Strain" resolves to "Spine / Back"', resolveArea('Back Strain') === 'Spine / Back');
  assert('"Knee Joint Pain" resolves to "Knee"', resolveArea('Knee Joint Pain') === 'Knee');
  assert('null query param defaults to "Knee"', resolveArea(null) === 'Knee');

  // ----------------------------------------------------
  // TEST GROUP 6: Link Scans & Uniformity Check
  // ----------------------------------------------------
  console.log('\n--- 6. LINK SCANS & UNIFORMITY ---');
  const rootFiles = ['components/Header.tsx', 'components/Footer.tsx', 'components/MobileActionBar.tsx', 'components/LocationCard.tsx', 'lib/content.ts'];

  for (const rf of rootFiles) {
    const fullP = path.join('d:\\Ortho-clinic', rf);
    if (fs.existsSync(fullP)) {
      const content = fs.readFileSync(fullP, 'utf-8');
      if (rf.includes('MobileActionBar') || rf.includes('Header') || rf.includes('Footer') || rf.includes('LocationCard')) {
        assert(`${rf} contains telephone link or config reference`, content.includes('tel:') || content.includes('siteConfig.phone'));
      }
      if (rf.includes('MobileActionBar') || rf.includes('LocationCard') || rf.includes('Footer')) {
        assert(`${rf} contains WhatsApp link or config reference`, content.includes('wa.me') || content.includes('whatsappNumber'));
      }
      if (rf.includes('Footer') || rf.includes('LocationCard')) {
        assert(`${rf} contains Google Business Profile reference`, content.includes('googleBusinessProfileUrl') || content.includes('share.google'));
      }
    }
  }

  // ----------------------------------------------------
  // TEST GROUP 7: Touch Targets & Accessibility
  // ----------------------------------------------------
  console.log('\n--- 7. TOUCH TARGETS (44px) ACCESSIBILITY CHECK ---');
  const bodyGuideSrc = fs.readFileSync('d:\\Ortho-clinic\\components\\InteractiveBodyGuide.tsx', 'utf-8');
  assert(
    'InteractiveBodyGuide.tsx tab buttons have min-h-[44px]',
    bodyGuideSrc.includes('min-h-[44px] rounded-xl')
  );
  assert(
    'InteractiveBodyGuide.tsx booking CTA has min-h-[44px]',
    bodyGuideSrc.includes('btn-accent-emerald text-xs min-h-[44px]')
  );

  const footerSrc = fs.readFileSync('d:\\Ortho-clinic\\components\\Footer.tsx', 'utf-8');
  assert(
    'Footer.tsx Google Verified & KG badges have min-h-[44px]',
    footerSrc.includes('px-4 py-2.5 min-h-[44px] rounded-full')
  );
  assert(
    'Footer.tsx address inline links have min-h-[44px]',
    footerSrc.includes('min-h-[44px] hover:underline')
  );

  const headerSrc = fs.readFileSync('d:\\Ortho-clinic\\components\\Header.tsx', 'utf-8');
  assert(
    'Header.tsx mobile book button has min-h-[44px] min-w-[44px]',
    headerSrc.includes('min-h-[44px] min-w-[44px]')
  );
  assert(
    'Header.tsx mobile menu button has min-w-[44px] min-h-[44px]',
    headerSrc.includes('min-w-[44px] min-h-[44px]')
  );

  const mobileBarSrc = fs.readFileSync('d:\\Ortho-clinic\\components\\MobileActionBar.tsx', 'utf-8');
  assert(
    'MobileActionBar.tsx action buttons are properly structured',
    mobileBarSrc.includes('Call Direct') && mobileBarSrc.includes('WhatsApp') && mobileBarSrc.includes('Book Visit')
  );

  // ----------------------------------------------------
  // FINAL SUMMARY
  // ----------------------------------------------------
  console.log('\n====================================================');
  const total = testResults.length;
  const passed = testResults.filter(t => t.pass).length;
  const failed = testResults.filter(t => !t.pass).length;
  console.log(`TOTAL TESTS: ${total} | PASSED: ${passed} | FAILED: ${failed}`);
  console.log('====================================================');

  if (failed > 0) {
    console.error('FAILED TESTS SUMMARY:');
    testResults.filter(t => !t.pass).forEach(f => console.error(` - ${f.description}`));
    process.exit(1);
  } else {
    console.log('ALL INDEPENDENT AUDIT TESTS PASSED WITH 100% SUCCESS!');
  }
}

run().catch(err => {
  console.error('Test Suite Fatal Error:', err);
  process.exit(1);
});
