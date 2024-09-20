import ImageComp from '@components/Image';
import CircularProgressBar from '@components/MediaList/CircularProgressBar';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons/faCircleChevronDown';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons/faCircleChevronUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

type SeasonListType = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  overview: string;

  season_number: number;
};

function SeasonList({ seasons }: { seasons: SeasonListType[] }) {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentSeason =
    seasons &&
    seasons
      .sort((a, b) => b.season_number - a.season_number)
      .slice(0, isShowMore ? seasons.length : 3);

  return (
    <div className="">
      <h1 className="my-4 font-bold">Last Season</h1>
      {seasons &&
        currentSeason.map((season) => (
          <div
            key={season.id}
            className="flex gap-5  border border-slate-600 rounded-md shadow-xl my-4 "
          >
            <ImageComp
              width={130}
              height={195}
              className="rounded-md w-1/4"
              src={
                season.poster_path &&
                `https://media.themoviedb.org/t/p/w300${season.poster_path}`
              }
            />
            <div className="flex flex-col  py-6">
              <div>
                <p className="font-bold">{season.name}</p>
                <ul className="text-[0.7vw] flex gap-2">
                  <p>{season.air_date}</p>
                  <p>{season.episode_count} Episodes</p>
                </ul>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <p className="text-[1vw]">Rating</p>
                <CircularProgressBar
                  percent={season.vote_average * 10}
                  size={2.5}
                  strokeWidth={0.2}
                  strokeColor="green"
                />
              </div>

              <p className="mt-3">{season.overview}</p>
            </div>
          </div>
        ))}

      {isShowMore ? (
        <p
          className="my-4 cursor-pointer"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          <>
            <FontAwesomeIcon icon={faCircleChevronUp} /> Show Less
          </>
        </p>
      ) : (
        <p
          className="my-4 cursor-pointer"
          onClick={() => setIsShowMore(!isShowMore)}
        >
          <>
            <FontAwesomeIcon icon={faCircleChevronDown} /> Show More
          </>
        </p>
      )}
    </div>
  );
}

export default SeasonList;
