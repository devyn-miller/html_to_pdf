const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const htmlPath = path.resolve(__dirname, 'your_html_file_name.html');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set a large viewport to avoid clipping
  await page.setViewport({ width: 1920, height: 1080 });

  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Evaluate full page height
  const bodyHeight = await page.evaluate(() => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  });

  // Export the entire content as a tall PDF
  await page.pdf({
    path: 'your_html_file_name.pdf',
    width: '1920px',
    height: `${bodyHeight}px`,
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  await browser.close();
})();