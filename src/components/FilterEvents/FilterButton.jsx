import React from 'react';

const FilterButton = ({ text, textColor, imageUrl }) => {
  return (
    <div
    className="flex items-center justify-center bg-gray-200 p-2.5 rounded mr-2.5 cursor-pointer"
  >
    <span className={`text-${textColor}`}>{text}</span>
    <img src={imageUrl} alt="" className="ml-2.5 w-5" />
  </div>
  );
};

export default FilterButton;