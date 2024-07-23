import React from 'react';

function Categories() {
  return (
    <div className="Categories flex flex-col">
      <div className="title-button flex justify-between items-center p-4">
        <h1 className="text-lg md:text-xl font-bold pl-1">Categories</h1>
        <button className="text-blue-500 hover:text-blue-700 pr-4">View All</button>
      </div>
      <div className="category-images grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        <img src="/Category Images/digest-business.png" alt="Category1" className="w-full h-auto rounded-lg shadow-lg" />
        <img src="/Category Images/digest-fitness.png" alt="Category2" className="w-full h-auto rounded-lg shadow-lg" />
        <img src="/Category Images/digest-leisure.png" alt="Category3" className="w-full h-auto rounded-lg shadow-lg" />
        <img src="/Category Images/digest-tech.png" alt="Category4" className="w-full h-auto rounded-lg shadow-lg" />
        <img src="/Category Images/digest-travel.png" alt="Category5" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

export default Categories;
