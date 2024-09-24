import { MediaListType } from '@components/MediaList';
import MovieCard from '@components/MediaList/MovieCard';

interface RelatedMediaListProps {
  recomendations: Array<MediaListType>;
  title: string;
}

function RelatedMediaList({ recomendations, title }: RelatedMediaListProps) {
  // console.log(3343434344, recomendations);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">{title}</p>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {recomendations.map((rec, index) => (
          <MovieCard key={`${rec.id}-${index}`} media={rec} />
        ))}
      </div>
    </div>
  );
}

export default RelatedMediaList;
