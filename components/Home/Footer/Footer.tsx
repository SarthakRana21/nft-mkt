'use client'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='py-12'>
        <div className="w-4/5 mx-auto grid grid-cols-1 border-b-[1.5px] border-b-stale-300 pb-8 md:grid-cols-2 xl:grid-cols-4 gap-8 items-start">
            <div className="">
                <div className="text-2xl text-red-700 font-semibold mb-4 ">NFTFY Shop</div>
                <p className="text-sm text-gray-700 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ad.</p>
                <div className="mt-4 flex items-center space-x-4">
                    <a href="/" target='_blank'><FaFacebook className='w-6 h-6 text-blue-600' /></a>
                    <a href="/" target='_blank'><FaXTwitter className='w-6 h-6' /></a>
                    <a href="/" target='_blank'><FaYoutube className='w-6 h-6 text-red-600' /></a>
                    <a href="/" target='_blank'><FaInstagram className='w-6 h-6 text-pink-700' /></a>        
                </div>
            </div>
            <div className="md:mx-auto mx-0 flex flex-col">
                <h3 className="footer__title">MarketPlace</h3>
                <Link href={'/'} className='footer__link'>All NFT</Link>
                <Link href={'/'} className='footer__link'>Art</Link>
                <Link href={'/'} className='footer__link'>Music</Link>
                <Link href={'/'} className='footer__link'>Collectibies</Link>
                <Link href={'/'} className='footer__link'>Wallets</Link>
            </div>
            <div className="md:mx-auto mx-0 flex flex-col">
                <h3 className="footer__title">Company</h3>
                <Link href={'/'} className='footer__link'>Explore</Link>
                <Link href={'/'} className='footer__link'>About</Link>
                <Link href={'/'} className='footer__link'>Contact Us</Link>
                <Link href={'/'} className='footer__link'>Our Blog</Link>
                <Link href={'/'} className='footer__link'>FAQ</Link>
            </div>
            <div className="md:mx-auto mx-0 flex flex-col">
                <h3 className="footer__title">My Account</h3>
                <Link href={'/'} className='footer__link'>Authors</Link>
                <Link href={'/'} className='footer__link'>Collections</Link>
                <Link href={'/'} className='footer__link'>Author Profile</Link>
                <Link href={'/'} className='footer__link'>Create Item</Link>
                <Link href={'/'} className='footer__link'>NFT Profile</Link>
            </div>
        </div>
        <div className="text-center mt-4 text-sm text-gray-600">Created by Sarthak Rana</div>
    </div>
  )
}

export default Footer
