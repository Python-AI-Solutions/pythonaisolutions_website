# Portfolio Section Guide

## Overview
The portfolio section showcases the projects and work completed by Python AI Solutions. It features a main portfolio grid page and individual detailed project pages accessible via dynamic routing.

## File Structure
```
/src/
  /app/
    /portfolio/
      page.tsx                    # Main portfolio grid page
      /[projectId]/
        page.tsx                  # Dynamic project detail pages
  /data/
    projects.ts                   # Centralized project data
/public/
  /portfolio/
    *.png, *.svg                  # Project images and screenshots
```

## Key Files

### 1. `/src/data/projects.ts`
**Central data source** for all portfolio projects. Contains two main exports:
- `ProjectDetail` interface - TypeScript type definition
- `projectDetails` object - All project data

### 2. `/src/app/portfolio/page.tsx`
Main portfolio page displaying:
- Filterable project grid (1-3 columns responsive)
- Category filter buttons
- Project cards with hover effects
- Links to individual project pages

### 3. `/src/app/portfolio/[projectId]/page.tsx`
Dynamic route for individual project detail pages showing:
- Full project description
- Problem & Solution sections
- What We Did timeline
- Technology Stack
- Key Features
- Achievements
- Additional screenshots
- Call-to-action

### 4. `/public/portfolio/`
Image assets for projects

---

## Project Data Structure

Each project in `/src/data/projects.ts` has the following fields:

```typescript
{
  id: string                      // Unique identifier (used in URL)
  title: string                   // Project name
  category: string                // Category for filtering
  shortDescription: string        // Brief summary (for grid cards)
  fullDescription: string         // Detailed description (for detail page)
  problem: string                 // Problem statement
  solution: string                // Solution explanation
  whatWeDid: string[]            // Array of implementation steps
  techStack: string[]            // Technologies used
  features: string[]             // Key features list
  status: string                 // 'Production Ready', 'Beta', 'In Development'
  statusColor: string            // Tailwind class: 'bg-green-500', etc.
  image: string                  // Main project image path
  screenshots?: string[]         // Array of additional screenshot paths
  github: string | null          // GitHub repo URL or null
  demo: string | null            // Live demo URL or null
  achievements: string[]         // Notable achievements/metrics
}
```

---

## How to Add a New Project

### Step 1: Add Project Data
Open `/src/data/projects.ts` and add a new entry to the `projectDetails` object:

```typescript
'your-project-id': {
  id: 'your-project-id',
  title: 'Your Project Name',
  category: 'Healthcare AI',  // Choose appropriate category
  shortDescription: 'Brief one-sentence description for the grid card.',
  fullDescription: 'Detailed 2-3 paragraph description explaining what the project is, its purpose, and its capabilities. This appears on the detail page.',
  problem: 'Describe the problem this project solves. What challenges were users facing? What gaps in the market does this address?',
  solution: 'Explain how your project solves the problem. What makes your approach unique? What technologies or methodologies did you use?',
  whatWeDid: [
    'First major implementation step or component',
    'Second implementation detail',
    'Third key development task',
    'Fourth achievement or feature built',
    // Add 6-8 items describing your development process
  ],
  techStack: ['Python', 'React', 'TensorFlow', 'PostgreSQL'],
  features: [
    'Key feature 1',
    'Key feature 2',
    'Key feature 3',
    // Add 5-10 features
  ],
  status: 'In Development',  // 'Production Ready', 'Beta', or 'In Development'
  statusColor: 'bg-yellow-500',  // See status colors below
  image: '/portfolio/your-project.png',
  screenshots: [
    '/portfolio/your-project.png',
    '/portfolio/your-project-2.png',
    // Optional: Add additional screenshots
  ],
  github: 'https://github.com/your-org/your-repo',  // or null
  demo: 'https://your-demo-url.com',  // or null
  achievements: [
    'Notable achievement 1',
    'Metric or award 2',
    // Add 2-4 achievements if applicable
  ],
}
```

### Step 2: Add Project Images
1. Place project screenshots in `/public/portfolio/`
2. **Recommended format**: `.png` or `.webp`
3. **Recommended dimensions**: 
   - Main image: 1200x675px (16:9 aspect ratio)
   - Additional screenshots: 800x450px (16:9 aspect ratio)
