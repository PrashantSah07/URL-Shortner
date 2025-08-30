import Link from 'next/link';
import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 lg:gap-0 gap-y-10 justify-between xl:px-30 lg:px-10 px-5 bg-[#0a0a0a] text-white pt-10 pb-20'>
      <Link href=''><h1 className='text-[22px] font-bold text-gray-200'>EasyURL</h1></Link>
      <div className='flex flex-col gap-5'>
        <h2 className='font-medium text-gray-200'>Features</h2>
        <ul className='flex flex-col gap-1 text-gray-400 text-[14px]'>
          <Link href=''>Link shortening</Link>
          <Link href=''>Branded Links</Link>
          <Link href=''>Analytics</Link>
        </ul>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='font-medium text-gray-200'>Resources</h2>
        <ul className='flex flex-col gap-1 text-gray-400 text-[14px]'>
          <Link href=''>Blog</Link>
          <Link href='' className='text-[#fff]'>Developers</Link>
          <Link href=''>Support</Link>
        </ul>
      </div>
      <div className='flex flex-col gap-5'>
        <h2 className='font-medium text-gray-200'>Company</h2>
        <ul className='flex flex-col gap-1 text-gray-400 text-[14px]'>
          <Link href=''>About</Link>
          <Link href=''>Our Team</Link>
          <Link href=''>Careers</Link>
          <Link href=''>Contact</Link>
        </ul>
      </div>
      <div className='flex gap-4 h-fit text-gray-200'>
        <Link href=''><IoLogoFacebook size={20} /></Link>
        <Link href=''><FaTwitter size={20} /></Link>
        <Link href=''><FaSquarePinterest size={20} /></Link>
        <Link href=''><FaInstagram size={20} /></Link>
      </div>
    </div>
  )
}

export default Footer;
