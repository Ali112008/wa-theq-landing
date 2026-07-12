import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  let imageCount = 0;
  page.on('response', async (response) => {
    const ct = response.headers()['content-type'] || '';
    if (ct.match(/image\//) && response.url().includes('wa-theq.com')) {
      imageCount++;
      if (imageCount <= 30) console.log(`  [${imageCount}] ${response.status()} ${ct} ${response.url().substring(0, 100)}`);
    }
  });
  
  console.log('Loading page...');
  await page.goto('https://wa-theq.com/', { waitUntil: 'networkidle', timeout: 90000 });
  await page.waitForTimeout(5000);
  console.log(`Total images: ${imageCount}`);
  await browser.close();
})();
