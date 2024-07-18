import React from 'react';
import Leftpart from './FooterComponents/Leftpart';
import Rightpart from './FooterComponents/Rightpart';


function FinalFooter() {
   return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around">
        <div className="footer-column mb-8 md:mb-0">
          <img src="logo.png" alt="Logo" className="mb-4 w-32" />
          <p className="mb-2">&copy; {new Date().getFullYear()} Site Name. All rights reserved.</p>
          <p className="mb-2">View your events</p>
          <p className="mb-2">Follow us on</p>
          <div className="flex space-x-4 mt-4">
            <a href="#">
              <img src="icon1.png" alt="Icon 1" className="w-6 h-6 transition-transform transform hover:scale-125" />
            </a>
            <a href="#">
              <img src="icon2.png" alt="Icon 2" className="w-6 h-6 transition-transform transform hover:scale-125" />
            </a>
            <a href="#">
              <img src="icon3.png" alt="Icon 3" className="w-6 h-6 transition-transform transform hover:scale-125" />
            </a>
            <a href="#">
              <img src="icon4.png" alt="Icon 4" className="w-6 h-6 transition-transform transform hover:scale-125" />
            </a>
          </div>
        </div>
        <div className="footer-column mb-8 md:mb-0">
          <p className="mb-2">About Us</p>
          <p className="mb-2">Contact Us</p>
          <p className="mb-2">Terms and Conditions</p>
          <p className="mb-2">Privacy Policy</p>
        </div>
        <div className="footer-column">
          <p className="mb-2">Popular Cities</p>
          <ul className="list-none p-0">
            <li className="mb-1">City 1</li>
            <li className="mb-1">City 2</li>
            <li className="mb-1">City 3</li>
            {/* Add more cities as needed */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FinalFooter;