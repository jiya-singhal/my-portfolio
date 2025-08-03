// AchievementCard.js
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-awesome-reveal';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AiOutlineFolder, AiOutlineLink } from "react-icons/ai";

import './Achievement.css'

function AchievementCard({ id, title, details, date, field, link }) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles(() => ({
        achievementCard: {
            backgroundColor: theme.primary30,
            "&:hover": {
                backgroundColor: theme.primary50,
            },
        },
    }));

    const classes = useStyles();

    return (
        <Fade bottom>
            <div key={id} className={`achievement-card ${classes.achievementCard}`}>
                <div className="achievecard-content">
                    <div className="achievecard-details1">
                        <h2 style={{ color: theme.tertiary }}>{title}</h2>
                        <p style={{ color: theme.tertiary80 }}>{details}</p>
                    </div>
                    <div className="achievecard-details2" style={{ color: theme.primary }}>
                        <h5>{date}</h5>
                        <div className="achievecard-field">
                            <AiOutlineFolder />
                            <h5>{field}</h5>
                        </div>
                    </div>
                </div>
                <div className="achievecard-imgcontainer">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievecard-link"
                        style={{ color: theme.tertiary }}
                    >
                        <AiOutlineLink size={28} />
                        <span>View</span>
                    </a>
                </div>
            </div>
        </Fade>
    );
}

export default AchievementCard;
