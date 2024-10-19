// src/components/Contact.jsx
import React from 'react';
import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Importing icons
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <h3>Contact Me:</h3>
      <div className="contact-details">
        {/* Email Contact */}
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:satyajeetnikam27@gmail.com" className="contact-link">
            Gmail
          </a>
        </div>

        {/* LinkedIn Contact */}
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/satyajeet-nikam/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Instagram Contact */}
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a
            href="https://www.instagram.com/yourinstagramhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            Instagram Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;