import React from 'react';
import '../styles/HeroSection.css';
import heroImage from '../assets/hero-image-abstract.jpg'
import heroImage2 from '../assets/hero-image-beer.jpg'
import breweryHero from '../assets/brewery_heroImage.jpg'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <div className='hero-text'>
            <h1 className='heading-primary'>Create Cashflow to Launch Your Business</h1>
            <h2 className='heading-secondary'>We harness the power of Crypto to get your business off the ground.</h2>
        </div>
        <div className='hero-image'>
            <img src={breweryHero} alt='hero-image'/>
        </div>
    </div>
  )
}

export default HeroSection