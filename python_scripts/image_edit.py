import os
from PIL import Image

def resize_image(input_path, output_path, size):
    """Resize the image to the specified size and save it."""
    with Image.open(input_path) as img:
        img = img.resize(size, Image.LANCZOS)
        img.save(output_path)
        print(f"Saved resized image to {output_path}")

def create_image_versions(input_dir, output_dir):
    """Create small, medium, and large versions of all images in the input directory."""
    # Define sizes for small, medium, and large versions
    sizes = {
        'small': (480, 480),   # Example size for small version
        'medium': (768, 768),  # Example size for medium version
        'large': (1200, 1200)  # Example size for large version
    }

    # Ensure the output directory exists
    os.makedirs(output_dir, exist_ok=True)

    # Loop through all files in the input directory
    for file_name in os.listdir(input_dir):
        input_image_path = os.path.join(input_dir, file_name)
        
        # Check if the file is an image
        if os.path.isfile(input_image_path) and file_name.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', ".webp")):
            # Get the base name of the input image
            name, ext = os.path.splitext(file_name)
            print(f"Processing {name}{ext}")

            # Create each version
            for version, size in sizes.items():
                output_path = os.path.join(output_dir, f"{name}-{version}{ext}")
                resize_image(input_image_path, output_path, size)

# Example usage
input_dir = './images'
output_dir = './output'
create_image_versions(input_dir, output_dir)