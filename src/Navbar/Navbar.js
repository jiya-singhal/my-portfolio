import React from 'react';
import './Navbar.css';  
import logo from '../assets/Jiya.png';
import contactImg from '../assets/contactme.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link to="/home" className="navbar-menu">Home</Link>
        <Link to="/about" className="navbar-menu">About</Link>
        <Link to="/skills" className="navbar-menu">Skills</Link>
        <Link to="/education" className="navbar-menu">Education</Link>
        <Link to="/projects" className="navbar-menu">Projects</Link>
        <Link to="/achievements" className="navbar-menu">Achievements</Link>
      </div>
      <button className="contactBtn">
        <img src={contactImg} alt="Contact" className="contactImg" />Contact Me
      </button>
    </nav>
  );
}

export default Navbar;
