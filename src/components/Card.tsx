import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`rounded-2xl border border-slate-200/70 bg-white/90 p-6 shadow-glow backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 ${className}`}
    >
      {children}
    </motion.article>
  );
}
