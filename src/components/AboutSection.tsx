import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { skills, techStack } from '../data/portfolioData';

export function AboutSection() {
  return (
    <section id="about" className="section-snap mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="About"
        title="Engineering with product intuition and measurable outcomes."
        description="I partner with product, design, and executive stakeholders to transform ambiguous ideas into scalable, elegant software systems."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-glow dark:border-slate-800 dark:bg-slate-900">
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span>{skill.name}</span>
                <span className="text-slate-500">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-glow dark:border-slate-800 dark:bg-slate-900">
          <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-2 text-sm font-medium dark:border-slate-700 dark:bg-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
