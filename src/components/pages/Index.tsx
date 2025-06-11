import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import About from '../About';
import Skills from '../Skills';
import Projects from '../Projects';
import Services from '../Services';
import Contact from '../Contact';
import Footer from '../Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
