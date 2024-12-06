'use client'
import React from 'react'
import Image from 'next/image'

type Props = {
    data: {
        id: number;
        image: string;
        name: string;
        eth: number;
    }
}

const TopCollectionCard = ({data}:Props) => {
  return (
    <div className='rounded-2xl hover:shadow-md transition-all duration-200 border-2 cursor-pointer border-gray-300 border-opacity-30 p-5'>
      <div className='flex items-center gap-4'>
        <Image src={data.image} alt={data.name} width={48} height={48}  />

        <div className="flex flex-col gap-1">
            <h3 className="font-bold text-base">{data.name}</h3>
            <span className='text-gray-500 text-sm'>{data.eth} ETH</span>
        </div>
      </div>
      
    </div>
  )
}

export default TopCollectionCard
