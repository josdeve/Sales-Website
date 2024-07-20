import React from 'react';
import '../Style/AboutPage.css';

const AboutPage = () => {
  return (
    <div 
      style={{
        backgroundImage: 'url(https://media.giphy.com/media/3oFzmrqRPhYnFg9oGs/giphy.gif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '63vh',
        backgroundColor: '#f2f2f2'
      }} 
      className="about-page"
    >
      <h1>About Us</h1>
      <p>Y CAPITAL is a mission to develop websites. We believe in technology and strive to provide our services.</p>
      <p></p>
      <h2>Our Team</h2>
      <p>........................................................................</p>
      <h2>Our Mission</h2>
      <p>........................................................................</p>
      <p>........................................................................</p>
      <p>We are excited to connect with you and help you .</p>
      <div className="contact-info">
        <p>Get in touch with us:</p>
        <ul>
          <li><a href="mailto:info@example.com">info@example.com</a></li>
          <li><a href="https://twitter.com/example">Twitter</a></li>
          <li><a href="https://www.example.com">Website</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;