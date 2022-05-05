import React from 'react'

const ContactForm = () => {

  const handleSubmit = (e) => {

  }


  return (
    <div className='mb-32 flex items-center justify-center text-2xl'>
      <form className='flex items-center justify-center' onSubmit={e => handleSubmit(e)}>
        <div className='p-24'>
          <div className='mb-16'>
            <label for='name'>
              <input className='py-2 pl-2' placeholder='Name' id='name'/>
            </label>
          </div>
          <br />

          <div className='mb-16'>
            <label for='email'>
              <input className='py-2 pl-2' placeholder='Email' id='email'/>
            </label>
            </div>
          <br />

          <div className='mb-16'>
            <label for='business'>
              <input className='py-2 pl-2' placeholder='Business Name' id='business'/>
            </label>
            </div>
          <br />

          <div className='mb-16'>
            <label for='phone'>
              <input className='py-2 pl-2' placeholder='Phone' id='phne'/>
            </label>
          </div>
        </div>
        


        <div className='flex flex-col'>
          <h3 className='mb-16 text-5xl font-semibold self-center'>What type of Brewery?</h3>
          <div className='mb-12 flex flex-row items-start justify-start'>
            <div className='mb-12 px-8'>
              <label className='pr-4' for='three_teir'>
                  Three-Tier System
                <input type='radio' id='three_teir' name="function" value='three_teir' className='ml-4'/>
              </label>
            </div>

            <div className='mb-12 px-8'>
              <label for='two_teir'>
                  Two-Tier System
                <input type='radio' id='two-teir' name="function" value='two_teir' className='ml-4'/>
              </label>
            </div>
            
            <div className='mb-12 px-8'>
              <label for='direct_sales'>
                  Direct Sales
                <input type='radio' id='direct_sales' name="function" value='direct_sales' className='ml-4'/>
              </label>
            </div>
          </div>
          <br />
        
          
          <h3 className='mb-16 text-5xl font-semibold self-center'>What Kind of Brewery?</h3>
          <div className='mb-12 flex flex-row justify-center'>
            <div className='mb-12 px-8'>
              <label for='brewpub' >
                  BrewPub
                <input type='radio' id='brewpub' name="size" value='brewpub' className='ml-4'/>
              </label>
            </div>

            <div className='mb-12 px-8'>
              <label for='taproom'>
                  Taproom
                <input type='radio' id='taproom' name="size" value='taproom' className='ml-4'/>
              </label>
            </div>

            <div className='mb-12 px-8'>
              <label for='regional_brewery'>
                  Regional Brewery
                <input type='radio' id='regional_brewery' name="size" value='regional_brewery' className='ml-4'/>
              </label>
            </div>
          </div>
          <div className='self-center justify-self-center'>
            <textarea className='p-2' placeholder='What is your end goal? What is the "Win"??' rows="7" cols="45"></textarea>
          </div>
        </div>
        
      </form>
    </div>
  )
}

export default ContactForm