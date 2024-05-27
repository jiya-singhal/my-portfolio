import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
        <button class="close-btn">&#x274C;</button>
          <a href="/home">Home</a>
          <br></br>
          <a href="/about">About</a>
          <br></br>
          <a href="/resume">Resume</a>
          <br></br>
          <a href="/Service">Services</a>
          <br></br>
          <a href="/Blog">Blog</a>
          <br></br>
          <a href="/contact">Contact</a>
  
    </nav>
  );
};

export default Navbar;