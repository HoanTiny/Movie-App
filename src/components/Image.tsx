import { useEffect, useState } from 'react';

type ImageProps = {
  src: string;
  width: number;
  height: number;
  className: string;
  checkBanner?: boolean;
};

function ImageComp({ src, width, height, className }: ImageProps) {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`
  );

  useEffect(() => {
    const imageToLoad = new Image();
    if (src) {
      imageToLoad.src = src;
      imageToLoad.onload = () => {
        setCurrentSrc(src);
      };
      return;
    }

    setCurrentSrc(`https://placehold.co/${width}x${height}?text=No Image`);

    return () => {
      imageToLoad.src = '';
    };
  }, [src, height, width]);
  return (
    <img
      width={width}
      height={height}
      className={
        currentSrc === src || !src ? className : `${className} blur-md`
      }
      src={currentSrc}
      alt=""
    />
  );
}

export default ImageComp;
