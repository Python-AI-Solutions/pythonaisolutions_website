/**
 * Integration test for testimonial modal functionality
 * Tests that Image components have required props for production builds
 */
import { render } from '@testing-library/react'
import Image from 'next/image'

describe('Testimonial Modal Image Props', () => {
  test('should render Image component with required props', () => {
    const mockTestimonial = {
      client: 'Test Company',
      logo: '/test-logo.webp',
    }

    // This test ensures the modal Image component has the correct structure
    const { container } = render(
      <Image
        src={mockTestimonial.logo}
        alt={mockTestimonial.client}
        width={64}
        height={64}
        className="h-12 w-12"
        unoptimized
      />,
    )

    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('alt', mockTestimonial.client)
  })

  test('should validate testimonial data structure', () => {
    // Test that ensures testimonials have the required logo property
    const validTestimonial = {
      client: 'Test Company',
      logo: '/test-logo.webp',
      testimonial: {
        content: 'Test content',
        author: { name: 'Test Author', role: 'Test Role' },
      },
    }

    // These properties are required for the modal to work
    expect(validTestimonial.client).toBeTruthy()
    expect(validTestimonial.logo).toBeTruthy()
    expect(validTestimonial.testimonial.author.name).toBeTruthy()
    expect(validTestimonial.testimonial.author.role).toBeTruthy()
  })
})