4. **Naming convention**: Use lowercase with hyphens (e.g., `my-project-name.png`)

### Step 3: Update Exports
The `projects` array in `/src/app/portfolio/page.tsx` automatically reads from `projectDetails`, so no additional changes are needed. The project will appear automatically on the main portfolio page.

---

## How to Edit an Existing Project

1. Open `/src/data/projects.ts`
2. Find the project by its `id` in the `projectDetails` object
3. Update any fields as needed
4. Save the file - changes will reflect on both:
   - Main portfolio grid page (`/portfolio`)
   - Project detail page (`/portfolio/[project-id]`)

**Note**: The `id` field is used in the URL, so changing it will break existing links.

---

## Status Badge Colors

| Status | Color Class | Use Case |
|--------|------------|----------|
| Production Ready | `bg-green-500` | Live, deployed projects |
| Beta | `bg-blue-500` | Testing phase, limited release |
| In Development | `bg-yellow-500` | Active development |
| Experimental | `bg-purple-500` | Research/proof-of-concept |

---

## Categories

Current categories (in display order):
1. **Healthcare AI** - Medical and health-related AI solutions
2. **AI-Powered Tools** - General AI tools and applications
3. **Platform Engineering** - Infrastructure, DevOps, deployment
4. **Developer Tools** - Tools for developers
5. **Scientific Computing** - Research and scientific applications
6. **Data Management** - Data processing, conversion, storage

### Changing Category Order
Edit the `categoryOrder` array in `/src/app/portfolio/page.tsx`:

```typescript
const categoryOrder = [
  'Healthcare AI',
  'AI-Powered Tools',
  'Platform Engineering',
  // ... add or reorder as needed
]
```

### Adding New Categories
Simply use a new category name in any project's `category` field. It will automatically:
- Appear in the filter buttons (if it has projects)
- Be sorted according to `categoryOrder` (or alphabetically if not listed)

---

## Current Projects

| Project | Status | Category |
|---------|--------|----------|
| Cervical Screener | Production Ready | Healthcare AI |
| NoStrings Resume | Production Ready | AI-Powered Tools |
| Infrastructure & DevOps | Production Ready | Platform Engineering |
| Agentic Neurodata Conversion | In Development | Scientific Computing |
| Archive Flow | In Development | Data Management |
| Evaluation Exploration | Beta | Developer Tools |

---

## Project Detail Pages

Each project has a dedicated detail page at `/portfolio/[project-id]` with:

### Sections Displayed
1. **Header** - Title, category badge, full description
2. **Status & Links** - Status badge, GitHub link, Demo link
3. **Main Image** - Primary project screenshot (16:9 aspect ratio, centered, max-width)
4. **Problem & Solution** - Side-by-side cards explaining the challenge and approach
5. **What We Did** - Numbered list of implementation steps (2-column grid)
6. **Technology Stack** - Tech badges in a highlighted container
7. **Key Features** - Feature cards with checkmarks (3-column grid)
8. **Achievements** - Award/metric cards with sparkle icons (2-column grid)
9. **Additional Screenshots** - Gallery of extra images (if provided)
10. **Call-to-Action** - Contact and portfolio navigation buttons

### Customizing Detail Pages
Edit `/src/app/portfolio/[projectId]/page.tsx` to modify:
- Section layouts
- Styling and colors
- Icons and visual elements
- Content structure

**Note**: All sections use `max-w-5xl` for consistent horizontal alignment throughout the page.

---

## Navigation & Routing

### Main Portfolio Page
- **URL**: `/portfolio`
- **Features**: Grid view, category filtering, project cards
- **Click behavior**: Cards are clickable and navigate to detail pages

### Project Detail Pages
- **URL Pattern**: `/portfolio/[project-id]`
- **Example**: `/portfolio/cervical-screener`
- **Dynamic routing**: Next.js automatically generates pages for all projects
- **SEO**: Metadata is automatically generated for each project

### Navigation Links
Portfolio is accessible from:
- Main navigation menu (desktop & mobile)
- Footer
- Home page "View Portfolio" button (Services section)
- "View More Projects" button on detail pages

---

## Placeholder Images

| File | Purpose | Usage |
|------|---------|-------|
| `placeholder.svg` | Generic placeholder | Automatic fallback for projects without images |
| `infrastructure-placeholder.svg` | Custom infrastructure icon | Used for Infrastructure & DevOps project |
| `grid.svg` | Background pattern | Used in placeholder displays |

