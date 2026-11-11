import type { ReactNode } from 'react';
import { Avatar, Icon } from '@/shared/ui';
import type { Testimonial } from '../model/types';
import styles from './TestimonialCard.module.css';

interface TestimonialCardProps {
  testimonial: Testimonial;
  logo?: ReactNode;
}

export function TestimonialCard({ testimonial, logo }: TestimonialCardProps) {
  return (
    <figure className={styles.card}>
      <Icon name="quote" width={43} height={30} className={styles.quote} />
      <blockquote className={styles.text}>{testimonial.text}</blockquote>
      <figcaption className={styles.footer}>
        <div className={styles.person}>
          <Avatar src={testimonial.avatar} alt={testimonial.name} size={46} />
          <div>
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.role}>{testimonial.role}</p>
          </div>
        </div>
        {logo && <div className={styles.logo}>{logo}</div>}
      </figcaption>
    </figure>
  );
}
