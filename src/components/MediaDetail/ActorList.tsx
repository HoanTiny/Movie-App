import ActorInfo from './ActorInfo';

type propActorList = {
  actors: Array<{
    id: string;
    profile_path: string;
    name: string;
    character: string;
  }>;
};

function ActorList({ actors }: propActorList) {
  console.log('actors', actors);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
        {actors.map((actor) => (
          <ActorInfo key={actor.id} actor={actor} />
        ))}
        {/* <ActorInfo />
        <ActorInfo />
        <ActorInfo />
        <ActorInfo /> */}
      </div>
      {/* <p
        className="mt-1 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p> */}
    </div>
  );
}

export default ActorList;
