import ImageComp from '@components/Image';
import RelatedMediaList from '@components/MediaDetail/RelatedMediaList';
import { MediaListType } from '@components/MediaList';
import { GENDER_MAPPING } from '@libs/contants';
import { useLoaderData } from 'react-router-dom';

interface PeopleData {
  known_for_department: string;
  gender: number;
  place_of_birth: string;
  birthday: string;
  profile_path: string;
  biography: string;
  name: string;
  combined_credits: {
    cast: Array<MediaListType>;
  };
}

function PeoplePage() {
  const peopleData = useLoaderData() as PeopleData;
  console.log(peopleData);
  return (
    <div className="bg-black text-white text-[1.2vw]">
      <div className="container">
        <div className="flex-1">
          <ImageComp
            src={
              peopleData.profile_path &&
              `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${peopleData.profile_path}`
            }
            width={600}
            height={900}
            className="mb-6"
          />
          <div>
            <p className="mb-6 text-[1.3vw] font-bold">Personal Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Known For</p>
                <p>{peopleData.known_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>{GENDER_MAPPING[peopleData.gender]}</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{peopleData.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Birthday</p>
                <p>{peopleData.birthday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2]">
          <p className="mb-6 text-[2vw] font-bold">{peopleData.name}</p>
          <div className="mb-6">
            <p className="mb-4 text-[1.4vw] font-bold">Biography</p>
            <p className="whitespace-pre-line">{peopleData.biography}</p>
          </div>
          <RelatedMediaList
            recomendations={peopleData.combined_credits?.cast || []}
            title="Known For"
          />
        </div>
      </div>
    </div>
  );
}

export default PeoplePage;
