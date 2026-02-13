import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  GitBranch, 
  Workflow, 
  BarChart3, 
  CheckSquare, 
  Clock, 
  ArrowRight,
  ChevronRight,
  Database,
  Calendar,
  Layers,
  Layout,
  Globe
} from 'lucide-react';
import './styles/HoraServicesIntro.scss';

export default function HoraServicesIntro() {
  const mainServices = [
    {
      title: "Agile Workspace",
      description: "Comprehensive sprint management with dynamic backlogs, Kanban boards, and customizable workflows tailored for rapid iteration.",
      icon: Workflow,
      tag: "CORE",
      to: null
    },
    {
      title: "Engineering Intelligence",
      description: "Direct GitHub integration providing DORA metrics, lead time analysis, and automated deployment signals for high-performing teams.",
      icon: GitBranch,
      tag: "GIT",
      to: "/github-services"
    },
    {
      title: "Unified Analytics",
      description: "Real-time visibility into project health, developer velocity, and delivery trends through advanced data aggregation.",
      icon: BarChart3,
      tag: "DATA",
      to: null
    },
    {
      title: "Flow Orchestration",
      description: "Automate task creation, branch naming, and pull request tracking to eliminate manual overhead and reduce context switching.",
      icon: Zap,
      tag: "AUTOMATION",
      to: null
    },
    {
      title: "Access & Security",
      description: "Enterprise-grade role-based access control (RBAC) and data minimization protocols to keep your source code safe.",
      icon: Shield,
      tag: "SECURITY",
      to: null
    },
    {
      title: "Resource Insights",
      description: "Integrated time logs, capacity planning, and collaborative calendars to optimize team bandwidth effectively.",
      icon: Clock,
      tag: "MANAGEMENT",
      to: null
    }
  ];

  const highlights = [
    {
      badge: "INTEGRATION",
      title: "Deep GitHub Synergy",
      description: "Hora isn't just a layer over your code—it's part of your development lifecycle. We map your GitHub signals directly to your agile velocity.",
      features: ["Auto-Sync Branches", "PR Status Tracking", "Deployment Signal Mapping", "Repo-Level Permissions"],
      reverse: false
    },
    {
      badge: "ANALYTICS",
      title: "Modern DORA Dashboards",
      description: "Stop guessing your team's performance. Gain access to industry-standard metrics that help you identify bottlenecks and ship faster.",
      features: ["Lead Time for Change", "Deployment Frequency", "Change Failure Rate", "Recovery Benchmarking"],
      reverse: true
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="hora-services-intro">
      {/* Hero Section */}
      <section className="hero-intro">
        <div className="hero-intro__container">
          <div className="hero-intro__badge">Introducing the Hora Ecosystem</div>
          <h1 className="hero-intro__title">
            The Single Source of Truth for <br /> Engineering Execution
          </h1>
          <p className="hero-intro__subtitle">
            A unified destination for modern agile teams to plan, track, and optimize software delivery without the noise of disconnected tools.
          </p>
          <div className="hero-intro__actions">
            <button className="button button--primary" onClick={() => window.location.href = 'https://stage-hora.netlify.app/'}>
              Explore Platform
            </button>
            <button className="button button--outline" onClick={() =>navigate( '/overview')}>
                Overview
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-showcase">
        <div className="services-showcase__grid">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const cardContent = (
              <>
                <div className="service-card-v2__icon">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div className="badge" style={{ marginBottom: '16px', fontSize: '10px', width: 'fit-content' }}>{service.tag}</div>
                <h3 className="service-card-v2__title">{service.title}</h3>
                <p className="service-card-v2__description">{service.description}</p>
                <div className="service-card-v2__footer">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="service-card-v2__arrow" />
                </div>
              </>
            );
            return service.to ? (
              <Link key={index} to={service.to} className="service-card-v2 service-card-v2--link">
                {cardContent}
              </Link>
            ) : (
              <div key={index} className="service-card-v2">
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>

      {/* Highlights Sections */}
      {highlights.map((item, index) => (
        <section key={index} className="feature-highlight">
          <div className={`feature-highlight__container ${item.reverse ? 'reverse' : ''}`}>
            <div className="feature-highlight__content">
              <span className="feature-highlight__badge">{item.badge}</span>
              <h2 className="feature-highlight__title">{item.title}</h2>
              <p className="feature-highlight__description">{item.description}</p>
              <ul className="feature-highlight__list">
                {item.features.map((feat, i) => (
                  <li key={i}>
                    <CheckSquare size={18} strokeWidth={2} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="feature-highlight__visual">
              <div style={{ opacity: 0.1, position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {index === 0 ? <GitBranch size={200} /> : <BarChart3 size={200} />}
              </div>
              <div style={{ zIndex: 1, padding: '40px', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                <pre style={{ fontSize: '12px', color: '#64748b' }}>
                  {`// Analytical Model v2.4\n{\n  service: "${item.title}",\n  integrated: true,\n  status: "Optimized"\n}`}
                </pre>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Large CTA Section */}
      <section className="intro-cta">
        <div className="intro-cta__container">
          <h2 className="intro-cta__title">Ready to define your <br /> Engineering Standard?</h2>
          <p className="intro-cta__description">
            Join forward-thinking teams using Hora to eliminate developer friction and master their flow.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button className="button button--white" onClick={() => window.location.href = '/'}>
              Get Started for Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
