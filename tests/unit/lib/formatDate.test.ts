import { formatDate } from '@/lib/formatDate'

describe('formatDate', () => {
  it('formats date with day, month, and year', () => {
    const result = formatDate('2024-01-15')
    expect(result).toBe('January 15, 2024')
  })

  it('formats date with only month and year', () => {
    const result = formatDate('2024-01')
    expect(result).toBe('January 2024')
  })

  it('formats date at end of month', () => {
    const result = formatDate('2024-12-31')
    expect(result).toBe('December 31, 2024')
  })

  it('formats date at beginning of month', () => {
    const result = formatDate('2024-03-01')
    expect(result).toBe('March 1, 2024')
  })

  it('handles different years', () => {
    expect(formatDate('2023-06-15')).toBe('June 15, 2023')
    expect(formatDate('2025-09-20')).toBe('September 20, 2025')
  })

  it('handles all months correctly', () => {
    expect(formatDate('2024-01-15')).toBe('January 15, 2024')
    expect(formatDate('2024-02-15')).toBe('February 15, 2024')
    expect(formatDate('2024-03-15')).toBe('March 15, 2024')
    expect(formatDate('2024-04-15')).toBe('April 15, 2024')
    expect(formatDate('2024-05-15')).toBe('May 15, 2024')
    expect(formatDate('2024-06-15')).toBe('June 15, 2024')
    expect(formatDate('2024-07-15')).toBe('July 15, 2024')
    expect(formatDate('2024-08-15')).toBe('August 15, 2024')
    expect(formatDate('2024-09-15')).toBe('September 15, 2024')
    expect(formatDate('2024-10-15')).toBe('October 15, 2024')
    expect(formatDate('2024-11-15')).toBe('November 15, 2024')
    expect(formatDate('2024-12-15')).toBe('December 15, 2024')
  })
})