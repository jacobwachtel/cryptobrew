import React from 'react';
import NFT from './NFT';

const NFTCarousel = () => {
  return (
    <>
    NFT Carousel
      <div className='py-48 flex items-center justify-center text-5xl'>
      
        <NFT />
        <NFT />
        <NFT />
      </div>
    </>
  )
}

export default NFTCarousel