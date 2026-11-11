import { Icon } from '@/shared/ui';
import type { SocialLink } from '@/shared/types/common';
import styles from './SocialLinks.module.css';

interface SocialLinksProps {
  links: SocialLink[];
  light?: boolean;
  size?: number;
  className?: string;
}

const LABELS = { facebook: 'Facebook', twitter: 'Twitter', instagram: 'Instagram', linkedin: 'LinkedIn' } as const;

export function SocialLinks({ links, light = false, size = 16, className = '' }: SocialLinksProps) {
  return (
    <ul className={[styles.list, light ? styles.light : '', className].join(' ')}>
      {links.map((link) => (
        <li key={link.network}>
          <a href={link.href} target="_blank" rel="noreferrer" className={styles.link} aria-label={LABELS[link.network]}>
            <Icon name={link.network} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
