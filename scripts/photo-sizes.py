"""Make phone-sized WebP copies of every photo, next to the original.

Run after adding or replacing a photo in public/photos:
    python3 scripts/photo-sizes.py
The Photo component serves these through srcset, so a phone downloads
a 640px or 1080px file instead of the 2000px original.
"""
from pathlib import Path
from PIL import Image

WIDTHS = [640, 1080, 1600]
root = Path(__file__).resolve().parent.parent / 'public' / 'photos'

for src in sorted(root.glob('*.jpg')):
    im = Image.open(src).convert('RGB')
    for w in WIDTHS:
        out = src.with_name(f'{src.stem}-{w}.webp')
        size = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
        size.save(out, 'WEBP', quality=72, method=6)
    print(src.name, im.size)
