import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EventCard from '../EventCard/EventCard'; // Import your EventCard component

const eventData = [
  {
    imageUrl: 'https://placehold.co/600x400/ff0000/ffffff?text=Event+1',
    title: '77 Independence Day Virtual Marathon & Cyclo...',
    dates: 'Aug 15 - 18',
    location: 'Chennai',
    price: 'Free',
  },
  {
    imageUrl: 'https://placehold.co/600x400/00ff00/ffffff?text=Event+2',
    title: 'The Weekend Pool Party, Belly & Pole Dance, Ramp Show, Gam...',
    dates: 'Aug 03 - 04',
    location: 'Neelankarai, Chennai',
    price: 'Free',
  },
  {
    imageUrl: 'https://placehold.co/600x400/0000ff/ffffff?text=Event+3',
    title: 'Mahatma 10K Run - Get Beautiful Medal by Courier',
    dates: 'Aug 04',
    location: 'Chennai',
    price: '369',
  },
  {
    imageUrl: 'https://placehold.co/600x400/ffff00/000000?text=Event+4',
    title: 'Spartan 5K Run - Challenge Yourself',
    dates: 'Aug 04',
    location: 'Chennai',
    price: '369',
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1200, min: 900 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 900, min: 600 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

function PopularEvents() {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {eventData.map((event, index) => (
        <div key={index}>
          <EventCard
            imageUrl={event.imageUrl}
            title={event.title}
            dates={event.dates}
            location={event.location}
            price={event.price}
          />
        </div>
      ))}
    </Carousel>
  );
}

export default PopularEvents;
