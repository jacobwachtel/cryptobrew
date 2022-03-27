import React from 'react';
import '../styles/Navbar.css';
import brewLogo from '../assets/cb-logo.png';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
            <img src={brewLogo} alt='logo'/>
        </div>
        <div className='navbar-links'>
            <a href='#'>About</a>
            <a href='#'>About</a>
            <a href='#'>Contact</a>

            <div className='navbar-login'>
                <a href='#'>Login</a>
                <a href='#'>Signup</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar