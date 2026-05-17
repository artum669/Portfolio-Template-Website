import { m as motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateParticles(count: number) {
  const rand = mulberry32(0xc0ffee);
  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    delay: rand() * 6,
    duration: 8 + rand() * 10,
    size: 1 + rand() * 1.6,
    opacity: 0.25 + rand() * 0.55,
  }));
}

const desktopParticles = generateParticles(22);
const mobileParticles = generateParticles(8);

export default function AmbientBackground() {
  const reduce = useReducedMotion();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const particles = useMemo(() => (isMobile ? mobileParticles : desktopParticles), [isMobile]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      <motion.div
        className="absolute -top-32 -left-32 h-[55vmax] w-[55vmax] rounded-full bg-violet-600/25 blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, 60, -20, 0], y: [0, 40, -30, 0], scale: [1, 1.1, 0.95, 1] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 h-[50vmax] w-[50vmax] rounded-full bg-blue-600/20 blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, -50, 30, 0], y: [0, -30, 40, 0], scale: [1, 0.95, 1.08, 1] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/3 h-[40vmax] w-[40vmax] rounded-full bg-fuchsia-600/15 blur-3xl"
        animate={
          reduce
            ? undefined
            : { x: [0, 40, -40, 0], y: [0, -20, 30, 0], scale: [1, 1.05, 0.9, 1] }
        }
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
      />

      <div className="absolute inset-0 grid-bg opacity-60" />

      {!reduce &&
        particles.map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-violet-300"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              boxShadow: '0 0 6px rgba(167, 139, 250, 0.7)',
            }}
            animate={{ y: [0, -22, 0], opacity: [p.opacity, p.opacity * 0.4, p.opacity] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
          />
        ))}

      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/80" />
    </div>
  );
}
