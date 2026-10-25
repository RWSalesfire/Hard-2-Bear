import { PHOTOS, type PhotoId } from '@/lib/photos';

type Props = {
  id: PhotoId;
  className?: string;
  /** Intrinsic size for layout; the image is cropped to its frame with object-fit. */
  width?: number;
  height?: number;
  priority?: boolean;
};

/** A photo from the slot list, or a labelled placeholder until the photo is in. */
export default function Photo({ id, className = '', width = 1600, height = 1000, priority = false }: Props) {
  const p = PHOTOS[id] as (typeof PHOTOS)[PhotoId] & { src?: string };
  if (p.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={`photo ${className}`}
        src={p.src}
        alt={p.alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    );
  }
  return (
    <div className={`photo photo--slot ${className}`} style={{ background: p.tone }} role="img" aria-label={p.alt} data-photo-slot={id}>
      <span>Photo to come: {p.alt}</span>
    </div>
  );
}
