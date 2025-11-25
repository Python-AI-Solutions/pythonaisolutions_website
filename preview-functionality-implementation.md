# Preview Functionality Implementation Guide

## Overview

This document provides a comprehensive guide on how the preview functionality is implemented in this project. It uses **Quarto** as the static site generator with a live preview server that automatically rebuilds the site when files change.

## Architecture

The preview functionality consists of three main layers:

1. **Task Execution Layer** (`pixi.toml`) - Defines how to run the preview
2. **Project Configuration Layer** (`_quarto.yml`) - Defines the project structure
3. **Dependencies Layer** - Specifies required packages

---

## Files Involved

### 1. `pixi.toml` (Project Configuration)

**Location**: Root directory

**Code**:
```toml
[workspace]
name = "company-handbook"
version = "0.1.0"
description = "Company Handbook"

channels = ["conda-forge"]
platforms = ["osx-arm64", "linux-64"]

[environments]
default = { features = ["dev"], solve-group = "default" }

[feature.dev.dependencies]
python = ">=3.13"
quarto = "*"
pre-commit = "*"
ruff = "*"
pytest = "*"
pytest-cov = "*"
mdformat = "*"
mdformat-gfm = "*"
mdformat-frontmatter = "*"
copier = "*"

[tasks]
format = "python scripts/tasks.py format"
check = "python scripts/tasks.py check"
hooks = "python scripts/tasks.py hooks"
test = "python -m pytest -vv"
build = "quarto render --output-dir _site"
serve = "quarto preview"
```

**Key Configuration**:
- **Line 14**: `quarto = "*"` - Installs Quarto as a dev dependency
- **Line 30**: `serve = "quarto preview"` - Defines the preview task

**Purpose**: This file defines:
- Project workspace and version information
- Conda channels to use for package installation
- Target platforms (osx-arm64, linux-64)
- Development dependencies including Quarto
- Task definitions for common operations (format, check, hooks, test, build, serve)

### 2. `_quarto.yml` (Project Structure)

**Location**: Root directory

**Code**:
```yaml
project:
  type: book
  output-dir: _site

book:
  title: Company Handbook
  author: Sumit Jha
  date: today
  chapters:
  - index.qmd
  - content/communication-guidelines.md
  - content/work-hours-time-zones-scheduling.md
  - content/remote-work-expectations-performance.md
  - content/security-privacy-acceptable-use-remote.md
  - content/meetings-collaboration-project-management.md
  - content/documentation-standards.md
  - content/learning-training-career-development.md
  - content/emergencies-contingencies.md
  - content/legal-compliance-indiabased.md
  - content/compensation-time-tracking-invoicing-remote-context.md
  - content/tools-access-management.md
  - content/health-safety-wellbeing-remote.md
  - content/exceptions-conflicts-updates.md
  - content/company-overview.md
  - content/team-roles-responsibilities.md
  - content/onboarding-procedures.md
  - content/performance-reviews.md
  - content/cultural-norms-teambuilding.md
  - content/contact-directory-how-we-maintain-it.md
  - content/personal-operating-manuals-poms.md
  - content/frequently-asked-questions-faq.md
  - content/addendum-collaboration-security-workflow-policies.md
  - content/acknowledgment.md
  appendices:
  - content/appendices/appendices.md
  - content/appendices/glossary.md
  - content/appendices/quick-reference.md

format:
  html:
    theme: cosmo
    toc: true
  pdf: default
  docx: default

filters: []
```

**Key Configuration**:
- **`project.type: book`** - Specifies this is a Quarto book project
- **`project.output-dir: _site`** - Output builds to this directory
- **`book.title`** - Title of the book
- **`book.chapters`** - Ordered list of chapter files (supports .qmd and .md)
- **`book.appendices`** - Appendix files
- **`format.html`** - HTML output settings:
  - `theme: cosmo` - Uses the Cosmo theme
  - `toc: true` - Enables table of contents
- **`format.pdf` and `format.docx`** - Enables PDF and DOCX output formats

**Purpose**: Defines the complete structure and layout of the Quarto project, including all chapters, appendices, and output formats.

### 3. Root-Level Files

#### `index.qmd`
This is the first chapter/entry point for the book. The `.qmd` extension indicates it's a Quarto Markdown file.

#### `README.md`
Contains project documentation and typically includes instructions on how to run the preview.

---

## How the Preview Works

### Step-by-Step Process

1. **User runs the task**:
   ```bash
   pixi run serve
   ```

2. **Pixi executes the task**:
   - Pixi reads `pixi.toml` and finds the `serve` task definition
   - The task runs: `quarto preview`

3. **Quarto starts the preview server**:
   - Quarto reads `_quarto.yml` to understand the project structure
   - Quarto validates all file paths specified in chapters/appendices
   - Starts a local development server (typically on `http://localhost:3456` or similar)
   - Performs initial build of the entire project

