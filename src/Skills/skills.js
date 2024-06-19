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
    const skills = [
        { img: htmlLogo, name: 'HTML' },
        { img: javaLogo, name: 'Java' },
        { img: gitLogo, name: 'Git' },
        { img: pythonLogo, name: 'Python' },
        { img: javascriptLogo, name: 'Javascript' },
        { img: cssLogo, name: 'CSS' },
        { img: reactLogo, name: 'React' },
        { img: djangoLogo, name: 'Django' },
        { img: mysqlLogo, name: 'Mysql' },
        { img: numpyLogo, name: 'Numpy' },
        { img: awsLogo, name: 'Aws' },
    ];

    return (
        <div className="skills">
            <div className="skillsHeader">
                <h2>Skills</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <div className="marquee-container">
                        <div className="marquee">
                            {skills.map((skill, index) => (
                                <div className="skill--box" key={index}>
                                    <img src={skill.img} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </div>
                            ))}
                            {skills.map((skill, index) => (
                                <div className="skill--box" key={index + skills.length}>
                                    <img src={skill.img} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                        <div className="marquee">
                            {skills.map((skill, index) => (
                                <div className="skill--box" key={index + skills.length * 2}>
                                    <img src={skill.img} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </div>
                            ))}
                            {skills.map((skill, index) => (
                                <div className="skill--box" key={index + skills.length * 3}>
                                    <img src={skill.img} alt={skill.name} />
                                    <h3>{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
