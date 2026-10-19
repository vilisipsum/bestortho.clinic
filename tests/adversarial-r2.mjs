/**
 * Empirical Adversarial Test Suite for Requirement R2
 * Dr. Gaurav Sharma Orthopaedic Clinic
 * Challenger 1
 */

import { validateBookingForm } from '../lib/validation.ts';

const SERVER_URL = 'http://127.0.0.1:3099/api/book';
const GOOGLE_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx04--MQjyaosJEIz9bTasbTuBhYGEnQGInkocr3PjLhznW6ItS4iKUoe7FEKlasBGy/exec';

const results = {
  unit: [],
  endpoint: [],
  webhook: [],
};

function recordResult(suite, testName, passed, details) {
  results[suite].push({ testName, passed, details });
  const icon = passed ? '✅ PASS' : '❌ FAIL';
  console.log(`[${suite.toUpperCase()}] ${icon}: ${testName}`);
  if (details) {
    console.log(`   Details: ${JSON.stringify(details)}`);
  }
}

// ==========================================
// SUITE 1: validateBookingForm Stress Testing
// ==========================================
console.log('\n--- Starting Suite 1: validateBookingForm Unit Stress Testing ---');

// 1.1 Null input
try {
  const r = validateBookingForm(null);
  recordResult('unit', '1.1 validateBookingForm(null) handled safely without crash', r && !r.valid, { result: r });
} catch (e) {
  recordResult('unit', '1.1 validateBookingForm(null) handled safely without crash', false, { crashError: e.message });
}

// 1.2 Undefined input
try {
  const r = validateBookingForm(undefined);
  recordResult('unit', '1.2 validateBookingForm(undefined) handled safely without crash', r && !r.valid, { result: r });
} catch (e) {
  recordResult('unit', '1.2 validateBookingForm(undefined) handled safely without crash', false, { crashError: e.message });
}

// 1.3 Empty object {}
try {
  const r = validateBookingForm({});
  recordResult('unit', '1.3 validateBookingForm({}) handled safely without crash', r && !r.valid, { result: r });
} catch (e) {
  recordResult('unit', '1.3 validateBookingForm({}) handled safely without crash', false, { crashError: e.message });
}

// 1.4 Missing phoneNumber field
try {
  const r = validateBookingForm({
    fullName: 'Test Patient',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.4 Missing phoneNumber handled without crash', r && !r.valid, { result: r });
} catch (e) {
  recordResult('unit', '1.4 Missing phoneNumber handled without crash', false, { crashError: e.message });
}

// 1.5 phoneNumber: null
try {
  const r = validateBookingForm({
    fullName: 'Test Patient',
    phoneNumber: null,
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.5 phoneNumber: null handled without crash', r && !r.valid, { result: r });
} catch (e) {
  recordResult('unit', '1.5 phoneNumber: null handled without crash', false, { crashError: e.message });
}

// 1.6 phoneNumber: number type
try {
  const r = validateBookingForm({
    fullName: 'Test Patient',
    phoneNumber: 9876543210,
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.6 phoneNumber: number type handled without crash', r && r.valid, { result: r });
} catch (e) {
  recordResult('unit', '1.6 phoneNumber: number type handled without crash', false, { crashError: e.message });
}

// 1.7 Standard valid 10-digit mobile
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '9876543210',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.7 Valid 10-digit mobile accepted', r.valid, { errors: r.errors });
} catch (e) {
  recordResult('unit', '1.7 Valid 10-digit mobile accepted', false, { crashError: e.message });
}

// 1.8 9 digits (boundary)
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '987654321',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.8 9-digit phone rejected', !r.valid && !!r.errors.phoneNumber, { errors: r.errors });
} catch (e) {
  recordResult('unit', '1.8 9-digit phone rejected', false, { crashError: e.message });
}

// 1.9 11 digits (boundary)
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '98765432101',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  // In India mobile is 10 digits (without country code)
  const isRejected = !r.valid;
  recordResult('unit', '1.9 11-digit phone rejected as invalid Indian mobile length', isRejected, { valid: r.valid, errors: r.errors });
} catch (e) {
  recordResult('unit', '1.9 11-digit phone rejected as invalid Indian mobile length', false, { crashError: e.message });
}

// 1.10 25 digits (extreme length)
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '1234567890123456789012345',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  const isRejected = !r.valid;
  recordResult('unit', '1.10 25-digit phone rejected as invalid Indian mobile length', isRejected, { valid: r.valid, errors: r.errors });
} catch (e) {
  recordResult('unit', '1.10 25-digit phone rejected as invalid Indian mobile length', false, { crashError: e.message });
}

// 1.11 Valid +91 prefixed phone
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '+91 98765 43210',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.11 +91 prefixed formatted phone accepted', r.valid, { errors: r.errors });
} catch (e) {
  recordResult('unit', '1.11 +91 prefixed formatted phone accepted', false, { crashError: e.message });
}

// 1.12 Alphanumeric and symbol phone numbers
try {
  const rAlpha = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '98765ABCD0',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  const rSym = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '98765!@#$0',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.12 Alphanumeric and symbol phones rejected', !rAlpha.valid && !rSym.valid, { rAlpha: rAlpha.valid, rSym: rSym.valid });
} catch (e) {
  recordResult('unit', '1.12 Alphanumeric and symbol phones rejected', false, { crashError: e.message });
}

// 1.13 Unicode / Devanagari digits phone
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '९८७६५४३२१०',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
  });
  recordResult('unit', '1.13 Unicode Devanagari digits rejected if ASCII required', !r.valid, { valid: r.valid, errors: r.errors });
} catch (e) {
  recordResult('unit', '1.13 Unicode Devanagari digits rejected if ASCII required', false, { crashError: e.message });
}

