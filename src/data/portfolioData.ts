export const skills = [
  { name: 'TypeScript', level: 95 },
  { name: 'React Architecture', level: 94 },
  { name: 'System Design', level: 88 },
  { name: 'Performance Optimization', level: 92 },
  { name: 'AI Product Integration', level: 84 },
];

export const techStack = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'PostgreSQL',
  'GraphQL',
  'Docker',
];

export const projectCategories = ['All', 'Frontend', 'AI', 'Backend'] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects = [
  {
    name: 'PulseBoard Analytics',
    description: 'Executive analytics workspace with real-time metrics, role-aware dashboards, and actionable reporting flows.',
    tags: ['Frontend', 'Backend'],
    tech: ['React', 'TypeScript', 'Redis'],
    github: 'https://github.com/',
    live: 'https://example.com',
  },
  {
    name: 'VoiceOps Copilot',
    description: 'AI-powered support assistant that summarizes calls, drafts responses, and highlights churn risk in real time.',
    tags: ['AI', 'Frontend'],
    tech: ['OpenAI', 'React', 'Node'],
    github: 'https://github.com/',
    live: 'https://example.com',
  },
  {
    name: 'ScaleFlow API Platform',
    description: 'Multi-tenant backend platform with observability-first pipelines and enterprise-grade auth controls.',
    tags: ['Backend'],
    tech: ['Node.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/',
    live: 'https://example.com',
  },
  {
    name: 'Nova Commerce Studio',
    description: 'Conversion-focused commerce frontend with dynamic merchandising and <1.5s page interactions.',
    tags: ['Frontend'],
    tech: ['React', 'Tailwind', 'Vite'],
    github: 'https://github.com/',
    live: 'https://example.com',
  },
];

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Nimbus Labs',
    date: '2022 — Present',
    summary:
      'Led migration to a component-driven design system, improved release velocity by 35%, and shipped mission-critical dashboard experiences.',
  },
  {
    role: 'Software Engineer',
    company: 'Vertex AI Products',
    date: '2020 — 2022',
    summary:
      'Built AI-enhanced workflow features and instrumented performance budgets that reduced main-thread blocking by 42%.',
  },
  {
    role: 'Engineering Fellow',
    company: 'TechForward Initiative',
    date: '2019 — 2020',
    summary:
      'Mentored junior engineers, designed frontend curriculum, and led inclusive engineering practices for distributed teams.',
  },
];
