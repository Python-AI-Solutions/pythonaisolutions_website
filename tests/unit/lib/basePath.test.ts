import { basePath } from '@/lib/basePath'

describe('basePath', () => {
  it('should be a string', () => {
    expect(typeof basePath).toBe('string')
  })

  it('should be an empty string by default', () => {
    expect(basePath).toBe('')
  })
})
