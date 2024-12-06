import React from 'react'
import {Hero, Hotbids, TopCollection, CreateSellNft} from '../index'

function Home() {
  return (
    <div>
      <Hero />
      <Hotbids />
      <TopCollection />
      {/* not working react-multi-carousel */}
      {/* <Category />  */}
      <CreateSellNft />
    </div>
  )
}

export default Home
