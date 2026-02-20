import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" className="section-snap mx-auto max-w-6xl px-4 py-20 md:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build your next category-defining product."
        description="Open to senior IC and staff-level frontend roles, consulting partnerships, and product-focused collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-glow dark:border-slate-800 dark:bg-slate-900">
          <label className="block text-sm font-medium">
            Name
            <input
              type="text"
              name="name"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 focus:border-brand-500 focus:outline-none dark:border-slate-700"
              placeholder="Your name"
            />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input
              type="email"
              name="email"
              className="mt-1 w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 focus:border-brand-500 focus:outline-none dark:border-slate-700"
              placeholder="you@company.com"
            />
          </label>
          <label className="block text-sm font-medium">
            Message
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 focus:border-brand-500 focus:outline-none dark:border-slate-700"
              placeholder="Tell me about your project or role"
            />
          </label>
          <Button>Send Message</Button>
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-glow dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-xl font-semibold">Direct Channels</h3>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Prefer async? Reach out directly and I’ll respond within 24 hours.
          </p>
          <div className="mt-6 space-y-3 text-sm">
            <a href="mailto:alex@portfolio.dev" className="flex items-center gap-3 hover:text-brand-500">
              <Mail size={16} /> alex@portfolio.dev
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-3 hover:text-brand-500">
              <Linkedin size={16} /> linkedin.com/in/alexcarter
            </a>
            <a href="https://github.com" className="flex items-center gap-3 hover:text-brand-500">
              <Github size={16} /> github.com/alexcarter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
