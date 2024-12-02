"use client"

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'


function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)
  const navHandler = () => {
    setShowNav(prev => !prev)
  }
  return (
    <div>
      <Nav navHandler={navHandler}/>
      <MobileNav navHandler={navHandler} nav={showNav}/>
    </div>
  )
}

export default ResponsiveNav