**Custom Placeholders**: To create project-specific placeholders, add an SVG to `/public/portfolio/` and reference it in the project's `image` field.

---

## Best Practices

### Content Guidelines

1. **Short Descriptions** (for grid cards)
   - Keep to 1-2 sentences
   - Focus on the core value proposition
   - Make it compelling and clear

2. **Full Descriptions** (for detail pages)
   - Write 2-3 detailed paragraphs
   - Explain what the project does, who it's for, and what makes it unique
   - Include technical highlights

3. **Problem Statements**
   - Describe the real-world challenge
   - Be specific about pain points
   - Explain why existing solutions fall short

4. **Solution Descriptions**
   - Explain your approach clearly
   - Highlight innovative aspects
   - Connect solution to the problem

5. **What We Did**
   - List 6-8 concrete implementation steps
   - Start with action verbs (Built, Developed, Implemented, Created)
   - Be specific about technologies and approaches

6. **Tech Stack**
   - List 5-10 key technologies
   - Order by importance/prominence
   - Use standard technology names

7. **Features**
   - List 5-10 key capabilities
   - Keep each feature concise (one line)
   - Focus on user-facing benefits

8. **Achievements**
   - Include measurable metrics when possible
   - List awards, recognitions, or milestones
   - Keep to 2-4 most impressive achievements

### Image Guidelines

- **Format**: PNG or WebP for photos, SVG for graphics
- **Aspect Ratio**: 16:9 for all screenshots
- **Resolution**: High-quality but optimized for web
- **Main Image**: 1200x675px recommended
- **Additional Screenshots**: 800x450px recommended
- **File Naming**: Use lowercase with hyphens (e.g., `my-project-name.png`)

### SEO Best Practices

- Each project detail page has automatically generated metadata
- Use descriptive project titles
- Include keywords naturally in descriptions
- Ensure all images have descriptive alt text (automatically uses project title)

---

## Customization

### Changing the Accent Color
The main brand color is `#31b9fd` (light blue). To change it:

1. **In component files**, search and replace `#31b9fd` with your color
2. **In Tailwind classes**, replace `[#31b9fd]` occurrences
3. Files to update:
   - `/src/app/portfolio/page.tsx`
   - `/src/app/portfolio/[projectId]/page.tsx`

### Modifying Grid Layout
Edit `/src/app/portfolio/page.tsx`:

```typescript
// Current: 1 column mobile, 2 tablet, 3 desktop
className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"

// Example: 4 columns on large screens
className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
```

### Adjusting Card Content
In `/src/app/portfolio/page.tsx`, modify the `ProjectCard` component to:
- Change number of visible features: `.slice(0, 3)` → `.slice(0, 5)`
- Change number of achievements: `.slice(0, 2)` → `.slice(0, 3)`
- Adjust description line clamp: `line-clamp-3` → `line-clamp-4`

### Changing Detail Page Layout
Edit `/src/app/portfolio/[projectId]/page.tsx`:

- **Content width**: Change `max-w-5xl` to `max-w-6xl` or `max-w-4xl`
- **Grid columns**: Modify `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Spacing**: Adjust `mt-12`, `gap-4`, `p-8` values
- **Section order**: Reorder or remove sections as needed

---

## Testing

### Local Development Testing

1. **Start dev server**:
   ```bash
   cd /path/to/pythonaisolutions_website
   npm run dev
   ```

2. **Navigate to portfolio**: `http://localhost:3000/portfolio`

3. **Test checklist**:
   - ✅ All projects display correctly on grid
   - ✅ Category filters work properly
   - ✅ "All Projects" shows all items
   - ✅ Clicking a project card navigates to detail page
   - ✅ Detail pages load correctly for all projects
   - ✅ Images display properly (or placeholders show)
   - ✅ GitHub/Demo links work (open in new tabs)
   - ✅ Back button returns to portfolio
   - ✅ Responsive design works on mobile/tablet/desktop
   - ✅ No console errors

### Manual Testing Procedure

1. **Main Portfolio Page**:
   - Click each category filter
   - Verify project counts
   - Test hover effects on cards
   - Click several project cards

