import { spawn } from 'node:child_process';
import fs from 'node:fs';

const PORT = 3099;
const CDP_PORT = 9227;
const APP_URL = `http://127.0.0.1:${PORT}`;
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PROFILE_DIR = 'd:\\Ortho-clinic\\.temp_edge_challenger_final';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getWsUrl(port) {
  const res = await fetch(`http://127.0.0.1:${port}/json/version`);
  const data = await res.json();
  return data.webSocketDebuggerUrl;
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    return new Promise((resolve, reject) => {
      this.ws.onopen = () => resolve();
      this.ws.onerror = (err) => reject(err);
      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.id && this.callbacks.has(msg.id)) {
            const { resolve, reject } = this.callbacks.get(msg.id);
            this.callbacks.delete(msg.id);
            if (msg.error) {
              reject(new Error(msg.error.message || JSON.stringify(msg.error)));
            } else {
              resolve(msg.result);
            }
          }
        } catch (e) {
          console.error('CDP parse error:', e);
        }
      };
    });
  }

  send(method, params = {}) {
    const reqId = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(reqId, { resolve, reject });
      this.ws.send(JSON.stringify({ id: reqId, method, params }));
    });
  }

  async eval(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.exceptionDetails) {
      throw new Error(res.exceptionDetails.text || JSON.stringify(res.exceptionDetails));
    }
    return res.result.value;
  }

  async setViewport(width, height = 844) {
    await this.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: true,
    });
  }

  async pressTab(shift = false) {
    const modifiers = shift ? 8 : 0;
    await this.send('Input.dispatchKeyEvent', {
      type: 'rawKeyDown',
      key: 'Tab',
      code: 'Tab',
      windowsVirtualKeyCode: 9,
      modifiers,
    });
    await this.send('Input.dispatchKeyEvent', {
      type: 'keyUp',
      key: 'Tab',
      code: 'Tab',
      windowsVirtualKeyCode: 9,
      modifiers,
    });
  }

  async pressEscape() {
    await this.send('Input.dispatchKeyEvent', {
      type: 'rawKeyDown',
      key: 'Escape',
      code: 'Escape',
      windowsVirtualKeyCode: 27,
    });
    await this.send('Input.dispatchKeyEvent', {
      type: 'keyUp',
      key: 'Escape',
      code: 'Escape',
      windowsVirtualKeyCode: 27,
    });
  }

  async clickAt(x, y) {
    await this.send('Input.dispatchMouseEvent', {
      type: 'mousePressed',
      x,
      y,
      button: 'left',
      clickCount: 1,
    });
    await this.send('Input.dispatchMouseEvent', {
      type: 'mouseReleased',
      x,
      y,
      button: 'left',
      clickCount: 1,
    });
  }

  close() {
    if (this.ws) {
      this.ws.close();
    }
  }
}

