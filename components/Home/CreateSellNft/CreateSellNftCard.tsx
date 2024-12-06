'use client'
import React from 'react'
import Image from 'next/image'

type Props = {
    image: string,
    title: string
}

const CreateSellNftCard = ({image, title}:Props) => {
  return (
    <div>
      <Image src={image} alt={title} width={60} height={60} className='mx-auto' />
      <h3 className="mt-8 mb-2 text-center text-lg text-blue-950 font-bold">{title}</h3>
      <p className="text-sm text-gray-500 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam pariatur vero dicta non quod, reiciendis repellendus voluptatibus laudantium doloribus molestiae.</p>
    </div>
  )
}

export default CreateSellNftCard
