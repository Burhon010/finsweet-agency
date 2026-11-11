import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  as?: ElementType;
  size?: 'default' | 'narrow' | 'text';
  className?: string;
}

export function Container({ children, as: Tag = 'div', size = 'default', className = '' }: ContainerProps) {
  return <Tag className={[styles.container, styles[size], className].join(' ')}>{children}</Tag>;
}
