import { test, expect } from '@playwright/test';

test('Search Samsung phone on Amazon and verify product details', async ({ page }) => {

  await page.goto('https://www.amazon.in', {
    waitUntil: 'domcontentloaded'
  });

  
  await page
    .getByPlaceholder('Search Amazon.in')
    .fill('Samsung S24');

  
  await page.keyboard.press('Enter');

  
  await page.waitForURL(/s/);


  await expect(
    page.locator('[data-component-type="s-search-result"]').first()
  ).toBeVisible();


  await expect(page.locator('body'))
    .toContainText(/Samsung/i);

});



test('Search iPhone on Amazon and verify search results', async ({ page }) => {

  
  await page.goto('https://www.amazon.in', {
    waitUntil: 'domcontentloaded'
  });

 
  await page
    .getByPlaceholder('Search Amazon.in')
    .fill('iPhone 15');

  
  await page.keyboard.press('Enter');

  
  await page.waitForURL(/s/);

  
  await expect(
    page.locator('[data-component-type="s-search-result"]').first()
  ).toBeVisible();


  await expect(page.locator('body'))
    .toContainText(/Apple|iPhone/i);

});



test('Verify Amazon title and search box visible', async ({ page }) => {

  
  await page.goto('https://www.amazon.in', {
    waitUntil: 'domcontentloaded'
  });

  
  await expect(page).toHaveTitle(/Amazon/);

  
  await expect(
    page.getByPlaceholder('Search Amazon.in')
  ).toBeVisible();

});



test('Search Laptop on Amazon and verify results', async ({ page }) => {

  
  await page.goto('https://www.amazon.in', {
    waitUntil: 'domcontentloaded'
  });

  
  await page
    .getByPlaceholder('Search Amazon.in')
    .fill('Laptop');

  
  await page.keyboard.press('Enter');

  
  await page.waitForURL(/s/);

  
  await expect(
    page.locator('[data-component-type="s-search-result"]').first()
  ).toBeVisible();

  await expect(page.locator('body'))
    .toContainText(/Laptop|computer/i);

});