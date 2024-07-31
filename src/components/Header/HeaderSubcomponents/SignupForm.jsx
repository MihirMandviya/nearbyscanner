import React from 'react';

const SignupForm = ({ closeForm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <span className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={closeForm}>&times;</span>
        <h2 className="text-2xl mb-4">Sign Up</h2>
        <p className="mb-4">Welcome to Nearby Scanner</p>
        <input type="email" id="signupEmail" name="email" placeholder="Email" required className="w-full p-2 border mb-4 rounded" />
        <input type="password" id="password" name="password" placeholder="Password" required className="w-full p-2 border mb-4 rounded" />
        <input type="text" id="fullName" name="fullName" placeholder="Full Name" required className="w-full p-2 border mb-4 rounded" />
        <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone no." required className="w-full p-2 border mb-4 rounded" />
        <div className="mb-4">
          <p>I'm not a robot</p>
          {/* Add reCAPTCHA widget here */}
        </div>
        <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded mb-4">Create your account</button>
        <p className="text-center">By continuing, you agree to Nearby Scanner's <a href="#" className="text-purple-600">terms of service</a> and <a href="#" className="text-purple-600">privacy policy</a>.</p>
      </form>
    </div>
  );
};

export default SignupForm;
