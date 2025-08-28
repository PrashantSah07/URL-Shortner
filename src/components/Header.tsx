'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion'
import bgShorten from '@/assets/bg-shorten.png'


const Header = () => {
    const [isShow, setIsShow] = useState(false);
    return (
        <>
            <div className='sticky top-0 z-100 bg-white flex justify-between items-center 2xl:px-30 md:px-10 px-5 md:py-7 py-5 shadow'>
                <ul className='flex items-center lg:gap-10 gap-6'>
                    <Link href=''><h1 className='text-[22px] font-bold'>EasyURL</h1></Link>
                    <Link href='' className='hidden sm:flex'><li className='text-[14.5px] lg:font-semibold font-medium text-gray-500'>Features</li></Link>
                    <Link href='' className='hidden sm:flex'><li className='text-[14.5px] lg:font-semibold font-medium text-black'>Pricing</li></Link>
                    <Link href='' className='hidden sm:flex'><li className='text-[14.5px] lg:font-semibold font-medium text-gray-500'>Resources</li></Link>
                </ul>
                <ul className='hidden md:flex items-center lg:gap-10 gap-6 text-[14.5px] lg:font-semibold font-medium text-gray-500'>
                    <Link href=''><li>Login</li></Link>
                    <Link href=''><Button text={'Sign up'} color={'#2ACFCF'} rounded={'20px'} /></Link>
                </ul>
                <button className={`md:hidden flex flex-col ${!isShow && 'gap-1'} p-1 relative`} onClick={() => setIsShow(true)}>
                    <span className={`w-[20px] h-[2px] duration-200 bg-black ${isShow && 'absolute rotate-45'}`}></span>
                    {!isShow && <span className={`w-[20px] h-[2px] bg-black`}></span>}
                    <span className={`w-[20px] h-[2px] duration-200 bg-black ${isShow && '-rotate-45'}`}></span>
                </button>
            </div>
            <AnimatePresence>
                {isShow &&
                    <motion.div className={`md:hidden backdrop-blur-[2px] flex w-[100vw] mx-auto h-[100vh] justify-center items-center left-0 top-0 fixed z-100 duration-200`} onClick={() => setIsShow(false)}
                        initial={{ scale: [1.1] }}
                        whileInView={{ scale: [1] }}
                        transition={{ duration: 0.5, delay: 0 }}
                    >
                        <div className='bg-[#3b3054] w-full rounded-3xl flex flex-col justify-center items-center text-white py-10 px-10 max-w-[400px] sm:mx-auto mx-5 bg-cover' style={{ backgroundImage: `url(${bgShorten.src})` }} onClick={(e) => e.stopPropagation()} >
                            <ul className='flex flex-col gap-5 items-center border-b py-5 w-full'>
                                <Link href=''><li className='text-[15px] font-medium'>Features</li></Link>
                                <Link href=''><li className='text-[15px] font-medium'>Pricing</li></Link>
                                <Link href=''><li className='text-[15px] font-medium'>Resources</li></Link>
                            </ul>
                            <ul className='flex flex-col gap-5 items-center py-5 w-full'>
                                <Link href=''><li className='text-[15px] font-medium'>Login</li></Link>
                                <Link href='' className='w-full'><li className='text-[15px] text-center bg-[#2ACFCF] font-medium w-full px-10 rounded-full py-3'>Sign up</li></Link>
                            </ul>
                        </div>
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Header;
