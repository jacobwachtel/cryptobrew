import React from 'react';
// import '../styles/Navbar.css';
import brewLogo from '../assets/crypto_brew_logo.png';

const Navbar = () => {
  return (
    <nav className='text-white flex items-center w-full'>
        <div className='mx-10'>
            <img src={brewLogo} alt='logo' className='w-32'/>
        </div>
        <div className='flex-auto flex justify-end'>
          <div className='ml-8 mr-16 text-3xl flex-1 flex justify-end'>
            <a href='#' className='mr-12'>Services</a>
            <a href='#' className='mr-12'>About</a>
            <a href='#' className='mr-12'>Contact</a>
          </div>
          <div className='text-3xl mr-16 flex justify-end'>
            <a className='px-10 py-3 rounded-3xl border-2 border-blue-500 ' href='#'>Login</a>
            <a className='py-4 text-2xl ml-2 underline' href='#'>Signup</a>
          </div>
        </div>
        
    </nav>
  )
}

export default Navbar