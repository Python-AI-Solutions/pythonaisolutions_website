# Python AI Solutions Website

A modern, responsive website for Python AI Solutions built with Next.js, TypeScript, and Tailwind CSS. This website showcases AI solutions, services, and expertise in Python-based artificial intelligence development.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) - React framework with app router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- **Content**: [MDX](https://mdxjs.com/) - Markdown with JSX support
- **Image Optimization**: Next.js Image component with WebP support
- **Deployment**: Optimized for any static hosting platform

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher)
- [npm](https://www.npmjs.com/) (version 9.0.0 or higher) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/) for version control

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd pythonaisolutions_website
```

### 2. Install dependencies
```bash
npm install
# or
yarn install
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

## 🎨 Customization

### Tailwind CSS
The Tailwind configuration is in `tailwind.config.js`. You can customize:
- Color palette
- Typography settings
- Spacing and sizing
- Custom animations
- Breakpoints for responsive design

### Components
All components are in `src/components/` and are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design principles

## 🚢 Deployment

### Static Export
For static hosting:
```bash
npm run export
```
The static files will be in the `out/` directory.

## 🔧 Development

### Testing
The project includes a comprehensive test suite using Jest and React Testing Library.

#### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Run tests for CI
npm run test:ci
```

#### Test Coverage
- Target coverage: 50% statements, 40% branches, 40% functions, 50% lines
- Tests are located in `__tests__/` directory
- Component tests cover core UI components
- Page tests verify page rendering and functionality
- Utility tests ensure helper functions work correctly

### Code Style
- ESLint and Prettier are configured for consistent code style
- Run `npm run lint` before committing
- TypeScript strict mode is enabled

### Environment Variables
Create a `.env.local` file for local environment variables:
```env
NEXT_PUBLIC_API_URL=your_api_url
```

## 📝 Content Management

### Blog Posts
Blog posts are written in MDX format in `src/app/blog/` directory. Each post supports:
- Markdown formatting
- React components
- Code syntax highlighting
- Metadata for SEO

### Images
- Use WebP format for better performance
- Place images in `src/images/` or `public/`
- Use Next.js Image component for optimization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🆘 Support

For support, email contact@pythonaisolutions.com or open an issue in the repository.

