import { MovieDetails } from '@page/MovieDetails';

interface MovieInformationProps {
  movieInfo: MovieDetails;
}

function MovieInformation({ movieInfo = {} }: MovieInformationProps) {
  return (
    <div className="">
      <p className="text-[1.4vw] font-bold mb-4">Movie Information</p>

      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p className="text-slate-300">{movieInfo.original_title}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p className="text-slate-300">
          {(movieInfo.origin_country || []).map((country: string) => (
            <img
              src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
              className="w-[1.5vw] mt-1"
            />
          ))}
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p className="text-slate-300">{movieInfo.status}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Budget</p>
        <p className="text-slate-300">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movieInfo.budget || 0)}
        </p>
      </div>
      <div className="mb-4">
        <p className="font-bold">Revenue</p>
        <p className="text-slate-300">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(movieInfo.revenue || 0)}
        </p>
      </div>
    </div>
  );
}

export default MovieInformation;
