import {
  BadgeCheck,
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  LockKeyhole,
  MonitorSmartphone,
  ServerCog,
} from 'lucide-react';

export const terminalChecks = [
  'SentinelAI Security Layer: ACTIVE',
  'FastAPI Core: ONLINE',
  'Redis Rate-Limiter: READY',
  'ML Anomaly Scanner: WATCHING',
];

export const skillGroups = [
  {
    title: 'Languages',
    icon: Code2,
    level: 92,
    skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++', 'HTML/CSS'],
  },
  {
    title: 'Backend & Security',
    icon: LockKeyhole,
    level: 95,
    skills: ['FastAPI', 'RESTful APIs', 'Pydantic', 'Uvicorn', 'AsyncIO', 'JWT Auth', 'API Security', 'LLM Threat Analysis'],
  },
  {
    title: 'Frontend & UI',
    icon: MonitorSmartphone,
    level: 84,
    skills: ['React', 'Chakra UI', 'TanStack Query', 'React Router', 'Vite'],
  },
  {
    title: 'Databases & Caching',
    icon: Database,
    level: 88,
    skills: ['PostgreSQL', 'SQLAlchemy', 'Redis', 'Sliding-window Rate Limiting', 'Alembic'],
  },
  {
    title: 'AI/ML & Analytics',
    icon: BrainCircuit,
    level: 86,
    skills: ['Scikit-learn', 'OpenAI API', 'Prompt Injection Detection', 'Power BI', 'Excel'],
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    level: 82,
    skills: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Postman'],
  },
];

export const projects = [
  {
    title: 'SentinelAI',
    subtitle: 'Enterprise AI API Security Gateway',
    category: 'Backend / Security / AI',
    accent: '#00F0FF',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Scikit-learn', 'OpenAI API', 'React', 'TypeScript', 'Docker'],
    highlights: [
      '3-stage security gateway combining deterministic checks, ML payload anomaly detection, and LLM threat mitigation.',
      'Mitigates SQLi, XSS, SSRF, and path traversal with high-throughput async processing.',
      'Multi-tenant architecture with Redis sliding-window rate limiting, SHA-256 key hashing, and Dockerized deployment.',
    ],
    demo: true,
  },
  {
    title: 'Resume-to-Job Matcher',
    subtitle: 'ATS Simulator',
    category: 'Full-Stack / NLP',
    accent: '#00DF89',
    tech: ['React', 'Chakra UI', 'Python', 'FastAPI', 'PyPDF2', 'JavaScript'],
    highlights: [
      'In-memory PDF extraction and text sanitization pipeline using PyPDF2 and python-multipart.',
      'Deterministic keyword matching and skills-gap analyzer with compatibility scores.',
      'Decoupled React and Chakra UI frontend communicating with FastAPI REST endpoints.',
    ],
    demo: false,
  },
];

export const timeline = [
  {
    date: '2024 - 2027',
    title: 'Bachelor of Computer Applications',
    source: 'CIMAGE Group of Institutions',
    icon: ServerCog,
  },
  {
    date: 'June 2025',
    title: 'HTML Training Certification',
    source: 'IIT Bombay / Spoken Tutorial',
    icon: BadgeCheck,
  },
  {
    date: '2025',
    title: 'Python Programming Certification',
    source: 'GeeksforGeeks',
    icon: BadgeCheck,
  },
  {
    date: 'June 2025',
    title: 'Power BI for Beginners',
    source: 'Simplilearn',
    icon: BadgeCheck,
  },
];
