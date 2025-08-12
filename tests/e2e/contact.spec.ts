import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('should render the contact page', async ({ page }) => {
    // Check that the page loads
    await expect(page).toHaveTitle(/Contact.*Python AI Solutions/);
  });

  test('should display contact heading', async ({ page }) => {
    // Check for main heading
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('Contact');
  });

  test('should display contact form', async ({ page }) => {
    // Check for form elements
    const form = page.locator('form');
    await expect(form).toBeVisible();
    
    // Check for name field
    const nameField = page.locator('input[name="name"], input[placeholder*="name" i]');
    await expect(nameField).toBeVisible();
    
    // Check for email field
    const emailField = page.locator('input[name="email"], input[type="email"]');
    await expect(emailField).toBeVisible();
    
    // Check for message field
    const messageField = page.locator('textarea[name="message"], textarea[placeholder*="message" i]');
    await expect(messageField).toBeVisible();
    
    // Check for submit button
    const submitButton = page.locator('button[type="submit"], button:has-text("Send"), button:has-text("Submit")');
    await expect(submitButton).toBeVisible();
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit empty form - use first submit button found
    const submitButton = page.locator('button[type="submit"]').first();
    await submitButton.click();
    
    // Check for validation messages or that form wasn't submitted
    // This depends on your validation implementation
    const nameField = page.locator('input[name="name"], input[placeholder*="name" i]');
    const isRequired = await nameField.getAttribute('required');
    expect(isRequired).not.toBeNull();
  });

  test('should fill and submit contact form', async ({ page }) => {
    // Fill form fields
    await page.fill('input[name="name"], input[placeholder*="name" i]', 'Test User');
    await page.fill('input[name="email"], input[type="email"]', 'test@example.com');
    await page.fill('textarea[name="message"], textarea[placeholder*="message" i]', 'This is a test message');
    
    // Submit form - use first submit button
    const submitButton = page.locator('button[type="submit"]').first();
    await submitButton.click();
    
    // Check for success message or redirect
    // This depends on your form submission handling
    await page.waitForTimeout(1000); // Brief wait for form processing
  });

  test('should have navigation links', async ({ page }) => {
    // Check for home link in navigation
    const homeLink = page.locator('nav a[href="/"], header a[href="/"]').first();
    await expect(homeLink).toBeVisible();
    
    // Check for about link
    const aboutLink = page.locator('a[href="/about"]').first();
    await expect(aboutLink).toBeVisible();
  });

  test('should navigate back to home', async ({ page }) => {
    // Click home link in navigation
    const homeLink = page.locator('nav a[href="/"], header a[href="/"]').first();
    await homeLink.click();
    await page.waitForURL('**/');
    
    // Verify we're on the home page
    const heroText = page.locator('text=Welcome to Python AI Solutions');
    await expect(heroText).toBeVisible();
  });
});