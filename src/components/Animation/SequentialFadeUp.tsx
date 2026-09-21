'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface SequentialFadeUpProps {
  children: React.ReactNode[];
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function SequentialFadeUp({
  children,
  staggerDelay = 0.2,
  duration = 0.5,
  once = true,
  className,
}: SequentialFadeUpProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) && children.map((child, index) => (
        <motion.div
          key={index}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: (i) => ({
              opacity: 1,
              y: 0,
              transition: {
                delay: i * staggerDelay,
                duration,
                ease: "easeOut"
              }
            })
          }}
          custom={index}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}