import { m as motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed inset-x-0 top-0 z-[80] h-[2px] bg-gradient-to-r from-violet-500 via-violet-400 to-blue-400 shadow-[0_0_10px_rgba(124,58,237,0.6)]"
    />
  );
}
