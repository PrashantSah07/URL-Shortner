import React from 'react'
import vector from '@/assets/Vector.png'
import vector2 from '@/assets/Vector2.png'
import customizableIcon from '@/assets/icon-fully-customizable.png'
import Image from 'next/image'

const Statistics = () => {
    return (
        <div className='py-5 flex flex-col gap-10 justify-center items-center text-center max-w-[1000px] mx-auto xl:px-0 px-5'>
            <div className='flex flex-col gap-5 justify-center items-center max-w-[500px]'>
                <h1 className='text-3xl font-bold text-gray-800'>Advanced Statistics</h1>
                <p className='text-[15px] text-gray-700'>Track how your links are performing across the eb with our advanced statistics dashboard.</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 items-center lg:gap-8 gap-4 relative'>
                <div className='flex flex-col gap-2 bg-white rounded-lg text-gray-800 px-5 pb-6 pt-12 text-left relative z-10'>
                    <p className='bg-[#0c102bd9] w-fit p-4 rounded-full absolute -top-7'>
                        <Image src={vector2} className='max-w-[20px]' alt='' />
                    </p>
                    <h1 className='text-[18px] font-semibold'>Brand Recognition</h1>
                    <p className='text-[13px] text-gray-500'>Boost your brand recognition with each click, Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <p className='hidden lg:flex h-2 w-80 bg-[#2ACFCF] absolute left-[100px] bottom-[130px] z-1'></p>
                <div className='lg:mt-14 mt-6 flex flex-col gap-2 bg-white rounded-lg text-gray-800 px-5 pb-6 pt-12 text-left relative z-10'>
                    <p className='bg-[#0c102bd9] w-fit p-4 rounded-full absolute -top-7'>
                        <Image src={vector} className='max-w-[20px]' alt='' />
                    </p>
                    <h1 className='text-[18px] font-semibold'>Detailed Records</h1>
                    <p className='text-[13px] text-gray-500'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>
                <p className='hidden lg:flex h-2 w-50 bg-[#2ACFCF] absolute right-40 bottom-25 z-1'></p>
                <div className='lg:mt-24 mt-6 flex flex-col gap-2 bg-white rounded-lg text-gray-800 px-5 pb-6 pt-12 text-left relative z-10'>
                    <p className='bg-[#0c102bd9] w-fit p-4 rounded-full absolute -top-7'>
                        <Image src={customizableIcon} className='max-w-[20px]' alt='' />
                    </p>
                    <h1 className='text-[18px] font-semibold'>Fully Customizable</h1>
                    <p className='text-[13px] text-gray-500'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics;
