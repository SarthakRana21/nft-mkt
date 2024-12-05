'use client'

import React from 'react'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { BsHeart } from 'react-icons/bs'

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
                    <div className="rounded-lg border-2 border-gray-400 border-opacity-70 px-2 py-1 text-xs text-green-800 font-bold">{data.eth} ETH</div>
                </div>
                <div className="w-full my-2">
                    <p className="text-sm text-gray-600">Current Bids <span className="text-yellow-600">{data.currentBid}</span> ETH</p>
                </div>
                <div className="flex mt-3 items-center justify-between">
                    <div className="text-blue-950 text-base font-bold text-sm">
                        Place Bid
                    </div>
                    <div className="flex items-center justify-center gap-1 text-red-500">
                        <BsHeart />
                        {data.love}
                    </div>
                </div>
            </div>
        </div>
    </Tilt>
  )
}

export default HotbidCard
