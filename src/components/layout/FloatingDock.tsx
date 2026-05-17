import { m as motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';
import portfolio from '@/data/portfolio';
import { iconMap } from '@/data/icons';
import MagneticWrap from '@/components/ui/MagneticWrap';

export default function FloatingDock() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useMotionValueEvent(scrollY, 'change', (y) => {
    const dy = y - lastY.current;
    if (y < 200) {
      setHidden(false);
    } else if (dy > 4) {
      setHidden(true);
    } else if (dy < -4) {
      setHidden(false);
    }
    lastY.current = y;
  });

  return (
    <motion.div
      animate={{ y: hidden ? 120 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ type: 'spring', stiffness: 240, damping: 26 }}
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:bottom-8 md:left-auto md:right-8 md:translate-x-0"
    >
      <div className="glass-panel-strong flex items-center gap-1 rounded-full px-2 py-2 md:flex-col md:rounded-2xl md:px-2 md:py-3">
        {portfolio.social.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <MagneticWrap key={s.label} strength={0.45}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full text-mute transition hover:bg-violet-500/15 hover:text-white"
              >
                <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span className="pointer-events-none absolute right-12 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-ink-900 px-2 py-1 text-[11px] font-medium text-fog opacity-0 shadow-lg ring-1 ring-violet-400/20 transition-opacity group-hover:opacity-100 md:block">
                  {s.label}
                </span>
              </a>
            </MagneticWrap>
          );
        })}
      </div>
    </motion.div>
  );
}
