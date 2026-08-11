import React from 'react';
import { Target, BrainCircuit, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './AboutUs.scss';

export default function AboutUs() {
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
      <section className="solutions-section" style={{ background: '#f8fafc', paddingTop: '80px' }}>
        <div className="solutions-section__container">
          <div className="hero-solutions-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={index} 
                  className="clean-feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`clean-feature-card__icon-container ${value.colorClass}`}>
                    <Icon size={28} />
                  </div>
                  <h4 className="clean-feature-card__title" style={{ fontSize: '18px' }}>{value.title}</h4>
                  <p className="clean-feature-card__description">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Milestones */}
      <section className="team-section" style={{ background: '#ffffff' }}>
        <div className="team-section__container">
          <h2 className="section-title">Recent milestones.</h2>
          <p className="section-description">
            We ship continuously. Here's what we've been working on.
          </p>
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'left' }}>
            {milestones.map((m, index) => (
              <motion.div 
                key={index} 
                style={{ padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#f8fafc', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div style={{ padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, background: m.status === 'Shipped' ? '#dcfce7' : m.status === 'In progress' ? '#fef9c3' : '#f1f5f9', color: m.status === 'Shipped' ? '#166534' : m.status === 'In progress' ? '#854d0e' : '#475569', flexShrink: 0, width: '90px', textAlign: 'center' }}>
                  {m.status}
                </div>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#1e293b' }}>{m.title}</h4>
                  <p style={{ margin: 0, fontSize: '15px', color: '#475569', lineHeight: 1.5 }}>{m.description}</p>
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
