import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import oneIcon from '../assets/projects/one.svg';
import sampleIcon from '../assets/projects/sample.svg';
import twelveIcon from '../assets/projects/twelve.svg';
import fourIcon from '../assets/projects/four.svg';
import './Projects.css';

const projectData = [
    {
        title: 'Event Countdown',
        description: 'Introducing our Event Countdown App your ultimate companion to keep track of upcoming events! Whether it is a birthday, holiday, or special occasion, our app ensures you never miss an important date with precise countdowns and timely reminders.',
        imgSrc: oneIcon,
        tech: ['Html', 'CSS', 'JavaScript'],
        links: [
            { href: 'https://github.com/jiya-singhal/Event-CountDown', icon: <FaGithub /> },
            { href: 'https://jiya-singhal.github.io/Event-CountDown/', icon: <FaExternalLinkAlt /> }
        ]
    },
    {
        title: 'Harry Portfolio',
        description: 'Check out Harry professional portfolio a showcase of skills, achievements, and projects that highlights his expertise and creativity.',
        imgSrc: sampleIcon,
        tech: ['Html', 'CSS', 'JavaScript'],
        links: [
            { href: 'https://github.com/jiya-singhal/Harry-Portfolio', icon: <FaGithub /> },
            { href: 'https://jiya-singhal.github.io/Harry-Portfolio/', icon: <FaExternalLinkAlt /> }
        ]
    },
    {
        title: 'Quiz App',
        description: 'Introducing our Quiz App  an engaging platform designed to test your knowledge and challenge your mind with a variety of fun and educational quizzes. Sharpen your skills compete with friends and enjoy endless learning!',
        imgSrc: twelveIcon,
        tech: ['Html', 'CSS', 'JavaScript'],
        links: [
            { href: 'https://github.com/hhhrrrttt222111/developer-portfolio', icon: <FaGithub /> },
            { href: 'https://github.com/hhhrrrttt222111/developer-portfolio', icon: <FaExternalLinkAlt /> }
        ]
    },
    {
        title: 'Image Editor',
        description: 'Introducing our Image Editor App  a powerful and intuitive tool for enhancing and transforming your photos with ease. Unleash your creativity with advanced editing features, filters, and effects to make every image picture-perfect!',
        imgSrc: fourIcon,
        tech: ['Java'],
        links: [
            { href: 'https://github.com/jiya-singhal/Image-Editor', icon: <FaGithub /> }
        ]
    }
];

const Project = ({ title, description, imgSrc, tech, links }) => (
    <div className="project">
        <div className="projectContent">
            <h2>{title}</h2>
            <img src={imgSrc} alt={title} />
            <div className="project--showcaseBtn">
                {links.map((link, index) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={index}>
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
        <p className="project--desc">{description}</p>
        <div className="project--lang">
            {tech.map((language, index) => (
                <span key={index}>{language}</span>
            ))}
        </div>
    </div>
);

const Projects = () => (
    <div className="projects--bodyContainer">
        {projectData.map((project, index) => (
            <Project {...project} key={index} />
        ))}
    </div>
);

export default Projects;