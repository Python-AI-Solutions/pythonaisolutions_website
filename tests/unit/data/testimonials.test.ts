import { testimonials } from '@/data/testimonials'

describe('Testimonials Data', () => {
  test('should be importable and have valid structure', () => {
    expect(testimonials).toBeDefined()
    expect(Array.isArray(testimonials)).toBe(true)
    expect(testimonials.length).toBeGreaterThan(0)
  })

  test('should have required fields for each testimonial', () => {
    testimonials.forEach((testimonial) => {
      // Basic required fields
      expect(testimonial.client).toBeTruthy()
      expect(testimonial.logo).toBeTruthy()
      expect(testimonial.year).toBeTruthy()

      // Testimonial content
      expect(testimonial.testimonial?.content).toBeTruthy()
      expect(testimonial.testimonial?.author?.name).toBeTruthy()
      expect(testimonial.testimonial?.author?.role).toBeTruthy()

      // Detailed report structure
      expect(testimonial.detailedReport?.summary).toBeTruthy()
      expect(Array.isArray(testimonial.detailedReport?.achievements)).toBe(true)
      expect(Array.isArray(testimonial.detailedReport?.impact)).toBe(true)
      expect(testimonial.detailedReport?.fullTestimonial).toBeTruthy()
    })
  })

  test('should have unique client names', () => {
    const clientNames = testimonials.map((t) => t.client)
    const uniqueClientNames = [...new Set(clientNames)]
    expect(clientNames.length).toBe(uniqueClientNames.length)
  })

  test('should have valid impact structure', () => {
    testimonials.forEach((testimonial) => {
      testimonial.detailedReport.impact.forEach((impact) => {
        expect(impact.value).toBeTruthy()
        expect(impact.label).toBeTruthy()
      })
    })
  })
})
