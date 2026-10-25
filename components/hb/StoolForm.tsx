'use client';

import { useState } from 'react';
import { Arrow } from './Icons';

const TRADES = ['Pub or restaurant', 'Garage or mechanic', 'Driving instructor', 'Barber or salon', 'Something else'];

export default function StoolForm({ defaultTrade = '' }: { defaultTrade?: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus('sending');
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.get('name'), phone: form.get('phone'), trade: form.get('trade') }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'That didn’t send. Email us instead.');
      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'That didn’t send. Email us instead.');
    }
  };

  if (status === 'sent') {
    return (
      <p className="hb-stool__status" role="status">
        Stool&rsquo;s yours. Russell will ring you within a working day.
      </p>
    );
  }

  return (
    <form className="hb-stool" onSubmit={onSubmit}>
      <div className="hb-stool__pair">
        <label className="sr-only" htmlFor="stool-name">
          Your name
        </label>
        <input id="stool-name" name="name" placeholder="Your name" autoComplete="name" required />
        <label className="sr-only" htmlFor="stool-phone">
          Your phone number
        </label>
        <input id="stool-phone" name="phone" type="tel" placeholder="Phone number" autoComplete="tel" required />
      </div>
      <label className="sr-only" htmlFor="stool-trade">
        Your trade
      </label>
      <select id="stool-trade" name="trade" defaultValue={defaultTrade} required>
        <option value="" disabled>
          What&rsquo;s your trade?
        </option>
        {TRADES.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <button type="submit" className="hb-btn hb-btn--ink" disabled={status === 'sending'}>
        {status === 'sending' ? 'Pulling it up…' : 'Pull up a stool'}
        <span className="hb-btn__arrow">
          <Arrow size={14} />
        </span>
      </button>
      {status === 'error' && (
        <p className="hb-stool__status" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
