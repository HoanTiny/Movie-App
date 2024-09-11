import MovieCard from './MovieCard';

function MediaList() {
  return (
    <div className="px-8 text-[1.2vw] py-10 bg-black text-white">
      <div className="flex items-center gap-4 mb-6">
        <p>Trending</p>
        <ul className="flex gap-3 border border-white rounded items-center ">
          <li className="active bg-white text-black px-2 py-1 rounded cursor-pointer">
            All
          </li>
          <li className="px-2 py-1 rounded cursor-pointer">Movies</li>
          <li className="px-2 py-1 rounded cursor-pointer">TV Shows</li>
        </ul>
      </div>
      <div className="grid">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default MediaList;
