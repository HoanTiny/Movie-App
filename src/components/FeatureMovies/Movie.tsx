import { useModalContext } from '@context/ModalProvider';
import { faCircleInfo, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

type propMovies = {
  dataMovies: MovieType;
  trailerVideoKey?: string;
};

type MovieType = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
};

function Movie({ dataMovies, trailerVideoKey }: propMovies) {
  const { onOpenPopup } = useModalContext();

  const [blurImg, setBlurImg] = useState(true);
  console.log(`trailerVideoKey`, trailerVideoKey);
  const src = `https://image.tmdb.org/t/p/original${dataMovies.backdrop_path}`;
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // console.log('Image loaded');
      setTimeout(() => {
        setBlurImg(false);
      }, 200);
    };
  }, [src]);
  return (
    <div className={`${blurImg ? 'bg-black' : ''}`}>
      <img
        width={1280}
        height={800}
        src={src}
        className={`aspect-video brightness-50 w-full`}
      />
      <div className={`absolute bottom-[10%] left-8 w-1/2 sm:w-1/3 `}>
        <p className="mb-2 font-bold sm:text-[2vw]">{dataMovies.title}</p>
        <p className="mb-2 font-bold sm:text-[2vw]">
          <img
            src="https://occ-0-58-325.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABSt7WGNoCqwHOq2BBgoLriIPF6_VLPfNm26XcoaQ9ri_NT8BOod4BzOVhnZWHlDiddcUXkQELB0toLiSJ-j3r5LQlqNcg_xz97FDF27hCufRqGSEivSZeO0MVH-7Xk3bGnoyt-UhVwFTwdLsvpk-ZQKKknyIT3obmsuRwKkNoE1xSbLZOsyQAQ.webp?r=912"
            alt=""
          />
        </p>
        <div>
          <div className="mt-4 hidden text-[1.2vw] sm:block">
            {/* <p className="mb-2 font-bold">Overview</p> */}
            <p>{dataMovies.overview}</p>
          </div>
          <div className="mt-4">
            <button
              className="text-10 mr-2 rounded bg-white px-4 py-2 text-black lg:text-md"
              onClick={() => {
                onOpenPopup(
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${trailerVideoKey}`}
                  />
                );
              }}
            >
              <FontAwesomeIcon icon={faPlay} /> Trailer
            </button>
            <button className="text-10 rounded bg-slate-300/35 px-4 py-2 lg:text-md">
              <FontAwesomeIcon icon={faCircleInfo} className="mr-2" />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
