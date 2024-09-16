type actorInfoProp = {
  actor: {
    id: string;
    profile_path: string;
    name: string;
    character: string;
  };
};

function ActorInfo({ actor }: actorInfoProp) {
  return (
    <div className="border border-slate-300 shadow-sm rounded-lg bg-black ">
      <img
        className="rounded-lg"
        src={
          actor.profile_path
            ? `https://media.themoviedb.org/t/p/w276_and_h350_face/${actor.profile_path}`
            : '/img/ActorNoImage.svg'
        }
        alt=""
      />

      <div className="p-3">
        <p>{actor.name}</p>
        <p>{actor.character}</p>
        {/* <p>18</p> */}
      </div>
    </div>
  );
}

export default ActorInfo;
