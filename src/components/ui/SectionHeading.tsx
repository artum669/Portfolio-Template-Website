import { m as motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <div className={`max-w-3xl ${alignClass} mb-14`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.5 }}
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-200 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 text-base text-mute md:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
