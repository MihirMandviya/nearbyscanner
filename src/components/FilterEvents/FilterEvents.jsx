import React from 'react';

function FilterEvents() {
  const filters = [
    { label: 'This Weekend', icon: '', bgColor: 'bg-purple-100' },
    { label: 'Free', icon: '', bgColor: 'bg-yellow-100' },
    { label: 'This Week', icon: '', bgColor: 'bg-pink-100' },
    { label: 'This Month', icon:'', bgColor: 'bg-orange-100' },
    { label: 'Tomorrow',icon:'', bgColor: 'bg-teal-100' },
    { label: 'Today', icon:'', bgColor: 'bg-green-100' },
  ];

  return (
    <div className="text-center my-8">
      <h2 className="text-2xl font-semibold mb-4">Quickly filter events by</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter, index) => (
          <div key={index} className={`flex items-center p-4 rounded-lg shadow ${filter.bgColor} hover:scale-105 transition-transform`}>
            <span className="mr-2">{filter.icon}</span>
            <span className="font-bold">{filter.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterEvents;
