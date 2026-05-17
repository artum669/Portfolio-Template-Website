import { m as motion } from 'framer-motion';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { useState } from 'react';
import portfolio from '@/data/portfolio';
import { iconMap } from '@/data/icons';
import GlassCard from '@/components/ui/GlassCard';
import SectionHeading from '@/components/ui/SectionHeading';
import DiscordCard from '@/components/ui/DiscordCard';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hi ${portfolio.profile.name} — ${form.name || 'New message'}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || 'Anonymous'}${form.email ? ` <${form.email}>` : ''}`,
    );
    window.location.href = `mailto:${portfolio.profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title={<span className="gradient-text-soft">Let&apos;s build something.</span>}
          subtitle="Open to product engineering roles, design-led contracts, and the occasional weird collab."
        />

        <div className="mb-10 pt-16 md:mb-12">
          <DiscordCard />
        </div>

        <div className="grid gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55 }}
            className="md:col-span-2"
          >
            <GlassCard className="flex h-full flex-col justify-between p-7">
              <div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/30 to-blue-500/20 ring-1 ring-violet-400/25">
                  <Mail className="h-4 w-4 text-violet-200" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Reach me directly</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">
                  Quickest path is email — I read every message and reply within 48 hours.
                </p>
                <a
                  href={`mailto:${portfolio.profile.email}`}
                  className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-violet-200 transition hover:text-white"
                >
                  {portfolio.profile.email}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-8 border-t border-violet-400/15 pt-6">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                  Elsewhere
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {portfolio.social
                    .filter((s) => s.icon !== 'mail')
                    .map((s) => {
                      const Icon = iconMap[s.icon];
                      return (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-white/[0.03] px-3 py-1.5 text-xs text-fog transition hover:border-violet-400/70 hover:bg-violet-500/10"
                        >
                          <Icon className="h-3.5 w-3.5" />
                          {s.label}
                        </a>
                      );
                    })}
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="md:col-span-3"
          >
            <GlassCard className="p-7">
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                      Name
                    </span>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-violet-400/15 bg-white/[0.02] px-4 py-3 text-sm text-fog placeholder:text-mute/60 transition focus:border-violet-400/60 focus:bg-violet-500/5 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                      Email
                    </span>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-violet-400/15 bg-white/[0.02] px-4 py-3 text-sm text-fog placeholder:text-mute/60 transition focus:border-violet-400/60 focus:bg-violet-500/5 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                    Message
                  </span>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the project — even a few sentences helps."
                    rows={6}
                    className="w-full resize-none rounded-xl border border-violet-400/15 bg-white/[0.02] px-4 py-3 text-sm text-fog placeholder:text-mute/60 transition focus:border-violet-400/60 focus:bg-violet-500/5 focus:outline-none focus:ring-2 focus:ring-violet-400/30"
                  />
                </label>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.45)] transition hover:shadow-[0_12px_40px_rgba(124,58,237,0.65)]"
                >
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
