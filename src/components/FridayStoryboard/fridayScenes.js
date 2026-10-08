// Friday Storyboard Scene Configurations
// Distinct scenarios for different pages:
// 1. FRIDAY_TECHNICAL_SCENES: 7-step deep-dive engineering specification (for /friday)
// 2. FRIDAY_LANDING_SCENES: 4-step high-velocity sprint automation tour (for home page /)

// ----------------------------------------------------------------------------
// 1. Technical Deep-Dive Engine Scenario (Used on /friday)
// ----------------------------------------------------------------------------
export const FRIDAY_TECHNICAL_SCENES = [
  {
    id: 'ticket-arrives',
    number: 1,
    durationMs: 5000,
    iconKey: 'Inbox',
    shortTitle: 'Ticket arrives',
    title: '1. Ticket arrives & stack extracted',
    description: 'Friday inspects incoming tickets, automatically identifying requirements, dependencies, and computing classification certainty before touching anyone\'s sprint queue.',
    ticket: {
      key: 'HOR-214',
      title: 'Add retry to webhook sender',
      points: 3,
      priority: 'P1 · High',
      confidence: 0.82,
      confidenceLabel: 'Confidence: 0.82',
      badges: ['Backend', 'Node.js', 'Webhooks', 'Retry Logic']
    }
  },
  {
    id: 'context-check',
    number: 2,
    durationMs: 6000,
    iconKey: 'Users',
    shortTitle: 'Context check',
    title: '2. Context check across repo & team',
    description: 'Scans repo manifests, commit history, and active sprint load to see who actually worked on this code, who owns the module, and who has available headroom.',
    repoManifests: [
      { name: 'package.json', tag: 'Node.js v20' },
      { name: 'docker-compose.yml', tag: 'Redis 7.2' },
      { name: 'Dockerfile', tag: 'Docker Alpine' }
    ],
    candidates: [
      {
        name: 'Priya',
        role: 'Senior Backend Engineer',
        avatar: 'P',
        color: '#8b5cf6',
        avatarGradient: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
        evidence: 'Merged 4 PRs touching webhooks/ · Solved HOR-171',
        skills: ['Node.js', 'Webhooks', 'Redis'],
        load: '3 of 5 tickets (6 pts)',
        capacityPercent: 60,
        status: 'Headroom available',
        statusType: 'available'
      },
      {
        name: 'Arjun',
        role: 'Staff Systems Architect',
        avatar: 'A',
        color: '#ef4444',
        avatarGradient: 'linear-gradient(135deg, #ef4444, #f87171)',
        evidence: 'Authored core message queue worker',
        skills: ['Distributed Queues', 'Redis'],
        load: '5 of 5 tickets (20 of 20 pts)',
        capacityPercent: 100,
        status: 'At capacity (Protected)',
        statusType: 'overloaded'
      },
      {
        name: 'Meera',
        role: 'Fullstack Engineer',
        avatar: 'M',
        color: '#3b82f6',
        avatarGradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
        evidence: 'Built notification dispatch service',
        skills: ['Node.js', 'Docker', 'APIs'],
        load: '2 of 5 tickets (4 pts)',
        capacityPercent: 40,
        status: 'Headroom available',
        statusType: 'available'
      }
    ]
  },
  {
    id: 'scoring',
    number: 3,
    durationMs: 6000,
    iconKey: 'Sliders',
    shortTitle: 'Scoring breakdown',
    title: '3. Transparent six-factor scoring',
    description: 'Every recommendation shows the exact math across skill match, recent context, capacity, and dependencies. No black-box guesses, completely auditable.',
    candidate: {
      name: 'Priya',
      totalScore: 87,
      rank: 'Rank #1 Recommendation'
    },
    scoringFactors: [
      { label: 'Skill match', raw: 100, weight: 0.35, weighted: 35.0, color: '#8b5cf6' },
      { label: 'Project experience', raw: 90, weight: 0.20, weighted: 18.0, color: '#3b82f6' },
      { label: 'Similar work', raw: 80, weight: 0.15, weighted: 12.0, color: '#0ea5e9' },
      { label: 'Sprint capacity', raw: 60, weight: 0.15, weighted: 9.0, color: '#10b981' },
      { label: 'Availability', raw: 80, weight: 0.10, weighted: 8.0, color: '#f59e0b' },
      { label: 'Dependencies', raw: 100, weight: 0.05, weighted: 5.0, color: '#6366f1' }
    ],
    disqualifiedCandidate: {
      name: 'Arjun',
      reason: 'Not eligible · Over capacity constraint (5 of 5 tickets assigned)'
    }
  },
  {
    id: 'policy-gate',
    number: 4,
    durationMs: 6000,
    iconKey: 'ShieldAlert',
    shortTitle: 'Policy gate',
    title: '4. Policy gate & risk guardrails',
    description: 'Safe high-confidence tickets route forward, while blocked or ambiguous issues pause in Review Required for team sign-off before assignment.',
    lanes: [
      { id: 'auto-assign', name: 'Auto-assign', criteria: 'Score 85+, Conf 75%+', color: '#10b981', activeTicket: 'HOR-214' },
      { id: 'recommend', name: 'Recommend', criteria: 'Score 70+, Conf 60%+', color: '#3b82f6' },
      { id: 'suggest', name: 'Suggest only', criteria: 'Score 55–69', color: '#64748b' },
      { id: 'review', name: 'Review required', criteria: 'Blocked / ambiguous', color: '#f59e0b', activeTicket: 'HOR-230' },
      { id: 'do-not-assign', name: 'Do not assign', criteria: 'Overloaded / no match', color: '#ef4444' }
    ],
    blockedTicket: {
      key: 'HOR-230',
      title: 'Bulk webhook replay script',
      reason: 'Stopped at gate: Blocked by HOR-228'
    }
  },
  {
    id: 'board-action',
    number: 5,
    durationMs: 5000,
    iconKey: 'LayoutDashboard',
    shortTitle: 'Board placement',
    title: '5. One-click board placement',
    description: 'Friday presents recommendations directly on the board with full context. One click approves assignment, or dismiss with zero friction.',
    card: {
      key: 'HOR-214',
      title: 'Add retry to webhook sender',
      recommendedTo: 'Priya',
      score: 87,
      rationale: 'Authored webhook module · 2 slots open',
      targetColumn: 'In Progress'
    }
  },
  {
    id: 'rebalance',
    number: 6,
    durationMs: 5000,
    iconKey: 'Scale',
    shortTitle: 'Sprint rebalance',
    title: '6. Sprint rebalancing with headroom',
    description: 'When sprint bottlenecks emerge, Friday identifies teammates with available capacity and shifts work before burnout happens.',
    rebalanceAction: {
      from: 'Arjun',
      to: 'Meera',
      ticketMoved: 'HOR-221 Redis reconnect backoff (2 pts)',
      arjunBefore: 120,
      arjunAfter: 80,
      meeraBefore: 40,
      meeraAfter: 60
    }
  },
  {
    id: 'ship-loop',
    number: 7,
    durationMs: 5000,
    iconKey: 'GitMerge',
    shortTitle: 'Ship loop & summary',
    title: '7. Ship loop & sprint summary',
    description: 'As PRs merge and CI passes, tickets close out automatically and Friday delivers an objective sprint summary to the team.',
    gitEvent: {
      pr: 'PR #142 Merged',
      ticket: 'HOR-214',
      checks: '3/3 CI checks passed',
      status: 'Moved to Done'
    },
    sprintSummary: [
      { label: 'Shipped', count: '8 tickets (24 pts)', tone: 'success' },
      { label: 'Blocked', count: '1 ticket (waiting on schema)', tone: 'warning' },
      { label: 'At risk', count: '0 tickets', tone: 'neutral' }
    ]
  }
];

