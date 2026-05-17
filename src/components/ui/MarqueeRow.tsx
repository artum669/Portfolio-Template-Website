import type { ReactNode } from 'react';

interface MarqueeRowProps {
  children: ReactNode;
  reverse?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}

export default function MarqueeRow({ children, reverse = false, speed = 'normal' }: MarqueeRowProps) {
  const speedClass =
    speed === 'slow'
      ? '[animation-duration:48s]'
      : speed === 'fast'
      ? '[animation-duration:22s]'
      : '';
  const animClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div className="mask-fade-x relative overflow-hidden">
      <div
        className={`${animClass} ${speedClass} flex w-max gap-4 will-change-transform hover:[animation-play-state:paused]`}
      >
        <div className="flex shrink-0 gap-4">{children}</div>
        <div className="flex shrink-0 gap-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
