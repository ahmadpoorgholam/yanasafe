"use client";

import { useState } from 'react';
import NextImage from 'next/image';
import { cn } from '@/lib/utils';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function ResponsiveImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
}: ResponsiveImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={cn(
      'overflow-hidden',
      isLoading && 'animate-pulse bg-muted',
      className
    )}>
      <NextImage
        src={error ? '/images/fallback.jpg' : src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        priority={priority}
      />
    </div>
  );
}