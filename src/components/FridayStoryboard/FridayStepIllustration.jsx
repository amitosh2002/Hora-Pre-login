import React from 'react';
import './FridayStepIllustration.scss';

/**
 * Animated SVG illustrations for each Friday Storyboard stage.
 * Visually depicts the AI/deterministic operations with smooth CSS animations.
 */
export default function FridayStepIllustration({ sceneIndex, scene, progress = 0.5 }) {
  const iconKey = scene?.iconKey || '';
  const sceneId = scene?.id || '';

  // 1. TICKET ARRIVAL & PARSER INTAKE (Scene 1)
  if (sceneId === 'ticket-arrives' || sceneId === 'intake-classify' || iconKey === 'Inbox') {
    return (
      <div className="friday-step-illustration friday-step-illustration--intake" aria-hidden="true">
        <svg viewBox="0 0 320 150" className="friday-step-illustration__svg" fill="none">
          <defs>
            <linearGradient id="ticketGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
            <linearGradient id="laserBeamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.9)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
            <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Background grid dots */}
          <g opacity="0.4">
            <circle cx="30" cy="30" r="1.5" fill="#cbd5e1" />
            <circle cx="60" cy="30" r="1.5" fill="#cbd5e1" />
            <circle cx="90" cy="30" r="1.5" fill="#cbd5e1" />
            <circle cx="230" cy="30" r="1.5" fill="#cbd5e1" />
            <circle cx="260" cy="30" r="1.5" fill="#cbd5e1" />
            <circle cx="290" cy="30" r="1.5" fill="#cbd5e1" />
            <circle cx="30" cy="120" r="1.5" fill="#cbd5e1" />
            <circle cx="60" cy="120" r="1.5" fill="#cbd5e1" />
            <circle cx="260" cy="120" r="1.5" fill="#cbd5e1" />
            <circle cx="290" cy="120" r="1.5" fill="#cbd5e1" />
          </g>

          {/* GitHub Webhook Stream Line */}
          <path 
            d="M 20 75 C 60 75, 70 75, 95 75" 
            stroke="#c4b5fd" 
            strokeWidth="2.5" 
            strokeDasharray="4 4" 
            className="fsi-dash-flow"
          />
          <circle cx="20" cy="75" r="5" fill="#8b5cf6" />
          <circle cx="20" cy="75" r="9" stroke="#ddd6fe" strokeWidth="1.5" className="fsi-pulse-ring" />

          {/* Main Floating Ticket Card */}
          <g className="fsi-float-card" transform="translate(100, 24)">
            <rect 
              x="0" 
              y="0" 
              width="150" 
              height="102" 
              rx="10" 
              fill="url(#ticketGrad)" 
              stroke="#cbd5e1" 
              strokeWidth="1.5" 
              filter="drop-shadow(0 6px 14px rgba(139, 92, 246, 0.12))"
            />
            
            {/* Header chip */}
            <rect x="12" y="14" width="48" height="15" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
            <text x="18" y="25" fill="#2563eb" fontSize="9" fontWeight="800" fontFamily="sans-serif">
              {scene?.ticket?.key || 'HOR-214'}
            </text>

            <rect x="66" y="14" width="34" height="15" rx="4" fill="#fef3c7" />
            <text x="72" y="25" fill="#b45309" fontSize="8" fontWeight="700" fontFamily="sans-serif">
              {scene?.ticket?.priority || 'P1'}
            </text>

            {/* Ticket Title Bars */}
            <rect x="12" y="40" width="105" height="7" rx="3.5" fill="#1e293b" />
            <rect x="12" y="52" width="75" height="5" rx="2.5" fill="#94a3b8" />

            {/* Extracted Tag Chips */}
            <g className="fsi-tag-chip-1">
              <rect x="12" y="68" width="38" height="14" rx="4" fill="#ede9fe" stroke="#ddd6fe" strokeWidth="0.8" />
              <text x="17" y="78" fill="#6d28d9" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Backend</text>
            </g>

            <g className="fsi-tag-chip-2">
              <rect x="54" y="68" width="40" height="14" rx="4" fill="#ede9fe" stroke="#ddd6fe" strokeWidth="0.8" />
              <text x="59" y="78" fill="#6d28d9" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Node.js</text>
            </g>

            <g className="fsi-tag-chip-3">
              <rect x="98" y="68" width="40" height="14" rx="4" fill="#ede9fe" stroke="#ddd6fe" strokeWidth="0.8" />
              <text x="103" y="78" fill="#6d28d9" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Redis</text>
            </g>

            {/* Laser Scanning Beam */}
            <g className="fsi-scan-laser">
              <rect x="2" y="0" width="146" height="3" fill="url(#laserBeamGrad)" />
              <ellipse cx="75" cy="1.5" rx="50" ry="2" fill="#8b5cf6" filter="url(#purpleGlow)" />
            </g>
          </g>

          {/* Right Certainty Gauge Node */}
          <g transform="translate(270, 75)">
            <circle cx="0" cy="0" r="22" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="22" stroke="#10b981" strokeWidth="3" strokeDasharray="110 30" className="fsi-spin-dial" />
            <text x="0" y="4" textAnchor="middle" fill="#047857" fontSize="10" fontWeight="800" fontFamily="sans-serif">
              82%
            </text>
            <circle cx="0" cy="0" r="28" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" className="fsi-pulse-ring" />
          </g>

          {/* Connecting data spark */}
          <path 
            d="M 250 75 L 270 75" 
            stroke="#10b981" 
            strokeWidth="2" 
            strokeDasharray="3 3"
            className="fsi-dash-flow" 
          />
        </svg>
      </div>
    );
  }

  // 2. CONTEXT CHECK & DEVELOPER GRAPH (Scene 2)
  if (sceneId === 'context-check' || sceneId === 'team-context' || iconKey === 'Users') {
    return (
      <div className="friday-step-illustration friday-step-illustration--context" aria-hidden="true">
        <svg viewBox="0 0 320 150" className="friday-step-illustration__svg" fill="none">
          <defs>
            <linearGradient id="priyaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="arjunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f87171" />
            </linearGradient>
            <linearGradient id="meeraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>

          {/* Central Repo Hub */}
          <g transform="translate(60, 75)">
            <rect x="-35" y="-30" width="70" height="60" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.04))" />
            <circle cx="0" cy="-6" r="14" fill="#f5f3ff" />
            <path d="M -5 -6 L 0 -11 L 5 -6 M 0 -11 L 0 3" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" />
            <text x="0" y="18" textAnchor="middle" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="sans-serif">Repo Context</text>
          </g>

          {/* Connection Curves with Pulse Dots */}
          <path d="M 95 60 C 130 40, 160 38, 200 38" stroke="#8b5cf6" strokeWidth="2.5" strokeDasharray="4 4" className="fsi-dash-flow" />
          <path d="M 95 75 C 130 75, 160 75, 200 75" stroke="#fca5a5" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 95 90 C 130 110, 160 112, 200 112" stroke="#93c5fd" strokeWidth="2" strokeDasharray="4 4" className="fsi-dash-flow" />

          {/* Developer 1: Priya / Marcus (Top Match, Headroom OK) */}
          <g transform="translate(225, 38)" className="fsi-node-pulse">
            <rect x="-20" y="-18" width="95" height="36" rx="8" fill="#ffffff" stroke="#ddd6fe" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(139,92,246,0.1))" />
            <circle cx="-5" cy="0" r="12" fill="url(#priyaGrad)" />
            <text x="-5" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="800" fontFamily="sans-serif">P</text>
            <text x="18" y="-3" fill="#0f172a" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Priya</text>
            <text x="18" y="9" fill="#10b981" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">60% · 2 slots</text>
            <circle cx="65" cy="0" r="4" fill="#10b981" className="fsi-pulse-dot" />
          </g>

          {/* Developer 2: Arjun / Sarah (Overloaded, Shield Protected) */}
          <g transform="translate(225, 75)">
            <rect x="-20" y="-16" width="95" height="32" rx="8" fill="#fff5f5" stroke="#fecaca" strokeWidth="1.2" />
            <circle cx="-5" cy="0" r="11" fill="url(#arjunGrad)" />
            <text x="-5" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800" fontFamily="sans-serif">A</text>
            <text x="18" y="-2" fill="#475569" fontSize="9" fontWeight="700" fontFamily="sans-serif">Arjun</text>
            <text x="18" y="8" fill="#ef4444" fontSize="7" fontWeight="700" fontFamily="sans-serif">100% · Protected</text>
          </g>

          {/* Developer 3: Meera / Dev (Available) */}
          <g transform="translate(225, 112)">
            <rect x="-20" y="-16" width="95" height="32" rx="8" fill="#ffffff" stroke="#bfdbfe" strokeWidth="1.2" />
            <circle cx="-5" cy="0" r="11" fill="url(#meeraGrad)" />
            <text x="-5" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800" fontFamily="sans-serif">M</text>
            <text x="18" y="-2" fill="#475569" fontSize="9" fontWeight="700" fontFamily="sans-serif">Meera</text>
            <text x="18" y="8" fill="#3b82f6" fontSize="7" fontWeight="700" fontFamily="sans-serif">40% · 3 slots</text>
          </g>
        </svg>
      </div>
    );
  }

  // 3. SCORING MATRIX (Scene 3)
  if (sceneId === 'scoring' || iconKey === 'Sliders') {
    return (
      <div className="friday-step-illustration friday-step-illustration--scoring" aria-hidden="true">
        <svg viewBox="0 0 320 150" className="friday-step-illustration__svg" fill="none">
          {/* Factor calculation Equalizer Bars */}
          <g transform="translate(40, 20)">
            <rect x="0" y="0" width="130" height="110" rx="10" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.5" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.03))" />
            <text x="12" y="20" fill="#64748b" fontSize="8.5" fontWeight="700" fontFamily="sans-serif">6-Factor Weights</text>

            {/* Bar 1: Skill */}
            <g transform="translate(12, 32)">
              <rect x="0" y="0" width="106" height="7" rx="3.5" fill="#f1f5f9" />
              <rect x="0" y="0" width="95" height="7" rx="3.5" fill="#8b5cf6" className="fsi-bar-grow-1" />
            </g>

            {/* Bar 2: Experience */}
            <g transform="translate(12, 47)">
              <rect x="0" y="0" width="106" height="7" rx="3.5" fill="#f1f5f9" />
              <rect x="0" y="0" width="82" height="7" rx="3.5" fill="#3b82f6" className="fsi-bar-grow-2" />
            </g>

            {/* Bar 3: Similar Work */}
            <g transform="translate(12, 62)">
              <rect x="0" y="0" width="106" height="7" rx="3.5" fill="#f1f5f9" />
              <rect x="0" y="0" width="70" height="7" rx="3.5" fill="#0ea5e9" className="fsi-bar-grow-3" />
            </g>

            {/* Bar 4: Capacity */}
            <g transform="translate(12, 77)">
              <rect x="0" y="0" width="106" height="7" rx="3.5" fill="#f1f5f9" />
              <rect x="0" y="0" width="58" height="7" rx="3.5" fill="#10b981" className="fsi-bar-grow-4" />
            </g>

            {/* Bar 5: Availability */}
            <g transform="translate(12, 92)">
              <rect x="0" y="0" width="106" height="7" rx="3.5" fill="#f1f5f9" />
              <rect x="0" y="0" width="75" height="7" rx="3.5" fill="#f59e0b" className="fsi-bar-grow-5" />
            </g>
          </g>

          {/* Connection Arc */}
          <path d="M 180 75 C 200 75, 210 75, 225 75" stroke="#c084fc" strokeWidth="2.5" strokeDasharray="3 3" className="fsi-dash-flow" />

          {/* Total Score Dial */}
          <g transform="translate(255, 75)" className="fsi-dial-container">
            <circle cx="0" cy="0" r="38" fill="#faf5ff" stroke="#ddd6fe" strokeWidth="2" />
            <circle cx="0" cy="0" r="38" stroke="#8b5cf6" strokeWidth="4" strokeDasharray="210 40" className="fsi-spin-dial" />
            <text x="0" y="-4" textAnchor="middle" fill="#0f172a" fontSize="18" fontWeight="900" fontFamily="sans-serif">87</text>
            <text x="0" y="10" textAnchor="middle" fill="#6d28d9" fontSize="8" fontWeight="800" fontFamily="sans-serif">TOTAL PTS</text>
            <rect x="-30" y="18" width="60" height="13" rx="4" fill="#ede9fe" />
            <text x="0" y="27" textAnchor="middle" fill="#581c87" fontSize="7" fontWeight="700" fontFamily="sans-serif">RANK #1 MATCH</text>
          </g>
        </svg>
      </div>
    );
  }

  // 4. POLICY GATE (Scene 4)
  if (sceneId === 'policy-gate' || iconKey === 'ShieldAlert') {
    return (
      <div className="friday-step-illustration friday-step-illustration--policy" aria-hidden="true">
        <svg viewBox="0 0 320 150" className="friday-step-illustration__svg" fill="none">
          {/* Central Guard Gate Shield */}
          <g transform="translate(160, 75)" className="fsi-shield-pulse">
            <rect x="-35" y="-35" width="70" height="70" rx="14" fill="#f5f3ff" stroke="#ddd6fe" strokeWidth="2" filter="drop-shadow(0 6px 16px rgba(124,58,237,0.12))" />
            <path d="M 0 -18 L 15 -10 L 15 8 C 15 18, 0 24, 0 24 C 0 24, -15 18, -15 8 L -15 -10 Z" fill="#8b5cf6" />
            <path d="M -5 3 L -1 7 L 6 -1" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="0" cy="0" r="44" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" className="fsi-spin-dial" />
          </g>

          {/* Ticket 1 passing to Auto-Assign */}
          <g transform="translate(45, 50)" className="fsi-pass-ticket">
            <rect x="0" y="0" width="75" height="36" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
            <text x="10" y="16" fill="#2563eb" fontSize="8" fontWeight="800" fontFamily="sans-serif">HOR-214</text>
            <text x="10" y="27" fill="#64748b" fontSize="7" fontFamily="sans-serif">Score 87 · Clean</text>
          </g>
          <path d="M 125 68 L 195 48 C 220 38, 240 38, 275 38" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="fsi-dash-flow" />
          <g transform="translate(275, 38)">
            <rect x="-5" y="-12" width="46" height="24" rx="6" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="1" />
            <text x="18" y="3" textAnchor="middle" fill="#047857" fontSize="8" fontWeight="800" fontFamily="sans-serif">PASS</text>
          </g>

          {/* Ticket 2 stopped: Dependency block */}
          <g transform="translate(45, 95)">
            <rect x="0" y="0" width="75" height="36" rx="6" fill="#fffbeb" stroke="#fde68a" strokeWidth="1.2" />
            <text x="10" y="16" fill="#b45309" fontSize="8" fontWeight="800" fontFamily="sans-serif">HOR-230</text>
            <text x="10" y="27" fill="#b45309" fontSize="7" fontFamily="sans-serif">Blocked by #228</text>
          </g>
          <path d="M 125 110 L 140 102" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          <g transform="translate(275, 110)">
            <rect x="-5" y="-12" width="46" height="24" rx="6" fill="#fff7ed" stroke="#fed7aa" strokeWidth="1" />
            <text x="18" y="3" textAnchor="middle" fill="#c2410c" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">HOLD</text>
          </g>
        </svg>
      </div>
    );
  }

  // 5. SPRINT BOARD PLACEMENT (Scene 5)
  if (sceneId === 'board' || sceneId === 'board-dispatch' || iconKey === 'LayoutDashboard') {
    return (
      <div className="friday-step-illustration friday-step-illustration--board" aria-hidden="true">
        <svg viewBox="0 0 320 150" className="friday-step-illustration__svg" fill="none">
          {/* Backlog Column */}
          <g transform="translate(30, 20)">
            <rect x="0" y="0" width="115" height="110" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
            <text x="10" y="16" fill="#64748b" fontSize="8" fontWeight="700" fontFamily="sans-serif">Backlog (Triage)</text>
            
            {/* Ghost card slot */}
            <rect x="10" y="26" width="95" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" />
            <rect x="10" y="66" width="95" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" opacity="0.6" />
          </g>

          {/* In Progress Column */}
          <g transform="translate(175, 20)">
            <rect x="0" y="0" width="115" height="110" rx="8" fill="#faf5ff" stroke="#ede9fe" strokeWidth="1" />
            <text x="10" y="16" fill="#7c3aed" fontSize="8" fontWeight="800" fontFamily="sans-serif">In Progress (Assigned)</text>

            {/* Landing Card */}
            <g className="fsi-card-landing" transform="translate(10, 26)">
              <rect x="0" y="0" width="95" height="48" rx="6" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1.5" filter="drop-shadow(0 4px 10px rgba(139,92,246,0.15))" />
              <text x="8" y="14" fill="#2563eb" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">HOR-214</text>
              <text x="8" y="26" fill="#1e293b" fontSize="7" fontWeight="700" fontFamily="sans-serif">Add retry sender</text>
              
              {/* Owner Chip */}
              <rect x="8" y="32" width="46" height="11" rx="3" fill="#ede9fe" />
              <circle cx="13" cy="37.5" r="3.5" fill="#8b5cf6" />
              <text x="19" y="40" fill="#581c87" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">Priya · 87</text>
            </g>
          </g>

          {/* Animated Transfer Arc */}
          <path d="M 90 48 Q 150 10 185 45" stroke="#8b5cf6" strokeWidth="2.5" strokeDasharray="4 4" className="fsi-dash-flow" />
          <circle cx="150" cy="24" r="5" fill="#8b5cf6" className="fsi-pulse-dot" />
        </svg>
      </div>
    );
  }

  // 6. DYNAMIC SPRINT REBALANCE (Scene 6)
  if (sceneId === 'rebalance' || sceneId === 'rebalance-ship' || iconKey === 'Scale') {
    return (
      <div className="friday-step-illustration friday-step-illustration--rebalance" aria-hidden="true">
        <svg viewBox="0 0 320 150" className="friday-step-illustration__svg" fill="none">
          {/* Developer A: Overloaded -> Cooled down */}
          <g transform="translate(60, 60)">
            <circle cx="0" cy="0" r="28" fill="#fff5f5" stroke="#fecaca" strokeWidth="2" />
            <circle cx="0" cy="0" r="20" fill="#ef4444" opacity="0.15" />
            <text x="0" y="-3" textAnchor="middle" fill="#b91c1c" fontSize="13" fontWeight="900" fontFamily="sans-serif">120%</text>
            <text x="0" y="8" textAnchor="middle" fill="#ef4444" fontSize="7" fontWeight="800" fontFamily="sans-serif">BEFORE</text>
            <text x="0" y="42" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="800" fontFamily="sans-serif">Arjun</text>
            <text x="0" y="53" textAnchor="middle" fill="#10b981" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Settled: 85%</text>
          </g>

          {/* Flying Ticket Block */}
          <g className="fsi-flying-ticket">
            <rect x="0" y="0" width="55" height="24" rx="5" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1.5" filter="drop-shadow(0 4px 10px rgba(139,92,246,0.2))" />
            <text x="6" y="11" fill="#7c3aed" fontSize="7" fontWeight="800" fontFamily="sans-serif">Shift 2 pts</text>
            <text x="6" y="19" fill="#64748b" fontSize="6" fontFamily="sans-serif">HOR-192</text>
          </g>

          {/* Curve Transfer Guide */}
          <path d="M 90 60 C 130 20, 190 20, 230 60" stroke="#8b5cf6" strokeWidth="2" strokeDasharray="4 4" className="fsi-dash-flow" />

          {/* Developer B: Available -> Optimal */}
          <g transform="translate(260, 60)">
            <circle cx="0" cy="0" r="28" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="2" />
            <circle cx="0" cy="0" r="20" fill="#10b981" opacity="0.15" />
            <text x="0" y="-3" textAnchor="middle" fill="#047857" fontSize="13" fontWeight="900" fontFamily="sans-serif">60%</text>
            <text x="0" y="8" textAnchor="middle" fill="#059669" fontSize="7" fontWeight="800" fontFamily="sans-serif">AFTER</text>
            <text x="0" y="42" textAnchor="middle" fill="#475569" fontSize="9" fontWeight="800" fontFamily="sans-serif">Meera</text>
            <text x="0" y="53" textAnchor="middle" fill="#10b981" fontSize="7.5" fontWeight="700" fontFamily="sans-serif">Headroom OK</text>
          </g>
        </svg>
      </div>
    );
  }

  // 7. SHIP LOOP & SPRINT SUMMARY (Scene 7)
  return (
    <div className="friday-step-illustration friday-step-illustration--ship" aria-hidden="true">
      <svg viewBox="0 0 320 150" className="friday-step-illustration__svg" fill="none">
        {/* Git Branch to Main line */}
        <path d="M 30 90 L 110 90 Q 140 90 160 60 L 220 60" stroke="#8b5cf6" strokeWidth="3" />
        <path d="M 30 60 L 290 60" stroke="#cbd5e1" strokeWidth="3" />

        {/* Feature Branch commit */}
        <circle cx="70" cy="90" r="6" fill="#c084fc" />
        
        {/* PR Merged Node */}
        <g transform="translate(160, 60)" className="fsi-merge-burst">
          <circle cx="0" cy="0" r="14" fill="#ecfdf5" stroke="#10b981" strokeWidth="2.5" />
          <path d="M -5 0 L -1 4 L 6 -3" stroke="#047857" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="0" cy="0" r="20" stroke="#10b981" strokeWidth="1" opacity="0.5" className="fsi-pulse-ring" />
        </g>
        <text x="160" y="32" textAnchor="middle" fill="#047857" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">PR MERGED</text>

        {/* CI Checks & AI Summary card */}
        <g transform="translate(200, 75)" className="fsi-summary-slide">
          <rect x="0" y="0" width="105" height="52" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" filter="drop-shadow(0 4px 12px rgba(0,0,0,0.06))" />
          <rect x="8" y="8" width="50" height="12" rx="3" fill="#ecfdf5" />
          <text x="12" y="17" fill="#047857" fontSize="7" fontWeight="800" fontFamily="sans-serif">3/3 CI PASS</text>

          <text x="8" y="30" fill="#0f172a" fontSize="7.5" fontWeight="800" fontFamily="sans-serif">Sprint Summary</text>
          <text x="8" y="42" fill="#10b981" fontSize="7" fontWeight="700" fontFamily="sans-serif">8 Shipped · 0 Blocked</text>
        </g>
      </svg>
    </div>
  );
}
