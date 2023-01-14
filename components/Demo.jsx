import React, { useState } from 'react';
import "../styling/demo.css"
import app2 from "../styling/app2.gif"
import app3 from "../styling/app3.gif"



function Demo() {
  
    return (
      <div className= 'demo-container' id='demo'> 
        <h1>Demo</h1>
        <h2>Main Page and Metrics</h2>
        <br/>
        <img src={app2} alt='demos' className='demos'/>
        <br/>
        <h2>Simulation Feature</h2>
        <br/>
        <img src={app3} alt='demos' className='demos'/>
      </div>
       
    );
}


export default Demo;