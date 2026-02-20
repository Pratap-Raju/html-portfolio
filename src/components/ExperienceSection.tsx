import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { experience } from '../data/portfolioData';

export function ExperienceSection() {
  return (
    <section id="experience" className="section-snap mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Leadership and impact across product-focused engineering teams."
        description="A timeline of ownership, technical depth, and shipped outcomes that align engineering work with business priorities."
      />

      <ol className="relative border-l border-slate-300 pl-6 dark:border-slate-700">
        {experience.map((item, index) => (
          <motion.li
            key={item.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="relative mb-8"
          >
            <span className="absolute -left-[9px] mt-2 h-4 w-4 rounded-full border-4 border-white bg-brand-500 dark:border-slate-950" />
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-glow dark:border-slate-800 dark:bg-slate-900">
              <p className="text-sm text-brand-500">{item.date}</p>
              <h3 className="mt-1 text-lg font-semibold">{item.role}</h3>
              <p className="text-sm text-slate-500">{item.company}</p>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
