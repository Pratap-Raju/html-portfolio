import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
};

export function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const baseStyles =
    'inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500';
  const variantStyles =
    variant === 'primary'
      ? 'bg-brand-500 text-white hover:bg-brand-600 shadow-glow'
      : 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800';

  const className = `${baseStyles} ${variantStyles}`;

  if (href) {
    return (
      <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href={href} className={className}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className={className}>
      {children}
    </motion.button>
  );
}
