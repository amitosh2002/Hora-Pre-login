import React from 'react';
import { Target, BrainCircuit, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutUs.scss';

export default function AboutUs() {
  const [activeMilestone, setActiveMilestone] = React.useState(3);

  const values = [
    {
      title: '01 Real data over vibes',
      description: 'If a number is on the screen, it\'s computed from something that actually happened in your repo — not estimated, not vibes-based.',
      icon: Target,
      colorClass: 'icon-blue'
    },
    {
      title: '02 AI narrates, doesn\'t decide',
      description: 'We use AI to explain metrics in plain language. We don\'t let it invent the metrics — the math stays deterministic and auditable.',
      icon: BrainCircuit,
      colorClass: 'icon-pink'
    },
    {
      title: '03 Built for the team that ships',
      description: 'Every feature answers to engineers and the leads who manage them — not to a generic "productivity" persona that doesn\'t write code.',
      icon: Users,
      colorClass: 'icon-purple'
    }
  ];

  const milestones = [
    { status: 'Shipped', title: 'Multi-tenant architecture', description: 'Org-scoped data across the platform, so teams of any size can run on Hora without data crossing boundaries.' },
    { status: 'Shipped', title: 'SprintFlowBoardV2', description: 'A flow-based board that mirrors real delivery stages instead of a generic three-column layout.' },
    { status: 'Shipped', title: 'Slash commands in chat', description: 'Pull live project data into conversation instead of typing status updates by hand.' },
    { status: 'In progress', title: 'Hora Matrix v3', description: 'A full redesign of repo-level analytics — deterministic DORA metrics, no AI in the calculation path.' },
    { status: 'Planned', title: 'AI-generated test coverage on every PR', description: 'Not just a deploy gate — checks that run and report on every pull request.' },
  ];

  const buildPrinciples = [
    { num: '01', title: 'Numbers before narratives', desc: 'We removed AI from every core metric calculation — health score, velocity, capacity, burn-down — even though it would have been faster to ship with AI doing the math. AI only writes the sentence underneath.' },
    { num: '02', title: 'Multi-tenancy isn\'t optional', desc: 'We chose full org-scoping across every collection over a faster, minimal approach — because a data leak between two customers\' orgs isn\'t a bug we\'re willing to risk.' },
    { num: '03', title: 'Bring your own infrastructure', desc: 'Self-hosted runners are first-class, not an afterthought — your builds run where you want them to.' }
  ];

  return (
    <div className="page-container about-page">
      {/* Clean Hero Section */}
      <section className="hero-clean">
        <div className="hero-clean__content">
          <div className="hero-clean__text-area" style={{ maxWidth: '800px', gridColumn: '1 / -1', margin: '0 auto', textAlign: 'center', alignItems: 'center' }}>
            <motion.div 
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontSize: '14px' }}
            >
              Company
            </motion.div>
            
            <motion.h1 
              className="hero-clean__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: '56px', maxWidth: '800px' }}
            >
              We build project management the way developers actually think.
            </motion.h1>
            
            <motion.p 
              className="hero-clean__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: '20px', maxWidth: '600px', margin: '0 auto 40px' }}
            >
              Hora started from a simple frustration: sprint boards that don't know anything about the code they're supposed to be tracking. So we built one that does.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ background: '#f8fafc', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '32px' }}>
            
            {/* 01 Real data over vibes */}
            <motion.div 
              style={{ background: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <div style={{ height: '280px', width: '100%', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' }}>
                 <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }}>
                   {/* Background Grid Pattern */}
                   <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
                   </pattern>
                   <rect width="400" height="250" fill="url(#grid1)" />
                   
                   {/* GitHub-like Commit List UI */}
                   <rect x="50" y="40" width="200" height="150" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   <rect x="50" y="40" width="200" height="30" rx="12" fill="#f1f5f9" />
                   <circle cx="70" cy="55" r="4" fill="#cbd5e1" />
                   <circle cx="85" cy="55" r="4" fill="#cbd5e1" />
                   <circle cx="100" cy="55" r="4" fill="#cbd5e1" />
                   
                   <rect x="70" y="90" width="120" height="8" rx="4" fill="#e2e8f0" />
                   <rect x="70" y="110" width="80" height="6" rx="3" fill="#f1f5f9" />
                   <circle cx="220" cy="95" r="10" fill="#bfdbfe" />
                   
                   <rect x="70" y="140" width="140" height="8" rx="4" fill="#e2e8f0" />
                   <rect x="70" y="160" width="60" height="6" rx="3" fill="#f1f5f9" />
                   <circle cx="220" cy="145" r="10" fill="#fbcfe8" />
                   
                   {/* Transform arrow */}
                   <path d="M 265 115 L 290 115 M 285 110 L 290 115 L 285 120" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   
                   {/* Data Chart UI */}
                   <rect x="305" y="60" width="120" height="110" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(59,130,246,0.15))" stroke="#bfdbfe" strokeWidth="2" />
                   <rect x="325" y="130" width="20" height="20" rx="4" fill="#60a5fa" />
                   <rect x="355" y="100" width="20" height="50" rx="4" fill="#3b82f6" />
                   <rect x="385" y="80" width="20" height="70" rx="4" fill="#2563eb" />
                 </svg>
              </div>
              <div style={{ padding: '32px' }}>
                 <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0' }}>01 Real data over vibes</h4>
                 <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>If a number is on the screen, it's computed from something that actually happened in your repo — not estimated, not vibes-based.</p>
              </div>
            </motion.div>

            {/* 02 AI narrates */}
            <motion.div 
              style={{ background: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div style={{ height: '280px', width: '100%', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' }}>
                 <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }}>
                   {/* Background Grid Pattern */}
                   <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
                   </pattern>
                   <rect width="400" height="250" fill="url(#grid2)" />
                   
                   {/* AI Brain/Bot Icon */}
                   <rect x="160" y="40" width="80" height="80" rx="40" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(219,39,119,0.15))" stroke="#fbcfe8" strokeWidth="2" />
                   <path d="M 190 70 Q 200 60 210 70 T 210 90 Q 200 100 190 90 T 190 70" fill="none" stroke="#db2777" strokeWidth="3" />
                   
                   {/* Fixed Metric Box */}
                   <rect x="70" y="150" width="110" height="60" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   <text x="90" y="175" fontSize="12" fill="#94a3b8" fontFamily="sans-serif" fontWeight="bold">Velocity</text>
                   <text x="90" y="195" fontSize="20" fill="#1e293b" fontFamily="sans-serif" fontWeight="800">42 pts</text>
                   
                   {/* Connection Line */}
                   <path d="M 125 150 L 180 120" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                   <path d="M 275 150 L 220 120" fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 4" />
                   
                   {/* AI Text Generation Box */}
                   <rect x="220" y="150" width="140" height="60" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   <rect x="235" y="165" width="80" height="6" rx="3" fill="#fbcfe8" />
                   <rect x="235" y="180" width="110" height="6" rx="3" fill="#fbcfe8" />
                   <rect x="235" y="195" width="60" height="6" rx="3" fill="#fbcfe8" />
                   
                   {/* Sparkles */}
                   <path d="M 230 60 L 235 70 L 245 75 L 235 80 L 230 90 L 225 80 L 215 75 L 225 70 Z" fill="#f472b6" />
                 </svg>
              </div>
              <div style={{ padding: '32px' }}>
                 <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0' }}>02 AI narrates, doesn't decide</h4>
                 <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>We use AI to explain metrics in plain language. We don't let it invent the metrics — the math stays deterministic and auditable.</p>
              </div>
            </motion.div>

            {/* 03 Built for the team */}
            <motion.div 
              style={{ background: '#ffffff', borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div style={{ height: '280px', width: '100%', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', borderBottom: '1px solid #f1f5f9' }}>
                 <svg viewBox="0 0 400 250" style={{ width: '100%', height: '100%' }}>
                   {/* Background Grid Pattern */}
                   <pattern id="grid3" width="40" height="40" patternUnits="userSpaceOnUse">
                     <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" opacity="0.5"/>
                   </pattern>
                   <rect width="400" height="250" fill="url(#grid3)" />
                   
                   {/* User Profiles connected */}
                   <path d="M 140 125 L 200 80 L 260 125 L 200 170 Z" fill="none" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="4 4" />
                   
                   {/* Top User */}
                   <rect x="160" y="30" width="80" height="90" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(139,92,246,0.15))" stroke="#ddd6fe" strokeWidth="2" />
                   <circle cx="200" cy="60" r="16" fill="#c4b5fd" />
                   <rect x="175" y="85" width="50" height="6" rx="3" fill="#e2e8f0" />
                   <rect x="185" y="97" width="30" height="4" rx="2" fill="#f1f5f9" />
                   
                   {/* Bottom Left User */}
                   <rect x="70" y="100" width="80" height="90" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   <circle cx="110" cy="130" r="16" fill="#e2e8f0" />
                   <rect x="85" y="155" width="50" height="6" rx="3" fill="#e2e8f0" />
                   <rect x="95" y="167" width="30" height="4" rx="2" fill="#f1f5f9" />
                   
                   {/* Bottom Right User */}
                   <rect x="250" y="100" width="80" height="90" rx="12" fill="#ffffff" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.05))" stroke="#e2e8f0" strokeWidth="1" />
                   <circle cx="290" cy="130" r="16" fill="#e2e8f0" />
                   <rect x="265" y="155" width="50" height="6" rx="3" fill="#e2e8f0" />
                   <rect x="275" y="167" width="30" height="4" rx="2" fill="#f1f5f9" />
                   
                   {/* Central Pull Request Icon */}
                   <rect x="180" y="140" width="40" height="40" rx="20" fill="#8b5cf6" filter="drop-shadow(0 5px 10px rgba(139,92,246,0.3))" />
                   <path d="M 193 160 L 198 165 L 208 155" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                 </svg>
              </div>
              <div style={{ padding: '32px' }}>
                 <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#1e293b', margin: '0 0 12px 0' }}>03 Built for the team that ships</h4>
                 <p style={{ fontSize: '15px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>Every feature answers to engineers and the leads who manage them — not to a generic "productivity" persona that doesn't write code.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Recent Milestones Interactive Timeline */}
      <section style={{ background: '#ffffff', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '100px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1e293b' }}>Recent milestones.</h2>
            <p style={{ fontSize: '18px', color: '#64748b', marginTop: '16px' }}>We ship continuously. Here's what we've been working on.</p>
          </div>
          
          {/* Interactive Timeline */}
          <div style={{ position: 'relative', marginTop: '120px', marginBottom: '60px' }}>
            {/* Background Line */}
            <div style={{ position: 'absolute', top: '10px', left: 0, right: 0, height: '2px', background: '#e2e8f0' }}></div>
            
            {/* Progress Line (dynamically matches active node) */}
            <div style={{ position: 'absolute', top: '10px', left: 0, width: `${(activeMilestone / (milestones.length - 1)) * 100}%`, height: '2px', background: '#10b981', transition: 'width 0.3s ease' }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              {milestones.map((m, index) => {
                const isActive = activeMilestone === index;
                const isCompleted = index <= activeMilestone;
                
                return (
                  <div key={index} style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    
                    {/* Active Tooltip Card */}
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ position: 'absolute', top: '-90px', width: '220px', background: '#ffffff', borderRadius: '12px', padding: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', textAlign: 'center', zIndex: 10 }}
                      >
                         <div style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b', marginBottom: '6px' }}>{m.title}</div>
                         <div style={{ fontSize: '12px', color: '#8b5cf6', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                           <span style={{ color: m.status === 'Shipped' ? '#10b981' : m.status === 'In progress' ? '#8b5cf6' : '#94a3b8' }}>✔</span> {m.status}
                         </div>
                         {/* Down arrow tail */}
                         <div style={{ position: 'absolute', bottom: '-6px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '12px', height: '12px', background: '#ffffff', borderRight: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}></div>
                      </motion.div>
                    )}
                    
                    {/* Timeline Node */}
                    <div 
                      onClick={() => setActiveMilestone(index)}
                      style={{ 
                        width: '22px', 
                        height: '22px', 
                        borderRadius: '50%', 
                        background: isActive ? '#3b82f6' : isCompleted ? '#10b981' : '#cbd5e1', 
                        border: '4px solid #ffffff',
                        boxShadow: isActive ? '0 0 0 4px #eff6ff' : 'none',
                        position: 'relative',
                        zIndex: 2,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    ></div>
                    
                    {/* Label below node */}
                    <div style={{ marginTop: '16px', fontSize: '13px', color: isActive ? '#3b82f6' : '#94a3b8', fontWeight: 600 }}>
                      Step {index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Details Grid */}
          <div style={{ marginTop: '100px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px 30px' }}>
             {milestones.map((m, index) => (
                <motion.div 
                  key={index} 
                  style={{ display: 'flex', gap: '16px', opacity: activeMilestone === index ? 1 : 0.6, transition: 'opacity 0.2s ease' }}
                  onMouseEnter={() => setActiveMilestone(index)}
                >
                  <div style={{ fontSize: '20px', fontWeight: 600, color: '#1e293b' }}>{index + 1}.</div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#1e293b', margin: '0 0 8px 0' }}>{m.title}</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', margin: 0, lineHeight: 1.6 }}>{m.description}</p>
                    <div style={{ marginTop: '12px', fontSize: '12px', fontWeight: 600, color: m.status === 'Shipped' ? '#10b981' : m.status === 'In progress' ? '#8b5cf6' : '#94a3b8' }}>{m.status}</div>
                  </div>
                </motion.div>
             ))}
          </div>
          
        </div>
      </section>

      {/* How we build */}
      <section style={{ background: '#f8fafc', padding: '100px 40px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontSize: '14px' }}>Philosophy</div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#1e293b', marginBottom: '60px' }}>How we build.</h2>
            
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', marginTop: '80px', paddingBottom: '40px' }}>
              {/* The main horizontal track */}
              <div style={{ position: 'absolute', top: '24px', left: '0', right: '0', height: '8px', background: '#e2e8f0', zIndex: 0, borderRadius: '4px' }}></div>
              
              {/* Highlighted track (optional, to show progress) */}
              <div style={{ position: 'absolute', top: '24px', left: '0', width: '33%', height: '8px', background: '#8b5cf6', zIndex: 0, borderRadius: '4px 0 0 4px' }}></div>

              {buildPrinciples.map((b, i) => (
                <motion.div 
                  key={i} 
                  style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '30%', textAlign: 'center' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Timeline Node */}
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: i === 0 ? '#8b5cf6' : 'white', border: i === 0 ? '4px solid #ede9fe' : '4px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: i === 0 ? 'white' : '#94a3b8' }}>
                      {b.num}
                    </div>
                  </div>
                  
                  {/* Content Area (Clean text, no bulky card) */}
                  <div>
                    <h4 style={{ margin: '0 0 12px 0', fontSize: '18px', color: '#1e293b', fontWeight: 800 }}>{b.title}</h4>
                    <p style={{ margin: 0, fontSize: '15px', color: '#64748b', lineHeight: 1.6 }}>{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* CTA Band */}
      <section style={{ padding: '80px 40px', textAlign: 'center', background: '#1e293b', color: 'white' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>Come build with us.</h2>
        <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '32px', color: '#cbd5e1' }}>We're always looking for engineers who care about this kind of detail.</p>
        <button 
          style={{ background: '#8b5cf6', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '16px', border: 'none', cursor: 'pointer' }}
          onClick={() => window.location.href = 'https://app.hora.team/careers'}
        >
          View Open Roles
        </button>
      </section>
    </div>
  );
}
