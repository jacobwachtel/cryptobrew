import React from 'react'

const ContactForm = () => {

  const [selectedRadioSizeBtn, setSelectedRadioSizeBtn] = React.useState('brewpub')
  const [selectedRadioTypeBtn, setSelectedRadioTypeBtn] = React.useState('three_teir')

  const isBrewTypeRadioSelected = (value) => selectedRadioTypeBtn === value;
  const isBrewSizeRadioSelected = (value) => selectedRadioSizeBtn === value;

  const handleRadioClickType = (e) => setSelectedRadioTypeBtn(e.target.value)
  const handleRadioClickSize = (e) => setSelectedRadioSizeBtn(e.target.value)
  const handleSubmit = (e) => {

  }


  return (
    <div className='mb-32 flex items-center justify-center text-2xl'>
      <form 
        className='flex flex-col' 
        onSubmit={e => handleSubmit(e)}
      >
        <div className='flex items-center justify-center'>
          <div className='p-24 mr-20 flex flex-col items-center justify-evenly'>
            <div className='mb-16 '>
              <label htmlFor='name'>
                <input 
                  className='py-2 pl-2 rounded-lg focus-ring shadow-md placeholder-slate-400 text-zinc-900' 
                  placeholder='name' 
                  id='name'
                />
              </label>
            </div>
            <br />

            <div className='mb-16'>
              <label htmlFor='email'>
                <input 
                  className='py-2 pl-2 rounded-lg focus-ring shadow-md placeholder-slate-400 text-zinc-900' 
                  placeholder='email' 
                  id='email'
                />
              </label>
              </div>
            <br />

            <div className='mb-16'>
              <label htmlFor='business'>
                <input 
                  className='py-2 pl-2 rounded-lg focus-ring shadow-md placeholder-slate-400 text-zinc-900' 
                  placeholder='business name' 
                  id='business'
                />
              </label>
              </div>
            <br />

            <div className='mb-16'>
              <label htmlFor='phone'>
                <input 
                  className='py-2 pl-2 rounded-lg focus-ring shadow-md placeholder-slate-400 text-zinc-900' 
                  placeholder='phone' 
                  d='phne'
                />
              </label>
            </div>
          </div>
          


          <div className='flex flex-col'>
            <h3 
              className='mb-12 text-4xl font-bold self-center uppercase tracking-wide font-sans'
            >
              What type of sales system?
            </h3>
            <div className='mb-8 flex flex-row items-start justify-start '>
              <div className='mb-12 px-8'>
                <label className='pr-4' htmlFor='three_teir'>
                    Three-Tier System
                  <input 
                    className='ml-4 '
                    type='radio' 
                    id='three_teir' 
                    name="function" 
                    value='three_teir' 
                    checked={isBrewTypeRadioSelected('three_teir')}
                    onChange={handleRadioClickType}
                  />
                </label>
              </div>

              <div className='mb-12 px-8'>
                <label htmlFor='two_teir'>
                    Two-Tier System
                  <input 
                    type='radio' 
                    id='two-teir' 
                    name="function" 
                    value='two_teir' 
                    className='ml-4'
                    checked={isBrewTypeRadioSelected('two_teir')}
                    onChange={handleRadioClickType}
                  />
                </label>
              </div>
              
              <div className='mb-12 px-8'>
                <label htmlFor='direct_sales'>
                    Direct Sales
                  <input 
                    type='radio' 
                    id='direct_sales' 
                    name="function" 
                    value='direct_sales' 
                    className='ml-4'
                    checked={isBrewTypeRadioSelected('direct_sales')}
                    onChange={handleRadioClickType}
                  />
                </label>
              </div>
            </div>
            <br />
          
            
            <h3 
              className='mb-12 text-4xl font-bold self-center uppercase tracking-wide font-sans'
            >
              How big is your brewery?
            </h3>
            <div className='mb-12 flex flex-row justify-center'>
              <div className='mb-12 px-8'>
                <label htmlFor='brewpub' >
                    BrewPub
                  <input 
                    type='radio' 
                    id='brewpub' 
                    name="size" 
                    value='brewpub' 
                    className='ml-4'
                    checked={isBrewSizeRadioSelected('brewpub')}
                    onChange={handleRadioClickSize}
                  />
                </label>
              </div>

              <div className='mb-12 px-8'>
                <label htmlFor='taproom'>
                    Taproom
                  <input 
                    type='radio' 
                    id='taproom' 
                    name="size" 
                    value='taproom' 
                    className='ml-4'
                    checked={isBrewSizeRadioSelected('taproom')}
                    onChange={handleRadioClickSize}
                  />
                </label>
              </div>

              <div className='mb-12 px-8'>
                <label htmlFor='regional_brewery'>
                    Regional Brewery
                  <input 
                    type='radio' 
                    id='regional_brewery' 
                    name="size" 
                    value='regional_brewery' 
                    className='ml-4'
                    checked={isBrewSizeRadioSelected('regional_brewery')}
                    onChange={handleRadioClickSize}
                  />
                </label>
              </div>
            </div>
            <div className='self-center justify-self-center'>
              <textarea 
                className='p-2 rounded-lg focus-ring shadow-md placeholder-slate-400 text-zinc-900' 
                placeholder="What do you hope to gain from this?" 
                rows="7" 
                cols="42"
              >
              </textarea>
            </div>
          </div>
        </div>
        <button 
        type="submit" 
        className='self-center justify-self-center transition ease-in-out delay-250 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-500 hover:to-purple-500 hover:-translate-y-1 hover:scale-105 text-white font-bold px-12 py-5 mt-24 rounded-3xl duration-400'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm