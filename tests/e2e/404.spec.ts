import { test, expect } from '@playwright/test'

test.describe('404 Not Found Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to a non-existent page to trigger 404
    await page.goto('/non-existent-page', { waitUntil: 'networkidle' })
  })

  test('should render 404 page', async ({ page }) => {
    // Check that the page loads with proper title
    await expect(page).toHaveTitle(/Python AI Solutions/)
  })

  test('should display 404 heading', async ({ page }) => {
    // Check for "404" heading
    const heading404 = page.locator('text=404')
    await expect(heading404).toBeVisible()
    
    // Verify it's styled as a large heading
    const headingElement = page.locator('p:has-text("404")')
    await expect(headingElement).toBeVisible()
  })

  test('should display "Page not found" message', async ({ page }) => {
    // Check for "Page not found" heading
    const pageNotFoundHeading = page.locator('h1:has-text("Page not found")')
    await expect(pageNotFoundHeading).toBeVisible()
  })

  test('should display error description', async ({ page }) => {
    // Check for error description - use more flexible selector
    const errorDescription = page.locator('p:has-text("Sorry")')
    await expect(errorDescription).toBeVisible()
  })

  test('should have "Go to the home page" link', async ({ page }) => {
    // Check for home page link
    const homeLink = page.locator('a:has-text("Go to the home page")')
    await expect(homeLink).toBeVisible()
    
    // Verify it has proper href
    const href = await homeLink.getAttribute('href')
    expect(href).toBe('/')
  })

  test('should navigate back to home page', async ({ page }) => {
    // Click "Go to the home page" link
    const homeLink = page.locator('a:has-text("Go to the home page")')
    await homeLink.click()
    
    await page.waitForURL('**/')
    
    // Verify we're on the home page - look for hero text in main content (not route announcer)
    const heroText = page.locator('main').locator('text=Transforming businesses with').first()
    await expect(heroText).toBeVisible({ timeout: 10000 })
    
    // Additional verification - check page URL is correct
    expect(page.url()).toMatch(/\/$|\/$/)
  })

  test('should display 404 content in centered layout', async ({ page }) => {
    // Check that content is in a centered container
    const container = page.locator('[class*="items-center"][class*="text-center"]').first()
    await expect(container).toBeVisible()
    
    // Verify content is within the container
    const heading404 = container.locator('text=404')
    await expect(heading404).toBeVisible()
  })

  test('should handle different invalid routes', async ({ page }) => {
    // Test another invalid route
    await page.goto('/another-invalid-page')
    
    // Should still show 404 page
    const heading404 = page.locator('text=404')
    await expect(heading404).toBeVisible()
    
    const pageNotFoundHeading = page.locator('h1:has-text("Page not found")')
    await expect(pageNotFoundHeading).toBeVisible()
  })
})
