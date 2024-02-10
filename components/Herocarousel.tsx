'use client'; //for Carousel
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
  { imgUrl: '/assets/images/hero-1.svg', altText: 'Smart watch' },
  { imgUrl: '/assets/images/hero-2.svg', altText: 'Bag' },
  { imgUrl: '/assets/images/hero-3.svg', altText: 'Lamp' },
  { imgUrl: '/assets/images/hero-4.svg', altText: 'Air Fryer' },
  { imgUrl: '/assets/images/hero-5.svg', altText: 'Chair' }
];

const Herocarousel = () => {
  return (
    <div className="hero-carousel">
      <Carousel
        showThumbs={false}
        //autoPlay
        //interval={2000}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        {heroImages.map((image) => (
          <Image
            src={image.imgUrl}
            alt={image.altText}
            width={474}
            height={474}
            key={image.altText}
            className="object-contain"
          />
        ))}
      </Carousel>
      <Image
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="absolute bottom-0 left-[-15%] z-0 max-xl:hidden"
      />
    </div>
  );
};

export default Herocarousel;
