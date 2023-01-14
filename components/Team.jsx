import React, { useState } from 'react';
import "../styling/team.css"
import jamie from "../styling/jamie.png";
import jo from "../styling/jo.png";
import jonathan from "../styling/jonathan.jpg";
import mariam from "../styling/mariam.jpg";
import linkedin from "../styling/linkedin.png"
import github from "../styling/github.png"



const TeamMember = ({ image, name}) => {
  return (
    <div className="team-member" >
      <h2>{name}</h2>
      <br/>
      <img src={image} alt={name} className="rounded-image" />
      <div className="links">
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="link-icon" />
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="link-icon" />
       </a>
      </div>
    </div>
  );
}

const Team = () => {
  return (
    <div className="team" id="team"> 
      <h1 className='teamheader'>Data Doc Team</h1>
    <div className="team-container" >
      <TeamMember
        image={jamie}
        name="Jamie Schiff"
        github="https://github.com/name1"
        linkedin="https://linkedin.com/in/name1"
      />
      <TeamMember
        image={jo}
        name="Jo Huang"
        github="https://github.com/name2"
        linkedin="https://linkedin.com/in/name2"
      />
      <TeamMember
        image={jonathan}
        name="Jonathan Huang"
        github="https://github.com/name3"
        linkedin="https://linkedin.com/in/name3"
      />
      <TeamMember
        image={mariam}
        name="Mariam Zakariadze"
        github="https://github.com/name4"
        linkedin="https://linkedin.com/in/name4"
      />
    </div>
    </div>
  );
};

export default Team;


