import { AnimatePresence, m as motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect } from 'react';
import portfolio from '@/data/portfolio';
import { iconMap } from '@/data/icons';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const linkVariants = {
  closed: { opacity: 0, y: 24 },
  open: { opacity: 1, y: 0 },
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const handleNav = (href: string) => {
    onClose();
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      const id = href.startsWith('#') ? href.slice(1) : href;
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex flex-col bg-ink-950/85 backdrop-blur-2xl md:hidden"
        >
          <div className="flex items-center justify-between p-6">
            <span className="font-mono text-sm uppercase tracking-[0.3em] text-violet-300">menu</span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/30 bg-white/[0.04] text-fog transition hover:border-violet-400/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <motion.nav
            variants={{ open: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } } }}
            initial="closed"
            animate="open"
            className="flex flex-1 flex-col justify-center gap-2 px-8"
          >
            {portfolio.navLinks.map((link, idx) => (
              <motion.button
                key={link.name}
                variants={linkVariants}
                onClick={() => handleNav(link.href)}
                className="group relative flex items-baseline gap-4 py-3 text-left text-4xl font-bold text-white"
              >
                <span className="font-mono text-xs text-violet-400">{String(idx + 1).padStart(2, '0')}</span>
                <span className="gradient-text-soft transition-transform group-hover:translate-x-2">
                  {link.name}
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </motion.button>
            ))}
          </motion.nav>

          <motion.div
            variants={linkVariants}
            initial="closed"
            animate="open"
            transition={{ delay: 0.4 }}
            className="flex items-center justify-between border-t border-violet-400/15 p-6 text-sm text-mute"
          >
            <span className="font-mono uppercase tracking-[0.2em]">connect</span>
            <div className="flex items-center gap-3">
              {portfolio.social.map((s) => {
                const Icon = iconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/25 bg-white/[0.03] text-fog transition hover:border-violet-400/70 hover:text-violet-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
