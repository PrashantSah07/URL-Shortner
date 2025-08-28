import React from 'react'
import Button from './Button'
import groupImg from "../assets/Group.png";
import dottedBG from '@/assets/dotted.png'
import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 flex lg:gap-0 gap-14 flex-col-reverse items-center'>
            <div className='2xl:pl-30 xl:pl-20 md:pl-10 pl-5 lg:pr-0 md:pr-10 pr-5 flex flex-col gap-7 relative w-full broder'>
                <Image src={dottedBG} className='lg:h-max h-[400px] w-[800px] absolute opacity-20 xl:-top-20 lg:-top-15 -top-10 xl:left-10 left-0' alt='' />
                <h1 className='xl:text-6xl text-5xl font-bold text-gray-800'>More than just shortner links</h1>
                <p className='text-yellow-400 font-medium lg:w-full max-w-[500px] xl:text-[22px] sm:text-[20px] text-[18px] relative z-1'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                <Link href=''><Button text={'Get Started'} color={'#2ACFCF'} rounded={'50px'} /></Link>
            </div>
            <div className=' flex justify-end w-full'>
                <Image src={groupImg} className="max-w-[600px] ml-5" alt='group' />
            </div>
        </div>
    )
}

export default Home;
