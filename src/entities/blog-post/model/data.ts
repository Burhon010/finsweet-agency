import blog1 from '@/shared/assets/images/blog-1.jpg';
import blog2 from '@/shared/assets/images/blog-2.jpg';
import featured from '@/shared/assets/images/featured.jpg';
import office from '@/shared/assets/images/office.jpg';
import recent1 from '@/shared/assets/images/recent-1.jpg';
import recent2 from '@/shared/assets/images/recent-2.jpg';
import recent3 from '@/shared/assets/images/recent-3.jpg';
import recent4 from '@/shared/assets/images/recent-4.jpg';
import post1 from '@/shared/assets/images/post-1.jpg';
import post2 from '@/shared/assets/images/post-2.jpg';
import post3 from '@/shared/assets/images/post-3.jpg';
import post4 from '@/shared/assets/images/post-4.jpg';
import post5 from '@/shared/assets/images/post-5.jpg';
import post6 from '@/shared/assets/images/post-6.jpg';
import avatar1 from '@/shared/assets/images/avatar-1.jpg';
import avatar2 from '@/shared/assets/images/avatar-2.jpg';
import avatar3 from '@/shared/assets/images/avatar-3.jpg';
import type { ArticleBlock, BlogPost } from './types';

const ANDREW = { name: 'Andrew Jonson', avatar: avatar1 };
const MATHEW = { name: 'Mathew Jasele', avatar: avatar2 };
const HUSSEN = { name: 'Hussen Abakas', avatar: avatar3 };

const LONG_TEXT =
  "Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeto Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice and tone for error messages.";

const SHORT_TEXT =
  'Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeto Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged.';

const EXCERPT = 'It is a long established fact that a reader will be distracted by the readable content of a page.';

const ARTICLE: ArticleBlock[] = [
  { type: 'heading', text: 'Transform Your Idea Into Reality with Ether a Leading Digital Agency', level: 2 },
  { type: 'paragraph', text: LONG_TEXT },
  { type: 'paragraph', text: SHORT_TEXT },
  { type: 'paragraph', text: SHORT_TEXT },
  { type: 'paragraph', text: LONG_TEXT },
  { type: 'heading', text: 'Transform Your Idea Into Reality with Ether a Leading Digital Agency', level: 3 },
  {
    type: 'list',
    items: [
      'Step 1: Download the plugin from Figma community, search Ghost UXWriter',
      'Step 2: Open the plugin on your artboard',
      'Step 3: Search for your copy or look through the different categories of the copies',
      'Step 4: Select the type of error you are looking for. You will get three different copies for each error',
      'Step 5: Tap on the cards to insert text in your frames',
      'And you are all geared up to make your UX copies more fun and exciting 😎',
    ],
  },
  { type: 'heading', text: 'Transform Your Idea Into Reality with Ether a Leading Digital Agency', level: 3 },
  { type: 'paragraph', text: LONG_TEXT },
];

const post = (data: Omit<BlogPost, 'content'> & { content?: ArticleBlock[] }): BlogPost => ({
  content: ARTICLE,
  ...data,
});

export const FEATURED_POST: BlogPost = post({
  id: 'breaking-the-code',
  title: 'Breaking the code How did we build our Figma plugin',
  excerpt:
    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the.',
  image: featured,
  date: '2021-01-27',
  author: ANDREW,
});

export const TRENDING_POSTS: BlogPost[] = [
  { id: 'design-expectations-1', author: ANDREW },
  { id: 'design-expectations-2', author: MATHEW },
  { id: 'design-expectations-3', author: HUSSEN },
].map(({ id, author }) =>
  post({
    id,
    title: 'Great design expectations prejudice in digital products in Next Year',
    excerpt: EXCERPT,
    image: office,
    date: '2021-01-19',
    author,
  }),
);

export const LATEST_POSTS: BlogPost[] = [
  post({
    id: 'design-trends',
    title: 'Today’s best design trends for digital products',
    excerpt: EXCERPT,
    image: blog1,
    date: '2021-01-19',
    author: ANDREW,
    authorId: 'javena-melo',
  }),
  post({
    id: 'brand-strategy',
    title: 'A practical guide to building a brand strategy',
    excerpt: EXCERPT,
    image: blog2,
    date: '2021-01-19',
    author: ANDREW,
    authorId: 'javena-melo',
  }),
];

export const RECENT_POSTS: BlogPost[] = [recent1, recent2, recent3, recent4].map((image, index) =>
  post({
    id: `recent-${index + 1}`,
    title: 'Today’s best design trends for digital products',
    excerpt: EXCERPT,
    image,
    date: '2021-01-19',
    author: ANDREW,
  }),
);

const ALL_TITLES = [
  'We aim to attain the greatest satisfaction for our clients',
  'We aim to attain the greatest satisfaction for our clients',
  'We aim to attain the greatest satisfaction for our clients',
  'We aim to attain the greatest satisfaction for our clients',
  'We aim to attain the greatest satisfaction for our clients',
  'We aim to attain the greatest satisfaction for our clients',
  'How small teams ship big products with clear process',
  'A designer’s guide to writing better interface copy',
  'Why we moved our marketing site to Webflow',
  'Scaling a design system across five product teams',
  'What we learned from 100 client discovery calls',
  'Building accessible components from day one',
];

const ALL_IMAGES = [post1, post2, post3, post4, post5, post6, post4, post6, post2, post3, post1, post5];
const ALL_AUTHORS = [ANDREW, ANDREW, ANDREW, ANDREW, ANDREW, ANDREW, MATHEW, HUSSEN, ANDREW, MATHEW, HUSSEN, ANDREW];

export const ALL_POSTS: BlogPost[] = ALL_TITLES.map((title, index) =>
  post({
    id: `post-${index + 1}`,
    title,
    excerpt: EXCERPT,
    image: ALL_IMAGES[index],
    date: index < 6 ? '2021-01-19' : '2021-01-12',
    author: ALL_AUTHORS[index],
  }),
);

const EVERY_POST = [FEATURED_POST, ...TRENDING_POSTS, ...LATEST_POSTS, ...RECENT_POSTS, ...ALL_POSTS];

export const getPostById = (id: string) => EVERY_POST.find((item) => item.id === id);

export const getPostsByAuthor = (authorId: string) =>
  EVERY_POST.filter((item) => item.authorId === authorId);
