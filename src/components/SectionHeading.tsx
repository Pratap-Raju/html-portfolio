import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
}
