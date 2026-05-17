import { m as motion } from 'framer-motion';
import portfolio from '@/data/portfolio';
import { iconMap } from '@/data/icons';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title={<span className="gradient-text-soft">Engineer with a designer&apos;s eye.</span>}
          subtitle="A decade spent shipping product, design systems, and motion. Equal parts engineer, animator, and tinkerer — happiest at the seam between code and craft."
        />

        <div className="grid gap-6 md:grid-cols-3">
          <GlassCard className="p-7 md:col-span-2">
            <p className="text-base leading-relaxed text-fog/90 md:text-lg">
              {portfolio.profile.bio}
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-violet-200/80">
              <span className="rounded-full border border-violet-400/25 px-3 py-1">{portfolio.profile.location}</span>
              <span className="rounded-full border border-violet-400/25 px-3 py-1">Remote-first</span>
              <span className="rounded-full border border-violet-400/25 px-3 py-1">English · Russian · Hebrew</span>
            </div>
          </GlassCard>

          <div className="grid grid-cols-2 gap-3">
            {portfolio.stats.map((stat, i) => {
              const Icon = iconMap[stat.icon];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                >
                  <GlassCard className="flex h-full flex-col justify-between p-4">
                    <Icon className="h-5 w-5 text-violet-300" />
                    <div>
                      <div className="text-2xl font-black text-white">
                        <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                      </div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-mute">
                        {stat.label}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <GlassCard className="p-7">
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Skill stack
            </h3>
            <div className="space-y-4">
              {portfolio.skills.slice(0, 6).map((skill, i) => {
                const Icon = iconMap[skill.icon];
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                  >
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 font-medium text-fog">
                        <Icon className="h-3.5 w-3.5 text-violet-300" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-[11px] text-mute">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.04]">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true, margin: '-10% 0px' }}
                        transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originX: 0 }}
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 via-violet-400 to-blue-400 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>

          <GlassCard className="p-7">
            <h3 className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-violet-200">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Off the clock
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {portfolio.interests.map((interest, i) => {
                const Icon = iconMap[interest.icon];
                return (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    whileHover={{ y: -3 }}
                    className="group rounded-2xl border border-violet-400/15 bg-white/[0.02] p-4 transition hover:border-violet-400/40 hover:bg-violet-500/10"
                  >
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/20 text-violet-200 ring-1 ring-violet-400/25 transition group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="text-sm font-semibold text-white">{interest.name}</div>
                    <div className="mt-1 text-xs leading-relaxed text-mute">{interest.blurb}</div>
                  </motion.div>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
