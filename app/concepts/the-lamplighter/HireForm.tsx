'use client';

import { useState } from 'react';
import { ROOMS } from './data';

const TO = 'hello@thelamplighter.example';

/** Private hire enquiry. On a live site this posts to the landlord; on the concept it opens an email. */
export default function HireForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = [
      `Name: ${f.get('name')}`,
      `Phone: ${f.get('phone')}`,
      `Date: ${f.get('date')}`,
      `Guests: ${f.get('guests')}`,
      `Room: ${f.get('room')}`,
      '',
      String(f.get('message') || ''),
    ].join('\n');
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent('Private hire enquiry')}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <p className="lp-form__done" role="status">
        Thanks. Your email should be open and ready to send. We reply to every enquiry within a day.
      </p>
    );
  }

  return (
    <form className="lp-form" onSubmit={onSubmit}>
      <div className="lp-form__row">
        <label>
          <span>Your name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
      </div>
      <div className="lp-form__row">
        <label>
          <span>Date</span>
          <input name="date" type="date" required />
        </label>
        <label>
          <span>Guests</span>
          <input name="guests" type="number" min={2} max={120} inputMode="numeric" required />
        </label>
      </div>
      <label>
        <span>Room</span>
        <select name="room" defaultValue={ROOMS[0].name}>
          {ROOMS.map((r) => (
            <option key={r.name}>{r.name}</option>
          ))}
          <option>Not sure yet</option>
        </select>
      </label>
      <label>
        <span>Tell us about it (optional)</span>
        <textarea name="message" rows={3} placeholder="Birthday, wake, work do, food needs…" />
      </label>
      <button type="submit" className="lp-btn">
        Send enquiry
      </button>
    </form>
  );
}
