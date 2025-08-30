import Link from 'next/link';
import React from 'react'
import Button from './Button';
import bgBoostDesktop from '@/assets/bg-boost-desktop.png'

const SubFooter = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center py-15 px-5  bg-[#231b3af5]' style={{ backgroundImage: `url(${bgBoostDesktop.src})` }}>
            <h1 className='text-3xl font-bold text-gray-200 text-center'>Boost your links today</h1>
            <Link href=''><Button text={'Get Started'} color={'#8b3dff'} rounded={'20px'} /></Link>
        </div>
    )
}

export default SubFooter;
