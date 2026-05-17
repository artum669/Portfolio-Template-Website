import { m as motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface MagneticWrapProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export default function MagneticWrap({ children, strength = 0.35, className = '' }: MagneticWrapProps) {
  const reduce = useReducedMotion();
  const coarse = useMediaQuery('(pointer: coarse)');
  const ref = useRef<HTMLSpanElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const enabled = !reduce && !coarse;

  const onMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    if (!enabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={enabled ? { x: sx, y: sy } : undefined}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  );
}
