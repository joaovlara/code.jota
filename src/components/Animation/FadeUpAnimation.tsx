"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeUpAnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const FadeUpAnimation = ({ 
  children, 
  delay = 0, 
  className = '' 
}: FadeUpAnimationProps) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeUpAnimation;