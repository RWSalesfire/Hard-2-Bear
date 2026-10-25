import { PHOTOS, type PhotoId } from '@/lib/photos';

type Props = {
  id: PhotoId;
  className?: string;
  /** Intrinsic size for layout; the image is cropped to its frame with object-fit. */
  width?: number;
  height?: number;
  priority?: boolean;
  /** How wide the photo shows, for picking the right file. Defaults to full width on phones, half on desktop. */
  sizes?: string;
};

// Widths made by scripts/photo-sizes.py.
const WIDTHS = [640, 1080, 1600];

/** A photo from the slot list, or a labelled placeholder until the photo is in. */
export default function Photo({ id, className = '', width = 1600, height = 1000, priority = false, sizes = '(min-width: 1024px) 50vw, 100vw' }: Props) {
  const p = PHOTOS[id] as (typeof PHOTOS)[PhotoId] & { src?: string };
  if (p.src) {
    const base = p.src.replace(/\.jpg$/, '');
    const webp = p.src.endsWith('.jpg') ? WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(', ') : undefined;
    return (
      <picture className="photo-pic">
        {webp && <source type="image/webp" srcSet={webp} sizes={sizes} />}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={`photo ${className}`}
          src={p.src}
          alt={p.alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          decoding={priority ? 'sync' : 'async'}
        />
      </picture>
    );
  }
  return (
    <div className={`photo photo--slot ${className}`} style={{ background: p.tone }} role="img" aria-label={p.alt} data-photo-slot={id}>
      <span>Photo to come: {p.alt}</span>
    </div>
  );
}
