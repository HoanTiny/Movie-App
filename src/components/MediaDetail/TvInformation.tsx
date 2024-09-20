import ImageComp from '@components/Image';
import { tvType } from '@page/TVShowDetails';
interface MovieInformationProps {
  movieInfo: tvType;
}

function TvInformation({ movieInfo }: MovieInformationProps) {
  return (
    <div className="">
      <p className="text-[1.4vw] font-bold mb-4">Movie Information</p>

      <div className="mb-4">
        <p className="font-bold">Original Name</p>
        <p className="text-slate-300">{movieInfo.original_name}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Original Country</p>
        <p className="text-slate-300">
          {(movieInfo.origin_country || []).map((country: string) => (
            <ImageComp
              key={country}
              src={`https://flagcdn.com/48x36/${country.toLowerCase()}.png`}
              className="w-[1.5vw] mt-1"
              width={48}
              height={36}
            />
          ))}
        </p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Status</p>
        <p className="text-slate-300">{movieInfo.status}</p>
      </div>

      <div className="mb-4">
        <p className="font-bold">Network</p>
        {(movieInfo.networks || []).map(
          (network: { id: string; logo_path: string }) => (
            <img
              className="invert "
              key={network.id}
              src={`https://media.themoviedb.org/t/p/h30${network.logo_path}`}
            />
          )
        )}
      </div>
    </div>
  );
}

export default TvInformation;
