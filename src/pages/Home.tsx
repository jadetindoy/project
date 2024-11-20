import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <PricingSection />
    </div>
  );
}