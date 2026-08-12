import React from 'react';
import {
  Clock,
  Zap,
  AlertTriangle,
  ArrowRight,
  Server,
  Github,
  CheckCircle2,
  Activity
} from 'lucide-react';
import { motion } from 'framer-motion';
import './styles/GitHubServicePage.scss';
import GitHubFlowGraphic from '../../../components/Graphics/GitHubFlowGraphic';

export default function GitHubServicePage() {
  const flowCards = [
    {
      title: "Push & branch events → Lead time for changes",
      description: "Branch creation timestamps, per user, mark the start of the clock. First commit, PR merge and deploy timestamps close out each stage.",
      icon: Clock,
      colorClass: "icon-blue"
    },
    {
      title: "Workflow runs → Deploy frequency",
      description: "Successful deploy jobs from your GitHub Actions runners are counted directly — self-hosted or GitHub-hosted, org-wide.",
      icon: Zap,
      colorClass: "icon-purple"
    },
    {
      title: "Reverts & hotfixes → Change failure rate",
      description: "Revert commits, hotfix-prefixed branches and rollback deploys are detected automatically and correlated back to the deploy that caused them.",
      icon: AlertTriangle,
      colorClass: "icon-pink"
    }
  ];

  return (
    <div className="page-container github-service-page">
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
              Integrations
            </motion.div>
            
            <motion.h1 
              className="hero-clean__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: '48px' }}
            >
              Wired directly into GitHub — not bolted on.
            </motion.h1>
            
            <motion.p 
              className="hero-clean__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect an org once. Every push, PR, branch and deploy becomes data Hora Matrix can measure, in real time, without anyone updating a ticket by hand.
            </motion.p>
            
            <motion.button 
              className="btn-purple"
              onClick={() => window.location.href = 'https://app.hora.team'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Connect GitHub org <ArrowRight size={20} />
            </motion.button>
          </div>
          
          <motion.div 
            className="hero-clean__illustration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
             <GitHubFlowGraphic />
             {/* Connection Card mockup overlay */}
             <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', width: '320px', border: '1px solid #e2e8f0' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid #f1f5f9', paddingBottom: '16px' }}>
                 <Github size={24} />
                 <div>
                   <div style={{ fontWeight: 600, fontSize: '14px', color: '#1e293b' }}>github.com/Hora</div>
                   <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={12} color="#10b981" /> Connected via GitHub App</div>
                 </div>
               </div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#475569' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Repos synced:</span> <span style={{ fontWeight: 600 }}>14</span></div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Runner:</span> <span style={{ fontWeight: 600 }}>2 online, self-hosted</span></div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Last event:</span> <span style={{ fontWeight: 600 }}>deploy · 4s ago</span></div>
                 <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Webhook:</span> <span style={{ fontWeight: 600, color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={14} /> Listening</span></div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Live Event Stream / Flow Cards Section */}
      <section style={{ background: '#f8fafc', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1e293b' }}>Live from your repos.</h2>
            <p style={{ fontSize: '18px', color: '#64748b', marginTop: '16px' }}>Every event below feeds Hora Matrix directly — no manual status updates, no stale dashboards.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '32px' }}>
            
            {/* Card 1: Push & Branch events */}
            <motion.div 
              style={{ background: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ height: '280px', width: '100%', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' }}>
                 <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }}>
                   <pattern id="gh1" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
                   </pattern>
                   <rect width="400" height="250" fill="url(#gh1)" />
                   
                   {/* GitHub Branch Event UI */}
                   <rect x="50" y="80" width="120" height="90" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(59,130,246,0.1))" stroke="#bfdbfe" strokeWidth="2" />
                   <circle cx="80" cy="110" r="10" fill="#3b82f6" />
                   <circle cx="80" cy="140" r="10" fill="#93c5fd" />
                   <path d="M 80 120 L 80 130" fill="none" stroke="#60a5fa" strokeWidth="2" />
                   <path d="M 80 110 Q 110 110 110 130 T 140 140" fill="none" stroke="#60a5fa" strokeWidth="2" strokeDasharray="4 4" />
                   <rect x="100" y="105" width="50" height="8" rx="4" fill="#eff6ff" />
                   <rect x="100" y="135" width="50" height="8" rx="4" fill="#eff6ff" />
                   
                   {/* Transform arrow */}
                   <path d="M 190 125 L 220 125 M 215 120 L 220 125 L 215 130" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   
                   {/* Lead Time Metric Box */}
                   <rect x="240" y="80" width="110" height="90" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   <circle cx="295" cy="115" r="16" fill="#eff6ff" />
                   <circle cx="295" cy="115" r="10" fill="none" stroke="#3b82f6" strokeWidth="2" />
                   <path d="M 295 110 L 295 115 L 300 115" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   <text x="295" y="150" fontSize="16" fill="#1e293b" fontFamily="sans-serif" fontWeight="800" textAnchor="middle">1.2 days</text>
                 </svg>
              </div>
              <div style={{ padding: '32px' }}>
                 <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0' }}>Push & branch events → Lead time for changes</h4>
                 <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>Branch creation timestamps, per user, mark the start of the clock. First commit, PR merge and deploy timestamps close out each stage.</p>
              </div>
            </motion.div>

            {/* Card 2: Workflow runs */}
            <motion.div 
              style={{ background: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ height: '280px', width: '100%', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' }}>
                 <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }}>
                   <pattern id="gh2" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
                   </pattern>
                   <rect width="400" height="250" fill="url(#gh2)" />
                   
                   {/* Workflow Run UI */}
                   <rect x="50" y="70" width="130" height="110" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(168,85,247,0.1))" stroke="#e9d5ff" strokeWidth="2" />
                   <rect x="70" y="90" width="90" height="20" rx="4" fill="#faf5ff" />
                   <circle cx="80" cy="100" r="4" fill="#a855f7" />
                   <rect x="95" y="96" width="50" height="8" rx="4" fill="#d8b4fe" />
                   
                   <rect x="70" y="115" width="90" height="20" rx="4" fill="#faf5ff" />
                   <circle cx="80" cy="125" r="4" fill="#a855f7" />
                   <rect x="95" y="121" width="40" height="8" rx="4" fill="#d8b4fe" />
                   
                   <rect x="70" y="140" width="90" height="20" rx="4" fill="#faf5ff" />
                   <circle cx="80" cy="150" r="4" fill="#d1d5db" />
                   <rect x="95" y="146" width="60" height="8" rx="4" fill="#f3f4f6" />
                   
                   {/* Transform arrow */}
                   <path d="M 200 125 L 230 125 M 225 120 L 230 125 L 225 130" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   
                   {/* Deploy Frequency Graphic */}
                   <rect x="250" y="70" width="100" height="110" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   <path d="M 270 140 L 290 120 L 310 130 L 330 90" fill="none" stroke="#a855f7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                   <circle cx="330" cy="90" r="5" fill="#a855f7" />
                   <circle cx="270" cy="140" r="4" fill="#d8b4fe" />
                   <text x="300" y="165" fontSize="16" fill="#1e293b" fontFamily="sans-serif" fontWeight="800" textAnchor="middle">4.2/day</text>
                 </svg>
              </div>
              <div style={{ padding: '32px' }}>
                 <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0' }}>Workflow runs → Deploy frequency</h4>
                 <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>Successful deploy jobs from your GitHub Actions runners are counted directly — self-hosted or GitHub-hosted, org-wide.</p>
              </div>
            </motion.div>

            {/* Card 3: Reverts & hotfixes */}
            <motion.div 
              style={{ background: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ height: '280px', width: '100%', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' }}>
                 <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }}>
                   <pattern id="gh3" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
                   </pattern>
                   <rect width="400" height="250" fill="url(#gh3)" />
                   
                   {/* Revert Event UI */}
                   <rect x="50" y="80" width="120" height="90" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(236,72,153,0.1))" stroke="#fbcfe8" strokeWidth="2" />
                   
                   {/* Alert Icon */}
                   <path d="M 110 95 L 125 125 L 95 125 Z" fill="#fdf2f8" stroke="#ec4899" strokeWidth="2" strokeLinejoin="round" />
                   <path d="M 110 105 L 110 115 M 110 120 L 110 122" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" />
                   
                   <rect x="70" y="140" width="80" height="12" rx="4" fill="#fdf2f8" />
                   
                   {/* Transform arrow */}
                   <path d="M 190 125 L 220 125 M 215 120 L 220 125 L 215 130" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   
                   {/* Failure Rate Metric Box */}
                   <rect x="240" y="80" width="110" height="90" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   
                   <path d="M 260 130 L 280 130 L 290 100 L 305 135 L 320 130" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   <circle cx="290" cy="100" r="4" fill="#ec4899" />
                   
                   <text x="295" y="155" fontSize="16" fill="#1e293b" fontFamily="sans-serif" fontWeight="800" textAnchor="middle">1.8%</text>
                 </svg>
              </div>
              <div style={{ padding: '32px' }}>
                 <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0' }}>Reverts & hotfixes → Change failure rate</h4>
                 <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>Revert commits, hotfix-prefixed branches and rollback deploys are detected automatically and correlated back to the deploy that caused them.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Self-Hosted Runners Section */}
      <section style={{ background: '#ffffff', padding: '120px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Top Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 80px auto' }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#fef2f2', color: '#ef4444', borderRadius: '100px', fontSize: '14px', fontWeight: 600, marginBottom: '24px', border: '1px solid #fee2e2' }}
          >
            <span style={{ fontSize: '18px' }}>⚡</span> Self-hosted runners
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '48px', fontWeight: 800, color: '#1e293b', lineHeight: 1.1, marginBottom: '24px' }}
          >
            Bring your own infrastructure.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.6 }}
          >
            Register a self-hosted runner at the org level and every repo can use it — no per-repo setup, no duplicated build machines.
          </motion.p>
        </div>

        <div style={{ maxWidth: '1380px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          
          {/* Left Illustration */}
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.7 }}
             style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
             <svg viewBox="0 0 500 600" style={{ width: '100%', maxWidth: '450px', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.05))' }}>
                <defs>
                  <linearGradient id="serverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#0ea5e9" />
                  </linearGradient>
                  <pattern id="serverGrid" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#e2e8f0" />
                  </pattern>
                </defs>

                {/* Background Board */}
                <rect width="500" height="600" fill="#f8fafc" rx="40" stroke="#f1f5f9" strokeWidth="2" />
                <rect width="500" height="600" fill="url(#serverGrid)" rx="40" opacity="0.6" />

                {/* Infrastructure Nodes */}
                {/* Org Level Box */}
                <rect x="150" y="80" width="200" height="80" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" />
                <rect x="170" y="100" width="40" height="40" rx="10" fill="url(#cloudGrad)" />
                <rect x="230" y="110" width="90" height="8" rx="4" fill="#e2e8f0" />
                <rect x="230" y="126" width="60" height="8" rx="4" fill="#e2e8f0" />

                {/* Connection lines branching out */}
                <path d="M 250 160 L 250 200" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 6" />
                <path d="M 250 200 L 120 200 L 120 240" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 6" />
                <path d="M 250 200 L 380 200 L 380 240" fill="none" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="6 6" />
                
                {/* Repo 1 Server */}
                <rect x="50" y="240" width="140" height="180" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="70" y="260" width="100" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="90" cy="280" r="5" fill="#10b981" />
                <rect x="70" y="310" width="100" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="90" cy="330" r="5" fill="#10b981" />
                <rect x="70" y="360" width="100" height="40" rx="8" fill="url(#serverGrad)" opacity="0.9" />
                <circle cx="90" cy="380" r="5" fill="white" />
                
                {/* Repo 2 Server */}
                <rect x="310" y="240" width="140" height="180" rx="16" fill="white" stroke="#e2e8f0" strokeWidth="2" />
                <rect x="330" y="260" width="100" height="40" rx="8" fill="url(#serverGrad)" opacity="0.9" />
                <circle cx="350" cy="280" r="5" fill="white" />
                <rect x="330" y="310" width="100" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="350" cy="330" r="5" fill="#e2e8f0" />
                <rect x="330" y="360" width="100" height="40" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1" />
                <circle cx="350" cy="380" r="5" fill="#e2e8f0" />
                
                {/* Central Data Stream */}
                <path d="M 250 200 L 250 480" fill="none" stroke="#8b5cf6" strokeWidth="4" />
                <circle cx="250" cy="480" r="8" fill="#8b5cf6" />
                <circle cx="250" cy="480" r="24" fill="none" stroke="#8b5cf6" strokeWidth="2" opacity="0.4" />
             </svg>
          </motion.div>
          
          {/* Right Feature Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
             
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               style={{ padding: '32px', background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
             >
               <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f3e8ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                 <Server size={24} />
               </div>
               <p style={{ fontSize: '16px', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                 Org-level registration, available to all repos automatically
               </p>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               style={{ padding: '32px', background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
             >
               <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f3e8ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                 <Activity size={24} />
               </div>
               <p style={{ fontSize: '16px', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                 Run multiple runners per org for parallel job capacity
               </p>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               style={{ padding: '32px', background: '#ffffff', borderRadius: '24px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}
             >
               <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#f3e8ff', color: '#8b5cf6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                 <Zap size={24} />
               </div>
               <p style={{ fontSize: '16px', color: '#1e293b', fontWeight: 600, lineHeight: 1.6, margin: 0 }}>
                 Deploy events from your own infrastructure feed Hora Matrix exactly like GitHub-hosted runs
               </p>
             </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ padding: '80px 40px', textAlign: 'center', background: '#8b5cf6', color: 'white' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Connect your org in under two minutes.</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px' }}>No YAML to write by hand — Hora handles the wiring.</p>
        <button 
          style={{ background: 'white', color: '#8b5cf6', padding: '16px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer' }}
          onClick={() => window.location.href = 'https://app.hora.team'}
        >
          Connect GitHub
        </button>
      </section>
    </div>
  );
}