// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock Framer Motion using manual mock in __mocks__ folder
jest.mock('framer-motion')

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      pathname: '/',
      query: {},
      asPath: '/',
      route: '/',
    }
  },
  usePathname() {
    return '/'
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  useParams() {
    return {}
  },
}))

// Mock RootLayout component
jest.mock('@/components/RootLayout', () => ({
  RootLayout: ({ children }) => children,
}))

// Mock Offices component
jest.mock('@/components/Offices', () => ({
  Offices: () => null,
}))

// Mock SocialMedia component
jest.mock('@/components/SocialMedia', () => ({
  SocialMedia: () => null,
  socialMediaProfiles: [],
}))

// Mock submodule team data
jest.mock(
  '../../../submodules/the-team/resumes/json/john_lee.json',
  () => ({
    basics: { name: 'John Lee', label: 'Founder' },
  }),
  { virtual: true },
)

jest.mock(
  '../../../submodules/the-team/resumes/json/sumit_jha.json',
  () => ({
    basics: { name: 'Sumit Jha', label: 'Technical Lead' },
  }),
  { virtual: true },
)

jest.mock(
  '../../../submodules/the-team/resumes/json/abdul_qadeer.json',
  () => ({
    basics: { name: 'Abdul Qadeer', label: 'Developer' },
  }),
  { virtual: true },
)

jest.mock(
  '../../../submodules/the-team/resumes/json/aditya_patane.json',
  () => ({
    basics: { name: 'Aditya Patane', label: 'Developer' },
  }),
  { virtual: true },
)

jest.mock(
  '../../../submodules/the-team/resumes/json/heet_shah.json',
  () => ({
    basics: { name: 'Heet Shah', label: 'Developer' },
  }),
  { virtual: true },
)


// Mock submodule photo imports
jest.mock(
  '../../../submodules/the-team/public/photos/Aditya_Patane.png',
  () => 'test-photo.png',
  { virtual: true },
)
jest.mock(
  '../../../submodules/the-team/public/photos/Heet_Shah.jpg',
  () => 'test-photo.jpg',
  { virtual: true },
)
jest.mock(
  '../../../submodules/the-team/public/photos/Sumit_Jha.webp',
  () => 'test-photo.webp',
  { virtual: true },
)

// Mock getAssetPath function
jest.mock('@/lib/basePath', () => ({
  getAssetPath: (path) => path,
  basePath: '',
}))

// Mock Next.js Link component
jest.mock('next/link', () => {
  const React = require('react')
  const MockedLink = ({ children, href, ...props }) => {
    return React.createElement('a', { href, ...props }, children)
  }
  MockedLink.displayName = 'MockedLink'
  return MockedLink
})

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    const React = require('react')
    // eslint-disable-next-line jsx-a11y/alt-text
    return React.createElement('img', props)
  },
}))

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords() {
    return []
  }
}

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
