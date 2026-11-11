import type { ReactNode } from 'react';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  children: ReactNode;
  light?: boolean;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionLabel({ children, light = false, align = 'left', className = '' }: SectionLabelProps) {
  return (
    <p className={[styles.label, light ? styles.light : '', styles[align], className].join(' ')}>{children}</p>
  );
}
