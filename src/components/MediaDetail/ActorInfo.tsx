import ImageComp from '@components/Image';

type actorInfoProp = {
  actor: {
    id: string;
    profile_path: string;
    name: string;
    character: string;
    episodeCount?: number;
  };
};

function ActorInfo({ actor }: actorInfoProp) {
  return (
    <div className="rounded-lg border border-slate-300 bg-black shadow-sm lg:">
      <ImageComp
        className="rounded-lg w-full"
        src={
          actor.profile_path
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${actor.profile_path}`
            : '/img/ActorNoImage.svg'
        }
        width={276}
        height={350}
      />

      <div className="p-3">
        <p>{actor.name}</p>
        <p>{actor.character}</p>
        {actor.episodeCount && <p>{actor.episodeCount} Episodes</p>}
      </div>
    </div>
  );
}

export default ActorInfo;
