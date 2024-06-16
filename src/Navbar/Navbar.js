import React from 'react';
import './Navbar.css';  
import logo from '../assets/jiyaPNG.png';
import { Link as RouterLink } from 'react-router-dom'; // Import Link from react-router-dom
import { Link as ScrollLink } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  return (
    <nav className="Navbar">
      <RouterLink to="/">
        <img src={logo} alt="Logo" className="logo" />
      </RouterLink>
      <div className="desktopMenu">
        <ScrollLink to="home" smooth={true} duration={500} className="navbar-menu">Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className="navbar-menu">About</ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500} className="navbar-menu">Skills</ScrollLink>
        <ScrollLink to="education" smooth={true} duration={500} className="navbar-menu">Education</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} className="navbar-menu">Projects</ScrollLink>
        <ScrollLink to="achievements" smooth={true} duration={500} className="navbar-menu">Achievements</ScrollLink>
      </div>
      <button className="contactBtn">
        <div className="contactImg" />Contact Me
      </button>
    </nav>
  );
}

export default Navbar;