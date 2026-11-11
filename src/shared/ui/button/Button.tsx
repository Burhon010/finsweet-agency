import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cornerShape from '@/shared/assets/icons/shape-corner.svg';
import { Icon } from '../icon/Icon';
import styles from './Button.module.css';

type Variant = 'primary' | 'secondary' | 'link';

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  withShape?: boolean;
  fullWidth?: boolean;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { to?: undefined; href?: undefined };

type ButtonAsLink = BaseProps & { to: string; href?: undefined; onClick?: () => void };

type ButtonAsAnchor = BaseProps & { href: string; to?: undefined; onClick?: () => void };

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = 'primary',
    withArrow = true,
    withShape = variant === 'primary',
    fullWidth = false,
    className = '',
  } = props;

  const classes = [styles.button, styles[variant], fullWidth ? styles.full : '', className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {withShape && <img className={styles.shape} src={cornerShape} alt="" aria-hidden="true" />}
      <span className={styles.label}>{children}</span>
      {withArrow && <Icon name="arrow-right" width={variant === 'link' ? 24 : 20} height={12} className={styles.arrow} />}
    </>
  );

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes} onClick={props.onClick}>
        {content}
      </Link>
    );
  }

  if (props.href !== undefined) {
    return (
      <a href={props.href} className={classes} onClick={props.onClick} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  const {
    variant: _variant,
    withArrow: _withArrow,
    withShape: _withShape,
    fullWidth: _fullWidth,
    className: _className,
    children: _children,
    to: _to,
    href: _href,
    type = 'button',
    ...rest
  } = props;

  return (
    <button type={type} className={classes} {...rest}>
      {content}
    </button>
  );
}
