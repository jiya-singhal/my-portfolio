import React from "react";
import './Home.css';
import jiyaprofile from '../assets/jiyaprofile.jpg';
import githubicon from '../assets/social/github.svg';
import linkedInicon from '../assets/social/linkedin.svg';
import twittericon from '../assets/social/twitter.svg';
import { Link } from 'react-scroll';

const Home = () => {
    return (
       <section id="intro">
        <div className="introcontent">
            <span className="hello">WebDeveloper</span>
            <span className="introText">I'm <span className="introName">Jiya!</span> <br /></span>
            <p className="introPara"> There wasn't a bird in the sky, but that was not what caught her attention. It was the clouds. The deep green that isn't the color of clouds, but came with these. She knew what was coming and she hoped she was prepared.</p>
            <Link><div className="button-container">
            <button className="download-cv">Download CV</button>
          </div></Link>
        </div>
        <img src={jiyaprofile} alt="Jiya Profile" className="jiyaprofile"/>
   
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
   </section>

    )
}

export default Home;
