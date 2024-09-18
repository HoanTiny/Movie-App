export type Tab = {
  id: string;
  name: string;
  url: string;
};

type TABS = Tab[];

export const TRENDING_TABS: TABS = [
  {
    id: 'all',
    name: 'All',
    url: '/trending/all/day',
  },
  {
    id: 'movie',
    name: 'Movie',
    url: '/trending/movie/day',
  },
  {
    id: 'tv',
    name: 'TV Show',
    url: '/trending/tv/day',
  },
];

export const TOP_RATE_TABS: TABS = [
  {
    id: 'movie',
    name: 'Movie',
    url: '/movie/top_rated',
  },
  {
    id: 'tv',
    name: 'TV Show',
    url: '/tv/top_rated',
  },
];
