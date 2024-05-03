import logo from './logoturf.png';
import { useState } from 'react';
import './header.css'
import ProductCard from './productcard';


export default function Headers({slotCount}){
  

    return(
        <header>   
            <>
            <div className="topnav">
                {/* <img src={logo}></img> */}
              <div className="topnav-left">
              <a href="#about">About</a>
                <a href="#signup">Sign Up</a>
                <a href="#menu">Menu</a>
                <a className="active"href="#home">Home</a>
              </div>
              {/* <div className="topnav-right">
              <a href="#">Slot{slotCount}</a>
              </div> */}
              </div>
              </>
        </header>
    )
}