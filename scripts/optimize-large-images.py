#!/usr/bin/env python3
"""
Optimize large WebP images in the submodule
"""

import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow for image optimization...")
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image


def optimize_webp(image_path, max_size_kb=100, max_dimension=800):
    """Optimize a WebP image if it's too large"""
    file_size_kb = image_path.stat().st_size / 1024

    if file_size_kb <= max_size_kb:
        return False

    print(f"Optimizing {image_path.name} ({file_size_kb:.1f} KB)")

    with Image.open(image_path) as img:
        # Calculate new dimensions if needed
        width, height = img.size
        if width > max_dimension or height > max_dimension:
            ratio = min(max_dimension / width, max_dimension / height)
            new_width = int(width * ratio)
            new_height = int(height * ratio)
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            print(f"  Resized from {width}x{height} to {new_width}x{new_height}")

        # Save with lower quality to reduce file size
        quality = 80
        while quality > 40:
            # Save to temp file first
            temp_path = image_path.with_suffix(".tmp.webp")
            img.save(temp_path, "WEBP", quality=quality, method=6)

            # Check new size
            new_size_kb = temp_path.stat().st_size / 1024

            if new_size_kb <= max_size_kb:
                # Replace original with optimized version
                temp_path.replace(image_path)
                print(f"  Optimized to {new_size_kb:.1f} KB (quality={quality})")
                return True

            # Try lower quality
            temp_path.unlink()
            quality -= 10

        print(f"  Warning: Could not optimize below {max_size_kb} KB")
        return False


if __name__ == "__main__":
    submodule_photos = (
        Path(__file__).parent.parent / "submodules" / "the-team" / "public" / "photos"
    )

    if not submodule_photos.exists():
        print(f"Error: Directory not found: {submodule_photos}")
        sys.exit(1)

    print(f"Checking WebP images in: {submodule_photos}")
    print("Target: < 100 KB per image\n")

    optimized_count = 0
    for webp_file in sorted(submodule_photos.glob("*.webp")):
        if optimize_webp(webp_file):
            optimized_count += 1

    if optimized_count > 0:
        print(f"\n✅ Optimized {optimized_count} image(s)")
    else:
        print("\n✅ All images are already optimized")
