import { useEffect, useState, type RefObject } from 'react';

interface Options {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export function useIntersectionObserver<T extends Element>(
  ref: RefObject<T>,
  { once = true, threshold = 0.12, rootMargin = '0px 0px -40px 0px' }: Options = {},
): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIntersecting(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, once, threshold, rootMargin]);

  return isIntersecting;
}
