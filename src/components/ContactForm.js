import React from 'react'

const ContactForm = () => {

  const handleSubmit = (e) => {

  }


  return (
    <div className='h-screen flex items-center justify-center text-2xl'>
      <form className='flex items-center justify-center' onSubmit={e => handleSubmit(e)}>
        <div className='p-24'>
          <div className='mb-12'>
            <label >
         
              <input placeholder='Name'/>
            </label>
          </div>
          <br />

          <div className='mb-12'>
            <label>
              
              <input placeholder='Email'/>
            </label>
            </div>
          <br />

          <div className='mb-12'>
            <label>
              
              <input placeholder='Business Name'/>
            </label>
            </div>
          <br />

          <div className='mb-12'>
            <label>
              
              <input placeholder='Phone'/>
            </label>
          </div>
        </div>


        <div>
          <h3>What type of Brewery?</h3>

          <div className='mb-12'>
            <label>
                Three-Tier System
              <input type='checkbox' />
            </label>
          </div>

          <div className='mb-12'>
            <label>
                Two Tier System
              <input type='checkbox'/>
            </label>
          </div>
          
          <div className='mb-12'>
            <label>
                Direct Sales
              <input type='checkbox'/>
            </label>
          </div>
          <br />
        
          
          <h3>What Kind of Brewery?</h3>
          <div className='flex flex-row'>
            <div className='mb-12'>
              <label>
                  BrewPub
                <input type='checkbox'/>
              </label>
            </div>

            <div className='mb-12'>
              <label>
                  Taproom
                <input type='checkbox'/>
              </label>
            </div>

            <div className='mb-12'>
              <label>
                  Regional Brewery
                <input type='checkbox'/>
              </label>
            </div>
          </div>
          
        </div>
        <div className=''>
          <textarea placeholder='What is your end goal? What is the "Win"??'></textarea>
        </div>
      </form>
    </div>
  )
}

export default ContactForm