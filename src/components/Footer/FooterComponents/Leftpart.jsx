import React from 'react';

function Leftpart() {
  return (
    <div className="footer-container-left  basis-full md:basis-1/4 p-4 md:p-8">
    <div className="copyright-n-logo  p-4 rounded mb-4">
        <img src="" alt="site-logo" className="w-16 h-16 mx-auto" />
        <p className="text-center mt-2">Copyright @{new Date().getFullYear()}</p>
    </div>

    <div className="bookings flex flex-col items-center  p-4 rounded mb-4">
        <a href="#" className="flex items-center space-x-2">
            <p>View your Bookings</p>
            <img className="h-4" src="../../../../public/FooterImages/share_6113267.png" alt="Redirecting to a new page" />
        </a>
    </div>

    <div className="Follow-us-section  p-4 rounded">
        <p className="text-center mb-2">Follow us on</p>
        <div className="SocialMedia-Icons flex justify-around">
            <img className="h-6" src="../../../../public/FooterImages/instagram.svg" alt="Instagram-logo" />
            <img className="h-6" src="../../../../public/FooterImages/twitter-alt.svg" alt="Twitter-logo" />
            <img className="h-6" src="../../../../public/FooterImages/linkedin.svg" alt="LinkedIn-logo" />
            <img className="h-6" src="../../../../public/FooterImages/facebook.svg" alt="Facebook-logo" />
        </div>
    </div>
    <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-black"></div>
</div>

  );
}

export default Leftpart;