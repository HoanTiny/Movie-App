import FeatureMovies from './components/FeatureMovies';
import Header from './components/Header/Header';
import MediaList from './components/MediaList';
import { TOP_RATE_TABS, TRENDING_TABS } from './libs/contants';

function App() {
  return (
    <div>
      <Header />
      <FeatureMovies />
      <MediaList title="Trending" tabs={TRENDING_TABS} />
      <MediaList title="Top Rated" tabs={TOP_RATE_TABS} />
    </div>
  );
}

export default App;
