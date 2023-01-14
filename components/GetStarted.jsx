import React, { useState } from 'react';
import "../styling/getstarted.css";
import snippet1 from "../styling/snippet1.png";
import snippet2 from "../styling/snippet2.png";
import snippet3 from "../styling/snippet3.png";
import snippet4 from "../styling/snippet4.png";
import snippet5 from "../styling/snippet5.png";
import snippet6 from "../styling/snippet6.png";




function GetStarted() {
  
    return (
      <div id='getstarted'> 
        <h1>Get Started</h1>
        <h2>1. Install our npm to monitor metrics</h2>
        <img src={snippet1} alt='snippet1' className='snippet'/>
        <h2>2. Clone this repository, unzip the file and run commands:</h2>
        <img src={snippet2} alt='snippet2' className='snippet'/>
        <h2>3. Require the installed module</h2>
        <img src={snippet3} alt='snippet3' className='snippett'/>
        <h2>4. Mount our middleware function</h2>
        <img src={snippet4} alt='snippet4' className='snippet'/>
        <h2>5. Register an endpoint to monitor</h2>
        <img src={snippet5} alt='snippet5' className='snippet'/>
        <h2>6. Export registered endpoint to your metrics server</h2>
        <img src={snippet6} alt='snippet6' className='snippet'/>
        <a href='https://github.com/oslabs-beta/DataDoc'><button>Documentation</button> </a>
      </div>
       
    );
}


export default GetStarted;