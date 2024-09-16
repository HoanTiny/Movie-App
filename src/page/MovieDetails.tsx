import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Banner from '../components/MediaDetail/Banner';
import ActorList from '../components/MediaDetail/ActorList';

export type MovieDetails = {
  release_dates?: {
    results: Array<{
      iso_3166_1: string;
      release_dates: Array<{
        certification: string;
      }>;
    }>;
  };
  backdrop_path?: string;
  poster_path?: string;
  original_title?: string;
  release_date?: string;
  genres?: Array<{
    id: number;
    name: string;
  }>;
  vote_average?: number;
  overview?: string;
  credits?: {
    cast: Array<{
      name: string;
      id: string;
      character: string;
      profile_path: string;
    }>;
    crew: Array<{
      name: string;
      id: string;
      job: string;
    }>;
  };
};

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(id);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`,
        {
          headers: {
            accept: 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGVkMjgzNTFiMjZlZGNiMGExMzg2MzM2YjI5MDBhZiIsIm5iZiI6MTcyNjAyMTU0Mi4xNjYzNTgsInN1YiI6IjY2ZGZiYzIyYTZjMmM4ODA0MTBkOTc3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zMedxNZkzdZeheGmk4xb9V68jz74dACpe4wBSVSg6dE',
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setMovieDetails(response.data);
      })
      .catch((err) => {
        console.log(`err`, err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner movieDetails={movieDetails} />
      <div className="bg-black text-white ">
        <div className="flex gap-6 mx-auto max-w-screen-xl px-6 py-10 ">
          <div className="flex-[2]">
            <ActorList actors={movieDetails.credits?.cast || []} />
          </div>
          <div className="flex-1">
            <p>Infomation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
