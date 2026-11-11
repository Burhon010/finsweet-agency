import { Button, Icon } from '@/shared/ui';
import { ROUTES } from '@/shared/config/navigation';
import type { ServiceHighlight } from '../model/types';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: ServiceHighlight;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.icon}>
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.text}>{service.description}</p>
      <Button to={ROUTES.service(service.id)} variant="link" className={styles.link}>
        Read more
      </Button>
    </article>
  );
}
