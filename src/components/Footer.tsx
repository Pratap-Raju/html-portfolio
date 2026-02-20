import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-slate-500 md:flex-row md:px-6">
        <p>© {new Date().getFullYear()} Alex Carter. Built with React + TypeScript.</p>
        <div className="flex gap-4">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-brand-500">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-brand-500">
            <Linkedin size={18} />
          </a>
          <a href="https://x.com" aria-label="Twitter" className="hover:text-brand-500">
            <Twitter size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
