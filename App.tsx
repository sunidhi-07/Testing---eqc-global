
import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Courses from './components/sections/Courses';
import SocialImpact from './components/sections/SocialImpact';
import EQStudio from './components/sections/EQStudio';
import Contact from './components/sections/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AssistantChat from './components/AssistantChat';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isScrolled={isScrolled} />
        
        <main>
          <Hero />
          <About />
          <Services />
          <Courses />
          <SocialImpact />
          <EQStudio />
          <Contact />
        </main>

        <Footer />
        <FloatingWhatsApp />
        <AssistantChat />
      </div>
    </Router>
  );
};

export default App;
