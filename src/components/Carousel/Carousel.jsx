import React, { useState, useEffect, useRef } from 'react';
import './Carousel.css'

const settings = {
  autoplay: true,
  autoplayInterval: 3000,
  navButtons: true,
  dots: true,
  slidesToShow: 3, // Number of slides to show at a time
};

const items = [
  '/Carousel Images/1d2fded6-3132-4a19-8e60-36fbeb7e87ad.avif',
  '/Carousel Images/1d2fded6-3132-4a19-8e60-36fbeb7e87ad.avif',
  '/Carousel Images/1d2fded6-3132-4a19-8e60-36fbeb7e87ad.avif',
  '/Carousel Images/1d2fded6-3132-4a19-8e60-36fbeb7e87ad.avif',
  '/Carousel Images/1d2fded6-3132-4a19-8e60-36fbeb7e87ad.avif',
];

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (settings.autoplay) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, settings.autoplayInterval);
      return () => clearInterval(intervalRef.current);
    }
  }, [settings.autoplay, settings.autoplayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex justify-center transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${currentSlide * (100 / settings.slidesToShow)}%)`,
          width: `${items.length * (100 / settings.slidesToShow)}%`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-full mx-2 transition-transform duration-500`}
            style={{
              maxWidth: `${100 / settings.slidesToShow}%`,
              transform: `scale(${index === currentSlide ? 1.05 : 1})`,
              marginLeft: index === currentSlide ? '-110px' : 0,
            }}
          >
            <img src={item} alt={`slide-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
        {items.map((item, index) => (
          <div
            key={index + items.length}
            className={`flex-shrink-0 w-full h-full mx-2 transition-transform duration-500`}
            style={{
              maxWidth: `${100 / settings.slidesToShow}%`,
              transform: `scale(${index === currentSlide - items.length ? 1.05 : 1})`,
              marginLeft: index === currentSlide - items.length ? '-110px' : 0,
            }}
          >
            <img src={item} alt={`slide-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      {settings.dots && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => handleDotClick(index)}
            ></button>
          ))}
        </div>
      )}
      {settings.navButtons && (
        <>
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={prevSlide}
          >
            ❮
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
            onClick={nextSlide}
          >
            ❯
          </button>
        </>
      )}
    </div>
  );
}

export default Carousel;