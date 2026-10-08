import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ShieldAlert, 
  GitMerge, 
  Sparkles, 
  Check, 
  FileCode, 
  Sliders, 
  Workflow, 
  Inbox, 
  Users, 
  Scale, 
  LayoutDashboard, 
  Lock, 
  ArrowUpRight, 
  GitBranch, 
  ShieldCheck, 
  CheckCircle,
  Activity
} from 'lucide-react';
import { FRIDAY_SCENES } from './fridayScenes';
import { useFridayTimeline } from './useFridayTimeline';
import './FridayStoryboard.scss';

// Map scene iconKey to Lucide Icon component
const SCENE_ICONS = {
  Inbox,
  Users,
  Sliders,
  ShieldAlert,
  LayoutDashboard,
  Scale,
  GitMerge
};

export default function FridayStoryboard({
  scenes,
  heading = "Meet Friday, the PM that explains itself.",
  subtitle = "Friday reads each ticket, checks who has room, and recommends an owner with the reasons shown. Anything uncertain waits for you.",
  badge = "Deterministic PM Engine",
  showArticleLink = true
}) {
  const containerRef = useRef(null);
  const activeScenes = scenes && scenes.length > 0 ? scenes : FRIDAY_SCENES;

  const {
    sceneIndex,
    currentScene,
    sceneProgress,
    isPlaying,
    isReducedMotion,
    togglePlay,
    goTo,
    nextScene,
    prevScene,
    onStageMouseEnter,
    onStageMouseLeave
  } = useFridayTimeline(containerRef, activeScenes);

  return (
    <section 
      ref={containerRef} 
      className="friday-storyboard" 
      id="friday-storyboard"
      aria-label="Interactive Friday Storyboard"
    >
      <div className="friday-storyboard__container">
        
        {/* Section Header */}
        <div className="friday-storyboard__header">
          <div className="friday-storyboard__eyebrow">
            <Sparkles size={14} />
            <span>{badge}</span>
          </div>
          <h2 className="friday-storyboard__title">
            {heading}
          </h2>
          <p className="friday-storyboard__subtitle">
            {subtitle}
          </p>
          {showArticleLink && (
            <div>
              <Link to="/friday" className="friday-storyboard__full-article-link">
                <span>Read Full Friday Architecture & Specification</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>

        {/* Main Interactive Layout: Left = Captions & Controls, Right = Stage */}
        <div className="friday-storyboard__layout">
          
          {/* Left: Step navigation with rich icons & active caption */}
          <aside className="friday-storyboard__sidebar" aria-label="Storyboard timeline">
            <ul className="friday-storyboard__steps-list" role="tablist">
              {activeScenes.map((scene, idx) => {
                const isActive = sceneIndex === idx;
                const IconComponent = SCENE_ICONS[scene.iconKey] || Sparkles;

                return (
                  <li key={scene.id} className="friday-storyboard__step-item" role="presentation">
                    <button
                      type="button"
                      role="tab"
                      id={`scene-tab-${idx}`}
                      aria-selected={isActive}
                      aria-controls={`scene-panel-${idx}`}
                      className={`friday-storyboard__step-button ${isActive ? 'friday-storyboard__step-button--active' : ''}`}
                      onClick={() => goTo(idx)}
                    >
                      <div className="friday-storyboard__step-icon-box">
                        <IconComponent size={18} />
                      </div>
                      <div className="friday-storyboard__step-content">
                        <span className="friday-storyboard__step-title">{scene.shortTitle}</span>
                        <span className="friday-storyboard__step-snippet">{scene.title}</span>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Polite Aria-Live Caption Box for active step */}
            <div 
              className="friday-storyboard__active-caption" 
              aria-live="polite" 
              id={`scene-panel-${sceneIndex}`}
              role="tabpanel"
              aria-labelledby={`scene-tab-${sceneIndex}`}
            >
              <h3 className="friday-storyboard__active-heading">
                {currentScene.title}
              </h3>
              <p className="friday-storyboard__active-desc">
                {currentScene.description}
              </p>
              {showArticleLink && (
                <Link to="/friday" className="friday-storyboard__active-doc-link">
                  <span>View full algorithm specification</span>
                  <ArrowUpRight size={13} />
                </Link>
              )}
            </div>

            {/* Playback Toolbar */}
            <div className="friday-storyboard__controls">
              <div className="friday-storyboard__control-buttons">
                <button
                  type="button"
                  className="friday-storyboard__ctrl-btn"
                  onClick={prevScene}
                  aria-label="Previous scene"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="friday-storyboard__ctrl-btn friday-storyboard__ctrl-btn--play"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause storyboard autoplay' : 'Play storyboard autoplay'}
                >
                  {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button
                  type="button"
                  className="friday-storyboard__ctrl-btn"
                  onClick={nextScene}
                  aria-label="Next scene"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="friday-storyboard__timing-indicator">
                Scene {sceneIndex + 1} of {activeScenes.length}
              </div>
            </div>
          </aside>

          {/* Right: Animated Stage inside Browser Frame */}
          <div className="friday-storyboard__stage-wrapper">
            <div 
              className="friday-storyboard__browser-frame"
              onMouseEnter={onStageMouseEnter}
              onMouseLeave={onStageMouseLeave}
            >
              {/* Browser Header Bar */}
              <div className="friday-storyboard__browser-header">
                <div className="friday-storyboard__window-dots">
                  <div className="friday-storyboard__window-dot friday-storyboard__window-dot--red" />
                  <div className="friday-storyboard__window-dot friday-storyboard__window-dot--yellow" />
                  <div className="friday-storyboard__window-dot friday-storyboard__window-dot--green" />
                </div>
                <div className="friday-storyboard__browser-address">
                  <span>hora.team/app/sprint/friday-evaluation</span>
                </div>
                <div className="friday-storyboard__live-tag">
                  <span className="friday-storyboard__live-pulse" />
                  <span>{isPlaying ? 'Evaluating live' : 'Paused'}</span>
                </div>
              </div>

              {/* Progress Line */}
              <div 
                className="friday-storyboard__progress-line"
                style={{ width: `${Math.round(sceneProgress * 100)}%` }}
              />

              {/* Stage Canvas */}
              <div className="friday-storyboard__stage-canvas">
                {renderDynamicScene(currentScene, sceneProgress, isReducedMotion)}
              </div>
            </div>

            {/* Stage Footnote */}
            <div className="friday-storyboard__stage-footnote">
              <span className="friday-storyboard__sample-label">
                Sample data · Rule-based evaluation with AI summaries
              </span>
              <span className="friday-storyboard__hover-hint">
                Hover pauses playback
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/**
 * Render dynamic scene visuals according to the scene's payload structure.
 */
function renderDynamicScene(scene, progress, isReducedMotion) {
  const p = isReducedMotion ? 1 : progress;

  // 1. TICKET INTAKE / CLASSIFICATION (has ticket, but not candidates)
  if (scene.ticket && !scene.candidates) {
    const cardOpacity = Math.min(p * 2, 1);
    const badgesPop = p >= 0.35 || isReducedMotion;
    const confPop = p >= 0.65 || isReducedMotion;
    const confPercent = Math.round((scene.ticket.confidence || 0.82) * 100);

    return (
      <div className="friday-storyboard__s1-wrapper" style={{ opacity: cardOpacity }}>
        <div className="friday-storyboard__s1-ticket-card">
          <div className="friday-storyboard__s1-scan-beam" />
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#3b82f6', background: '#eff6ff', padding: '4px 10px', borderRadius: '6px', border: '1px solid #bfdbfe' }}>
                {scene.ticket.key}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#b45309', background: '#fef3c7', padding: '4px 8px', borderRadius: '6px' }}>
                {scene.ticket.priority || 'P1 · High'}
              </span>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b' }}>
              {scene.ticket.points} story pts
            </span>
          </div>

          <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', margin: '0 0 12px 0' }}>
            {scene.ticket.title}
          </h4>

          <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.5, margin: '0 0 18px 0' }}>
            Automatic extraction from GitHub repository webhook payload. Matches language manifests and author blame.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {scene.ticket.badges.map((badge, bIdx) => (
              <span 
                key={badge} 
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '6px',
                  background: badgesPop ? '#ede9fe' : '#f1f5f9',
                  color: badgesPop ? '#6d28d9' : '#64748b',
                  border: `1px solid ${badgesPop ? '#ddd6fe' : '#e2e8f0'}`,
                  transition: 'all 0.3s ease',
                  transitionDelay: `${bIdx * 60}ms`
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="friday-storyboard__s1-inspector">
          <div className="friday-storyboard__s1-gauge-card">
            <div style={{ width: '64px', height: '64px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="3.5"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3.5"
                  strokeDasharray={`${confPop ? confPercent : 20}, 100`}
                  style={{ transition: 'stroke-dasharray 0.8s ease' }}
                />
              </svg>
              <div style={{ position: 'absolute', fontSize: '12px', fontWeight: 800, color: '#047857' }}>
                {confPercent}%
              </div>
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#0f172a' }}>
                Classification Certainty
              </div>
              <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600 }}>
                {scene.ticket.confidenceLabel || `High confidence (${scene.ticket.confidence})`}
              </div>
              <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                Verified stack matches active sprint schema
              </div>
            </div>
          </div>

          <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '12px', padding: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#8b5cf6', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Workflow size={20} />
            </div>
            <div style={{ fontSize: '12px', color: '#581c87', lineHeight: 1.4 }}>
              <strong>Friday Parser:</strong> Extracted stack tags from repository manifests and mapped to candidate capability matrices.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. CONTEXT CHECK & DEVELOPER PROFILES (has candidates)
  if (scene.candidates) {
    return (
      <div className="friday-storyboard__s2-wrapper">
        <div className="friday-storyboard__s2-repo-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileCode size={18} color="#8b5cf6" />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#1e293b' }}>
              Repo Manifests Synced from main:
            </span>
          </div>
          <div className="friday-storyboard__s2-manifest-tags">
            {scene.repoManifests?.map((m) => (
              <span key={m.name} className="friday-storyboard__s2-manifest-tag">
                <span style={{ color: '#8b5cf6', fontWeight: 800 }}>•</span>
                <span>{m.name}</span>
                <span style={{ color: '#64748b', fontSize: '10px' }}>({m.tag})</span>
              </span>
            ))}
          </div>
        </div>

        <div className="friday-storyboard__s2-cards-grid">
          {scene.candidates.map((cand) => {
            const isAvailable = cand.statusType === 'available';

            return (
              <div 
                key={cand.name} 
                className={`friday-storyboard__s2-dev-card ${isAvailable ? 'friday-storyboard__s2-dev-card--priya' : 'friday-storyboard__s2-dev-card--arjun'}`}
              >
                <div className="friday-storyboard__s2-dev-header">
                  <div className="friday-storyboard__s2-avatar" style={{ background: cand.avatarGradient || '#8b5cf6' }}>
                    {cand.avatar}
                    <span className={`friday-storyboard__s2-avatar-status friday-storyboard__s2-avatar-status--${isAvailable ? 'online' : 'busy'}`} />
                  </div>
                  <div className="friday-storyboard__s2-dev-meta">
                    <div className="friday-storyboard__s2-dev-name">{cand.name}</div>
                    <div className="friday-storyboard__s2-dev-role">{cand.role}</div>
                  </div>
                </div>

                <div className="friday-storyboard__s2-skills-list">
                  {cand.skills?.map((s) => (
                    <span key={s} className="friday-storyboard__s2-skill-pill">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="friday-storyboard__s2-evidence-box">
                  <GitBranch size={14} color="#8b5cf6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{cand.evidence}</span>
                </div>

                <div className="friday-storyboard__s2-capacity-meter">
                  <div className="friday-storyboard__s2-cap-row">
                    <span style={{ color: '#64748b' }}>Sprint Load</span>
                    <span style={{ fontWeight: 700, color: isAvailable ? '#1e293b' : '#dc2626' }}>
                      {cand.load}
                    </span>
                  </div>

                  <div className="friday-storyboard__s2-battery-track">
                    <div 
                      className="friday-storyboard__s2-battery-fill"
                      style={{
                        width: `${cand.capacityPercent}%`,
                        backgroundColor: isAvailable ? '#10b981' : '#ef4444'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                    {isAvailable ? (
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <CheckCircle size={12} /> {cand.status}
                      </span>
                    ) : (
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#dc2626', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <ShieldAlert size={12} /> {cand.status}
                      </span>
                    )}
                    <span style={{ fontSize: '10px', color: '#94a3b8' }}>
                      {cand.capacityPercent}% full
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. DETERMINISTIC SCORING BREAKDOWN (has scoringFactors)
  if (scene.scoringFactors) {
    const factors = scene.scoringFactors;

    return (
      <div className="friday-storyboard__s3-wrapper">
        <div className="friday-storyboard__s3-top-banner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#7c3aed', background: '#ffffff', padding: '3px 8px', borderRadius: '6px' }}>
                {scene.candidate?.rank || 'Rank #1 Recommendation'}
              </span>
              <span style={{ fontSize: '13px', fontWeight: 800, color: '#1e293b' }}>
                Candidate: {scene.candidate?.name || 'Priya'}
              </span>
            </div>
            <div style={{ fontSize: '12px', color: '#6b21a8' }}>
              Mathematical evaluation completed across 6 deterministic capability dimensions.
            </div>
          </div>

          <div className="friday-storyboard__s3-score-wheel">
            <div className="friday-storyboard__s3-score-num">{scene.candidate?.totalScore || 87}</div>
            <div style={{ fontSize: '12px', color: '#7c3aed', fontWeight: 700, lineHeight: 1.2 }}>
              / 100<br /><span style={{ fontSize: '10px', color: '#64748b' }}>TOTAL SCORE</span>
            </div>
          </div>
        </div>

        <div className="friday-storyboard__s3-bars-grid">
          {factors.map((factor, idx) => {
            const barFillDelay = idx * 0.12;
            const fillRatio = Math.max(0, Math.min((p - barFillDelay) * 2.5, 1));
            const effectiveFill = isReducedMotion ? factor.raw : Math.round(factor.raw * fillRatio);

            return (
              <div key={factor.label} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px' }}>
                  <span style={{ fontWeight: 700, color: '#1e293b' }}>{factor.label}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#64748b', fontWeight: 600 }}>
                    {factor.raw} × {factor.weight} = <strong style={{ color: factor.color }}>+{factor.weighted}</strong>
                  </span>
                </div>
                <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      width: `${effectiveFill}%`,
                      height: '100%',
                      backgroundColor: factor.color,
                      borderRadius: '4px',
                      transition: 'width 0.4s ease'
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: '#fff1f2', border: '1px solid #fecdd3', borderRadius: '10px', fontSize: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#be123c', fontWeight: 800 }}>
            <ShieldAlert size={15} /> {scene.disqualifiedCandidate?.name || 'Arjun'}: Excluded by Hard Constraint
          </span>
          <span style={{ color: '#9f1239', fontWeight: 500 }}>
            {scene.disqualifiedCandidate?.reason || 'Zero-overload rule triggered: at capacity'}
          </span>
        </div>
      </div>
    );
  }

  // 4. POLICY GATES (has lanes)
  if (scene.lanes) {
    const lanes = scene.lanes;
    const passGate = p >= 0.4 || isReducedMotion;
    const blockedGate = p >= 0.65 || isReducedMotion;

    return (
      <div className="friday-storyboard__s4-wrapper">
        <div className="friday-storyboard__s4-gates-row">
          {lanes.map((lane) => {
            const isAuto = lane.id === 'auto-assign';
            const isReview = lane.id === 'review';

            return (
              <div 
                key={lane.id} 
                className={`friday-storyboard__s4-gate-col ${isAuto ? 'friday-storyboard__s4-gate-col--auto' : ''} ${isReview ? 'friday-storyboard__s4-gate-col--review' : ''}`}
              >
                <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '6px', textAlign: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: lane.color }}>
                    {lane.name}
                  </div>
                  <div style={{ fontSize: '9px', color: '#64748b' }}>
                    {lane.criteria}
                  </div>
                </div>

                {isAuto && passGate && (
                  <div style={{ background: '#ffffff', border: '1.5px solid #86efac', borderRadius: '8px', padding: '8px', boxShadow: '0 4px 10px rgba(16,185,129,0.1)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#166534', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Check size={12} /> {lane.activeTicket || 'HOR-214'}
                    </div>
                    <div style={{ fontSize: '10px', color: '#15803d' }}>
                      Score 87 · Conf 0.82
                    </div>
                    <div style={{ fontSize: '9px', background: '#dcfce7', color: '#14532d', padding: '2px 4px', borderRadius: '4px', textAlign: 'center', fontWeight: 700 }}>
                      Auto-routed
                    </div>
                  </div>
                )}

                {isReview && blockedGate && (
                  <div style={{ background: '#ffffff', border: '1.5px solid #fca5a5', borderRadius: '8px', padding: '8px', boxShadow: '0 4px 10px rgba(239,68,68,0.08)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#b91c1c', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Lock size={12} /> {lane.activeTicket || 'HOR-230'}
                    </div>
                    <div style={{ fontSize: '10px', color: '#991b1b', lineHeight: 1.3 }}>
                      {scene.blockedTicket?.reason || 'Stopped at gate: Blocked by HOR-228'}
                    </div>
                    <div style={{ fontSize: '9px', background: '#fee2e2', color: '#7f1d1d', padding: '2px 4px', borderRadius: '4px', textAlign: 'center', fontWeight: 700 }}>
                      Awaiting team review
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: '#334155' }}>
          <ShieldCheck size={18} color="#10b981" />
          <span>
            <strong>Guardrail Policy Executed:</strong> Clear high-confidence tickets automatically dispatch forward, while tickets with upstream blockers pause for team human review.
          </span>
        </div>
      </div>
    );
  }

  // 5. KANBAN BOARD PLACEMENT (has card)
  if (scene.card) {
    const assigned = p >= 0.55 || isReducedMotion;

    return (
      <div className="friday-storyboard__s5-wrapper">
        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '260px' }}>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Backlog (Triage Queue)
          </div>

          {!assigned ? (
            <div style={{ background: '#ffffff', border: '1.5px solid #8b5cf6', borderRadius: '12px', padding: '14px', boxShadow: '0 8px 24px rgba(139,92,246,0.12)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '11px', fontWeight: 700, color: '#7c3aed', background: '#f5f3ff', padding: '3px 8px', borderRadius: '4px', alignSelf: 'flex-start' }}>
                <Sparkles size={12} /> Friday Recommendation
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                {scene.card.key} {scene.card.title}
              </div>
              <div style={{ fontSize: '11px', color: '#475569', background: '#f8fafc', padding: '6px 8px', borderRadius: '6px' }}>
                <strong>Reason:</strong> {scene.card.rationale}
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '6px' }}>
                <button type="button" style={{ flex: 1, background: '#8b5cf6', color: '#ffffff', border: 'none', borderRadius: '6px', padding: '8px 12px', fontSize: '11px', fontWeight: 700, cursor: 'pointer' }}>
                  Assign to {scene.card.recommendedTo} ✓
                </button>
                <button type="button" style={{ background: 'transparent', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: '6px', padding: '8px 12px', fontSize: '11px', fontWeight: 600, cursor: 'pointer' }}>
                  Not now
                </button>
              </div>
            </div>
          ) : (
            <div style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic', padding: '24px', textAlign: 'center' }}>
              Recommendation accepted & moved to {scene.card.targetColumn || 'In Progress'}
            </div>
          )}
        </div>

        <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '260px' }}>
          <div style={{ fontSize: '12px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            In Progress (Active Sprint)
          </div>

          {assigned ? (
            <div style={{ background: '#ffffff', border: '1.5px solid #8b5cf6', borderRadius: '12px', padding: '14px', boxShadow: '0 8px 20px rgba(0,0,0,0.04)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#3b82f6' }}>{scene.card.key}</span>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#7c3aed', background: '#ede9fe', padding: '3px 8px', borderRadius: '6px' }}>
                  {scene.card.recommendedTo} ({scene.card.score})
                </span>
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
                {scene.card.title}
              </div>
              <div style={{ fontSize: '11px', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                <CheckCircle2 size={13} /> Assigned with context & PR history attached
              </div>
            </div>
          ) : (
            <div style={{ fontSize: '12px', color: '#94a3b8', padding: '24px', textAlign: 'center' }}>
              Waiting for assignment confirmation...
            </div>
          )}
        </div>
      </div>
    );
  }

  // 6. SPRINT REBALANCE (has rebalanceAction alone)
  if (scene.rebalanceAction && !scene.gitEvent) {
    const isRebalanced = p >= 0.5 || isReducedMotion;
    const act = scene.rebalanceAction;
    const fromGauge = isRebalanced ? act.arjunAfter : act.arjunBefore;
    const toGauge = isRebalanced ? act.meeraAfter : act.meeraBefore;

    return (
      <div className="friday-storyboard__s6-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '12px 18px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#334155' }}>
            Sprint Capacity Leveler:
          </span>
          <span style={{ fontSize: '12px', fontWeight: 800, color: isRebalanced ? '#10b981' : '#dc2626' }}>
            {isRebalanced ? '✓ Sprint Balanced (Both under 100%)' : `⚠️ Bottleneck Detected (${act.from} Overloaded)`}
          </span>
        </div>

        <div className="friday-storyboard__s6-balance-track">
          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{act.from}</span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: fromGauge > 100 ? '#dc2626' : '#10b981' }}>
                {fromGauge}%
              </span>
            </div>
            <div style={{ height: '9px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${Math.min(fromGauge, 100)}%`, height: '100%', background: fromGauge > 100 ? '#ef4444' : '#10b981', transition: 'width 0.8s ease' }} />
            </div>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              {isRebalanced ? 'Headroom restored under 100%' : 'Capacity cap exceeded'}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
            <ArrowRight size={26} />
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#7c3aed' }}>Shift</span>
          </div>

          <div style={{ background: '#ffffff', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#0f172a' }}>{act.to}</span>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#10b981' }}>
                {toGauge}%
              </span>
            </div>
            <div style={{ height: '9px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${toGauge}%`, height: '100%', background: '#10b981', transition: 'width 0.8s ease' }} />
            </div>
            <span style={{ fontSize: '12px', color: '#64748b' }}>
              {isRebalanced ? 'Headroom balanced' : 'Available headroom'}
            </span>
          </div>
        </div>

        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '10px', padding: '10px 16px', fontSize: '12px', color: '#1e40af', textAlign: 'center', fontWeight: 600 }}>
          Rebalanced: <strong>{act.ticketMoved}</strong> shifted from {act.from} → {act.to} before sprint bottleneck formed.
        </div>
      </div>
    );
  }

  // 7. SHIP LOOP & AUTOMATED STANDUP REPORT
  if (scene.gitEvent || scene.sprintSummary) {
    const summaryItems = scene.sprintSummary || [];

    return (
      <div className="friday-storyboard__s7-wrapper">
        <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700, color: '#15803d' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <GitMerge size={18} /> {scene.gitEvent?.pr || 'PR #142 Merged into main'}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CheckCircle2 size={16} /> {scene.gitEvent?.checks || 'CI checks passed'}
          </span>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '20px', boxShadow: '0 4px 16px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
            <span style={{ fontSize: '14px', fontWeight: 800, color: '#0f172a' }}>
              Friday Sprint Standup Summary
            </span>
            <span style={{ fontSize: '11px', fontWeight: 700, color: '#7c3aed', background: '#f5f3ff', padding: '3px 8px', borderRadius: '6px' }}>
              Automated Standup Post
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {summaryItems.map((item) => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                <span style={{ fontWeight: 600, color: '#334155' }}>{item.label}:</span>
                <span style={{
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  fontWeight: 700,
                  background: item.tone === 'success' ? '#dcfce7' : item.tone === 'warning' ? '#fef3c7' : '#f1f5f9',
                  color: item.tone === 'success' ? '#166534' : item.tone === 'warning' ? '#92400e' : '#475569'
                }}>
                  {item.count}
                </span>
              </div>
            ))}
          </div>

          <div style={{ fontSize: '12px', color: '#64748b', borderTop: '1px solid #f8fafc', paddingTop: '10px' }}>
            {scene.gitEvent?.ticket || 'Ticket'} automatically moved to Done upon PR merge. No manual Jira status updates required.
          </div>
        </div>
      </div>
    );
  }

  return null;
}
