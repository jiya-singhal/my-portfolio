import React from "react";
import './Home.css';
import jiyaprofile from '../assets/myprofile.jpg';
import githubicon from '../assets/social/github.svg';
import linkedInicon from '../assets/social/linkedin.svg';
import twittericon from '../assets/social/twitter.svg';
import About from "../About/About";
import Skills from "../Skills/skills";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Achievements from "../Achievements/Achievements";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="introcontent">
          <span className="hello">WebDeveloper</span>
          <span className="introText">I'm <span className="introName">Jiya!</span> <br /></span>
          <p className="introPara"> There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.</p>
          <div className="button-container">
            <button className="download-cv">Download CV</button>
          </div>
        </div>
        <img src={jiyaprofile} alt="Jiya Profile" className="jiyaprofile"/>
      </section>
      
      <section id="about">
        {<About/>}
      </section>

      <section id="skills">
        {<Skills/>}
      </section>

      <section id="education">
        {<Education/>}
      </section>

      <section id="projects">
        {<Projects/>}
      </section>

      <section id="achievements">
        {<Achievements/>}
      </section>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/jiya-singhal-100bbb278/" target="_blank" rel="noreferrer">
          <img src={linkedInicon} alt="LinkedIn" />
        </a>
        <a href="https://github.com/jiya-singhal" target="_blank" rel="noreferrer">
          <img src={githubicon} alt="GitHub" />
        </a>
        <a href="https://x.com/home" target="_blank" rel="noreferrer">
          <img src={twittericon} alt="Twitter" />
        </a>
      </div>
    </div>
  );
}

export default Home;
