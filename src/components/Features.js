import React from 'react';
import '../Style/Features.css'
import '../App.css';

const Features = () => {
  return (
    <section className="features" style={{
      backgroundImage: `url('https://th.bing.com/th/id/R.1c9d84c01b54af1d61bcff6d3c88d463?rik=zUYthhA9WpXTPQ&pid=ImgRaw&r=0')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="container">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="feature-title">Lead Tracking</h3>
            <p className="feature-description">
              Track leads, get accurate forecasts, and focus on what matters: closing opportunities.
            </p>
            <a href="#" className="feature-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="feature-title">Customer manage</h3>
            <p className="feature-description">
               customer-manage tool for your sales needs.
            </p>
            <a href="#" className="feature-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="feature-title">Boost Productivity</h3>
            <p className="feature-description">
              Start Now - It's Free! 
            </p>
            <a href="#" className="feature-link">
              Learn More <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;