import type { IconName } from './icons';

interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  avatar: string;
  resumeUrl: string;
  location: string;
  email: string;
}

interface Stat {
  label: string;
  value: number;
  suffix?: string;
  icon: IconName;
}

export type SkillCategory = 'frontend' | 'backend' | 'tooling' | 'design';

interface Skill {
  name: string;
  level: number;
  icon: IconName;
  category: SkillCategory;
}

interface Interest {
  name: string;
  icon: IconName;
  blurb: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  cover: string;
  tech: string[];
  live?: string;
  repo?: string;
  year: number;
  accent: string;
}

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

interface Achievement {
  title: string;
  year: number;
  icon: IconName;
  detail: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: IconName;
}

interface NowPlaying {
  track: string;
  artist: string;
  album: string;
  cover: string;
  href: string;
}

const profile: Profile = {
  name: 'artum669',
  role: 'Full-Stack Technologist & Prompt Engineer',
  tagline: 'Crafting cinematic web experiences at the intersection of code, design, and motion.',
  bio:
    'Self-taught engineer with a decade of shipping production software for startups and indie studios. I build fast, beautiful and professional real-time systems.',
  avatar: '/images/avatar.webp',
  resumeUrl: '#contact',
  location: 'Israel, Remote',
  email: 'artum669_dev@gmail.com',
};

const stats: Stat[] = [
  { label: 'Years shipping', value: 7, suffix: '+', icon: 'rocket' },
  { label: 'Projects delivered', value: 17, icon: 'layers' },
  { label: 'GitHub stars', value: 3, suffix: '+', icon: 'star' },
  { label: 'Cups of coffee', value: 101, icon: 'coffee' },
];

const skills: Skill[] = [
  { name: 'TypeScript', level: 15, icon: 'code', category: 'frontend' },
  { name: 'React / Vite', level: 12, icon: 'layout', category: 'frontend' },
  { name: 'Framer Motion', level: 3, icon: 'sparkles', category: 'frontend' },
  { name: 'Tailwind / CSS', level: 8, icon: 'palette', category: 'frontend' },
  { name: 'Node / Bun', level: 2, icon: 'server', category: 'backend' },
  { name: 'MySQL', level: 12, icon: 'database', category: 'backend' },
  { name: 'Cloudflare Workers', level: 14, icon: 'cloud', category: 'backend' },
  { name: 'Git / CI', level: 15, icon: 'git', category: 'tooling' },
  { name: 'Figma', level: 7, icon: 'palette', category: 'design' },
  { name: 'Motion Design', level: 10, icon: 'sparkles', category: 'design' },
];

const interests: Interest[] = [
  { name: 'Gaming', icon: 'gaming', blurb: 'Open-world, racing simulators, and anything with a sharp art direction.' },
  { name: 'Tech', icon: 'cpu', blurb: 'Custom Computer, digital watches.' },
  { name: 'Music', icon: 'music', blurb: 'PsyTrance, Electronic, Pop.' },
];

