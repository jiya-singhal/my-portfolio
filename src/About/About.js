import React from 'react';
import './About.css';
import aboutImg from '../assets/about/yellowTheme-girl.svg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="line-styling">
        <div className="style-circle"></div>
        <div className="style-circle"></div>
        <div className="style-line"></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2>Who I am</h2>
          <p>
          My name's Jiya. I'm a student at Scaler School of Technology based in Bangalore, India.<br></br>
          During the day, I attend college and focus on learning Data Structures and Algorithms (DSA) while working on new projects. In the evening, I work as a freelancer and utilize my time to build my own products. I spend my leisure hours dancing, as I am a Bharatanatyam graduate. Right now, I'm also trying my hand at machine learning and AI. I love to learn and explore new arenas.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="Jiya" />
        </div>
      </div>
      
    </section>
  );
};

export default About;
