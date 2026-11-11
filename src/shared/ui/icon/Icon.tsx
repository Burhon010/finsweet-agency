import type { ReactElement, SVGProps } from 'react';

export type IconName =
  | 'arrow-right'
  | 'arrow-left'
  | 'facebook'
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'close'
  | 'check'
  | 'menu'
  | 'quote'
  | 'upload'
  | 'headset'
  | 'atom'
  | 'code'
  | 'rocket'
  | 'support';

const ORANGE = '#FFA155';
const BLUE = '#666DFF';

const icons: Record<IconName, { viewBox: string; body: ReactElement }> = {
  'arrow-right': {
    viewBox: '0 0 24 12',
    body: (
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M1 6h21" />
        <path d="M17 1.5 22 6l-5 4.5" />
      </g>
    ),
  },
  'arrow-left': {
    viewBox: '0 0 24 12',
    body: (
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M23 6H2" />
        <path d="M7 1.5 2 6l5 4.5" />
      </g>
    ),
  },
  facebook: {
    viewBox: '0 0 24 24',
    body: (
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12c0-5.52-4.48-10-10-10Z"
      />
    ),
  },
  twitter: {
    viewBox: '0 0 24 24',
    body: (
      <path
        fill="currentColor"
        d="M22 5.92a8.2 8.2 0 0 1-2.36.65 4.12 4.12 0 0 0 1.8-2.27 8.22 8.22 0 0 1-2.6 1 4.1 4.1 0 0 0-6.99 3.74A11.65 11.65 0 0 1 3.4 4.75a4.1 4.1 0 0 0 1.27 5.48 4.07 4.07 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.29 4.02 4.1 4.1 0 0 1-1.85.07 4.11 4.11 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.41a11.6 11.6 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67l-.01-.53A8.3 8.3 0 0 0 22 5.92Z"
      />
    ),
  },
  instagram: {
    viewBox: '0 0 24 24',
    body: (
      <g fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </g>
    ),
  },
  linkedin: {
    viewBox: '0 0 24 24',
    body: (
      <path
        fill="currentColor"
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18.34V10H5.67v8.34h2.67ZM7 8.86a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1Zm11.34 9.48v-4.57c0-2.46-.53-4.36-3.4-4.36-1.38 0-2.3.76-2.68 1.48h-.04V10H9.66v8.34h2.67v-4.13c0-1.09.2-2.14 1.55-2.14 1.33 0 1.35 1.24 1.35 2.21v4.06h2.67Z"
      />
    ),
  },
  close: {
    viewBox: '0 0 24 24',
    body: (
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 6l12 12M18 6 6 18" />
      </g>
    ),
  },
  check: {
    viewBox: '0 0 24 24',
    body: (
      <path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  menu: {
    viewBox: '0 0 24 24',
    body: (
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 6h18M3 12h18M9 18h12" />
      </g>
    ),
  },
  quote: {
    viewBox: '0 0 43 30',
    body: (
      <g fill="currentColor">
        <path d="M14.2 0h8.6L11.4 30H2.8L14.2 0Z" />
        <path d="M34.4 0H43L31.6 30H23L34.4 0Z" />
      </g>
    ),
  },
  upload: {
    viewBox: '0 0 24 24',
    body: (
      <g fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15V4M7.5 8.5 12 4l4.5 4.5" />
        <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
      </g>
    ),
  },
  headset: {
    viewBox: '0 0 24 24',
    body: (
      <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path stroke={ORANGE} d="M4.5 14v-2.5a7.5 7.5 0 0 1 15 0V14" />
        <rect stroke={ORANGE} x="3.5" y="13" width="4" height="6" rx="1.5" />
        <rect stroke={ORANGE} x="16.5" y="13" width="4" height="6" rx="1.5" />
        <path stroke={BLUE} d="M18.5 19v.5a2 2 0 0 1-2 2H13" />
        <path stroke={BLUE} d="M9.5 6.5h5" />
      </g>
    ),
  },
  atom: {
    viewBox: '0 0 24 24',
    body: (
      <g fill="none" strokeWidth="1.6">
        <ellipse stroke={ORANGE} cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse stroke={ORANGE} cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse stroke={ORANGE} cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        <circle stroke={BLUE} cx="12" cy="12" r="2.6" />
        <path stroke={BLUE} strokeLinecap="round" d="m10.8 13.2 2.4-2.4" />
      </g>
    ),
  },
  code: {
    viewBox: '0 0 24 24',
    body: (
      <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect stroke={ORANGE} x="3" y="4" width="18" height="16" rx="1.5" />
        <path stroke={ORANGE} d="M3 8h18" />
        <path stroke={BLUE} d="m9.5 11.5-2.5 2.5 2.5 2.5M14.5 11.5l2.5 2.5-2.5 2.5M12.8 11l-1.6 6" />
      </g>
    ),
  },
  rocket: {
    viewBox: '0 0 24 24',
    body: (
      <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path stroke={ORANGE} d="M14.5 4.5c2.3-1.2 4.6-1.4 5.6-1.1.3 1 .1 3.3-1.1 5.6-1.1 2.1-3.4 4.5-6.6 6.4l-3.8-3.8c1.9-3.2 4.3-5.5 5.9-7.1Z" />
        <path stroke={ORANGE} d="M8.6 11.6 5.5 11l2-3h3.6M12.4 15.4l.6 3.1 3-2v-3.6" />
        <circle stroke={BLUE} cx="15.5" cy="8.5" r="1.6" />
        <path stroke={ORANGE} d="M6.5 15.5 3.5 18.5M8.5 17.5l-2 2M5.5 13.5l-2 2" />
      </g>
    ),
  },
  support: {
    viewBox: '0 0 24 24',
    body: (
      <g fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle stroke={ORANGE} cx="12" cy="8" r="4" />
        <path stroke={ORANGE} d="M7.5 7.5a4.5 4.5 0 0 1 9 0" />
        <path stroke={BLUE} d="M4.5 20.5c.8-3.4 3.9-5.5 7.5-5.5s6.7 2.1 7.5 5.5" />
        <path stroke={BLUE} d="M4.5 20.5h15" />
      </g>
    ),
  },
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  width?: number;
  height?: number;
  title?: string;
}

export function Icon({ name, size = 24, width, height, title, ...rest }: IconProps) {
  const icon = icons[name];
  return (
    <svg
      viewBox={icon.viewBox}
      width={width ?? size}
      height={height ?? size}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      focusable="false"
      {...rest}
    >
      {title && <title>{title}</title>}
      {icon.body}
    </svg>
  );
}
