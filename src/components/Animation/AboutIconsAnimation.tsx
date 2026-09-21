"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AboutIconsAnimationProps {
  children: ReactNode;
  className?: string;
  index?: number;
}

const AboutIconsAnimation = ({ children, className = '', index = 0 }: AboutIconsAnimationProps) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.6 + (index * 0.1) // Aparece por último, com stagger entre ícones
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AboutIconsAnimation;