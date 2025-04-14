import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
    test('should display the correct title', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Hueku/);
    });

    test('should display the main heading and description', async ({ page }) => {
        await page.goto('/');
        const heading = page.locator('h1');
        const description = page.locator('p');

        await expect(heading).toHaveText('Hueku');
        await expect(description).toHaveText(/The swiss knife of web development/);
    });
});
