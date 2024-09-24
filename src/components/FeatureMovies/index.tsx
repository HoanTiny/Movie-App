/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Movie from './Movie';
import PaginateIndicator from './PaginateIndicator';
import { useFetch } from '@hooks/useFetch';
// import axios from 'axios';

export type MovieType = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  type?: string; // Add the type property as optional
  site?: string; // Add the site property as optional
  key?: string; // Add the key property as optional
};

type Test = {
  results: Array<MovieType>;
};
function FeatureMovies() {
  // const [movies, setMovies] = useState<MovieType[]>([]);
  const [activeMovieId, setActiveMovieId] = useState<number>();

  const { data: popularMovies = {} as Test } = useFetch<Test>({
    url: '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  });

  const { data: videoResponse = {} as Test } = useFetch<Test>(
    {
      url: `/movie/${activeMovieId}/videos`,
    },
    { enabled: !!activeMovieId }
  );

  // const temp = (videoResponse?.results || []).find(
  //   (video) => video.type === "Trailer" && video.site === "YouTube",
  // )?.key;

  // console.log({ videoResponse });

  const movies = popularMovies.results?.slice(0, 4);

  useEffect(() => {
    if (movies) {
      setActiveMovieId(movies[0].id);
    }

    movies?.forEach((movie: { poster_path: string }) => {
      const img = new Image();
      img.src = movie.poster_path; // Assuming 'poster_path' is the image URL for each movie
    });
  }, [JSON.stringify(movies)]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextMovieIndex =
        movies.findIndex((movie) => movie.id === activeMovieId) + 1;
      console.log(`nextMovieIndex`, nextMovieIndex);

      setActiveMovieId(movies[nextMovieIndex]?.id || movies[0].id);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeMovieId, movies]);

  return (
    <div className="relative text-white min-h-[54vw]">
      {movies &&
        movies
          .filter((movie) => movie.id === activeMovieId)
          .map((movie) => (
            <Movie
              key={movie.id}
              dataMovies={movie}
              trailerVideoKey={
                (videoResponse?.results || []).find(
                  (video) =>
                    video.type === 'Trailer' && video.site === 'YouTube'
                )?.key
              }
            />
          ))}

      {activeMovieId !== undefined && (
        <PaginateIndicator
          movies={movies}
          activeMovieId={activeMovieId}
          setActiveMovieId={setActiveMovieId}
        />
      )}
    </div>
  );
}

export default FeatureMovies;
