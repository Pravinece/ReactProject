// signin.js
import React, { useState } from 'react';
import LandingPage from './landingPage';
import { useNavigate } from 'react-router-dom';
import a from '../images/apl.png'
import b from '../images/gle.png'

const SignInComponent = ({ onRegisterClick}) => {
  const navigate = useNavigate(); 
  
  const [emailValue, setEmailValue] = useState({
    email: "",
  });
  const [passValue, setPassValue] = useState({
    password: "",
    showPassword: false,
  });
  
  const Register = () => {
    onRegisterClick();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(event.target);
  
    // Convert form data to JSON
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    // Make a GET request to check if jsonData exists in JSON data
    try {
      const response = await fetch('http://localhost:3000/users');
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const userData = await response.json();
      console.log(userData)
      // Check if jsonData exists in userData
      const isDataFound = userData.some((data) => {
        return data.email === jsonData.email && data.password === jsonData.password;
      });
      if (isDataFound) {
        console.log('Data found in JSON data.');
        navigate('/home')
        // Data found, you can proceed with your logic here
      } else {
        console.log('Data not found in JSON data.');
        // Data not found, you can handle this case accordingly
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <div className='row'>
        <div className='left' style={{ width: '300px', padding: '60px 140px' }}>
          <h1 >Sign in to</h1>
          <h2>
            Lorem Ipsum is simply
          </h2>
          <p style={{ color: '#6e6f70' }}>
            If you don't have an account register
            <a onClick={Register} style={{ marginLeft: '5px', color: 'blue', cursor: 'pointer' }}>Register here!</a>
          </p>
        </div>
        <div className='left' style={{ width: '300px', marginLeft: '20%' }}>
          <h2>Sign in</h2>
          <form  action="#" method="POST" onSubmit={handleSubmit}>
            {/* <input type="hidden" name="remember" value="true" /> */}
            <div>
              <div style={{ paddingBottom: '50px' }}>
                <input id="email-address" name="email" type="email"  required className='input_box' placeholder="Enter email or user name" />
              </div>
              <div style={{ paddingBottom: '10px' }}>
                <div>
                  <input name="password" type="password"  className='input_box' required placeholder="Password" />
                </div>
              </div>
              <div>
                <a href='#' style={{ float: 'right' }}>Forgot Password</a>
              </div>
            </div>
            <div>
              <button type="submit" style={{ marginTop: '40px', width: '300px', height: '40px', color: 'white', borderColor: 'blue', backgroundColor: 'blue', borderRadius: '10px'  }}>
                Login In
              </button>
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', padding: '10% 10% 40% 30%' }}>
              <p> or continue with</p>
              <a href='#'><img src= {a} className='logo' alt="apl logo"/></a>
              <a href='#'><img src={b} className='logo' alt="gle logo" /></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
