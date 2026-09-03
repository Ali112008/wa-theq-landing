// Capture all before/after images by navigating through the gallery carousel
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/landing-assets';
fs.mkdirSync(OUT_DIR, { recursive: true });

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

  page.on('response', async (response) => {
    try {
      const url = response.url();
      const status = response.status();
      if (status !== 200) return;
      const contentType = response.headers()['content-type'] || '';
      if (!url.includes('wa-theq.com/wp-content')) return;
      if (!contentType.match(/image\/|video\//)) return;

      for (const { match, name } of ASSET_MAP) {
        if (url.includes(match) && !captured.has(name)) {
          try {
            const buffer = await response.body();
            captured.set(name, buffer);
            console.log(`  ✓ Captured ${name} (${(buffer.length / 1024).toFixed(1)} KB)`);
          } catch (e) {}
          break;
        }
      }
    } catch (e) {}
  });

  console.log('→ Loading page...');
  await page.goto('https://wa-theq.com/', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(4000);

  // Scroll to the before/after gallery section
  console.log('→ Scrolling to gallery...');
  const gallery = await page.$('.elementor-widget-cz');
  if (gallery) {
    await gallery.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
  }

  // Find all carousel navigation arrows and click through them
  console.log('→ Looking for carousel nav buttons...');
  const navButtons = await page.$$('.owl-next, .uc-nav-next, [class*="next"], .swiper-button-next');
  console.log(`  Found ${navButtons.length} next buttons`);

  // Try clicking each next button multiple times
  for (const btn of navButtons.slice(0, 5)) {
    for (let i = 0; i < 25; i++) {
      try {
        await btn.click({ timeout: 1000 });
        await page.waitForTimeout(400);
      } catch (e) {
        break;
      }
    }
  }

  // Also try to find any thumbnails/tabs in the gallery
  console.log('→ Looking for gallery tabs/thumbnails...');
  const tabs = await page.$$('.cz_gallery_thumb, .gallery-thumb, [class*="thumb"], [data-src]');
  console.log(`  Found ${tabs.length} thumb elements`);
  for (const tab of tabs.slice(0, 30)) {
    try {
      await tab.click({ timeout: 1000 });
      await page.waitForTimeout(300);
    } catch (e) {}
  }

  // Scroll the entire page to trigger any lazy loading
  console.log('→ Full page scroll...');
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i <= 20; i++) {
    await page.evaluate(`window.scrollTo(0, ${totalHeight * i / 20})`);
    await page.waitForTimeout(300);
  }

  // Try the testimonials carousel
  console.log('→ Triggering testimonials carousel...');
  const testimonialNext = await page.$$('.uc_content_carousel_new_elementor_bdb9b79 .owl-next, .testimonials .owl-next');
  for (const btn of testimonialNext.slice(0, 1)) {
    for (let i = 0; i < 15; i++) {
      try {
        await btn.click({ timeout: 1000 });
        await page.waitForTimeout(400);
      } catch (e) {
        break;
      }
    }
  }

  // Trigger video
  console.log('→ Triggering video...');
  const video = await page.$('video');
  if (video) {
    await video.evaluate((v) => {
      v.preload = 'auto';
      v.load();
      v.muted = true;
      v.play().catch(() => {});
    });
    await page.waitForTimeout(5000);
  }

  // Final wait
  await page.waitForTimeout(3000);

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
