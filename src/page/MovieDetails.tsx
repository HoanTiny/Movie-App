import Loading from '@components/Loading';
import ActorList from '@components/MediaDetail/ActorList';
import Banner from '@components/MediaDetail/Banner';
import MovieInformation from '@components/MediaDetail/MovieInfomation';
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import { MediaListType } from '@components/MediaList';
import { useFetch } from '@hooks/useFetch';
import { useParams } from 'react-router-dom';

export type MovieDetails = {
  name: string;
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
  recommendations?: {
    results: Array<MediaListType>;
  };
  revenue?: number;
  origin_country?: Array<string>;
  status?: string;
  budget?: number;
  results?: Array<MediaListType>;
  videos?: {
    results: Array<{
      key: string;
      type: string;
    }>;
  };
};

function MovieDetails() {
  const { id } = useParams();

  const { data: movieDetails = {} as MovieDetails, isLoading } =
    useFetch<MovieDetails>({
      url: `/movie/${id}?append_to_response=release_dates,credits,recommendations,videos`,
    });

  const certification = (
    (movieDetails?.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === 'US'
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;

  const crews = (movieDetails?.credits?.crew || [])
    .filter((crew) => ['Director', 'Screenplay', 'Writer'].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner
        backdropPath={movieDetails?.backdrop_path || ''}
        posterPath={movieDetails?.poster_path || ''}
        releaseDate={movieDetails?.release_date || ''}
        originalTitle={movieDetails?.original_title || ''}
        genres={movieDetails?.genres || []}
        voteAverage={movieDetails?.vote_average || 0}
        overview={movieDetails?.overview || ''}
        certification={certification || ''}
        crews={crews}
        trailerVideoKey={
          movieDetails?.videos?.results.find((v) => v.type === 'Trailer')
            ?.key || ''
        }
      />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList actors={movieDetails?.credits?.cast || []} />
            <RelatedMediaList
              recomendations={movieDetails?.recommendations?.results || []}
              title="More Like This"
            />
          </div>
          <div className="flex-1">
            {movieDetails && <MovieInformation movieInfo={movieDetails} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
