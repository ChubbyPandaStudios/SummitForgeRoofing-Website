import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

export default function SectionWrapper({
  children,
  id,
  className = '',
  containerClassName = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className={`container-max ${containerClassName}`}>{children}</div>
    </section>
  );
}
