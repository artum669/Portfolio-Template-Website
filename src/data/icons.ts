import type { ComponentType, SVGProps } from 'react';
import {
  Code2,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Layers,
  Mail,
  Music,
  Palette,
  Rocket,
  Server,
  Sparkles,
  Star,
  Trophy,
  Zap,
  Gamepad2,
  Car,
  Coffee,
  Award,
  Target,
  Briefcase,
  FileCode2,
  Cloud,
  Terminal,
  Layout,
  type LucideIcon,
} from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

export type IconName =
  | 'code'
  | 'cpu'
  | 'database'
  | 'git'
  | 'github'
  | 'globe'
  | 'layers'
  | 'linkedin'
  | 'mail'
  | 'music'
  | 'palette'
  | 'rocket'
  | 'server'
  | 'sparkles'
  | 'star'
  | 'trophy'
  | 'twitter'
  | 'zap'
  | 'gaming'
  | 'car'
  | 'coffee'
  | 'award'
  | 'target'
  | 'briefcase'
  | 'fileCode'
  | 'cloud'
  | 'terminal'
  | 'layout';

type AnyIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

export const iconMap: Record<IconName, AnyIcon> = {
  code: Code2,
  cpu: Cpu,
  database: Database,
  git: GitBranch,
  github: FaGithub,
  globe: Globe,
  layers: Layers,
  linkedin: FaLinkedinIn,
  mail: Mail,
  music: Music,
  palette: Palette,
  rocket: Rocket,
  server: Server,
  sparkles: Sparkles,
  star: Star,
  trophy: Trophy,
  twitter: FaXTwitter,
  zap: Zap,
  gaming: Gamepad2,
  car: Car,
  coffee: Coffee,
  award: Award,
  target: Target,
  briefcase: Briefcase,
  fileCode: FileCode2,
  cloud: Cloud,
  terminal: Terminal,
  layout: Layout,
};
