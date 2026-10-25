import Link from 'next/link';
import { Arrow, BearMark } from './Icons';
import { TRADES } from '@/lib/trades';
import { WORK } from '@/lib/work';

export const CONTACT_EMAIL = 'hello@hardtobear.uk';

export default function Footer() {
  return (
    <footer className="hb-footer">
      <div className="hb-wrap">
        <div className="hb-footer__top">
          <div style={{ display: 'grid', gap: 16 }}>
            <p className="hb-heading">
              Let&rsquo;s get you <em>found.</em>
            </p>
            <a className="hb-footer__mail" href={`mailto:${CONTACT_EMAIL}?subject=Pulling%20up%20a%20stool`}>
              {CONTACT_EMAIL}
              <span className="hb-btn__arrow">
                <Arrow size={14} />
              </span>
            </a>
            <p className="hb-soft">Russell replies within a working day.</p>
          </div>
          <nav className="hb-footer__links" aria-label="Footer">
            <Link href="/#work">Work</Link>
            <Link href="/#prices">Prices</Link>
            <Link href="/#questions">Questions</Link>
            {TRADES.map((t) => (
              <Link key={t.slug} href={`/${t.slug}`}>
                {t.nav}
              </Link>
            ))}
            {WORK.map((w) => (
              <Link key={w.href} href={w.href}>
                {w.name}
              </Link>
            ))}
            <a href="#stool">Pull up a stool</a>
          </nav>
        </div>
        <div className="hb-footer__bottom">
          <p>&copy; 2026 Hard To Bear</p>
          <BearMark size={36} />
        </div>
      </div>
      <p className="hb-footer__name" aria-hidden="true">
        Hard To Bear
      </p>
    </footer>
  );
}
