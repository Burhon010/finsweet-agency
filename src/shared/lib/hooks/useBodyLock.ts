import { useEffect } from 'react';

export function useBodyLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    document.body.classList.add('is-locked');
    return () => document.body.classList.remove('is-locked');
  }, [locked]);
}
