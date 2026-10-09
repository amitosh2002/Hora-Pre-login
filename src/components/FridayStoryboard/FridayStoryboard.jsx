import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  FileText, GitBranch, Calculator, ShieldCheck, LayoutDashboard, Scale, Rocket,
  Play, Pause, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, Lock, Check, ShieldAlert,
} from 'lucide-react';
import { FRIDAY_TECHNICAL_SCENES } from './fridayScenes';
import './FridayStoryboard.scss';
import './FridayStoryboardScenes.scss';

const ICONS = { FileText, GitBranch, Calculator, ShieldCheck, LayoutDashboard, Scale, Rocket };
const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const ease = (t) => t * t * (3 - 2 * t);

/* ---------- Illustration atoms ---------- */

const HAIR = {
  priya: 'M12 20c-1-8 4-13 10-13s11 5 10 13v8c-2-3-3-6-3-9-3-1-5-3-7-5-2 3-4 4-7 5 0 3-1 6-3 9z',
  arjun: 'M14 17c1-6 5-9 8-9s7 3 8 9c-3-3-5-3-8-3s-5 0-8 3z',
  meera: 'M13 18c0-7 5-11 9-11s9 4 9 11c-2-4-5-5-9-5s-7 1-9 5z',
};

function Avatar({ who, bg, size = 44 }) {
  return (
    <svg viewBox="0 0 44 44" width={size} height={size} aria-hidden="true" className="fsb-avatar">
      <rect width="44" height="44" rx="12" fill={bg} />
      <path d="M6 44c1-9 8-13 16-13s15 4 16 13z" fill="#fff" opacity=".92" />
      <circle cx="22" cy="19" r="8" fill="#fde4cf" />
      <path d={HAIR[who]} fill="#2b2540" />
    </svg>
  );
}

function Orb({ size = 88 }) {
  return (
    <div className="fsb-orb" style={{ width: size, height: size }} aria-hidden="true">
      <span className="fsb-orb__ring" />
      <span className="fsb-orb__ring fsb-orb__ring--2" />
      <svg viewBox="0 0 96 96">
        <defs>
          <radialGradient id="fsbOrbGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#e9d5ff" />
            <stop offset=".55" stopColor="#8b5cf6" />
            <stop offset="1" stopColor="#5b21b6" />
          </radialGradient>
        </defs>
        <circle cx="48" cy="48" r="30" fill="url(#fsbOrbGrad)" />
        <path d="M48 31l3.2 9.8 9.8 3.2-9.8 3.2L48 57l-3.2-9.8-9.8-3.2 9.8-3.2z" fill="#fff" opacity=".92" />
      </svg>
    </div>
  );
}

function Ring({ value, label, size = 92 }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  return (
    <div className="fsb-ring" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#ede9fe" strokeWidth="9" />
        <circle
          className="fsb-ring__arc"
          cx="50" cy="50" r={r} fill="none" stroke="#7c3aed" strokeWidth="9" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - value)} transform="rotate(-90 50 50)"
          style={{ '--from': c }}
        />
      </svg>
      <div className="fsb-ring__label"><strong>{Math.round(value * 100)}%</strong><span>{label}</span></div>
    </div>
  );
}

const delay = (s) => ({ '--d': `${s}s` });

/* ---------- Scenes ---------- */

function SceneTicket() {
  return (
    <div className="fsb-s1">
      <div className="fsb-ticket fsb-in-left">
        <span className="fsb-beam" />
        <div className="fsb-ticket__top"><span className="fsb-id">HOR-214</span><span className="fsb-pts">3 pts</span></div>
        <h4>Add retry to webhook sender</h4>
        <p>Failed deliveries should retry with backoff and log every attempt.</p>
        <div className="fsb-lines"><i /><i /><i /></div>
      </div>
      <div className="fsb-s1__right">
        <div className="fsb-pop" style={delay(0.4)}><Orb /></div>
        <div className="fsb-badges">
          {['Backend', 'Node.js', 'Webhooks'].map((b, i) => (
            <span key={b} className="fsb-badge fsb-pop" style={delay(1.2 + i * 0.45)}>{b}</span>
          ))}
        </div>
        <div className="fsb-pop" style={delay(2.6)}><Ring value={0.82} label="Confidence" /></div>
      </div>
    </div>
  );
}

