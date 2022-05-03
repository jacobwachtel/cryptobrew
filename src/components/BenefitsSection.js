import React from 'react'

const BenefitsSection = () => {
  return (
    <section className='h-screen flex flex-col items-center justify-center'>
      <div className='mx-auto container flex  items-center justify-center text-center'>
        <h2 className='m-8 md:text-4xl sm:text-3xl text-4xl w-3/4'>
          NFTs can create new value in your Business
        </h2>
        <h2 className='m-8 md:text-4xl sm:text-3xl text-4xl w-3/4'>
          We work with you to create something extraordinary your patrons will want to purchase.
        </h2>
        <h2 className='m-8 md:text-4xl sm:text-3xl text-4xl w-3/4'>
          Each NFT offers the owner "perks" when they visit your brewery.
        </h2>
               
      </div>
      <button className='border-2 border-blue-500 hover:bg-blue-700 text-white font-bold px-10 py-3 mt-24 rounded-3xl text-2xl'>Work with us</button>
    </section>
  )
}

export default BenefitsSection

// container mx-auto flex flex-col items-center justify-center

{/* <h3>We are a team of passionate people. We love Crypto, and we love the endless possibilities it creates for small businesses. We are here to help you succeed.</h3> */}