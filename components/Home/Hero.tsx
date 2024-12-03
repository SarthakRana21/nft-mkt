import React from 'react'
import Image from 'next/image'

function Hero () {
  return (
    <div className='h-[calc(100vh-13vh)] w-full flex justify-center flex-col'>
      <div className="w-4/5 mx-auto items-center grid grid-cols-1 lg:grid-cols-5 gap-8">

        {/* Image */}
        <div className="col-span-3">
          <Image src={'/images/hero2.png'} alt='' width={700} height={700}/>
        </div>
        {/* text content */}
        <div className="col-span-2">
          <h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-blue-900 font-bold text-left lg:text-center'>Buy, Sell and Collect NFTs</h1>
          <p className="text-sm md:text-[17px] text-gray-700 text-opacity-80 mt-4 font-medium text-left lg:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam impedit incidunt possimus suscipit ad iste, fugit culpa voluptatum sed, earum est, iusto molestiae qui vel ut rerum quos! Unde, cum?</p>
          <div className="flex items-center justify-center lg:justify-start space-x-3 mt-10">
            <button className="w-36 rounded-full py-3 px-8 text-center bg-blue-900 font-semibold text-white transition-all hover:bg-blue-950">Upload</button>
            <button className="w-36 rounded-full py-3 px-8 text-center bg-rose-900 font-semibold text-white transition-all hover:bg-rose-950">Explore</button>
          </div>
        </div>
       
      </div>      
    </div>
  )
}

export default Hero
