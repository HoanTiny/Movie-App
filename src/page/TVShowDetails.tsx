/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from '@components/Loading';
import ActorList from '@components/MediaDetail/ActorList';
import Banner from '@components/MediaDetail/Banner';
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import SeasonList from '@components/MediaDetail/SeasonList';
import TvInformation from '@components/MediaDetail/TvInformation';
import { MediaListType } from '@components/MediaList';
// import { MediaListType } from '@components/MediaList';
import { useFetch } from '@hooks/useFetch';
import { useParams } from 'react-router-dom';

export type tvType = {
  content_ratings: {
    results: Array<{
      iso_3166_1: string;
      rating: string;
    }>;
  };
  aggregate_credits: {
    crew: Array<{
      id: number;
      jobs: Array<{
        job: string;
      }>;
      name: string;
    }>;
    cast: Array<{
      roles: any;
      name: string;
      id: string;
      character: string;
      profile_path: string;
    }>;
  };
  backdrop_path: string;
  poster_path: string;
  first_air_date: string;
  name: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  vote_average: number;
  overview: string;
  recommendations?: {
    results: Array<MediaListType>;
  };
  origin_country: Array<string>;
  original_name: string;
  status: string;
  networks: Array<{
    id: string;
    logo_path: string;
    name: string;
  }>;
  seasons: Array<{
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    poster_path: string;
    vote_average: number;
    overview: string;
    season_number: number;
  }>;
  videos: {
    results: Array<{
      key: string;
      type: string;
    }>;
  };
};

function MovieDetails() {
  const { id } = useParams();

  const { data: tvDetails = {} as tvType, isLoading } = useFetch<tvType>({
    url: `/tv/${id}?append_to_response=content_ratings,aggregate_credits,videos,recommendations`,
  });

  const certification = (tvDetails?.content_ratings?.results || []).find(
    (result: { iso_3166_1: string }) => result.iso_3166_1 === 'US'
  )?.rating;

  const crews = (tvDetails?.aggregate_credits?.crew || [])
    .filter((crew) => {
      const jobs = (crew.jobs || []).map((j) => j.job);
      return ['Director', 'Writer'].some((job) => jobs.find((j) => j === job));
    })
    .slice(0, 5)
    .map((crew) => ({ id: crew.id, job: crew.jobs[0].job, name: crew.name }));
  console.log({ crews });

  if (isLoading) {
    return <Loading />;
  }

  console.log('tvDetails', tvDetails);

  return (
    <div>
      <Banner
        backdropPath={tvDetails?.backdrop_path || ''}
        posterPath={tvDetails?.poster_path || ''}
        releaseDate={tvDetails?.first_air_date || ''}
        originalTitle={tvDetails?.name || ''}
        genres={tvDetails.genres || []}
        voteAverage={tvDetails?.vote_average || 0}
        overview={tvDetails?.overview || ''}
        certification={certification || ''}
        crews={crews}
        trailerVideoKey={
          tvDetails?.videos?.results.find((v) => v.type === 'Trailer')?.key ||
          ''
        }
      />
      <div className="bg-black text-white text-[1.2vw]">
        <div className="container">
          <div className="flex-[2]">
            <ActorList
              actors={(tvDetails.aggregate_credits?.cast || []).map((cast) => ({
                ...cast,
                character: cast.roles[0]?.character,
                episodeCount: cast.roles[0]?.episode_count,
              }))}
            />

            <SeasonList seasons={tvDetails.seasons} />

            <RelatedMediaList
              recomendations={tvDetails?.recommendations?.results || []}
              title="More Like This"
            />
          </div>
          <div className="flex-1">
            {tvDetails && <TvInformation movieInfo={tvDetails} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
