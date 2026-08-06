import React from 'react';
import './Graphics.scss';

export default function AnalyticsDashboardGraphic() {
  return (
    <div className="custom-graphic-wrapper">
      <svg viewBox="0 0 1200 300" className="playful-svg-graphic" preserveAspectRatio="xMidYMin slice" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <g transform="translate(300, -20) scale(0.85)">

        {/* Dashboard Main Window */}
        <rect x="80" y="40" width="440" height="320" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 25px 50px rgba(15,23,42,0.05))" />
        
        {/* Sidebar */}
        <rect x="80" y="40" width="80" height="320" rx="8" fill="#f8fafc" />
        <rect x="95" y="60" width="50" height="8" rx="4" fill="#cbd5e1" />
        <rect x="95" y="100" width="30" height="6" rx="3" fill="#e2e8f0" />
        <rect x="95" y="120" width="40" height="6" rx="3" fill="#e2e8f0" />
        <rect x="95" y="140" width="35" height="6" rx="3" fill="#e2e8f0" />

        {/* Main Chart Area */}
        <rect x="180" y="60" width="315" height="140" rx="8" fill="#f8fafc" />
        <path d="M 180 100 L 495 100" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 180 150 L 495 150" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />

        {/* Pro Data Line */}
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2b395f" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2b395f" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 200 180 Q 250 110 300 140 T 400 80 T 480 120 L 480 200 L 200 200 Z" fill="url(#lineGrad)" />
        <path d="M 200 180 Q 250 110 300 140 T 400 80 T 480 120" fill="none" stroke="#2b395f" strokeWidth="3" strokeLinecap="round" />
        <circle cx="300" cy="140" r="4" fill="#fff" stroke="#2b395f" strokeWidth="2" />
        <circle cx="400" cy="80" r="4" fill="#fff" stroke="#2b395f" strokeWidth="2" />

        <path d="M 200 150 Q 260 170 320 120 T 460 160" fill="none" stroke="#ff2d88" strokeWidth="2" strokeDasharray="6 6" />

        {/* Bottom Widgets */}
        {/* Widget 1 */}
        <rect x="180" y="220" width="145" height="120" rx="8" fill="#fff" stroke="#f1f5f9" strokeWidth="1" />
        <rect x="195" y="235" width="40" height="6" rx="3" fill="#cbd5e1" />
        
        {/* Bar chart inside widget 1 */}
        <rect x="200" y="300" width="12" height="20" rx="2" fill="#cbd5e1" />
        <rect x="220" y="280" width="12" height="40" rx="2" fill="#ff2d88" />
        <rect x="240" y="260" width="12" height="60" rx="2" fill="#38bdf8" />
        <rect x="260" y="270" width="12" height="50" rx="2" fill="#cbd5e1" />
        <rect x="280" y="240" width="12" height="80" rx="2" fill="#2b395f" />

        {/* Widget 2 */}
        <rect x="350" y="220" width="145" height="120" rx="8" fill="#fff" stroke="#f1f5f9" strokeWidth="1" />
        <rect x="365" y="235" width="60" height="6" rx="3" fill="#cbd5e1" />
        <circle cx="420" cy="290" r="24" fill="none" stroke="#e2e8f0" strokeWidth="8" />
        <circle cx="420" cy="290" r="24" fill="none" stroke="#ff2d88" strokeWidth="8" strokeDasharray="100 150" strokeLinecap="round" />
        <circle cx="420" cy="290" r="24" fill="none" stroke="#2b395f" strokeWidth="8" strokeDasharray="40 150" strokeDashoffset="-100" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
