import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, LayoutDashboard, GitBranch, BarChart3, Workflow } from 'lucide-react';
import DataVizGraphic from './DataVizGraphic';
import './styles/HoraServicesIntro.scss';

export default function HoraServicesIntro() {
  const mainServices = [
    {
      title: "Agile Workspace",
      description: "Comprehensive sprint management with dynamic backlogs, Kanban boards, and customizable workflows tailored for rapid iteration.",
      icon: LayoutDashboard,
      colorClass: "icon-pink"
    },
    {
      title: "Engineering Intelligence",
      description: "Direct GitHub integration providing DORA metrics, lead time analysis, and automated deployment signals for high-performing teams.",
      icon: GitBranch,
      colorClass: "icon-blue"
    },
    {
      title: "Unified Analytics",
      description: "Real-time visibility into project health, developer velocity, and delivery trends through advanced data aggregation.",
      icon: BarChart3,
      colorClass: "icon-purple"
    },
    {
      title: "Flow Orchestration",
      description: "Automate task creation, branch naming, and pull request tracking to eliminate manual overhead and reduce context switching.",
      icon: Workflow,
      colorClass: "icon-amber"
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="page-container hora-services-intro">
      {/* Curved Hero Section */}
      <section className="design-block design-block--hero hero-curved">
        <div className="hero-curved__content">
          <div className="hero-curved__text-area">
            <h1 className="hero-curved__title">
              Engineering <br/> Management
            </h1>
            <div className="hero-curved__subtitle">
              <p>
                Whether you own a complex architecture or lead a fast-moving team, 
                we provide innovative solutions to accelerate your delivery.
              </p>
              <button className="btn-pill btn-pill--primary" onClick={() => window.location.href = 'https://stage-hora.netlify.app/'}>
                Get Started!
              </button>
            </div>
          </div>
        </div>
        
        {/* The illustration sits at the bottom of the curve */}
        <div className="hero-curved__illustration">
           <DataVizGraphic />
        </div>
      </section>

      {/* Solutions Section */}
      <section className="design-block design-block--light-right-skew solutions-section">
        <div className="solutions-section__container">
          <div className="solutions-section__header">
            <h2 className="section-title">Discover all our <br/> solutions.</h2>
            <p className="section-description">
              From tracking every commit to unifying your analytics, discover all our services.
            </p>
            <button className="btn-pill btn-pill--outline" onClick={() => window.location.href = 'https://stage-hora.netlify.app/'}>
              Learn more !
            </button>
          </div>
          
          <div className="solutions-section__grid">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="playful-feature">
                  <div className={`playful-feature__icon-container ${service.colorClass}`}>
                    <div className="playful-feature__icon">
                      <IconComponent size={28} />
                    </div>
                  </div>
                  <h4 className="playful-feature__title">{service.title}</h4>
                  <p className="playful-feature__description">{service.description}</p>
                  <a href="#" className="playful-feature__link">
                    <ArrowRight size={16} /> En savoir plus
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
