import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should render the homepage', async ({ page }) => {
    // Check that the page loads
    await expect(page).toHaveTitle(/Python AI Solutions/)
  })

  test('should have a hero section', async ({ page }) => {
    // Check for hero content
    const heroText = page.locator('text=Transforming businesses with AI-powered solutions')
    await expect(heroText).toBeVisible()
  })

  test('should have navigation links', async ({ page }) => {
    // Check for navigation
    const aboutLink = page.locator('a[href="/about"]')
    await expect(aboutLink).toBeVisible()

    const contactLink = page.locator('a[href="/contact"]')
    await expect(contactLink).toBeVisible()
  })

  test('should navigate to about page', async ({ page }) => {
    // Click about link
    await page.click('a[href="/about"]')
    await page.waitForURL('**/about')

    // Verify we're on the about page
    const aboutTitle = page.locator('h1:has-text("About")')
    await expect(aboutTitle).toBeVisible()
  })

  test('should navigate to contact page', async ({ page }) => {
    // Click contact link
    await page.click('a[href="/contact"]')
    await page.waitForURL('**/contact')

    // Verify we're on the contact page
    const contactTitle = page.locator('h1:has-text("Contact")')
    await expect(contactTitle).toBeVisible()
  })
})
