import React from "react";

const events = [
  {
    title: "Elements Photo Shoots",
    description: "Multiple Dates | Bengaluru",
    price: "₹390 onwards",
    imageUrl:
      "https://images.unsplash.com/photo-1503443207922-dff7d54a8f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "JULY 2024 CYCLING AND RUNNING MONTHLY CHALLENGE",
    description: "Jul 01 - 31 | Bengaluru",
    price: "Free",
    imageUrl:
      "https://images.unsplash.com/photo-1534161308265-e278acac2c07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Elements Baby",
    description: "Daily | Bengaluru",
    price: "₹890 onwards",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf96a9ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "AWS Bangalore Meetup",
    description: "Daily | Bangalore",
    price: "Free",
    imageUrl:
      "https://images.unsplash.com/photo-1522205408452-3d8dd7ebc712?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];

const EventCard = ({ event }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
          <p className="text-gray-600 text-sm mb-2">{event.description}</p>
          <p className="text-gray-800 font-medium">{event.price}</p>
        </div>
      </div>
    </div>
  );
};

const PopularEvents = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Popular Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>
  );
};

export default PopularEvents;
