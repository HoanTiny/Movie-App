import { faBookmark, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgressBar from '../MediaList/CircularProgressBar';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { groupBy } from 'lodash';
import { MovieDetails } from '../../page/MovieDetails';

interface BannerProps {
  movieDetails: MovieDetails;
}

function Banner({ movieDetails }: BannerProps) {
  console.log(`movieDetails`, movieDetails);
  const certification = (
    (movieDetails.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === 'US'
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movieDetails.credits?.crew || [])
    .filter((crew) => ['Director', 'Screenplay', 'Writer'].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  console.log(`crew`, crews);

  const group = groupBy(crews, 'job');
  console.log({ crews, group });
  return (
    <div className="relative text-white overflow-hidden">
      <img
        className="absolute inset-0 brightness-[0.2]"
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 md:py-10 xs:py-4 lg:gap-8 items-center">
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
            alt=""
          />
        </div>

        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">
            {movieDetails.original_title}
          </p>
          <div className="flex gap-4 mt-4 items-center">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{movieDetails.release_date}</p>
            <p>
              {(movieDetails.genres || []).map((genre) => genre.name).join(',')}
            </p>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2">
              <CircularProgressBar
                percent={Math.round(movieDetails.vote_average || 0) * 10}
                size={3.5}
                strokeWidth={0.3}
                strokeColor={
                  (movieDetails.vote_average ?? 0) >= 7
                    ? 'green'
                    : (movieDetails.vote_average ?? 0) >= 5
                    ? 'orange'
                    : 'red'
                }
              />
              <p className="text-wrap w-14 text-[0.9vw]">User Score</p>
              <p>😀</p>
            </div>
            <div className="mt-4 flex gap-4">
              <div className=" border border-white rounded-full w-[3vw] h-[3vw] bg- flex items-center justify-center">
                <FontAwesomeIcon icon={faList} />
              </div>

              <div className=" border border-white rounded-full w-[3vw] h-[3vw] bg- flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>

              <div className=" border border-white rounded-full w-[3vw] h-[3vw] bg- flex items-center justify-center">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <button>
                <div>
                  <FontAwesomeIcon icon={faPlay} className="mr-1" />
                  Trailer
                </div>
              </button>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
              <p>{movieDetails.overview}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              {Object.keys(group).map((job) => (
                <div key={job}>
                  <p>{job}</p>
                  <p>{group[job].map((crew) => crew.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
