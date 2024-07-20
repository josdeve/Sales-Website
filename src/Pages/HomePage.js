import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import SalesPipeline from '../components/SalesPipeLine';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <SalesPipeline />
      <Footer />
    </div>
  );
};

export default HomePage;