export type SocialNetwork = 'facebook' | 'twitter' | 'instagram' | 'linkedin';

export interface SocialLink {
  network: SocialNetwork;
  href: string;
}

export interface NavLinkItem {
  label: string;
  to: string;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface WithClassName {
  className?: string;
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export type FormErrors<T> = Partial<Record<keyof T, string>>;
