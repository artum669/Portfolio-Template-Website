import { m as motion } from 'framer-motion';
import { useState } from 'react';
import portfolio, { type SkillCategory } from '@/data/portfolio';
import { iconMap } from '@/data/icons';
import SectionHeading from '@/components/ui/SectionHeading';
import MarqueeRow from '@/components/ui/MarqueeRow';

const categories: { key: SkillCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'tooling', label: 'Tooling' },
  { key: 'design', label: 'Design' },
];

export default function TechArsenal() {
  const [filter, setFilter] = useState<SkillCategory | 'all'>('all');
  const filtered =
    filter === 'all' ? portfolio.skills : portfolio.skills.filter((s) => s.category === filter);

  return (
    <section id="arsenal" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Tech arsenal"
          title={<span className="gradient-text-soft">The toolkit, on repeat.</span>}
          subtitle="A daily-driven stack — battle-tested in production, sharpened in side projects."
        />

        <div className="space-y-3">
          <MarqueeRow>
            {portfolio.skills.slice(0, 8).map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <div
                  key={`m1-${skill.name}`}
                  className="glass-panel-soft flex shrink-0 items-center gap-3 rounded-2xl px-5 py-3"
                >
                  <Icon className="h-5 w-5 text-violet-300" />
                  <span className="font-medium text-fog">{skill.name}</span>
                </div>
              );
            })}
          </MarqueeRow>

          <MarqueeRow reverse speed="slow">
            {portfolio.skills.slice(4).map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <div
                  key={`m2-${skill.name}`}
                  className="glass-panel-soft flex shrink-0 items-center gap-3 rounded-2xl px-5 py-3"
                >
                  <Icon className="h-5 w-5 text-blue-300" />
                  <span className="font-medium text-fog">{skill.name}</span>
                </div>
              );
            })}
          </MarqueeRow>
        </div>

        <div className="mt-10">
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  filter === c.key
                    ? 'text-white'
                    : 'text-mute hover:text-fog'
                }`}
              >
                {filter === c.key && (
                  <motion.span
                    layoutId="arsenal-tab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 shadow-[0_4px_18px_rgba(124,58,237,0.45)]"
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {filtered.map((skill) => {
              const Icon = iconMap[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -4 }}
                  className="group glass-panel relative overflow-hidden rounded-2xl p-4"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-violet-500/10 blur-2xl transition-opacity group-hover:opacity-100"
                  />
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/20 ring-1 ring-violet-400/25">
                    <Icon className="h-5 w-5 text-violet-200" />
                  </div>
                  <div className="text-sm font-semibold text-white">{skill.name}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-mute">
                    {skill.category}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
