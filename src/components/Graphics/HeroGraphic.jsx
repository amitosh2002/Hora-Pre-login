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
            </motion.g>
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8 }}>
              <circle cx="70" cy="120" r="10" fill="#ffffff" stroke="url(#purple-grad)" strokeWidth="4" filter="url(#glow-purple)" />
              <text x="90" y="124" fontSize="10" fontWeight="700" fill="#8b5cf6" fontFamily="sans-serif">PR MERGED</text>
            </motion.g>
            <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.0 }}>
              <circle cx="20" cy="200" r="8" fill="#ffffff" stroke="url(#pink-grad)" strokeWidth="4" />
              <text x="40" y="204" fontSize="10" fontWeight="600" fill="#f43f5e" fontFamily="sans-serif">DEPLOYED</text>
            </motion.g>
          </g>

          {/* Center Connection Lines */}
          <motion.path 
            d="M 180 260 C 240 260 260 170 300 170" 
            stroke="url(#purple-grad)" strokeWidth="2" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          />
          <motion.path 
            d="M 110 340 C 180 340 220 260 300 260" 
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
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            style={{ offsetPath: 'path("M 180 260 C 240 260 260 170 300 170")' }}
          />

          {/* Right Side: Kanban Board */}
          <g transform="translate(300, 130)">
            {/* Columns */}
            <rect x="0" y="0" width="100" height="260" rx="8" fill="#f8fafc" />
            <text x="12" y="24" fontSize="10" fontWeight="700" fill="#64748b" fontFamily="sans-serif">IN PROGRESS</text>
            
            <rect x="120" y="0" width="100" height="260" rx="8" fill="#f8fafc" />
            <text x="132" y="24" fontSize="10" fontWeight="700" fill="#64748b" fontFamily="sans-serif">DONE</text>

            {/* Cards */}
            <motion.g 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 1.5 }}
            >
              <rect x="8" y="36" width="84" height="64" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.02))' }} />
              <rect x="16" y="48" width="40" height="6" rx="3" fill="#cbd5e1" />
              <rect x="16" y="60" width="60" height="4" rx="2" fill="#e2e8f0" />
              <rect x="16" y="68" width="50" height="4" rx="2" fill="#e2e8f0" />
              <circle cx="76" cy="84" r="6" fill="#8b5cf6" />
            </motion.g>

            <motion.g 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 1.7 }}
            >
              <rect x="128" y="36" width="84" height="80" rx="6" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" style={{ filter: 'drop-shadow(0 4px 12px rgba(139,92,246,0.15))' }} />
              <rect x="136" y="48" width="40" height="6" rx="3" fill="#8b5cf6" />
              <rect x="136" y="60" width="60" height="4" rx="2" fill="#e2e8f0" />
              <rect x="136" y="68" width="60" height="4" rx="2" fill="#e2e8f0" />
              <rect x="136" y="76" width="30" height="4" rx="2" fill="#e2e8f0" />
              <path d="M 186 96 L 194 96 L 194 104" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M 194 96 L 186 104" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" fill="none" />
            </motion.g>
            
            <motion.g 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 1.9 }}
            >
              <rect x="128" y="128" width="84" height="64" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.02))' }} />
              <rect x="136" y="140" width="30" height="6" rx="3" fill="#10b981" />
              <rect x="136" y="152" width="60" height="4" rx="2" fill="#e2e8f0" />
              <rect x="136" y="160" width="50" height="4" rx="2" fill="#e2e8f0" />
              <circle cx="196" cy="176" r="6" fill="#10b981" />
            </motion.g>

          </g>

        </motion.g>

        {/* Floating Data Badges */}
        {/* <motion.g
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: [-10, 10, -10], opacity: 1 }}
          transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8, delay: 2 } }}
        >
          <rect x="100" y="20" width="130" height="40" rx="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }} />
          <circle cx="120" cy="40" r="4" fill="#10b981" />
          <text x="134" y="44" fontSize="12" fontWeight="700" fill="#334155" fontFamily="sans-serif">Syncing GitHub...</text>
        </motion.g> */}

        <motion.g
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: [10, -10, 10], opacity: 1 }}
          transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.8, delay: 2.2 } }}
        >
          <rect x="420" y="440" width="140" height="40" rx="20" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.05))' }} />
          <path d="M435 460 L440 455 L445 463 L452 453" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="460" y="464" fontSize="12" fontWeight="700" fill="#334155" fontFamily="sans-serif">Velocity +18%</text>
        </motion.g>

      </svg>
    </div>
  );
}
