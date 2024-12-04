import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  alt: string;
};

const ImageCarousel = ({ src, alt }: Props) => {
  return (
      <div className="w-1/3 mx-auto">

    <Image src={src} alt={alt} layout="responsive" width={1920} height={1080} />
      </div>
  );
};

export default ImageCarousel;
