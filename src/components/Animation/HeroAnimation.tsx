"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeroAnimationProps {
  children: ReactNode;
  className?: string;
}

const HeroAnimation = ({ children, className = '' }: HeroAnimationProps) => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2 // Pequeno delay para dar tempo da página carregar
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HeroAnimation;