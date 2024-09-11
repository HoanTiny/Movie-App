import { MovieType } from './index';

interface Movie {
  movies: Array<MovieType>;
  activeMovieId: number;
  setActiveMovieId: (id: number) => void;
}

function PaginateIndicator({ movies, activeMovieId, setActiveMovieId }: Movie) {
  console.log(`movies`, movies, activeMovieId);
  const handleActiveMovie = (id: number) => {
    setActiveMovieId(id);
  };

  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className={`h-0.5 w-4 cursor-pointer ${
              movie.id === activeMovieId ? ' bg-slate-100' : ' bg-slate-600'
            }`}
            onClick={() => handleActiveMovie(movie.id)}
          ></li>
        ))}
      </ul>
    </div>
  );
}

export default PaginateIndicator;
