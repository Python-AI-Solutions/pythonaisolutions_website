import React from 'react'
import { render, screen } from '@testing-library/react'

describe('Simple Button Test', () => {
  it('renders a button element', () => {
    render(<button>Test Button</button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
  
  it('renders a link element', () => {
    render(<a href="/test">Test Link</a>)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})