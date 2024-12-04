'use client';

import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';


type CarouselImage = {
  src: string | StaticImageData;
  alt: string;
}


const images: CarouselImage[] = [
  {src: 'https://cdn.pixabay.com/photo/2024/11/08/09/45/facade-9182972_1280.jpg', alt: "Photo 1"},
  {src: 'https://cdn.pixabay.com/photo/2024/11/08/09/45/facade-9182972_1280.jpg', alt: "Photo 4"},


]

const Carousel = () => {
  console.log('test')

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % images.length;
        console.log(nextIndex + ' - current index');
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [])

  return (
    <div className='flex overflow-hidden relative w-full max-w-5xl mx-auto'>
      <h1>TEST</h1>
      {images.map((image, index) => (
        <div key={index} className={`absolute transition-transform duration-700 ease-in-out w-full ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
          <div>test</div>
          <Image src={image.src} alt={image.alt} layout='responsive' width={1920} height={1080} className='rounded-lg' />
        </div>
      ))}
    </div>
  )
}

export default Carousel