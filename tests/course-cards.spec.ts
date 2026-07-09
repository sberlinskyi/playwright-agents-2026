// spec: tests/codemify-homepage.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Codemify Homepage', () => {
  test('Course cards and course section validation', async ({ page }) => {
    // 1. Verify the "Our courses" section is visible
    await page.goto('https://codemify.com/');
    const coursesHeading = page.getByRole('heading', { name: 'Our courses' });
    await expect(coursesHeading).toBeVisible();

    // 2. Check the Manual QA course card details
    const manualQaCard = page.getByText('Manual QA', { exact: true });
    await expect(manualQaCard).toBeVisible();
    await expect(page.getByText('2 months', { exact: true })).toBeVisible();
    await expect(page.getByText('Live webinars').first()).toBeVisible();
    await expect(page.getByText('Interview Prep').first()).toBeVisible();

    // 3. Check the Automation QA course card details
    const automationQaCard = page.getByText('Automation QA', { exact: true });
    await expect(automationQaCard).toBeVisible();
    await expect(page.getByText('3,5 months')).toBeVisible();
    await expect(page.getByText('86 rounds')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Learn more' }).nth(1)).toBeVisible();
  });
});