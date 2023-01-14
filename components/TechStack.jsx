import React, { useState } from 'react';
import chartjs from "../styling/chartjs-logo-color.png";
import docker from "../styling/docker-logo-color.png";
import express from "../styling/express-logo-color.png";
import influx from "../styling/influxdb-logo-color.png";
import materialui from "../styling/material-ui-logo-color.png";
import node from "../styling/node-logo-color.png";
import npm from "../styling/npm-logo-color.png";
import sql from "../styling/postgres-logo-color.png";
import react from "../styling/react-logo-color.png";
import twillio from "../styling/twilio-logo-color.png";
import webpack from "../styling/webpack-logo-color.png";
import "../styling/techstack.css";



  

function TechStack() {
  
    return (
      <div className = 'tech' id='techstack'> 
      <h1>Tech Stack</h1>
        <div className="image-container">
          <img src={node} className="image-style" />
          <img src={express} className="image-style" />
          <img src={react} className ="image-style" />
          <img src={npm} className="image-style" />
          <img src={docker} className="image-style" />
          <img src={influx} className ="image-style" />
          <img src={sql} className ="image-style" />
          <img src={webpack} className ="image-style" />
          <img src={chartjs} className ="image-style" />
          <img src={materialui} className ="image-style" />
          <img src={twillio} className ="image-style" />
      </div>
      </div>
       
    );
}


export default TechStack;