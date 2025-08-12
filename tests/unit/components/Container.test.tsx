import React from 'react'
import { render, screen } from '@testing-library/react'
import { Container } from '@/components/Container'

describe('Container Component', () => {
  it('renders children correctly', () => {
    render(
      <Container>
        <div data-testid="child">Test Content</div>
      </Container>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Container className="custom-container">
        <div>Content</div>
      </Container>
    )
    // The outer container should have the custom class
    const outerContainer = screen.getByText('Content').parentElement?.parentElement
    expect(outerContainer).toHaveClass('custom-container')
  })

  it('renders as different HTML elements', () => {
    const { rerender } = render(
      <Container as="section">
        <div>Section Content</div>
      </Container>
    )
    let container = screen.getByText('Section Content').parentElement?.parentElement
    expect(container?.tagName).toBe('SECTION')

    rerender(
      <Container as="article">
        <div>Article Content</div>
      </Container>
    )
    container = screen.getByText('Article Content').parentElement?.parentElement
    expect(container?.tagName).toBe('ARTICLE')
  })

  it('applies default container styles', () => {
    render(
      <Container>
        <div>Styled Content</div>
      </Container>
    )
    const innerContainer = screen.getByText('Styled Content').parentElement
    expect(innerContainer).toHaveClass('mx-auto')
    expect(innerContainer).toHaveClass('max-w-2xl')
  })
})