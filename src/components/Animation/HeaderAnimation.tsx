"use client"

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeaderAnimationProps {
  children: ReactNode;
  className?: string;
}

const HeaderAnimation = ({ children, className = '' }: HeaderAnimationProps) => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.1 // Delay menor que o Hero para aparecer primeiro
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HeaderAnimation;