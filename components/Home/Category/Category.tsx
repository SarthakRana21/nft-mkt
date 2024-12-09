'use client'

import React from 'react'
import dynamic from 'next/dynamic';
const CategorySlider = dynamic(() => import('./CategorySlider'), { ssr: false });


const Category = () => {
  return (
    <div className='pt-16 pb-12'>
      <h2 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Trending Categories
      </h2>
      <div className="w-[80%] mx-auto mt-8 md:mt-12">
        <CategorySlider />
      </div>
    </div>
  )
}

export default Category
