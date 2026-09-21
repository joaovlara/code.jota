'use client';

import { ReactNode } from 'react';
import FadeUpAnimation from './FadeUpAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  childrenDelay?: number;
  staggerChildren?: boolean;
}

export default function AnimatedSection({
  children,
  className = '',
  childrenDelay = 0.1,
  staggerChildren = false
}: AnimatedSectionProps) {
  // Se quisermos escalonar animações para múltiplos filhos
  if (staggerChildren && Array.isArray(children)) {
    return (
      <div className={className}>
        {(children as ReactNode[]).map((child, index) => (
          <FadeUpAnimation key={index} delay={index * childrenDelay}>
            {child}
          </FadeUpAnimation>
        ))}
      </div>
    );
  }

  // Para uma seção inteira animada
  return (
    <FadeUpAnimation className={className}>
      {children}
    </FadeUpAnimation>
  );
}