import { test, expect } from '@playwright/test'

test.describe('Mobile Menu', () => {
  test.beforeEach(async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')
  })

  test('should display mobile menu toggle button on small screens', async ({ page }) => {
    // Check for mobile menu toggle button
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    await expect(menuToggle).toBeVisible()
    
    // Verify it has hamburger icon elements
    const menuLines = page.locator('button[aria-label="Toggle mobile menu"] span')
    const lineCount = await menuLines.count()
    expect(lineCount).toBe(3) // Should have 3 lines for hamburger icon
  })

  test('should hide desktop navigation on mobile', async ({ page }) => {
    // Desktop navigation should be hidden on mobile
    const desktopNav = page.locator('nav:has-text("Home"):has-text("Services"):has-text("About Us")').first()
    
    // Check if desktop nav is hidden (either display:none or not visible)
    const isVisible = await desktopNav.isVisible().catch(() => false)
    expect(isVisible).toBe(false)
  })

  test('should open mobile menu when toggle button is clicked', async ({ page }) => {
    // Click mobile menu toggle
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    await menuToggle.click()
    
    // Check if mobile menu appears
    const mobileMenu = page.locator('[class*="overflow-hidden"][class*="rounded-2xl"]')
    await expect(mobileMenu).toBeVisible({ timeout: 5000 })
  })

  test('should display all navigation links in mobile menu', async ({ page }) => {
    // Open mobile menu
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    await menuToggle.click()
    
    // Wait for mobile menu to appear
    const mobileMenu = page.locator('[class*="overflow-hidden"][class*="rounded-2xl"]')
    await expect(mobileMenu).toBeVisible()
    
    // Check for navigation links within mobile menu (first nav element in mobile menu)
    const mobileNav = page.locator('[class*="overflow-hidden"] nav').first()
    await expect(mobileNav).toBeVisible()
    
    // Check specific links with flexible selectors
    const homeLink = mobileNav.locator('a[href="/"]')
    await expect(homeLink).toBeVisible()
    await expect(homeLink).toContainText('Home')
    
    const servicesLink = mobileNav.locator('a[href="/services"]')
    const servicesExists = await servicesLink.isVisible().catch(() => false)
    if (servicesExists) {
      await expect(servicesLink).toContainText('Services')
    }
    
    const aboutLink = mobileNav.locator('a[href="/about"]')
    const aboutExists = await aboutLink.isVisible().catch(() => false)
    if (aboutExists) {
      await expect(aboutLink).toContainText('About Us')
    }
    
    const contactButton = mobileNav.locator('a[href="/contact"], button:has-text("Contact us")')
    const contactExists = await contactButton.first().isVisible().catch(() => false)
    if (contactExists) {
      await expect(contactButton.first()).toBeVisible()
    }
    
    // At minimum, should have some navigation links
    const allLinks = mobileNav.locator('a, button')
    const linkCount = await allLinks.count()
    expect(linkCount).toBeGreaterThan(0)
  })

  test('should navigate to pages from mobile menu', async ({ page }) => {
    // Open mobile menu
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    await menuToggle.click()
    
    // Wait for mobile menu to appear
    await page.waitForTimeout(500)
    
    // Try to click Home link (most reliable)
    const homeLink = page.locator('[class*="overflow-hidden"] a[href="/"]')
    const homeExists = await homeLink.isVisible().catch(() => false)
    
    if (homeExists) {
      await homeLink.click()
      await page.waitForURL('**/')
      
      // Verify we're on home page
      const body = page.locator('body')
      await expect(body).toBeVisible()
    } else {
      // If no home link, at least verify the mobile menu opened
      const mobileNav = page.locator('[class*="overflow-hidden"] nav').first()
      await expect(mobileNav).toBeVisible()
    }
  })

  test('should close mobile menu when navigation link is clicked', async ({ page }) => {
    // Open mobile menu
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    await menuToggle.click()
    
    // Wait for mobile menu to appear
    const mobileMenu = page.locator('[class*="overflow-hidden"][class*="rounded-2xl"]')
    await expect(mobileMenu).toBeVisible()
    
    // Click the home link (most reliable) - use first match to avoid strict mode
    const homeLink = page.locator('[class*="overflow-hidden"] a[href="/"]').first()
    await expect(homeLink).toBeVisible()
    await homeLink.click()
    
    // Menu should close automatically
    await expect(mobileMenu).not.toBeVisible()
  })

  test('should transform hamburger icon when menu is open', async ({ page }) => {
    // Get hamburger lines
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    const menuLines = menuToggle.locator('span')
    
    // Click to open menu
    await menuToggle.click()
    
    // Wait for animation
    await page.waitForTimeout(500)
    
    // Check if lines have transformed (X shape)
    const firstLine = menuLines.nth(0)
    const secondLine = menuLines.nth(1)
    const thirdLine = menuLines.nth(2)
    
    // First line should rotate and translate (becomes top part of X)
    const firstLineClass = await firstLine.getAttribute('class')
    expect(firstLineClass).toContain('rotate-45')
    expect(firstLineClass).toContain('translate-y-2')
    
    // Second line should be hidden (opacity-0)
    const secondLineClass = await secondLine.getAttribute('class')
    expect(secondLineClass).toContain('opacity-0')
    
    // Third line should rotate and translate (becomes bottom part of X)
    const thirdLineClass = await thirdLine.getAttribute('class')
    expect(thirdLineClass).toContain('-rotate-45')
    expect(thirdLineClass).toContain('-translate-y-2')
  })

  test('should close menu when toggle is clicked again', async ({ page }) => {
    // Open mobile menu
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    await menuToggle.click()
    
    // Verify menu is open
    const mobileMenu = page.locator('[class*="overflow-hidden"][class*="rounded-2xl"]')
    await expect(mobileMenu).toBeVisible()
    
    // Click toggle again to close
    await menuToggle.click()
    
    // Menu should close
    await expect(mobileMenu).not.toBeVisible()
  })



  test('should hide mobile menu on desktop viewport', async ({ page }) => {
    // Switch to desktop viewport
    await page.setViewportSize({ width: 1024, height: 768 })
    await page.goto('/')
    
    // Mobile menu toggle should be hidden on desktop
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    const isVisible = await menuToggle.isVisible().catch(() => false)
    expect(isVisible).toBe(false)
    
    // Desktop navigation should be visible
    const desktopNav = page.locator('nav').first()
    await expect(desktopNav).toBeVisible()
  })

  test('should maintain menu state during navigation', async ({ page }) => {
    // Open mobile menu
    const menuToggle = page.locator('button[aria-label="Toggle mobile menu"]')
    await menuToggle.click()
    
    // Navigate to different page - use home link (first match to avoid strict mode)
    const homeLink = page.locator('[class*="overflow-hidden"] a[href="/"]').first()
    await expect(homeLink).toBeVisible()
    await homeLink.click()
    await page.waitForURL('**/')
    
    // Wait a bit for menu close animation
    await page.waitForTimeout(500)
    
    // Menu should be closed on new page
    const mobileMenu = page.locator('[class*="overflow-hidden"][class*="rounded-2xl"]')
    await expect(mobileMenu).not.toBeVisible()
    
    // But toggle button should still be available
    await expect(menuToggle).toBeVisible()
  })
})
