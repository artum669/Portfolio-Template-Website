import {
  animate,
  m as motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { useCallback, useEffect, useRef, useState } from 'react';
import portfolio, { type Project } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import TechPill from '@/components/ui/TechPill';
import { useMediaQuery } from '@/hooks/useMediaQuery';

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const coarse = useMediaQuery('(pointer: coarse)');
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || coarse) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
    setHover(false);
  };

  const interactive = !reduce && !coarse;

  return (
    <div
      className="relative w-[78vw] shrink-0 sm:w-[60vw] md:w-[440px] lg:w-[480px]"
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={onLeave}
      style={{ perspective: 1200 }}
    >
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-br ${project.accent} blur-2xl transition-opacity duration-500`}
        style={{ opacity: hover ? 0.6 : 0.2 }}
      />
      <motion.div
        style={interactive ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
        className="glass-panel-strong relative overflow-hidden rounded-3xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.cover}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent`} />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} mix-blend-overlay opacity-60`} />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-ink-950/70 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.2em] text-violet-200 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            {project.year}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold text-white md:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-blue-500 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_4px_18px_rgba(124,58,237,0.45)] transition hover:shadow-[0_6px_24px_rgba(124,58,237,0.7)]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-violet-400/30 bg-white/[0.03] px-3.5 py-2 text-xs font-semibold text-fog transition hover:border-violet-400/60 hover:bg-violet-500/10"
              >
                <FaGithub className="h-3.5 w-3.5" />
                Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [bounds, setBounds] = useState({ min: 0, step: 0 });

  const recalc = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return;
    const containerW = containerRef.current.offsetWidth;
    const trackW = trackRef.current.scrollWidth;
    const min = Math.min(0, containerW - trackW);
    const cardEl = trackRef.current.querySelector<HTMLElement>('[data-card]');
    const gap = 24;
    const step = cardEl ? cardEl.offsetWidth + gap : 480;
    setBounds({ min, step });
  }, []);

  useEffect(() => {
    recalc();
    if (typeof window === 'undefined') return;
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, [recalc]);

  const goTo = (i: number) => {
    if (bounds.step === 0) return;
    const maxIndex = Math.max(0, Math.ceil(-bounds.min / bounds.step));
    const clamped = Math.max(0, Math.min(maxIndex, i));
    setIndex(clamped);
    animate(x, Math.max(bounds.min, -clamped * bounds.step), {
      type: 'spring',
      stiffness: 220,
      damping: 28,
    });
  };

  const maxIndex =
    bounds.step === 0 ? portfolio.projects.length - 1 : Math.max(0, Math.ceil(-bounds.min / bounds.step));

  return (
    <section id="projects" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title={<span className="gradient-text-soft">Projects worth a drag.</span>}
            subtitle="A slice of recent product, tooling, and indie work. Drag, scroll, or use the arrows."
            align="left"
          />
          <div className="hidden items-center gap-2 md:flex">
            <button
              aria-label="Previous project"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/25 bg-white/[0.04] text-fog transition hover:border-violet-400/70 disabled:opacity-30 disabled:hover:border-violet-400/25"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next project"
              onClick={() => goTo(index + 1)}
              disabled={index >= maxIndex}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/25 bg-white/[0.04] text-fog transition hover:border-violet-400/70 disabled:opacity-30 disabled:hover:border-violet-400/25"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div ref={containerRef} className="mt-2 overflow-hidden">
          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: bounds.min, right: 0 }}
            dragElastic={0.08}
            onDragEnd={() => {
              if (bounds.step === 0) return;
              const current = x.get();
              const nearest = Math.round(-current / bounds.step);
              goTo(nearest);
            }}
            style={{ x }}
            className="flex cursor-grab gap-6 active:cursor-grabbing"
          >
            {portfolio.projects.map((p) => (
              <div key={p.slug} data-card>
                <ProjectCard project={p} />
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 md:hidden">
          {portfolio.projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-violet-400' : 'w-1.5 bg-violet-400/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
