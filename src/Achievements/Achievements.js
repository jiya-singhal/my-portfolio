import React from "react";
import './Achievement.css';

const achievements = [
    {
        title: 'Programming with JavaScript - By Meta',
        imgSrc: 'https://media.istockphoto.com/id/1353816199/photo/mobile-display-with-logo-of-facebook-whatsapp-and-instagram-apps-in-against-blurred-meta.jpg?s=612x612&w=0&k=20&c=FgZ6QLyJ3OGo6UuKkFGVESnDvMo3riCnNwOMiwamQLk=',
        link: 'https://coursera.org/share/a48ea0ce5df1c3c6c10a1018661cfa10'
    },
    {
        title: 'Learn to Program: The Fundamentals - By University Of Toronto',
        imgSrc: 'https://media.istockphoto.com/id/1046308996/photo/university-of-toronto-downtown-campus.jpg?s=612x612&w=0&k=20&c=Du4i1mBQ9Y34ly7iE61j1NeuzRy9vN93iJ0klHy1wx4=',
        link: 'https://coursera.org/share/a185c599394d3e0431204d876cde481c'
    },
    {
        title: 'Programming For Everybody:Python - By University of Michigan',
        imgSrc: 'https://media.istockphoto.com/id/1338979714/photo/michigan-stadium-home-of-university-of-michigan-football.jpg?s=612x612&w=0&k=20&c=gSskDhpWxf48Cwrt4N72n1WGokLJGhV5SAN6K9CCbQo=',
        link: 'https://coursera.org/share/c49a9ad7816c1b6e180635799b019481'
    }
];

const AchievementCard = ({ title, description, date, field, imgSrc, link }) => (
    <div className="achievement-card">
        <div className="achievecard-content">
            <div className="achievecard-details1">
                <h2>{title}</h2>
                <p>{description}</p>
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="achievecard-link">
                        View Certificate
                    </a>
                )}
            </div>
            
        </div>
        <div className="achievecard-imgcontainer">
            <img src={imgSrc} alt={title} />
        </div>
    </div>
);

const Achievements = () => (
    <div className="achievement" id="achievement">
        <div className="achievement-body">
            <h1>Achievements</h1>
            <br></br>
            <h4>Putting quantified achievements on a resume is great, but I just don’t work with hard numbers.<br></br> I have no data to support the quality of my work. <br></br>If you have lots of relevant experience, the heading statement of your resume will be a summary.</h4>
        </div>
        <div className="achievement-cards">
            {achievements.map((achievement, index) => (
                <AchievementCard {...achievement} key={index} />
            ))}
        </div>
    </div>
);

export default Achievements;





