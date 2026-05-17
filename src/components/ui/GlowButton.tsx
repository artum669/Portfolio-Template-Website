import { m as motion } from 'framer-motion';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type AnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'children' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'onAnimationStart'
>;

interface GlowButtonProps extends AnchorProps {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
  icon?: ReactNode;
}

export default function GlowButton({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...rest
}: GlowButtonProps) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950';

  const variantStyles =
    variant === 'primary'
      ? 'bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-[0_8px_30px_rgba(124,58,237,0.45)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.65)]'
      : 'border border-violet-400/30 bg-white/[0.02] text-fog hover:bg-violet-500/10 hover:border-violet-400/60';

  return (
    <motion.a
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      className={`${base} ${variantStyles} ${className}`}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      {icon && (
        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
      {variant === 'primary' && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 2.4s linear infinite',
          }}
        />
      )}
    </motion.a>
  );
}
