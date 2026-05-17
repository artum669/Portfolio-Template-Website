import { m as motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import portfolio from '@/data/portfolio';
import GlowButton from '@/components/ui/GlowButton';
import MagneticWrap from '@/components/ui/MagneticWrap';
import TypingText from '@/components/ui/TypingText';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const TAGLINE = portfolio.profile.tagline;

export default function Hero() {
  const reduce = useReducedMotion();
  const coarse = useMediaQuery('(pointer: coarse)');
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const ringX = useTransform(sx, (v) => v * 18);
  const ringY = useTransform(sy, (v) => v * 18);
  const haloX = useTransform(sx, (v) => v * -12);
  const haloY = useTransform(sy, (v) => v * -12);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce || coarse) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-28 pb-20 md:pt-32"
    >
      <motion.div
        style={!reduce && !coarse ? { x: haloX, y: haloY } : undefined}
        className="absolute left-1/2 top-1/2 -z-0 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-violet-600/25 via-violet-500/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <motion.div
          style={!reduce && !coarse ? { x: ringX, y: ringY } : undefined}
          className="relative mb-8 flex h-[clamp(140px,28vw,200px)] w-[clamp(140px,28vw,200px)] items-center justify-center"
        >
          <span aria-hidden className="absolute inset-0 animate-glow-pulse rounded-full" />
          <span
            aria-hidden
            className="absolute inset-[-14px] rounded-full border border-violet-400/30"
            style={{
              maskImage: 'conic-gradient(from 0deg, black 0deg, transparent 120deg, black 360deg)',
              WebkitMaskImage: 'conic-gradient(from 0deg, black 0deg, transparent 120deg, black 360deg)',
              animation: reduce ? undefined : 'ring-rotate 8s linear infinite',
            }}
          />
          <span
            aria-hidden
            className="absolute inset-[-28px] rounded-full border border-blue-400/20"
            style={{
              maskImage: 'conic-gradient(from 90deg, black 0deg, transparent 90deg, black 360deg)',
              WebkitMaskImage: 'conic-gradient(from 90deg, black 0deg, transparent 90deg, black 360deg)',
              animation: reduce ? undefined : 'ring-rotate 14s linear infinite reverse',
            }}
          />
          <motion.div
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="glass-panel-strong relative flex h-full w-full items-center justify-center rounded-full p-1.5"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-violet-600 via-ink-800 to-blue-600 text-5xl font-black text-white md:text-6xl">
              {/* {portfolio.profile.name
                .split(' ')
                .map((p) => p[0])
                .join('')} */}
                🧙
            </div>
          </motion.div>
        </motion.div>

        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200">
          <Sparkles className="h-3.5 w-3.5" />
          Available for new projects
        </div>

        <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <span className="block">Hi, I&apos;m</span>
          <motion.span
            animate={reduce ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="gradient-text text-glow-strong block"
          >
            {portfolio.profile.name}.
          </motion.span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-mute md:text-lg" aria-live="polite">
          <TypingText text={TAGLINE} speed={26} caret />
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <MagneticWrap strength={0.3}>
            <GlowButton href="#projects" icon={<ArrowDownRight className="h-4 w-4" />}>
              View my work
            </GlowButton>
          </MagneticWrap>
          <MagneticWrap strength={0.3}>
            <GlowButton
              href={portfolio.social.find((s) => s.icon === 'github')?.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              icon={<FaGithub className="h-4 w-4" />}
            >
              Browse GitHub
            </GlowButton>
          </MagneticWrap>
        </div>

        <div className="mt-14 flex items-center gap-6 text-[11px] uppercase tracking-[0.25em] text-mute">
          <span className="font-mono">{portfolio.profile.location}</span>
          <span aria-hidden className="h-px w-12 bg-violet-400/30" />
          <span className="font-mono">Scroll to explore</span>
        </div>
      </div>

      <motion.div
        aria-hidden
        animate={reduce ? undefined : { y: [0, 8, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 z-10 flex h-10 w-6 -translate-x-1/2 items-start justify-center rounded-full border border-violet-400/30 p-1.5"
      >
        <span className="h-2 w-1 rounded-full bg-violet-400" />
      </motion.div>
    </section>
  );
}
