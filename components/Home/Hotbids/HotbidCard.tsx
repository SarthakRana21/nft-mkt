'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

type Props = {
    data: {
    id: number;
    image: string;
    name: string;
    eth: number;
    currentBid: number;
    love: number;
}
}

const HotbidCard = ({data}:Props) => {
  return (
    <Tilt>
        <div className="rounded-lg border-2 cursor-pointer border-gray-300 border-opacity-30 p-6">
            <div className="w-full h-[180px]">
                <Image src={data.image} alt={data.name} width={300} height={280} className='w-full h-full object-cover' />
            </div>
            <div className="">
                <div className="flex mt-6 items-center justify-between">
                    <h1 className="text-blue-950 hover:text-blue-700 transition-all duration-200 text-base font-bold">{data.name}</h1>
                    <div className="rounded-lg border-2 border-gray-300 border-opacity-30 px-3 text-sm text-green-800 text-semibold">{data.eth}eth</div>
                </div>
            </div>
        </div>
    </Tilt>
  )
}

export default HotbidCard
