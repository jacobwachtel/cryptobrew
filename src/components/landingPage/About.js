import React from 'react'
import businessOpen from '../../assets/business-open.jpg'

const About = () => {
  return (
    <div className='h-screen flex items-center justify-center text-5xl'>
      <div className='w-2/4 p-16 ml-12 '>
        <img className='object-cover' src={businessOpen} alt='business-open-sign' />
      </div>
      <div className='w-2/4 mx-12'>
        <div>
          <h2>We succeed when you make money!</h2>
          <p className='text-2xl mt-16 w-3/5'>
            We are a team of highly skilled individuals who are passionate about the business of NFT.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About