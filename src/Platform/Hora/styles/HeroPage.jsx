import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BarChart3, MessageSquare, Shield, Activity, ArrowRight, PlayCircle, Terminal, Users, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import DataVizGraphic from './DataVizGraphic';
import HeroGraphic from '../../../components/Graphics/HeroGraphic';
import './styles/HoraServicesIntro.scss';

export default function HoraServicesIntro() {
  const platformFeatures = [
    {
      title: '01 Plan — Sprint boards, DFD-native',
      description: 'Flow-based boards that map how work actually moves — branch, PR, review, deploy — not just three generic columns.',
      icon: LayoutDashboard,
      gradientStart: '#f43f5e',
      gradientEnd: '#f97316',
      shadowColor: 'rgba(249, 115, 22, 0.25)',
      bulletColor: '#f97316'
    },
    {
      title: '02 Measure — Hora Matrix',
      description: 'Deployment frequency, lead time, change failure rate and MTTR — computed from your GitHub activity, not estimated.',
      icon: BarChart3,
      gradientStart: '#3b82f6',
      gradientEnd: '#0ea5e9',
      shadowColor: 'rgba(59, 130, 246, 0.25)',
      bulletColor: '#3b82f6'
    },
    {
      title: '03 Communicate — Chat with slash commands',
      description: 'Mention teammates, resolve threads on tickets, or run /standup to pull yesterday\'s commits into today\'s sync.',
      icon: MessageSquare,
      gradientStart: '#8b5cf6',
      gradientEnd: '#d946ef',
      shadowColor: 'rgba(139, 92, 246, 0.25)',
      bulletColor: '#8b5cf6'
    },
    {
      title: '04 Govern — Multi-tenant by default',
      description: 'Org-scoped data, numeric RBAC levels, and label management that admins actually understand at a glance.',
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
        <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#1e293b', marginBottom: '12px', lineHeight: 1.3 }}>{feature.title}</h4>
        <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{feature.description}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="page-container hora-services-intro">
      
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
              Now shipping: Hora Matrix v3
            </motion.div>
            
            <motion.h1 
              className="hero-clean__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: '56px' }}
            >
              Sprint planning that speaks fluent git.
            </motion.h1>
            
            <motion.p 
              className="hero-clean__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hora turns your commits, PRs and deploys into a living sprint board — so standups run on real data, not vibes.
            </motion.p>
            
            <motion.div 
              className="hero-buttons" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap' }}
            >
              <button 
                className="btn-purple"
                onClick={() => window.location.href = 'https://app.hora.team'}
              >
                Start free — no card <ArrowRight size={20} />
              </button>
              <button 
                style={{ background: 'transparent', border: '1px solid #e2e8f0', color: '#475569', padding: '16px 32px', borderRadius: '8px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
              >
                <PlayCircle size={20} /> Watch 90s demo
              </button>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontSize: '14px', color: '#94a3b8', fontWeight: 500 }}
            >
              Built for dev teams · GitHub-native · Free while you're small
            </motion.p>
          </div>
          
          <div className="hero-clean__collage" style={{ width: '100%', height: '500px' }}>
             <HeroGraphic />
          </div>
          
        </div>
      </section>

      {/* Ambient Ticker */}
      <div className="ambient-ticker">
        {/* Render two identical tracks for seamless infinite scrolling */}
        {[1, 2].map((track) => (
          <div className="ambient-ticker__track" key={track} aria-hidden={track === 2}>
            {[
              "Lead time ↓ 18% this sprint",
              "Deploy frequency 3.2/day",
              "MTTR ↓ 40min",
              "Change failure rate 2.1%",
              "Sprint 24 68% complete"
            ].map((item, index) => (
              <div className="ambient-ticker__item" key={index}>
                <span style={{ color: item.includes('Sprint 24') ? '#8b5cf6' : undefined }}>{item}</span>
                <span className="ambient-ticker__point"></span>
              </div>
            ))}
          </div>
        ))}
      </div>

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
            <span style={{ fontSize: '18px' }}>⚡</span> One Platform
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '48px', fontWeight: 800, color: '#1e293b', lineHeight: 1.1, marginBottom: '24px' }}
          >
            Everything you need to ship.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.6 }}
          >
            Four powerful tools seamlessly integrated into one platform.
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

      {/* Hora Matrix Showcase */}
      <section style={{ background: '#f8fafc', padding: '100px 40px', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
          
          <motion.div 
            style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ width: '100%', maxWidth: '540px', position: 'relative' }}>
              <svg viewBox="0 0 500 400" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.08))' }}>
                {/* Background Pattern / Abstract shapes */}
                <circle cx="250" cy="200" r="160" fill="#f3e8ff" opacity="0.6" />
                <circle cx="120" cy="100" r="60" fill="#e0e7ff" opacity="0.6" />
                
                {/* Main Dashboard Window */}
                <rect x="50" y="60" width="400" height="280" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                
                {/* Dashboard Header */}
                <circle cx="70" cy="80" r="4" fill="#cbd5e1" />
                <circle cx="85" cy="80" r="4" fill="#cbd5e1" />
                <circle cx="100" cy="80" r="4" fill="#cbd5e1" />
                <rect x="50" y="100" width="400" height="1" fill="#e2e8f0" />
                
                {/* Left Sidebar Menu */}
                <rect x="70" y="120" width="80" height="8" rx="4" fill="#e2e8f0" />
                <rect x="70" y="140" width="60" height="8" rx="4" fill="#f1f5f9" />
                <rect x="70" y="160" width="70" height="8" rx="4" fill="#f1f5f9" />
                
                {/* Main Graph Area */}
                <rect x="170" y="120" width="250" height="140" rx="8" fill="#f8fafc" stroke="#f1f5f9" strokeWidth="1" />
                <path d="M 170 190 L 420 190" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                <path d="M 170 155 L 420 155" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Smooth Chart Line */}
                <path d="M 170 240 Q 220 130 270 180 T 360 140 T 420 160" fill="none" stroke="#8b5cf6" strokeWidth="4" strokeLinecap="round" />
                <path d="M 170 240 Q 220 130 270 180 T 360 140 T 420 160 L 420 260 L 170 260 Z" fill="#8b5cf6" opacity="0.1" />
                
                <circle cx="270" cy="180" r="5" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="360" cy="140" r="5" fill="#ffffff" stroke="#8b5cf6" strokeWidth="2" />
                
                {/* Floating Metric Cards within the SVG */}
                <g transform="translate(170, 275)">
                  <rect x="0" y="0" width="115" height="45" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.02))" />
                  <text x="12" y="18" fontSize="10" fill="#64748b" fontFamily="sans-serif" fontWeight="600">Deploy freq</text>
                  <text x="12" y="34" fontSize="14" fill="#8b5cf6" fontFamily="sans-serif" fontWeight="800">82%</text>
                </g>
                <g transform="translate(305, 275)">
                  <rect x="0" y="0" width="115" height="45" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.02))" />
                  <text x="12" y="18" fontSize="10" fill="#64748b" fontFamily="sans-serif" fontWeight="600">Lead time</text>
                  <text x="12" y="34" fontSize="14" fill="#8b5cf6" fontFamily="sans-serif" fontWeight="800">64%</text>
                </g>
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            style={{ textAlign: 'left' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontSize: '14px' }}>Hora Matrix</div>
            <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#1e293b', marginBottom: '24px', lineHeight: 1.1 }}>Your DORA metrics, without the spreadsheet archaeology.</h2>
            
            <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6 }}>
              Every merge and deploy already happens in GitHub. Hora Matrix just reads it — so the numbers your team reviews on Friday are the same ones that were true on Monday.
            </p>
          </motion.div>
          
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ padding: '100px 40px', textAlign: 'center', background: '#8b5cf6', color: 'white' }}>
        <h2 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '16px' }}>Your next sprint deserves real numbers.</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>Free for teams under 10. No credit card, no sales call.</p>
        <button 
          style={{ background: 'white', color: '#8b5cf6', padding: '16px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer' }}
          onClick={() => window.location.href = 'https://app.hora.team'}
        >
          Start building now
        </button>
      </section>

    </div>
  );
}
