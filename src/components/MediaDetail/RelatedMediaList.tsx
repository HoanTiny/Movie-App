import { MediaListType } from '@components/MediaList';
import MovieCard from '@components/MediaList/MovieCard';

interface RelatedMediaListProps {
  recomendations: Array<MediaListType>;
}

function RelatedMediaList({ recomendations }: RelatedMediaListProps) {
  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">More Like This</p>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {recomendations.map((rec) => (
          <MovieCard key={rec.id} media={rec} />
        ))}
      </div>
    </div>
  );
}

export default RelatedMediaList;
