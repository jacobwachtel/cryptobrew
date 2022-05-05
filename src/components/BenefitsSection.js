import React from 'react'

const BenefitsSection = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <div className='mx-auto container mt-24 flex  items-center justify-center text-center'>
        <div className='container flex flex-col items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <h2 className='m-8 md:text-4xl sm:text-3xl text-4xl w-3/4'>
            NFTs can create new value in your Business
          </h2>
        </div>
        <div className='container flex flex-col items-center justify-center'>
        <svg class="h-16 w-16 mb-12"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="9" x2="9.01" y2="9" />  <line x1="15" y1="9" x2="15.01" y2="9" />  <circle cx="12" cy="15" r="2" /></svg>
          <h2 className='m-8 md:text-4xl sm:text-3xl text-4xl w-3/4'>
            We work with you to create something extraordinary your patrons will want to purchase.
          </h2>
        </div>
        <div className='container flex flex-col items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
          </svg>
          <h2 className='m-8 md:text-4xl sm:text-3xl text-4xl w-3/4'>
            Each NFT offers the owner "perks" when they visit your brewery.
          </h2>
        </div>
      </div>
      <div className='text-3xl my-40 pb-24'>
        <a href='#' className='transition ease-in-out delay-250 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-500 hover:to-purple-500 hover:-translate-y-1 hover:scale-110 text-white font-bold px-12 py-5 mt-24 rounded-3xl duration-400'>Work with us</a>
      </div>
    </section>
  )
}

export default BenefitsSection

// container mx-auto flex flex-col items-center justify-center

{/* <h3>We are a team of passionate people. We love Crypto, and we love the endless possibilities it creates for small businesses. We are here to help you succeed.</h3> */}