import React, { useState, useEffect, Suspense, lazy } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Cpu, 
  Scale, 
  FileCode, 
  GitMerge, 
  Workflow, 
  Lock, 
  Sliders, 
  Check, 
  X, 
  Activity,
  Layers,
  ArrowUpRight,
  PlayCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import './FridayPage.scss';
import { FRIDAY_TECHNICAL_SCENES } from '../../../components/FridayStoryboard/fridayScenes';
import workChatSvg from '../../../assets/illustrations/undraw_work-chat_kw8x.svg';
import workingTogetherSvg from '../../../assets/illustrations/undraw_working-together_r43a.svg';
import dataAnalyticsSvg from '../../../assets/illustrations/undraw_data_analytics.svg';
import codeReviewSvg from '../../../assets/illustrations/undraw_code_review.svg';
import launchShipSvg from '../../../assets/illustrations/undraw_launch_ship.svg';

const FridayStoryboard = lazy(() => import('../../../components/FridayStoryboard'));

export default function FridayPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsVideoModalOpen(false);
    };
    if (isVideoModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isVideoModalOpen]);
  const factors = [
    { name: 'Skill Match', weight: '35%', desc: 'Parsed from repo manifests (Node, Redis, Docker) and commit language distributions.' },
    { name: 'Project Experience', weight: '20%', desc: 'Historical PR merges, module touches, and directory-level code contributions.' },
    { name: 'Similar Work', weight: '15%', desc: 'Semantic and structural similarity to previously resolved issues in Jira/Hora.' },
    { name: 'Sprint Capacity', weight: '15%', desc: 'Active story points and ticket counts evaluated against the team headroom ceiling.' },
    { name: 'Availability', weight: '10%', desc: 'Working hours, calendar schedule, and scheduled sprint leave.' },
    { name: 'Dependencies', weight: '5%', desc: 'Co-location of dependent tickets and PR review bottlenecks in the current sprint.' }
  ];

  const policyGates = [
    { title: 'Auto-Assign', threshold: 'Score ≥85 · Conf ≥75%', color: 'green', desc: 'High-certainty match with verified code experience and clear headroom. Dispatches immediately.' },
    { title: 'Recommend', threshold: 'Score ≥70 · Conf ≥60%', color: 'blue', desc: 'Strong match. Posts an actionable recommendation card to the backlog for one-click approval.' },
    { title: 'Suggest Only', threshold: 'Score 55–69', color: 'slate', desc: 'Moderate match with limited recent history. Suggests ownership without automatic triage.' },
    { title: 'Review Required', threshold: 'Blocked / Ambiguous', color: 'amber', desc: 'Upstream ticket dependency not closed, or task description has missing acceptance criteria.' },
    { title: 'Do Not Assign', threshold: 'Overloaded / No Match', color: 'red', desc: 'Engineer is at capacity cap (5/5 tickets) or has zero relevant stack history. Hard block.' }
  ];

  const comparisonRows = [
    { feature: 'Assignment Model', traditional: 'Opaque LLM prompt with hallucination risk', friday: 'Deterministic 6-factor mathematical equation' },
    { feature: 'Overload Protection', traditional: 'None (assigns based on vibes)', friday: 'Hard constraint ceiling (Zero-overload rule)' },
    { feature: 'Context Grounding', traditional: 'Ticket title only', friday: 'Repo manifests, commit history, directory touches' },
    { feature: 'Dependency Awareness', traditional: 'Ignored until standup', friday: 'Automated policy gate halts blocked tickets' },
    { feature: 'Auditability', traditional: 'No explanation or made-up rationale', friday: 'Every score breakdown & factor calculation shown' },
    { feature: 'Role of Generative AI', traditional: 'Decides the assignment', friday: 'Writes natural language summaries on verified data' }
  ];

  return (
    <div className="page-container friday-page">
      
      {/* Hero Section */}
      <section className="friday-page__hero">
        <div className="friday-page__hero-bg-illu friday-page__hero-bg-illu--left" aria-hidden="true">
          <img src={workChatSvg} alt="" />
        </div>
        <div className="friday-page__hero-bg-illu friday-page__hero-bg-illu--right" aria-hidden="true">
          <img src={workingTogetherSvg} alt="" />
        </div>
        <div className="friday-page__hero-inner">
          <motion.div 
            className="friday-page__eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles size={14} />
            <span>Deterministic Engineering PM Engine</span>
          </motion.div>

          <motion.h1 
            className="friday-page__hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The engineering PM that actually explains itself.
          </motion.h1>

          <motion.p 
            className="friday-page__hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Friday combines a deterministic 6-factor assignment engine with AI-written summaries. No hallucinated tickets, no force-assigning overloaded devs, and zero black-box guesses.
          </motion.p>

          <motion.div 
            className="friday-page__hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="https://app.hora.team" className="friday-page__btn-primary">
              Start Free with Friday <ArrowRight size={18} />
            </a>
            <button 
              type="button"
              className="friday-page__btn-video"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <PlayCircle size={20} className="play-icon" />
              <span>Watch Friday in Action</span>
            </button>
            <a href="#interactive-storyboard" className="friday-page__btn-secondary">
              Interactive Storyboard ↓
            </a>
          </motion.div>

          {/* Stats Ribbon */}
          <div className="friday-page__stats-ribbon">
            <div className="friday-page__stat-card">
              <div className="friday-page__stat-value friday-page__stat-value--purple">6 Factors</div>
              <div className="friday-page__stat-label">Transparent deterministic capability math</div>
            </div>
            <div className="friday-page__stat-card">
              <div className="friday-page__stat-value friday-page__stat-value--blue">5 Gates</div>
              <div className="friday-page__stat-label">Safety triage policies from auto-assign to review</div>
            </div>
            <div className="friday-page__stat-card">
              <div className="friday-page__stat-value friday-page__stat-value--green">100%</div>
              <div className="friday-page__stat-label">Auditable scoring logic on every recommendation</div>
            </div>
            <div className="friday-page__stat-card">
              <div className="friday-page__stat-value friday-page__stat-value--amber">Zero</div>
              <div className="friday-page__stat-label">Overloaded assignments past sprint headroom</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Storyboard Showcase (Deep-Dive 7-Step Pipeline Simulation) */}
      <section id="interactive-storyboard" style={{ padding: '40px 0', background: '#ffffff' }}>
        <Suspense fallback={<div style={{ minHeight: '400px', background: '#ffffff' }} />}>
          <FridayStoryboard 
            scenes={FRIDAY_TECHNICAL_SCENES}
            heading="The Deterministic Engine in Action"
            subtitle="Follow ticket HOR-214 through Friday's complete seven-step evaluation pipeline, from manifest inspection to automated standup reporting."
            badge="Interactive Pipeline Simulation"
            showArticleLink={false}
          />
        </Suspense>
      </section>

      {/* Deep Dive Section 1: The 6-Factor Algorithm */}
      <section className="friday-page__section friday-page__section--gray">
        <div className="friday-page__section-inner">
          <div className="friday-page__section-header">
            <span className="friday-page__section-tag">Algorithm Specification</span>
            <h2 className="friday-page__section-title">Deterministic scoring, zero black boxes.</h2>
            <p className="friday-page__section-desc">
              When a ticket arrives, Friday computes an exact capability score from 0 to 100 based on verified code repository signals and sprint availability.
            </p>
          </div>

          <div className="friday-page__algorithm-grid">
            <div className="friday-page__formula-box">
              <div className="friday-page__illu-card">
                <img src={dataAnalyticsSvg} alt="6-Factor Algorithm Scoring" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
                Capability Score Equation
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Every score is a weighted linear combination of six normalized signals. The calculation runs entirely in memory without non-deterministic prompt variations:
              </p>

              <div className="friday-page__formula-code">
                Score(dev, ticket) = <br />
                &nbsp;&nbsp;0.35 × SkillMatch + <br />
                &nbsp;&nbsp;0.20 × ProjectExperience + <br />
                &nbsp;&nbsp;0.15 × SimilarWork + <br />
                &nbsp;&nbsp;0.15 × SprintCapacity + <br />
                &nbsp;&nbsp;0.10 × Availability + <br />
                &nbsp;&nbsp;0.05 × Dependencies
              </div>

              <div style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic' }}>
                * A hard ceiling constraint rejects candidates whose active sprint points or ticket count exceeds org limits, regardless of skill match.
              </div>
            </div>

            <div className="friday-page__factors-table">
              {factors.map((f, idx) => (
                <div key={f.name} className="friday-page__factor-item">
                  <div className="friday-page__factor-left">
                    <div className="friday-page__factor-icon" style={{ background: ['#8b5cf6', '#3b82f6', '#0ea5e9', '#10b981', '#f59e0b', '#6366f1'][idx] }}>
                      <Sliders size={18} />
                    </div>
                    <div>
                      <div className="friday-page__factor-name">{f.name}</div>
                      <div className="friday-page__factor-sub">{f.desc}</div>
                    </div>
                  </div>
                  <div className="friday-page__factor-weight">{f.weight}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section 2: 5 Policy Gate Tiers */}
      <section className="friday-page__section">
        <div className="friday-page__section-inner">
          <div className="friday-page__section-header">
            <span className="friday-page__section-tag">Safety Architecture</span>
            <h2 className="friday-page__section-title">Five policy gates prevent mistakes before they happen.</h2>
            <p className="friday-page__section-desc">
              Friday doesn’t force-assign every ticket. Tickets flow through a graded risk gate that sorts safe issues forward and halts blockers for human sign-off.
            </p>
          </div>

          <div className="friday-page__section-illu-strip">
            <img src={codeReviewSvg} alt="Code Review and Policy Inspection" />
          </div>

          <div className="friday-page__gates-grid">
            {policyGates.map((gate) => (
              <div key={gate.title} className={`friday-page__gate-card friday-page__gate-card--${gate.color}`}>
                <h3 className="friday-page__gate-title">{gate.title}</h3>
                <span className={`friday-page__gate-threshold friday-page__gate-threshold--${gate.color}`}>
                  {gate.threshold}
                </span>
                <p className="friday-page__gate-desc">{gate.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section 3: Comparison Table */}
      <section className="friday-page__section friday-page__section--gray">
        <div className="friday-page__section-inner">
          <div className="friday-page__section-header">
            <span className="friday-page__section-tag">Comparison</span>
            <h2 className="friday-page__section-title">Why rule-based scoring beats prompt-based PMs.</h2>
            <p className="friday-page__section-desc">
              Engineering leads don’t need AI that hallucinates commitments. They need an engine that audits verified commits and respects capacity.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="friday-page__comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Traditional Generative AI PMs</th>
                  <th>Friday PM Engine</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature}>
                    <td>{row.feature}</td>
                    <td>{row.traditional}</td>
                    <td>{row.friday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="friday-page__cta">
        <div className="friday-page__cta-inner">
          <div className="friday-page__cta-content">
            <h2 className="friday-page__cta-title">Your next sprint deserves a PM that explains itself.</h2>
            <p className="friday-page__cta-subtitle">
              Connect your GitHub org in under two minutes. Free for teams under 10. No credit card required.
            </p>
            <a href="https://app.hora.team" className="friday-page__cta-btn">
              Get Started Free <ArrowRight size={18} />
            </a>
          </div>
          <div className="friday-page__cta-illu" aria-hidden="true">
            <img src={launchShipSvg} alt="Ship to Production" />
          </div>
        </div>
      </section>

      {/* Video Popup Modal */}
      {isVideoModalOpen && (
        <div 
          className="friday-video-modal-backdrop"
          onClick={() => setIsVideoModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="How Friday AI Works Demo Video"
        >
          <motion.div 
            className="friday-video-modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="friday-video-modal-header">
              <div className="friday-video-modal-title">
                <Sparkles size={16} />
                <span>How Friday AI Works — Overview</span>
              </div>
              <button 
                type="button"
                className="friday-video-modal-close"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close video popup"
              >
                <X size={18} />
              </button>
            </div>
            <div className="friday-video-modal-player">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dwo8ge51h&public_id=gemini_generated_video_4280f0dc_qnkard&autoplay=true"
                width="854"
                height="480"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                title="How Friday AI Works Video"
              />
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
