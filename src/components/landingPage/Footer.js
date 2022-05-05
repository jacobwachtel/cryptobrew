import React from 'react';
import fb from '../../assets/images/facebook.png';
import insta from '../../assets/images/instagram.png';
import twit from '../../assets/images/twitter.png';

const Footer = () => {
  return (    
    <div className='h-92 border-t border-gray-50 border-opacity-30'>        
        <div className='pt-8 flex flex-col items-center justify-center'>
            <div className='mb-4 text-3xl'>
                <h1>NFTickets</h1>
            </div>
            <div className='mb-8 color-white'>
                 <p className=''>© 2022 NFTickets Inc. All rights reserved.</p>
            </div>
            <div className='text-sm flex'>
                <img className='w-16 mr-8' src={fb} alt = 'fb'></img>
                <img className='w-16 mr-8' src={insta} alt='insta'></img>
                <img className='w-16' src={twit} alt='twit'></img>
            </div>
        </div>
    </div>
  )
}

export default Footer;
