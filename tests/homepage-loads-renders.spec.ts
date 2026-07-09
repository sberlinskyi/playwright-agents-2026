// spec: tests/codemify-homepage.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Codemify Homepage', () => {
  test('Homepage loads and renders successfully', async ({ page }) => {
    // 1. Navigate to https://codemify.com/
    await page.goto('https://codemify.com/');

    // 2. Wait for the main hero content to appear
    const heroHeading = page.getByText('START A NEW CAREER IN TECH');
    await expect(heroHeading).toBeVisible();

    const qaHeading = page.getByRole('heading', { name: 'What is QA?' });
    await expect(qaHeading).toBeVisible();

    const coursesHeading = page.getByRole('heading', { name: 'Our courses' });
    await expect(coursesHeading).toBeVisible();

    const valuePropHeading = page.getByRole('heading', { name: 'Why are we the best in QA' });
    await expect(valuePropHeading).toBeVisible();
  });
});