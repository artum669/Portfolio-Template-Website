import type { HTMLAttributes, ReactNode } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'soft' | 'default' | 'strong';
  glow?: boolean;
}

const variantClass = {
  soft: 'glass-panel-soft',
  default: 'glass-panel',
  strong: 'glass-panel-strong',
};

export default function GlassCard({
  children,
  className = '',
  variant = 'default',
  glow = false,
  ...rest
}: GlassCardProps) {
  return (
    <div
      {...rest}
      className={`relative rounded-3xl ${variantClass[variant]} ${glow ? 'border-glow' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
