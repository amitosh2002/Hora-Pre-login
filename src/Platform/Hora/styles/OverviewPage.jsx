import React from 'react';
import {
  BarChart3,
  MessageSquare,
  Shield,
  LayoutDashboard,
  BrainCircuit,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import './styles/OverviewPage.scss';
import AnalyticsDashboardGraphic from '../../../components/Graphics/AnalyticsDashboardGraphic';

export default function OverviewPage() {
  const platformFeatures = [
    {
      title: '01 Plan',
      description: 'SprintFlowBoardV2 uses a flow-based layout with transition case labels — so a ticket\'s state reflects branch → PR → review → deploy, not a generic three-column guess.',
      bullets: [
        'DFD-style flow board — states model your real delivery pipeline',
        'Multi-step project creation — set up scope, team and working hours',
        'Gantt view — timeline across tasks',
        'Capacity & burn-down — logged time against defined working hours'
      ],
      icon: LayoutDashboard,
      gradientStart: '#f43f5e',
      gradientEnd: '#f97316',
      shadowColor: 'rgba(249, 115, 22, 0.25)',
      bulletColor: '#f97316'
    },
    {
      title: '02 Measure',
      description: 'Hora Matrix: delivery metrics, computed not guessed. Deployment frequency, lead time, change failure rate and MTTR — pulled straight from your GitHub activity.',
      bullets: [
        'Deploy frequency — counted from real workflow runs',
        'Lead time for changes — coding / review / deploy stages',
        'Change failure rate — detected via revert commits and hotfixes',
        'Team Matrix — numbers broken down per contributor'
      ],
      icon: BarChart3,
      gradientStart: '#3b82f6',
      gradientEnd: '#0ea5e9',
      shadowColor: 'rgba(59, 130, 246, 0.25)',
      bulletColor: '#3b82f6'
    },
    {
      title: '03 Communicate',
      description: 'Chat that understands your workflow. Comment and @mention directly on tickets, and use slash commands to pull real project data into the conversation.',
      bullets: [
        'Slash commands — /standup, /assign, /blocker pull live data',
        'Threaded comments — discussion stays attached to the ticket',
        '@mentions — notify the right person without leaving the board',
        'WFH request flows — handled in the same place as the work itself'
      ],
      icon: MessageSquare,
      gradientStart: '#8b5cf6',
      gradientEnd: '#d946ef',
      shadowColor: 'rgba(139, 92, 246, 0.25)',
      bulletColor: '#8b5cf6'
    },
    {
      title: '04 Govern',
      description: 'Access control that scales past one team. Multi-tenant by default, with org-scoped data and numeric RBAC levels that make it obvious who can do what.',
      bullets: [
        'Numeric RBAC tiers — Manager, Admin, and Org Admin',
        'Label management — permissioned taxonomy creation',
        'Org-scoped data — orgs never see each other\'s data',
        'Admin dashboard — a real control surface'
      ],
      icon: Shield,
      gradientStart: '#10b981',
      gradientEnd: '#14b8a6',
      shadowColor: 'rgba(16, 185, 129, 0.25)',
      bulletColor: '#10b981'
    }
  ];

  const renderCard = (feature, index) => (
    <motion.div 
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ 
        background: '#ffffff', 
        borderRadius: '24px', 
        border: '1px solid #f1f5f9', 
        boxShadow: '0 15px 35px rgba(0,0,0,0.03)', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* Top half with grid and glowing app icon */}
      <div style={{ height: '180px', width: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottom: '1px solid #f8fafc', background: '#fafafa' }}>
         <svg viewBox="0 0 300 180" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 0 }}>
           <pattern id={`grid-pattern-${index}`} width="25" height="25" patternUnits="userSpaceOnUse">
             <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" strokeWidth="1" />
           </pattern>
           <rect width="100%" height="100%" fill={`url(#grid-pattern-${index})`} />
           
           {/* Soft colored grid squares */}
           <rect x="25" y="25" width="25" height="25" fill={feature.bulletColor} opacity="0.06" />
           <rect x="200" y="100" width="25" height="25" fill={feature.bulletColor} opacity="0.08" />
           <rect x="50" y="125" width="25" height="25" fill={feature.bulletColor} opacity="0.04" />
         </svg>
         
         {/* Glassmorphic Icon Wrapper */}
         <div style={{ 
           position: 'relative', 
           zIndex: 1, 
           width: '72px', 
           height: '72px', 
           borderRadius: '20px', 
           background: `linear-gradient(135deg, ${feature.gradientStart}, ${feature.gradientEnd})`,
           boxShadow: `0 15px 30px ${feature.shadowColor}, inset 0 2px 4px rgba(255,255,255,0.4)`,
           display: 'flex',
           justifyContent: 'center',
           alignItems: 'center',
           color: 'white'
         }}>
           <feature.icon size={32} strokeWidth={2} />
           {/* Glass reflection layer */}
           <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '50%', background: 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)', borderRadius: '20px 20px 0 0' }}></div>
         </div>
      </div>
      
      {/* Bottom half with text */}
      <div style={{ padding: '32px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#1e293b', marginBottom: '12px' }}>{feature.title}</h4>
        <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, marginBottom: '24px' }}>{feature.description}</p>
        
        {/* Bullets */}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {feature.bullets.map((b, i) => (
             <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '13px', color: '#475569', alignItems: 'flex-start', lineHeight: 1.4 }}>
               <span style={{ color: feature.bulletColor, fontWeight: 'bold' }}>→</span>
               <span>{b}</span>
             </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="page-container overview-page">
      {/* Clean Hero Section */}
      <section className="hero-clean">
        <div className="hero-clean__content">
          <div className="hero-clean__text-area">
            <motion.div 
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontSize: '14px' }}
            >
              The platform
            </motion.div>
            
            <motion.h1 
              className="hero-clean__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: '48px' }}
            >
              Four tools that share one source of truth — your repos.
            </motion.h1>
            
            <motion.p 
              className="hero-clean__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Plan sprints, measure delivery, keep the team in sync, and stay in control of who sees what — without stitching together four different products.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '16px', marginTop: '16px' }}
            >
              <button style={{ background: '#8b5cf6', color: 'white', padding: '16px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 600, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>
                Try for free!
              </button>
              <button style={{ background: '#ffffff', color: '#1e293b', padding: '16px 32px', borderRadius: '12px', fontSize: '16px', fontWeight: 600, border: '1px solid #e2e8f0', cursor: 'pointer', transition: 'background 0.2s' }}>
                View Demo
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            className="hero-clean__illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
             <AnalyticsDashboardGraphic />
          </motion.div>
        </div>
      </section>

      {/* Staggered Features Section */}
      <section style={{ padding: '120px 40px', background: '#ffffff', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Top Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#fef2f2', color: '#ef4444', borderRadius: '100px', fontSize: '14px', fontWeight: 600, marginBottom: '24px', border: '1px solid #fee2e2' }}
          >
            <span style={{ fontSize: '18px' }}>⚡</span> Explore Features
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '48px', fontWeight: 800, color: '#1e293b', lineHeight: 1.1, marginBottom: '24px' }}
          >
            Empower your team: <br />
            explore the <span style={{ color: '#ec4899' }}>all-in-one</span> platform.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.6 }}
          >
            Plan sprints, measure delivery, keep the team in sync, and stay in control of who sees what — without stitching together four different products.
          </motion.p>
        </div>

        <div style={{ maxWidth: '1380px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Illustration */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
             <svg viewBox="0 0 500 700" style={{ width: '100%', maxWidth: '450px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.05))' }}>
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                  <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                  <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#d946ef" />
                  </linearGradient>
                  <linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#14b8a6" />
                  </linearGradient>
                  <pattern id="dotGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#e2e8f0" />
                  </pattern>
                </defs>

                {/* Background Board */}
                <rect width="500" height="700" fill="#f8fafc" rx="40" stroke="#f1f5f9" strokeWidth="2" />
                <rect width="500" height="700" fill="url(#dotGrid)" rx="40" opacity="0.6" />

                {/* Central Flow Line */}
                <path d="M 250 80 L 250 620" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="8 8" />

                {/* Node 1 - Plan */}
                <path d="M 230 180 L 140 180" stroke="#f43f5e" strokeWidth="3" />
                <rect x="40" y="130" width="100" height="100" rx="20" fill="white" stroke="#ffe4e6" strokeWidth="2" />
                <rect x="65" y="155" width="50" height="50" rx="14" fill="url(#g1)" />
                <circle cx="250" cy="180" r="12" fill="white" stroke="#f43f5e" strokeWidth="4" />

                {/* Node 2 - Measure */}
                <path d="M 270 300 L 360 300" stroke="#3b82f6" strokeWidth="3" />
                <rect x="360" y="250" width="100" height="100" rx="20" fill="white" stroke="#dbeafe" strokeWidth="2" />
                <rect x="385" y="275" width="50" height="50" rx="14" fill="url(#g2)" />
                <circle cx="250" cy="300" r="12" fill="white" stroke="#3b82f6" strokeWidth="4" />

                {/* Node 3 - Communicate */}
                <path d="M 230 420 L 140 420" stroke="#8b5cf6" strokeWidth="3" />
                <rect x="40" y="370" width="100" height="100" rx="20" fill="white" stroke="#ede9fe" strokeWidth="2" />
                <rect x="65" y="395" width="50" height="50" rx="14" fill="url(#g3)" />
                <circle cx="250" cy="420" r="12" fill="white" stroke="#8b5cf6" strokeWidth="4" />

                {/* Node 4 - Govern */}
                <path d="M 270 540 L 360 540" stroke="#10b981" strokeWidth="3" />
                <rect x="360" y="490" width="100" height="100" rx="20" fill="white" stroke="#d1fae5" strokeWidth="2" />
                <rect x="385" y="515" width="50" height="50" rx="14" fill="url(#g4)" />
                <circle cx="250" cy="540" r="12" fill="white" stroke="#10b981" strokeWidth="4" />
                
             </svg>
          </motion.div>
          
          {/* Right Staggered Grid */}
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', alignItems: 'start' }}>
               
               {/* Column 1 (Cards 1 & 3) */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '80px' }}>
                  {renderCard(platformFeatures[0], 0)}
                  {renderCard(platformFeatures[2], 2)}
               </div>

               {/* Column 2 (Cards 2 & 4) */}
               <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '80px' }}>
                  {renderCard(platformFeatures[1], 1)}
                  {renderCard(platformFeatures[3], 3)}
               </div>
               
            </div>
          </div>
          
        </div>
      </section>

      {/* AI Section (Simplified visually to match clean aesthetic) */}
      <section style={{ background: '#f8fafc', padding: '120px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontSize: '14px' }}>How we use AI</div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1e293b', marginBottom: '24px' }}>AI that reports, not guesses.</h2>
              
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, marginBottom: '40px' }}>
                Every number in Hora Matrix comes from a deterministic calculation against your actual GitHub and time-log data. AI only writes the summary on top, in plain language.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'white', padding: '32px', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b', flexShrink: 0 }}>1</div>
                  <div style={{ fontSize: '15px', color: '#475569' }}><strong style={{ color: '#1e293b' }}>Raw data:</strong> Commits, PRs, deploys, branch events, time logs.</div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b', flexShrink: 0 }}>2</div>
                  <div style={{ fontSize: '15px', color: '#475569' }}><strong style={{ color: '#1e293b' }}>Deterministic calculation:</strong> Fixed formulas, run against your data.</div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#e0e7ff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#4f46e5', flexShrink: 0 }}>3</div>
                  <div style={{ fontSize: '15px', color: '#475569' }}><strong style={{ color: '#1e293b' }}>You see both:</strong> The exact number, and the sentence explaining it.</div>
                </div>
              </div>
            </div>
            
            <motion.div 
              style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <svg viewBox="0 0 400 400" style={{ width: '100%', maxWidth: '420px', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.05))' }}>
                <circle cx="200" cy="200" r="140" fill="#f3e8ff" />
                <circle cx="200" cy="200" r="90" fill="#ede9fe" />
                <circle cx="200" cy="200" r="50" fill="#ddd6fe" />
                
                <circle cx="100" cy="140" r="16" fill="#8b5cf6" />
                <circle cx="300" cy="120" r="12" fill="#a78bfa" />
                <circle cx="280" cy="300" r="18" fill="#8b5cf6" />
                <circle cx="120" cy="280" r="14" fill="#a78bfa" />
                <circle cx="200" cy="60"  r="10" fill="#cbd5e1" />
                
                <path d="M 112 150 L 175 185" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                <path d="M 290 130 L 225 185" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                <path d="M 270 285 L 220 215" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                <path d="M 130 270 L 180 215" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                
                <path d="M 110 130 L 190 70" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 290 115 L 210 70" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 100 156 L 110 268" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                
                <rect x="160" y="160" width="80" height="80" rx="20" fill="#ffffff" stroke="#8b5cf6" strokeWidth="4" />
                <rect x="180" y="180" width="40" height="40" rx="10" fill="#8b5cf6" />
                <circle cx="200" cy="200" r="8" fill="#ffffff" />
                
                <rect x="150" y="180" width="6" height="40" rx="2" fill="#c4b5fd" />
                <rect x="244" y="180" width="6" height="40" rx="2" fill="#c4b5fd" />
                <rect x="180" y="150" width="40" height="6" rx="2" fill="#c4b5fd" />
                <rect x="180" y="244" width="40" height="6" rx="2" fill="#c4b5fd" />
              </svg>
            </motion.div>

        </div>
      </section>

      {/* CTA Band */}
      <section style={{ padding: '80px 40px', textAlign: 'center', background: '#1e293b', color: 'white' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px 0' }}>See it against your own repos.</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px', color: '#cbd5e1' }}>Connect a GitHub org and watch Hora Matrix populate in minutes.</p>
        <button 
          style={{ background: '#ec4899', color: 'white', padding: '16px 32px', borderRadius: '12px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
          onClick={() => window.location.href = 'https://app.hora.team'}
        >
          Connect GitHub Org
        </button>
      </section>
    </div>
  );
}
