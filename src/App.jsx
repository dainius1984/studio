import React, { useState, useEffect } from "react";
import './App.css';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import StickySidebar from './components/StickySidebar';
import LeadModal from "./components/LeadModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 1 second
    const timer = setTimeout(() => setShowModal(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <StickySidebar />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <LeadModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;
