// Extract all loaded images from the agent-browser page via canvas
// Since the page is loaded from wa-theq.com and images are from wa-theq.com, no CORS tainting
// Run with: node scripts/extract-images.mjs
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/landing-assets';
fs.mkdirSync(OUT_DIR, { recursive: true });

const ASSETS = [
  { name: 'logo.png', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-1.png', type: 'png' },
  { name: 'hero-procedure.webp', url: 'https://wa-theq.com/wp-content/uploads/2025/05/male-adulte-faisant-une-extraction-d-unite-folliculaire-68236705365ab.webp', type: 'webp' },
  { name: 'before-after-1.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/13-scaled.jpg', type: 'jpg' },
  { name: 'before-after-2.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/11-scaled.jpg', type: 'jpg' },
  { name: 'before-after-3.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/16.jpg', type: 'jpg' },
  { name: 'before-after-4.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/7u.jpg', type: 'jpg' },
  { name: 'before-after-5.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/o.jpg', type: 'jpg' },
  { name: 'before-after-6.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/0.jpg', type: 'jpg' },
  { name: 'before-after-7.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/uj.jpg', type: 'jpg' },
  { name: 'before-after-8.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-2.jpg', type: 'jpg' },
  { name: 'before-after-9.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/uij.jpg', type: 'jpg' },
  { name: 'before-after-10.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-3.jpg', type: 'jpg' },
  { name: 'before-after-11.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-4.jpg', type: 'jpg' },
  { name: 'before-after-12.jpg', url: 'https://wa-theq.com/wp-content/uploads/2026/07/1-scaled-e1783786212896.jpg', type: 'jpg' },
  { name: 'before-after-13.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-scaled.jpg', type: 'jpg' },
  { name: 'before-after-14.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/2-scaled.jpg', type: 'jpg' },
  { name: 'before-after-15.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/9-scaled.jpg', type: 'jpg' },
  { name: 'before-after-16.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/10-scaled.jpg', type: 'jpg' },
  { name: 'before-after-17.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/18.jpg', type: 'jpg' },
  { name: 'before-after-18.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/12-scaled.jpg', type: 'jpg' },
  { name: 'before-after-19.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/14-scaled.jpg', type: 'jpg' },
  { name: 'before-after-20.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/19.jpg', type: 'jpg' },
  { name: 'before-after-21.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/15.jpg', type: 'jpg' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  console.log('→ Loading wa-theq.com...');
  await page.goto('https://wa-theq.com/', { waitUntil: 'networkidle', timeout: 90000 });
  // Wait extra for JS challenge to fully resolve
  await page.waitForTimeout(8000);
  const title = await page.title();
  console.log(`  Title: ${title}`);

  if (title.includes('Checking your browser')) {
    console.log('  ⚠ JS challenge not solved yet, waiting longer...');
    await page.waitForTimeout(10000);
  }

  // Scroll through page to trigger all image loads
  console.log('→ Scrolling to load all images...');
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let i = 0; i <= 25; i++) {
    await page.evaluate(`window.scrollTo(0, ${totalHeight * i / 25})`);
    await page.waitForTimeout(200);
  }
  await page.waitForTimeout(2000);

  // Now extract each image via canvas
  for (const { name, url, type } of ASSETS) {
    try {
      console.log(`→ Extracting ${name}`);
      const result = await page.evaluate((assetUrl) => {
        return new Promise((resolve) => {
          // Find any img element with this src
          const imgs = Array.from(document.querySelectorAll('img'));
          const img = imgs.find((i) => i.src === assetUrl && i.complete && i.naturalWidth > 0);
          if (!img) {
            resolve({ ok: false, error: 'img not found in DOM' });
            return;
          }
          try {
            const canvas = document.createElement('canvas');
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            // Determine format from URL
            const isPng = assetUrl.toLowerCase().endsWith('.png');
            const isWebp = assetUrl.toLowerCase().endsWith('.webp');
            let mime = 'image/jpeg';
            let q = 0.92;
            if (isPng) { mime = 'image/png'; q = undefined; }
            if (isWebp) { mime = 'image/webp'; q = 0.92; }
            const dataUrl = q === undefined ? canvas.toDataURL(mime) : canvas.toDataURL(mime, q);
            resolve({ ok: true, dataUrl, w: img.naturalWidth, h: img.naturalHeight });
          } catch (e) {
            resolve({ ok: false, error: 'canvas: ' + e.message });
          }
        });
      }, url);

      if (!result || !result.ok) {
        console.log(`  ✗ ${result?.error || 'no result'}`);
        continue;
      }

      const base64 = result.dataUrl.split(',')[1];
      const buffer = Buffer.from(base64, 'base64');
      const outPath = path.join(OUT_DIR, name);
      fs.writeFileSync(outPath, buffer);
      console.log(`  ✓ Saved ${buffer.length} bytes (${result.w}x${result.h})`);
    } catch (e) {
      console.log(`  ✗ Error: ${e.message}`);
    }
  }

  await browser.close();

  console.log('\n=== Final listing ===');
  const files = fs.readdirSync(OUT_DIR).sort();
  for (const f of files) {
    const stat = fs.statSync(path.join(OUT_DIR, f));
    console.log(`  ${f}: ${(stat.size / 1024).toFixed(1)} KB`);
  }
})();
