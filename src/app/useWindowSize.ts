'use client'

import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
  isMobile: boolean;
}

export function useWindowSize(): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
    isMobile: false,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
      });
    }

    // Adiciona evento apenas no cliente
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}