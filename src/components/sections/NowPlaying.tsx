import { m as motion, useReducedMotion } from 'framer-motion';
import { Music } from 'lucide-react';
import portfolio from '@/data/portfolio';
import GlassCard from '@/components/ui/GlassCard';

export default function NowPlaying() {
  const reduce = useReducedMotion();
  const np = portfolio.nowPlaying;

  return (
    <section id="now-playing" className="relative z-10 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5 }}
        >
          <GlassCard className="flex items-center gap-4 p-4 md:gap-6 md:p-5">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl md:h-20 md:w-20">
              <img
                src={np.cover}
                alt=""
                loading="lazy"
                decoding="async"
                className={`h-full w-full object-cover ${reduce ? '' : 'animate-spin-slow'}`}
                style={{ animationDuration: '20s' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-transparent mix-blend-overlay" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-violet-300">
                <Music className="h-3 w-3" />
                <span>now playing</span>
                <span className="ml-1 inline-flex h-4 items-end gap-[2px]">
                  {[0.4, 0.9, 0.6, 1, 0.5].map((h, i) => (
                    <motion.span
                      key={i}
                      className="w-[2px] origin-bottom rounded-full bg-violet-400"
                      style={{ height: `${h * 100}%` }}
                      animate={reduce ? undefined : { scaleY: [0.4, 1, 0.5, 0.9, 0.3] }}
                      transition={{
                        duration: 1.1 + i * 0.15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: i * 0.08,
                      }}
                    />
                  ))}
                </span>
              </div>
              <div className="mt-1 truncate text-base font-bold text-white md:text-lg">{np.track}</div>
              <div className="truncate text-xs text-mute">
                {np.artist} · <span className="text-violet-200/80">{np.album}</span>
              </div>
            </div>

            <a
              href={np.href}
              className="hidden shrink-0 rounded-full border border-violet-400/30 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-fog transition hover:border-violet-400/70 hover:bg-violet-500/10 md:inline-flex"
            >
              Listen
            </a>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
