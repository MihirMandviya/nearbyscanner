import React from 'react';

const Navbar = ({ openLoginForm }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center">
        <img src="/nearbyscanner.png" alt="Nearby Scanner Logo" className="h-10 mr-4" />
        <input type="text" placeholder="Search for events, interests or activities" className="px-4 py-2 border rounded-full" />
        <select className="ml-4 px-4 py-2 border rounded-full">
          <option value="Pune">Pune</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Banglore">Banglore</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Hyderabad">Hyderabad</option>
        </select>
      </div>
      <div className="flex items-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full mr-4">CREATE EVENT</button>
        <div>
          <a href="#" className="text-purple-600" onClick={openLoginForm}>Login</a> | <a href="#" className="text-purple-600" onClick={openLoginForm}>Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
