import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgressBar from '../components/MediaList/CircularProgressBar';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faBookmark, faHeart, faList } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { groupBy } from 'lodash';

type MovieDetails = {
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
  console.log(id);

  useEffect(() => {
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
      });
  }, [id]);

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
        src={`
            https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}
        `}
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-8">
        <div className="flex-1">
          <img
            src={`
            https://image.tmdb.org/t/p/original${movieDetails.poster_path}
        `}
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
              <div className=" border border-white rounded-full w-10 h-10 bg- flex items-center justify-center">
                <FontAwesomeIcon icon={faList} />
              </div>

              <div className=" border border-white rounded-full w-10 h-10 bg- flex items-center justify-center">
                <FontAwesomeIcon icon={faHeart} />
              </div>

              <div className=" border border-white rounded-full w-10 h-10 bg- flex items-center justify-center">
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
              {/* <div>
                <p className="font-bold">Director</p>
                <p>Jennifer Phang</p>
              </div>
              <div>
                <p className="font-bold">Writer</p>
                <p>Dan Frey, Russell Sommer</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
