// Capture all asset responses during page load (bypasses hotlink protection)
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/landing-assets';
fs.mkdirSync(OUT_DIR, { recursive: true });

// Map of URL substrings to output filenames
const ASSET_MAP = [
  { match: 'Untitled-1.png', name: 'logo.png' },
  { match: 'male-adulte-faisant-une-extraction', name: 'hero-procedure.webp' },
  { match: '13-scaled.jpg', name: 'before-after-1.jpg' },
  { match: '11-scaled.jpg', name: 'before-after-2.jpg' },
  { match: '/16.jpg', name: 'before-after-3.jpg' },
  { match: '7u.jpg', name: 'before-after-4.jpg' },
  { match: '/o.jpg', name: 'before-after-5.jpg' },
  { match: '/0.jpg', name: 'before-after-6.jpg' },
  { match: 'uj.jpg', name: 'before-after-7.jpg' },
  { match: 'Untitled-2.jpg', name: 'before-after-8.jpg' },
  { match: 'uij.jpg', name: 'before-after-9.jpg' },
  { match: 'Untitled-3.jpg', name: 'before-after-10.jpg' },
  { match: 'Untitled-4.jpg', name: 'before-after-11.jpg' },
  { match: '1-scaled-e1783786212896', name: 'before-after-12.jpg' },
  { match: 'Untitled-scaled.jpg', name: 'before-after-13.jpg' },
  { match: '/2-scaled.jpg', name: 'before-after-14.jpg' },
  { match: '9-scaled.jpg', name: 'before-after-15.jpg' },
  { match: '10-scaled.jpg', name: 'before-after-16.jpg' },
  { match: '18.jpg', name: 'before-after-17.jpg' },
  { match: '12-scaled.jpg', name: 'before-after-18.jpg' },
  { match: '14-scaled.jpg', name: 'before-after-19.jpg' },
  { match: '19.jpg', name: 'before-after-20.jpg' },
  { match: '15.jpg', name: 'before-after-21.jpg' },
  { match: '10148.webm', name: 'testimonial-video.webm' },
];

const captured = new Map();

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  // Set up response capture BEFORE navigation
  page.on('response', async (response) => {
    try {
      const url = response.url();
      const status = response.status();
      if (status !== 200) return;
      const contentType = response.headers()['content-type'] || '';
      // Only capture images and videos from wa-theq.com
      if (!url.includes('wa-theq.com/wp-content')) return;
      if (!contentType.match(/image\/|video\//)) return;

      for (const { match, name } of ASSET_MAP) {
        if (url.includes(match) && !captured.has(name)) {
          try {
            const buffer = await response.body();
            captured.set(name, buffer);
            console.log(`  ✓ Captured ${name} (${buffer.length} bytes) from ${url.substring(0, 80)}...`);
          } catch (e) {
            // body() may fail if response is from cache; skip silently
          }
          break;
        }
      }
    } catch (e) {}
  });

  console.log('→ Loading page to capture assets during load...');
  await page.goto('https://wa-theq.com/', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(5000);

  // Scroll through page to trigger lazy-loaded images
  console.log('→ Scrolling to trigger lazy loading...');
  for (let i = 0; i < 10; i++) {
    await page.evaluate(`window.scrollTo(0, document.body.scrollHeight * ${i / 10})`);
    await page.waitForTimeout(800);
  }
  await page.waitForTimeout(3000);

  // Some images may need explicit click on the gallery section
  console.log('→ Looking for gallery / before-after sections...');
  // Try to find and click on any "before-after" or gallery tabs
  const tabs = await page.$$('[role="tab"], .nav-link, button');
  console.log(`  Found ${tabs.length} clickable elements`);

  // Trigger the video to load
  const video = await page.$('video');
  if (video) {
    console.log('→ Found video element, triggering load...');
    await video.evaluate((v) => {
      v.preload = 'auto';
      v.load();
      v.play().catch(() => {});
    });
    await page.waitForTimeout(3000);
  }

  // Final wait for any pending requests
  await page.waitForTimeout(2000);

  // Save captured files
  console.log(`\n=== Saving ${captured.size} captured files ===`);
  for (const [name, buffer] of captured) {
    const outPath = path.join(OUT_DIR, name);
    fs.writeFileSync(outPath, buffer);
    console.log(`  ✓ ${name}: ${(buffer.length / 1024).toFixed(1)} KB`);
  }

  // Report missing
  console.log('\n=== Missing assets ===');
  for (const { name } of ASSET_MAP) {
    if (!captured.has(name)) {
      console.log(`  ✗ ${name}`);
    }
  }

  await browser.close();
})();
