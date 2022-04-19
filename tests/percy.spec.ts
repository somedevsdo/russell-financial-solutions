import percySnapshot from '@percy/playwright';
import test from '@playwright/test';

test('snapshot home page', async ({ page }) => {
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await percySnapshot(page, 'Example Site');
});
