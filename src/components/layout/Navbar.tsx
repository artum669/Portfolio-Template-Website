import { m as motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import portfolio from '@/data/portfolio';
import { useActiveSection } from '@/hooks/useActiveSection';
import MobileMenu from './MobileMenu';

const sectionIds = portfolio.navLinks
  .filter((l) => l.href.startsWith('#'))
  .map((l) => l.href.slice(1));

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 24);
  });

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const id = href.slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        className="fixed inset-x-0 top-0 z-40 flex justify-center px-3 pt-3 md:px-6 md:pt-5"
        animate={{ paddingTop: scrolled ? 8 : undefined }}
      >
        <motion.div
          animate={{
            scale: scrolled ? 0.96 : 1,
            backgroundColor: scrolled ? 'rgba(10,15,30,0.78)' : 'rgba(17,26,50,0.5)',
          }}
          transition={{ type: 'spring', stiffness: 280, damping: 30 }}
          className="glass-panel mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 md:px-6"
        >
          <a
            href="#hero"
            onClick={(e) => handleClick(e, '#hero')}
            className="group flex items-center gap-2"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-violet-500 via-violet-600 to-blue-500 text-sm font-black text-white shadow-[0_4px_18px_rgba(124,58,237,0.55)]">
              <span aria-hidden className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent bg-[length:200%_100%]" />
              <span className="relative">A</span>
            </span>
            <span className="hidden text-sm font-bold tracking-tight text-white sm:inline">
              {portfolio.profile.name.split(' ')[0]}
              <span className="text-violet-400">.</span>
              <span className="text-mute">dev</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {portfolio.navLinks.map((link) => {
              const isActive =
                link.href.startsWith('#') && active === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="group relative rounded-xl px-3 py-1.5 text-sm font-medium text-mute transition-colors hover:text-white"
                >
                  <span className="relative z-10 transition-transform duration-300 group-hover:scale-[1.06]">
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                      className="absolute inset-0 -z-0 rounded-xl bg-violet-500/15 ring-1 ring-violet-400/30 shadow-[0_0_20px_-4px_rgba(124,58,237,0.55)]"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="hidden items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-4 py-1.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(124,58,237,0.45)] transition hover:shadow-[0_6px_24px_rgba(124,58,237,0.7)] md:inline-flex"
            >
              Let&apos;s talk
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/25 bg-white/[0.04] text-fog transition hover:border-violet-400/70 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
