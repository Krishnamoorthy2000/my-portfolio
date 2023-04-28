import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Homepage';
import About from './pages/Aboutpage';
import Skill from './pages/Skillpage';
import Project from './pages/Projectpage';
import Contact from './pages/Contactpage';
import Whatsapp from './components/Whatsapp/whatsapp';

export default function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Skill" element={<Skill />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>

      </Router> 
      <Whatsapp/>
     
   
    </div>
  );
}


