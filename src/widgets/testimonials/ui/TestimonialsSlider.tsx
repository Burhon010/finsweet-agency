import { useCallback, useEffect, useRef, useState } from 'react';
import { TESTIMONIALS, TestimonialCard } from '@/entities/testimonial';
import styles from './TestimonialsSlider.module.css';

const AUTOPLAY_MS = 6000;

const CompanyLogo = (
  <span className={styles.logo}>
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M3 2h8a10 10 0 0 1 0 20H3V2Zm5 4v12h3a6 6 0 0 0 0-12H8Z" />
    </svg>
    logoipsum<sup>®</sup>
  </span>
);

export function TestimonialsSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const count = TESTIMONIALS.length;

  const go = useCallback((index: number) => setActive((index + count) % count), [count]);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => setActive((prev) => (prev + 1) % count), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, count]);

  return (
    <div
      className={styles.slider}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(event) => {
        touchStart.current = event.touches[0].clientX;
      }}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return;
        const delta = event.changedTouches[0].clientX - touchStart.current;
        if (Math.abs(delta) > 40) go(active + (delta < 0 ? 1 : -1));
        touchStart.current = null;
      }}
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
    >
      <div className={styles.frame}>
        <span className={styles.bar} aria-hidden="true" />
        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${active * 100}%)` }}>
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={styles.slide}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                aria-hidden={index !== active}
              >
                <TestimonialCard testimonial={testimonial} logo={CompanyLogo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.dots} role="tablist" aria-label="Choose testimonial">
        {TESTIMONIALS.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            role="tab"
            aria-selected={index === active}
            aria-label={`Show testimonial ${index + 1}`}
            className={[styles.dot, index === active ? styles.dotActive : ''].join(' ')}
            onClick={() => go(index)}
          />
        ))}
      </div>
    </div>
  );
}