const projects: Project[] = [
  {
    slug: 'Interactive restaurant menu',
    title: 'MenuLine',
    summary: 'Web-based desktop/mobile restaurant menu.',
    description:
      'multiple language support, real-time updates, and a sleek UI that works seamlessly across devices. Built with React and Vite.',
    cover:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=70',
    tech: ['TypeScript', 'React', 'PostgreSQL', 'Vite', 'Cloudflare Workers'],
    live: 'https://resturant-menu.pages.dev/',
    repo: 'https://github.com/artum669/resturant-menu',
    year: 2025,
    accent: 'from-violet-500/40 to-blue-500/30',
  },
  {
    slug: 'Old Portfolio',
    title: 'Old Junk',
    summary: 'A collection of past projects, experiments, and code snippets that I\'m not proud of but can\'t bring myself to delete.',
    description:
      'A time capsule of my coding journey, filled with both cringe-worthy hacks and hidden gems. It\'s a messy archive that shows how far I\'ve come and the lessons learned along the way.',
    cover:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70',
    tech: ['Next.js', 'ClickHouse', 'Cloudflare Workers', 'D3'],
    live: 'https://artum-dev.pages.dev/',
    repo: 'https://github.com/artum669/artum669_Website',
    year: 2025,
    accent: 'from-blue-500/40 to-cyan-400/30',
  },
  // {
  //   slug: 'arcade-mode',
  //   title: 'Arcade Mode',
  //   summary: 'Gamified dashboard for sales teams with achievement unlocks.',
  //   description:
  //     'Reimagining a CRM as an arcade. Combo meters, daily quests, and a leaderboard that updates in realtime.',
  //   cover:
  //     'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1200&q=70',
  //   tech: ['React', 'Supabase', 'Zustand', 'Lottie'],
  //   live: 'https://example.com/arcade',
  //   year: 2023,
  //   accent: 'from-emerald-400/40 to-violet-500/30',
  // },
  // {
  //   slug: 'lumen-cms',
  //   title: 'Lumen CMS',
  //   summary: 'A headless CMS for design-led teams that loves Markdown.',
  //   description:
  //     'Block-based editor with first-class motion primitives. Powers a handful of indie studios and newsletters.',
  //   cover:
  //     'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=70',
  //   tech: ['Remix', 'PostgreSQL', 'Prosemirror', 'Edge'],
  //   live: 'https://example.com/lumen',
  //   repo: 'https://github.com/example/lumen',
  //   year: 2023,
  //   accent: 'from-amber-400/40 to-violet-500/30',
  // },
];

const experience: ExperienceItem[] = [
{
  company: 'Freelance / Self-employed',
  role: 'Full-stack developer & game systems engineer',
  period: '2020 — Present',
  location: 'Remote',
  bullets: [
    'Built custom Discord bots with advanced automation, moderation systems, ticket systems, economy features, logging, and API integrations.',
    'Developed cinematic and optimized FiveM server systems including custom UI/UX, roleplay mechanics, vehicle systems, and server-side logic.',
    'Created Roblox game systems, admin tools, interactive gameplay mechanics, and scalable multiplayer features.',
    'Designed modern web dashboards and control panels for communities, game servers, and management systems.',
    'Worked with clients through Fiverr and Discord communities, delivering custom solutions and ongoing support.',
    'Focused on smooth user experience, performance optimization, responsive design, and real-time systems.',
  ],
  tech: [
    'TypeScript',
    'JavaScript',
    'Node.js',
    'React',
    'Lua',
    'FiveM',
    'Roblox Studio',
    'TailwindCSS',
    'Framer Motion',
  ],
}
];

const achievements: Achievement[] = [
  {
    title: 'Best Israeli Roblox Developer',
    year: 2018,
    icon: 'trophy',
    detail: 'Awarded by Roblox for outstanding contributions to the Israeli Roblox developer community, including popular game systems and tools used by top creators.',
  },
  // {
  //   title: 'GitHub Trending #1',
  //   year: 2024,
  //   icon: 'star',
  //   detail: 'Midnight Engine hit the global trending list for three days running.',
  // },
  // {
  //   title: 'Speaker @ JSConf EU',
  //   year: 2023,
  //   icon: 'target',
  //   detail: 'Talk: "Motion as a Material" — designing UI with physics.',
  // },
  // {
  //   title: 'CSS Design Awards',
  //   year: 2023,
  //   icon: 'award',
  //   detail: 'Innovation award for Arcade Mode\'s gamified dashboard layer.',
  // },
];

const social: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/artum669', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/artum669', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:artum669_dev@gmail.com', icon: 'mail' },
];

const nowPlaying: NowPlaying = {
  track: 'Paranormal Attack -Be with you',
  artist: 'soundvguy ',
  album: 'PsyMusic',
  cover: 'https://i1.sndcdn.com/artworks-000062227300-zd5f33-t500x500.jpg',
  href: 'https://soundcloud.com/soundvguy/paranormal-attack-be-with-you',
};

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Arsenal', href: '#arsenal' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const portfolio = {
  profile,
  stats,
  skills,
  interests,
  projects,
  experience,
  achievements,
  social,
  nowPlaying,
  navLinks,
} as const;

export default portfolio;
