'use client';

import { useState } from 'react';

/** MOT reminder sign-up. On a live site this goes to the garage's reminder list; on the concept it just confirms. */
export default function Reminder() {
  const [done, setDone] = useState(false);
  if (done)
    return (
      <p className="gs-reminder__done" role="status">
        Done. We&rsquo;ll text you a month before it&rsquo;s due, and again a week before. One text, no marketing.
      </p>
    );
  return (
    <form
      className="gs-reminder__form"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label>
        <span className="gs-label">Reg</span>
        <input name="reg" required autoCapitalize="characters" placeholder="AB12 CDE" />
      </label>
      <label>
        <span className="gs-label">Mobile</span>
        <input name="mobile" type="tel" autoComplete="tel" required placeholder="07…" />
      </label>
      <button type="submit" className="gs-btn">
        Remind me
      </button>
    </form>
  );
}
