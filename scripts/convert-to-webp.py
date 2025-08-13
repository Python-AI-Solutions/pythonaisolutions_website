#!/usr/bin/env python3
"""
Convert all team images to WebP format
"""

import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow for image conversion...")
    import subprocess

    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image


def convert_to_webp(source_dir):
    """Convert all images in directory to WebP format"""
    source_path = Path(source_dir)

    # Find all image files
    image_extensions = [".png", ".jpg", ".jpeg", ".gif", ".bmp"]
    image_files = []
    for ext in image_extensions:
        image_files.extend(source_path.glob(f"*{ext}"))
        image_files.extend(source_path.glob(f"*{ext.upper()}"))

    for img_path in image_files:
        # Create webp filename
        webp_path = img_path.with_suffix(".webp")

        print(f"Converting {img_path.name} to {webp_path.name}")

        # Open and convert image
        try:
            with Image.open(img_path) as img:
                # Convert RGBA to RGB if necessary (WebP doesn't always handle alpha well)
                if img.mode in ("RGBA", "LA", "P"):
                    # Create a white background
                    background = Image.new("RGB", img.size, (255, 255, 255))
                    if img.mode == "P":
                        img = img.convert("RGBA")
                    background.paste(
                        img, mask=img.split()[-1] if img.mode == "RGBA" else None
                    )
                    img = background
                elif img.mode != "RGB":
                    img = img.convert("RGB")

                # Save as WebP with good quality
                img.save(webp_path, "WEBP", quality=85, method=6)

            # Remove original file
            img_path.unlink()
            print(f"  ✅ Converted and removed original {img_path.name}")

        except Exception as e:
            print(f"  ❌ Error converting {img_path.name}: {e}")

    # List final files
    print("\nFinal images in directory:")
    for webp_file in sorted(source_path.glob("*.webp")):
        print(f"  - {webp_file.name}")


if __name__ == "__main__":
    submodule_photos = (
        Path(__file__).parent.parent / "submodules" / "the-team" / "public" / "photos"
    )

    if not submodule_photos.exists():
        print(f"Error: Directory not found: {submodule_photos}")
        sys.exit(1)

    print(f"Converting images in: {submodule_photos}")
    convert_to_webp(submodule_photos)
    print("\n✅ All images converted to WebP format")
