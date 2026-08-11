import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  level?: 'h2' | 'h3';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  level = 'h2',
  className = ''
}) => {
  const alignClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const HeadingTag = level;

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignClasses} ${className}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></span>
          {badge}
        </div>
      )}
      <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
