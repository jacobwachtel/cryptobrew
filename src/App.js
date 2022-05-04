import { useEffect, useState } from 'react';
import './App.css';


import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BenefitsSection from './components/BenefitsSection';
import NFTCarousel from './components/NFTCarousel';
import About from './components/About';
import ContactForm from './components/ContactForm';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <NFTCarousel />
      <About />
      <ContactForm />
      <Footer />
      APP
    </div>
  );
}

export default App;


