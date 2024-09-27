import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import SearchForm from '@components/SearchForm';
import { useFetch } from '@hooks/useFetch';
import { useState } from 'react';
import { MovieDetails } from './MovieDetails';
import { useSearchParams } from 'react-router-dom';

type SearchResults = MovieDetails;

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const mediaType = searchParams.get('mediaType');

  console.log(`mediaType`, mediaType);

  const [searchFormValue, setSearchFormValue] = useState({
    mediaType: ['tv', 'movie'].includes(mediaType ?? '') ? mediaType : 'movie',
    genres: [],
    rating: 'All',
  });

  const [minRating, maxRating] =
    searchFormValue.rating === 'All'
      ? [0, 100]
      : searchFormValue.rating.split(' - ').map(Number);

  // console.log(`minRating`, minRating, maxRating);

  const { data: searchData = {} as SearchResults } = useFetch<SearchResults>({
    url: `/discover/${
      searchFormValue?.mediaType
    }?with_genres=${searchFormValue.genres.join(
      ','
    )}&sort_by=popular&vote_average.gte=${minRating / 10}&vote_average.lte=${
      maxRating / 10
    }`,
  });

  // console.log({ searchData });

  // console.log({ searchFormValue });

  return (
    <div className="container flex-col text-black">
      <p className="text-2xl font-bold">Search</p>
      <div className="flex gap-6">
        <div className="flex-1">
          <SearchForm setSearchFormValue={setSearchFormValue} />
        </div>
        <div className="flex-[3]">
          {/* Result */}
          <RelatedMediaList
            recomendations={searchData?.results || []}
            title=""
          />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
