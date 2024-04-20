import React, { useState } from 'react';
import SignInComponent from './signin';
import SignUpComponent from './signup';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Authentication() {
  // const arvind= useNavigate()
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignInClick = () => {
    setIsSignIn(true);
  };

  const handleSignUpClick = () => {
    setIsSignIn(false);
  };

  return (
    <div>
      {isSignIn ? <SignInComponent onRegisterClick={handleSignUpClick} /> : <SignUpComponent onLoginClick={handleSignInClick}/>}
    </div>
  );
}

export default Authentication;