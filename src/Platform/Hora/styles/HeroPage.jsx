import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BarChart3, MessageSquare, Shield, Activity, ArrowRight, PlayCircle, Terminal, Users, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import DataVizGraphic from './DataVizGraphic';
import './styles/HoraServicesIntro.scss';

export default function HoraServicesIntro() {
  const mainServices = [
    {
      title: "01 Plan — Sprint boards, DFD-native",
      description: "Flow-based boards that map how work actually moves — branch, PR, review, deploy — not just three generic columns.",
      icon: LayoutDashboard,
      colorClass: "icon-pink"
    },
    {
      title: "02 Measure — Hora Matrix",
      description: "Deployment frequency, lead time, change failure rate and MTTR — computed from your GitHub activity, not estimated.",
      icon: BarChart3,
      colorClass: "icon-purple"
    },
    {
      title: "03 Communicate — Chat with slash commands",
      description: "Mention teammates, resolve threads on tickets, or run /standup to pull yesterday's commits into today's sync.",
      icon: MessageSquare,
      colorClass: "icon-amber"
    },
    {
      title: "04 Govern — Multi-tenant by default",
      description: "Org-scoped data, numeric RBAC levels, and label management that admins actually understand at a glance.",
      icon: Shield,
      colorClass: "icon-blue"
    }
  ];

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
          
          <div className="hero-clean__collage">
             <motion.div className="collage-circle collage-circle--1" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <Terminal strokeWidth={1.5} />
             </motion.div>
             <motion.div className="collage-circle collage-circle--2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <Activity strokeWidth={1.5} />
             </motion.div>
             <motion.div className="collage-circle collage-circle--3" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <Target strokeWidth={1.5} />
             </motion.div>
             <motion.div className="collage-circle collage-circle--4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
                <Zap strokeWidth={1.5} />
             </motion.div>
             <div className="dot dot--1"></div>
             <div className="dot dot--2"></div>
             <div className="dot dot--3"></div>
          </div>
          
        </div>
      </section>

      {/* Ambient Ticker */}
      <div style={{ width: '100%', background: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0', padding: '16px 0', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', fontSize: '14px', fontWeight: 600, color: '#475569', flexWrap: 'wrap' }}>
          <span>Lead time ↓ 18% this sprint</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span>Deploy frequency 3.2/day</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span>MTTR ↓ 40min</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span>Change failure rate 2.1%</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span style={{ color: '#8b5cf6' }}>Sprint 24 68% complete</span>
        </div>
      </div>

      {/* Feature Grid with Illustrations */}
      <section style={{ padding: '120px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#1e293b' }}>Everything you need to ship.</h2>
            <p style={{ fontSize: '18px', color: '#64748b', marginTop: '16px' }}>Four powerful tools seamlessly integrated into one platform.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '40px' }}>
            
            {/* 01 Plan */}
            <motion.div 
              style={{ background: '#f8fafc', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ height: '260px', width: '100%', background: '#fce7f3', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                 <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }}>
                   <circle cx="200" cy="100" r="160" fill="#fbcfe8" opacity="0.4" />
                   <rect x="80" y="50" width="60" height="90" rx="8" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(219,39,119,0.15))" />
                   <rect x="170" y="30" width="60" height="130" rx="8" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(219,39,119,0.15))" />
                   <rect x="260" y="70" width="60" height="70" rx="8" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(219,39,119,0.15))" />
                   
                   <path d="M 140 90 L 170 90" fill="none" stroke="#db2777" strokeWidth="3" strokeDasharray="4 4" />
                   <path d="M 230 110 L 260 110" fill="none" stroke="#db2777" strokeWidth="3" strokeDasharray="4 4" />
                   
                   <rect x="90" y="70" width="40" height="6" rx="3" fill="#fbcfe8" />
                   <rect x="180" y="50" width="40" height="6" rx="3" fill="#fbcfe8" />
                   <rect x="270" y="90" width="40" height="6" rx="3" fill="#fbcfe8" />
                   <rect x="180" y="70" width="40" height="6" rx="3" fill="#fbcfe8" />
                 </svg>
              </div>
              <div style={{ padding: '40px', background: 'white', flex: 1, borderTop: '1px solid #f1f5f9' }}>
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>01 Plan — Sprint boards, DFD-native</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>Flow-based boards that map how work actually moves — branch, PR, review, deploy — not just three generic columns.</p>
              </div>
            </motion.div>

            {/* 02 Measure */}
            <motion.div 
              style={{ background: '#f8fafc', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ height: '260px', width: '100%', background: '#f3e8ff', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                 <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }}>
                   <circle cx="200" cy="100" r="160" fill="#e9d5ff" opacity="0.4" />
                   <rect x="100" y="130" width="30" height="40" rx="4" fill="#c084fc" filter="drop-shadow(0 4px 6px rgba(147,51,234,0.2))" />
                   <rect x="150" y="90" width="30" height="80" rx="4" fill="#a855f7" filter="drop-shadow(0 4px 6px rgba(147,51,234,0.2))" />
                   <rect x="200" y="110" width="30" height="60" rx="4" fill="#9333ea" filter="drop-shadow(0 4px 6px rgba(147,51,234,0.2))" />
                   <rect x="250" y="50" width="30" height="120" rx="4" fill="#7e22ce" filter="drop-shadow(0 4px 6px rgba(147,51,234,0.2))" />
                   
                   <path d="M 115 120 L 165 70 L 215 90 L 265 40" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
                   <circle cx="265" cy="40" r="6" fill="#ffffff" />
                 </svg>
              </div>
              <div style={{ padding: '40px', background: 'white', flex: 1, borderTop: '1px solid #f1f5f9' }}>
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>02 Measure — Hora Matrix</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>Deployment frequency, lead time, change failure rate and MTTR — computed from your GitHub activity, not estimated.</p>
              </div>
            </motion.div>

            {/* 03 Communicate */}
            <motion.div 
              style={{ background: '#f8fafc', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ height: '260px', width: '100%', background: '#fef3c7', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                 <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }}>
                   <circle cx="200" cy="100" r="160" fill="#fde68a" opacity="0.4" />
                   
                   {/* Chat Bubble 1 */}
                   <rect x="90" y="50" width="160" height="70" rx="20" fill="#ffffff" filter="drop-shadow(0 10px 20px rgba(217,119,6,0.15))" />
                   <path d="M 120 120 L 120 140 L 145 120 Z" fill="#ffffff" />
                   <rect x="120" y="75" width="100" height="6" rx="3" fill="#fcd34d" />
                   <rect x="120" y="95" width="120" height="6" rx="3" fill="#fcd34d" />
                   
                   {/* Chat Bubble 2 */}
                   <rect x="180" y="100" width="140" height="60" rx="20" fill="#f59e0b" filter="drop-shadow(0 10px 20px rgba(217,119,6,0.25))" />
                   <path d="M 290 160 L 290 180 L 265 160 Z" fill="#f59e0b" />
                   <rect x="210" y="120" width="80" height="6" rx="3" fill="#ffffff" opacity="0.9" />
                   <rect x="210" y="135" width="60" height="6" rx="3" fill="#ffffff" opacity="0.9" />
                 </svg>
              </div>
              <div style={{ padding: '40px', background: 'white', flex: 1, borderTop: '1px solid #f1f5f9' }}>
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>03 Communicate — Chat with slash commands</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>Mention teammates, resolve threads on tickets, or run /standup to pull yesterday's commits into today's sync.</p>
              </div>
            </motion.div>

            {/* 04 Govern */}
            <motion.div 
              style={{ background: '#f8fafc', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div style={{ height: '260px', width: '100%', background: '#dbeafe', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                 <svg viewBox="0 0 400 200" style={{ width: '100%', height: '100%' }}>
                   <circle cx="200" cy="100" r="160" fill="#bfdbfe" opacity="0.4" />
                   
                   {/* Shield */}
                   <path d="M 200 40 L 260 60 L 260 110 C 260 150 200 170 200 170 C 200 170 140 150 140 110 L 140 60 L 200 40 Z" fill="#ffffff" filter="drop-shadow(0 15px 25px rgba(37,99,235,0.2))" />
                   <path d="M 200 40 L 260 60 L 260 110 C 260 150 200 170 200 170 Z" fill="#eff6ff" />
                   
                   {/* Lock / Check */}
                   <path d="M 175 110 L 195 130 L 230 90" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
              </div>
              <div style={{ padding: '40px', background: 'white', flex: 1, borderTop: '1px solid #f1f5f9' }}>
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>04 Govern — Multi-tenant by default</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, margin: 0 }}>Org-scoped data, numeric RBAC levels, and label management that admins actually understand at a glance.</p>
              </div>
            </motion.div>

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
