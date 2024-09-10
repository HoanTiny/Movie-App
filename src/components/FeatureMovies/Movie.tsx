import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import PaginateIndicator from './PaginateIndicator';

function Movie() {
  return (
    <div>
      <img
        src="./img/banner.png"
        alt=""
        className="aspect-video brightness-50 w-full"
      />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        {/* <p className="mb-2 font-bold sm:text-[2vw]">Inside Out 2</p> */}
        <p className="mb-2 font-bold sm:text-[2vw]">
          <img
            src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSt7WGNoCqwHOq2BBgoLriIPF6_VLPfNm26XcoaQ9ri_NT8BOod4BzOVhnZWHlDiddcUXkQELB0toLiSJ-j3r5LQlqNcg_xz97FDF27hCufRqGSEivSZeO0MVH-7Xk3bGnoyt-UhVwFTwdLsvpk-ZQKKknyIT3obmsuRwKkNoE1xSbLZOsyQAQ.webp?r=912"
            alt=""
          />
        </p>

        {/* <div>
          <p className="mb-1 inline-block border border-gray-400 p-1 text-gray-400">
            PG13
          </p>
          <p className="text-[1.2vw]">2024-06-11</p>
        </div> */}
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            {/* <p className="mb-2 font-bold">Overview</p> */}
            <p>
              When their dad unexpectedly dies, two estranged sisters are
              brought together when they find his stash of millions behind a
              wall. But should they keep it?
            </p>
          </div>
          <div className="mt-4">
            <button className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-md">
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <button className="text-10 rounded bg-slate-300/35 px-4 py-2 lg:text-md">
              <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
      <PaginateIndicator />
    </div>
  );
}

export default Movie;