// 1.14 Honeypot empty vs filled
try {
  const rEmpty = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '9876543210',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
    honeypot: '',
  });
  const rFilled = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '9876543210',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
    honeypot: 'spam-bot',
  });
  recordResult('unit', '1.14 Honeypot filled triggers invalid submission', rEmpty.valid && !rFilled.valid, { rEmpty: rEmpty.valid, rFilled: rFilled.valid });
} catch (e) {
  recordResult('unit', '1.14 Honeypot filled triggers invalid submission', false, { crashError: e.message });
}

// 1.15 Honeypot whitespace evasion
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '9876543210',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
    honeypot: '   ',
  });
  // If a bot submits whitespace, is it caught? Currently trim().length > 0 evaluates to false
  recordResult('unit', '1.15 Honeypot whitespace evasion test (strictly caught)', !r.valid, { valid: r.valid, errors: r.errors, note: 'Whitespace honeypot passes through when check uses trim().length > 0' });
} catch (e) {
  recordResult('unit', '1.15 Honeypot whitespace evasion test (strictly caught)', false, { crashError: e.message });
}

// 1.16 Honeypot non-string type (number, boolean, object)
try {
  const r = validateBookingForm({
    fullName: 'Dr Test',
    phoneNumber: '9876543210',
    preferredDate: '2026-10-25',
    preferredTime: 'Morning',
    consultationReason: 'Joint Pain',
    honeypot: 12345,
  });
  recordResult('unit', '1.16 Honeypot number type handled safely without crash', !r.valid, { valid: r.valid });
} catch (e) {
  recordResult('unit', '1.16 Honeypot number type handled safely without crash', false, { crashError: e.message });
}

// 1.17 Name validations (empty, spaces, 1 char, 10,000 chars, XSS)
try {
  const rEmpty = validateBookingForm({ fullName: '', phoneNumber: '9876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' });
  const rSpaces = validateBookingForm({ fullName: '     ', phoneNumber: '9876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' });
  const rShort = validateBookingForm({ fullName: 'A', phoneNumber: '9876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' });
  const rLong = validateBookingForm({ fullName: 'A'.repeat(10000), phoneNumber: '9876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' });
  const rXss = validateBookingForm({ fullName: '<script>alert(1)</script>', phoneNumber: '9876543210', preferredDate: '2026-10-25', preferredTime: 'Morning', consultationReason: 'Joint Pain' });

  recordResult('unit', '1.17 Empty/whitespace/short names rejected', !rEmpty.valid && !rSpaces.valid && !rShort.valid, { rEmpty: rEmpty.valid, rSpaces: rSpaces.valid, rShort: rShort.valid });
  recordResult('unit', '1.18 10,000 char name handled without crash', typeof rLong.valid === 'boolean', { valid: rLong.valid });
  recordResult('unit', '1.19 XSS script tag name validation behavior', typeof rXss.valid === 'boolean', { valid: rXss.valid, errors: rXss.errors });
} catch (e) {
  recordResult('unit', '1.17 Name validation tests', false, { crashError: e.message });
}

