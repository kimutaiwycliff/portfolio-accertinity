'use client';
import { motion, Variants } from 'framer-motion';
import React, { ReactNode } from 'react';

type AnimationType = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleUp';

interface AnimateInViewProps {
  children: ReactNode;
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AnimateInView: React.FC<AnimateInViewProps> = ({
  children,
  animation = 'fadeIn',
  duration = 1.0,
  delay = 0,
  threshold = 0.1,
  once = true,
  className = '',
  style,
  ...props
}) => {
  const animations: Record<AnimationType, Variants> = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      transition={{ duration, delay }}
      variants={animations[animation]}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimateInView;
