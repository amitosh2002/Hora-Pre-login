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
      <section className="solutions-section" style={{ background: '#f8fafc' }}>
        <div className="solutions-section__container">
          <div className="solutions-section__header">
            <h2 className="section-title">Live from your repos</h2>
            <p className="section-description">
              Every event below feeds Hora Matrix directly — no manual status updates, no stale dashboards.
            </p>
          </div>
          
          <div className="hero-solutions-grid">
            {flowCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={index} 
                  className="clean-feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`clean-feature-card__icon-container ${card.colorClass}`}>
                    <Icon size={28} />
                  </div>
                  <h4 className="clean-feature-card__title" style={{ fontSize: '18px' }}>{card.title}</h4>
                  <p className="clean-feature-card__description">{card.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Self-Hosted Runners Section */}
      <section className="our-story" style={{ background: '#ffffff', padding: '100px 40px' }}>
        <div className="our-story__container" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <div className="our-story__subtitle">Self-hosted runners</div>
            <h2 className="our-story__title" style={{ fontSize: '36px' }}>Bring your own infrastructure.</h2>
            
            <p className="our-story__text" style={{ marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
              Register a self-hosted runner at the org level and every repo can use it — no per-repo setup, no duplicated build machines.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', textAlign: 'left' }}>
               <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                 <Server size={24} color="#8b5cf6" style={{ marginBottom: '16px' }} />
                 <p style={{ fontSize: '15px', color: '#1e293b', fontWeight: 500, margin: 0 }}>Org-level registration, available to all repos automatically</p>
               </div>
               <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                 <Activity size={24} color="#8b5cf6" style={{ marginBottom: '16px' }} />
                 <p style={{ fontSize: '15px', color: '#1e293b', fontWeight: 500, margin: 0 }}>Run multiple runners per org for parallel job capacity</p>
               </div>
               <div style={{ padding: '24px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                 <Zap size={24} color="#8b5cf6" style={{ marginBottom: '16px' }} />
                 <p style={{ fontSize: '15px', color: '#1e293b', fontWeight: 500, margin: 0 }}>Deploy events from your own infrastructure feed Hora Matrix exactly like GitHub-hosted runs</p>
               </div>
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