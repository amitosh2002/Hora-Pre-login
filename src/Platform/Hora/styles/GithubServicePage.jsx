import React, { useState } from 'react';
import {
  Shield,
  Lock,
  GitBranch,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  XCircle,
  Key,
  Database,
  Brain,
  Eye,
  RefreshCw,
  AlertTriangle,
  Clock,
  BarChart3,
  FileText,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './styles/GitHubServicePage.scss';

export default function GitHubServicePage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const doraMetrics = [
    {
      metric: 'Deployment Frequency',
      source: 'GitHub Actions / Deployments',
      icon: Zap
    },
    {
      metric: 'Lead Time for Changes',
      source: 'PR created → merged',
      icon: Clock
    },
    {
      metric: 'Change Failure Rate',
      source: 'Failed deployments',
      icon: AlertTriangle
    },
    {
      metric: 'MTTR',
      source: 'Recovery window after failures',
      icon: RefreshCw
    }
  ];

  const dataAccessed = [
    {
      category: 'Repository Metadata',
      items: ['Repository name', 'Default branch', 'Visibility (public/private)'],
      icon: Database
    },
    {
      category: 'Pull Requests',
      items: ['PR count', 'Author', 'Created/merged timestamps', 'Review duration', 'Lead time to merge'],
      icon: GitBranch
    },
    {
      category: 'Commits',
      items: ['Commit timestamps', 'Commit authorship', 'Branch comparisons'],
      icon: FileText
    },
    {
      category: 'Deployments & Workflows',
      items: ['GitHub Actions runs', 'Deployment timestamps', 'Deployment success/failure', 'Failed workflows'],
      icon: TrendingUp
    }
  ];

  const notAccessed = [
    'Private user messages',
    'GitHub issues comments content (unless explicitly enabled)',
    'Source code contents (except commit metadata)'
  ];

  const permissions = [
    { permission: 'Read metadata', reason: 'Repo identification', required: true },
    { permission: 'Read pull requests', reason: 'Velocity & lead time', required: true },
    { permission: 'Read actions', reason: 'Deployment tracking', required: true },
    { permission: 'Read commits', reason: 'Contribution analysis', required: true }
  ];

  const optionalPermissions = [
    { permission: 'Create branches', reason: 'Branch creation', required: false },
    { permission: 'Create PRs', reason: 'Automated PRs', required: false },
    { permission: 'Read releases', reason: 'Release workflows', required: false }
  ];

  return (
    <div className="github-service-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-section__container">
          <div className="hero-section__content">
            <div className="badge">
              <Lock size={14} />
              <span>Secure & Transparent</span>
            </div>
            <h1 className="hero-section__title">
              How Hora Uses GitHub Data
            </h1>
            <p className="hero-section__subtitle">
              Hora integrates with GitHub using a GitHub App to securely access repository data.
              This enables us to compute engineering velocity, DORA metrics, and AI-assisted insights
              without requiring direct user credentials or full GitHub account access.
            </p>
            <div className="hero-section__highlights">
              <div className="highlight">
                <CheckCircle size={20} />
                <span>Never stores passwords</span>
              </div>
              <div className="highlight">
                <CheckCircle size={20} />
                <span>No personal access tokens</span>
              </div>
              <div className="highlight">
                <CheckCircle size={20} />
                <span>Fully revocable access</span>
              </div>
            </div>
          </div>
          <div className="hero-section__illustration">
            <svg viewBox="0 0 400 300" className="hero-svg">
              {/* Shield with Lock */}
              <g className="shield-group">
                <path
                  d="M200 40 L200 40 Q200 30 190 30 L130 30 Q120 30 120 40 L120 100 Q120 140 160 180 L200 210 L240 180 Q280 140 280 100 L280 40 Q280 30 270 30 L210 30 Q200 30 200 40 Z"
                  fill="#0f172a"
                  opacity="0.05"
                  stroke="#0f172a"
                  strokeWidth="1"
                />
                <circle cx="200" cy="100" r="30" fill="#0f172a" />
                <rect x="190" y="95" width="20" height="25" rx="2" fill="white" />
                <circle cx="200" cy="90" r="8" stroke="white" strokeWidth="2.5" fill="none" />
              </g>
              
              {/* Data Flow Lines */}
              <g className="flow-lines" opacity="0.2">
                <path d="M80 240 Q120 220 160 240" stroke="#0f172a" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                <path d="M240 240 Q280 220 320 240" stroke="#0f172a" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
              </g>
              
              {/* Status Indicators */}
              <circle cx="80" cy="260" r="12" fill="#0f172a" opacity="0.1" />
              <path d="M75 260 L78 263 L85 257" stroke="#0f172a" strokeWidth="2" fill="none" />
              
              <circle cx="160" cy="260" r="12" fill="#0f172a" opacity="0.1" />
              <path d="M155 260 L158 263 L165 257" stroke="#0f172a" strokeWidth="2" fill="none" />
              
              <circle cx="240" cy="260" r="12" fill="#0f172a" opacity="0.1" />
              <path d="M235 260 L238 263 L245 257" stroke="#0f172a" strokeWidth="2" fill="none" />
              
              <circle cx="320" cy="260" r="12" fill="#0f172a" opacity="0.1" />
              <path d="M315 260 L318 263 L325 257" stroke="#0f172a" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Authentication Model */}
      <div className="content-section-service content-section--auth">
        <div className="section-inner">
        <div className="section-header">
          <Key size={24} />
          <h2>Authentication Model</h2>
        </div>
        
        <div className="auth-container">
          <div className="auth-card">
            <h3>Enterprise-Grade Security</h3>
            <p>Hora leverages GitHub Apps to provide a secure, scalable, and granular authentication model that surpasses traditional OAuth methods.</p>
            
            <div className="benefits-grid">
              <div className="benefit-box">
                <div className="benefit-box__icon">
                  <Shield size={20} />
                </div>
                <span>Least-privilege scoped access</span>
              </div>
              <div className="benefit-box">
                <div className="benefit-box__icon">
                  <Database size={20} />
                </div>
                <span>Per-repository installation control</span>
              </div>
              <div className="benefit-box">
                <div className="benefit-box__icon">
                  <Clock size={20} />
                </div>
                <span>Short-lived auto-rotating tokens</span>
              </div>
              <div className="benefit-box">
                <div className="benefit-box__icon">
                  <Users size={20} />
                </div>
                <span>Granular organizational permissions</span>
              </div>
            </div>
          </div>

          <div className="flow-container">
            <h4 className="flow-title">Secure Authentication Flow</h4>
            <div className="flow-vertical">
              <div className="flow-item">
                <div className="flow-item__box">Hora Application</div>
                <div className="flow-item__arrow">
                  <div className="arrow-line"></div>
                  <span className="arrow-label">Private Key JWT</span>
                </div>
              </div>
              <div className="flow-item">
                <div className="flow-item__box">GitHub App Interface</div>
                <div className="flow-item__arrow">
                  <div className="arrow-line"></div>
                  <span className="arrow-label">Installation Token</span>
                </div>
              </div>
              <div className="flow-item">
                <div className="flow-item__box flow-item__box--final">GitHub API v3</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Data Accessed */}
      <div className="content-section-service">
        <div className="section-inner">
        <div className="section-header">
          <Eye size={24} />
          <h2>GitHub Data Hora Accesses</h2>
        </div>
        <p className="section-description">
          Hora only accesses data required for analytics and reporting.
        </p>

        <div className="data-grid">
          {dataAccessed.map((data, index) => {
            const Icon = data.icon;
            return (
              <div key={index} className="data-card">
                <div className="data-card__header">
                  <div className="data-card__icon">
                    <Icon size={20} />
                  </div>
                  <h4>{data.category}</h4>
                </div>
                <ul className="data-card__list">
                  {data.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="warning-card">
          <div className="warning-card__header">
            <XCircle size={20} />
            <h4>Hora Does NOT Read</h4>
          </div>
          <ul className="warning-list">
            {notAccessed.map((item, index) => (
              <li key={index}>
                <XCircle size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>

      {/* DORA Metrics */}
      <div className="content-section-service">
        <div className="section-inner">
        <div className="section-header">
          <BarChart3 size={24} />
          <h2>DORA Metrics Calculation</h2>
        </div>
        <p className="section-description">
          Hora computes industry-standard DORA metrics using GitHub signals.
        </p>

        <div className="metrics-table">
          <div className="metrics-table__header">
            <div>Metric</div>
            <div>Source</div>
          </div>
          {doraMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="metrics-table__row">
                <div className="metrics-table__cell">
                  <Icon size={18} />
                  <span>{metric.metric}</span>
                </div>
                <div className="metrics-table__cell metrics-table__cell--source">
                  {metric.source}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>

      {/* AI Safety */}
      <div className="content-section-service">
        <div className="section-inner">
        <div className="section-header">
          <Brain size={24} />
          <h2>AI Safety & Data Minimization</h2>
        </div>
        
        <div className="ai-safety-grid">
          <div className="ai-card ai-card--safe">
            <CheckCircle size={24} />
            <h4>What AI Receives</h4>
            <ul>
              <li>Numeric metrics & summaries</li>
              <li>Aggregated, non-PII data</li>
              <li>Velocity summaries</li>
              <li>Bottleneck analysis</li>
            </ul>
          </div>

          <div className="ai-card ai-card--blocked">
            <XCircle size={24} />
            <h4>Never Sent to AI</h4>
            <ul>
              <li>Raw GitHub tokens or secrets</li>
              <li>Private code or commit diffs</li>
              <li>File contents</li>
              <li>Access tokens</li>
            </ul>
          </div>
        </div>

        <div className="info-banner">
          <Shield size={20} />
          <p>If AI is disabled, Hora continues to function with pure metrics. AI responses gracefully degrade.</p>
        </div>
        </div>
      </div>

      {/* Permissions */}
      <div className="content-section-service">
        <div className="section-inner">
        <div className="section-header">
          <Lock size={24} />
          <h2>Permissions Requested</h2>
        </div>

        <div className="permissions-section">
          <h4>Required Permissions</h4>
          <div className="permissions-list">
            {permissions.map((perm, index) => (
              <div key={index} className="permission-item">
                <div className="permission-item__name">
                  <CheckCircle size={16} />
                  <span>{perm.permission}</span>
                </div>
                <div className="permission-item__reason">{perm.reason}</div>
              </div>
            ))}
          </div>

          <h4>Optional Permissions (If Enabled)</h4>
          <div className="permissions-list permissions-list--optional">
            {optionalPermissions.map((perm, index) => (
              <div key={index} className="permission-item">
                <div className="permission-item__name">
                  <div className="optional-badge">Optional</div>
                  <span>{perm.permission}</span>
                </div>
                <div className="permission-item__reason">{perm.reason}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* User Control */}
      <div className="content-section-service">
        <div className="section-inner">
        <div className="section-header">
          <RefreshCw size={24} />
          <h2>User Control & Revocation</h2>
        </div>

        <div className="control-grid">
          <div className="control-card">
            <h4>Full Control</h4>
            <ul>
              <li>
                <CheckCircle size={16} />
                <span>Remove GitHub App installation anytime</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span>Tokens expire automatically</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span>Permissions transparent in GitHub UI</span>
              </li>
            </ul>
          </div>

          <div className="control-card">
            <h4>After Uninstalling</h4>
            <ul>
              <li>
                <CheckCircle size={16} />
                <span>Hora immediately loses access</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span>No background polling continues</span>
              </li>
              <li>
                <CheckCircle size={16} />
                <span>All data requests cease</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}