import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section id="home" className="section-snap relative overflow-hidden px-4 pb-20 pt-20 md:px-6 md:pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(79,124,255,0.25),transparent_45%)]" />
      <div className="absolute inset-0 -z-20 bg-grid-light bg-[size:28px_28px] dark:bg-grid-dark" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="mb-4 inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-100">
            Senior Software Engineer
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            I design and build digital products that move business metrics, not just pixels.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            I help startups and enterprise teams ship fast, accessible, and performance-tuned experiences that customers love.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects">
              View Projects <ArrowRight size={16} />
            </Button>
            <Button href="#contact" variant="secondary">
              Contact Me
            </Button>
            <Button href="#" variant="secondary">
              Resume <Download size={16} />
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            ['8+', 'Years shipping production software'],
            ['40%', 'Average improvement in feature velocity'],
            ['95+', 'Lighthouse standards on key launches'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-glow dark:border-slate-800 dark:bg-slate-900/80">
              <p className="text-3xl font-bold text-brand-500">{value}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
