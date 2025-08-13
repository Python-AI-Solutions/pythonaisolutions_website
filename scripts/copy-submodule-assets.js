#!/usr/bin/env node

/**
 * Script to copy submodule assets to the public folder
 * This ensures team photos from the submodule are available at build time
 * All images should be in WebP format in the submodule
 */

const fs = require('fs')
const path = require('path')

const SOURCE_DIR = path.join(
  __dirname,
  '..',
  'submodules',
  'the-team',
  'public',
  'photos',
)
const DEST_DIR = path.join(
  __dirname,
  '..',
  'public',
  'submodules',
  'the-team',
  'public',
  'photos',
)

// Ensure destination directory exists
fs.mkdirSync(DEST_DIR, { recursive: true })

// Read all files from source directory
try {
  const files = fs.readdirSync(SOURCE_DIR)
  let copiedCount = 0
  let nonWebpFound = false

  files.forEach((file) => {
    const sourcePath = path.join(SOURCE_DIR, file)
    const destPath = path.join(DEST_DIR, file)

    // Only copy WebP files
    if (file.match(/\.webp$/i)) {
      fs.copyFileSync(sourcePath, destPath)
      console.log(`✅ Copied: ${file}`)
      copiedCount++
    } else if (file.match(/\.(jpg|jpeg|png|gif|bmp)$/i)) {
      console.log(
        `⚠️  Non-WebP image found: ${file} (should be converted to WebP)`,
      )
      nonWebpFound = true
    }
  })

  if (nonWebpFound) {
    console.log(
      '\n⚠️  Warning: Non-WebP images found in submodule. Run scripts/convert-to-webp.py to convert them.',
    )
  }

  console.log(`\n✅ Copied ${copiedCount} WebP images from submodule`)
} catch (error) {
  console.error('❌ Error copying submodule assets:', error.message)
  process.exit(1)
}
