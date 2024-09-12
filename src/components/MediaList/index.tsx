import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import { Tab } from '../../libs/contants';
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
  const [mediaList, setMediaList] = useState<MediaListType[]>([]);
  const [activeTabId, setActiveTabId] = useState<string>(tabs[0]?.id);
  useEffect(() => {
    const url = tabs.find((tab) => tab.id === activeTabId)?.url;
    console.log(url, 12122);

    if (url) {
      axios
        .get(url, {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGVkMjgzNTFiMjZlZGNiMGExMzg2MzM2YjI5MDBhZiIsIm5iZiI6MTcyNjAyMTU0Mi4xNjYzNTgsInN1YiI6IjY2ZGZiYzIyYTZjMmM4ODA0MTBkOTc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zMedxNZkzdZeheGmk4xb9V68jz74dACpe4wBSVSg6dE',
          },
        })
        .then((response) => {
          console.log(response);
          setMediaList(response.data.results.slice(0, 12));
        })
        .catch((err) => {
          console.log(`err`, err);
        });
    }
  }, [activeTabId, tabs]);
  // console.log(`mediaList`, mediaList);

  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p>{title}</p>
        <ul className="flex gap-3 border border-white rounded items-center ">
          {tabs.map((item) => (
            <li
              key={item.id}
              className={`px-2 py-1 rounded cursor-pointer ${
                item.id === activeTabId ? 'active bg-white text-black' : ''
              }`}
              onClick={() => setActiveTabId(item.id)}
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
