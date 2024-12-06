import React from 'react'
import CreateSellNftCard from './CreateSellNftCard'

const CreateSellNft = () => {
  return (
    <div className='pt-16 pb-20'>
      <h2 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Create and Sell your NFTs
      </h2>
      <div className="w-[80%] mt-8 md:mt:16 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
        <div className="">
            <CreateSellNftCard image="/images/p1.png" title="1. Set up your wallet"/>
        </div>
        <div className="">
            <CreateSellNftCard image="/images/p2.png" title="2. Create your collection"/>
        </div>
        <div className="">
            <CreateSellNftCard image="/images/p3.png" title="3. Add your NFTs"/>
        </div>
        <div className="">
            <CreateSellNftCard image="/images/p4.png" title="4. List Them For Sell"/>
        </div>
      </div>
    </div>
  )
}

export default CreateSellNft