2. **Project Detail Pages**:
   - Check all sections render
   - Verify images load correctly
   - Test external links (GitHub, Demo)
   - Try "Get in Touch" and "View More Projects" buttons
   - Test "Back to Portfolio" link

3. **Responsive Testing**:
   - Test on mobile (375px)
   - Test on tablet (768px)
   - Test on desktop (1440px)
   - Check navigation menu on mobile

---

## Troubleshooting

### Project Not Showing on Portfolio Page

**Issue**: Added project to `projects.ts` but it doesn't appear

**Solutions**:
- Verify the project is in `projectDetails` object
- Check that `id` field is unique
- Ensure all required fields are present
- Restart dev server (`npm run dev`)

### Detail Page Returns 404

**Issue**: Clicking project card shows "Not Found"

**Solutions**:
- Verify project `id` matches between grid and detail data
- Check that project exists in `projectDetails`
- Clear Next.js cache: `rm -rf .next && npm run dev`

### Images Not Loading

**Issue**: Project images don't display

**Solutions**:
- Verify image file exists in `/public/portfolio/`
- Check image path starts with `/portfolio/` (not `public/`)
- Ensure image filename matches exactly (case-sensitive)
- For SVG issues, check if condition in detail page code

### Category Filter Not Working

**Issue**: Clicking category shows no projects or wrong projects

**Solutions**:
- Check that project `category` field exactly matches filter name
- Verify `categoryOrder` array includes the category
- Check browser console for JavaScript errors
- Add `key={filter}` to `FadeInStagger` component (already implemented)

### Layout Alignment Issues

**Issue**: Sections don't align properly

**Solutions**:
- All sections should have `mx-auto max-w-5xl` wrapper
- Verify consistent max-width across all sections
- Check for extra wrapper divs affecting layout
- Inspect with browser DevTools to identify misaligned elements

---

## Advanced Customization

### Adding New Sections to Detail Pages

1. Open `/src/app/portfolio/[projectId]/page.tsx`
2. Add new section following existing patterns:

```tsx
{/* New Custom Section */}
<div className="mx-auto mt-12 max-w-5xl">
  <FadeIn>
    <h2 className="font-display text-2xl font-semibold text-neutral-950">
      Your Section Title
    </h2>
    <p className="mt-4 text-base text-neutral-600">
      {project.yourCustomField}
    </p>
  </FadeIn>
</div>
```

3. Add corresponding field to TypeScript interface in `/src/data/projects.ts`:

```typescript
export interface ProjectDetail {
  // ... existing fields
  yourCustomField?: string
}
```

### Adding New Project Fields

1. Update `ProjectDetail` interface in `/src/data/projects.ts`
2. Add field to all existing projects (or make it optional with `?`)
3. Use the field in page components as needed

### Implementing Search Functionality

Currently not implemented. To add:
1. Add search state in `/src/app/portfolio/page.tsx`
2. Filter projects based on title, description, or tags
3. Add search input above the grid
4. Update filtered projects to include search results

---

## Deployment Notes

- **Static Generation**: Project detail pages are statically generated at build time
- **Build Command**: `npm run build`
- **Dynamic Routes**: All routes in `projectDetails` are pre-rendered
- **Image Optimization**: Next.js Image component handles optimization
- **Performance**: Lazy loading and fade-in animations improve perceived performance

---

## File Reference Quick Links

| File | Purpose |
|------|---------|
| `/src/data/projects.ts` | **Edit this** to add/update projects |
| `/src/app/portfolio/page.tsx` | Main portfolio grid page |
| `/src/app/portfolio/[projectId]/page.tsx` | Project detail page template |
| `/src/components/RootLayout.tsx` | Navigation menu (includes Portfolio link) |
| `/src/components/Footer.tsx` | Footer navigation |
| `/public/portfolio/` | Project images and screenshots |

---

## Support & Maintenance

### Regular Maintenance Tasks

- Update project statuses as they progress
- Add new screenshots when available
- Update achievement metrics
- Add new projects as completed
- Keep GitHub links current
- Test portfolio monthly for broken links

### Getting Help

For issues or questions:
1. Check this guide first
2. Review error messages in browser console
3. Check Next.js documentation for routing/dynamic pages
4. Review TypeScript errors in your IDE

---

**Last Updated**: December 2025
**Portfolio Version**: 2.0 (with dynamic detail pages)
