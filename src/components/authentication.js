import React, { useState } from 'react';
import SignInComponent from './signin';
import SignUpComponent from './signup';


function Authentication() {
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