import React from 'react';
import './Graphics.scss';

export default function AnalyticsDashboardGraphic() {
  return (
    <div className="custom-graphic-wrapper">
      <svg viewBox="0 0 600 400" className="playful-svg-graphic" preserveAspectRatio="xMidYMid meet" style={{ width: '100%', height: '100%' }}>
        
        {/* Background elements */}
        <circle cx="60" cy="300" r="30" fill="#8b5cf6" opacity="0.8" />
        <circle cx="100" cy="340" r="8" fill="#8b5cf6" opacity="0.6" />
        <rect x="0" y="0" width="80" height="400" fill="#f8fafc" opacity="0.5" />
        
        {/* Floor Shadow */}
        <ellipse cx="490" cy="342" rx="45" ry="4" fill="#e2e8f0" />
        
        {/* === The Dashboard / Floating UI === */}
        {/* Main Browser Window */}
        <rect x="140" y="60" width="320" height="230" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 20px 40px rgba(0,0,0,0.05))" />
        
        {/* Browser Dots */}
        <circle cx="160" cy="80" r="3.5" fill="#cbd5e1" />
        <circle cx="172" cy="80" r="3.5" fill="#cbd5e1" />
        <circle cx="184" cy="80" r="3.5" fill="#cbd5e1" />
        
        {/* Inner Content Area Frame */}
        <rect x="160" y="100" width="280" height="170" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
        
        {/* Bottom Element in Browser */}
        <circle cx="185" cy="240" r="14" fill="#a78bfa" />
        <rect x="210" y="235" width="100" height="4" rx="2" fill="#8b5cf6" />
        <rect x="210" y="245" width="50" height="4" rx="2" fill="#cbd5e1" />
        
        {/* Prominent Floating Purple Card (The core focus of the illustration) */}
        <rect x="190" y="120" width="190" height="100" rx="6" fill="#8b5cf6" filter="drop-shadow(0 15px 30px rgba(139,92,246,0.25))" />
        <rect x="220" y="145" width="130" height="6" rx="3" fill="#ffffff" opacity="0.9" />
        <rect x="220" y="165" width="100" height="6" rx="3" fill="#ffffff" opacity="0.9" />
        <rect x="220" y="185" width="60" height="6" rx="3" fill="#ffffff" opacity="0.9" />
        
        {/* === Stylized Character (Looking Left at the UI) === */}
        {/* Back Leg */}
        <path d="M 505 250 L 525 338 L 505 338 L 490 250 Z" fill="#1e293b" />
        {/* Back Shoe */}
        <rect x="500" y="336" width="28" height="6" rx="3" fill="#0f172a" />
        
        {/* Front Leg */}
        <path d="M 480 250 L 470 338 L 490 338 L 498 250 Z" fill="#334155" />
        {/* Front Shoe */}
        <rect x="465" y="336" width="28" height="6" rx="3" fill="#0f172a" />
        
        {/* Torso (Purple Top) */}
        <path d="M 485 190 Q 515 200 515 230 L 505 260 L 470 260 Q 465 220 485 190 Z" fill="#a78bfa" />
        
        {/* Arm / Hand */}
        <path d="M 488 200 Q 460 230 455 255" fill="none" stroke="#d97706" strokeWidth="8" strokeLinecap="round" />
        
        {/* Face / Head */}
        <circle cx="492" cy="172" r="14" fill="#d97706" />
        
        {/* Flowing Dark Hair */}
        <path d="M 494 154 C 518 154, 528 174, 520 200 C 535 210, 520 235, 510 230 C 500 220, 500 200, 492 188 C 480 178, 480 160, 494 154 Z" fill="#0f172a" />

      </svg>
    </div>
  );
}
