import { useState } from 'react';
import ActorInfo from './ActorInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronDown,
  faCircleChevronUp,
} from '@fortawesome/free-solid-svg-icons';

type propActorList = {
  actors: Array<{
    id: string;
    profile_path: string;
    name: string;
    character: string;
  }>;
};

function ActorList({ actors }: propActorList) {
  const [isShowMore, setIsShowMore] = useState(false);
  const currentActor = actors.slice(0, isShowMore ? actors.length : 4);
  console.log('actors', actors);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 ">
        {currentActor.map((actor) => (
          <ActorInfo key={actor.id} actor={actor} />
        ))}
      </div>
      <p
        className="my-4 cursor-pointer"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? (
          <>
            <FontAwesomeIcon icon={faCircleChevronUp} /> Show Less
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faCircleChevronDown} /> Show More
          </>
        )}
      </p>
    </div>
  );
}

export default ActorList;
