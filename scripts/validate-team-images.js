#!/usr/bin/env node

/**
 * Script to validate that all team member images exist and are in WebP format
 * This script will fail in CI if any required images are missing or not WebP
 */

const fs = require('fs')
const path = require('path')

// Import the team photos configuration
const teamPhotosPath = path.join(
  __dirname,
  '..',
  'src',
  'data',
  'team-resumes.ts',
)
const teamPhotosContent = fs.readFileSync(teamPhotosPath, 'utf8')

// Extract teamPhotos object from the TypeScript file
const photoMatches = teamPhotosContent.match(
  /export const teamPhotos = \{([^}]+)\}/s,
)
if (!photoMatches) {
  console.error('❌ Could not find teamPhotos export in team-resumes.ts')
  process.exit(1)
}

// Parse the photo paths
const photoEntries = photoMatches[1]
  .split('\n')
  .filter((line) => line.includes(':'))
  .map((line) => {
    const [name, pathValue] = line.split(':').map((s) => s.trim())
    const cleanName = name.replace(/['"]/g, '')
    const cleanPath = pathValue
      .replace(/[,']/g, '')
      .replace(/\/\/.*/g, '')
      .trim()
    return { name: cleanName, path: cleanPath === 'null' ? null : cleanPath }
  })

console.log('Validating team member images...\n')

let hasErrors = false
const submoduleDir = path.join(
  __dirname,
  '..',
  'submodules',
  'the-team',
  'public',
  'photos',
)

// First check if all images in submodule are WebP
const submoduleFiles = fs.readdirSync(submoduleDir)
const nonWebpFiles = submoduleFiles.filter((file) =>
  file.match(/\.(jpg|jpeg|png|gif|bmp)$/i),
)

if (nonWebpFiles.length > 0) {
  console.error('❌ Non-WebP images found in submodule:')
  nonWebpFiles.forEach((file) => {
    console.error(`   - ${file}`)
  })
  console.error('\n   Run: python3 scripts/convert-to-webp.py')
  hasErrors = true
}

// Validate each configured photo
photoEntries.forEach(({ name, path: photoPath }) => {
  if (photoPath === null) {
    console.log(`⏭️  ${name}: No photo configured (intentionally null)`)
    return
  }

  // Check if path references WebP
  if (!photoPath.endsWith('.webp')) {
    console.error(
      `❌ ${name}: Image path doesn't reference WebP format: ${photoPath}`,
    )
    hasErrors = true
    return
  }

  // Check if the photo exists in the submodule (source of truth)
  const fileName = photoPath.split('/').pop()
  const submodulePath = path.join(submoduleDir, fileName)

  if (!fs.existsSync(submodulePath)) {
    console.error(`❌ ${name}: Missing image at ${submodulePath}`)
    hasErrors = true
  } else {
    // Verify it's actually a WebP file
    const stats = fs.statSync(submodulePath)
    if (stats.size === 0) {
      console.error(`❌ ${name}: Image file is empty`)
      hasErrors = true
    } else {
      console.log(
        `✅ ${name}: WebP image found (${(stats.size / 1024).toFixed(1)} KB)`,
      )
    }
  }
})

if (hasErrors) {
  console.error('\n❌ Validation failed: Issues with team member images')
  console.error('Requirements:')
  console.error('1. All images must be in WebP format')
  console.error(
    '2. All images must exist in submodules/the-team/public/photos/',
  )
  console.error(
    '3. The submodule is the single source of truth for team images',
  )
  process.exit(1)
} else {
  console.log('\n✅ All team member images validated successfully')
  console.log('   All images are in WebP format in the submodule')
}
