'use client';

import React from 'react';

type HoverScaleProps = {
  children: React.ReactNode;
  scale?: number;
  className?: string;
};

export default function HoverScale({
  children,
  scale = 1.05,
  className = ''
}: HoverScaleProps) {
  return (
    <div
      className={`transition-transform duration-300 ease-out hover:scale-[${scale}] ${className}`}
    >
      {children}
    </div>
  );
}
