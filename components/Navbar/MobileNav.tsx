"use client"
import React from 'react'
import Image from 'next/image'
import { BiX } from "react-icons/bi";
import { navLinks } from '@/constants/Constants';
import Link from 'next/link';

type Props = {
  nav:boolean,
  navHandler: ()=>void
}

function MobileNav({navHandler, nav}:Props) {

  const responsiveNav = nav ? 'translate-x-0  ' : 'translate-x-[-100%]';

  return (
    <div className={`transform ${responsiveNav} transition-all duration-500 fixed top-0 left-0 z-[200] h-[100vh] right-0 bottom-0 bg-[#cfcece] `}>
      {/* logo */}
      <div className="">
        <Image src="/images/logo.png" alt="logo" width={180} height={180} />
        <BiX onClick={navHandler} className='w-8 h-8 absolute top-[4rem] text-black z-[202] right-[2.5rem] cursor-pointer'/>
      </div>

      <div className="realtive z-[201] space-y-12 flex flex-col items-cetner h-[60%] justify-center items-center">
        {navLinks.map((item) => (
          <Link href={item.url} key={item.id}>
            <span className="text-2xl font-semibold hover:text-blue-800 transition-all duration-200 text-gray-900" onClick={navHandler}>
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNav
