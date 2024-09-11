function MovieCard() {
  return (
    <div>
      <img
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/w500/865DntZzOdX6rLMd405R0nFkLmL.jpg"`}
      />
      <div className="">
        <p className="mt-2 font-bold">Title</p>
        <p className="text-slate-300">10/01/2024</p>
      </div>
    </div>
  );
}

export default MovieCard;
