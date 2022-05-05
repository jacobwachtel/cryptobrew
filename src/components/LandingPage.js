import React from 'react';

import HeroSection from './landingPage/HeroSection';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import BenefitsSection from './landingPage/BenefitsSection';
import NFTCarousel from './landingPage/NFTCarousel';
import About from './landingPage/About';
import ContactForm from './landingPage/ContactForm';

const LandingPage = () => {
  return (
    <>
        <Navbar />
        <HeroSection />
        <BenefitsSection />
        {/* <NFTCarousel /> */}
        <About />
        <ContactForm />
        <Footer />
    </>
  )
}

export default LandingPage