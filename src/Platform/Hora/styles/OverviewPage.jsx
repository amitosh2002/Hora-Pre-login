import React, { useState } from 'react';
import {
  BarChart3,
  TrendingUp,
  Zap,
  Users,
  GitBranch,
  Brain,
  Activity,
  Target,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Sparkles,
  LineChart,
  PieChart,
  Gauge
} from 'lucide-react';
import './styles/OverviewPage.scss';

export default function OverviewPage() {
  const [selectedMetric, setSelectedMetric] = useState('velocity');

  const velocityMetrics = [
    {
      label: 'Deployment Frequency',
      value: '2.4x/week',
      trend: '+12%',
      icon: Zap,
      color: 'green'
    },
    {
      label: 'Lead Time',
      value: '3.2 days',
      trend: '-18%',
      icon: Clock,
      color: 'green'
    },
    {
      label: 'Change Failure Rate',
      value: '5.2%',
      trend: '-3%',
      icon: AlertCircle,
      color: 'yellow'
    },
    {
      label: 'MTTR',
      value: '2.1 hours',
      trend: '-25%',
      icon: Activity,
      color: 'green'
    }
  ];

  const velocityMatrix = [
    { developer: 'Alex Chen', velocity: 85, prs: 12, deployments: 8, status: 'high' },
    { developer: 'Sarah Johnson', velocity: 92, prs: 15, deployments: 10, status: 'high' },
    { developer: 'Mike Rodriguez', velocity: 68, prs: 9, deployments: 6, status: 'medium' },
    { developer: 'Emma Wilson', velocity: 78, prs: 11, deployments: 7, status: 'medium' },
    { developer: 'David Kim', velocity: 95, prs: 18, deployments: 12, status: 'high' },
    { developer: 'Lisa Anderson', velocity: 72, prs: 10, deployments: 6, status: 'medium' }
  ];

  const geminiInsights = [
    {
      type: 'optimization',
      title: 'PR Review Bottleneck Detected',
      description: 'Average review time increased 40% in the last sprint. Consider parallel review assignments.',
      impact: 'High',
      action: 'Review assignment strategy'
    },
    {
      type: 'trend',
      title: 'Velocity Trend Analysis',
      description: 'Team velocity has increased 15% over the last quarter. Deployment frequency shows consistent growth.',
      impact: 'Positive',
      action: 'Continue current practices'
    },
    {
      type: 'alert',
      title: 'Deployment Risk Alert',
      description: 'Recent changes show higher failure rate on Fridays. Consider scheduling critical deployments earlier.',
      impact: 'Medium',
      action: 'Review deployment schedule'
    }
  ];

  return (
    <div className="overview-page">
      {/* Hero Section */}
      <section className="overview-hero">
        <div className="overview-hero__container">
          <div className="overview-hero__badge">
            <Sparkles size={16} />
            <span>Platform Overview</span>
          </div>
          <h1 className="overview-hero__title">
            Hora Platform Dashboard
          </h1>
          <p className="overview-hero__subtitle">
            Real-time insights into engineering velocity, team performance, and delivery metrics powered by AI-driven analytics.
          </p>
        </div>
      </section>

      {/* DORA Metrics Grid */}
      <section className="metrics-section">
        <div className="section-inner">
          <div className="section-header">
            <BarChart3 size={24} />
            <h2>DORA Metrics</h2>
          </div>
          <div className="metrics-grid">
            {velocityMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div key={index} className={`metric-card metric-card--${metric.color}`}>
                  <div className="metric-card__header">
                    <div className="metric-card__icon">
                      <Icon size={20} />
                    </div>
                    <span className="metric-card__trend">{metric.trend}</span>
                  </div>
                  <div className="metric-card__value">{metric.value}</div>
                  <div className="metric-card__label">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Velocity Matrix */}
      <section className="velocity-section">
        <div className="section-inner">
          <div className="section-header">
            <LineChart size={24} />
            <h2>Developer Velocity Matrix</h2>
            <p className="section-description">
              Individual contributor performance metrics and delivery velocity tracking
            </p>
          </div>
          <div className="velocity-matrix">
            <div className="velocity-matrix__header">
              <div>Developer</div>
              <div>Velocity Score</div>
              <div>PRs</div>
              <div>Deployments</div>
              <div>Status</div>
            </div>
            {velocityMatrix.map((dev, index) => (
              <div key={index} className="velocity-matrix__row">
                <div className="velocity-matrix__cell velocity-matrix__cell--name" data-label="Developer">
                  <div className="dev-avatar">{dev.developer.split(' ').map(n => n[0]).join('')}</div>
                  <span>{dev.developer}</span>
                </div>
                <div className="velocity-matrix__cell" data-label="Velocity Score">
                  <div className="velocity-bar">
                    <div 
                      className="velocity-bar__fill" 
                      style={{ width: `${dev.velocity}%` }}
                    />
                    <span className="velocity-bar__value">{dev.velocity}</span>
                  </div>
                </div>
                <div className="velocity-matrix__cell" data-label="PRs">{dev.prs}</div>
                <div className="velocity-matrix__cell" data-label="Deployments">{dev.deployments}</div>
                <div className="velocity-matrix__cell" data-label="Status">
                  <span className={`status-badge status-badge--${dev.status}`}>
                    {dev.status === 'high' ? 'High' : dev.status === 'medium' ? 'Medium' : 'Low'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gemini AI Insights */}
      <section className="gemini-section">
        <div className="section-inner">
          <div className="section-header">
            <Brain size={24} />
            <h2>Gemini AI Insights</h2>
            <p className="section-description">
              AI-powered analysis and recommendations for optimizing team performance
            </p>
          </div>
          <div className="insights-grid">
            {geminiInsights.map((insight, index) => (
              <div key={index} className={`insight-card insight-card--${insight.type}`}>
                <div className="insight-card__header">
                  <div className="insight-card__icon">
                    {insight.type === 'optimization' && <Target size={20} />}
                    {insight.type === 'trend' && <TrendingUp size={20} />}
                    {insight.type === 'alert' && <AlertCircle size={20} />}
                  </div>
                  <span className={`impact-badge impact-badge--${insight.impact.toLowerCase()}`}>
                    {insight.impact}
                  </span>
                </div>
                <h3 className="insight-card__title">{insight.title}</h3>
                <p className="insight-card__description">{insight.description}</p>
                <div className="insight-card__footer">
                  <span className="insight-card__action">{insight.action}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features Overview */}
      <section className="features-section">
        <div className="section-inner">
          <div className="section-header">
            <Gauge size={24} />
            <h2>Platform Capabilities</h2>
          </div>
          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-box__icon">
                <GitBranch size={24} />
              </div>
              <h3>GitHub Integration</h3>
              <p>Seamless connection with GitHub repositories for real-time code metrics and PR tracking</p>
              <ul>
                <li>PR velocity tracking</li>
                <li>Commit frequency analysis</li>
                <li>Branch management insights</li>
              </ul>
            </div>
            <div className="feature-box">
              <div className="feature-box__icon">
                <Brain size={24} />
              </div>
              <h3>AI-Powered Analytics</h3>
              <p>Gemini AI provides intelligent insights and predictive analytics for team performance</p>
              <ul>
                <li>Bottleneck detection</li>
                <li>Trend forecasting</li>
                <li>Optimization recommendations</li>
              </ul>
            </div>
            <div className="feature-box">
              <div className="feature-box__icon">
                <BarChart3 size={24} />
              </div>
              <h3>Velocity Tracking</h3>
              <p>Comprehensive velocity metrics to understand team delivery patterns and capacity</p>
              <ul>
                <li>Individual contributor metrics</li>
                <li>Team-wide aggregations</li>
                <li>Historical trend analysis</li>
              </ul>
            </div>
            <div className="feature-box">
              <div className="feature-box__icon">
                <Zap size={24} />
              </div>
              <h3>DORA Metrics</h3>
              <p>Industry-standard DORA metrics for measuring engineering excellence</p>
              <ul>
                <li>Deployment frequency</li>
                <li>Lead time for changes</li>
                <li>Change failure rate & MTTR</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
