"use client";

import { ReactNode } from 'react';

interface MotionProps {
  initial?: Record<string, unknown>;
  animate?: Record<string, unknown>;
  transition?: Record<string, any>;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}

const MotionComponent = ({
  children,
  className = '',
  initial,
  animate,
  transition,
  ...rest
}: MotionProps) => {
  return (
    <div
      className={`transition-all ${className}`}
      style={{
        transitionDuration: transition?.duration ? `${transition.duration}s` : '0.3s',
        transitionDelay: transition?.delay ? `${transition.delay}s` : '0s',
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export const motion = {
  div: MotionComponent,
  h1: MotionComponent,
  p: MotionComponent,
};