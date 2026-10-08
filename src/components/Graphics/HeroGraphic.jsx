import React from 'react';
import { motion } from 'framer-motion';

export default function HeroGraphic() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="100%" height="100%" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        <defs>
          {/* Gradients */}
          <linearGradient id="bg-grad" x1="0" y1="0" x2="600" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fafc" />
            <stop offset="1" stopColor="#e2e8f0" />
          </linearGradient>
          
          <linearGradient id="purple-grad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#c084fc" />
          </linearGradient>
          
          <linearGradient id="blue-grad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#3b82f6" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
          
          <linearGradient id="pink-grad" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#f43f5e" />
            <stop offset="1" stopColor="#fb7185" />
          </linearGradient>

          {/* Shadows */}
          <filter id="glass-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#94a3b8" floodOpacity="0.15" />
          </filter>
          
          <filter id="glow-purple" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Abstract Background Elements */}
        <motion.circle 
          cx="450" cy="100" r="150" 
          fill="url(#purple-grad)" opacity="0.05"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle 
          cx="100" cy="350" r="200" 
          fill="url(#blue-grad)" opacity="0.05"
          animate={{ scale: [1, 1.15, 1], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main Interface Window */}
        <motion.g 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          filter="url(#glass-shadow)"
        >
          <rect x="40" y="60" width="520" height="360" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
          
          {/* Window Header */}
          <rect x="40" y="60" width="520" height="48" rx="16" fill="#f8fafc" />
          <path d="M40 108H560" stroke="#e2e8f0" strokeWidth="1" />
          <circle cx="64" cy="84" r="5" fill="#fecaca" />
          <circle cx="84" cy="84" r="5" fill="#fef08a" />
          <circle cx="104" cy="84" r="5" fill="#bbf7d0" />
          
          <rect x="240" y="76" width="120" height="16" rx="4" fill="#e2e8f0" opacity="0.5" />

          {/* Left Side: Git Flow */}
          <g transform="translate(60, 140)">
            {/* Git Lines */}
            <path d="M 20 20 L 20 200" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 20 80 Q 20 120 70 120" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 70 120 L 70 180 Q 70 200 20 200" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />

            {/* Commits / Nodes */}
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4 }}>
              <circle cx="20" cy="20" r="8" fill="#ffffff" stroke="url(#blue-grad)" strokeWidth="4" />
            </motion.g>
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 }}>
              <circle cx="20" cy="80" r="8" fill="#ffffff" stroke="url(#blue-grad)" strokeWidth="4" />
              {/* Branch / active work chip */}
              <g transform="translate(36, 68)">
                <rect x="0" y="0" width="76" height="22" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.03))" />
                <text x="38" y="15" fontSize="10" fontWeight="700" fill="#3b82f6" fontFamily="sans-serif" textAnchor="middle">BRANCH ACTIVE</text>
              </g>
            </motion.g>
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
              <circle cx="70" cy="120" r="10" fill="#ffffff" stroke="url(#purple-grad)" strokeWidth="4" filter="url(#glow-purple)" />
              {/* Chip background for PR MERGED avoiding strike-through */}
              <g transform="translate(88, 108)">
                <rect x="0" y="0" width="78" height="22" rx="6" fill="#ffffff" stroke="#ede9fe" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.04))" />
                <text x="39" y="15" fontSize="10" fontWeight="700" fill="#8b5cf6" fontFamily="sans-serif" textAnchor="middle">PR MERGED</text>
              </g>
            </motion.g>
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0 }}>
              <circle cx="20" cy="200" r="8" fill="#ffffff" stroke="url(#pink-grad)" strokeWidth="4" />
              {/* Chip background for DEPLOYED avoiding strike-through */}
              <g transform="translate(36, 188)">
                <rect x="0" y="0" width="70" height="22" rx="6" fill="#ffffff" stroke="#ffe4e6" strokeWidth="1.5" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.04))" />
                <text x="35" y="15" fontSize="10" fontWeight="700" fill="#f43f5e" fontFamily="sans-serif" textAnchor="middle">DEPLOYED</text>
              </g>
            </motion.g>
          </g>

          {/* Connection Lines with correct logic: Active branch -> In Progress, PR Merged & Deployed -> Done */}
          {/* Active branch -> In Progress */}
          <motion.path 
            d="M 180 220 C 230 220 260 170 308 170" 
            stroke="url(#blue-grad)" strokeWidth="2" strokeDasharray="3 3" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.0 }}
          />

          {/* PR Merged -> Done column */}
          <motion.path 
            d="M 230 260 C 290 260 360 166 428 166" 
            stroke="url(#purple-grad)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          />

          {/* Deployed -> Done column */}
          <motion.path 
            d="M 170 340 C 250 340 350 258 428 258" 
            stroke="url(#pink-grad)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.4 }}
          />
          
          {/* Connection Particles */}
          <motion.circle 
            r="4" fill="#8b5cf6" filter="url(#glow-purple)"
            animate={{ 
              offsetDistance: ["0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: 'path("M 230 260 C 290 260 360 166 428 166")' }}
          />

          {/* Right Side: Kanban Board */}
          <g transform="translate(300, 130)">
            {/* Columns */}
            <rect x="0" y="0" width="105" height="260" rx="8" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="1" />
            <text x="12" y="24" fontSize="10" fontWeight="700" fill="#64748b" fontFamily="sans-serif">IN PROGRESS</text>
            
            <rect x="120" y="0" width="105" height="260" rx="8" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="1" />
            <text x="132" y="24" fontSize="10" fontWeight="700" fill="#64748b" fontFamily="sans-serif">DONE</text>

            {/* In Progress Card: Ticket HOR-214 with Priya and Friday reason */}
            <motion.g 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 1.5 }}
            >
              <rect x="8" y="36" width="89" height="72" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.02))' }} />
              <text x="16" y="52" fontSize="9" fontWeight="700" fill="#3b82f6" fontFamily="sans-serif">HOR-214 · 3pts</text>
              <text x="16" y="66" fontSize="10" fontWeight="600" fill="#1e293b" fontFamily="sans-serif">Retry webhooks</text>
              <rect x="16" y="76" width="34" height="14" rx="4" fill="#ede9fe" />
              <text x="33" y="87" fontSize="8" fontWeight="700" fill="#7c3aed" fontFamily="sans-serif" textAnchor="middle">Priya (87)</text>
              <circle cx="83" cy="83" r="5" fill="#10b981" title="In progress" />
            </motion.g>

            {/* Done Card 1: Ticket HOR-198 (from PR Merged) */}
            <motion.g 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 1.7 }}
            >
              <rect x="128" y="36" width="89" height="74" rx="6" fill="#ffffff" stroke="#8b5cf6" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 4px 12px rgba(139,92,246,0.12))' }} />
              <text x="136" y="52" fontSize="9" fontWeight="700" fill="#8b5cf6" fontFamily="sans-serif">HOR-198 · 5pts</text>
              <text x="136" y="66" fontSize="10" fontWeight="600" fill="#1e293b" fontFamily="sans-serif">OAuth callback</text>
              <rect x="136" y="76" width="58" height="14" rx="4" fill="#f3e8ff" />
              <text x="165" y="87" fontSize="8" fontWeight="700" fill="#7c3aed" fontFamily="sans-serif" textAnchor="middle">PR #84 merged ✓</text>
            </motion.g>
            
            {/* Done Card 2: Ticket HOR-205 (from Deployed) */}
            <motion.g 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 1.9 }}
            >
              <rect x="128" y="124" width="89" height="74" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.02))' }} />
              <text x="136" y="140" fontSize="9" fontWeight="700" fill="#64748b" fontFamily="sans-serif">HOR-205 · 2pts</text>
              <text x="136" y="154" fontSize="10" fontWeight="600" fill="#1e293b" fontFamily="sans-serif">Telemetry sync</text>
              <rect x="136" y="164" width="60" height="14" rx="4" fill="#dcfce7" />
              <text x="166" y="175" fontSize="8" fontWeight="700" fill="#15803d" fontFamily="sans-serif" textAnchor="middle">Deployed v2.4 🚀</text>
            </motion.g>

          </g>

        </motion.g>

        {/* Floating Data Badge with Sample qualifier */}
        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [10, -10, 10], opacity: 1 }}
          transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8, delay: 2.2 } }}
        >
          <rect x="390" y="440" width="170" height="40" rx="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }} />
          <path d="M405 460 L410 455 L415 463 L422 453" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="430" y="465" fontSize="11" fontWeight="700" fill="#334155" fontFamily="sans-serif">Sample · Velocity +18%</text>
        </motion.g>

      </svg>
    </div>
  );
}
