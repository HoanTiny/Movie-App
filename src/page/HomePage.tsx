import FeatureMovies from '../components/FeatureMovies';
import MediaList from '../components/MediaList';
import { TOP_RATE_TABS, TRENDING_TABS } from '../libs/contants';

function HomePage() {
  return (
    <div>
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATE_TABS} />
    </div>
  );
}

export default HomePage;
