// Plain data only. Import this from FridayPage instead of from FridayStoryboard,
// otherwise the lazy() split is defeated and the whole component lands in the main bundle.
export const FRIDAY_TECHNICAL_SCENES = [
  {
    id: 'ticket',
    icon: 'FileText',
    title: 'A ticket arrives',
    subtitle: 'Friday reads it and works out what it needs',
    description:
      'HOR-214 is created. Friday extracts the skills and category the work needs and rates how confident it is in that reading. A vague ticket gets a low rating and is routed to a person later.',
    tags: ['Requirement intelligence', 'Skills and category', 'Confidence rating'],
    duration: 5500,
  },
  {
    id: 'context',
    icon: 'GitBranch',
    title: 'It checks the context',
    subtitle: 'Repo stack, past work and current load',
    description:
      'Friday reads your repo manifests to learn the project stack, looks for similar past tickets and who finished them, and counts each person’s open tickets and story points.',
    tags: ['Tech stack', 'Similar past work', 'Open load'],
    duration: 6500,
  },
  {
    id: 'scoring',
    icon: 'Calculator',
    title: 'It scores every candidate',
    subtitle: 'Six weighted factors, shown in full',
    description:
      'Each person gets a score out of 100 from six factors: skill 35%, project experience 20%, similar work 15%, capacity 15%, availability 10% and dependencies 5%. Anyone over the capacity limit is not eligible.',
    tags: ['Six factors', 'Capacity limit', 'Explainable'],
    duration: 6500,
  },
  {
    id: 'gate',
    icon: 'ShieldCheck',
    title: 'A policy gate decides',
    subtitle: 'Five outcomes, from auto-assign to hold',
    description:
      'The score and confidence pick one of five outcomes. Clear matches move forward. Blocked, vague or overloaded cases are held for a person instead of being assigned.',
    tags: ['Auto-assign', 'Recommend', 'Review required'],
    duration: 6000,
  },
  {
    id: 'board',
    icon: 'LayoutDashboard',
    title: 'You approve on the board',
    subtitle: 'A Friday card with the reasons attached',
    description:
      'Recommendations appear as a card in the backlog with the evidence behind them. One click assigns the ticket and the board updates for the whole team.',
    tags: ['Friday card', 'One-click approval', 'Live board'],
    duration: 5500,
  },
  {
    id: 'rebalance',
    icon: 'Scale',
    title: 'It rebalances mid-sprint',
    subtitle: 'Moving work without overloading anyone',
    description:
      'When scope grows and someone goes over capacity, Friday proposes moving untouched tickets to teammates with room, and never past their limit.',
    tags: ['Workload rebalancing', 'Headroom check', 'Untouched tickets only'],
    duration: 6500,
  },
  {
    id: 'ship',
    icon: 'Rocket',
    title: 'Merge, report, repeat',
    subtitle: 'Git activity updates the sprint for you',
    description:
      'A merged pull request moves the ticket to Done. Checks are summarised on the PR, and Friday writes a short update of what shipped, what is blocked and what to watch.',
    tags: ['Git-linked status', 'CI summary', 'Sprint update'],
    duration: 6000,
  },
];

// High-velocity 4-step landing page tour
export const FRIDAY_LANDING_SCENES = [
  FRIDAY_TECHNICAL_SCENES[0], // Ticket arrives
  FRIDAY_TECHNICAL_SCENES[1], // Context check
  FRIDAY_TECHNICAL_SCENES[4], // Board approval
  FRIDAY_TECHNICAL_SCENES[6], // Merge & report
];

export const FRIDAY_SCENES = FRIDAY_TECHNICAL_SCENES;
