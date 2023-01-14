import React, { useState } from 'react';
import styles from '../styles';
import GetStarted from './GetStarted.jsx';
import logo from "../styling/logo.png"
import "../styling/home.css"
import app1 from "../styling/app1.gif"
import datadoc from "../styling/datadoclogo.png";



function Home() {
  
    return (
      <div className = 'home' id='home' > 
      <div className='header-container'>
      <img src={datadoc} alt='logo' className='logo'/>
        <h2> System Reliability Revolutionized </h2>
      </div>
      <img src={app1} alt='logo' className='homepage'/>
      </div>
       
    );
}


export default Home;