// ----------------------------------------------------------------------------
// 2. High-Velocity Sprint Automation Scenario (Used on Homepage /)
// Distinct ticket: HOR-185 Redis Cluster Failover
// Distinct story: Fast 4-step developer workflow tour
// ----------------------------------------------------------------------------
export const FRIDAY_LANDING_SCENES = [
  {
    id: 'intake-classify',
    number: 1,
    durationMs: 5500,
    iconKey: 'Inbox',
    shortTitle: 'Auto triage',
    title: '1. Intelligent Ticket Intake from GitHub',
    description: 'A new infrastructure task arrives. Friday parses repository manifests and computes an 89% certainty rating, matching requirements with zero manual tag assignment.',
    ticket: {
      key: 'HOR-185',
      title: 'Build Redis cluster failover handler',
      points: 5,
      priority: 'P1 · High',
      confidence: 0.89,
      confidenceLabel: 'Certainty: 0.89',
      badges: ['Infrastructure', 'Redis 7.2', 'Distributed Cache', 'Failover']
    }
  },
  {
    id: 'team-context',
    number: 2,
    durationMs: 6500,
    iconKey: 'Users',
    shortTitle: 'Context scan',
    title: '2. Code Authorship & Headroom Matching',
    description: 'Friday inspects git blame and merged PRs across cache/ and cluster/ to identify domain experts, while enforcing strict anti-burnout capacity ceilings.',
    repoManifests: [
      { name: 'docker-compose.prod.yml', tag: 'Redis Cluster' },
      { name: 'redis.conf', tag: 'Sentinel failover' },
      { name: 'go.mod', tag: 'go-redis v9' }
    ],
    candidates: [
      {
        name: 'Marcus',
        role: 'Lead Infrastructure Engineer',
        avatar: 'M',
        color: '#8b5cf6',
        avatarGradient: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
        evidence: 'Authored Redis sentinel client (6 merged PRs)',
        skills: ['Redis', 'Distributed Systems', 'Go'],
        load: '3 of 5 tickets (8 pts)',
        capacityPercent: 60,
        status: 'Headroom available',
        statusType: 'available'
      },
      {
        name: 'Sarah',
        role: 'Principal Platform Architect',
        avatar: 'S',
        color: '#ef4444',
        avatarGradient: 'linear-gradient(135deg, #ef4444, #f87171)',
        evidence: 'Designed cluster replication topology',
        skills: ['Kubernetes', 'Redis', 'High Availability'],
        load: '5 of 5 tickets (22 of 22 pts)',
        capacityPercent: 100,
        status: 'At capacity (Burnout Protected)',
        statusType: 'overloaded'
      },
      {
        name: 'Dev',
        role: 'Site Reliability Engineer',
        avatar: 'D',
        color: '#3b82f6',
        avatarGradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)',
        evidence: 'Managed staging redis sentinels',
        skills: ['Monitoring', 'Docker', 'Go'],
        load: '2 of 5 tickets (5 pts)',
        capacityPercent: 40,
        status: 'Headroom available',
        statusType: 'available'
      }
    ]
  },
  {
    id: 'board-dispatch',
    number: 3,
    durationMs: 5500,
    iconKey: 'LayoutDashboard',
    shortTitle: 'One-click dispatch',
    title: '3. Explainable Assignment with Rationale',
    description: 'Friday presents the top match on the sprint board with clear authorship evidence. Marcus is assigned in one click, attaching relevant PR history to the card.',
    card: {
      key: 'HOR-185',
      title: 'Build Redis cluster failover handler',
      recommendedTo: 'Marcus',
      score: 92,
      rationale: 'Authored sentinel driver · 2 open slots (8/20 pts)',
      targetColumn: 'In Progress'
    }
  },
  {
    id: 'rebalance-ship',
    number: 4,
    durationMs: 6500,
    iconKey: 'GitMerge',
    shortTitle: 'Rebalance & ship',
    title: '4. Dynamic Load Shift & Automated Standup',
    description: 'Friday detects Sarah at risk of bottlenecking, shifts a 2-pt warm-up task to Dev, and delivers a clean 3-line standup report once Marcus\'s PR merges.',
    rebalanceAction: {
      from: 'Sarah',
      to: 'Dev',
      ticketMoved: 'HOR-192 Cache warm-up script (2 pts)',
      sarahBefore: 120,
      sarahAfter: 85,
      devBefore: 40,
      devAfter: 60
    },
    gitEvent: {
      pr: 'PR #112 Merged',
      ticket: 'HOR-185',
      checks: '4/4 checks passed (Cluster smoke tests ok)',
      status: 'Moved to Done'
    },
    sprintSummary: [
      { label: 'Shipped', count: '11 tickets (32 pts)', tone: 'success' },
      { label: 'Rebalanced', count: '1 ticket shifted to protect headroom', tone: 'neutral' },
      { label: 'At risk', count: '0 tickets', tone: 'success' }
    ]
  }
];

// Default export is the full technical spec
export const FRIDAY_SCENES = FRIDAY_TECHNICAL_SCENES;
export const TOTAL_STORYBOARD_DURATION = FRIDAY_SCENES.reduce((acc, scene) => acc + scene.durationMs, 0);
