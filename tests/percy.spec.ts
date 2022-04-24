import percySnapshot from '@percy/playwright';
import test from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('snapshot home page', async ({ page }) => {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // stop animations from providing flaky results
  page.addStyleTag({ content: '* { animation-duration: 1ms !important }' });

  // accessibility check
  await injectAxe(page);
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true },
    axeOptions: undefined,
  });

  await percySnapshot(page, 'Example Site');
});
