'use client';

import { useEffect, useRef, useState } from 'react';

type Item = { id: number; text: string; fresh?: boolean };

const START: Item[] = [
  { id: 1, text: 'Websites for local trades' },
  { id: 2, text: 'Live in seven days' },
  { id: 3, text: 'Prices on the beer mats' },
  { id: 4, text: 'Quiz night: Wednesday, 8pm' },
];

// The demo text that arrives on its own, showing the care plan at work.
const DEMO = { from: 'The Red Lion', ask: 'Can you move quiz night to Thursday?', line: 'Quiz night: Thursday, 8pm' };

const MAX_LEN = 48;

export default function SpecialsBoard() {
  const [items, setItems] = useState<Item[]>(START);
  const [message, setMessage] = useState<{ from: string; text: string } | null>(null);
  const [changed, setChanged] = useState(false);
  const [draft, setDraft] = useState('');
  const [ready, setReady] = useState(false);
  const nextId = useRef(10);
  const touched = useRef(false);
  const timers = useRef<number[]>([]);

  const apply = (line: string) => {
    setItems((current) => {
      const kept = current.map((i) => ({ ...i, fresh: false }));
      const replaceAt = kept.findIndex((i) => i.text.startsWith('Quiz night'));
      const next = { id: nextId.current++, text: line, fresh: true };
      if (replaceAt >= 0 && line.startsWith('Quiz night')) {
        kept[replaceAt] = next;
        return kept;
      }
      return [...kept.slice(-4), next].slice(-5);
    });
    setChanged(true);
  };

  useEffect(() => {
    setReady(true);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const t1 = window.setTimeout(() => {
      if (touched.current) return;
      setMessage({ from: DEMO.from, text: DEMO.ask });
    }, reduce ? 0 : 2200);
    const t2 = window.setTimeout(() => {
      if (touched.current) return;
      apply(DEMO.line);
    }, reduce ? 0 : 3600);
    timers.current = [t1, t2];
    return () => timers.current.forEach((t) => window.clearTimeout(t));
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = draft.trim().slice(0, MAX_LEN);
    if (!text) return;
    touched.current = true;
    timers.current.forEach((t) => window.clearTimeout(t));
    setMessage({ from: 'You', text });
    setDraft('');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(() => apply(text), reduce ? 0 : 700);
  };

  return (
    <div className="tile specials">
      <h2 className="specials__title">Today&rsquo;s specials</h2>
      <ul className="specials__list" aria-live="polite">
        {items.map((item) => (
          <li key={item.id} className={`specials__item${item.fresh ? ' is-new' : ''}`}>
            {item.text}
          </li>
        ))}
      </ul>
      <div className="specials__foot">
        {message && (
          <p className="specials__text-msg" key={message.text}>
            <span className="sr-only">Text from </span>
            {message.from}: {message.text}
          </p>
        )}
        {changed && <p className="specials__note">Changed by text. That&rsquo;s the care plan.</p>}
        {ready && (
          <form className="specials__form" onSubmit={onSubmit}>
            <label htmlFor="board-text" className="sr-only">
              Text the board a change
            </label>
            <input
              id="board-text"
              value={draft}
              maxLength={MAX_LEN}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Try it: Pie of the day, £14"
              autoComplete="off"
            />
            <button type="submit" className="button">
              Send
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
