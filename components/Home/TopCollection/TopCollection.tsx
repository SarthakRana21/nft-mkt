import React from 'react'
import { TopCollectionData } from '@/data/data'
import { TopCollectionCard } from '@/components/index'

const TopCollection = () => {
  return (
    <div className='pt-16 pb-12'>
      <h2 className="text-center font-bold text-3xl p-2 md:text-4xl text-blue-950">
        Top Collection Over <span className="text-amber-600">Last 24 Hours</span>
      </h2>
      <div className="mt-16 w-[80%] lg:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 ">
        {TopCollectionData.map(data => (
            <div className="" key={data.id}>
                <TopCollectionCard data={data}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default TopCollection