// 1.20 Date validations (past date, invalid date format, invalid calendar date)
try {
  const rPast = validateBookingForm({ fullName: 'Dr Test', phoneNumber: '9876543210', preferredDate: '1970-01-01', preferredTime: 'Morning', consultationReason: 'Joint Pain' });
  const rInvalidStr = validateBookingForm({ fullName: 'Dr Test', phoneNumber: '9876543210', preferredDate: 'invalid-date', preferredTime: 'Morning', consultationReason: 'Joint Pain' });
  const rNonsense = validateBookingForm({ fullName: 'Dr Test', phoneNumber: '9876543210', preferredDate: '2026-02-31', preferredTime: 'Morning', consultationReason: 'Joint Pain' });

  recordResult('unit', '1.20 Past date rejected', !rPast.valid, { valid: rPast.valid, errors: rPast.errors, note: 'Past dates are currently accepted as valid' });
  recordResult('unit', '1.21 Invalid date string rejected', !rInvalidStr.valid, { valid: rInvalidStr.valid, errors: rInvalidStr.errors, note: 'Invalid date strings are currently accepted as valid' });
} catch (e) {
  recordResult('unit', '1.20 Date validation tests', false, { crashError: e.message });
}

// ==========================================
// SUITE 2: Live /api/book Route Testing
// ==========================================
console.log('\n--- Starting Suite 2: Live /api/book Route Endpoint Stress Testing ---');

async function runEndpointTests() {
  // Test 2.1: Valid payload with [TEST] tag
  try {
    const res = await fetch(SERVER_URL, {
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
        notes: '[TEST] Pre-production Verification probe by Challenger 1',
      }),
    });
    const data = await res.json();
    recordResult('endpoint', '2.1 Valid payload returns HTTP 200 with success: true', res.status === 200 && data.success === true, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.1 Valid payload returns HTTP 200 with success: true', false, { error: e.message });
  }

  // Test 2.2: Missing phoneNumber in payload -> MUST return HTTP 400 (NOT 500)
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Patient',
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: 'Knee Pain',
      }),
    });
    const data = await res.json();
    const isExpected400 = res.status === 400;
    recordResult('endpoint', '2.2 Missing phoneNumber returns HTTP 400 (not 500)', isExpected400, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.2 Missing phoneNumber returns HTTP 400 (not 500)', false, { error: e.message });
  }

  // Test 2.3: phoneNumber: null in payload -> MUST return HTTP 400 (NOT 500)
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Patient',
        phoneNumber: null,
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: 'Knee Pain',
      }),
    });
    const data = await res.json();
    const isExpected400 = res.status === 400;
    recordResult('endpoint', '2.3 phoneNumber: null returns HTTP 400 (not 500)', isExpected400, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.3 phoneNumber: null returns HTTP 400 (not 500)', false, { error: e.message });
  }

  // Test 2.4: Empty JSON object {} -> MUST return HTTP 400 (NOT 500)
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    const isExpected400 = res.status === 400;
    recordResult('endpoint', '2.4 Empty body {} returns HTTP 400 (not 500)', isExpected400, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.4 Empty body {} returns HTTP 400 (not 500)', false, { error: e.message });
  }

  // Test 2.5: Malformed JSON syntax
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{ "unclosed": json ',
    });
    const data = await res.json();
    recordResult('endpoint', '2.5 Malformed JSON handled cleanly (HTTP 400 or 500 with JSON response)', [400, 500].includes(res.status) && typeof data === 'object', { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.5 Malformed JSON handled cleanly', false, { error: e.message });
  }

  // Test 2.6: Non-string honeypot type { honeypot: 12345 }
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Bot User',
        phoneNumber: '9760230687',
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: 'Knee',
        honeypot: 12345,
      }),
    });
    const data = await res.json();
    const isExpected400 = res.status === 400;
    recordResult('endpoint', '2.6 Non-string honeypot returns HTTP 400 (not 500)', isExpected400, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.6 Non-string honeypot returns HTTP 400 (not 500)', false, { error: e.message });
  }

  // Test 2.7: Invalid 5-digit phone number -> MUST return HTTP 400
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Patient',
        phoneNumber: '12345',
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: 'Knee',
      }),
    });
    const data = await res.json();
    recordResult('endpoint', '2.7 Invalid phone number rejected with HTTP 400 and inline error', res.status === 400 && data.errors && !!data.errors.phoneNumber, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.7 Invalid phone number rejected with HTTP 400', false, { error: e.message });
  }

  // Test 2.8: Invalid email format -> MUST return HTTP 400
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Patient',
        phoneNumber: '9760230687',
        email: 'invalid-email-string',
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: 'Knee',
      }),
    });
    const data = await res.json();
    recordResult('endpoint', '2.8 Invalid email rejected with HTTP 400 and inline error', res.status === 400 && data.errors && !!data.errors.email, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.8 Invalid email rejected with HTTP 400', false, { error: e.message });
  }

  // Test 2.9: Honeypot filled with "bot" -> MUST return HTTP 400
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Bot User',
        phoneNumber: '9760230687',
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: 'Knee',
        honeypot: 'bot-fill',
      }),
    });
    const data = await res.json();
    recordResult('endpoint', '2.9 Honeypot filled rejected with HTTP 400', res.status === 400 && data.errors && !!data.errors.fullName, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.9 Honeypot filled rejected with HTTP 400', false, { error: e.message });
  }

  // Test 2.10: 10,000 character notes payload
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: 'Test Patient',
        phoneNumber: '9760230687',
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: 'Knee',
        notes: 'X'.repeat(10000),
      }),
    });
    const data = await res.json();
    recordResult('endpoint', '2.10 10,000-char notes payload handled without crash', [200, 400].includes(res.status), { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.10 10,000-char notes payload handled without crash', false, { error: e.message });
  }

  // Test 2.11: XSS payload in fullName & notes
  try {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: '<script>alert("XSS")</script>',
        phoneNumber: '9760230687',
        preferredDate: '2026-10-25',
        preferredTime: 'Morning',
        consultationReason: '<img src=x onerror=alert(1)>',
        notes: '"><svg onload=alert(document.cookie)>',
      }),
    });
    const data = await res.json();
    recordResult('endpoint', '2.11 XSS payload accepted safely into pipe without execution', res.status === 200 && data.success === true, { status: res.status, data });
  } catch (e) {
    recordResult('endpoint', '2.11 XSS payload handled safely', false, { error: e.message });
  }

  // Test 2.12: GET method on /api/book
  try {
    const res = await fetch(SERVER_URL, { method: 'GET' });
    recordResult('endpoint', '2.12 GET on /api/book returns 405 Method Not Allowed', res.status === 405, { status: res.status });
  } catch (e) {
    recordResult('endpoint', '2.12 GET on /api/book', false, { error: e.message });
  }
}

