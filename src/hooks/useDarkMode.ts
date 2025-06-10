// src/hooks/useDarkMode.ts
import { useEffect, useState } from 'react';

export const useDarkMode = (): [boolean, () => void] => {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) return stored === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [enabled]);

  const toggle = () => setEnabled(!enabled);

  return [enabled, toggle];
};
