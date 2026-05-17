import portfolio from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-violet-400/10 bg-ink-950/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-mute md:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          available for select projects
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span>© {new Date().getFullYear()} {portfolio.profile.name}.</span>
          <span aria-hidden>·</span>
          <span>composed with ❤️ by artum669.</span>
        </div>
      </div>
    </footer>
  );
}
