import React, { useState } from 'react';
import LoginForm from './HeaderSubcomponents/LoginForm';
import Navbar from './HeaderSubcomponents/Navbar';
import SignupForm from './HeaderSubcomponents/SignupForm';
import Carousel from '../Carousel/Carousel';

const HeaderMain = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const openLoginForm = () => {
    setShowLoginForm(true);
    setShowSignupForm(false);
  };

  const closeForm = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
  };

  const checkEmail = () => {
    const email = document.getElementById('email').value;

    fetch('/check-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.exists) {
          alert('Email already exists. Redirecting to login...');
          // Implement your login form functionality here
        } else {
          openSignupForm(email);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const openSignupForm = (email) => {
    setShowLoginForm(false);
    setShowSignupForm(true);
    document.getElementById('signupEmail').value = email;
  };

  return (
    <div className="App">
      <Navbar openLoginForm={openLoginForm} />
      <Carousel/>
      {showLoginForm && <LoginForm closeForm={closeForm} checkEmail={checkEmail} />}
      {showSignupForm && <SignupForm closeForm={closeForm} />}
      
    </div>
  );
};

export default HeaderMain;
