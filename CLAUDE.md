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
1. Place tests in `__tests__/` directory
2. Follow existing test patterns
3. Use React Testing Library for component tests
4. Mock external dependencies appropriately
5. Run `npm test` to verify tests pass
6. Check coverage with `npm run test:coverage`

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

## Contact & Support

For questions about the codebase or architecture decisions, refer to the main README.md or contact the development team.