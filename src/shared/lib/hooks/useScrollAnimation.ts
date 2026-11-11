import { useRef } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const isVisible = useIntersectionObserver(ref);
  const className = isVisible ? 'reveal is-visible' : 'reveal';
  return { ref, className, isVisible };
}
