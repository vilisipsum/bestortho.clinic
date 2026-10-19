import { spawn } from 'node:child_process';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const PORT = 3015;
const CDP_PORT = 9226;
const APP_URL = `http://127.0.0.1:${PORT}`;
const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const PROFILE_DIR = 'd:\\Ortho-clinic\\.temp_edge_challenger2';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, maxWait = 25000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    try {
      const res = await fetch(url);
      if (res.status === 200) return true;
    } catch (e) {
      // wait
    }
    await sleep(400);
  }
  throw new Error(`Server did not start at ${url} within ${maxWait}ms`);
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
    const modifiers = shift ? 8 : 0; // Shift = 8
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
  console.log('=== CHALLENGER 2 EMPIRICAL ADVERSARIAL STRESS TEST ===\n');
  const results = {
    modalAccessibility: {},
    touchTargets: {},
    responsiveLayout: {},
    verdict: 'PENDING',
    failures: [],
  };

  let nextServer = null;
  try {
    const r = await fetch(APP_URL);
    if (r.status === 200) {
      console.log(`Using existing Next.js server at ${APP_URL}`);
    } else {
      throw new Error(`Unexpected status ${r.status}`);
    }
  } catch (e) {
    console.log(`Starting Next.js production server on port ${PORT}...`);
    nextServer = spawn(process.execPath, ['./node_modules/next/dist/bin/next', 'start', '-p', String(PORT)], {
      cwd: 'd:\\Ortho-clinic',
      stdio: 'ignore',
    });
    await waitForServer(APP_URL, 30000);
    console.log(`Next.js server is active at ${APP_URL}`);
  }

  let edgeProcess = null;
  let browserWsUrl = null;
  let cdp = null;

  try {

    // 2. Launch Headless Edge
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
    browserWsUrl = await getWsUrl(CDP_PORT);
    console.log(`Connected to Edge browser WebSocket: ${browserWsUrl}`);

    const listRes = await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`);
    const targetList = await listRes.json();
    const pageTarget = targetList.find((t) => t.type === 'page');
    if (!pageTarget) {
      throw new Error('No page target found in Edge /json/list');
    }
    console.log(`Attaching to page target: ${pageTarget.id}`);

    cdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
    await cdp.connect();
    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('DOM.enable');
    console.log(`Navigating to ${APP_URL}...`);
    await cdp.send('Page.navigate', { url: APP_URL });

    // Wait for page to finish loading
    await sleep(2500);

    // ==========================================
    // SECTION 1: MODAL DIALOG ACCESSIBILITY
    // ==========================================
    console.log('\n--- Testing Section 1: Modal Dialog Accessibility in BookingModal.tsx ---');

    // Step 1.1: Body scroll lock & restore initial state
    const initialBodyOverflow = await cdp.eval('document.body.style.overflow');
    console.log(`Initial document.body.style.overflow: "${initialBodyOverflow}"`);

    // Step 1.2: Trigger modal open via Header Book button
    console.log('Focusing and clicking Header Book Consultation button...');
    const triggerClicked = await cdp.eval(`
      (() => {
        // Find visible booking CTA button
        const btn = document.querySelector('header button[aria-label="Book Consultation"]');
        if (!btn) return false;
        btn.focus();
        btn.click();
        return true;
      })()
    `);
    console.log(`Trigger clicked: ${triggerClicked}`);
    await sleep(600); // allow animation / render frame

    // Step 1.3: Verify modal attributes
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
    console.log('Modal ARIA attributes:', modalAria);
    results.modalAccessibility.ariaAttributes = modalAria;
    if (!modalAria.found || modalAria.role !== 'dialog' || modalAria.ariaModal !== 'true') {
      results.failures.push('Modal missing required role="dialog" or aria-modal="true"');
    }

    // Step 1.4: Verify Body Scroll Lock
    const lockedBodyOverflow = await cdp.eval('document.body.style.overflow');
    console.log(`Modal open document.body.style.overflow: "${lockedBodyOverflow}"`);
    results.modalAccessibility.bodyScrollLock = lockedBodyOverflow === 'hidden';
    if (lockedBodyOverflow !== 'hidden') {
      results.failures.push(`Modal body scroll lock failed: expected 'hidden', got '${lockedBodyOverflow}'`);
    }

    // Step 1.5: Verify Initial Focus
    const activeElementOnOpen = await cdp.eval(`
      (() => {
        const el = document.activeElement;
        return {
          tagName: el ? el.tagName : null,
          ariaLabel: el ? el.getAttribute('aria-label') : null,
          className: el ? el.className : null
        };
      })()
    `);
    console.log('Active element on modal open:', activeElementOnOpen);
    results.modalAccessibility.initialFocus = activeElementOnOpen;
    const isCloseButtonFocused = activeElementOnOpen.ariaLabel === 'Close Booking Window';
    if (!isCloseButtonFocused) {
      results.failures.push(`Initial focus should be on close button, got: ${JSON.stringify(activeElementOnOpen)}`);
    }

    // Step 1.6: Focus Trapping Rigor - Query all focusable elements inside modal
    const focusableInfo = await cdp.eval(`
      (() => {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return null;
        const all = Array.from(dialog.querySelectorAll('button:not([disabled]), [href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'))
          .filter(el => el.offsetParent !== null || el.getAttribute('aria-label') === 'Close Booking Window');
        return all.map((el, idx) => ({
          idx,
          tagName: el.tagName,
          ariaLabel: el.getAttribute('aria-label') || '',
          type: el.getAttribute('type') || '',
          name: el.getAttribute('name') || '',
          text: el.textContent ? el.textContent.trim().slice(0, 30) : ''
        }));
      })()
    `);
    console.log(`Found ${focusableInfo ? focusableInfo.length : 0} focusable elements inside modal.`);
    results.modalAccessibility.focusableCount = focusableInfo ? focusableInfo.length : 0;

    // Step 1.7: Stress-test Forward Tab Trapping
    console.log('Testing Forward Tab trapping across all elements...');
    // We start at first element (close button). Let's tab through all elements until last, then tab once more.
    const tabCycle = [];
    for (let i = 0; i < (focusableInfo.length + 2); i++) {
      await cdp.pressTab(false);
      await sleep(50);
      const active = await cdp.eval(`
        (() => {
          const el = document.activeElement;
          const dialog = document.querySelector('[role="dialog"]');
          return {
            insideModal: dialog ? dialog.contains(el) : false,
            tagName: el ? el.tagName : null,
            ariaLabel: el ? el.getAttribute('aria-label') : null,
            text: el ? el.textContent.trim().slice(0, 30) : null
          };
        })()
      `);
      tabCycle.push(active);
    }
    // Check if any tab went outside the modal
    const tabLeaked = tabCycle.some(t => !t.insideModal);
    console.log(`Tab leaked outside modal: ${tabLeaked}`);
    if (tabLeaked) {
      results.failures.push('Tab focus leaked outside modal dialog during forward cycle');
    }

    // Step 1.8: Reverse Shift+Tab from First Element
    console.log('Testing Reverse Shift+Tab from Close Button (first element)...');
    // Ensure close button is focused first
    await cdp.eval(`
      (() => {
        const closeBtn = document.querySelector('[aria-label="Close Booking Window"]');
        if (closeBtn) closeBtn.focus();
      })()
    `);
    await sleep(50);
    // Press Shift+Tab
    await cdp.pressTab(true);
    await sleep(100);
    const elementAfterShiftTab = await cdp.eval(`
      (() => {
        const el = document.activeElement;
        const dialog = document.querySelector('[role="dialog"]');
        return {
          insideModal: dialog ? dialog.contains(el) : false,
          tagName: el ? el.tagName : null,
          text: el ? el.textContent.trim().slice(0, 30) : null
        };
      })()
    `);
    console.log('Element focused after Shift+Tab from close button:', elementAfterShiftTab);
    const wrappedToSubmit = elementAfterShiftTab.text && elementAfterShiftTab.text.includes('Submit Appointment');
    results.modalAccessibility.shiftTabWrapsToLast = wrappedToSubmit;
    if (!wrappedToSubmit) {
      results.failures.push(`Shift+Tab from first element did not wrap to last element (Submit button). Got: ${JSON.stringify(elementAfterShiftTab)}`);
    }

    // Step 1.9: Backdrop Click Behavior
    console.log('Testing Backdrop Click vs Modal Card Click...');
    // Click modal card center (should NOT close)
    const cardRect = await cdp.eval(`
      (() => {
        const dialog = document.querySelector('[role="dialog"]');
        if (!dialog) return null;
        const r = dialog.getBoundingClientRect();
        return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
      })()
    `);
    if (cardRect) {
      await cdp.clickAt(cardRect.x, cardRect.y);
      await sleep(200);
      const stillOpenAfterCardClick = await cdp.eval('!!document.querySelector(\'[role="dialog"]\')');
      console.log(`Modal still open after clicking card center: ${stillOpenAfterCardClick}`);
      if (!stillOpenAfterCardClick) {
        results.failures.push('Modal incorrectly closed when clicking inside modal card content');
      }
    }

    // Click backdrop (e.g. at (10, 10))
    await cdp.clickAt(10, 10);
    await sleep(300);
    const closedAfterBackdrop = await cdp.eval('!document.querySelector(\'[role="dialog"]\')');
    console.log(`Modal closed after backdrop click: ${closedAfterBackdrop}`);
    results.modalAccessibility.backdropDismiss = closedAfterBackdrop;
    if (!closedAfterBackdrop) {
      results.failures.push('Modal failed to close when clicking the backdrop overlay');
    }

    // Step 1.10: Body Scroll Lock Restore & Focus Restoration
    const restoredBodyOverflow = await cdp.eval('document.body.style.overflow');
    console.log(`document.body.style.overflow after close: "${restoredBodyOverflow}"`);
    results.modalAccessibility.bodyScrollRestored = restoredBodyOverflow === initialBodyOverflow;
    if (restoredBodyOverflow !== initialBodyOverflow) {
      results.failures.push(`Body overflow not restored after modal close: expected "${initialBodyOverflow}", got "${restoredBodyOverflow}"`);
    }

    const restoredFocusElement = await cdp.eval(`
      (() => {
        const el = document.activeElement;
        return {
          tagName: el ? el.tagName : null,
          ariaLabel: el ? el.getAttribute('aria-label') : null,
          text: el ? el.textContent.trim() : null
        };
      })()
    `);
    console.log('Active element after modal close (focus restoration):', restoredFocusElement);
    results.modalAccessibility.focusRestored = (restoredFocusElement.ariaLabel === 'Book Consultation');

    // Step 1.11: Escape Key Dismissal & Cleanup
    console.log('Testing Escape key dismissal...');
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
    if (!closedAfterEscape) {
      results.failures.push('Modal failed to close when pressing Escape key');
    }


    // ==========================================
    // SECTION 2: TOUCH TARGETS (44x44px BOUNDING BOX)
    // ==========================================
    console.log('\n--- Testing Section 2: Touch Targets across Header, MobileActionBar, InteractiveBodyGuide, Footer ---');
    const viewports = [375, 390, 414, 430];

    for (const vp of viewports) {
      console.log(`\nEvaluating Touch Targets at Viewport Width ${vp}px...`);
      await cdp.setViewport(vp, 844);
      await sleep(300);

      const targets = await cdp.eval(`
        (() => {
          const list = [];
          
          // 1. Header elements
          const headerBookBtn = document.querySelector('header button.sm\\\\:hidden[aria-label="Book Consultation"]');
          if (headerBookBtn) {
            const r = headerBookBtn.getBoundingClientRect();
            list.push({ component: 'Header', name: 'Mobile Quick Book Button', width: r.width, height: r.height, tag: 'button' });
          }
          const hamburgerBtn = document.querySelector('header button[aria-label="Toggle Navigation Menu"]');
          if (hamburgerBtn) {
            const r = hamburgerBtn.getBoundingClientRect();
            list.push({ component: 'Header', name: 'Hamburger Menu Button', width: r.width, height: r.height, tag: 'button' });
          }

          // 2. MobileActionBar elements
          const bar = document.querySelector('aside[aria-label="Quick Contact Actions"]');
          if (bar) {
            const barItems = Array.from(bar.querySelectorAll('a, button'));
            barItems.forEach(item => {
              const r = item.getBoundingClientRect();
              const label = item.getAttribute('aria-label') || item.textContent.trim().replace(/\\s+/g, ' ');
              list.push({ component: 'MobileActionBar', name: label, width: r.width, height: r.height, tag: item.tagName.toLowerCase() });
            });
          }

          // 3. InteractiveBodyGuide elements
          const guide = document.querySelector('#symptom-navigator');
          if (guide) {
            // Tab buttons
            const tabs = Array.from(guide.querySelectorAll('[role="tab"]'));
            tabs.forEach(tab => {
              const r = tab.getBoundingClientRect();
              list.push({ component: 'InteractiveBodyGuide', name: 'Tab: ' + tab.textContent.trim(), width: r.width, height: r.height, tag: 'button' });
            });
            // Direct booking CTA button inside selected panel
            const ctaBtn = guide.querySelector('button.btn-accent-emerald');
            if (ctaBtn) {
              const r = ctaBtn.getBoundingClientRect();
              list.push({ component: 'InteractiveBodyGuide', name: 'CTA: ' + ctaBtn.textContent.trim(), width: r.width, height: r.height, tag: 'button' });
            }
          }

          // 4. Footer elements
          const footer = document.querySelector('footer');
          if (footer) {
            // Badges
            const badges = Array.from(footer.querySelectorAll('a[title*="Google"]'));
            badges.forEach(b => {
              const r = b.getBoundingClientRect();
              list.push({ component: 'Footer', name: 'Badge: ' + b.textContent.trim().slice(0, 30), width: r.width, height: r.height, tag: 'a' });
            });
          }

          return list;
        })()
      `);

      results.touchTargets[vp] = targets;

      // Check each target against 44x44px
      targets.forEach(t => {
        const passes = t.width >= 44 && t.height >= 44;
        const status = passes ? 'PASS' : 'FAIL';
        console.log(`  [${status}] ${t.component} -> "${t.name}" (${t.tag}): ${t.width.toFixed(1)}px x ${t.height.toFixed(1)}px (min 44x44)`);
        if (!passes) {
          results.failures.push(`Touch target < 44x44px at ${vp}px: ${t.component} "${t.name}" is ${t.width.toFixed(1)}x${t.height.toFixed(1)}px`);
        }
      });

      // Also test Mobile Flyout Drawer Close Button touch target
      await cdp.eval(`
        (() => {
          const btn = document.querySelector('header button[aria-label="Toggle Navigation Menu"]');
          if (btn) btn.click();
        })()
      `);
      await sleep(300);
      const drawerCloseBtn = await cdp.eval(`
        (() => {
          const btn = document.querySelector('button[aria-label="Close Navigation Menu"]');
          if (!btn) return null;
          const r = btn.getBoundingClientRect();
          return { width: r.width, height: r.height };
        })()
      `);
      if (drawerCloseBtn) {
        const passes = drawerCloseBtn.width >= 44 && drawerCloseBtn.height >= 44;
        console.log(`  [${passes ? 'PASS' : 'FAIL'}] Header Flyout Close Button: ${drawerCloseBtn.width.toFixed(1)}px x ${drawerCloseBtn.height.toFixed(1)}px`);
        if (!passes) {
          results.failures.push(`Header Flyout Close Button < 44x44px at ${vp}px: ${drawerCloseBtn.width}x${drawerCloseBtn.height}px`);
        }
      }
      // Close drawer
      await cdp.eval(`
        (() => {
          const btn = document.querySelector('button[aria-label="Close Navigation Menu"]');
          if (btn) btn.click();
        })()
      `);
      await sleep(300);
    }


    // ==========================================
    // SECTION 3: RESPONSIVE VIEWPORT LAYOUT & NO FOOTER OVERLAP
    // ==========================================
    console.log('\n--- Testing Section 3: Responsive Viewport Layout (375px, 390px, 414px, 430px) ---');

    for (const vp of viewports) {
      console.log(`\nChecking Layout & Horizontal Overflow at Viewport ${vp}px...`);
      await cdp.setViewport(vp, 844);
      await sleep(300);

      const layoutMetrics = await cdp.eval(`
        (() => {
          const docWidth = document.documentElement.offsetWidth;
          const scrollWidth = document.documentElement.scrollWidth;
          const winWidth = window.innerWidth;
          const hasHorizontalScrollbar = scrollWidth > winWidth;

          // Find any elements overflowing viewport
          const overflowing = [];
          document.querySelectorAll('*').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > winWidth + 1 && el.offsetParent !== null) {
              overflowing.push({
                tag: el.tagName,
                className: (el.className && typeof el.className === 'string') ? el.className.slice(0, 50) : '',
                right: r.right,
                width: r.width
              });
            }
          });

          return {
            winWidth,
            docWidth,
            scrollWidth,
            hasHorizontalScrollbar,
            overflowingCount: overflowing.length,
            sampleOverflowing: overflowing.slice(0, 5)
          };
        })()
      `);
      console.log(`  Viewport ${vp}px metrics:`, layoutMetrics);
      results.responsiveLayout[vp] = layoutMetrics;

      if (layoutMetrics.hasHorizontalScrollbar) {
        results.failures.push(`Horizontal overflow detected at ${vp}px: scrollWidth (${layoutMetrics.scrollWidth}) > winWidth (${layoutMetrics.winWidth})`);
      }

      // Check Footer Overlap by Mobile Floating Action Bar
      console.log(`Checking Footer Overlap with MobileActionBar at ${vp}px...`);
      // Scroll to absolute bottom of page
      await cdp.eval('window.scrollTo(0, document.body.scrollHeight)');
      await sleep(300);

      const footerOverlapMetrics = await cdp.eval(`
        (() => {
          const bar = document.querySelector('aside[aria-label="Quick Contact Actions"]');
          const footer = document.querySelector('footer');
          if (!bar || !footer) return { barFound: !!bar, footerFound: !!footer };

          const barRect = bar.getBoundingClientRect();
          // Find the lowest visible text node or element inside footer
          const copyright = footer.querySelector('p.whitespace-nowrap') || footer.lastElementChild;
          const copyrightRect = copyright ? copyright.getBoundingClientRect() : null;

          // Also check all links in footer
          const footerLinks = Array.from(footer.querySelectorAll('a, p'));
          const overlapped = footerLinks.filter(el => {
            const r = el.getBoundingClientRect();
            // check vertical intersection with fixed bar
            return (r.bottom > barRect.top && r.top < barRect.bottom && r.height > 0);
          }).map(el => ({
            tag: el.tagName,
            text: el.textContent.trim().slice(0, 40),
            rectBottom: el.getBoundingClientRect().bottom,
            barTop: barRect.top
          }));

          return {
            barFound: true,
            footerFound: true,
            barHeight: barRect.height,
            barTop: barRect.top,
            windowHeight: window.innerHeight,
            copyrightBottom: copyrightRect ? copyrightRect.bottom : null,
            clearance: copyrightRect ? (barRect.top - copyrightRect.bottom) : null,
            overlappedCount: overlapped.length,
            overlappedItems: overlapped
          };
        })()
      `);
      console.log(`  Footer clearance at ${vp}px:`, footerOverlapMetrics);

      if (footerOverlapMetrics.overlappedCount > 0) {
        results.failures.push(`MobileActionBar overlaps footer content at ${vp}px (${footerOverlapMetrics.overlappedCount} elements obscured): ${JSON.stringify(footerOverlapMetrics.overlappedItems)}`);
      } else {
        console.log(`  [PASS] Clean footer clearance: ${footerOverlapMetrics.clearance.toFixed(1)}px between footer content and MobileActionBar.`);
      }
    }

    // Determine final verdict
    if (results.failures.length === 0) {
      results.verdict = 'APPROVE';
    } else {
      results.verdict = 'REQUEST_CHANGES';
    }

    console.log('\n==========================================');
    console.log(`FINAL EMPIRICAL VERDICT: ${results.verdict}`);
    console.log(`Total Failures/Issues Identified: ${results.failures.length}`);
    if (results.failures.length > 0) {
      console.log('Failure details:');
      results.failures.forEach((f, i) => console.log(` ${i + 1}. ${f}`));
    }
    console.log('==========================================\n');

    // Write raw test results for audit trail
    fs.writeFileSync('d:\\Ortho-clinic\\.agents\\teamwork\\challenger_2\\raw_test_results.json', JSON.stringify(results, null, 2));

  } catch (err) {
    console.error('Fatal test execution error:', err);
    results.verdict = 'REQUEST_CHANGES';
    results.failures.push(`Fatal error: ${err.message}`);
  } finally {
    if (cdp) cdp.close();
    if (edgeProcess) {
      edgeProcess.kill();
    }
    if (nextServer) {
      nextServer.kill();
    }
    // Clean up profile dir
    try {
      fs.rmSync(PROFILE_DIR, { recursive: true, force: true });
    } catch (e) {}
  }
}

run();
