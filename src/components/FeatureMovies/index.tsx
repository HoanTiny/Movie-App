import { useEffect, useState } from 'react';
import Movie from './Movie';

function FeatureMovies() {
  // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGVkMjgzNTFiMjZlZGNiMGExMzg2MzM2YjI5MDBhZiIsIm5iZiI6MTcyNTkzODk4Mi4zOTAyMjIsInN1YiI6IjY2ZGZiYzIyYTZjMmM4ODA0MTBkOTc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3DmkYWP16sof00HmFm0jQkXD84Brln9-M6hK5ZF8Ukg

  const [movies, setMovies] = useState({});

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGVkMjgzNTFiMjZlZGNiMGExMzg2MzM2YjI5MDBhZiIsIm5iZiI6MTcyNTkzODk4Mi4zOTAyMjIsInN1YiI6IjY2ZGZiYzIyYTZjMmM4ODA0MTBkOTc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3DmkYWP16sof00HmFm0jQkXD84Brln9-M6hK5ZF8Ukg',
      },
    }).then(async (response) => {
      const data = await response.json();
      setMovies(data);
    });
  }, []);

  console.log(`movies`, movies);

  return (
    <div className="relative text-white">
      <Movie />
    </div>
  );
}

export default FeatureMovies;
