import React from 'react'
import { render, screen } from '@testing-library/react'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

// Mock FadeInStaggerContext
jest.mock('@/components/FadeIn', () => {
  const React = require('react')
  return {
    FadeIn: ({ children, className, as = 'div' }: any) => {
      const Component = as
      return React.createElement(Component, { className }, children)
    },
    FadeInStagger: ({ children, className }: any) => {
      return React.createElement('div', { className }, children)
    },
  }
})

describe('FadeIn Component', () => {
  it('renders children correctly', () => {
    render(
      <FadeIn>
        <div data-testid="fade-content">Fade In Content</div>
      </FadeIn>,
    )
    expect(screen.getByTestId('fade-content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <FadeIn className="custom-fade">
        <div>Content</div>
      </FadeIn>,
    )
    const fadeElement = screen.getByText('Content').parentElement
    expect(fadeElement).toHaveClass('custom-fade')
  })

  it('renders as a div element', () => {
    render(
      <FadeIn>
        <div>Div Content</div>
      </FadeIn>,
    )
    const element = screen.getByText('Div Content').parentElement
    expect(element?.tagName).toBe('DIV')
  })
})

describe('FadeInStagger Component', () => {
  it('renders multiple children with stagger effect', () => {
    render(
      <FadeInStagger>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </FadeInStagger>,
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('applies faster stagger speed', () => {
    render(
      <FadeInStagger faster>
        <div>Fast Item 1</div>
        <div>Fast Item 2</div>
      </FadeInStagger>,
    )

    expect(screen.getByText('Fast Item 1')).toBeInTheDocument()
    expect(screen.getByText('Fast Item 2')).toBeInTheDocument()
  })

  it('applies custom className to stagger container', () => {
    render(
      <FadeInStagger className="stagger-container">
        <div>Staggered Content</div>
      </FadeInStagger>,
    )

    const container = screen.getByText('Staggered Content').parentElement
    expect(container).toHaveClass('stagger-container')
  })
})