4. **File watching and hot reload**:
   - Quarto watches for changes in all source files
   - When a file is modified and saved, Quarto automatically:
     - Rebuilds the affected chapters
     - Updates the HTML output
     - Refreshes the browser (if hot reload is enabled)

5. **Output generation**:
   - Renders all chapters and appendices into HTML
   - Builds the table of contents
   - Applies the specified theme (cosmo)
   - Generates navigation between chapters

---

## Dependencies

### Required

- **quarto** (*) - The core static site generator and preview server
- **python** (>=3.13) - Python runtime (for any custom scripts)

### Optional (Already Configured)

- **pre-commit** - Git hooks manager
- **ruff** - Python linter/formatter
- **pytest** - Testing framework
- **mdformat** - Markdown formatter
- **copier** - Project templating tool

---

## Related Build Tasks

The preview functionality works alongside other tasks defined in `pixi.toml`:

### `pixi run build`
```bash
quarto render --output-dir _site
```
- Builds the entire project once
- Outputs to `_site` directory
- Doesn't watch for changes (one-time operation)

### `pixi run serve`
```bash
quarto preview
```
- Starts the preview server
- Watches for file changes
- Automatically rebuilds and refreshes

---

## Directory Structure

```
company-handbook/
├── _quarto.yml              # Main Quarto configuration
├── pixi.toml                # Pixi task definitions and dependencies
├── pixi.lock                # Locked dependency versions
├── index.qmd                # First chapter/entry point
├── content/                 # All markdown content files
│   ├── acknowledgment.md
│   ├── communication-guidelines.md
│   ├── work-hours-time-zones-scheduling.md
│   └── ... (other chapters)
├── appendices/              # Appendix files
│   ├── appendices.md
│   ├── glossary.md
│   └── quick-reference.md
├── scripts/
│   ├── tasks.py             # Task runner scripts
│   ├── autoformat-markdown.py
│   └── AI_HELPERS.md
├── _site/                   # Build output (generated)
└── README.md
```

---

## Common Issues and Solutions

### Issue: Preview Not Starting

**Check**:
1. Is Quarto installed? Run: `pixi run -- quarto --version`
2. Is `_quarto.yml` present in the root directory?
3. Are all file paths in `_quarto.yml` correct and relative?
4. Do all referenced files actually exist?

**Solution**:
```bash
# Rebuild the environment
pixi install

# Try running build first (simpler than preview)
pixi run build

# Then try preview
pixi run serve
```

### Issue: Files Not Appearing in Preview

**Check**:
1. Is the file listed in `_quarto.yml` under `chapters:` or `appendices:`?
2. Is the file path correct (relative to root)?
3. Is the file a `.md` or `.qmd` file?

**Solution**:
- Add the file to `_quarto.yml` in the appropriate section
- Ensure the path is relative to the project root

### Issue: Changes Not Reflecting

**Check**:
1. Is the file saved?
2. Is Quarto still running?

**Solution**:
- Save the file and wait a few seconds
- If still not working, restart the preview: `CTRL+C` and `pixi run serve` again

---

## Configuration for Your Project

When implementing this in your pythonaisolutions website repo, ensure you have:

### Minimum Required Files

1. **`pixi.toml`** with:
   - `quarto = "*"` in dev dependencies
   - `serve = "quarto preview"` in tasks section
   - Any other project-specific dependencies

2. **`_quarto.yml`** with:
   - `project.type: book` or `website` (depending on your project type)
   - `project.output-dir: _site` (or appropriate directory)
   - All chapters/pages listed in the correct sections
   - Format settings (html, pdf, docx as needed)

3. **Project files**:
   - `index.qmd` or equivalent entry point
   - All markdown/quarto files referenced in `_quarto.yml`

### Quick Setup Commands

```bash
# Install dependencies
pixi install

# Build the project once
pixi run build

# Start the preview server
pixi run serve
```

---

## Additional Resources

- **Quarto Documentation**: https://quarto.org
- **Quarto Preview Command**: https://quarto.org/docs/projects/quarto-projects.html#preview
- **Quarto Book Format**: https://quarto.org/docs/books/
- **Pixi Documentation**: https://pixi.sh

---

## Notes

- The preview server is designed for development; use `pixi run build` for production builds
- File changes are automatically detected; no need to restart the server for most changes
- The `theme: cosmo` can be changed to other Quarto themes (bootstrap, cosmo, darkly, flatly, journal, lumen, lux, materia, minty, morph, pulse, quartz, sandstone, simplex, sketchy, slate, solar, spacelab, superhero, united, vapor, yeti, zephir)
- Multiple output formats (HTML, PDF, DOCX) can be built simultaneously with Quarto

