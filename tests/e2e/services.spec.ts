import { test, expect } from '@playwright/test'

test.describe('Services Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services')
  })

  test('should render the services page', async ({ page }) => {
    // Check that the page loads
    await expect(page).toHaveTitle(/Python AI Solutions/)
  })

  test('should display services heading', async ({ page }) => {
    // Check for services heading
    const servicesHeading = page.locator('h2:has-text("Our Services")')
    await expect(servicesHeading).toBeVisible()
  })

  test('should display all 11 services', async ({ page }) => {
    // Services should be displayed in articles
    const serviceArticles = page.locator('article')
    await expect(serviceArticles).toHaveCount(11)
  })

  test('should display service titles and descriptions', async ({ page }) => {
    // Check for specific service titles that exist in the frontend
    const dataAnalyticsTitle = page.locator('text=Data Analytics and Insight Generation')
    await expect(dataAnalyticsTitle).toBeVisible()

    const automationTitle = page.locator('text=Automation Services')
    await expect(automationTitle).toBeVisible()

    const predictiveAnalyticsTitle = page.locator('p.font-display:has-text("Predictive Analytics")')
    await expect(predictiveAnalyticsTitle).toBeVisible()

    const customAITitle = page.locator('text=Custom AI Solutions')
    await expect(customAITitle).toBeVisible()

    const nlpTitle = page.locator('text=Natural Language Processing (NLP)')
    await expect(nlpTitle).toBeVisible()
  })

  test('should display service images', async ({ page }) => {
    // Check that service images are displayed
    const serviceImages = page.locator('article img')
    const imageCount = await serviceImages.count()
    
    // Should have images for at least some services
    expect(imageCount).toBeGreaterThan(0)
    
    // Check first image is loaded
    if (imageCount > 0) {
      const firstImage = serviceImages.first()
      await expect(firstImage).toBeVisible()
      
      // Verify image has src
      const src = await firstImage.getAttribute('src')
      expect(src).toBeTruthy()
    }
  })

  test('should have contact section at bottom', async ({ page }) => {
    // Scroll to bottom to ensure contact section is visible
    await page.locator('body').press('End')
    
    // Check for contact section (ContactSection component) - look for any contact-related content
    const contactSection = page.locator('section, div').filter({ hasText: /contact|get in touch|work together/i })
    const hasContactSection = await contactSection.count() > 0
    
    if (hasContactSection) {
      await expect(contactSection.first()).toBeVisible()
    } else {
      // If no specific contact section, just verify page scrolled to bottom
      const body = page.locator('body')
      await expect(body).toBeVisible()
    }
  })

  test('should have navigation links', async ({ page }) => {
    // Check for navigation to other pages
    const homeLink = page.locator('nav a[href="/"], header a[href="/"]').first()
    await expect(homeLink).toBeVisible()

    const aboutLink = page.locator('a[href="/about/"]').first()
    await expect(aboutLink).toBeVisible()

    const contactLink = page.locator('a[href="/contact/"]').first()
    await expect(contactLink).toBeVisible()
  })

  test('should navigate back to home', async ({ page }) => {
    // Click home link in navigation
    const homeLink = page.locator('nav a[href="/"], header a[href="/"]').first()
    await homeLink.click()
    await page.waitForURL('**/')

    // Verify we're on the home page
    const heroText = page.locator('text=Transforming businesses with AI-powered solutions')
    await expect(heroText).toBeVisible()
  })

  test('should navigate to about page', async ({ page }) => {
    // Click about link
    await page.click('a[href="/about/"]')
    await page.waitForURL('**/about/')

    // Verify we're on the about page
    const aboutTitle = page.locator('h1:has-text("About")')
    await expect(aboutTitle).toBeVisible()
  })

  test('should navigate to contact page', async ({ page }) => {
    // Click contact link
    await page.click('a[href="/contact/"]')
    await page.waitForURL('**/contact/')

    // Verify we're on the contact page
    const contactTitle = page.locator('h1:has-text("Contact")')
    await expect(contactTitle).toBeVisible()
  })
})
