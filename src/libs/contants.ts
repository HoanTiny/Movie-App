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
    url: 'https://api.themoviedb.org/3/trending/all/day',
  },
  {
    id: 'movie',
    name: 'Movie',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
  },
  {
    id: 'tv',
    name: 'TV Show',
    url: 'https://api.themoviedb.org/3/trending/tv/day',
  },
];

export const TOP_RATE_TABS: TABS = [
  {
    id: 'movie',
    name: 'Movie',
    url: 'https://api.themoviedb.org/3/movie/top_rated',
  },
  {
    id: 'tv',
    name: 'TV Show',
    url: 'https://api.themoviedb.org/3/tv/top_rated',
  },
];
