import StoolForm from './StoolForm';
import { BearMark } from './Icons';

/** The closing "pull up a stool" section, on every agency page. */
export default function StoolCta({ trade = '' }: { trade?: string }) {
  return (
    <section id="stool" className="hb-cta" aria-labelledby="stool-title">
      <div className="hb-cta__card">
        <div style={{ display: 'grid', gap: 20 }}>
          <h2 id="stool-title" className="hb-display">
            Pull up <em>a stool.</em>
          </h2>
          <p className="hb-lead">Fifteen minutes, in person or on the phone. We&rsquo;ll tell you straight whether a website is worth it.</p>
          <p className="hb-cta__who">
            <span>
              <BearMark size={34} />
            </span>
            You&rsquo;ll deal with Russell from start to finish. No call centre, no account manager, no runaround. He replies within a working day.
          </p>
          <p style={{ fontWeight: 700 }}>Last orders guarantee: live in seven days, or your first month of care is on us.</p>
        </div>
        <StoolForm defaultTrade={trade} />
      </div>
    </section>
  );
}
