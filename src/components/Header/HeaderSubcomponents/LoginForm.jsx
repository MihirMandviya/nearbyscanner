import React from 'react';

const LoginForm = ({ closeForm, checkEmail }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <span className="absolute top-2 right-2 text-2xl cursor-pointer" onClick={closeForm}>&times;</span>
        <h2 className="text-2xl mb-4">Let's get started</h2>
        <p className="mb-4">Your one-stop tool for organizing events</p>
        <input type="email" id="email" name="email" placeholder="Email" required className="w-full p-2 border mb-4 rounded" />
        <button type="button" className="w-full p-2 bg-purple-600 text-white rounded mb-4" onClick={checkEmail}>Continue</button>
        <p className="text-center mb-4">OR</p>
        <button type="button" className="w-full p-2 bg-red-600 text-white rounded mb-4">Continue with Google</button>
        <button type="button" className="w-full p-2 bg-blue-600 text-white rounded mb-4">Continue with Facebook</button>
        <p className="text-center">By continuing, you agree to Nearby Scanner's <a href="#" className="text-purple-600">terms of service</a> and <a href="#" className="text-purple-600">privacy policy</a>.</p>
      </form>
    </div>
  );
};

export default LoginForm;
