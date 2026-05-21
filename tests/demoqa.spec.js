import { test, expect } from '@playwright/test';

test('Fill DemoQA Practice Form', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form', {
    waitUntil: 'domcontentloaded'
  });

  await page
    .getByPlaceholder('First Name')
    .pressSequentially('Shubham', { delay: 150 });

  await page
    .getByPlaceholder('Last Name')
    .pressSequentially('Maheshwari', { delay: 150 });

  await page
    .getByPlaceholder('name@example.com')
    .pressSequentially('shubham@test.com', { delay: 150 });

  await page
    .locator('label[for="gender-radio-1"]')
    .click();

  await page
    .getByPlaceholder('Mobile Number')
    .pressSequentially('9876543210', { delay: 150 });

  await page.locator('#dateOfBirthInput')
    .click();

  await page.locator('.react-datepicker__month-select')
    .selectOption('May');

  await page.locator('.react-datepicker__year-select')
    .selectOption('1999');

  await page.locator('.react-datepicker__day--015')
    .first()
    .click();

  await page.locator('#subjectsInput')
    .click();

  await page.locator('#subjectsInput')
    .pressSequentially('Maths', { delay: 150 });

  await page.waitForTimeout(1000);

  await page.locator('label[for="hobbies-checkbox-1"]')
    .click({ force: true });

  await page.locator('#currentAddress')
    .pressSequentially('Noida Uttar Pradesh', { delay: 150 });

  await page.locator('#state')
    .click();

  await page.getByText('NCR')
    .click();

  await page.locator('#city')
    .click();

  await page.getByText('Delhi')
    .click();

  await page
    .getByRole('button', { name: 'Submit' })
    .click();

  await expect(
    page.getByText('Thanks for submitting the form')
  ).toBeVisible();

});