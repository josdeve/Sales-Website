import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/TryitfreePage.css'

const TryItFreePage = () => {
  const navigate = useNavigate();

  return (
    <div className="try-it-free">
      <h1>Try It Free</h1>
      <p>Start your free trial today and experience the full power of our platform!</p>
      <section className="plans">
        <h2>Subscription Plans</h2>
        <div className="plan">
          <h3>Basic</h3>
          <p>$9.99/month</p>
          <ul>
            <li>10 users</li>
            <li>100MB storage</li>
            <li>Basic support</li>
          </ul>
          <button onClick={() => navigate('/Sign in')}>Sign Up</button>
        </div>
        <div className="plan">
          <h3>Premium</h3>
          <p>$29.99/month</p>
          <ul>
            <li>50 users</li>
            <li>1GB storage</li>
            <li>Prioritized support</li>
          </ul>
          <button onClick={() => navigate('/Sign in')}>Sign Up</button>
        </div>
        <div className="plan">
          <h3>Enterprise</h3>
          <p>Custom pricing</p>
          <ul>
            <li>Unlimited users</li>
            <li>Unlimited storage</li>
            <li>Dedicated support</li>
          </ul>
          <button onClick={() => navigate('/email-me')}>Contact Us</button>
        </div>
      </section>
      <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
    </div>
  );
};

export default TryItFreePage;