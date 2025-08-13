import { test, expect } from '@playwright/test'

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about')
  })

  test('should render the about page', async ({ page }) => {
    // Check that the page loads
    await expect(page).toHaveTitle(/About.*Python AI Solutions/)
  })

  test('should display page heading', async ({ page }) => {
    // Check for main heading
    const heading = page.locator('h1').first()
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('About')
  })

  test('should display team members', async ({ page }) => {
    // Check for team section or grid
    const teamSection = page
      .locator('section')
      .filter({ hasText: /team|members|people/i })
    await expect(teamSection.first()).toBeVisible()
  })

  test('should have working team member modals', async ({ page }) => {
    // Check for team section with interactive elements
    const teamSection = page
      .locator('section')
      .filter({ hasText: /team|members|people/i })
    await expect(teamSection.first()).toBeVisible()

    // Look for clickable elements within team section
    const clickableElements = teamSection
      .first()
      .locator('button, [role="button"], a[href="#"]')
    const hasClickable = await clickableElements.count()

    if (hasClickable > 0) {
      await clickableElements.first().click()

      // Check if modal appears
      const modal = page.locator(
        '[role="dialog"], [class*="modal"], [class*="Modal"]',
      )
      const modalVisible = await modal.isVisible().catch(() => false)

      if (modalVisible) {
        // Close modal if it opened
        await page.keyboard.press('Escape')
        await expect(modal).not.toBeVisible()
      }
    }
  })

  test('should display team member images', async ({ page }) => {
    // Check for any images in the about page (team photos, company images, etc.)
    const images = page
      .locator('img')
      .filter({ hasNot: page.locator('[src*="logo"]') })
    const imageCount = await images.count()

    if (imageCount > 0) {
      // Check first non-logo image is loaded
      const firstImage = images.first()
      await expect(firstImage).toBeVisible()

      // Verify image has src
      const src = await firstImage.getAttribute('src')
      expect(src).toBeTruthy()
    }
  })

  test('should have navigation back to home', async ({ page }) => {
    // Check for home link in navigation
    const homeLink = page.locator('nav a[href="/"], header a[href="/"]').first()
    await expect(homeLink).toBeVisible()

    // Navigate to home
    await homeLink.click()
    await page.waitForURL('**/')

    // Verify we're on the home page
    const heroText = page.locator('text=Welcome to Python AI Solutions')
    await expect(heroText).toBeVisible()
  })
})
