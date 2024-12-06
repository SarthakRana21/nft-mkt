import React from 'react'
import {Hero, Hotbids, TopCollection, Category} from '../index'

function Home() {
  return (
    <div>
      <Hero />
      <Hotbids />
      <TopCollection />
      {/* not working react-multi-carousel */}
      {/* <Category />  */}
    </div>
  )
}

export default Home
