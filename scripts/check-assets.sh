#!/bin/bash

# Asset validation script to catch missing files before deployment
# Based on the advice provided for GitHub Pages deployment

echo "🔍 Checking for missing assets in build output..."

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "❌ Error: 'out' directory not found. Please run 'npm run build' first."
    exit 1
fi

# Find all src and href references in the build output and check if files exist
missing_files=()
found_references=0

# Use grep to find asset references and check if they exist
grep -RhoP "(?:src|href)=\"\/?[^\"?#]+" out 2>/dev/null | while read -r path; do
    # Remove quotes and leading slash
    clean_path=${path#\"}
    clean_path=${clean_path#/}

    # Skip external URLs and data URLs
    if [[ $clean_path =~ ^https?:// ]] || [[ $clean_path =~ ^data: ]] || [[ $clean_path =~ ^mailto: ]]; then
        continue
    fi

    # Check if file exists in out directory
    if [ ! -f "out/$clean_path" ]; then
        echo "❌ Missing: $path"
        missing_files+=("$clean_path")
    fi

    ((found_references++))
done

echo "📊 Checked $found_references asset references"

# Check specifically for known problematic patterns
echo ""
echo "🔍 Checking for common file naming issues..."

# Check for files with spaces
find out -name "* *" -type f | while read -r file; do
    echo "⚠️  File with space found: $file"
done

# Check for case sensitivity issues (files that might conflict)
find out -type f -name "*.png" -o -name "*.jpg" -o -name "*.webp" -o -name "*.svg" | \
    sed 's|.*/||' | sort | uniq -d | while read -r duplicate; do
    echo "⚠️  Potential case sensitivity issue: $duplicate"
done

if [ ${#missing_files[@]} -eq 0 ]; then
    echo ""
    echo "✅ All asset references appear to be valid!"
    exit 0
else
    echo ""
    echo "❌ Found ${#missing_files[@]} missing asset(s). Please fix these before deployment."
    exit 1
fi
