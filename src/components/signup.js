import React from 'react';
import a from '../images/apl.png'
import b from '../images/gle.png'

const SignUpComponent=({onLoginClick})=>{
    const login=()=>{
      onLoginClick();
    }


    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
  
        // Get form data
        const formData = new FormData(event.target);
        
        // Convert form data to JSON
        const jsonData = {};
        formData.forEach((value, key) => {
          jsonData[key] = value;
        });
      
        // Do something with jsonData, like send it to the server
        console.log(jsonData);
      
        try {
          const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
          });
      
          if (response.ok) {
            console.log('Form data saved successfully!');
            // Optionally reset the form after successful submission
            event.target.reset();
          } else {
            console.error('Failed to save form data:', response.statusText);
          }
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
      

    return (
    
        <div className='row'>
        <div className='left' style={{width:'300px',padding:'60px 140px'}}>
          <h2 >Sign in to</h2>
          <p>
            Lorem Ipsum is simply
          </p>
          <p >
            If you already have an account 
            <a  style={{marginLeft:'5px',color:'blue', cursor:'pointer'}} onClick={login}>Login here!</a>
          </p>
        </div>
        <div className='left' style={{width:'300px',marginLeft:'20%'}}>
        <h2>Sign up</h2>
        <form  action="#" method="POST" onSubmit={handleSubmit}>
        {/* <input type="hidden" name="remember" value="true" /> */}
        <div >
          <div >
           
            <input
              name="email"
              type="email"
              autocomplete="email"
              required
              className='input_box'
              placeholder="Enter Email"
            />

            <div style={{paddingBottom:'30px',paddingTop:'30px'}}>
              <input className='input_box'  name="password" type="password"  required  placeholder="Enter Password" />
            </div>
            <div style={{paddingBottom:'0px'}}>
              <input className='input_box'  name="password" type="password"  required  placeholder="Re-Enter Password" />
            </div>
            <button type="submit" style={{marginTop:'40px',width:'300px',height:'40px',color:'white',borderColor:'blue',backgroundColor:'blue',borderRadius:'10px'}}>
              Sign In
            </button>
          </div>
          <div style={{justifyContent:'center',alignItems:'center',alignContent:'center',padding:'10% 10% 40% 30%'}}>
            <p> or continue with</p>
            <a href='#'><img src={a} className='logo'></img></a>
            <a href='#'><img src={b} className='logo'></img></a>
          </div>
          </div>
          </form>
          </div>
          </div>  
        //   </div>
        //   </div>
        )
    };
export default SignUpComponent;