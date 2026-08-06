import React from 'react';
import {
  ShieldCheck,
  GitBranch,
  Lock,
  CheckCircle,
} from 'lucide-react';
import './styles/GitHubServicePage.scss';
import GitHubFlowGraphic from '../../../components/Graphics/GitHubFlowGraphic';

export default function GitHubServicePage() {
  return (
    <div className="page-container github-service-page">
      {/* Curved Hero Section */}
      <section className="design-block design-block--hero hero-curved">
        <div className="hero-curved__content">
          <div className="hero-curved__text-area">
            <h1 className="hero-curved__title">
              GitHub <br/> Integration
            </h1>
            <div className="hero-curved__subtitle">
              <p>
                Seamlessly connect your GitHub repositories to unlock real-time engineering metrics, DORA insights, and team velocity tracking.
              </p>
              <button className="btn-pill btn-pill--primary" onClick={() => window.location.href = 'https://stage-hora.netlify.app/'}>
                Connect GitHub
              </button>
            </div>
          </div>
        </div>
        
        <div className="hero-curved__illustration">
           <GitHubFlowGraphic />
        </div>
      </section>

      {/* Features Section */}
      <section className="design-block design-block--light-right-skew solutions-section">
        <div className="solutions-section__container">
          <div className="solutions-section__header">
            <h2 className="section-title">Secure & <br/> Powerful.</h2>
            <p className="section-description">
              We request only the data we need to power your metrics. Your code remains yours.
            </p>
          </div>
          
          <div className="solutions-section__grid">
            
            <div className="playful-feature">
              <div className="playful-feature__icon-container icon-blue">
                <div className="playful-feature__icon">
                  <ShieldCheck size={28} />
                </div>
              </div>
              <h4 className="playful-feature__title">Authentication & Security</h4>
              <p className="playful-feature__description">We use GitHub Apps for fine-grained permissions.</p>
              <ul>
                <li><CheckCircle size={16} /> OAuth 2.0 flow for secure authorization</li>
                <li><CheckCircle size={16} /> Tokens are encrypted at rest (AES-256)</li>
              </ul>
            </div>

            <div className="playful-feature">
              <div className="playful-feature__icon-container icon-purple">
                <div className="playful-feature__icon">
                  <GitBranch size={28} />
                </div>
              </div>
              <h4 className="playful-feature__title">Data Accessed</h4>
              <p className="playful-feature__description">We only read metadata required for velocity analytics.</p>
              <ul>
                <li><CheckCircle size={16} /> Pull Request metadata (status, timing, reviewers)</li>
                <li><CheckCircle size={16} /> Commit timestamps and authors</li>
                <li><CheckCircle size={16} /> Deployment events and status</li>
              </ul>
            </div>

            <div className="playful-feature">
              <div className="playful-feature__icon-container icon-pink">
                <div className="playful-feature__icon">
                  <Lock size={28} />
                </div>
              </div>
              <h4 className="playful-feature__title">What we DO NOT access</h4>
              <p className="playful-feature__description">Your proprietary code and secrets are strictly off-limits.</p>
              <ul>
                <li><Lock size={16} /> Source code contents (We don't clone repos)</li>
                <li><Lock size={16} /> Environment variables or secrets</li>
                <li><Lock size={16} /> CI/CD build logs</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}