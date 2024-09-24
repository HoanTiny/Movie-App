export type Tab = {
  id: string;
  name: string;
  url: string;
  active?: boolean;
};

type Gender = {
  [key: number]: string; // Use number index type
};
type TABS = Tab[];

export const TRENDING_TABS: TABS = [
  {
    id: 'all',
    name: 'All',
    url: '/trending/all/day',
    active: sessionStorage.getItem('activeTabId') === 'all',
  },
  {
    id: 'movie',
    name: 'Movie',
    url: '/trending/movie/day',
    active: sessionStorage.getItem('activeTabId') === 'movie',
  },
  {
    id: 'tv',
    name: 'TV Show',
    url: '/trending/tv/day',
    active: sessionStorage.getItem('activeTabId') === 'tv',
  },
];

export const TOP_RATE_TABS: TABS = [
  {
    id: 'movie',
    name: 'Movie',
    url: '/movie/top_rated',
    active: sessionStorage.getItem('activeTabId') === 'movie',
  },
  {
    id: 'tv',
    name: 'TV Show',
    url: '/tv/top_rated',
    active: sessionStorage.getItem('activeTabId') === 'tv',
  },
];

export const GENDER_MAPPING: Gender = {
  0: 'Not set / not specified',
  1: 'Female',
  2: 'Male',
  3: 'Non-binary',
};
