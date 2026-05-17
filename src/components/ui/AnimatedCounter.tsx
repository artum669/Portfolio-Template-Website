import { animate, useInView, useMotionValue, useTransform, m as motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
}

export default function AnimatedCounter({ value, duration = 1.8, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, value, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, motionValue, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
