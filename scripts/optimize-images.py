#!/usr/bin/env python3
"""Optimize landing page images: resize, convert to WebP for photos, keep PNG for logo."""
import os
from PIL import Image, ImageOps
from pathlib import Path

SRC_DIR = Path('/home/z/my-project/landing-assets')
DST_DIR = Path('/home/z/my-project/public/images')
DST_DIR.mkdir(parents=True, exist_ok=True)

# Target sizes for different image categories
# - Before/after: 800x800 (down from 1280x1280) - good for retina displays
# - Hero procedure: max 800px wide
# - Testimonials: max 400px wide
# - Logo: keep at natural size but optimized

def optimize_image(src_path: Path, dst_path: Path, max_size: tuple, quality: int = 82, to_webp: bool = True):
    """Resize and optimize image."""
    with Image.open(src_path) as img:
        # Auto-orient based on EXIF
        img = ImageOps.exif_transpose(img)
        # Convert to RGB if needed (for JPEG/WebP output)
        if img.mode in ('RGBA', 'P'):
            # Keep RGBA for PNG
            if dst_path.suffix.lower() == '.png':
                pass
            else:
                img = img.convert('RGB')
        elif img.mode != 'RGB':
            img = img.convert('RGB')
        # Resize to fit within max_size while preserving aspect ratio
        img.thumbnail(max_size, Image.LANCZOS)
        # Save
        if to_webp and dst_path.suffix.lower() in ('.jpg', '.jpeg'):
            # Change extension to .webp
            dst_path = dst_path.with_suffix('.webp')
        if dst_path.suffix.lower() == '.webp':
            img.save(dst_path, 'WEBP', quality=quality, method=6, optimize=True)
        elif dst_path.suffix.lower() == '.png':
            img.save(dst_path, 'PNG', optimize=True)
        else:
            img.save(dst_path, 'JPEG', quality=quality, optimize=True, progressive=True)
        return dst_path, os.path.getsize(dst_path)

# Process all before/after images (8 images needed, we have 21 - use first 8)
print('=== Processing before/after images ===')
# Pick 8 best images - use a mix
selected_indices = [1, 2, 3, 6, 7, 8, 11, 12]  # Mix of different images
for i in selected_indices:
    src = SRC_DIR / f'before-after-{i}.jpg'
    if not src.exists():
        print(f'  ✗ {src.name} not found')
        continue
    dst, size = optimize_image(src, DST_DIR / f'before-after-{i}.jpg', (800, 800), quality=80)
    print(f'  ✓ {src.name} -> {dst.name}: {size/1024:.1f} KB')

# Hero procedure image
print('\n=== Processing hero procedure image ===')
src = SRC_DIR / 'hero-procedure.webp'
if src.exists():
    dst, size = optimize_image(src, DST_DIR / 'hero-procedure.webp', (1000, 800), quality=82)
    print(f'  ✓ hero-procedure -> {dst.name}: {size/1024:.1f} KB')

# Logo (keep as PNG, optimize)
print('\n=== Processing logo ===')
src = SRC_DIR / 'logo.png'
if src.exists():
    dst, size = optimize_image(src, DST_DIR / 'logo.png', (280, 100), quality=90, to_webp=False)
    print(f'  ✓ logo -> {dst.name}: {size/1024:.1f} KB')

# Testimonial images
print('\n=== Processing testimonial images ===')
for i in [1, 2, 3]:
    src = SRC_DIR / f'testimonial-{i}.jpg'
    if not src.exists():
        continue
    dst, size = optimize_image(src, DST_DIR / f'testimonial-{i}.webp', (400, 600), quality=80)
    print(f'  ✓ testimonial-{i} -> {dst.name}: {size/1024:.1f} KB')

# Create a video poster from testimonial-1 (since video can't be downloaded)
print('\n=== Creating video poster ===')
src = SRC_DIR / 'testimonial-1.jpg'
if src.exists():
    dst, size = optimize_image(src, DST_DIR / 'video-poster.webp', (800, 1200), quality=82)
    print(f'  ✓ video-poster -> {dst.name}: {size/1024:.1f} KB')

# Also create a hero before/after composite (the main image at top)
# Use before-after-1 as the hero before/after
print('\n=== Creating hero before/after ===')
src = SRC_DIR / 'before-after-1.jpg'
if src.exists():
    dst, size = optimize_image(src, DST_DIR / 'hero-before-after.webp', (1000, 1000), quality=85)
    print(f'  ✓ hero-before-after -> {dst.name}: {size/1024:.1f} KB')

# Print final summary
print('\n=== Final images in public/images ===')
total = 0
for f in sorted(DST_DIR.iterdir()):
    if f.is_file():
        size = f.stat().st_size
        total += size
        print(f'  {f.name}: {size/1024:.1f} KB')
print(f'\nTotal: {total/1024:.1f} KB ({total/1024/1024:.2f} MB)')
