import React from 'react'
import '../styles/Footer.css'
import fb from '../assets/images/facebook.png'

const Footer = () => {
  return (    
    <div className='footer'>        
        <div className='footercontent'>
            <div className='footerTitle'>
                <img className = 'ticketIcon' src = 'https://th.bing.com/th/id/R.376d5eb97e12141142e1b2eceeac7c5b?rik=gOOTjBC7wsgACQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fticket-clipart-transparent%2fticket-clipart-transparent-9.png&ehk=2acrXCfUVQO76QJMLvl64%2fJtgNmSrXR6AGSPZVmJcic%3d&risl=&pid=ImgRaw&r=0' alt = ''></img>
                <h1>NFTickets</h1>
            </div>
            <div className='copyright'>
                 <p className='copyrightText'>© 2022 NFTickets Inc. All rights reserved.</p>
            </div>
            <div className='socials'>
                <img className='Icon' src={fb} alt = 'fb'></img>
                <img className='Icon' src='../images/instagram.png' alt = 'insta'></img>
                <img className='Icon' src='../images/facebook.png' alt = 'twit'></img>
            </div>
        </div>
    </div>
  )
}

export default Footer;
