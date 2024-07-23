import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Carousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 5000
  };

  return (
    <div>
      <h2></h2>
      <Slider {...settings}>
        <div>
          <h3></h3>
          <img src="../../../public/Carousel Images/1d2fded6-3132-4a19-8e60-36fbeb7e87ad.avif" alt="Slide 1" />
        </div>
        <div>
          <h3></h3>
          <img src="../../../public/Carousel Images/default-city.jpg" alt="Slide 2" />
        </div>
        <div>
          <h3></h3>
          <img src="../../../public/Carousel Images/bde999ed-0059-49c1-af44-38369a7def7d.avif"  alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
