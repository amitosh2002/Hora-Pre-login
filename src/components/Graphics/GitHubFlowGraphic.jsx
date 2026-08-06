import React from 'react';
import './Graphics.scss';

export default function GitHubFlowGraphic() {
  return (
    <div className="custom-graphic-wrapper">
      <svg viewBox="0 0 1200 300" className="playful-svg-graphic" preserveAspectRatio="xMidYMin slice" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <defs>
          <linearGradient id="repoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2b395f" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g transform="translate(300, -20) scale(0.85)">

        {/* Central Repository */}
        <rect x="240" y="140" width="120" height="120" rx="16" fill="url(#repoGrad)" filter="drop-shadow(0 15px 35px rgba(15,23,42,0.15))" />
        <path d="M 285 180 L 315 180 L 315 190 L 285 190 Z" fill="#475569" rx="2" />
        <path d="M 285 200 L 305 200 L 305 210 L 285 210 Z" fill="#475569" rx="2" />
        <circle cx="300" cy="235" r="14" fill="#ff2d88" />
        <path d="M 296 235 L 300 239 L 306 231" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        {/* Branch Lines */}
        {/* Main Branch */}
        <path d="M 80 200 L 240 200" fill="none" stroke="#cbd5e1" strokeWidth="4" />
        <circle cx="120" cy="200" r="8" fill="#fff" stroke="#94a3b8" strokeWidth="3" />
        <circle cx="180" cy="200" r="8" fill="#fff" stroke="#94a3b8" strokeWidth="3" />

        {/* Feature Branch 1 */}
        <path d="M 120 200 Q 150 120 240 120" fill="none" stroke="#38bdf8" strokeWidth="4" />
        <circle cx="160" cy="140" r="6" fill="#38bdf8" />
        <circle cx="200" cy="120" r="8" fill="#fff" stroke="#38bdf8" strokeWidth="3" />

        {/* Feature Branch 2 */}
        <path d="M 180 200 Q 210 280 240 280" fill="none" stroke="#ff2d88" strokeWidth="4" />
        <circle cx="210" cy="260" r="6" fill="#ff2d88" />

        {/* Outputs */}
        <path d="M 360 200 L 500 200" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6 6" />
        <path d="M 360 160 Q 400 120 480 120" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6 6" />
        
        {/* Target Nodes */}
        <rect x="480" y="180" width="80" height="40" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.05))" />
        <rect x="495" y="197" width="50" height="6" rx="3" fill="#cbd5e1" />
        
        <rect x="460" y="100" width="80" height="40" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.05))" />
        <rect x="475" y="117" width="30" height="6" rx="3" fill="#cbd5e1" />

        </g>
      </svg>
    </div>
  );
}
