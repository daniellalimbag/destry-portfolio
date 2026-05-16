import React from 'react';
import { FiFileText } from 'react-icons/fi';
import resume from '../assets/Destry_Limbag_Resume.pdf';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Profile</span>
          <h2>Planning Engineer</h2>
        </div>
        <div className="about-content">
          <p>
            Result-driven Planning Engineer with more than 25 years' experience in project controls
            and project engineering across Oil &amp; Gas construction, commissioning, maintenance,
            shutdowns, turnarounds, and FPSO construction planning.
          </p>
          <a className="resume-button" href={resume} target="_blank" rel="noreferrer">
            <FiFileText aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
