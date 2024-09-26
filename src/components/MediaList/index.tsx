import { useFetch } from '@hooks/useFetch';
import { useState } from 'react';
import { Tab } from '../../libs/contants';
import MovieCard from './MovieCard';
export type MediaListType = {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
  name: string;
  first_air_date: string;
  vote_average: number;
  media_type: string;
};

type MediaListProps = {
  title: string;
  tabs: Array<Tab>;
};

function MediaList({ title, tabs }: MediaListProps) {
  // const [mediaList, setMediaList] = useState<MediaListType[]>([]);
  console.log(tabs);

  const [activeTabId, setActiveTabId] = useState<string>(
    // sessionStorage.getItem('activeTabId') || tabs[0]?.id
    tabs.find((tab) => tab.active)?.id || tabs[0]?.id
  );
  const urlMediaList = tabs.find((tab) => tab.id === activeTabId)?.url;
  const tabActive = tabs.find((tab) => tab.id === activeTabId && tab.active);
  console.log(`tabActive`, tabActive);

  type FetchDataType = {
    results: MediaListType[];
  };

  const { data } = useFetch<FetchDataType>({ url: `${urlMediaList}` });
  const mediaList = data?.results ? data.results.slice(0, 12) : [];

  return (
    <div className="px-8 text-[1.2vw] py-10  bg-white text-black dark:text-white dark:bg-black">
      <div className="flex items-center gap-4 mb-6">
        <p>{title}</p>
        <ul className="flex gap-3 border border-black dark:border-white rounded items-center ">
          {tabs.map((item) => (
            <li
              key={item.id}
              className={`px-2 py-1 rounded cursor-pointer ${
                item.id === activeTabId
                  ? 'active bg-black text-white dark:text-black dark:bg-white'
                  : ''
              }`}
              onClick={() => {
                setActiveTabId(item.id);
                sessionStorage.setItem('activeTabId', item.id);
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
        {mediaList.map((media) => (
          <MovieCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
}

export default MediaList;
