import { Moon, Sun } from 'lucide-react';
import { Button } from './Button';

type HeaderProps = {
  onToggleTheme: () => void;
  isDark: boolean;
};

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ onToggleTheme, isDark }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <a href="#home" className="text-lg font-bold tracking-tight">Alex Carter</a>
        <nav className="hidden gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-slate-600 transition hover:text-brand-500 dark:text-slate-300">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="rounded-xl border border-slate-300 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="hidden md:block">
            <Button href="#contact">Let’s Connect</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
