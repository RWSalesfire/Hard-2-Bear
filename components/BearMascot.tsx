'use client';

import { motion } from 'framer-motion';

interface BearMascotProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export default function BearMascot({ size = 'medium', className = '' }: BearMascotProps) {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-48 h-48',
    large: 'w-64 h-64',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`${sizeClasses[size]} ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Bear Head */}
        <circle cx="100" cy="100" r="60" fill="#8B4513" />

        {/* Left Ear */}
        <circle cx="70" cy="55" r="20" fill="#8B4513" />
        <circle cx="70" cy="55" r="12" fill="#D2691E" />

        {/* Right Ear */}
        <circle cx="130" cy="55" r="20" fill="#8B4513" />
        <circle cx="130" cy="55" r="12" fill="#D2691E" />

        {/* Face/Snout */}
        <ellipse cx="100" cy="110" rx="35" ry="30" fill="#D2691E" />

        {/* Left Eye */}
        <circle cx="85" cy="90" r="6" fill="#1A237E" />
        <circle cx="87" cy="88" r="2" fill="white" />

        {/* Right Eye */}
        <circle cx="115" cy="90" r="6" fill="#1A237E" />
        <circle cx="117" cy="88" r="2" fill="white" />

        {/* Nose */}
        <ellipse cx="100" cy="105" rx="8" ry="6" fill="#263238" />

        {/* Mouth - slight smile */}
        <path
          d="M 90 115 Q 100 120 110 115"
          stroke="#263238"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Eyebrows - giving character */}
        <path
          d="M 78 82 Q 85 80 92 82"
          stroke="#5D4037"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 108 82 Q 115 80 122 82"
          stroke="#5D4037"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
