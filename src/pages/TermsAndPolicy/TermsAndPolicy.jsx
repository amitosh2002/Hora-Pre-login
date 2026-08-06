import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileText, Shield, ArrowLeft } from 'lucide-react';
import './TermsAndPolicy.scss';
import SecurityTrustGraphic from '../../components/Graphics/SecurityTrustGraphic';

export default function TermsAndPolicy() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <div className="page-container terms-policy-page">
      {/* Curved Hero Section */}
      <section className="design-block design-block--hero hero-curved">
        <div className="hero-curved__content">
          <div className="hero-curved__text-area">
            <h1 className="hero-curved__title">
              Terms & <br/> Privacy
            </h1>
            <div className="hero-curved__subtitle">
              <p>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <Link to="/" className="btn-pill btn-pill--outline" style={{ background: '#fff', border: 'none', color: '#2b395f' }}>
                <ArrowLeft size={16} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
        
        <div className="hero-curved__illustration">
           <SecurityTrustGraphic />
        </div>
      </section>

      {/* Legal Section */}
      <section className="design-block design-block--light-right-skew solutions-section">
        <div className="solutions-section__container">
          <div className="solutions-section__header">
            <h2 className="section-title">Legal & <br/> Agreements.</h2>
            <p className="section-description">
              Please read these Terms of Service carefully before using the Hora platform.
            </p>
          </div>
          
          <div className="solutions-section__grid">
            
            <div className="playful-feature">
              <div className="playful-feature__icon-container icon-blue">
                <div className="playful-feature__icon">
                  <FileText size={28} />
                </div>
              </div>
              <h4 className="playful-feature__title">1. Terms of Service</h4>
              <p className="playful-feature__description">
                By accessing or using Hora, you agree to be bound by these Terms. 
                Hora provides engineering intelligence, velocity analytics, and GitHub-integrated insights. 
                You agree to use the service only for lawful purposes.
              </p>
            </div>

            <div className="playful-feature">
              <div className="playful-feature__icon-container icon-pink">
                <div className="playful-feature__icon">
                  <Shield size={28} />
                </div>
              </div>
              <h4 className="playful-feature__title">2. Privacy Policy</h4>
              <p className="playful-feature__description">
                We collect information you provide (e.g., account details, GitHub connection) necessary to operate the service. 
                We do not sell your personal data. We implement industry-standard security measures to protect your data.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
