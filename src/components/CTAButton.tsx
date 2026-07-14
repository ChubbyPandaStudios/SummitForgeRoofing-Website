import { ReactNode } from 'react';

interface CTAButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  external = false,
}: CTAButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-display font-semibold rounded-sm transition-all duration-200 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-wood-300';

  const variants = {
    primary: 'bg-wood-DEFAULT text-white hover:bg-wood-400 hover:shadow-lg',
    secondary:
      'border-2 border-silver-300 text-silver-300 hover:bg-silver-300 hover:text-navy-500',
    ghost:
      'border-2 border-white text-white hover:bg-white hover:text-navy-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
