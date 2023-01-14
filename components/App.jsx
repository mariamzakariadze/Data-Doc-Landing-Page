import React, { useState } from 'react';
import { render } from 'react-dom';
import ResponsiveAppBar from './NavBar.jsx';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home.jsx';
import Team from './Team.jsx';
import GetStarted from './GetStarted.jsx';
import Demo from './Demo.jsx';
import About from './About.jsx';
import TechStack from './TechStack.jsx';
import Footer from './Footer.jsx';



function App() {
  
    return (
      <Router>
       <ResponsiveAppBar />
       <Home />
       <About />
       <GetStarted />
       <Demo />
       <Team/>
       <TechStack />
       <Footer />
       <Routes> 
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/Demo" element={<Demo />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path='/techstack' element={<TechStack/>} />
        </Routes>
      </Router>
    );
}


export default App;