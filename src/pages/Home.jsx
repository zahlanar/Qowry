import React from 'react';
import Hero from '../components/Hero';
import Partners from '../components/Partners';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;
