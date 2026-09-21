"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AboutContentAnimationProps {
  children: ReactNode;
  className?: string;
}

const AboutContentAnimation = ({ children, className = '' }: AboutContentAnimationProps) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.3 // Aparece depois da imagem
      }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AboutContentAnimation;
