import Link from 'next/link';
import { Arrow } from './Icons';
import type { Work } from '@/lib/work';

/** A concept site on its client's own colour: phone screenshots, what it does, and how fast it is. */
export default function WorkCard({ w }: { w: Work }) {
  return (
    <Link className="hb-work__card" href={w.href} data-reveal>
      <div className="hb-work__media" style={{ background: w.bg }}>
        {w.shots.map((s) => (
          <div key={s} className="hb-work__shot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/work/${s}.webp`} alt="" width={780} height={1688} loading="lazy" decoding="async" />
          </div>
        ))}
      </div>
      <div className="hb-work__meta">
        <p className="hb-title">
          <strong>{w.name}</strong> &ndash; {w.kind}
        </p>
        <span className="hb-btn__arrow" aria-hidden="true">
          <Arrow size={14} />
        </span>
      </div>
      <ul className="hb-work__does" aria-label="What it does">
        {w.does.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p className="hb-work__speed">
        <strong>{w.speed.score}</strong>/100 for speed &middot; ready in {w.speed.ready} on a mid-range phone on 4G
      </p>
      <span className="sr-only">Open the concept site</span>
    </Link>
  );
}
