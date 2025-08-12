import React from 'react'
import { render, screen } from '@testing-library/react'
import { Border } from '@/components/Border'

describe('Border Component', () => {
  it('renders children correctly', () => {
    render(
      <Border>
        <div data-testid="border-content">Border Content</div>
      </Border>
    )
    expect(screen.getByTestId('border-content')).toBeInTheDocument()
    expect(screen.getByText('Border Content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(
      <Border className="custom-border">
        <div>Content</div>
      </Border>
    )
    const border = screen.getByText('Content').parentElement
    expect(border).toHaveClass('custom-border')
  })

  it('renders with default position (top)', () => {
    render(
      <Border>
        <div>Default Position</div>
      </Border>
    )
    const border = screen.getByText('Default Position').parentElement
    expect(border).toHaveClass('relative')
    expect(border).toHaveClass('before:absolute')
    expect(border).toHaveClass('after:absolute')
    expect(border).toHaveClass('before:top-0')
    expect(border).toHaveClass('before:left-0')
    expect(border).toHaveClass('before:h-px')
  })

  it('renders with left position', () => {
    render(
      <Border position="left">
        <div>Left Border</div>
      </Border>
    )
    const border = screen.getByText('Left Border').parentElement
    expect(border).toHaveClass('relative')
    expect(border).toHaveClass('before:absolute')
    expect(border).toHaveClass('before:top-0')
    expect(border).toHaveClass('before:left-0')
    expect(border).toHaveClass('before:h-6')
    expect(border).toHaveClass('before:w-px')
  })

  it('renders with top position explicitly', () => {
    render(
      <Border position="top">
        <div>Top Border</div>
      </Border>
    )
    const border = screen.getByText('Top Border').parentElement
    expect(border).toHaveClass('relative')
    expect(border).toHaveClass('before:absolute')
    expect(border).toHaveClass('after:absolute')
    expect(border).toHaveClass('before:h-px')
  })

  it('applies invert styles', () => {
    render(
      <Border invert>
        <div>Inverted Border</div>
      </Border>
    )
    const border = screen.getByText('Inverted Border').parentElement
    expect(border).toHaveClass('before:bg-white')
    expect(border).toHaveClass('after:bg-white/10')
  })

  it('renders as different HTML element', () => {
    const { rerender } = render(
      <Border as="section">
        <div>Section Border</div>
      </Border>
    )
    let border = screen.getByText('Section Border').parentElement
    expect(border?.tagName).toBe('SECTION')

    rerender(
      <Border as="article">
        <div>Article Border</div>
      </Border>
    )
    border = screen.getByText('Article Border').parentElement
    expect(border?.tagName).toBe('ARTICLE')
  })
})