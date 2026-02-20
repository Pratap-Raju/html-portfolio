import { useMemo, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { SectionHeading } from './SectionHeading';
import { projectCategories, projects, type ProjectCategory } from '../data/portfolioData';

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;

    return projects.filter((project) => project.tags.includes(activeCategory));
  }, [activeCategory]);

  return (
    <section id="projects" className="section-snap mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects built for scale, speed, and measurable growth."
        description="A curated mix of frontend, AI, and backend products with strong engineering outcomes and polished UX execution."
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeCategory === category
                ? 'bg-brand-500 text-white'
                : 'border border-slate-300 bg-white text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <Card key={project.name}>
            <h3 className="text-xl font-semibold">{project.name}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium dark:bg-slate-800">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 text-sm font-medium">
              <a className="inline-flex items-center gap-1 text-brand-500 hover:underline" href={project.github}>
                <Github size={15} /> GitHub
              </a>
              <a className="inline-flex items-center gap-1 text-brand-500 hover:underline" href={project.live}>
                <ExternalLink size={15} /> Live Demo
              </a>
            </div>
          </Card>
        ))}
      </motion.div>
    </section>
  );
}
