import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Zap,
  Activity,
  Target,
  Clock,
  AlertCircle
} from 'lucide-react';
import './styles/OverviewPage.scss';
import AnalyticsDashboardGraphic from '../../../components/Graphics/AnalyticsDashboardGraphic';

export default function OverviewPage() {
  const velocityMetrics = [
    {
      label: 'Deployment Frequency',
      value: '2.4x/week',
      trend: '+12%',
      icon: Zap,
      colorClass: 'icon-blue'
    },
    {
      label: 'Lead Time',
      value: '3.2 days',
      trend: '-18%',
      icon: Clock,
      colorClass: 'icon-purple'
    },
    {
      label: 'Change Failure Rate',
      value: '5.2%',
      trend: '-3%',
      icon: AlertCircle,
      colorClass: 'icon-amber'
    },
    {
      label: 'MTTR',
      value: '2.1 hours',
      trend: '-25%',
      icon: Activity,
      colorClass: 'icon-pink'
    }
  ];

  const geminiInsights = [
    {
      title: 'PR Review Bottleneck Detected',
      description: 'Our AI models have detected a 40% increase in average review times over the last sprint, specifically in core repositories. This is heavily impacting your overall Lead Time. We recommend exploring parallel review assignments or implementing automated early-stage code checks to reduce manual review overhead.',
      icon: Target,
      colorClass: 'icon-amber'
    },
    {
      title: 'Velocity Trend Analysis',
      description: 'Team velocity has seen a healthy 15% increase over the last quarter. This consistent growth correlates strongly with your recent adoption of automated pipelines. Deployment frequency is up, and your Change Failure Rate remains solidly below the industry average, indicating a highly stable release cadence.',
      icon: TrendingUp,
      colorClass: 'icon-teal'
    }
  ];

  return (
    <div className="page-container overview-page">
      {/* Curved Hero Section */}
      <section className="design-block design-block--hero hero-curved">
        <div className="hero-curved__content">
          <div className="hero-curved__text-area">
            <h1 className="hero-curved__title">
              Engineering <br/> Analytics
            </h1>
            <div className="hero-curved__subtitle">
              <p>
                Real-time insights into engineering velocity, team performance, and delivery metrics powered by AI-driven analytics.
              </p>
              <button className="btn-pill btn-pill--primary" onClick={() => window.location.href = 'https://stage-hora.netlify.app/'}>
                View Dashboard
              </button>
            </div>
          </div>
        </div>
        
        <div className="hero-curved__illustration">
           <AnalyticsDashboardGraphic />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="design-block design-block--light-right-skew solutions-section">
        <div className="solutions-section__container">
          <div className="solutions-section__header">
            <h2 className="section-title">Metrics that <br/> matter.</h2>
            <p className="section-description">
              Track DORA metrics and AI-driven insights to accelerate your team's workflow.
            </p>
          </div>
          
          <div className="solutions-section__grid">
            
            {velocityMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className="playful-feature">
                  <div className={`playful-feature__icon-container ${metric.colorClass}`}>
                    <div className="playful-feature__icon">
                      <Icon size={28} />
                    </div>
                  </div>
                  <h4 className="playful-feature__title">{metric.value}</h4>
                  <p className="playful-feature__description">
                    <strong>{metric.label}</strong> <br/>
                    Trend: <span style={{color: '#ff2d88'}}>{metric.trend}</span>
                  </p>
                </div>
              );
            })}

            {geminiInsights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={`insight-${index}`} className="playful-feature">
                  <div className={`playful-feature__icon-container ${insight.colorClass}`}>
                    <div className="playful-feature__icon">
                      <Icon size={28} />
                    </div>
                  </div>
                  <h4 className="playful-feature__title">{insight.title}</h4>
                  <p className="playful-feature__description">{insight.description}</p>
                </div>
              );
            })}

          </div>
        </div>
      </section>
    </div>
  );
}
