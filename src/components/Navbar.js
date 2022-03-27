import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar-container'>
        <div className='navbar-logo'>
            <img src='https://www.freepnglogos.com/uploads/logo-png/logo-png-transparent-background-5.png' alt='logo'/>
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