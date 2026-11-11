import { useSyncExternalStore } from 'react';

let isOpen = false;
const listeners = new Set<() => void>();

const emit = () => listeners.forEach((listener) => listener());

export const openQuestionModal = () => {
  isOpen = true;
  emit();
};

export const closeQuestionModal = () => {
  isOpen = false;
  emit();
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

export function useQuestionModal() {
  const open = useSyncExternalStore(subscribe, () => isOpen, () => false);
  return { isOpen: open, open: openQuestionModal, close: closeQuestionModal };
}
