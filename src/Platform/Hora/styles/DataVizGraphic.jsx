import React from 'react';
import './DataVizGraphic.scss';

export default function DataVizGraphic() {
  // Professional data nodes
  const nodes = [];
  const rows = 6;
  const cols = 12;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // Create a wave pattern
      const yOffset = Math.sin(c * 0.5) * 30;
      const x = 50 + c * 40;
      const y = 100 + r * 40 + yOffset;
      
      const isHighlighted = Math.random() > 0.85;
      const size = isHighlighted ? 6 : 4;
      const color = isHighlighted ? '#ff2d88' : '#cbd5e1';

      nodes.push(
        <circle key={`${r}-${c}`} cx={x} cy={y} r={size} fill={color} opacity={isHighlighted ? 1 : 0.4} />
      );

      // Draw some connecting lines
      if (c > 0 && Math.random() > 0.5) {
        nodes.push(
          <line key={`l-${r}-${c}`} x1={x - 40} y1={y - Math.sin((c-1)*0.5)*30 + yOffset - yOffset} x2={x} y2={y} stroke="#e2e8f0" strokeWidth="1" />
        );
      }
    }
  }

  return (
    <div className="custom-graphic-wrapper">
      <svg viewBox="0 0 1200 300" className="playful-svg-graphic" preserveAspectRatio="xMidYMin slice" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <defs>
          <linearGradient id="proGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>

        {/* Professional Background Grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g transform="translate(300, -20) scale(0.85)">

        {/* Data Nodes */}
        {nodes}
        
        {/* Central Overlay UI */}
        <rect x="150" y="120" width="300" height="160" rx="12" fill="#ffffff" filter="drop-shadow(0 20px 40px rgba(15,23,42,0.08))" />
        <rect x="150" y="120" width="300" height="40" rx="12" fill="#f8fafc" />
        <circle cx="170" cy="140" r="6" fill="#cbd5e1" />
        <circle cx="190" cy="140" r="6" fill="#cbd5e1" />
        <circle cx="210" cy="140" r="6" fill="#cbd5e1" />

        <path d="M 180 230 Q 250 160 320 200 T 420 180" fill="none" stroke="#2b395f" strokeWidth="3" strokeLinecap="round" />
        <circle cx="420" cy="180" r="5" fill="#2b395f" />
        
        <path d="M 180 260 Q 230 220 280 250 T 400 210" fill="none" stroke="#ff2d88" strokeWidth="3" strokeLinecap="round" />
        <circle cx="400" cy="210" r="5" fill="#ff2d88" />

        <rect x="180" y="180" width="40" height="6" rx="3" fill="#e2e8f0" />
        <rect x="180" y="195" width="80" height="6" rx="3" fill="#f1f5f9" />
        </g>
      </svg>
    </div>
  );
}
