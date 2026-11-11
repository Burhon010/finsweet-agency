import type { ReactNode } from 'react';
import styles from './SectionTitle.module.css';

type Level = 'h1' | 'h2' | 'h3' | 'h4';
type Size = 'xl' | 'lg' | 'md' | 'sm';

const SIZE_BY_LEVEL: Record<Level, Size> = { h1: 'xl', h2: 'lg', h3: 'md', h4: 'sm' };

interface SectionTitleProps {
  children: ReactNode;
  as?: Level;
  size?: Size;
  light?: boolean;
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

export function SectionTitle({
  children,
  as: Tag = 'h2',
  size,
  light = false,
  align = 'left',
  className = '',
  id,
}: SectionTitleProps) {
  const resolvedSize = size ?? SIZE_BY_LEVEL[Tag];
  return (
    <Tag id={id} className={[styles.title, styles[resolvedSize], styles[align], light ? styles.light : '', className].join(' ')}>
      {children}
    </Tag>
  );
}
