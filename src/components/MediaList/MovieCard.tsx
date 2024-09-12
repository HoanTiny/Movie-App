import { MediaListType } from '.';
import CircularProgressBar from './CircularProgressBar';

type MovieCard = {
  media: MediaListType;
};

// type movieObject = {
//   poster_path: string;
//   title: string;
//   release_date: string;
//   name: string;
//   first_air_date: string;
// };

function MovieCard({ media }: MovieCard) {
  const {
    poster_path,
    title,
    release_date,
    first_air_date,
    name,
    vote_average,
    media_type,
  } = media;
  return (
    <div className="rounded-lg border border-slate-800 relative shadow-md">
      {media_type === 'tv' && (
        <p className="absolute top-1 right-1 rounded text-[0.8vw] bg-red-00 p-1">
          TV Show
        </p>
      )}
      <img
        className="rounded-t-lg"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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
  );
}

export default MovieCard;
