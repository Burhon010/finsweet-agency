import type { Author } from '@/shared/types/common';

export type ArticleBlock =
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] };

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: Author;
  authorId?: string;
  content: ArticleBlock[];
}
