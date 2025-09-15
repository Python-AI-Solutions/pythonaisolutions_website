# CLAUDE.md - AI Assistant Instructions

This file contains specific instructions for AI assistants (like Claude) when working with the Python AI Solutions website codebase.

## Project Overview

This is a Next.js 14 website for Python AI Solutions, showcasing AI services and expertise. The site uses TypeScript, Tailwind CSS, and Framer Motion for a modern, responsive user experience.

## Key Technologies

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **MDX** for blog content
- **WebP** images for optimization

## Development Guidelines

### Code Style

- Use TypeScript strict mode
- Follow existing component patterns
- Maintain consistent Tailwind CSS utility usage
- Keep components modular and reusable
- Use semantic HTML elements

### File Organization

- Components go in `src/components/`
- Pages use Next.js app directory structure
- Images should be in WebP format when possible
- Utility functions go in `src/lib/`
- Keep scripts in `scripts/` directory

### Testing & Quality

- Run `npm run lint` before committing changes
- Run `npm run build` to ensure no build errors
- Test responsive design at key breakpoints
- Verify animations work smoothly

## Common Tasks

### Adding a New Page

1. Create a new directory in `src/app/`
2. Add `page.tsx` for the page content
3. Use existing layout patterns
4. Update navigation if needed
5. Add corresponding tests in `__tests__/pages/`

### Adding a Blog Post

1. Create MDX file in `src/app/blog/`
2. Include proper metadata
3. Use existing blog post structure
4. Optimize images to WebP format

### Modifying Components

1. Check existing component patterns first
2. Maintain TypeScript types
3. Keep styling consistent with Tailwind utilities
4. Test component in different contexts
5. Update or add tests in `__tests__/components/`

### Writing Tests

**Philosophy: Test the Real System, Not Mocks**

1. **Prefer integration over unit tests** - Test actual components and data flow
2. **Minimize mocking** - Only mock external APIs, not internal components
3. **Test functionality, not content** - Avoid brittle tests that break on text changes
4. **Use real data structures** - Import and validate actual testimonials, team data, etc.
5. **Include server startup tests** - Catch runtime errors that mocks miss
6. **Focus on user-facing bugs** - Missing props, broken links, data validation

**Structure:**

- Unit tests: `tests/unit/` - Data validation, component props, utilities
- Integration tests: `tests/integration/` - Server startup, real component rendering
- E2E tests: `tests/e2e/` - Full user workflows with Playwright

**Anti-patterns to avoid:**

- Testing exact text content (fragile, high maintenance)
- Mocking everything (misses real integration issues)
- Complex test setup that doesn't match production
- Tests that pass but app is broken

Run `npm run test:unit` for fast feedback, `npm run test:integration` to catch real bugs.

## Performance Considerations

- Use Next.js Image component for all images
- Implement lazy loading where appropriate
- Keep bundle size minimal
- Use dynamic imports for heavy components
- Optimize animations for 60fps

## SEO Best Practices

- Include proper meta tags in pages
- Use semantic HTML structure
- Implement structured data where applicable
- Ensure all images have alt text
- Keep URLs clean and descriptive

## Deployment Notes

- The site is optimized for Vercel deployment
- Static export is available via `npm run export`
- Environment variables should be in `.env.local`
- Build artifacts are in `.next/` directory

## Important Reminders

- Never commit sensitive data or API keys
- Always test responsive design
- Maintain accessibility standards (WCAG 2.1)
- Keep the README.md updated with significant changes
- Follow the existing code conventions

## Development Setup

### For Site Development

- **Primary Tool**: `npm` for all Node.js dependencies and site development
- **Getting Started**: Simply run `npm install && npm run dev`
- **Deployment**: Uses standard npm commands in CI/CD

### For Development Tooling (Claude/AI Assistant)

- **Tool**: `pixi` for Python-based development tools
- **Purpose**: Pre-commit hooks, linting, code quality scripts
- **Configuration**: Defined in `pixi.toml`
- **Note**: This is optional tooling for development convenience, not required for running the site
