import { m as motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useRef } from 'react';
import portfolio from '@/data/portfolio';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import TechPill from '@/components/ui/TechPill';

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Experience"
          title={<span className="gradient-text-soft">A decade of shipping.</span>}
          subtitle="Roles where I&apos;ve led, built, and learned. Each one taught me something I still use today."
        />

        <div ref={ref} className="relative pl-12 md:pl-20">
          <div className="absolute left-3 top-0 h-full w-px bg-violet-400/15 md:left-7" aria-hidden />
          <motion.div
            style={{ height: railHeight }}
            className="absolute left-3 top-0 w-px bg-gradient-to-b from-violet-500 via-violet-400 to-blue-400 shadow-[0_0_10px_rgba(124,58,237,0.6)] md:left-7"
            aria-hidden
          />

          <div className="space-y-8">
            {portfolio.experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative"
              >
                <span
                  aria-hidden
                  className="absolute -left-[34px] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-violet-400/40 bg-ink-900 shadow-[0_0_18px_rgba(124,58,237,0.45)] md:-left-[54px]"
                >
                  <Briefcase className="h-3 w-3 text-violet-300" />
                </span>
                <GlassCard className="p-6 md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white md:text-xl">{job.role}</h3>
                      <div className="mt-1 text-sm text-violet-300">
                        {job.company} · <span className="text-mute">{job.location}</span>
                      </div>
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                      {job.period}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fog/90">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <TechPill key={t} label={t} />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
