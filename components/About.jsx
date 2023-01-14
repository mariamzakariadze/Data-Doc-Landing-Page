import "../styling/about.css";
import React, { useState } from 'react';
import datadoc from "../styling/datadoclogo.png"



const MyCard = ({children}) => {
  return (
    <div className='card-container'>
        {children}
        
    </div>
  );
};


function About() {

        const paragraphs = [`DataDoc is an open-source data observability tool that provides
         you with real-time metric data and visualization about the overall health of an application. `,
         `A standalone NPM package that can be seamlessly integrated with a Node/Express server. `, 
         `24/7 Monitoring service for your application with swift alert notifications if anomalies detected. `]
        return (
          <div id='about'>
            <h1 className='header'>What is Data Doc?</h1>
          <div className='my-component'>
            <br></br>
            <div className='card-wrapper'>
            {paragraphs.map((paragraph) => (
              <MyCard>
                <p>{paragraph}</p>
              </MyCard>
            ))}
            </div>
            <br></br>
          </div>
            <div className='button-container'>
                <button className='styled-button'>Learn More</button>
            </div>
          </div>
        
        );
}


export default About;