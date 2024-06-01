import React from "react";
import htmlLogo from '../assets/skills/html.svg';
import javaLogo from '../assets/skills/java.svg';
import gitLogo from '../assets/skills/git.svg';
import pythonLogo from '../assets/skills/python.svg';
import javascriptLogo from '../assets/skills/javascript.svg';
import cssLogo from '../assets/skills/css.svg';
import reactLogo from '../assets/skills/react.svg';
import djangoLogo from '../assets/skills/django.svg';
import mysqlLogo from '../assets/skills/mysql.svg';
import awsLogo from '../assets/skills/aws.svg';
import numpyLogo from '../assets/skills/numpy.svg';
import './skills.css';

const Skills = () => {
    return (
        <div className="skills">
            <div className="skillsHeader">
                <h2>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <div className="marquee-container">
                        <div className="marquee">
                            <div className="skill--box">
                                <img src={htmlLogo} alt="HTML" />
                                <h3>HTML</h3>
                            </div>
                            <div className="skill--box">
                                <img src={javaLogo} alt="Java" />
                                <h3>Java</h3>
                            </div>
                            <div className="skill--box">
                                <img src={gitLogo} alt="Git" />
                                <h3>Git</h3>
                            </div>
                            <div className="skill--box">
                                <img src={pythonLogo} alt="Python" />
                                <h3>Python</h3>
                            </div>
                            <div className="skill--box">
                                <img src={javascriptLogo} alt="Javascript" />
                                <h3>Javascript</h3>
                            </div>
                            <div className="skill--box">
                                <img src={cssLogo} alt="CSS" />
                                <h3>CSS</h3>
                            </div>
                            <div className="skill--box">
                                <img src={reactLogo} alt="React" />
                                <h3>React</h3>
                            </div>
                            <div className="skill--box">
                                <img src={djangoLogo} alt="Django" />
                                <h3>Django</h3>
                            </div>
                            <div className="skill--box">
                                <img src={mysqlLogo} alt="Mysql" />
                                <h3>Mysql</h3>
                            </div>
                            <div className="skill--box">
                                <img src={numpyLogo} alt="Numpy" />
                                <h3>Numpy</h3>
                            </div>
                            <div className="skill--box">
                                <img src={awsLogo} alt="Aws" />
                                <h3>Aws</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
