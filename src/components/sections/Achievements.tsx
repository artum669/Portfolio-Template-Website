import { m as motion } from 'framer-motion';
import portfolio from '@/data/portfolio';
import { iconMap } from '@/data/icons';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Achievements() {
  return (
    <section id="achievements" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Highlights"
          title={<span className="gradient-text-soft">Wins worth pinning.</span>}
          subtitle="Awards, recognitions, and milestones that meant something."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {portfolio.achievements.map((a, i) => {
            const Icon = iconMap[a.icon];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
              >
                <GlassCard className="group relative h-full overflow-hidden p-6">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-12 right-0 h-40 w-40 rounded-full bg-violet-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-50"
                  />
                  <div className="relative">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/20 ring-1 ring-violet-400/30 shadow-[0_0_24px_-8px_rgba(124,58,237,0.6)]">
                      <Icon className="h-5 w-5 text-violet-200" />
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">{a.year}</div>
                    <h3 className="mt-1 text-base font-bold text-white">{a.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-mute">{a.detail}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
