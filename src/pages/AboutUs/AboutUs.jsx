import React from 'react';
import { Users, Rocket, Heart, Globe, ArrowRight } from 'lucide-react';
import './AboutUs.scss';

export default function AboutUs() {
  const values = [
    {
      title: 'Transparency',
      description: 'We believe in open communication. From our metrics to our roadmap, everything is built on trust and clarity.',
      icon: Globe,
      colorClass: 'icon-blue'
    },
    {
      title: 'Innovation',
      description: 'We push the boundaries of engineering intelligence, turning complex data into actionable insights for every team.',
      icon: Rocket,
      colorClass: 'icon-pink'
    },
    {
      title: 'People First',
      description: 'Tools should empower, not overwhelm. We design for humans, reducing noise and surfacing what truly matters.',
      icon: Heart,
      colorClass: 'icon-purple'
    },
    {
      title: 'Collaboration',
      description: 'Built by engineers, for engineers. We partner with our users to shape the future of engineering management.',
      icon: Users,
      colorClass: 'icon-amber'
    }
  ];

  const team = [
    { name: 'Engineering', count: '12+', description: 'Passionate developers building the future of DevOps intelligence.' },
    { name: 'Product & Design', count: '5+', description: 'Crafting experiences that engineering teams love to use every day.' },
    { name: 'Customer Success', count: '8+', description: 'Dedicated to ensuring every team achieves measurable outcomes.' },
  ];

  return (
    <div className="page-container about-page">
      {/* Curved Hero Section */}
      <section className="design-block design-block--dark hero-curved">
        <div className="hero-curved__content">
          <div className="hero-curved__text-area">
            <h1 className="hero-curved__title">
              About <br/> Hora.
            </h1>
            <div className="hero-curved__subtitle">
              <p>
                We're on a mission to give every engineering team the visibility they need to ship faster, smarter, and with confidence.
              </p>
              <button className="btn-pill btn-pill--primary" onClick={() => window.location.href = 'https://stage-hora.netlify.app/'}>
                Join Us
              </button>
            </div>
          </div>
        </div>

        <div className="hero-curved__illustration">
          <svg viewBox="0 0 600 400" className="playful-svg-graphic" style={{ overflow: 'visible' }}>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* People nodes */}
            <circle cx="200" cy="160" r="32" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" />
            <circle cx="200" cy="155" r="10" fill="#2b395f" />
            <path d="M 185 175 Q 200 185 215 175" fill="none" stroke="#2b395f" strokeWidth="3" strokeLinecap="round" />

            <circle cx="400" cy="160" r="32" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" />
            <circle cx="400" cy="155" r="10" fill="#ff2d88" />
            <path d="M 385 175 Q 400 185 415 175" fill="none" stroke="#ff2d88" strokeWidth="3" strokeLinecap="round" />

            <circle cx="300" cy="100" r="32" fill="#fff" stroke="#e2e8f0" strokeWidth="2" filter="drop-shadow(0 10px 20px rgba(0,0,0,0.05))" />
            <circle cx="300" cy="95" r="10" fill="#818cf8" />
            <path d="M 285 115 Q 300 125 315 115" fill="none" stroke="#818cf8" strokeWidth="3" strokeLinecap="round" />

            {/* Connecting lines */}
            <path d="M 232 160 L 268 130" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <path d="M 332 130 L 368 160" fill="none" stroke="#e2e8f0" strokeWidth="3" />
            <path d="M 232 175 L 368 175" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="6 6" />

            {/* Central hub */}
            <rect x="250" y="220" width="100" height="80" rx="16" fill="#2b395f" filter="drop-shadow(0 15px 30px rgba(15,23,42,0.12))" />
            <rect x="270" y="240" width="60" height="8" rx="4" fill="#475569" />
            <rect x="270" y="258" width="40" height="6" rx="3" fill="#475569" />
            <circle cx="300" cy="280" r="10" fill="#ff2d88" />
            <path d="M 296 280 L 300 284 L 306 276" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Lines from people to hub */}
            <path d="M 200 192 L 270 220" fill="none" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 300 132 L 300 220" fill="none" stroke="#cbd5e1" strokeWidth="2" />
            <path d="M 400 192 L 330 220" fill="none" stroke="#cbd5e1" strokeWidth="2" />

            {/* Sparkles */}
            <circle cx="150" cy="120" r="4" fill="#fbbf24" />
            <circle cx="450" cy="120" r="5" fill="#f472b6" />
            <circle cx="300" cy="340" r="4" fill="#60a5fa" />
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="design-block design-block--light-right-skew solutions-section">
        <div className="solutions-section__container">
          <div className="solutions-section__header">
            <h2 className="section-title">Our <br/> Values.</h2>
            <p className="section-description">
              The principles that guide everything we build and every decision we make.
            </p>
          </div>
          
          <div className="solutions-section__grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="playful-feature">
                  <div className={`playful-feature__icon-container ${value.colorClass}`}>
                    <div className="playful-feature__icon">
                      <Icon size={28} />
                    </div>
                  </div>
                  <h4 className="playful-feature__title">{value.title}</h4>
                  <p className="playful-feature__description">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="design-block design-block--dark team-section">
        <div className="team-section__container">
          <h2 className="section-title">Our <br/> Team.</h2>
          <p className="section-description" style={{ marginBottom: 48 }}>
            A growing team of passionate builders who believe that great tools make great teams.
          </p>
          <div className="team-section__grid">
            {team.map((dept, index) => (
              <div key={index} className="team-card">
                <span className="team-card__count">{dept.count}</span>
                <h4 className="team-card__name">{dept.name}</h4>
                <p className="team-card__description">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
