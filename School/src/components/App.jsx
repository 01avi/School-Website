import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from "./Home"
import AboutUs from './AboutUs';
import Academics from './Academics';
import Admissions from './Admission';
import Faculty from './Faculty';
import Students from './Student';
import ContactUs from './Contact';
import Gallery from './Gallery';
import "./App.css"


const App = () => {
  return (
    <div className="app">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/academics">Academics</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/students" element={<Students />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;
