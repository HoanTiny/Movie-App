import { Link } from 'react-router-dom';
import { MediaListType } from '.';
import CircularProgressBar from './CircularProgressBar';
import ImageComp from '@components/Image';

type MovieCard = {
  media: MediaListType;
};

function MovieCard({ media }: MovieCard) {
  const {
    poster_path,
    title,
    release_date,
    first_air_date,
    name,
    vote_average,
    media_type,
    id,
  } = media;
  return (
    <Link
      to={media_type === 'tv' ? `/tv/${id}` : `/movie/${id}`}
      className="rounded-lg border border-slate-800"
    >
      <div className=" relative shadow-md cursor-pointer">
        {media_type === 'tv' && (
          <p className="absolute top-1 right-1 rounded text-[0.8vw] bg-red-600 p-1">
            TV Show
          </p>
        )}

        <ImageComp
          className="rounded-t-lg w-full"
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          width={200}
          height={300}
        />
        <div className="px-4  relative -top-[1.5vw]">
          <CircularProgressBar
            percent={Math.round(vote_average * 10)}
            size={3}
            strokeWidth={0.25}
            strokeColor={
              vote_average >= 7 ? 'green' : vote_average >= 5 ? 'orange' : 'red'
            }
          />
          <p className="mt-2 font-bold">{title || name}</p>
          <p className="text-slate-300">{release_date || first_air_date}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
