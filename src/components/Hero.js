import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/hero.css'

const Hero = () => {
  return (
    <section class="hero">
      <div class="container">
        <h1>Sales teams from good to great</h1>
        <p>This website is created for testing my expertise.</p>
        <button class="cta-button">Start Now - It's Free</button>
        <Link to="/Schedule a Demo">
          <button class="cta-button">Schedule a Demo</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;