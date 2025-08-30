'use client'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import groupImg from "../assets/Group.png";
import dottedBG from '@/assets/dotted.png'
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import BlurText from "@/components/BlurText";
import { motion } from 'framer-motion'

const Home = () => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    const currentTheme = mounted ? theme === "system" ? systemTheme : theme : 'light';

    return (
        <div className='lg:grid lg:grid-cols-2 flex lg:gap-0 gap-14 flex-col-reverse items-center'>
            <motion.div className='2xl:pl-30 xl:pl-20 md:pl-10 pl-5 lg:pr-0 md:pr-10 pr-5 flex flex-col gap-7 relative w-full'
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}>
                <Image src={dottedBG} className={`lg:h-max h-[400px] ${currentTheme !== 'light' && 'invert-[0.5]'} w-[800px] absolute opacity-20 xl:-top-20 lg:-top-15 -top-10 xl:left-10 left-0`} alt='dotted-background' />
                {/* <h1 className={`xl:text-6xl relative z-1 text-5xl font-bold ${currentTheme === 'light' ? 'text-gray-800' : 'text-gray-200'} lg:w-full md:w-[80%]`}>Smarter solutions than just short links</h1> */}
                <BlurText text="Smarter solutions than just short links" delay={100} animateBy="words" direction="top" className={`xl:text-6xl relative z-1 text-5xl font-bold ${currentTheme === 'light' ? 'text-gray-800' : 'text-gray-200'} lg:w-full md:w-[80%]`} />
                {/* <p className={`${currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'} font-medium lg:w-full max-w-[500px] xl:text-[22px] sm:text-[20px] text-[18px] relative z-1`}>Create branded links, track performance, and grow your digital presence.</p> */}
                <BlurText text="Create branded links, track performance, and grow your digital presence." delay={100} animateBy="words" direction="top" className={`${currentTheme === 'light' ? 'text-gray-600' : 'text-gray-400'} font-medium lg:w-full max-w-[500px] xl:text-[22px] sm:text-[20px] text-[18px] relative z-1`} />
                {/* <Link href=''><Button text={'Get Started'} color={'#8b3dff'} rounded={'50px'} /></Link> */}
                <Link href=''><button className='bg-[#8b3dff] text-white px-10 py-3 hover:bg-[#7A25FA] duration-200 rounded-full relative z-1 lg:font-semibold font-medium'>Get Started</button></Link>
            </motion.div>
            <motion.div className=' flex justify-center w-full'
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 100 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}>
                <Image src={groupImg} className="w-[95%] ml-5" alt='group' />
            </motion.div>

        </div>
    )
}

export default Home;
