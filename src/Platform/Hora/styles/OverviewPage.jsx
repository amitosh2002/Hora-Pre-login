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
      title: '01 Plan — Sprint boards that mirror how work actually moves',
      description: 'SprintFlowBoardV2 uses a flow-based layout with transition case labels — so a ticket\'s state reflects branch → PR → review → deploy, not a generic three-column guess.',
      bullets: [
        'DFD-style flow board — states model your real delivery pipeline',
        'Multi-step project creation — set up scope, team and working hours',
        'Gantt view — timeline across tasks',
        'Capacity & burn-down — logged time against defined working hours'
      ],
      icon: LayoutDashboard,
      colorClass: 'icon-pink'
    },
    {
      title: '02 Measure — Hora Matrix: delivery metrics, computed not guessed',
      description: 'Deployment frequency, lead time, change failure rate and MTTR — pulled straight from your GitHub activity via the Actions integration.',
      bullets: [
        'Deploy frequency — counted from real workflow runs',
        'Lead time for changes — broken into coding / review / deploy stages',
        'Change failure rate — detected via revert commits and hotfixes',
        'Team Matrix — the same numbers, broken down per contributor'
      ],
      icon: BarChart3,
      colorClass: 'icon-purple'
    },
    {
      title: '03 Communicate — Chat that understands your workflow',
      description: 'Comment and @mention directly on tickets, and use slash commands to pull real project data into the conversation instead of typing status updates by hand.',
      bullets: [
        'Slash commands — /standup, /assign, /blocker pull live data',
        'Threaded comments — discussion stays attached to the ticket',
        '@mentions — notify the right person without leaving the board',
        'WFH request flows — handled in the same place as the work itself'
      ],
      icon: MessageSquare,
      colorClass: 'icon-amber'
    },
    {
      title: '04 Govern — Access control that scales past one team',
      description: 'Multi-tenant by default, with org-scoped data and numeric RBAC levels that make it obvious who can do what.',
      bullets: [
        'Numeric RBAC tiers — Manager, Admin, and Org Admin',
        'Label management — permissioned taxonomy creation',
        'Org-scoped data — orgs never see each other\'s data',
        'Admin dashboard — a real control surface'
      ],
      icon: Shield,
      colorClass: 'icon-blue'
    }
  ];

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

      {/* Features Section */}
      <section style={{ padding: '80px 40px', background: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
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
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>01 Plan — Sprint boards that mirror how work actually moves</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>SprintFlowBoardV2 uses a flow-based layout with transition case labels — so a ticket's state reflects branch → PR → review → deploy, not a generic three-column guess.</p>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> DFD-style flow board — states model your real delivery pipeline</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Multi-step project creation — set up scope, team and working hours</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Gantt view — timeline across tasks</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Capacity & burn-down — logged time against defined working hours</li>
                 </ul>
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
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>02 Measure — Hora Matrix: delivery metrics, computed not guessed</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>Deployment frequency, lead time, change failure rate and MTTR — pulled straight from your GitHub activity via the Actions integration.</p>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Deploy frequency — counted from real workflow runs</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Lead time for changes — broken into coding / review / deploy stages</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Change failure rate — detected via revert commits and hotfixes</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Team Matrix — the same numbers, broken down per contributor</li>
                 </ul>
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
                   <rect x="90" y="50" width="160" height="70" rx="20" fill="#ffffff" filter="drop-shadow(0 10px 20px rgba(217,119,6,0.15))" />
                   <path d="M 120 120 L 120 140 L 145 120 Z" fill="#ffffff" />
                   <rect x="120" y="75" width="100" height="6" rx="3" fill="#fcd34d" />
                   <rect x="120" y="95" width="120" height="6" rx="3" fill="#fcd34d" />
                   <rect x="180" y="100" width="140" height="60" rx="20" fill="#f59e0b" filter="drop-shadow(0 10px 20px rgba(217,119,6,0.25))" />
                   <path d="M 290 160 L 290 180 L 265 160 Z" fill="#f59e0b" />
                   <rect x="210" y="120" width="80" height="6" rx="3" fill="#ffffff" opacity="0.9" />
                   <rect x="210" y="135" width="60" height="6" rx="3" fill="#ffffff" opacity="0.9" />
                 </svg>
              </div>
              <div style={{ padding: '40px', background: 'white', flex: 1, borderTop: '1px solid #f1f5f9' }}>
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>03 Communicate — Chat that understands your workflow</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>Comment and @mention directly on tickets, and use slash commands to pull real project data into the conversation instead of typing status updates by hand.</p>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Slash commands — /standup, /assign, /blocker pull live data</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Threaded comments — discussion stays attached to the ticket</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> @mentions — notify the right person without leaving the board</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> WFH request flows — handled in the same place as the work itself</li>
                 </ul>
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
                   <path d="M 200 40 L 260 60 L 260 110 C 260 150 200 170 200 170 C 200 170 140 150 140 110 L 140 60 L 200 40 Z" fill="#ffffff" filter="drop-shadow(0 15px 25px rgba(37,99,235,0.2))" />
                   <path d="M 200 40 L 260 60 L 260 110 C 260 150 200 170 200 170 Z" fill="#eff6ff" />
                   <path d="M 175 110 L 195 130 L 230 90" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
              </div>
              <div style={{ padding: '40px', background: 'white', flex: 1, borderTop: '1px solid #f1f5f9' }}>
                 <h4 style={{ fontSize: '24px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>04 Govern — Access control that scales past one team</h4>
                 <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>Multi-tenant by default, with org-scoped data and numeric RBAC levels that make it obvious who can do what.</p>
                 <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Numeric RBAC tiers — Manager, Admin, and Org Admin</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Label management — permissioned taxonomy creation</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Org-scoped data — orgs never see each other's data</li>
                   <li style={{ fontSize: '14px', color: '#64748b', display: 'flex', gap: '8px', alignItems: 'flex-start' }}><span style={{ color: '#8b5cf6', fontWeight: 'bold' }}>→</span> Admin dashboard — a real control surface</li>
                 </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* AI Section */}
      <section style={{ background: '#f8fafc', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
            
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontSize: '14px' }}>How we use AI</div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1e293b', marginBottom: '24px' }}>AI that reports, not guesses.</h2>
              
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.6, marginBottom: '40px' }}>
                Every number in Hora Matrix — health scores, velocity, capacity, burn-down — comes from a deterministic calculation against your actual GitHub and time-log data. AI only writes the summary on top, in plain language. It never computes the metrics themselves, so the same input always gives the same number.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'white', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b', flexShrink: 0 }}>1</div>
                  <div style={{ fontSize: '15px', color: '#475569' }}><strong style={{ color: '#1e293b' }}>Raw data:</strong> Commits, PRs, deploys, branch events, time logs.</div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b', flexShrink: 0 }}>2</div>
                  <div style={{ fontSize: '15px', color: '#475569' }}><strong style={{ color: '#1e293b' }}>Deterministic calculation:</strong> Fixed formulas, run against your data — every time, the same way.</div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#64748b', flexShrink: 0 }}>3</div>
                  <div style={{ fontSize: '15px', color: '#475569' }}><strong style={{ color: '#1e293b' }}>AI narration:</strong> Gemini/Groq turn the computed numbers into a plain-language summary.</div>
                </div>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ background: '#e0e7ff', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#4f46e5', flexShrink: 0 }}>4</div>
                  <div style={{ fontSize: '15px', color: '#475569' }}><strong style={{ color: '#1e293b' }}>You see both:</strong> The exact number, and the sentence explaining what it means.</div>
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
                {/* Background aura */}
                <circle cx="200" cy="200" r="140" fill="#f3e8ff" />
                <circle cx="200" cy="200" r="90" fill="#ede9fe" />
                <circle cx="200" cy="200" r="50" fill="#ddd6fe" />
                
                {/* Network Nodes */}
                <circle cx="100" cy="140" r="16" fill="#8b5cf6" />
                <circle cx="300" cy="120" r="12" fill="#a78bfa" />
                <circle cx="280" cy="300" r="18" fill="#8b5cf6" />
                <circle cx="120" cy="280" r="14" fill="#a78bfa" />
                <circle cx="200" cy="60"  r="10" fill="#cbd5e1" />
                
                {/* Connecting lines */}
                <path d="M 112 150 L 175 185" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                <path d="M 290 130 L 225 185" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                <path d="M 270 285 L 220 215" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                <path d="M 130 270 L 180 215" fill="none" stroke="#c4b5fd" strokeWidth="3" />
                
                <path d="M 110 130 L 190 70" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 290 115 L 210 70" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                <path d="M 100 156 L 110 268" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="6 6" />
                
                {/* Central AI Processor */}
                <rect x="160" y="160" width="80" height="80" rx="16" fill="#ffffff" stroke="#8b5cf6" strokeWidth="4" />
                
                {/* Processor Details */}
                <rect x="180" y="180" width="40" height="40" rx="8" fill="#8b5cf6" />
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
        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>See it against your own repos.</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px', color: '#cbd5e1' }}>Connect a GitHub org and watch Hora Matrix populate in minutes.</p>
        <button 
          style={{ background: '#8b5cf6', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer' }}
          onClick={() => window.location.href = 'https://app.hora.team'}
        >
          Connect GitHub Org
        </button>
      </section>
    </div>
  );
}
