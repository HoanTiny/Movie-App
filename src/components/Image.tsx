import { useEffect, useState } from 'react';

type ImageProps = {
  src: string;
  width: number;
  height: number;
  className: string;
  checkBanner?: boolean;
};

function ImageComp({
  src,
  width,
  height,
  className,
  checkBanner = false,
}: ImageProps) {
  const [currentSrc, setCurrentSrc] = useState(
    `https://placehold.co/${width}x${height}?text=Loading`
  );

  useEffect(() => {
    if (checkBanner) {
      setCurrentSrc(`https://placehold.co/${width}x${height}/black`);
    }
  }, [checkBanner, width, height]);

  useEffect(() => {
    const imageToLoad = new Image();
    if (src) {
      imageToLoad.src = src;
      imageToLoad.onload = () => {
        setCurrentSrc(src);
      };
      return;
    }

    return () => {
      imageToLoad.src = '';
    };
  }, [src]);
  return (
    <img
      width={width}
      height={height}
      className={currentSrc === src ? className : `${className} blur-md`}
      src={currentSrc}
      alt=""
    />
  );
}

export default ImageComp;
