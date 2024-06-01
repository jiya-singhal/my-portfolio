import React from 'react';
import './Education.css';  
import eduImgWhite from '../assets/education/eduImgBlack.svg';
import eduYellow from '../assets/education/eduYellow.svg';

const Education = () => {
  return (
    <section className="education" id="resume">
      <div className="education-body">
        <div className="education-description">
          <h1 className="education-title">Education</h1>
          <div className="education-card">
            <div className="educard-img">
              <img src={eduImgWhite} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h6 className="education-year">2008-2021</h6>
              <h4 className="education-degree"> Secondary Education</h4>
              <h5 className="education-institution">Ann Mary School</h5>
            </div>
          </div>
          <div className="education-card">
            <div className="educard-img">
              <img src={eduImgWhite} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h6 className="education-year">2021-2023</h6>
              <h4 className="education-degree">Senior Secondary Education</h4>
              <h5 className="education-institution">Gyan Einstein International School</h5>
            </div>
          </div>
          <div className="education-card">
            <div className="educard-img">
              <img src={eduImgWhite} alt="Education Icon" />
            </div>
            <div className="education-details">
              <h6 className="education-year">2023-Present</h6>
              <h4 className="education-degree">Bachelor of Computer Science</h4>
              <h5 className="education-institution">Scaler School of Technology</h5>
            </div>
          </div>
        </div>
        <div className="education-image">
          <img src={eduYellow} alt="Education Illustration" />
        </div>
      </div>
    </section>
  );
};

export default Education;
