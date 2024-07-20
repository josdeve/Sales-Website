import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/FeaturesPage.css'

const FeaturesPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Try it Free');
  };

  return (
    <div className="features-page" style={{
      backgroundImage: `url('https://wallpapercave.com/wp/wp2757874.gif')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <h1>Features</h1>
      <section className="features-section">
        <h2>Feature 1: Advanced Analytics</h2>
        <p>Get insights into your business with our advanced analytics tools.</p>
        <ul>
          <li>Track website traffic and engagement</li>
          <li>Analyze customer behavior and preferences</li>
          <li>Make data-driven decisions with our intuitive dashboards</li>
        </ul>
      </section>
      <section className="features-section">
        <h2>Feature 2: Customizable Templates</h2>
        <p>Choose from a variety of customizable templates to fit your brand.</p>
        <ul>
          <li>Easy to use drag-and-drop editor</li>
          <li>Hundreds of templates to choose from</li>
          <li>Customize fonts, colors, and layouts to fit your brand</li>
        </ul>
      </section>
      <section className="features-section">
        <h2>Feature 3: Secure and Scalable Infrastructure</h2>
        <p>Our infrastructure is built to scale with your business.</p>
        <ul>
          <li>Enterprise-grade security and compliance</li>
          <li>Auto-scaling to handle high traffic and demand</li>
          <li>99.99% uptime guarantee</li>
        </ul>
      </section>
      <button className="cta-button" onClick={handleGetStarted}>Get Started Today!</button>
    </div>
  );
};

export default FeaturesPage;