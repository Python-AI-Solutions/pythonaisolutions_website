/**
 * Simple test to catch missing Image props - no mocks, just data validation
 */
import { testimonials } from '@/data/testimonials'

describe('Image Props Validation', () => {
  test('all testimonials should have valid logo paths', () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.logo).toBeTruthy()

      // Logo can be either a string path or an imported SVG object
      const isString = typeof testimonial.logo === 'string'
      const isObject =
        typeof testimonial.logo === 'object' && testimonial.logo !== null

      expect(isString || isObject).toBe(true)

      // If it's a string, should be a valid path (starts with / or http)
      if (isString) {
        const isValidPath =
          (testimonial.logo as string).startsWith('/') ||
          (testimonial.logo as string).startsWith('http')
        expect(isValidPath).toBe(true)
      }
    })
  })

  test('should have proper client names for alt text', () => {
    testimonials.forEach((testimonial) => {
      expect(testimonial.client).toBeTruthy()
      expect(typeof testimonial.client).toBe('string')
      expect(testimonial.client.length).toBeGreaterThan(0)
    })
  })

  test('should not have undefined or null logos that would break Image components', () => {
    const invalidLogos = testimonials.filter(
      (t) =>
        !t.logo || t.logo === '' || t.logo === null || t.logo === undefined,
    )
    expect(invalidLogos).toHaveLength(0)
  })
})
