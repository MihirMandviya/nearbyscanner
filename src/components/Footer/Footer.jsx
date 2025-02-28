import React from 'react';

const popularPlaces=[{
  name:"Singapore",
  link:"#"
},{
  name:"Bengaluru",
  link:"#"
},{
  name:"Chennai",
  link:"#"
},{
  name:"Mumbai",
  link:"#"
},{
  name:"Pune",
  link:"#"
},{
  name:"Delhi",
  link:"#"
}];

function PopularPlaces(props){
  return (
    <li><p><a href={props.link}>{props.name}</a></p></li>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center md:items-start text-center md:text-left">
        <div className="footer-column mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <img src="logo.png" alt="Logo" className="mb-4 w-32" />
          <p className="mb-2">&copy; {new Date().getFullYear()} Site Name. All rights reserved.</p>
          <p className="mb-2 inline-flex">View your events <img className='w-5 h-5 pl-1' src="../../../public/FooterImages/share_6113267.png" alt="" /></p>
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
        <div className="footer-column mb-8 md:mb-0 flex flex-col items-center md:items-start">
          <p className="mb-2">About Us</p>
          <p className="mb-2">Contact Us</p>
          <p className="mb-2">Terms and Conditions</p>
          <p className="mb-2">Privacy Policy</p>
        </div>
        <div className="footer-column flex flex-col items-center md:items-start">
          <p className="mb-2">Popular Cities</p>
          <ul className="list-none p-0">
            {popularPlaces.map((places, index) => (
              <PopularPlaces
                key={index}
                name={places.name}
                link={places.link}
              />
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
