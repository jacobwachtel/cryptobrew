import React from 'react';
import '../styles/Navbar.css';
import brewLogo from '../assets/crypto_brew_logo.png';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
            <img src={brewLogo} alt='logo'/>
        </div>
        <div className='navbar-navigation'>
          <div className='navbar-links'>
            <a href='#'>Services</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>
          </div>
          <div className='navbar-login'>
            <a className='navbar-login__btn' href='#'>Login</a>
            <a className='navbar-signup__btn' href='#'>Signup</a>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar