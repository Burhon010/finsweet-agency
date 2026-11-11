import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Icon } from '@/shared/ui';
import type { Service } from '@/entities/service';
import styles from './ServicesNavigation.module.css';

interface ServicesNavigationProps {
  services: Service[];
}

export function ServicesNavigation({ services }: ServicesNavigationProps) {
  const { hash } = useLocation();
  const [active, setActive] = useState(hash.slice(1) || services[1]?.slug);

  useEffect(() => {
    if (!hash) return;
    const slug = hash.slice(1);
    setActive(slug);
    const timer = window.setTimeout(() => {
      document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash]);

  const handleClick = (slug: string) => {
    setActive(slug);
    document.getElementById(slug)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${slug}`);
  };

  return (
    <nav aria-label="Our services">
      <ul className={styles.list}>
        {services.map((service) => (
          <li key={service.slug}>
            <a
              href={`#${service.slug}`}
              className={[styles.link, active === service.slug ? styles.active : ''].join(' ')}
              onClick={(event) => {
                event.preventDefault();
                handleClick(service.slug);
              }}
            >
              {service.name}
              <Icon name="arrow-right" width={20} height={12} className={styles.arrow} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
