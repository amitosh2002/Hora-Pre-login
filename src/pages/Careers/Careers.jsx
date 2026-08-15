import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';
import './Careers.scss';

export default function Careers() {
  return (
    <div className="page-container careers-page">
      <section className="hero-clean">
        <div className="hero-clean__content" style={{ gridTemplateColumns: '1fr', textAlign: 'center' }}>
          <div className="hero-clean__text-area" style={{ maxWidth: '800px', margin: '0 auto', alignItems: 'center' }}>
            <motion.div 
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ color: '#8b5cf6', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px', fontSize: '14px' }}
            >
              Careers at Hora
            </motion.div>
            
            <motion.h1 
              className="hero-clean__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: '56px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Build the tools you'd want to use yourself.
            </motion.h1>
            
            <motion.p 
              className="hero-clean__subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: '20px', color: '#475569', lineHeight: 1.6, maxWidth: '640px', marginTop: '24px', textAlign: 'center' }}
            >
              We're a small, engineering-heavy team building a platform that developers and managers actually respect.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="open-roles-section" style={{ padding: '80px 40px', background: '#f8fafc', minHeight: '50vh' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div 
            className="coming-soon-card" 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ background: '#ffffff', borderRadius: '24px', padding: '60px 40px', textAlign: 'center', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' }}
          >
            <div style={{ width: '64px', height: '64px', background: '#f3e8ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#8b5cf6' }}>
              <Briefcase size={32} />
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#1e293b', marginBottom: '16px' }}>Roles coming soon</h2>
            <p style={{ fontSize: '18px', color: '#64748b', lineHeight: 1.6, marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
              We're not actively hiring right now, but we're always looking out for exceptional engineers who share our ideology. Check back later for open roles.
            </p>
            <button 
              onClick={() => window.location.href = 'mailto:careers@hora.team'}
              style={{ 
                background: '#8b5cf6', 
                color: 'white', 
                border: 'none', 
                padding: '16px 32px', 
                borderRadius: '8px', 
                fontWeight: 600, 
                fontSize: '16px',
                display: 'inline-flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseOver={(e) => e.target.style.background = '#7c3aed'}
              onMouseOut={(e) => e.target.style.background = '#8b5cf6'}
            >
              Get in touch <ArrowRight size={20} style={{ marginLeft: '8px' }} />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
