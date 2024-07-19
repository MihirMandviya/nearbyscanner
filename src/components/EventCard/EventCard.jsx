import React from 'react';

function EventCard(props) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full" src={props.imageUrl} alt={props.title} />
        <div className="absolute top-0 right-0 p-2 flex space-x-2">
          <button className="bg-white p-2 rounded-full shadow-md">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.172 5.172a4.001 4.001 0 015.656 0L10 6.344l1.172-1.172a4.001 4.001 0 115.656 5.656l-7 7a1 1 0 01-1.414 0l-7-7a4.001 4.001 0 010-5.656z" />
            </svg>
          </button>
          <button className="bg-white p-2 rounded-full shadow-md">
            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 8a3 3 0 11-2.83-4H6a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2v-2.17a3 3 0 110-4.83V8zM8 10a3 3 0 100 6 3 3 0 000-6zm6-5a1 1 0 10-2 0 1 1 0 002 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">
          {props.dates} | {props.location}
        </p>
        <p className="text-blue-600 font-semibold text-lg mt-2">₹{props.price} onwards</p>
      </div>
    </div>
  );
}

export default EventCard;
