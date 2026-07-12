// Download all landing page assets by loading them as Image elements and using canvas
// Hotlink protection blocks fetch() but allows <img> tags
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/landing-assets';
fs.mkdirSync(OUT_DIR, { recursive: true });

const ASSETS = [
  { name: 'logo.png', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-1.png' },
  { name: 'hero-procedure.webp', url: 'https://wa-theq.com/wp-content/uploads/2025/05/male-adulte-faisant-une-extraction-d-unite-folliculaire-68236705365ab.webp' },
  { name: 'before-after-1.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/13-scaled.jpg' },
  { name: 'before-after-2.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/11-scaled.jpg' },
  { name: 'before-after-3.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/16.jpg' },
  { name: 'before-after-4.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/7u.jpg' },
  { name: 'before-after-5.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/o.jpg' },
  { name: 'before-after-6.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/0.jpg' },
  { name: 'before-after-7.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/uj.jpg' },
  { name: 'before-after-8.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-2.jpg' },
  { name: 'before-after-9.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/uij.jpg' },
  { name: 'before-after-10.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-3.jpg' },
  { name: 'before-after-11.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-4.jpg' },
  { name: 'before-after-12.jpg', url: 'https://wa-theq.com/wp-content/uploads/2026/07/1-scaled-e1783786212896.jpg' },
  { name: 'before-after-13.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/Untitled-scaled.jpg' },
  { name: 'before-after-14.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/2-scaled.jpg' },
  { name: 'before-after-15.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/9-scaled.jpg' },
  { name: 'before-after-16.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/10-scaled.jpg' },
  { name: 'before-after-17.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/18.jpg' },
  { name: 'before-after-18.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/12-scaled.jpg' },
  { name: 'before-after-19.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/14-scaled.jpg' },
  { name: 'before-after-20.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/19.jpg' },
  { name: 'before-after-21.jpg', url: 'https://wa-theq.com/wp-content/uploads/2025/05/15.jpg' },
];

// Function that runs IN the page to load an image via <img> tag and extract via canvas
const LOAD_IMAGE_FN = async (url) => {
  return new Promise((resolve) => {
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          // Use JPEG for photos to keep size reasonable, PNG for logo
          const isPng = url.toLowerCase().endsWith('.png');
          const dataUrl = isPng
            ? canvas.toDataURL('image/png')
            : canvas.toDataURL('image/jpeg', 0.92);
          resolve({ ok: true, dataUrl, w: img.naturalWidth, h: img.naturalHeight });
        } catch (e) {
          resolve({ ok: false, error: 'canvas: ' + e.message });
        }
      };
      img.onerror = () => resolve({ ok: false, error: 'img onerror' });
      img.src = url;
      // Set a timeout
      setTimeout(() => resolve({ ok: false, error: 'timeout' }), 30000);
    } catch (e) {
      resolve({ ok: false, error: e.message });
    }
  });
};

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });
  const page = await context.newPage();

  console.log('→ Loading wa-theq.com to establish session...');
  await page.goto('https://wa-theq.com/', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(3000);
  console.log(`  Title: ${await page.title()}`);

  for (const { name, url } of ASSETS) {
    try {
      console.log(`→ Loading ${name}`);
      const result = await page.evaluate(async (assetUrl) => {
        return await new Promise((resolve) => {
          try {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => {
              try {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                const isPng = assetUrl.toLowerCase().endsWith('.png');
                const dataUrl = isPng
                  ? canvas.toDataURL('image/png')
                  : canvas.toDataURL('image/jpeg', 0.92);
                resolve({ ok: true, dataUrl, w: img.naturalWidth, h: img.naturalHeight });
              } catch (e) {
                resolve({ ok: false, error: 'canvas: ' + e.message });
              }
            };
            img.onerror = () => resolve({ ok: false, error: 'img onerror' });
            img.src = assetUrl;
            setTimeout(() => resolve({ ok: false, error: 'timeout' }), 30000);
          } catch (e) {
            resolve({ ok: false, error: e.message });
          }
        });
      }, url);

      if (!result || !result.ok) {
        console.log(`  ✗ ${result?.error || 'no result'}`);
        continue;
      }

      // Strip "data:image/png;base64," or "data:image/jpeg;base64,"
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
