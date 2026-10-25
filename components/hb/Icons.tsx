export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
      <path d="M4 12 12 4M5.5 4H12v6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** The bear mark: the only place the bear appears. */
export function BearMark({ size = 30 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
      <circle cx="17" cy="16" r="9" fill="#F5A524" />
      <circle cx="47" cy="16" r="9" fill="#F5A524" />
      <ellipse cx="32" cy="35" rx="22" ry="21" fill="#F5A524" />
      <ellipse cx="32" cy="43" rx="10" ry="8" fill="#121110" />
      <ellipse cx="32" cy="39.5" rx="3.8" ry="2.8" fill="#F5A524" />
      <circle cx="24" cy="30" r="2.6" fill="#121110" />
      <circle cx="40" cy="30" r="2.6" fill="#121110" />
    </svg>
  );
}
