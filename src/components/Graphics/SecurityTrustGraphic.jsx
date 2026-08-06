import React from 'react';
import './Graphics.scss';

export default function SecurityTrustGraphic() {
  return (
    <div className="custom-graphic-wrapper">
      <svg viewBox="0 0 1200 300" className="playful-svg-graphic" preserveAspectRatio="xMidYMin slice" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g transform="translate(300, -20) scale(0.85)">

        {/* Base Platform */}
        <ellipse cx="300" cy="320" rx="140" ry="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />

        {/* Shield Outer */}
        <path d="M 300 60 L 400 100 L 400 200 Q 400 280 300 320 Q 200 280 200 200 L 200 100 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 20px 40px rgba(15,23,42,0.06))" />
        
        {/* Shield Inner */}
        <path d="M 300 80 L 380 115 L 380 195 Q 380 260 300 295 Q 220 260 220 195 L 220 115 Z" fill="#f8fafc" />
        
        {/* Shield Emblem */}
        <path d="M 265 190 L 290 215 L 340 160" fill="none" stroke="#2b395f" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />

        {/* Floating Data UI Elements */}
        {/* Element 1 */}
        <g transform="translate(140, 120)">
          <rect x="0" y="0" width="80" height="50" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" />
          <rect x="15" y="15" width="20" height="6" rx="3" fill="#cbd5e1" />
          <rect x="15" y="30" width="40" height="6" rx="3" fill="#f1f5f9" />
          <circle cx="65" cy="25" r="8" fill="#38bdf8" opacity="0.8" />
        </g>

        {/* Element 2 */}
        <g transform="translate(380, 200)">
          <rect x="0" y="0" width="90" height="60" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" />
          <rect x="15" y="15" width="60" height="6" rx="3" fill="#f1f5f9" />
          <rect x="15" y="30" width="30" height="6" rx="3" fill="#cbd5e1" />
          <rect x="15" y="45" width="45" height="6" rx="3" fill="#f1f5f9" />
          <path d="M 70 35 L 75 40 L 80 32" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Element 3 (Lock) */}
        <g transform="translate(360, 90)">
          <rect x="0" y="0" width="40" height="40" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" />
          <rect x="12" y="20" width="16" height="12" rx="2" fill="#ff2d88" />
          <path d="M 16 20 L 16 14 Q 16 10 20 10 Q 24 10 24 14 L 24 20" fill="none" stroke="#ff2d88" strokeWidth="2" />
        </g>

        </g>
      </svg>
    </div>
  );
}
