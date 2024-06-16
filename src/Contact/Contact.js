import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="contacts-container">
        <h1>Contact Me</h1>
        <br></br>
        <div className="contacts-body">
          <div className="contacts-form">
            <form>
              <div className="input-container">
                <label htmlFor="Name">Name</label>
                <input type="text" id="Name" name="Name" placeholder="Jiya Singhal" required />
              </div>
              <div className="input-container">
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" name="Email" placeholder="jiyasinghal95@gmail.com" required />
              </div>
              <div className="input-container">
                <label htmlFor="Message">Message</label>
                <textarea id="Message" name="Message" placeholder="Type your message...." required></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
          <div className="contacts-details">
            <div className="personal-details">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                <circle cx="12" cy="12" r="4" />
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" 
                fill="white" /> {/* Added fill="white" to make the icon white */}
              </svg>
              <p>jiyasinghal95@gmail.com</p>
            </div>
            <div className="personal-details">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
        fill="white" /> {/* Added fill="white" to make the icon white */}
</svg>

              <p>+91-8630588622</p>
            </div>
            <div className="personal-details">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                fill="white" /> {/* Added fill="white" to make the icon white */}
              </svg>
              <p>Bangalore, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
