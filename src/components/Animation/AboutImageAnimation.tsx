"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AboutImageAnimationProps {
  children: ReactNode;
  className?: string;
}

const AboutImageAnimation = ({ children, className = '' }: AboutImageAnimationProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AboutImageAnimation;