// ==========================================
// SUITE 3: Google Apps Script Webhook Probe
// ==========================================
console.log('\n--- Starting Suite 3: Google Apps Script Webhook Probe ---');

async function runWebhookTests() {
  // Test 3.1: Live probe with 10 fields
  try {
    const startTime = Date.now();
    const res = await fetch(GOOGLE_WEBHOOK_URL, {
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
        notes: '[TEST] Pre-production Verification probe by Challenger 1',
        timestamp: new Date().toISOString(),
      }),
    });
    const elapsed = Date.now() - startTime;
    const text = await res.text();
    let json = null;
    try { json = JSON.parse(text); } catch (_) {}
    recordResult('webhook', '3.1 Live Google Apps Script webhook returns 200 with status success', res.status === 200 && json && json.status === 'success', { status: res.status, elapsedMs: elapsed, body: json || text });
  } catch (e) {
    recordResult('webhook', '3.1 Live Google Apps Script webhook probe', false, { error: e.message });
  }

  // Test 3.2: Webhook payload missing fields
  try {
    const res = await fetch(GOOGLE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: 'empty' }),
    });
    const text = await res.text();
    recordResult('webhook', '3.2 Webhook handling of arbitrary payload', res.status === 200, { status: res.status, body: text.slice(0, 100) });
  } catch (e) {
    recordResult('webhook', '3.2 Webhook arbitrary payload', false, { error: e.message });
  }
}

async function main() {
  await runEndpointTests();
  await runWebhookTests();

  console.log('\n==========================================');
  console.log('SUMMARY OF EMPIRICAL ADVERSARIAL FINDINGS:');
  console.log('==========================================');
  const allTests = [...results.unit, ...results.endpoint, ...results.webhook];
  const passed = allTests.filter(t => t.passed).length;
  const failed = allTests.filter(t => !t.passed).length;
  console.log(`Total: ${allTests.length} | Passed: ${passed} | Failed: ${failed}`);
  console.log('Failed Tests:');
  for (const f of allTests.filter(t => !t.passed)) {
    console.log(` - ${f.testName}: ${JSON.stringify(f.details)}`);
  }
}

main().catch(console.error);
