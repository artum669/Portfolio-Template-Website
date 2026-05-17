interface TechPillProps {
  label: string;
  size?: 'sm' | 'md';
}

export default function TechPill({ label, size = 'sm' }: TechPillProps) {
  const sizing = size === 'sm' ? 'text-[11px] px-2.5 py-1' : 'text-xs px-3 py-1.5';
  return (
    <span
      className={`inline-flex items-center rounded-full border border-violet-400/25 bg-violet-500/10 font-medium text-violet-200/90 backdrop-blur-sm ${sizing}`}
    >
      {label}
    </span>
  );
}
