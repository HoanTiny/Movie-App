import axios from 'axios';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import PaginateIndicator from './PaginateIndicator';

export type MovieType = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
};
function FeatureMovies() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [activeMovieId, setActiveMovieId] = useState<number>();
  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/popular', {
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGVkMjgzNTFiMjZlZGNiMGExMzg2MzM2YjI5MDBhZiIsIm5iZiI6MTcyNjAyMTU0Mi4xNjYzNTgsInN1YiI6IjY2ZGZiYzIyYTZjMmM4ODA0MTBkOTc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zMedxNZkzdZeheGmk4xb9V68jz74dACpe4wBSVSg6dE',
        },
      })
      .then((response) => {
        const popularMovies = response.data.results.slice(0, 4);
        setMovies(popularMovies);
        setActiveMovieId(popularMovies[0].id);

        popularMovies.forEach((movie: { poster_path: string }) => {
          const img = new Image();
          img.src = movie.poster_path; // Assuming 'poster_path' is the image URL for each movie
        });
      })
      .catch((err) => {
        console.log(`err`, err);
      });
  }, []);

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
    <div className="relative text-white">
      {movies
        .filter((movie) => movie.id === activeMovieId)
        .map((movie) => (
          <Movie key={movie.id} dataMovies={movie} />
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
