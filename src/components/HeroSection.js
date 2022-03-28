import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/hero-image-abstract.jpg'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <h1 className='heading-primary'>Create Cashflow to Launch Your Business</h1>
            <h2 className='heading-secondary'>We harness the power of Crypto to get your business off the ground.</h2>
        </div>
        <div className='hero-image'>
            <img src={heroImage} alt='hero-image'/>
        </div>
    </div>
  )
}

export default HeroSection