const DEVS = [
  { id: 'priya', name: 'Priya', bg: '#8b5cf6', skills: ['Node.js', 'Webhooks'], evidence: '6 merged PRs in webhooks/. Built HOR-171, a similar ticket.', load: 0.6, label: '3 of 5 tickets', tone: 'ok' },
  { id: 'arjun', name: 'Arjun', bg: '#f43f5e', skills: ['React', 'Node.js'], evidence: 'Mostly frontend work this quarter.', load: 1, label: '5 of 5 tickets', tone: 'full' },
  { id: 'meera', name: 'Meera', bg: '#3b82f6', skills: ['Node.js', 'Redis'], evidence: '2 PRs in queue/ last month.', load: 0.4, label: '2 of 5 tickets', tone: 'ok' },
];

function SceneContext() {
  return (
    <div className="fsb-s2">
      <div className="fsb-repo">
        <span className="fsb-repo__name"><GitBranch size={14} /> Repo scan</span>
        <div className="fsb-chips">
          {['package.json', 'Node.js', 'Redis', 'Docker'].map((c, i) => (
            <span key={c} className={`fsb-chip fsb-pop ${i === 0 ? 'fsb-chip--file' : ''}`} style={delay(0.3 + i * 0.4)}>{c}</span>
          ))}
        </div>
      </div>
      <div className="fsb-devs">
        {DEVS.map((d, i) => (
          <div key={d.id} className={`fsb-dev fsb-dev--${d.id} fsb-rise`} style={delay(1.2 + i * 0.35)}>
            <div className="fsb-dev__head">
              <Avatar who={d.id} bg={d.bg} />
              <div><strong>{d.name}</strong><span>Backend engineer</span></div>
            </div>
            <div className="fsb-skills">{d.skills.map((s) => <span key={s}>{s}</span>)}</div>
            <p className="fsb-evidence">{d.evidence}</p>
            <div className="fsb-meter">
              <div className="fsb-meter__row"><span>{d.label}</span>{d.tone === 'full' && <span className="fsb-tag fsb-tag--red"><ShieldAlert size={11} /> At capacity</span>}</div>
              <div className="fsb-track"><i className={`fsb-fill fsb-fill--${d.tone}`} style={{ width: `${d.load * 100}%`, ...delay(2 + i * 0.35) }} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const FACTORS = [
  { k: 'Skill match', w: 35, s: 100 },
  { k: 'Project experience', w: 20, s: 90 },
  { k: 'Similar work', w: 15, s: 80 },
  { k: 'Sprint capacity', w: 15, s: 60 },
  { k: 'Availability', w: 10, s: 80 },
  { k: 'Dependencies', w: 5, s: 100 },
];

function SceneScoring({ p }) {
  const rows = FACTORS.map((f, i) => {
    const r = ease(clamp((p * 1.3 - i * 0.13) / 0.18));
    return { ...f, r, pts: ((f.w * f.s) / 100) * r };
  });
  const total = rows.reduce((a, r) => a + r.pts, 0);
  const c = 2 * Math.PI * 38;
  return (
    <div className="fsb-s3">
      <div className="fsb-score">
        <div className="fsb-score__head">
          <Avatar who="priya" bg="#8b5cf6" size={48} />
          <div><strong>Priya</strong><span>Candidate for HOR-214</span></div>
          <div className="fsb-score__ring">
            <svg viewBox="0 0 100 100" aria-hidden="true">
              <circle cx="50" cy="50" r="38" fill="none" stroke="#ede9fe" strokeWidth="9" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="#7c3aed" strokeWidth="9" strokeLinecap="round"
                strokeDasharray={c} strokeDashoffset={c * (1 - total / 100)} transform="rotate(-90 50 50)" />
            </svg>
            <b>{Math.round(total)}</b>
          </div>
        </div>
        <ul className="fsb-factors">
          {rows.map((r) => (
            <li key={r.k}>
              <div className="fsb-factors__row"><span>{r.k} <em>{r.w}%</em></span><b>+{r.pts.toFixed(1)}</b></div>
              <div className="fsb-track"><i className="fsb-fill fsb-fill--ok fsb-fill--live" style={{ width: `${r.s * r.r}%` }} /></div>
            </li>
          ))}
        </ul>
        <div className={`fsb-outcome ${total >= 85 ? 'is-on' : ''}`}><Check size={14} /> Score 85+ with confidence 75%+ qualifies for auto-assign</div>
      </div>
      <div className="fsb-others">
        <h5>Everyone else</h5>
        <div className="fsb-other"><Avatar who="meera" bg="#3b82f6" size={34} /><span>Meera</span><b>68</b><small>Suggest only</small></div>
        <div className="fsb-other fsb-other--off"><Avatar who="arjun" bg="#f43f5e" size={34} /><span>Arjun</span><b>&mdash;</b><small>Not eligible, at capacity</small></div>
        <p className="fsb-note">The capacity check runs before skill score, so a perfect match cannot override it.</p>
      </div>
    </div>
  );
}

const LANES = [
  { k: 'auto', t: 'Auto-assign', r: 'Score 85+, confidence 75%+' },
  { k: 'rec', t: 'Recommend', r: 'Score 70+, confidence 60%+' },
  { k: 'sug', t: 'Suggest only', r: 'Score 55 to 69' },
  { k: 'rev', t: 'Review required', r: 'Blocked or vague' },
  { k: 'dna', t: 'Do not assign', r: 'Full or no match' },
];

function SceneGate() {
  return (
    <div className="fsb-s4">
      <div className="fsb-gate-line"><span className="fsb-sweep" /> Policy gate</div>
      <div className="fsb-lanes">
        {LANES.map((l) => (
          <div key={l.k} className={`fsb-lane fsb-lane--${l.k}`}>
            <strong>{l.t}</strong><small>{l.r}</small>
            {l.k === 'auto' && (
              <div className="fsb-drop fsb-drop--ok" style={delay(0.9)}>
                <span className="fsb-id">HOR-214</span><span>to Priya</span><Check size={13} />
              </div>
            )}
            {l.k === 'rev' && (
              <div className="fsb-drop fsb-drop--hold" style={delay(2.6)}>
                <span className="fsb-id">HOR-230</span><span>Blocked by HOR-228</span><Lock size={13} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneBoard({ p }) {
  const moved = p > 0.55;
  const pressed = p > 0.45 && !moved;
  return (
    <div className="fsb-s5">
      <div className="fsb-col">
        <h5>Backlog</h5>
        {!moved && (
          <div className="fsb-fcard fsb-pop" style={delay(0.2)}>
            <div className="fsb-fcard__head"><Orb size={34} /><strong>Friday suggests Priya</strong></div>
            <div className="fsb-id">HOR-214 &middot; Add retry to webhook sender</div>
            <ul>
              <li>Strongest Node.js evidence in webhooks/</li>
              <li>Built similar ticket HOR-171</li>
              <li>2 of 5 slots open, no blockers</li>
            </ul>
            <div className="fsb-fcard__btns">
              <span className={`fsb-btn fsb-btn--p ${pressed ? 'is-pressed' : ''}`}>Assign to Priya</span>
              <span className="fsb-btn">Not now</span>
            </div>
          </div>
        )}
        <div className="fsb-mini"><span className="fsb-id">HOR-221</span> Fix timezone in sprint report</div>
      </div>
      <div className="fsb-col">
        <h5>In progress</h5>
        <div className="fsb-mini"><span className="fsb-id">HOR-209</span> Calendar drag to resize <em className="fsb-who fsb-who--r">Arjun</em></div>
        {moved && (
          <div className="fsb-mini fsb-mini--new fsb-pop">
            <span className="fsb-id">HOR-214</span> Add retry to webhook sender <em className="fsb-who fsb-who--p">Priya</em>
          </div>
        )}
        {moved && <div className="fsb-toast fsb-rise" style={delay(0.3)}><Check size={13} /> Priya now has 4 of 5 tickets</div>}
      </div>
    </div>
  );
}

function SceneRebalance({ p }) {
  const cubes = [0, 1, 2].map((k) => clamp((p - 0.15 - k * 0.17) / 0.2));
  const done = cubes.filter((t) => t >= 1).length;
  const aPts = 24 - 2 * done;
  const mPts = 6 + 2 * done;
  const aPct = (aPts / 20) * 100;
  const mPct = (mPts / 20) * 100;
  const th = clamp((aPct - mPct) * 0.2, -25, 25) * -1;
  const rad = (th * Math.PI) / 180;
  const cx = 200, cy = 62, L = 120;
  const lx = cx - L * Math.cos(rad), ly = cy - L * Math.sin(rad);
  const rx = cx + L * Math.cos(rad), ry = cy + L * Math.sin(rad);
  return (
    <div className="fsb-s6">
      <svg viewBox="0 0 400 190" className="fsb-scale" aria-hidden="true">
        <path d="M200 62 L182 170 H218 Z" fill="#ede9fe" stroke="#c4b5fd" strokeWidth="2" strokeLinejoin="round" />
        <line x1={lx} y1={ly} x2={rx} y2={ry} stroke="#7c3aed" strokeWidth="5" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="7" fill="#7c3aed" />
        {[[lx, ly, 'Arjun', '#f43f5e'], [rx, ry, 'Meera', '#3b82f6']].map(([x, y, n, col]) => (
          <g key={n}>
            <path d={`M${x} ${y} L${x - 34} ${y + 52} M${x} ${y} L${x + 34} ${y + 52}`} stroke="#94a3b8" strokeWidth="1.5" />
            <ellipse cx={x} cy={y + 56} rx="42" ry="8" fill={col} opacity=".9" />
            <text x={x} y={y + 80} textAnchor="middle" fontSize="13" fontWeight="700" fill="#334155">{n}</text>
          </g>
        ))}
        {cubes.map((t, k) => t > 0 && t < 1 && (
          <rect key={k} x={lerp(lx, rx, t) - 8} y={lerp(ly, ry, t) + 38 - Math.sin(Math.PI * t) * 46} width="16" height="16" rx="4" fill="#8b5cf6" />
        ))}
      </svg>
      <div className="fsb-load-grid">
        {[{ n: 'Arjun', who: 'arjun', bg: '#f43f5e', pts: aPts, pct: aPct }, { n: 'Meera', who: 'meera', bg: '#3b82f6', pts: mPts, pct: mPct }].map((d) => (
          <div key={d.n} className="fsb-load">
            <Avatar who={d.who} bg={d.bg} size={38} />
            <div className="fsb-load__body">
              <div className="fsb-meter__row"><strong>{d.n}</strong><span className={d.pct > 100 ? 'fsb-over' : ''}>{d.pts} of 20 pts &middot; {Math.round(d.pct)}%</span></div>
              <div className="fsb-track"><i className={`fsb-fill fsb-fill--live ${d.pct > 100 ? 'fsb-fill--full' : 'fsb-fill--ok'}`} style={{ width: `${clamp(d.pct, 0, 100)}%` }} /></div>
            </div>
          </div>
        ))}
      </div>
      <p className="fsb-note">{done < 3 ? 'Scope grew mid-sprint. Friday moves untouched tickets to a teammate with room.' : 'Both under their limit. Nobody pushed past 100%.'}</p>
    </div>
  );
}

function SceneShip({ p }) {
  const draw = clamp(p / 0.25);
  const merged = p > 0.2;
  const checks = ['Tests passed', 'Lint clean', 'Build succeeded'];
  const lines = ['Shipped: webhook retry (HOR-214)', 'Blocked: HOR-230 waits on HOR-228', 'Watch: Arjun is at his sprint limit'];
  return (
    <div className="fsb-s7">
      <div className="fsb-card">
        <h5>Git</h5>
        <svg viewBox="0 0 160 190" aria-hidden="true">
          <line x1="40" y1="20" x2="40" y2="170" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="5 5" />
          <path pathLength="1" d="M40 38 C 110 38, 110 120, 40 128" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeDasharray="1" strokeDashoffset={1 - draw} />
          {[[40, 28, '#3b82f6'], [40, 80, '#3b82f6'], [40, 170, '#ef4444']].map(([x, y, c], i) => <circle key={i} cx={x} cy={y} r="8" fill="#fff" stroke={c} strokeWidth="4" />)}
          <circle cx="40" cy="128" r="9" fill={merged ? '#8b5cf6' : '#fff'} stroke="#8b5cf6" strokeWidth="4" className={merged ? 'fsb-node-on' : ''} />
          <text x="58" y="132" fontSize="11" fontWeight="700" fill="#7c3aed">{merged ? 'PR merged' : 'PR open'}</text>
        </svg>
      </div>
      <div className="fsb-card">
        <h5>Pull request #142</h5>
        <div className={`fsb-moved ${p > 0.35 ? 'is-done' : ''}`}><span className="fsb-id">HOR-214</span> {p > 0.35 ? 'Moved to Done' : 'In review'}</div>
        <ul className="fsb-checks">
          {checks.map((c, i) => (
            <li key={c} className={p > 0.45 + i * 0.1 ? 'is-on' : ''}><span><Check size={11} /></span>{c}</li>
          ))}
        </ul>
      </div>
      <div className="fsb-card fsb-card--bubble">
        <h5><Sparkles size={13} /> Friday update</h5>
        {lines.map((l, i) => <p key={l} className={p > 0.7 + i * 0.1 ? 'is-on' : ''}>{l}</p>)}
      </div>
    </div>
  );
}

/* ---------- Timeline ---------- */

function useTimeline(scenes, playing) {
  const [pos, setPos] = useState({ i: 0, p: 0 });
  const raf = useRef(0);
  useEffect(() => {
    if (!playing) return undefined;
    let last = 0;
    const tick = (t) => {
      if (!last) last = t;
      const dt = Math.min(t - last, 64);
      last = t;
      setPos(({ i, p }) => {
        const currentDuration = scenes[i]?.duration || 5000;
        const np = p + dt / currentDuration;
        return np < 1 ? { i, p: np } : { i: (i + 1) % scenes.length, p: 0 };
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [playing, scenes]);
  return [pos, setPos];
}

/* ---------- Component ---------- */

export default function FridayStoryboard({
  scenes = FRIDAY_TECHNICAL_SCENES,
  heading = 'See Friday work, step by step',
  subtitle = 'Follow one ticket from creation to a merged pull request.',
  badge = 'Interactive demo',
  showArticleLink = false,
  articleHref = '#',
}) {
  const rootRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [userPaused, setUserPaused] = useState(false);
  const [hover, setHover] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return undefined; }
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting && e.intersectionRatio > 0.35), { threshold: [0, 0.35, 0.6] });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = visible && !userPaused && !hover && !reduced;
  const [{ i, p }, setPos] = useTimeline(scenes, playing);
  const scene = scenes[i] || scenes[0];
  const Icon = ICONS[scene.icon] || FileText;
  const total = scenes.reduce((a, s) => a + (s.duration || 5000), 0);
  const elapsed = scenes.slice(0, i).reduce((a, s) => a + (s.duration || 5000), 0) + p * (scene.duration || 5000);

  const goTo = useCallback((n) => { setPos({ i: (n + scenes.length) % scenes.length, p: reduced ? 1 : 0 }); setUserPaused(true); }, [scenes.length, reduced, setPos]);

  const sceneMap = {
    ticket: <SceneTicket key="t" />,
    context: <SceneContext key="c" />,
    scoring: <SceneScoring key="s" p={p} />,
    gate: <SceneGate key="g" />,
    board: <SceneBoard key="b" p={reduced ? 1 : p} />,
    rebalance: <SceneRebalance key="r" p={reduced ? 1 : p} />,
    ship: <SceneShip key="h" p={reduced ? 1 : p} />
  };

  const SceneView = sceneMap[scene.id] || [<SceneTicket key="t" />, <SceneContext key="c" />, <SceneScoring key="s" p={p} />, <SceneGate key="g" />, <SceneBoard key="b" p={reduced ? 1 : p} />, <SceneRebalance key="r" p={reduced ? 1 : p} />, <SceneShip key="h" p={reduced ? 1 : p} />][i];

  return (
    <section className="friday-storyboard" ref={rootRef} aria-label="Friday interactive demo">
      <div className="friday-storyboard__container">
        <header className="friday-storyboard__header">
          <div className="friday-storyboard__eyebrow"><Sparkles size={14} /><span>{badge}</span></div>
          <h2 className="friday-storyboard__title">{heading}</h2>
          <p className="friday-storyboard__subtitle">{subtitle}</p>
          {showArticleLink && <a className="friday-storyboard__full-article-link" href={articleHref}>Read the full breakdown <ArrowUpRight size={15} /></a>}
        </header>

        {/* SINGLE UNIFIED BROWSER WINDOW (Light Mode) */}
        <div 
          className="friday-storyboard__unified-frame"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* 1. Top Browser Header Chrome */}
          <div className="friday-storyboard__browser-header">
            <div className="friday-storyboard__window-dots">
              <span className="friday-storyboard__window-dot friday-storyboard__window-dot--red" />
              <span className="friday-storyboard__window-dot friday-storyboard__window-dot--yellow" />
              <span className="friday-storyboard__window-dot friday-storyboard__window-dot--green" />
            </div>

            <div className="friday-storyboard__browser-address">
              app.hora.team / sprint-24 / friday-evaluation
            </div>

            <div className="friday-storyboard__header-controls">
              <div className="friday-storyboard__live-tag">
                <span className={`friday-storyboard__live-pulse ${playing ? 'fsb-pulse' : ''}`} />
                <span>{playing ? 'Evaluating' : 'Paused'}</span>
              </div>

              {/* Integrated Playback Controls */}
              <div className="friday-storyboard__control-buttons">
                <button 
                  type="button" 
                  className="friday-storyboard__ctrl-btn" 
                  aria-label="Previous step" 
                  onClick={() => goTo(i - 1)}
                  title="Previous step"
                >
                  <ChevronLeft size={16} />
                </button>
                <button 
                  type="button" 
                  className={`friday-storyboard__ctrl-btn friday-storyboard__ctrl-btn--play ${playing ? 'is-playing' : ''}`} 
                  aria-label={userPaused ? 'Play' : 'Pause'} 
                  onClick={() => setUserPaused((v) => !v)}
                  title={userPaused ? 'Play' : 'Pause'}
                >
                  {userPaused ? <Play size={14} /> : <Pause size={14} />}
                </button>
                <button 
                  type="button" 
                  className="friday-storyboard__ctrl-btn" 
                  aria-label="Next step" 
                  onClick={() => goTo(i + 1)}
                  title="Next step"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Overall Continuous Progress Line */}
          <div className="friday-storyboard__progress-line" style={{ width: `${(elapsed / total) * 100}%` }} />

          {/* 2. Unified Step Navigation Tabs (Horizontal Strip) */}
          <div className="friday-storyboard__steps-bar" role="tablist" aria-label="Friday evaluation steps">
            <div className="friday-storyboard__steps-track">
              {scenes.map((s, n) => {
                const isActive = n === i;
                const isPast = n < i;
                const StepIcon = ICONS[s.icon] || FileText;

                return (
                  <button
                    key={s.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-label={`Step ${n + 1}: ${s.title}`}
                    className={`friday-storyboard__step-tab ${isActive ? 'is-active' : ''} ${isPast ? 'is-past' : ''}`}
                    onClick={() => goTo(n)}
                  >
                    <div className="friday-storyboard__step-tab-icon">
                      <StepIcon size={14} />
                    </div>
                    <span className="friday-storyboard__step-tab-num">0{n + 1}</span>
                    <span className="friday-storyboard__step-tab-title">{s.title}</span>
                    {isActive && (
                      <span 
                        className="friday-storyboard__step-tab-progress"
                        style={{ width: `${p * 100}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Active Step Context Banner */}
          <div className="friday-storyboard__step-banner" key={scene.id} aria-live="polite">
            <div className="friday-storyboard__step-banner-main">
              <div className="friday-storyboard__step-badge-line">
                <span className="friday-storyboard__step-pill">
                  STEP {i + 1} OF {scenes.length}
                </span>
                <span className="friday-storyboard__step-subtitle">
                  {scene.subtitle}
                </span>
              </div>
              <p className="friday-storyboard__step-description">
                {scene.description}
              </p>
            </div>

            <div className="friday-storyboard__step-banner-tags">
              {scene.tags?.map((t) => (
                <span key={t} className="friday-storyboard__banner-tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* 4. Animated Stage Canvas */}
          <div className="friday-storyboard__stage-canvas" key={`stage-${scene.id}`}>
            {SceneView}
          </div>

          {/* 5. Bottom Status Footnote */}
          <div className="friday-storyboard__stage-footnote">
            <span className="friday-storyboard__sample-label">
              Sample data for illustration · Rule-based evaluation with AI summaries
            </span>
            <span className="friday-storyboard__hover-hint">
              Hover to pause playback · {Math.round(total / 1000)}s full run
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