async function run() {
  console.log('=== CHALLENGER FINAL: TOUCH TARGETS & ACCESSIBILITY AUDIT ===\n');
  const results = {
    modalAccessibility: {},
    touchTargets: {},
    responsiveLayout: {},
    verdict: 'PENDING',
    failures: [],
  };

  let edgeProcess = null;
  let cdp = null;

  try {
    console.log(`Connecting to server at ${APP_URL}...`);
    const r = await fetch(APP_URL);
    if (r.status !== 200) throw new Error(`Server returned ${r.status}`);

    console.log(`Launching headless Edge with remote debugging on ${CDP_PORT}...`);
    edgeProcess = spawn(
      EDGE_PATH,
      [
        '--headless=new',
        `--remote-debugging-port=${CDP_PORT}`,
        '--no-first-run',
        '--no-default-browser-check',
        `--user-data-dir=${PROFILE_DIR}`,
      ],
      { stdio: 'ignore' }
    );

    await sleep(2000);
    const browserWsUrl = await getWsUrl(CDP_PORT);
    console.log(`Connected to Edge browser WebSocket: ${browserWsUrl}`);

    const listRes = await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`);
    const targetList = await listRes.json();
    const pageTarget = targetList.find((t) => t.type === 'page');
    if (!pageTarget) throw new Error('No page target found in Edge');

    cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await cdp.connect();
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');
    console.log(`Navigating to ${APP_URL}...`);
    await cdp.send('Page.navigate', { url: APP_URL });
    await sleep(2500);

    // ------------------------------------------
    // 1. MODAL DIALOG ACCESSIBILITY
    // ------------------------------------------
    console.log('\n--- Section 1: Modal Accessibility Verification ---');
    const initialOverflow = await cdp.eval('document.body.style.overflow');
    console.log(`Initial document.body.style.overflow: "${initialOverflow}"`);

    // Open Modal
    const triggerClicked = await cdp.eval(`
      (() => {
        const btn = document.querySelector('header button[aria-label="Book Consultation"]');
        if (!btn) return false;
        btn.focus();
        btn.click();
        return true;
      })()
    `);
    console.log(`Modal open trigger clicked: ${triggerClicked}`);
    await sleep(600);

    // ARIA checks
    const modalAria = await cdp.eval(`
      (() => {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return { found: false };
        const labelledBy = dialog.getAttribute('aria-labelledby');
        const titleEl = labelledBy ? document.getElementById(labelledBy) : null;
        return {
          found: true,
          role: dialog.getAttribute('role'),
          ariaModal: dialog.getAttribute('aria-modal'),
          ariaLabelledBy: labelledBy,
          titleExists: !!titleEl,
          titleText: titleEl ? titleEl.textContent.trim() : null
        };
      })()
    `);
    console.log('Modal ARIA:', modalAria);
    results.modalAccessibility.ariaAttributes = modalAria;
    if (!modalAria.found || modalAria.role !== 'dialog' || modalAria.ariaModal !== 'true') {
      results.failures.push('Modal missing role="dialog" or aria-modal="true"');
    }

    // Body scroll lock
    const lockedOverflow = await cdp.eval('document.body.style.overflow');
    console.log(`Modal open overflow: "${lockedOverflow}"`);
    results.modalAccessibility.bodyScrollLock = lockedOverflow === 'hidden';
    if (lockedOverflow !== 'hidden') {
      results.failures.push(`Expected overflow 'hidden', got '${lockedOverflow}'`);
    }

    // Initial focus on close button
    const initialFocus = await cdp.eval(`
      (() => {
        const el = document.activeElement;
        return {
          tagName: el ? el.tagName : null,
          ariaLabel: el ? el.getAttribute('aria-label') : null,
        };
      })()
    `);
    console.log('Initial active element:', initialFocus);
    results.modalAccessibility.initialFocus = initialFocus;
    if (initialFocus.ariaLabel !== 'Close Booking Window') {
      results.failures.push(`Initial focus should be on close button, got ${JSON.stringify(initialFocus)}`);
    }

    // Forward tab trapping
    const focusableCount = await cdp.eval(`
      (() => {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return 0;
        const all = Array.from(dialog.querySelectorAll('button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))
          .filter(el => el.offsetParent !== null || el.getAttribute('aria-label') === 'Close Booking Window');
        return all.length;
      })()
    `);
    console.log(`Focusable elements inside modal: ${focusableCount}`);

    let leaked = false;
    for (let i = 0; i < focusableCount + 2; i++) {
      await cdp.pressTab(false);
      await sleep(40);
      const active = await cdp.eval(`
        (() => {
          const el = document.activeElement;
          const dialog = document.querySelector('[role="dialog"]');
          return dialog ? dialog.contains(el) : false;
        })()
      `);
      if (!active) {
        leaked = true;
        break;
      }
    }
    console.log(`Tab leaked outside modal: ${leaked}`);
    if (leaked) results.failures.push('Tab focus leaked outside modal');

    // Shift+Tab from close button wraps to last
    await cdp.eval(`
      (() => {
        const closeBtn = document.querySelector('[aria-label="Close Booking Window"]');
        if (closeBtn) closeBtn.focus();
      })()
    `);
    await sleep(50);
    await cdp.pressTab(true);
    await sleep(100);
    const afterShiftTab = await cdp.eval(`
      (() => {
        const el = document.activeElement;
        return el ? el.textContent.trim().slice(0, 30) : null;
      })()
    `);
    console.log('Focused after Shift+Tab from close button:', afterShiftTab);
    const wrappedToSubmit = afterShiftTab && afterShiftTab.includes('Submit Appointment');
    results.modalAccessibility.shiftTabWrapsToLast = wrappedToSubmit;
    if (!wrappedToSubmit) {
      results.failures.push(`Shift+Tab did not wrap to Submit button. Focused: ${afterShiftTab}`);
    }

    // Click backdrop dismisses modal
    await cdp.clickAt(10, 10);
    await sleep(300);
    const closedAfterBackdrop = await cdp.eval('!document.querySelector(\'[role="dialog"]\')');
    console.log(`Modal closed after backdrop click: ${closedAfterBackdrop}`);
    results.modalAccessibility.backdropDismiss = closedAfterBackdrop;
    if (!closedAfterBackdrop) results.failures.push('Modal failed to close on backdrop click');

    // Overflow restoration
    const restoredOverflow = await cdp.eval('document.body.style.overflow');
    console.log(`Restored overflow: "${restoredOverflow}"`);
    results.modalAccessibility.bodyScrollRestored = restoredOverflow === initialOverflow;
    if (restoredOverflow !== initialOverflow) {
      results.failures.push(`Body overflow not restored: "${restoredOverflow}" vs "${initialOverflow}"`);
    }

    // Escape dismissal test
    await cdp.eval(`
      (() => {
        const btn = document.querySelector('header button[aria-label="Book Consultation"]');
        if (btn) btn.click();
      })()
    `);
    await sleep(400);
    await cdp.pressEscape();
    await sleep(300);
    const closedAfterEscape = await cdp.eval('!document.querySelector(\'[role="dialog"]\')');
    console.log(`Modal closed after Escape key: ${closedAfterEscape}`);
    results.modalAccessibility.escapeDismiss = closedAfterEscape;
    if (!closedAfterEscape) results.failures.push('Modal failed to close on Escape key');

    // ------------------------------------------
    // 2. TOUCH TARGET MEASUREMENTS ACROSS VIEWPORTS
    // ------------------------------------------
    console.log('\n--- Section 2: Touch Target Measurements (375, 390, 414, 430px) ---');
    const viewports = [375, 390, 414, 430];

    for (const vp of viewports) {
      console.log(`\nEvaluating Touch Targets at ${vp}px:`);
      await cdp.setViewport(vp, 844);
      await sleep(300);

      const targets = await cdp.eval(`
        (() => {
          const list = [];

          // 1. Header mobile buttons
          const headerBook = document.querySelector('header button.sm\\\\:hidden[aria-label="Book Consultation"]');
          if (headerBook) {
            const r = headerBook.getBoundingClientRect();
            list.push({ component: 'Header', name: 'Mobile Book Button', width: r.width, height: r.height });
          }
          const hamburger = document.querySelector('header button[aria-label="Toggle Navigation Menu"]');
          if (hamburger) {
            const r = hamburger.getBoundingClientRect();
            list.push({ component: 'Header', name: 'Hamburger Menu Button', width: r.width, height: r.height });
          }

          // 2. MobileActionBar
          const bar = document.querySelector('aside[aria-label="Quick Contact Actions"]');
          if (bar) {
            Array.from(bar.querySelectorAll('a, button')).forEach(item => {
              const r = item.getBoundingClientRect();
              const label = item.getAttribute('aria-label') || item.textContent.trim().replace(/\\s+/g, ' ');
              list.push({ component: 'MobileActionBar', name: label, width: r.width, height: r.height });
            });
          }

          // 3. InteractiveBodyGuide Tabs and CTA
          const guide = document.querySelector('#symptom-navigator');
          if (guide) {
            Array.from(guide.querySelectorAll('[role="tab"]')).forEach(tab => {
              const r = tab.getBoundingClientRect();
              list.push({ component: 'InteractiveBodyGuide', name: 'Tab: ' + tab.textContent.trim(), width: r.width, height: r.height });
            });
            const ctaBtn = guide.querySelector('button.btn-accent-emerald');
            if (ctaBtn) {
              const r = ctaBtn.getBoundingClientRect();
              list.push({ component: 'InteractiveBodyGuide', name: 'CTA: ' + ctaBtn.textContent.trim(), width: r.width, height: r.height });
            }
          }

          // 4. Footer Badges & Links
          const footer = document.querySelector('footer');
          if (footer) {
            Array.from(footer.querySelectorAll('a[title*="Google"]')).forEach(b => {
              const r = b.getBoundingClientRect();
              list.push({ component: 'Footer', name: 'Badge: ' + b.textContent.trim().slice(0, 30), width: r.width, height: r.height });
            });
            Array.from(footer.querySelectorAll('a.min-h-\\\\[44px\\\\]')).forEach(l => {
              const r = l.getBoundingClientRect();
              list.push({ component: 'Footer', name: 'Link: ' + l.textContent.trim().slice(0, 30), width: r.width, height: r.height });
            });
          }

          return list;
        })()
      `);

      results.touchTargets[vp] = targets;
      targets.forEach(t => {
        const pass = t.width >= 44 && t.height >= 44;
        console.log(`  [${pass ? 'PASS' : 'FAIL'}] ${t.component} -> "${t.name}": ${t.width.toFixed(1)}px x ${t.height.toFixed(1)}px (min 44x44)`);
        if (!pass) {
          results.failures.push(`Touch target < 44x44px at ${vp}px: ${t.component} "${t.name}" (${t.width.toFixed(1)}x${t.height.toFixed(1)}px)`);
        }
      });

      // Mobile Drawer Close Button
      await cdp.eval(`
        (() => {
          const btn = document.querySelector('header button[aria-label="Toggle Navigation Menu"]');
          if (btn) btn.click();
        })()
      `);
      await sleep(300);
      const drawerClose = await cdp.eval(`
        (() => {
          const btn = document.querySelector('button[aria-label="Close Navigation Menu"]');
          if (!btn) return null;
          const r = btn.getBoundingClientRect();
          return { width: r.width, height: r.height };
        })()
      `);
      if (drawerClose) {
        const pass = drawerClose.width >= 44 && drawerClose.height >= 44;
        console.log(`  [${pass ? 'PASS' : 'FAIL'}] Header Drawer Close: ${drawerClose.width.toFixed(1)}px x ${drawerClose.height.toFixed(1)}px`);
        if (!pass) {
          results.failures.push(`Header Drawer Close < 44x44px at ${vp}px: ${drawerClose.width.toFixed(1)}x${drawerClose.height.toFixed(1)}px`);
        }
      }
      await cdp.eval(`
        (() => {
          const btn = document.querySelector('button[aria-label="Close Navigation Menu"]');
          if (btn) btn.click();
        })()
      `);
      await sleep(300);

      // Horizontal overflow check
      const layout = await cdp.eval(`
        (() => {
          return {
            winWidth: window.innerWidth,
            scrollWidth: document.documentElement.scrollWidth,
            hasOverflow: document.documentElement.scrollWidth > window.innerWidth
          };
        })()
      `);
      console.log(`  [${!layout.hasOverflow ? 'PASS' : 'FAIL'}] Horizontal scroll at ${vp}px: scrollWidth=${layout.scrollWidth}, winWidth=${layout.winWidth}`);
      if (layout.hasOverflow) {
        results.failures.push(`Horizontal overflow at ${vp}px: scrollWidth ${layout.scrollWidth} > winWidth ${layout.winWidth}`);
      }

      // Footer overlap check
      await cdp.eval('window.scrollTo(0, document.body.scrollHeight)');
      await sleep(300);
      const footerClearance = await cdp.eval(`
        (() => {
          const bar = document.querySelector('aside[aria-label="Quick Contact Actions"]');
          const footer = document.querySelector('footer');
          if (!bar || !footer) return { ok: true };
          const barRect = bar.getBoundingClientRect();
          const footerElements = Array.from(footer.querySelectorAll('a, p'));
          const overlapped = footerElements.filter(el => {
            const r = el.getBoundingClientRect();
            return (r.bottom > barRect.top && r.top < barRect.bottom && r.height > 0);
          });
          return {
            overlappedCount: overlapped.length,
            barTop: barRect.top
          };
        })()
      `);
      const clearancePass = footerClearance.overlappedCount === 0;
      console.log(`  [${clearancePass ? 'PASS' : 'FAIL'}] Footer overlap at ${vp}px: ${footerClearance.overlappedCount} overlapped elements`);
      if (!clearancePass) {
        results.failures.push(`Footer overlapped by MobileActionBar at ${vp}px (${footerClearance.overlappedCount} elements)`);
      }
    }

    if (results.failures.length === 0) {
      results.verdict = 'APPROVE';
    } else {
      results.verdict = 'REQUEST_CHANGES';
    }

    console.log('\n==========================================');
    console.log(`FINAL EMPIRICAL VERDICT: ${results.verdict}`);
    console.log(`Total Failures: ${results.failures.length}`);
    results.failures.forEach((f, i) => console.log(` ${i + 1}. ${f}`));
    console.log('==========================================\n');

    fs.writeFileSync('d:\\Ortho-clinic\\.agents\\teamwork\\challenger_final\\touch_and_a11y_results.json', JSON.stringify(results, null, 2));

  } catch (err) {
    console.error('Fatal execution error:', err);
    results.verdict = 'REQUEST_CHANGES';
    results.failures.push(`Fatal error: ${err.message}`);
    fs.writeFileSync('d:\\Ortho-clinic\\.agents\\teamwork\\challenger_final\\touch_and_a11y_results.json', JSON.stringify(results, null, 2));
  } finally {
    if (cdp) cdp.close();
    if (edgeProcess) edgeProcess.kill();
    try {
      fs.rmSync(PROFILE_DIR, { recursive: true, force: true });
    } catch (e) {}
  }
}

run();
