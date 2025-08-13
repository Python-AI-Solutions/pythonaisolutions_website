#!/usr/bin/env node

/**
 * Test script to verify that CI will fail if images are missing
 * This temporarily modifies team-resumes.ts to reference a non-existent image
 */

const fs = require('fs')
const path = require('path')

const teamResumesPath = path.join(
  __dirname,
  '..',
  'src',
  'data',
  'team-resumes.ts',
)

// Read the current content
const originalContent = fs.readFileSync(teamResumesPath, 'utf8')

// Modify to reference a non-existent image
const modifiedContent = originalContent.replace(
  "'Abdul Qadeer': null",
  "'Abdul Qadeer': '/submodules/the-team/public/photos/Abdul_Qadeer.webp'",
)

// Write the modified content
fs.writeFileSync(teamResumesPath, modifiedContent)

console.log('Modified team-resumes.ts to reference non-existent image')
console.log('Running validation (should fail)...\n')

// Run validation
const { execSync } = require('child_process')
try {
  execSync('node scripts/validate-team-images.js', { stdio: 'inherit' })
  console.log("\n❌ ERROR: Validation should have failed but didn't!")
  process.exit(1)
} catch (error) {
  console.log('\n✅ Good! Validation correctly failed for missing image')
  // Restore original content
  fs.writeFileSync(teamResumesPath, originalContent)
  console.log('Restored original team-resumes.ts')
  process.exit(0)
}
